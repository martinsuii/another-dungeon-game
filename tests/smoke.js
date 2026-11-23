// Browser smoke tests. Runs the real game in headless Chromium with Supabase mocked,
// so no network or database is needed.   Usage: npm test
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');

const ROOT = path.join(__dirname, '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/$/, '/index.html'));
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res);
});

let failed = 0, group = '';
const ok = (c, m) => { console.log((c ? '  ok   ' : '  FAIL ') + m); if (!c) failed++; };
const section = n => { group = n; console.log('\n' + n); };

const CORS = { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*' };
const ROWS = [
  { run_id: '11111111-2222-4333-8444-555555555555', nickname: 'Nesp', quest: true, is_developer: false, floor: 60, gold: 900, seconds: 1200 },
  { run_id: 'aaaaaaaa-2222-4333-8444-555555555555', nickname: 'martinsuii', quest: false, is_developer: true, floor: 12, gold: 100, seconds: 300 },
];

(async () => {
  await new Promise(r => server.listen(0, r));
  const base = 'http://localhost:' + server.address().port;
  const browser = await chromium.launch();
  const errors = [];

  async function newGame(opts = {}) {
    const pg = await browser.newPage({ viewport: { width: 900, height: 600 } });
    pg.rpc = { mode: 'ok', posts: [] };
    pg.on('pageerror', e => errors.push(group + ': ' + e.message));
    pg.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(group + ': ' + m.text()); });
    await pg.route('**/*.supabase.co/**', route => {
      const r = route.request();
      if (r.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: CORS });
      const json = (status, body) => route.fulfill({ status, contentType: 'application/json', headers: CORS, body: JSON.stringify(body) });
      if (r.method() === 'GET') return json(200, ROWS);
      pg.rpc.posts.push(JSON.parse(r.postData() || '{}'));
      if (pg.rpc.mode === 'bad') return json(400, { code: 'P0001', message: 'nickname not allowed' });
      return json(200, 3);
    });
    await pg.goto(base + '/index.html' + (opts.query || ''));
    await pg.evaluate(() => localStorage.clear()); await pg.reload();
    if (opts.start !== false) await pg.click('#start-btn');
    return pg;
  }
  const skipTalk = pg => pg.evaluate(() => { let n = 0; while (talk && n++ < 40) talkAdvance(); });
  const die = (pg, js = '') => pg.evaluate(j => { floor = 7; totalGoldEarned = 120; killCount = 9; runStart = performance.now() - 60000; eval(j); showDeathScreen(); }, js);

  // ---------------------------------------------------------------- menu & settings
  section('menu and settings');
  let pg = await newGame({ start: false });
  ok(await pg.locator('#menu-buttons button').count() === 4, 'main menu has its 4 buttons');
  await pg.click('#settings-btn');
  ok(await pg.locator('.set-row').count() === 4, 'settings panel lists language + 3 toggles');
  await pg.locator('.set-toggle').first().click();
  ok(await pg.evaluate(() => JSON.parse(localStorage.adg_settings).shake === false), 'a setting is saved');
  await pg.selectOption('#settings-lang', 'cz');
  ok(/NASTAVENÍ/.test(await pg.locator('#ui-settings h2').innerText()), 'language switch works');
  await pg.close();

  // ---------------------------------------------------------------- leaderboard
  section('leaderboard');
  pg = await newGame({ start: false });
  await pg.click('#lb-btn'); await pg.waitForSelector('.lb-row:not(.head)');
  const txt = await pg.locator('#lb-list').innerText();
  ok(/Nesp/.test(txt) && /martinsuii/.test(txt), 'top list renders');
  ok(/★/.test(txt), 'quest star shown');
  ok(await pg.locator('.lb-dev-badge').count() === 1, 'developer badge shown once');
  await pg.close();

  pg = await newGame();
  await die(pg);
  ok(await pg.evaluate(() => document.getElementById('lb-submit').style.display === 'block'), 'clean run can submit');
  await pg.fill('#lb-nick', 'x'); await pg.click('#lb-submit-btn');
  ok(pg.rpc.posts.length === 0, 'bad nickname is rejected locally');
  await pg.fill('#lb-nick', 'Tester'); await pg.click('#lb-submit-btn'); await pg.waitForTimeout(300);
  const post = pg.rpc.posts[0] || {};
  ok(post.p_nickname === 'Tester' && post.p_floor === 7 && post.p_gold === 120 && post.p_quest === false, 'submit payload is correct');
  ok(/#3/.test(await pg.locator('#lb-msg').innerText()), 'rank from the server is shown');
  await pg.click('#retry-btn'); await die(pg);
  pg.rpc.mode = 'bad'; await pg.fill('#lb-nick', 'Tester2'); await pg.click('#lb-submit-btn'); await pg.waitForTimeout(300);
  ok(/isn't allowed/.test(await pg.locator('#lb-msg').innerText()), 'filtered nickname gets a friendly message');
  await pg.click('#retry-btn'); await die(pg, 'cheatedThisRun = true;');
  ok(await pg.evaluate(() => document.getElementById('lb-submit').style.display === 'none'), 'cheated run cannot submit');
  await pg.click('#retry-btn'); await die(pg, 'eggRun = true;');
  ok(await pg.evaluate(() => document.getElementById('lb-submit').style.display === 'none'), 'easter egg run cannot submit');
  await pg.close();

  // ---------------------------------------------------------------- bosses
  section('boss attacks');
  pg = await newGame();
  const sigs = await pg.evaluate(() => [10, 20, 30, 40, 50, 110].map(f => { floor = f; initLevel(); return boss.sigs.join(','); }));
  ok(JSON.stringify(sigs) === JSON.stringify(['', 'spread', 'ring', 'rain', 'spread,rain', 'spread,ring,rain']), 'signature attacks per boss tier');
  const rain = await pg.evaluate(() => {
    floor = 40; initLevel(); player.hp = 1000; player.x = 2; player.y = 5; defBonus = 0; player.hasShield = false; dt = 0.1;
    boss.sig = { kind: 'rain', timer: 0.01, total: 1, target: { x: 2, y: 5 }, zones: [{ x: 2, y: 5 }] }; updateBoss(); const on = 1000 - player.hp;
    player.hp = 1000; boss.attackTimer = 99; boss.sig = { kind: 'rain', timer: 0.01, total: 1, target: { x: 2, y: 5 }, zones: [{ x: 6, y: 5 }] }; updateBoss();
    return { on, off: 1000 - player.hp };
  });
  ok(rain.on === 25 && rain.off === 0, 'rain only hurts on marked tiles');
  await pg.close();

  // ---------------------------------------------------------------- archers & elites
  section('archers and elites');
  pg = await newGame();
  const counts = await pg.evaluate(() => {
    const out = {}; for (const f of [19, 21, 36, 51, 66]) { let a = new Set(), e = new Set(); for (let n = 0; n < 20; n++) { floor = f; initLevel(); a.add(enemies.filter(x => x.type === 'archer').length); e.add(enemies.filter(x => x.elite).length); } out[f] = [[...a], [...e]]; } return out;
  });
  ok(JSON.stringify(counts[19]) === '[[0],[0]]', 'none below floor 20');
  ok(JSON.stringify(counts[21]) === '[[1],[1]]' && JSON.stringify(counts[36]) === '[[2],[1]]' && JSON.stringify(counts[66]) === '[[4],[3]]', 'counts scale with depth');
  const arch = await pg.evaluate(() => {
    floor = 21; initLevel(); enemies.length = 0; enemyArrows.length = 0; player.hp = 500; player.x = 2; player.y = 5; defBonus = 0; player.hasShield = false;
    for (let y = 1; y < ROWS - 1; y++) for (let x = 1; x < COLS - 1; x++) map[y][x] = 0;
    enemies.push({ x: 8, y: 5, hp: 5, maxHp: 5, cooldown: 0, moveCooldown: 0, type: 'archer', shotTimer: 0.05 });
    dt = 0.1; updateEnemies(); const fired = enemyArrows.length; for (let i = 0; i < 200 && player.hp === 500; i++) updateEnemyArrows();
    return { fired, dmg: 500 - player.hp };
  });
  ok(arch.fired === 1 && arch.dmg === 12, 'archer fires and the arrow hits for 12');
  await pg.close();

  // ---------------------------------------------------------------- secret terminal room
  section('floor 35 terminal room');
  pg = await newGame();
  const wallKind = c => pg.evaluate(cheat => { companion = { x: 1, y: 1, rx: 1, ry: 1 }; cheatedThisRun = cheat; floor = 35; initLevel(); return secretWall && secretWall.kind; }, c);
  ok(await wallKind(false) === 'term', 'wall exists on floor 35 with martinsuii following');
  ok(await wallKind(true) === null, 'no wall for cheated runs');
  await wallKind(false);
  await pg.evaluate(() => { const i = wallInner(secretWall); player.x = i.x; player.y = i.y; enemies.length = 0; for (let k = 0; k < 4; k++) { player.cooldown = 0; swordAttack(); } });
  ok(await pg.evaluate(() => secretWall.open), 'four hits open the wall');
  await pg.evaluate(() => { const w = secretWall; tryMovePlayer(w.x === 0 ? -1 : w.x === 14 ? 1 : 0, w.y === 0 ? -1 : w.y === 9 ? 1 : 0); });
  ok(await pg.evaluate(() => !!devRoom && npcs.some(n => n.type === 'computer') && !!talk), 'room with a computer, and he starts talking');
  await skipTalk(pg); await pg.waitForTimeout(600); await skipTalk(pg);
  ok(await pg.evaluate(() => companion.seated), 'he sits at the computer');
  await pg.evaluate(() => { player.x = 7; player.y = 4; paused = false; tryMovePlayer(0, -1); });
  ok(await pg.locator('.crash.term').count() === 1, 'bumping the computer opens the terminal');
  await pg.close();

  // ---------------------------------------------------------------- achievements
  section('achievements');
  pg = await newGame();
  await pg.evaluate(() => { enemies.length = 0; enemies.push({ x: player.x + 1, y: player.y, hp: 1, maxHp: 1, cooldown: 0, moveCooldown: 0, type: 'grunt' }); player.cooldown = 0; swordAttack(); checkAchievements(); });
  ok(await pg.evaluate(() => !!JSON.parse(localStorage.adg_ach || '{}').u?.firstBlood), 'first kill unlocks First Blood');
  ok(await pg.locator('#ach-toast.show').count() === 1, 'toast pops up');
  await pg.evaluate(() => { floor = 20; checkAchievements(); });
  ok(await pg.evaluate(() => !!JSON.parse(localStorage.adg_ach).u.floor20), 'depth achievement unlocks');
  await pg.evaluate(() => { floor = 1; showDeathScreen(); saveHighScore(); });
  await pg.evaluate(() => { document.getElementById('ui-death').style.display = 'none'; showBestStats(); });
  await pg.click('#best-ach-btn');
  ok(await pg.locator('.ach-row').count() >= 10 && await pg.locator('.ach-row.got').count() === 2, 'achievement list shows 2 unlocked');
  ok(/\?\?\?/.test(await pg.locator('.ach-row').last().innerText()), 'secret achievements stay hidden until found');
  await pg.close();
  pg = await newGame();
  await pg.evaluate(() => { cheatedThisRun = true; killCount = 500; floor = 60; checkAchievements(); achBump('boss'); });
  ok(await pg.evaluate(() => Object.keys(JSON.parse(localStorage.adg_ach || '{}').u || {}).length === 0), 'cheated runs earn nothing');
  await pg.close();

  ok(errors.length === 0, 'no console or page errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
  await browser.close(); server.close();
  console.log(failed ? `\n${failed} check(s) FAILED` : '\nAll checks passed');
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
