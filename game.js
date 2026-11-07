    document.addEventListener("visibilitychange", () => {
        document.title = document.hidden ? t("loseFocus") : t("gameTitle");
    });

    // ── Translations ──────────────────────────────────────────────────────
    let currentLang = localStorage.getItem('adg_lang') || 'en';

    const T = {
        en: {
            title:"ANOTHER DUNGEON GAME",subtitle:"Just another dungeon game",
            start:"START ADVENTURE",best:"BEST STATS",
            youDied:"YOU DIED",diedSub:"The dungeon claims another soul.",
            floorReached:"FLOOR REACHED",goldCollected:"GOLD COLLECTED",scrapFound:"SCRAP FOUND",
            enemiesSlain:"ENEMIES SLAIN",atkBonus:"ATK BONUS",defBonus:"DEF BONUS",
            tryAgain:"TRY AGAIN",bestRun:"BEST RUN",bestSub:"Your greatest achievement.",
            back:"BACK",controls:"CONTROLS:",wasd:"WASD",move:"Move",
            space:"SPACE",sword:"Sword",mouseF:"MOUSE / F",shootBow:"Shoot Bow",
            eKey:"E KEY",potion:"Potion",forge:"THE FORGE",shield:"SHIELD (2 SCRAP)",
            arrows5:"5 ARROWS (30G)",leave:"LEAVE",seller:"ARTIFACT SELLER",
            witch:"THE WITCH",potion40:"POTION (40G)",buyer:"SCRAP BUYER",
            sellScrap:"SELL SCRAP (+25G)",scrap:"SCRAP:",gold:"GOLD:",key:"KEY:",
            missing:"MISSING",ready:"READY",hp:"HP",floor:"FLOOR",atk:"ATK:",def:"DEF:",
            bossLabel:"The boss of the dungeons",cheater:"I'M A CHEATER",
            cheaterMsg:"Something feels different...",
            secretMsg:"SECRET MODE ACTIVE — you feel lucky!",
            continue:"CONTINUE ›",loseFocus:"You've got people to fight",gameTitle:"Another Dungeon Game",
            powerStone:"POWER STONE",ironCharm:"IRON CHARM",
            cheatLoaded:"🗡 Another Dungeon Game loaded — type Game.help() for cheat commands",
            cheatHelp1:"ANOTHER DUNGEON GAME — CHEATS",
            godMode:"GOD MODE: damage reduced to 1",
            cheaterMode:"CHEATER MODE ON",
            cheaterWarn:"⚠ The bosses know what you did.",
            dpad:"D-PAD",moveHold:"Move (hold)",
            idleLines:["...still there?","Hello?","The dungeon is waiting.","Did you fall asleep?","I'm getting bored.","Zzz..."],
            blocked:"BLOCKED",
            mimicDied:"*puff* +20G",
            lb:"LEADERBOARD",lbSub:"The deepest runs of all time.",lbLoading:"Loading...",lbOffline:"Couldn't reach the leaderboard. Try again later.",
            lbEmpty:"No scores yet. Be the first!",lbNick:"NICKNAME",lbSubmit:"SUBMIT SCORE",lbView:"VIEW LEADERBOARD",
            lbBadNick:"Nickname: 3-12 letters, numbers, space . _ -",lbImplausible:"That run looks too fast to be real.",lbSlow:"Slow down a little.",
            lbAlready:"This run was already submitted.",lbSaved:"Saved! You're #",lbCheat:"Cheated runs can't be submitted.",lbEgg:"Easter egg runs can't be submitted.",lbSending:"Sending...",
            lbCopied:"Copied ID!",lbName:"NAME",lbFloor:"FLOOR",lbGold:"GOLD",lbTime:"TIME",
            devMeet:["Oh! Hello, adventurer. I didn't think anyone would find this room.","I'm martinsuii. I built this dungeon. Long story, lots of coffee.","My best friend Quackers is waiting for me on floor 55. I can't fight, but I can follow.","Will you take me to him? I'll make it worth your while."],
            devAccept:["Thank you! I'll stay right behind you.","Try not to get us killed. Floor 55, remember."],
            devDecline:["Fair enough. I'll be here if you change your mind."],
            devCollapse:["Floor 55... Quackers! We made it...","Wait... something's wrong. This place remembers... every cheat.","It's... killing me... Quackers... I'm sorry..."],
            duckCheater:[{who:"duck",text:"...quack?"},{who:"duck",text:"YOU CHEATER!!"}],
            killerLine:"☠ SADISTIC KILLER — Quackers will never forgive you",
            reunion:[{who:"duck",text:"QUACK!"},{who:"dev",text:"Quackers! Fifty-five floors, and you're still here."},{who:"dev",text:"Thank you, adventurer. You brought me home."},{who:"duck",text:"Quack. Quack quack. (Translation: next time a boss kills you, we step in.)"},{who:"dev",text:"One extra life, on the house. Make it count."}],
            guardianSave:"Not today, adventurer!",
            accept:"I'LL ESCORT YOU",decline:"NOT NOW",
            crack:"*crack*",crumble:"*CRUMBLE*",guardianGot:"+1 LIFE",saved:"SAVED!",
            devRoomLabel:"MARTINSUII'S ROOM",
            friendLine:"★ FRIEND OF THE DEV — Quackers sends his regards",
            promotionThanks:"Thanks for coming to my game!",
        },
        cz: {
            title:"DALŠÍ DUNGEON HRA",subtitle:"Jen další dungeon hra",
            start:"ZAČÍT DOBRODRUŽSTVÍ",best:"NEJLEPŠÍ STATY",
            youDied:"ZEMŘEL JSI",diedSub:"Dungeon si žádá další duši.",
            floorReached:"DOSAŽENÉ PATRO",goldCollected:"NASBÍRÁNO ZLATA",scrapFound:"NALEZENO ŠROTU",
            enemiesSlain:"ZABITO NEPŘÁTEL",atkBonus:"ÚTOK BONUS",defBonus:"OBRANA BONUS",
            tryAgain:"ZKUSIT ZNOVU",bestRun:"NEJLEPŠÍ BĚH",bestSub:"Tvůj největší úspěch.",
            back:"ZPĚT",controls:"OVLÁDÁNÍ:",wasd:"WASD",move:"Pohyb",
            space:"MEZERNÍK",sword:"Meč",mouseF:"MYŠ / F",shootBow:"Střelba z luku",
            eKey:"E",potion:"Lektvar",forge:"KOVÁRNA",shield:"ŠTÍT (2 ŠROTU)",
            arrows5:"5 ŠÍPŮ (30G)",leave:"ODEJÍT",seller:"PRODEJCE ARTEFAKTŮ",
            witch:"ČARODĚJNICE",potion40:"LEKTVAR (40G)",buyer:"VYKUPOVAČ ŠROTU",
            sellScrap:"PRODAT ŠROT (+25G)",scrap:"ŠROT:",gold:"ZLATO:",key:"KLÍČ:",
            missing:"CHYBÍ",ready:"PŘIPRAVEN",hp:"HP",floor:"PATRO",atk:"ÚTK:",def:"OBR:",
            bossLabel:"Vládce dungeonu",cheater:"JSEM CHEATER",
            cheaterMsg:"Něco je jinak...",
            secretMsg:"TAJNÝ REŽIM AKTIVNÍ — máš štěstí!",
            continue:"POKRAČOVAT ›",loseFocus:"Máš lidi k boji",gameTitle:"Další Dungeon Hra",
            powerStone:"KÁMEN SÍLY",ironCharm:"ŽELEZNÝ AMULET",
            cheatLoaded:"🗡 Další Dungeon Hra načtena — napiš Game.help() pro cheaty",
            cheatHelp1:"DALŠÍ DUNGEON HRA — CHEATY",
            godMode:"GOD MODE: poškození sníženo na 1",
            cheaterMode:"CHEATER MODE ZAPNUT",
            cheaterWarn:"⚠ Šéfové vědí, cos provedl.",
            dpad:"KŘÍŽOVKA",moveHold:"Pohyb (držet)",
            idleLines:["...jsi tam?","Haló?","Dungeon čeká.","Usnul jsi?","Nudím se.","Chrr..."],
            blocked:"ZABLOKOVÁNO",
            mimicDied:"*puf* +20G",
            lb:"ŽEBŘÍČEK",lbSub:"Nejhlubší běhy všech dob.",lbLoading:"Načítám...",lbOffline:"Žebříček je nedostupný. Zkus to později.",
            lbEmpty:"Zatím žádné skóre. Buď první!",lbNick:"PŘEZDÍVKA",lbSubmit:"ODESLAT SKÓRE",lbView:"ZOBRAZIT ŽEBŘÍČEK",
            lbBadNick:"Přezdívka: 3-12 písmen, čísel, mezera . _ -",lbImplausible:"Ten běh vypadá příliš rychle na to, aby byl skutečný.",lbSlow:"Zpomal trochu.",
            lbAlready:"Tento běh už byl odeslán.",lbSaved:"Uloženo! Jsi na #",lbCheat:"Běhy s cheaty nelze odeslat.",lbEgg:"Běhy s easter eggem nelze odeslat.",lbSending:"Odesílám...",
            lbCopied:"ID zkopírováno!",lbName:"JMÉNO",lbFloor:"PATRO",lbGold:"ZLATO",lbTime:"ČAS",
            devMeet:["Ó! Ahoj, dobrodruhu. Nečekal jsem, že někdo najde tuhle místnost.","Já jsem martinsuii. Postavil jsem tenhle dungeon. Dlouhý příběh, hodně kávy.","Můj nejlepší přítel Quackers na mě čeká v patře 55. Bojovat neumím, ale chodit za tebou ano.","Doprovodíš mě k němu? Odměním se."],
            devAccept:["Děkuju! Budu hned za tebou.","Ať nás nezabijou. Patro 55, pamatuj."],
            devDecline:["Chápu. Budu tady, kdybys změnil názor."],
            devCollapse:["Patro 55... Quackersi! Dokázali jsme to...","Počkat... něco je špatně. Tohle místo si pamatuje... každý cheat.","Zabíjí mě to... Quackersi... promiň..."],
            duckCheater:[{who:"duck",text:"...kvak?"},{who:"duck",text:"TY CHEATERE!!"}],
            killerLine:"☠ SADISTICKÝ VRAH — Quackers ti to nikdy neodpustí",
            reunion:[{who:"duck",text:"KVAK!"},{who:"dev",text:"Quackersi! Padesát pět pater a ty jsi pořád tady."},{who:"dev",text:"Děkuju, dobrodruhu. Přivedl jsi mě domů."},{who:"duck",text:"Kvak. Kvak kvak. (Překlad: až tě příště zabije boss, zasáhneme.)"},{who:"dev",text:"Jeden život navíc, na účet podniku. Využij ho."}],
            guardianSave:"Dnes ne, dobrodruhu!",
            accept:"DOPROVODÍM TĚ",decline:"TEĎ NE",
            crack:"*prask*",crumble:"*BUM*",guardianGot:"+1 ŽIVOT",saved:"ZACHRÁNĚN!",
            devRoomLabel:"MARTINSUIIHO POKOJ",
            friendLine:"★ PŘÍTEL VÝVOJÁŘE — Quackers zdraví",
            promotionThanks:"Díky, že jste přišli na moji hru!",
        }
    };

    const BOSS_TIERS_CZ = [
        { name: "Strážce Dungeonu",   portrait: "👁",  color: "#f44",
          lines: ["Další blázen vpadl do mých síní.", "Smrdíš povrchem. Sluncem.", "Ten pach tady skončí."],
          cheatLines: ["Počkat... cítím to na tobě.", "Hrabal ses v konzoli, že ano?", "Ubohé. Bojuj čestně, nebo nebojuj vůbec."] },
        { name: "Vex, Dutý Král", portrait: "💀", color: "#a0f",
          lines: ["Zabil jsi mého strážce. Působivé... nebo šťastné.", "Vládl jsem těmto hlubinám tři staletí.", "Budeš skvělým přírůstkem do mé sbírky kostí."],
          cheatLines: ["Smrdíš devtools a zoufalstvím.", "Viděl jsem, jak jsi psal Game.something() jako zbabělec.", "Tři staletí vlády, a ty mě urážíš cheaty."] },
        { name: "Propastná Tlama",      portrait: "🔥", color: "#f80",
          lines: ["HLADOVÝ.", "TAK DLOUHO BEZ MASA.", "POSLOUŽÍŠ."],
          cheatLines: ["HLADOVÝ.", "ALE CHEATERSKÉ MASO CHUTNÁ DIVNĚ.", "STEJNĚ TĚ SEŽERU."] },
        { name: "Vládce Zkázy",    portrait: "⚡", color: "#ff0",
          lines: ["Odvažuješ se vyzvat boha?", "Každé patro, které jsi přežil, byl můj dar.", "Teď ho beru zpět."],
          cheatLines: ["Bůh vidí vše. Včetně tvé konzole.", "Psal jsi příkazy jako vystrašený smrtelník.", "Tvá vypůjčená síla pro mě nic neznamená."] },
        { name: "Bezejmenný",         portrait: "❄️", color: "#0af",
          lines: ["...", "Došel jsi dál než kdokoli před tebou.", "Už nemám slov. Jen konec."],
          cheatLines: ["...", "Nezasloužil sis tuto hloubku.", "Nemám žádný respekt. Jen pohrdání."] },
        { name: "Nyx, Tkadlena Stínů", portrait: "🌑", color: "#a4f",
          lines: ["Stíny mi pošeptaly o tvém příchodu.", "Každý krok hlouběji živí mou temnotu.", "Tvé světlo pohasíná. Umírá."],
          cheatLines: ["I stíny mají oči, podvodníku.", "Viděla jsem každou klávesu, kterou jsi stiskl.", "Tvé triky jsou jen jiskry v mé věčné tmě."] },
        { name: "Korgath, Železný Tyran", portrait: "🗿", color: "#aaa",
          lines: ["Kdo se odvažuje vstoupit do říše Železného Tyrana?", "Mé brnění roztříštilo tisíc čepelí.", "Jsi jen škrábanec na mé oceli."],
          cheatLines: ["Železo se neohýbá před konzolovými triky.", "Tvé cheaty jsou rez. Já jsem kovaná ocel.", "Bojuj se mnou čestně, nebo vůbec."] },
        { name: "Morová Matka",     portrait: "🧪", color: "#6a4",
          lines: ["Čerstvé maso vstupuje do mého hnízda.", "Cítím tvůj strach ve vzduchu.", "Brzy nakrmíš mé děti."],
          cheatLines: ["Mor ignoruje tvé cheaty.", "Tvá vypůjčená síla zhnije jako všechno ostatní.", "Zkonzumovala jsem větší s menším."] },
        { name: "Zapomenutá Věštkyně",     portrait: "🔮", color: "#f0f",
          lines: ["Předpověděla jsem tvůj příchod, smrtelníku.", "Každá cesta, kterou jsi prošel, byla zapsána v mé kouli.", "Každá budoucnost končí tady. Se mnou."],
          cheatLines: ["Nepředpověděla jsem... konzoli.", "Přepisuješ osud svými ubohými funkcemi.", "Ale i osudoví podvodníci musí čelit soudu."] },
        { name: "Primus, První Strážce", portrait: "🏛️", color: "#ff4",
          lines: ["Tak. Došel jsi až na začátek.", "Každý strážce, kterého jsi zabil, byl můj žák.", "Teď čelíš prvnímu. Poslednímu."],
          cheatLines: ["První strážce vidí vše. Včetně DevTools.", "POSTAVIL jsem tento dungeon. Nemůžeš ho ošidit.", "Zavři konzoli. Čel tomu, pro co jsi přišel."] },
    ];

    function t(key) { return T[currentLang][key] || key; }

    function applyLang() {
        currentLang = document.getElementById("lang-select").value;
        localStorage.setItem('adg_lang', currentLang);
        document.querySelector("#ui-menu p").innerText = t("subtitle");
        document.getElementById("start-btn").innerText = t("start");
        document.getElementById("best-btn").innerText = t("best");
        document.querySelector("#ui-death h2").innerText = t("youDied");
        document.querySelector("#ui-death p").innerText = t("diedSub");
        const statKeys = ["floorReached", "goldCollected", "scrapFound", "enemiesSlain", "atkBonus", "defBonus"];
        document.querySelectorAll("#ui-death .stat-label").forEach((el, i) => { el.innerText = t(statKeys[i]); });
        document.getElementById("retry-btn").innerText = t("tryAgain");
        document.querySelector("#ui-best h2").innerText = t("bestRun");
        document.querySelector("#ui-best p").innerText = t("bestSub");
        document.getElementById("best-friend").innerText = t("friendLine");
        document.getElementById("best-killer").innerText = t("killerLine");
        document.querySelectorAll("#ui-best .stat-label").forEach((el, i) => { el.innerText = t(statKeys[i]); });
        document.getElementById("back-btn").innerText = t("back");
        lbApplyLang();
        document.getElementById("dialog-continue").innerText = t("continue");
        document.getElementById("cheater-banner").innerText = t("cheater");
        document.getElementById("forge-title").innerText = t("forge");
        document.getElementById("seller-title").innerText = t("seller");
        document.getElementById("witch-title").innerText = t("witch");
        document.getElementById("buyer-title").innerText = t("buyer");
        document.getElementById("btn-shield").innerText = t("shield");
        document.getElementById("btn-arrows").innerText = t("arrows5");
        document.getElementById("btn-leave-forge").innerText = t("leave");
        document.getElementById("btn-leave-seller").innerText = t("leave");
        document.getElementById("btn-heal").innerText = t("potion40");
        document.getElementById("btn-leave-witch").innerText = t("leave");
        document.getElementById("btn-sell").innerText = t("sellScrap");
        document.getElementById("btn-leave-buyer").innerText = t("leave");
        document.getElementById("boss-label").innerText = t("bossLabel");
        document.querySelector("#controls-tooltip b:first-child").innerText = t("controls");
        // Rebuild the tooltip bodies from translations (not by regex-replacing the
        // current text, which only worked once when going from English).
        const tip = document.getElementById("controls-tooltip");
        tip.querySelector(".desktop-controls").innerHTML =
            `<b>${t("wasd")}</b> - ${t("move")}<br>` +
            `<b>${t("space")}</b> - ${t("sword")}<br>` +
            `<b>${t("mouseF")}</b> - ${t("shootBow")}<br>` +
            `<b>${t("eKey")}</b> - ${t("potion")}`;
        tip.querySelector(".mobile-controls-hint").innerHTML =
            `<b>${t("dpad")}</b> - ${t("moveHold")}<br>` +
            `<b>⚔</b> - ${t("sword")}<br>` +
            `<b>🏹</b> - ${t("shootBow")}<br>` +
            `<b>🧪</b> - ${t("potion")}`;
        document.getElementById("label-hp").innerText = t("hp");
        document.getElementById("label-floor").innerText = t("floor");
        document.getElementById("label-atk").innerText = t("atk");
        document.getElementById("label-def").innerText = t("def");
        document.getElementById("label-scrap").innerText = t("scrap");
        document.getElementById("label-gold").innerText = t("gold");
        document.getElementById("label-key").innerText = t("key");
        const promotionNotice = document.getElementById("promotion-notice");
        if (promotionNotice && promotionNotice.style.display === "block") {
            promotionNotice.innerText = t("promotionThanks");
        }
        updateArtifactButtons();
    }

    document.getElementById("lang-select").addEventListener('change', applyLang);
    document.getElementById("lang-select").value = currentLang;
    setTimeout(applyLang, 0);

    // ── Core game code ────────────────────────────────────────────────────
    const canvas = document.getElementById("ctx");
    const ctx = canvas.getContext("2d");
    const TILE = 40, ROWS = 10, COLS = 15;
    const urlEasterEgg = new URLSearchParams(window.location.search).get('easter') === 'egg';
    const urlPromotion = new URLSearchParams(window.location.search).get('promotion');
    const icons = {};
    const imgList = ['sword', 'shield', 'bow', 'heal', 'github'];
    imgList.forEach(n => { icons[n] = new Image(); icons[n].src = `assets/icons/${n}.png`; });
    icons.fvog = new Image(); icons.fvog.src = 'assets/icons/fvog.jpg';

    // ── Floor type helpers ──────────────────────────────────────────────
    // Pattern per decade: X5 = market, X9 = market, X0 = boss (floor > 0)
    function isMarketFloor(f) { return f % 10 === 5 || f % 10 === 9; }
    function isBossFloor(f)   { return f % 10 === 0 && f > 0; }
    function isKeylessFloor(f){ return isMarketFloor(f) || isBossFloor(f); }

    // ── Boss dialog data ────────────────────────────────────────────────
    let cheaterDetected = false;

    const BOSS_TIERS = [
        { name: "The Dungeon Warden",   portrait: "👁",  color: "#f44",
          lines: ["So. Another fool stumbles into my halls.", "You reek of the surface. Of sunlight.", "That smell ends here."],
          cheatLines: ["Hold on... I can smell it on you.", "You've been fiddling with the console, haven't you?", "Pathetic. Fight me fairly or don't fight me at all."] },
        { name: "Vex, the Hollow King", portrait: "💀", color: "#a0f",
          lines: ["You killed my warden. Impressive... or lucky.", "I have ruled these depths for three centuries.", "You will make a fine addition to my collection of bones."],
          cheatLines: ["You reek of devtools and desperation.", "I watched you type Game.something() like a coward.", "Three centuries of rule, and you insult me with cheats."] },
        { name: "The Abyssal Maw",      portrait: "🔥", color: "#f80",
          lines: ["HUNGRY.", "SO LONG SINCE FLESH.", "YOU WILL DO."],
          cheatLines: ["HUNGRY.", "BUT CHEATER-FLESH TASTES WRONG.", "STILL EAT YOU ANYWAY."] },
        { name: "Sovereign of Ruin",    portrait: "⚡", color: "#ff0",
          lines: ["You dare challenge a god?", "Every floor you've survived was my gift to you.", "Now I take it back."],
          cheatLines: ["A god sees all. Including your console.", "You typed commands like a frightened mortal.", "Your borrowed power means nothing to me."] },
        { name: "The Nameless",         portrait: "❄️", color: "#0af",
          lines: ["...", "You have gone further than any before you.", "I have no words left. Only the end."],
          cheatLines: ["...", "You did not earn this depth.", "I have no respect left. Only contempt."] },
        { name: "Nyx, the Shadow Weaver", portrait: "🌑", color: "#a4f",
          lines: ["The shadows whispered of your coming.", "Every step deeper feeds my darkness.", "Your light flickers. It dies."],
          cheatLines: ["Even shadows have eyes, cheater.", "I saw every key you pressed.", "Your tricks are but sparks in my eternal dark."] },
        { name: "Korgath, the Iron Tyrant", portrait: "🗿", color: "#aaa",
          lines: ["Who dares enter the Iron Tyrant's domain?", "My armor has shattered a thousand blades.", "You are but a scratch on my steel."],
          cheatLines: ["Iron does not bend to console tricks.", "Your cheats are rust. I am forged steel.", "Face me with honor, or not at all."] },
        { name: "The Plague Matriarch",     portrait: "🧪", color: "#6a4",
          lines: ["Fresh flesh enters my nest.", "I can taste your fear in the air.", "Soon you will feed my children."],
          cheatLines: ["Plague ignores your cheats.", "Your borrowed strength will rot like everything else.", "I've consumed greater with less."] },
        { name: "The Forgotten Oracle",     portrait: "🔮", color: "#f0f",
          lines: ["I have foreseen your arrival, mortal.", "Every path you walked was written in my orb.", "Every future ends here. With me."],
          cheatLines: ["I did not foresee... the console.", "You rewrite fate with your petty functions.", "But even fate-benders must face judgment."] },
        { name: "Primus, the First Warden", portrait: "🏛️", color: "#ff4",
          lines: ["So. You made it to the beginning.", "Every warden you killed was my student.", "Now you face the first. The last."],
          cheatLines: ["The first warden sees all. Including DevTools.", "I BUILT this dungeon. You cannot cheat it.", "Close the console. Face what you came for."] },
    ];

    function getBossTier(f) {
        const idx = Math.floor(f / 10) - 1;
        const arr = currentLang === 'cz' ? BOSS_TIERS_CZ : BOSS_TIERS;
        return arr[idx % arr.length];
    }

    let dialogLines = [], dialogIdx = 0;

    function showBossDialog(tier) {
        dialogLines = cheaterDetected ? tier.cheatLines : tier.lines;
        dialogIdx = 0;
        document.getElementById("dialog-name").innerText = tier.name;
        document.getElementById("dialog-name").style.color = tier.color;
        document.getElementById("dialog-portrait").innerText = tier.portrait;
        document.getElementById("dialog-portrait").style.borderColor = tier.color;
        document.getElementById("dialog-text").innerText = dialogLines[0];
        document.getElementById("menu-dialog").style.display = "flex";
        paused = true;
    }

    function dialogNext() {
        dialogIdx++;
        if (dialogIdx < dialogLines.length) {
            document.getElementById("dialog-text").innerText = dialogLines[dialogIdx];
        } else {
            document.getElementById("menu-dialog").style.display = "none";
            paused = false;
            startLoop();
        }
    }

    // ── State ───────────────────────────────────────────────────────────
    let gameActive = false, paused = false;
    let floor = 1, gold = 0, scrap = 0, atkBonus = 0, defBonus = 0;
    let killCount = 0, easterClicks = 0, easterEgg = false, rainbowPlayer = false;
    let atkPurchases = 0, defPurchases = 0, cheatedThisRun = false;
    // Runs boosted by a secret mode (not the promotion link, not the martinsuii quest) never reach the leaderboard.
    let eggRun = false;
    let totalGoldEarned = 0, totalScrapFound = 0;
    let player = { x: 1, y: 1, hp: 200, heals: 2, hasShield: false, shieldDur: 0, arrows: 10, hasKey: false, cooldown: 0 };
    let mousePos = { x: 0, y: 0 };
    let map = [], visited = [], enemies = [], chests = [], npcs = [], projectiles = [], bossProjectiles = [], orbs = [], keyPos = {x:-1,y:-1};
    let boss = null;
    let lastMoveDx = 0, lastMoveDy = -1;
    let mobileMoveInterval = null;
    let aimAngle = null;

    // ── Main loop ───────────────────────────────────────────────────────
    // Exactly one requestAnimationFrame chain may run at a time, and all
    // timers/movement use real elapsed time (dt, in seconds) so the game plays
    // at the same speed on 60Hz and 144Hz displays.
    let rafId = null, lastTs = null, dt = 0.016, realDt = 0.016;
    function startLoop() {
        if (rafId !== null) cancelAnimationFrame(rafId);
        lastTs = null;
        rafId = requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        mousePos.x = (e.clientX - rect.left) * scaleX;
        mousePos.y = (e.clientY - rect.top) * scaleY;
    });

    canvas.addEventListener('touchstart', (e) => {
        if (!gameActive || !talk) return;
        e.preventDefault(); talkPointer(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });

    canvas.addEventListener('mousedown', (e) => {
        if (gameActive && talk && e.button === 0) { talkPointer(e.clientX, e.clientY); return; }
        if (!gameActive || paused || e.button !== 0) return;
        if (player.arrows > 0 && player.cooldown <= 0) {
            const centerX = player.x * TILE + TILE/2;
            const centerY = player.y * TILE + TILE/2;
            const angle = Math.atan2(mousePos.y - centerY, mousePos.x - centerX);
            shootBow(angle);
        }
    });

    // ── Easter eggs: idle chatter + mimic chests ────────────────────────
    const IDLE_AFTER = 60;                 // seconds without input before the dungeon talks
    const MIMIC_CHANCE = 0.06;             // per chest
    const MIMIC_MIN_FLOOR = 3;
    const MIMIC_DAMAGE = 80;
    const MIMIC_BITE_TIME = 0.9;           // seconds of bite animation before the hit lands
    const MIMIC_STARE_TIME = 5;            // stare at a revealed mimic this long and it gives up and dies
    const MIMIC_STARE_RANGE = 4;           // tiles (Chebyshev) you must stay within for the stare to count
    const MIMIC_STARE_GOLD = 20;
    let mimicPuffs = [];                   // death animations of mimics that gave up
    let idleTime = 0, flashTimer = 0, shakeTimer = 0, floaters = [];

    function resetIdle() { idleTime = 0; }
    ['keydown', 'mousedown', 'mousemove', 'touchstart'].forEach(ev =>
        window.addEventListener(ev, resetIdle, { passive: true }));

    function addFloater(text, color, tx = player.x, ty = player.y) {
        floaters.push({ x: tx * TILE + 20, y: ty * TILE + 6, text, color, t: 1.0 });
    }

    function mimicStrike() {
        if (player.hasShield && player.shieldDur > 0) {
            player.shieldDur--;
            if (player.shieldDur <= 0) player.hasShield = false;
            addFloater(t("blocked"), "#0af");
        } else {
            const dmg = Math.max(1, MIMIC_DAMAGE - defBonus);
            player.hp -= dmg;
            addFloater("-" + dmg, "#f44");
            flashTimer = 0.35;
        }
        shakeTimer = 0.35;
    }

    // Mimics twitch about once a second (faster and harder the longer you stare at them).
    function mimicTell(c) {
        const f = c.tellPhase || 0, k = Math.min(1, (c.stare || 0) / MIMIC_STARE_TIME);
        const len = 0.2 + 0.1 * k;                                        // jitter lasts a fifth of the cycle
        if (f >= len) return { dx: 0, dy: 0, k };
        const amp = 1.5 + 2 * k;
        return { dx: Math.sin(f / len * Math.PI * 4) * amp, dy: -Math.abs(Math.sin(f / len * Math.PI * 2)), k };
    }

    function updateMimics() {
        for (let i = chests.length - 1; i >= 0; i--) {
            const c = chests[i];
            if (c.type !== 'mimic' || c.biting || !visited[c.y] || !visited[c.y][c.x]) continue;
            if (c.tellPhase === undefined) c.tellPhase = Math.random();      // out of sync with other mimics
            const near = Math.max(Math.abs(c.x - player.x), Math.abs(c.y - player.y)) <= MIMIC_STARE_RANGE;
            c.stare = near ? (c.stare || 0) + dt : 0;
            const period = 1 - 0.65 * Math.min(1, c.stare / MIMIC_STARE_TIME);
            c.tellPhase = (c.tellPhase + dt / period) % 1;
            if (c.stare >= MIMIC_STARE_TIME) {                                // it gives up
                chests.splice(i, 1);
                mimicPuffs.push({ x: c.x, y: c.y, t: 0.6 });
                gold += MIMIC_STARE_GOLD; totalGoldEarned += MIMIC_STARE_GOLD;
                addFloater(t("mimicDied"), "#fc6", c.x, c.y);
            }
        }
        for (let i = mimicPuffs.length - 1; i >= 0; i--) { mimicPuffs[i].t -= dt; if (mimicPuffs[i].t <= 0) mimicPuffs.splice(i, 1); }
    }

    function drawMimicPuffs() {
        mimicPuffs.forEach(m => {
            const p = 1 - m.t / 0.6, cx = m.x * TILE + 20, cy = m.y * TILE + 24;
            ctx.save(); ctx.globalAlpha = 1 - p;
            ctx.fillStyle = "#a60"; ctx.fillRect(cx - 10 * (1 - p), cy - 7 * (1 - p), 20 * (1 - p), 15 * (1 - p));   // shrinking chest
            ctx.fillStyle = "#ccc";
            for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 + p; ctx.beginPath(); ctx.arc(cx + Math.cos(a) * (6 + p * 16), cy + Math.sin(a) * (6 + p * 12), 3 * (1 - p) + 1, 0, Math.PI * 2); ctx.fill(); }
            ctx.restore();
        });
    }

    function updateEasterEggs() {
        updateMimics();
        for (let i = chests.length - 1; i >= 0; i--) {
            const c = chests[i];
            if (!c.biting) continue;
            c.biteTimer -= dt;
            if (c.biteTimer <= 0) { chests.splice(i, 1); mimicStrike(); }
        }
        if (flashTimer > 0) flashTimer -= dt;
        if (shakeTimer > 0) shakeTimer -= dt;
        for (let i = floaters.length - 1; i >= 0; i--) {
            floaters[i].t -= dt; floaters[i].y -= 28 * dt;
            if (floaters[i].t <= 0) floaters.splice(i, 1);
        }
    }

    function drawMimic(c) {
        const p = 1 - Math.max(0, c.biteTimer) / MIMIC_BITE_TIME;      // 0..1
        const dx = Math.sign(player.x - c.x), dy = Math.sign(player.y - c.y);
        const lunge = Math.min(p * 4, 1) * 9;
        const shake = p < 0.25 ? Math.sin(p * 90) * 2 : 0;
        const gap = p < 0.2 ? (p / 0.2) * 8 : 3 + Math.abs(Math.sin((p - 0.2) * Math.PI * 3.5)) * 11;
        const scale = 1 + Math.min(p * 3, 1) * 0.4;
        ctx.save();
        ctx.translate(c.x * TILE + 20 + dx * lunge + shake, c.y * TILE + 26 + dy * lunge);
        ctx.scale(scale, scale);
        if (gap > 0.5) { ctx.fillStyle = "#400"; ctx.fillRect(-10, -gap, 20, gap); }   // mouth
        ctx.fillStyle = "#a60"; ctx.fillRect(-10, 0, 20, 8);                          // body
        ctx.fillStyle = "#d80"; ctx.fillRect(-10, -gap - 7, 20, 7);                   // lid
        ctx.fillStyle = "#fff";
        for (let i = 0; i < 4; i++) {
            const tx = -9 + i * 5;
            ctx.beginPath(); ctx.moveTo(tx, 0); ctx.lineTo(tx + 4, 0); ctx.lineTo(tx + 2, -4); ctx.fill();
            ctx.beginPath(); ctx.moveTo(tx, -gap); ctx.lineTo(tx + 4, -gap); ctx.lineTo(tx + 2, -gap + 4); ctx.fill();
        }
        if (gap > 6) { ctx.fillStyle = "#e48"; ctx.fillRect(-4, -3, 8, 3); }          // tongue
        ctx.fillStyle = "#f00";                                                       // eyes
        ctx.fillRect(-6, -gap - 5, 3, 3); ctx.fillRect(3, -gap - 5, 3, 3);
        ctx.restore();
    }

    function drawIdleBubble() {
        if (idleTime < IDLE_AFTER || talk) return;
        const lines = T[currentLang].idleLines;
        const text = lines[Math.floor((idleTime - IDLE_AFTER) / 10) % lines.length];
        ctx.save();
        ctx.globalAlpha = Math.min(1, (idleTime - IDLE_AFTER) / 0.5);
        ctx.font = "11px 'Courier New', monospace";
        const w = ctx.measureText(text).width + 14, h = 20;
        const px = player.x * TILE + 20;
        const x = Math.max(2, Math.min(canvas.width - w - 2, px - w / 2));
        const above = player.y * TILE - h - 8 >= 0;
        const y = above ? player.y * TILE - h - 6 : player.y * TILE + TILE + 6;
        ctx.fillStyle = "#000"; ctx.strokeStyle = "#0af"; ctx.lineWidth = 1;
        ctx.fillRect(x, y, w, h); ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
        ctx.beginPath();                                                              // tail
        if (above) { ctx.moveTo(px - 4, y + h); ctx.lineTo(px + 4, y + h); ctx.lineTo(px, y + h + 5); }
        else       { ctx.moveTo(px - 4, y); ctx.lineTo(px + 4, y); ctx.lineTo(px, y - 5); }
        ctx.fill();
        ctx.fillStyle = "#cde"; ctx.textBaseline = "middle"; ctx.textAlign = "center";
        ctx.fillText(text, x + w / 2, y + h / 2 + 1);
        ctx.restore();
    }

    function drawFloaters() {
        ctx.save();
        ctx.font = "bold 16px 'Courier New', monospace"; ctx.textAlign = "center";
        floaters.forEach(f => {
            ctx.globalAlpha = Math.max(0, Math.min(1, f.t * 2));
            ctx.fillStyle = "#000"; ctx.fillText(f.text, f.x + 1, f.y + 1);
            ctx.fillStyle = f.color; ctx.fillText(f.text, f.x, f.y);
        });
        ctx.restore();
    }

    // ── Easter egg: the developer's secret room + Quackers ──────────────
    const SECRET_FLOOR = 15, FRIEND_FLOOR = 55, SECRET_WALL_HITS = 4;
    let secretWall = null, devRoom = null, companion = null, tombstone = null, guardian = false, saveFlash = 0, questDone = false;

    // ── Speech-bubble dialogue (secret quest) ───────────────────────────
    // Same look as the idle remarks. Pauses input (paused = true) but keeps drawing;
    // dt is forced to 0 while talking so enemies/bosses freeze.
    const SPEAKERS = { dev: { name: "martinsuii", color: "#5cf" }, duck: { name: "Quackers", color: "#fd0" } };
    let talk = null;

    // lines: strings or {who, text}; who: default speaker key; opts: {choices, onAccept, onDecline, onEnd, at, cameo}
    function startTalk(lines, who, opts = {}) {
        talk = { lines, who, opts, idx: 0, chars: 0, choosing: false, hits: [] };
        paused = true; idleTime = 0;
    }

    function talkLine() {
        const l = talk.lines[talk.idx];
        return typeof l === "string" ? { who: talk.who, text: l } : { who: l.who || talk.who, text: l.text };
    }

    function talkAnchor(who) {
        if (talk.opts.at) return talk.opts.at;
        if (who === 'duck') { const d = npcs.find(n => n.type === 'friend'); if (d) return d; }
        if (who === 'dev') {
            if (companion) return { x: companion.rx, y: companion.ry };
            const n = npcs.find(n => n.type === 'dev' || n.type === 'devdone'); if (n) return n;
        }
        return { x: player.x, y: player.y };
    }

    function updateTalk() {
        if (!talk) return;
        const len = talkLine().text.length;
        talk.chars = Math.min(len, talk.chars + 55 * realDt);
        talk.choosing = !!talk.opts.choices && talk.idx === talk.lines.length - 1 && talk.chars >= len;
        idleTime = 0;
    }

    function finishTalk(result) {
        const o = talk.opts;
        talk = null; paused = false; idleTime = 0;
        if (result === true) { if (o.onAccept) o.onAccept(); }
        else if (result === false) { if (o.onDecline) o.onDecline(); }
        else if (o.onEnd) o.onEnd();
    }

    function talkAdvance() {
        if (!talk || talk.choosing) return;
        const len = talkLine().text.length;
        if (talk.chars < len) { talk.chars = len; return; }                 // first press finishes the typing
        if (talk.idx < talk.lines.length - 1) { talk.idx++; talk.chars = 0; return; }
        if (!talk.opts.choices) finishTalk();
    }

    function talkKey(e) {
        const k = e.key.toLowerCase();
        if (talk.choosing) { if (k === 'y' || k === '1') finishTalk(true); else if (k === 'n' || k === '2') finishTalk(false); return; }
        if (e.key === ' ' || k === 'enter') { e.preventDefault(); talkAdvance(); }
    }

    function talkPointer(clientX, clientY) {
        const r = canvas.getBoundingClientRect();
        const x = (clientX - r.left) * canvas.width / r.width, y = (clientY - r.top) * canvas.height / r.height;
        if (talk.choosing) {
            const h = talk.hits.find(b => x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h);
            if (h) finishTalk(h.accept);
        } else talkAdvance();
    }

    function wrapText(text, maxW) {
        const lines = []; let cur = "";
        text.split(" ").forEach(w => {
            const test = cur ? cur + " " + w : w;
            if (ctx.measureText(test).width > maxW && cur) { lines.push(cur); cur = w; } else cur = test;
        });
        if (cur) lines.push(cur);
        return lines;
    }

    function drawTalk() {
        if (!talk) return;
        const L = talkLine(), sp = SPEAKERS[L.who] || SPEAKERS.dev, a = talkAnchor(L.who);
        if (talk.opts.cameo === 'dev') drawAvatar(a.x * TILE + 20, a.y * TILE + 20, 12);
        ctx.save();
        ctx.font = "11px 'Courier New', monospace";
        const lines = wrapText(L.text, 220), pad = 8, lh = 14, nameH = 14;
        const reserve = !!talk.opts.choices && talk.idx === talk.lines.length - 1;
        const labels = [["[Y] " + t("accept"), true], ["[N] " + t("decline"), false]];
        const bw = labels.map(([s]) => ctx.measureText(s).width + 14);
        let w = Math.max(90, ...lines.map(l => ctx.measureText(l).width)) + pad * 2;
        if (reserve) w = Math.max(w, bw[0] + bw[1] + 8 + pad * 2);
        const h = pad * 2 + nameH + lines.length * lh + (reserve ? 26 : 0);
        const px = a.x * TILE + 20;
        const x = Math.max(2, Math.min(canvas.width - w - 2, px - w / 2));
        const above = a.y * TILE - h - 8 >= 2;
        const y = above ? a.y * TILE - h - 6 : Math.min(canvas.height - h - 2, a.y * TILE + TILE + 6);
        ctx.globalAlpha = 0.95; ctx.fillStyle = "#000"; ctx.fillRect(x, y, w, h); ctx.globalAlpha = 1;
        ctx.strokeStyle = sp.color; ctx.lineWidth = 1; ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
        const tx = Math.max(x + 10, Math.min(x + w - 10, px));                          // tail
        ctx.fillStyle = "#000"; ctx.beginPath();
        if (above) { ctx.moveTo(tx - 4, y + h); ctx.lineTo(tx + 4, y + h); ctx.lineTo(px, y + h + 5); }
        else       { ctx.moveTo(tx - 4, y); ctx.lineTo(tx + 4, y); ctx.lineTo(px, y - 5); }
        ctx.fill();
        ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
        ctx.font = "bold 10px 'Courier New', monospace"; ctx.fillStyle = sp.color;
        ctx.fillText(sp.name, x + pad, y + pad + 8);
        ctx.font = "11px 'Courier New', monospace"; ctx.fillStyle = "#cde";
        let left = Math.floor(talk.chars);
        lines.forEach((ln, i) => { ctx.fillText(ln.slice(0, Math.max(0, left)), x + pad, y + pad + nameH + i * lh + 10); left -= ln.length + 1; });
        talk.hits = [];
        if (reserve && talk.choosing) {
            let bx = x + pad; const by = y + h - pad - 17;
            labels.forEach(([label, accept], i) => {
                const hover = mousePos.x >= bx && mousePos.x <= bx + bw[i] && mousePos.y >= by && mousePos.y <= by + 17;
                ctx.fillStyle = accept ? (hover ? "#052" : "#031") : (hover ? "#500" : "#300");
                ctx.fillRect(bx, by, bw[i], 17);
                ctx.strokeStyle = accept ? "#0a4" : "#911"; ctx.strokeRect(bx + 0.5, by + 0.5, bw[i] - 1, 16);
                ctx.fillStyle = accept ? "#0f8" : "#f44"; ctx.textBaseline = "middle"; ctx.fillText(label, bx + 7, by + 9);
                talk.hits.push({ x: bx, y: by, w: bw[i], h: 17, accept });
                bx += bw[i] + 8;
            });
        } else if (talk.chars >= L.text.length && Math.floor(performance.now() / 400) % 2 === 0) {
            ctx.fillStyle = sp.color; ctx.fillText("▸", x + w - pad - 6, y + h - pad + 1);   // press to continue
        }
        ctx.restore();
    }

    function friendUnlocked() { try { return localStorage.getItem('adg_friend') === '1'; } catch (e) { return false; } }

    // Border walls at least 3 tiles (Chebyshev) from every shop, the start and the exit.
    function pickSecretWall() {
        const avoid = npcs.concat([{ x: 1, y: 1 }, { x: COLS - 2, y: ROWS - 2 }]);
        const cand = [];
        const add = (x, y) => { if (avoid.every(n => Math.max(Math.abs(n.x - x), Math.abs(n.y - y)) >= 3)) cand.push({ x, y }); };
        for (let x = 1; x < COLS - 1; x++) { add(x, 0); add(x, ROWS - 1); }
        for (let y = 1; y < ROWS - 1; y++) { add(0, y); add(COLS - 1, y); }
        const w = cand[Math.floor(Math.random() * cand.length)];
        secretWall = { x: w.x, y: w.y, hits: 0, open: false };
    }

    function wallInner(w) { return { x: w.x === 0 ? 1 : w.x === COLS - 1 ? COLS - 2 : w.x, y: w.y === 0 ? 1 : w.y === ROWS - 1 ? ROWS - 2 : w.y }; }

    function hitSecretWall() {
        const w = secretWall;
        if (!w || w.open || devRoom) return;
        if (Math.abs(w.x - player.x) > 1 || Math.abs(w.y - player.y) > 1) return;
        const inner = wallInner(w);
        w.hits++;
        if (w.hits >= SECRET_WALL_HITS) { w.open = true; map[w.y][w.x] = 3; shakeTimer = 0.4; addFloater(t("crumble"), "#fc6", inner.x, inner.y); }
        else { shakeTimer = 0.12; addFloater(t("crack"), "#aaa", inner.x, inner.y); }
    }

    function enterDevRoom() {
        devRoom = { map, visited, npcs, enemies, chests, orbs };
        map = []; visited = [];
        for (let y = 0; y < ROWS; y++) { map[y] = []; visited[y] = []; for (let x = 0; x < COLS; x++) { map[y][x] = (x >= 4 && x <= 10 && y >= 2 && y <= ROWS - 2) ? 0 : 1; visited[y][x] = true; } }
        map[ROWS - 1][7] = 3;                           // doorway back, bottom wall
        enemies = []; chests = []; orbs = []; npcs = [];
        if (!companion) npcs.push({ x: 7, y: 3, type: 'dev', color: '#5cf' });
        player.x = 7; player.y = ROWS - 2;
        if (companion) { companion.x = companion.rx = player.x; companion.y = companion.ry = player.y; }
    }

    function leaveDevRoom() {
        const inner = wallInner(secretWall);
        ({ map, visited, npcs, enemies, chests, orbs } = devRoom);
        devRoom = null;
        player.x = inner.x; player.y = inner.y;
        if (companion) { companion.x = companion.rx = player.x; companion.y = companion.ry = player.y; }
    }

    function talkDev() {
        const L = T[currentLang];
        startTalk(L.devMeet, 'dev', {
            choices: true,
            onAccept: () => {
                const d = npcs.find(n => n.type === 'dev') || player;
                companion = { x: d.x, y: d.y, rx: d.x, ry: d.y };       // he steps out from where he stood
                npcs = npcs.filter(n => n.type !== 'dev');
                startTalk(L.devAccept, 'dev');
            },
            onDecline: () => startTalk(L.devDecline, 'dev'),
        });
    }

    function reuniteFriend(friend) {
        startTalk(T[currentLang].reunion, 'dev', { onEnd: () => {
            guardian = true; questDone = true; companion = null; saveFlash = 0.6;
            friend.inert = true;
            npcs.push({ x: friend.x + 1, y: friend.y, type: 'devdone', inert: true, color: '#5cf' });
            try { localStorage.setItem('adg_friend', '1'); } catch (e) {}
            addFloater(t("guardianGot"), "#fd0");
        } });
    }

    function killerMarked() { try { return localStorage.getItem('adg_killer') === '1'; } catch (e) { return false; } }

    // Cheated run reaches 55: the dungeon kills the dev, Quackers cries "YOU CHEATER" and runs away.
    function collapseCompanion() {
        if (!companion) return;
        companion.dying = true;
        try { localStorage.setItem('adg_killer', '1'); } catch (e) {}      // permanent "sadistic killer" mark
        startTalk(T[currentLang].devCollapse, 'dev', { onEnd: () => {
            tombstone = { x: Math.min(COLS - 2, player.x + 1), y: player.y };
            companion = null; shakeTimer = 0.3;
            startTalk(T[currentLang].duckCheater, 'duck', { onEnd: () => {
                const duck = npcs.find(n => n.type === 'friend');
                if (duck) { duck.fleeing = true; duck.inert = true; }
            } });
        } });
    }

    // Called at the end of initLevel for every floor.
    function questOnNewFloor() {
        if (!companion) return;
        companion.x = companion.rx = player.x; companion.y = companion.ry = player.y;
        if (floor === FRIEND_FLOOR && cheatedThisRun) {
            setTimeout(() => { if (gameActive && companion && floor === FRIEND_FLOOR) collapseCompanion(); }, 50);
        }
    }

    // A boss-floor death is cancelled once if the guardian life was earned.
    function guardianSave() {
        if (!guardian || !isBossFloor(floor)) return false;
        guardian = false;
        player.hp = 120; saveFlash = 0.6; shakeTimer = 0.4;
        bossProjectiles = [];
        if (boss) { boss.attackTimer = 3; boss.aiming = false; boss.jumbleActive = false; }
        addFloater(t("saved"), "#fd0");
        startTalk([t("guardianSave")], 'dev', { at: { x: player.x, y: player.y > 1 ? player.y - 1 : player.y + 1 }, cameo: 'dev' });
        return true;
    }

    function updateCompanion() {
        if (saveFlash > 0) saveFlash -= dt;
        npcs.forEach(n => { if (n.fleeing) n.x += 9 * dt; });             // Quackers runs off to the right
        if (npcs.some(n => n.fleeing && n.x > COLS + 1)) npcs = npcs.filter(n => !(n.fleeing && n.x > COLS + 1));
        if (!companion) return;
        const k = Math.min(1, dt * 14);
        companion.rx += (companion.x - companion.rx) * k;
        companion.ry += (companion.y - companion.ry) * k;
    }

    function drawAvatar(px, py, r, opts = {}) {
        ctx.save();
        ctx.translate(px, py);
        if (opts.rot) ctx.rotate(opts.rot);
        if (opts.alpha !== undefined) ctx.globalAlpha = opts.alpha;
        ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fillStyle = "#123"; ctx.fill();
        ctx.save(); ctx.clip();
        const im = icons.fvog;
        if (im && im.complete && im.naturalWidth) ctx.drawImage(im, -r, -r, r * 2, r * 2);
        ctx.restore();
        ctx.lineWidth = 2; ctx.strokeStyle = "#5cf"; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
        ctx.restore();
    }

    function drawDuck(tx, ty) {
        const cx = tx * TILE + 20, cy = ty * TILE + 24 + Math.sin(performance.now() / 250) * 1.2;
        ctx.fillStyle = "#fd0";
        ctx.beginPath(); ctx.ellipse(cx, cy + 2, 12, 9, 0, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx + 8, cy - 8, 7, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#f80"; ctx.beginPath(); ctx.moveTo(cx + 14, cy - 9); ctx.lineTo(cx + 21, cy - 7); ctx.lineTo(cx + 14, cy - 5); ctx.fill();
        ctx.fillStyle = "#ea0"; ctx.beginPath(); ctx.ellipse(cx - 3, cy + 2, 6, 4, 0.3, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#000"; ctx.fillRect(cx + 9, cy - 11, 2, 2);
    }

    function drawQuestNpc(n) {
        if (n.type === 'dev' || n.type === 'devdone') drawAvatar(n.x * TILE + 20, n.y * TILE + 20, 14);
        else if (n.type === 'friend') drawDuck(n.x, n.y);
        else { ctx.fillStyle = n.color; ctx.fillRect(n.x * TILE + 8, n.y * TILE + 8, 24, 24); }
    }

    function drawQuestExtras() {
        const w = secretWall;
        if (w && !devRoom && !w.open && w.hits > 0) {
            const pts = [[20, 3], [17, 11], [23, 17], [16, 24], [22, 31], [18, 38]], n = w.hits === 1 ? 3 : w.hits === 2 ? 4 : 6;
            const ox = w.x * TILE, oy = w.y * TILE, vertical = (w.x === 0 || w.x === COLS - 1);
            ctx.strokeStyle = "#999"; ctx.lineWidth = 1.5; ctx.beginPath();
            for (let i = 0; i < n; i++) { const [a, b] = pts[i]; const X = vertical ? b : a, Y = vertical ? a : b; if (i === 0) ctx.moveTo(ox + X, oy + Y); else ctx.lineTo(ox + X, oy + Y); }
            ctx.stroke(); ctx.lineWidth = 1;
        }
        if (devRoom) { ctx.save(); ctx.fillStyle = "#789"; ctx.font = "10px 'Courier New', monospace"; ctx.textAlign = "center"; ctx.fillText(t("devRoomLabel"), canvas.width / 2, 24); ctx.restore(); }
        if (tombstone) {
            const x = tombstone.x * TILE, y = tombstone.y * TILE;
            ctx.fillStyle = "#889"; ctx.fillRect(x + 12, y + 12, 16, 22); ctx.beginPath(); ctx.arc(x + 20, y + 12, 8, Math.PI, 0); ctx.fill();
            ctx.fillStyle = "#445"; ctx.fillRect(x + 19, y + 8, 2, 12); ctx.fillRect(x + 15, y + 12, 10, 2);
        }
    }

    function drawCompanion() {
        if (!companion) return;
        const px = companion.rx * TILE + 20, py = companion.ry * TILE + 20;
        if (companion.dying) drawAvatar(px, py + 6, 10, { rot: Math.PI / 2, alpha: 0.6 });
        else drawAvatar(px, py, 10);
    }

    function drawQuestHud() {
        if (guardian) {
            drawAvatar(16, 16, 9);
            ctx.save(); ctx.fillStyle = "#fd0"; ctx.font = "bold 11px 'Courier New', monospace"; ctx.textBaseline = "middle"; ctx.fillText("x1", 30, 17); ctx.restore();
        }
        if (saveFlash > 0) { ctx.fillStyle = `rgba(255,215,0,${Math.min(0.45, saveFlash * 1.3)})`; ctx.fillRect(0, 0, canvas.width, canvas.height); }
    }

    function spawnMinions(count) {
        for(let i=0; i<count; i++) {
            let ex, ey;
            do {
                ex = Math.floor(Math.random() * 8) + 4;
                ey = Math.floor(Math.random() * 6) + 2;
            } while (map[ey][ex] !== 0 || enemies.some(e => e.x === ex && e.y === ey));
            enemies.push({x: ex, y: ey, hp: 3, maxHp: 3, cooldown: 0, moveCooldown: 0, type: 'slime', isBossMinion: true});
        }
    }

    function initLevel() {
        let valid = false;
        boss = null; bossProjectiles = [];
        document.getElementById("boss-ui").style.display = "none";

        const isMarket = isMarketFloor(floor);
        const isBoss   = isBossFloor(floor);
        secretWall = null; devRoom = null; tombstone = null;

        while (!valid) {
            map = []; visited = []; enemies = []; chests = []; npcs = []; projectiles = []; orbs = []; player.hasKey = false;

            for (let y = 0; y < ROWS; y++) {
                map[y] = []; visited[y] = [];
                for (let x = 0; x < COLS; x++) {
                    let edge = (x===0||x===COLS-1||y===0||y===ROWS-1);
                    map[y][x] = (edge || (!isMarket && !isBoss && Math.random()<0.2)) ? 1 : 0;
                    visited[y][x] = isBoss || isMarket;
                }
            }

            if (isMarket) {
                map[1][1] = 0; map[ROWS-2][COLS-2] = 2;
                player.hasKey = true;
                npcs.push({x: 2, y: 2, type: 'forge', color: '#888'}, {x: 12, y: 2, type: 'seller', color: '#0af'},
                          {x: 2, y: 7, type: 'witch', color: '#a0f'}, {x: 12, y: 7, type: 'buyer', color: '#fb0'});
                if (floor === SECRET_FLOOR) pickSecretWall();
                if (floor === FRIEND_FLOOR && companion) npcs.push({ x: 7, y: 4, type: 'friend', color: '#fd0', inert: cheatedThisRun });
                valid = true;
                player.x = 1; player.y = 1;
            } else if (isBoss) {
                player.hasKey = false;
                player.x = 2; player.y = 5;
                const tier = getBossTier(floor);
                const bossHp = 60 + (Math.floor(floor / 10) - 1) * 40;
                boss = { x: 11, y: 4, hp: bossHp, maxHp: bossHp, attackTimer: 1.5, aiming: false, aimTarget: null, aimTimer: 0, attackCount: 0, jumbleActive: false, jumbleTimer: 0 };
                document.getElementById("boss-ui").style.display = "block";
                document.getElementById("boss-label").innerText = tier.name.toUpperCase();
                document.getElementById("boss-label").style.color = tier.color;
                spawnMinions(5);
                valid = true;
                // Show dialog after level is set up
                setTimeout(() => { if (gameActive && boss) showBossDialog(tier); }, 50);
            } else {
                map[1][1] = 0; map[ROWS-2][COLS-2] = 2;
                let kx, ky; do { kx = Math.floor(Math.random()*13)+1; ky = Math.floor(Math.random()*8)+1; } while (map[ky][kx] !== 0);
                keyPos = {x: kx, y: ky};
                if (canReach(1, 1, kx, ky) && canReach(kx, ky, COLS-2, ROWS-2)) {
                    for(let i=0; i<3; i++) { let cx, cy; do { cx = Math.floor(Math.random()*13)+1; cy = Math.floor(Math.random()*8)+1; } while (map[cy][cx] !== 0); chests.push({x: cx, y: cy, type: (floor >= MIMIC_MIN_FLOOR && Math.random() < MIMIC_CHANCE) ? 'mimic' : (Math.random()<0.3?'scrap':'gold')}); }
                    for(let i=0; i<Math.min(floor+1, 15); i++) {
                        let ex, ey; do { ex = Math.floor(Math.random()*10)+4; ey = Math.floor(Math.random()*7)+2; } while (map[ey][ex] !== 0);
                        enemies.push({x: ex, y: ey, hp: 6, maxHp: 6, cooldown: 0, moveCooldown: 0, type: 'grunt'});
                    }
                    // Slimes start appearing from floor 3, scale in number
                    const slimeCount = Math.min(Math.floor(floor / 3), 4);
                    for(let i=0; i<slimeCount; i++) {
                         let ex, ey; do { ex = Math.floor(Math.random()*10)+4; ey = Math.floor(Math.random()*7)+2; } while (map[ey][ex] !== 0 || enemies.some(e => e.x===ex && e.y===ey));
                        enemies.push({x: ex, y: ey, hp: 3, maxHp: 3, cooldown: 0, moveCooldown: 0, type: 'slime'});
                    }
                    // Fighters start appearing from floor 16, scale in number
                    const fighterCount = floor >= 60 ? 6 : floor >= 50 ? 5 : floor >= 40 ? 4 : floor >= 30 ? 3 : floor >= 20 ? 2 : floor >= 16 ? 1 : 0;
                    for(let i=0; i<fighterCount; i++) {
                        let ex, ey; do { ex = Math.floor(Math.random()*10)+4; ey = Math.floor(Math.random()*7)+2; } while (map[ey][ex] !== 0 || enemies.some(e => e.x===ex && e.y===ey));
                        enemies.push({x: ex, y: ey, hp: 10, maxHp: 10, cooldown: 0, moveCooldown: 0, type: 'fighter'});
                    }
                    valid = true;
                    player.x = 1; player.y = 1;
                }
            }
        }
        questOnNewFloor();
    }

    function canReach(x1, y1, x2, y2) {
        let queue = [{x: x1, y: y1}];
        let seen = new Set([`${x1},${y1}`]);
        while(queue.length > 0) {
            let {x, y} = queue.shift();
            if (x === x2 && y === y2) return true;
            [[0,1],[0,-1],[1,0],[-1,0]].forEach(([dx, dy]) => {
                let nx = x+dx, ny = y+dy;
                if (ny >= 0 && ny < ROWS && nx >= 0 && nx < COLS && map[ny][nx] !== 1 && !seen.has(`${nx},${ny}`)) {
                    seen.add(`${nx},${ny}`); queue.push({x: nx, y: ny});
                }
            });
        }
        return false;
    }

    let promotionNoticeTimer = null;

    function showPromotionNotice() {
        const notice = document.getElementById("promotion-notice");
        notice.innerText = t("promotionThanks");
        notice.style.display = "block";
        clearTimeout(promotionNoticeTimer);
        promotionNoticeTimer = setTimeout(() => { notice.style.display = "none"; }, 5000);
    }

    function startGame() {
        gameActive = true; floor = 1; gold = 0; scrap = 0; atkBonus = 0; defBonus = 0; killCount = 0;
        totalGoldEarned = 0; totalScrapFound = 0; cheatedThisRun = false; eggRun = urlEasterEgg; cheaterDetected = false;
        document.getElementById("cheater-skull").style.display = "none";
        atkPurchases = 0; defPurchases = 0;
        idleTime = 0; flashTimer = 0; shakeTimer = 0; floaters = []; mimicPuffs = [];
        secretWall = null; devRoom = null; companion = null; tombstone = null; guardian = false; questDone = false; saveFlash = 0;
        talk = null; paused = false;
        runId = newRunId(); runStart = performance.now(); scoreSubmitted = false;
        player = { x:1, y:1, hp: 200, heals: 2, hasShield: false, shieldDur: 0, arrows: 10, hasKey: false, cooldown: 0 };
        if (urlPromotion === 'presentation') {
            gold += 100; totalGoldEarned += 100;
            showPromotionNotice();
        }
        if (easterEgg) {
            gold += 50; totalGoldEarned += 50;
            rainbowPlayer = true;
            eggRun = true;
            easterEgg = false;
            console.log('%c🥚 SECRET MODE ACTIVE — you feel lucky!', 'color:#ff0; font-size:16px');
        }
        updateArtifactButtons();
        if (urlEasterEgg) { player.hasShield = true; player.shieldDur = 999999; }
        document.getElementById("ui-menu").style.display = "none";
        document.getElementById("ui-death").style.display = "none";
        initLevel(); startLoop();
    }

    // ── Leaderboard (Supabase) ──────────────────────────────────────────
    // The publishable key is meant to be public. The table is read-only for it; scores are
    // only added through the validated submit_score() function. Cheated runs never submit.
    const SUPABASE_URL = "https://ppsoxrnjxhjnzlvsijhr.supabase.co";
    const SUPABASE_KEY = "sb_publishable_7iLewmgsGw-6Ves7ty1Ibg_vOT9qeLt";
    const NICK_RE = /^[A-Za-z0-9 _.-]{3,12}$/;
    let runId = null, runStart = 0, scoreSubmitted = false, lbFrom = "ui-menu";

    function newRunId() {
        if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === "x" ? r : (r & 3 | 8)).toString(16); });
    }

    async function sb(path, opts = {}) {
        const res = await fetch(SUPABASE_URL + path, { ...opts, headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" } });
        const body = await res.json().catch(() => null);
        if (!res.ok) { const e = new Error((body && (body.message || body.error)) || "HTTP " + res.status); e.code = body && body.code; throw e; }
        return body;
    }

    function fmtTime(sec) { const m = Math.floor(sec / 60), s = sec % 60; return m + ":" + String(s).padStart(2, "0"); }
    function myNick() { try { return localStorage.getItem("adg_nick") || ""; } catch (e) { return ""; } }

    function lbErrorText(e) {
        const m = (e && e.message || "").toLowerCase();
        if (m.includes("bad nickname")) return t("lbBadNick");
        if (m.includes("implausible")) return t("lbImplausible");
        if (m.includes("slow down")) return t("lbSlow");
        if (m.includes("duplicate") || (e && e.code === "23505")) return t("lbAlready");
        return t("lbOffline");
    }

    function lbApplyLang() {
        document.getElementById("lb-btn").innerText = t("lb");
        document.querySelector("#ui-lb h2").innerText = t("lb");
        document.querySelector("#ui-lb p").innerText = t("lbSub");
        document.getElementById("lb-back-btn").innerText = t("back");
        document.getElementById("lb-nick").placeholder = t("lbNick");
        document.getElementById("lb-cheat-note").innerText = eggRun && !cheatedThisRun ? t("lbEgg") : t("lbCheat");
        if (!scoreSubmitted) document.getElementById("lb-submit-btn").innerText = t("lbSubmit");
        else document.getElementById("lb-submit-btn").innerText = t("lbView");
    }

    function lbPrepareDeath() {
        const cheated = cheatedThisRun || eggRun;
        document.getElementById("lb-cheat-note").innerText = eggRun && !cheatedThisRun ? t("lbEgg") : t("lbCheat");
        document.getElementById("lb-cheat-note").style.display = cheated ? "block" : "none";
        document.getElementById("lb-submit").style.display = cheated ? "none" : "block";
        const nick = document.getElementById("lb-nick");
        nick.style.display = scoreSubmitted ? "none" : ""; nick.value = nick.value || myNick();
        document.getElementById("lb-msg").innerText = "";
        const btn = document.getElementById("lb-submit-btn"); btn.disabled = false;
        btn.innerText = scoreSubmitted ? t("lbView") : t("lbSubmit");
    }

    async function lbSubmit() {
        const btn = document.getElementById("lb-submit-btn"), msg = document.getElementById("lb-msg");
        if (scoreSubmitted) { openLeaderboard("ui-death"); return; }
        if (cheatedThisRun || eggRun) return;
        const nick = document.getElementById("lb-nick").value.trim();
        if (!NICK_RE.test(nick)) { msg.style.color = "#f84"; msg.innerText = t("lbBadNick"); return; }
        btn.disabled = true; msg.style.color = "#ccc"; msg.innerText = t("lbSending");
        try {
            const rank = await sb("/rest/v1/rpc/submit_score", { method: "POST", body: JSON.stringify({
                p_run_id: runId, p_nickname: nick, p_floor: floor, p_gold: totalGoldEarned, p_kills: killCount, p_quest: questDone,
                p_seconds: Math.max(1, Math.round((performance.now() - runStart) / 1000)) }) });
            try { localStorage.setItem("adg_nick", nick); } catch (e) {}
            scoreSubmitted = true;
            msg.style.color = "#0f8"; msg.innerText = t("lbSaved") + rank;
            document.getElementById("lb-nick").style.display = "none";
            btn.innerText = t("lbView");
        } catch (e) { msg.style.color = "#f84"; msg.innerText = lbErrorText(e); }
        btn.disabled = false;
    }

    // Hold a leaderboard row (~0.5s) to copy that entry's UUID to the clipboard.
    async function copyText(text) {
        try { await navigator.clipboard.writeText(text); return true; } catch (e) {}
        try {
            const ta = document.createElement("textarea"); ta.value = text; ta.style.cssText = "position:fixed;opacity:0;left:-999px";
            document.body.appendChild(ta); ta.select(); const ok = document.execCommand("copy"); ta.remove(); return ok;
        } catch (e) { return false; }
    }
    function attachCopyId(row, id) {
        let timer = null, fired = false;
        const cancel = () => { clearTimeout(timer); timer = null; row.classList.remove("holding"); };
        row.title = id;
        row.addEventListener("pointerdown", e => {
            if (e.button > 0) return;
            fired = false; row.classList.add("holding");
            timer = setTimeout(async () => {
                fired = true; row.classList.remove("holding");
                if (await copyText(id)) {
                    row.classList.add("copied");
                    const tag = document.createElement("span"); tag.className = "lb-copied"; tag.textContent = t("lbCopied"); row.appendChild(tag);
                    setTimeout(() => { row.classList.remove("copied"); tag.remove(); }, 1200);
                }
            }, 500);
        });
        ["pointerup", "pointerleave", "pointercancel"].forEach(ev => row.addEventListener(ev, cancel));
        row.addEventListener("contextmenu", e => e.preventDefault());
    }

    async function openLeaderboard(from) {
        lbFrom = from;
        ["ui-menu", "ui-death", "ui-best"].forEach(id => document.getElementById(id).style.display = "none");
        document.getElementById("ui-lb").style.display = "flex";
        const list = document.getElementById("lb-list");
        const head = `<div class="lb-row head"><span>#</span><span>${t("lbName")}</span><span>${t("lbFloor")}</span><span>${t("lbGold")}</span><span>${t("lbTime")}</span></div>`;
        list.innerHTML = head; const status = document.createElement("div"); status.className = "lb-status"; status.innerText = t("lbLoading"); list.appendChild(status);
        try {
            const rows = await sb("/rest/v1/scores?select=run_id,nickname,quest,floor,gold,seconds&order=floor.desc,gold.desc,seconds.asc&limit=10");
            list.innerHTML = head;
            if (!rows.length) { status.innerText = t("lbEmpty"); list.appendChild(status); return; }
            const me = myNick().toLowerCase();
            rows.forEach((r, i) => {
                const row = document.createElement("div"); row.className = "lb-row" + (r.nickname.toLowerCase() === me ? " me" : "");
                [i + 1, (r.quest ? "\u2605 " : "") + r.nickname, r.floor, r.gold + "G", fmtTime(r.seconds)].forEach(v => { const c = document.createElement("span"); c.textContent = v; row.appendChild(c); });
                if (r.run_id) attachCopyId(row, r.run_id);
                list.appendChild(row);
            });
        } catch (e) { status.innerText = t("lbOffline"); list.innerHTML = head; list.appendChild(status); }
    }

    document.getElementById("lb-btn").onclick = () => openLeaderboard("ui-menu");
    document.getElementById("lb-submit-btn").onclick = lbSubmit;
    document.getElementById("lb-back-btn").onclick = () => {
        document.getElementById("ui-lb").style.display = "none";
        document.getElementById(lbFrom).style.display = "flex";
    };
    document.getElementById("lb-nick").addEventListener("keydown", e => { e.stopPropagation(); if (e.key === "Enter") lbSubmit(); });

    function showDeathScreen() {
        gameActive = false;
        document.getElementById("death-floor").innerText = floor;
        document.getElementById("death-gold").innerText = totalGoldEarned + "G";
        document.getElementById("death-scrap").innerText = totalScrapFound;
        document.getElementById("death-kills").innerText = killCount;
        document.getElementById("death-atk").innerText = "+" + atkBonus;
        document.getElementById("death-def").innerText = defBonus;
        document.getElementById("ui-death").style.display = "flex";
        rainbowPlayer = false;
        saveHighScore();
        lbPrepareDeath();
    }

    function saveHighScore() {
        const current = { floor, gold: totalGoldEarned, scrap: totalScrapFound, kills: killCount, atk: atkBonus, def: defBonus, cheated: cheatedThisRun };
        const saved = loadHighScore();
        // A cheated run never replaces a legitimate record.
        const blocked = saved && current.cheated && !saved.cheated;
        if (!blocked && (!saved || current.floor > saved.floor)) {
            try { localStorage.setItem('adg_highscore', JSON.stringify(current)); } catch (e) {}
        }
    }

    function loadHighScore() {
        try { return JSON.parse(localStorage.getItem('adg_highscore') || 'null'); }
        catch (e) { return null; }
    }

    function showBestStats() {
        const best = loadHighScore();
        if (!best) return;
        if (best.cheated) {
            document.getElementById("cheater-banner").style.display = "block";
        } else {
            document.getElementById("cheater-banner").style.display = "none";
        }
        document.getElementById("best-floor").innerText = best.floor;
        document.getElementById("best-gold").innerText = best.gold + "G";
        document.getElementById("best-scrap").innerText = best.scrap;
        document.getElementById("best-kills").innerText = best.kills;
        document.getElementById("best-atk").innerText = "+" + best.atk;
        document.getElementById("best-def").innerText = best.def;
        document.getElementById("best-friend").style.display = friendUnlocked() ? "block" : "none";
        document.getElementById("best-killer").style.display = killerMarked() ? "block" : "none";
        document.getElementById("ui-menu").style.display = "none";
        document.getElementById("ui-best").style.display = "flex";
    }

    document.getElementById("start-btn").onclick = startGame;
    document.getElementById("retry-btn").onclick = startGame;
    document.getElementById("best-btn").onclick = showBestStats;
    document.getElementById("back-btn").onclick = () => {
        document.getElementById("ui-best").style.display = "none";
        document.getElementById("ui-menu").style.display = "flex";
    };

    document.getElementById("info-trigger").onclick = () => {
        easterClicks++;
        if (easterClicks >= 4 && !easterEgg) {
            easterEgg = true;
            const el = document.getElementById("info-trigger");
            el.innerText = "!";
            el.style.color = "#ff0";
            el.style.borderColor = "#ff0";
            setTimeout(() => { el.innerText = "?"; el.style.color = "#888"; el.style.borderColor = "#888"; }, 1200);
            console.log('%c🥚 Something feels different...', 'color:#ff0; font-size:14px');
        }
    };

    function tryMovePlayer(dx, dy) {
        if (!gameActive || paused) return;
        if (dx !== 0 || dy !== 0) { lastMoveDx = dx; lastMoveDy = dy; }
        let nx = player.x + dx;
        let ny = player.y + dy;
        if (map[ny] && map[ny][nx] !== 1) {
            if (chests.some(c => c.biting)) return;   // frozen while a mimic is chomping
            if (enemies.some(e => !e.dying && e.x === nx && e.y === ny)) return;
            if (boss && nx >= boss.x && nx <= boss.x + 2 && ny >= boss.y && ny <= boss.y + 2) return;
            let npc = npcs.find(n => n.x === nx && n.y === ny);
            if (npc) {
                if (npc.type === 'dev') talkDev();
                else if (npc.type === 'friend' && !npc.inert) reuniteFriend(npc);
                else if (!npc.inert && npc.type !== 'friend') { paused = true; document.getElementById('menu-' + npc.type).style.display = 'flex'; }
                return;
            }
            if (map[ny][nx] === 3) { if (devRoom) leaveDevRoom(); else enterDevRoom(); return; }
            let ch = chests.find(c => c.x === nx && c.y === ny);
            if (ch && ch.type === 'mimic') { ch.biting = true; ch.biteTimer = MIMIC_BITE_TIME; return; }
            if (ch) { if(ch.type === 'scrap') { scrap++; totalScrapFound++; } else { gold += 40; totalGoldEarned += 40; } chests = chests.filter(c => c !== ch); }
            let orb = orbs.find(o => o.x === nx && o.y === ny);
            if (orb) { if(orb.type === 'atk') atkBonus++; else defBonus++; orbs = orbs.filter(o => o !== orb); }
            if (nx === keyPos.x && ny === keyPos.y) player.hasKey = true;
            if (companion) { companion.x = player.x; companion.y = player.y; }
            player.x = nx; player.y = ny;
        }
        if (map[player.y][player.x] === 2 && (player.hasKey || isKeylessFloor(floor))) { floor++; initLevel(); }
    }

    function swordAttack() {
        if (!gameActive || paused || player.cooldown > 0) return;
        hitSecretWall();
        if (boss && Math.abs(player.x - (boss.x+1)) <= 2 && Math.abs(player.y - (boss.y+1)) <= 2) {
            boss.hp -= (2 + atkBonus);
            if (boss.hp <= 0) { killCount++; orbs.push({x: boss.x+1, y: boss.y+1, type: Math.random()<0.5?'atk':'def'}); boss = null; document.getElementById("boss-ui").style.display = "none"; checkBossVictory(); }
        }
        for (let i = enemies.length - 1; i >= 0; i--) { const en = enemies[i]; if (en.dying) continue; if (Math.abs(en.x - player.x) <= 1 && Math.abs(en.y - player.y) <= 1) { en.hp -= (2 + atkBonus); if (en.hp <= 0) { en.dying = true; en.deathTimer = 3.0; if(!en.isBossMinion) { gold += 15; totalGoldEarned += 15; } killCount++; checkBossVictory(); } } }
        player.cooldown = 0.5;
    }

    function shootBow(angle) {
        if (!gameActive || paused || player.arrows <= 0 || player.cooldown > 0) return;
        projectiles.push({ x: player.x + 0.5, y: player.y + 0.5, vx: Math.cos(angle), vy: Math.sin(angle) });
        player.arrows--; player.cooldown = 0.3;
    }

    function healPlayer() {
        if (!gameActive || paused || player.heals <= 0) return;
        player.heals--; player.hp = Math.min(200, player.hp + 60);
    }

    window.onkeydown = e => {
        if (gameActive && talk) { talkKey(e); return; }
        if (!gameActive || paused) return;
        let k = e.key.toLowerCase();
        if (k === 'w') tryMovePlayer(0, -1);
        else if (k === 's') tryMovePlayer(0, 1);
        else if (k === 'a') tryMovePlayer(-1, 0);
        else if (k === 'd') tryMovePlayer(1, 0);
        else if (k === 'e') healPlayer();
        else if (k === 'f') {
            const centerX = player.x * TILE + TILE/2;
            const centerY = player.y * TILE + TILE/2;
            shootBow(Math.atan2(mousePos.y - centerY, mousePos.x - centerX));
        } else if (e.key === ' ') swordAttack();
    };

    function updateEnemies() {
        if (boss && enemies.filter(e => !e.dying).length === 0) spawnMinions(5);
        for (let i = enemies.length - 1; i >= 0; i--) {
            const en = enemies[i];
            if (en.dying) {
                en.deathTimer -= dt;
                if (en.deathTimer <= 0) { enemies.splice(i, 1); }
                continue;
            }
            const isSlime = en.type === 'slime';
            const isFighter = en.type === 'fighter';
            const moveSpeed  = isSlime ? 0.45 : (isFighter ? 1.6 : 1.2);
            const attackDmg  = isSlime ? Math.max(1, 3 - defBonus) : (isFighter ? Math.max(1, 20 - defBonus) : Math.max(1, 10 - defBonus));
            const aggroRange = isSlime ? 12 : 10;

            if (en.cooldown > 0) en.cooldown -= dt;
            if (en.moveCooldown > 0) en.moveCooldown -= dt;
            let d = Math.abs(player.x - en.x) + Math.abs(player.y - en.y);
            if (d === 1 && en.cooldown <= 0) {
                if (player.hasShield && player.shieldDur > 0) { player.shieldDur--; if(player.shieldDur<=0) player.hasShield=false; }
                else player.hp -= attackDmg;
                en.cooldown = 1.0;
            } else if (d < aggroRange && d > 1 && en.moveCooldown <= 0) {
                let dx = player.x > en.x ? 1 : (player.x < en.x ? -1 : 0);
                let dy = player.y > en.y ? 1 : (player.y < en.y ? -1 : 0);
                if (dx !== 0 && map[en.y][en.x+dx] === 0 && !enemies.some(e => !e.dying && e.x === en.x+dx && e.y === en.y)) { en.x += dx; en.moveCooldown = moveSpeed; }
                else if (dy !== 0 && map[en.y+dy][en.x] === 0 && !enemies.some(e => !e.dying && e.x === en.x && e.y === en.y+dy)) { en.y += dy; en.moveCooldown = moveSpeed; }
            }
        }
    }

    function updateProjectiles() {
        for (let i = projectiles.length - 1; i >= 0; i--) {
            let p = projectiles[i]; p.x += p.vx * 0.25 * dt * 60; p.y += p.vy * 0.25 * dt * 60;
            { const tl = map[Math.floor(p.y)]?.[Math.floor(p.x)]; if (tl === 1 || tl === 3) { projectiles.splice(i, 1); continue; } }
            if (boss && p.x > boss.x && p.x < boss.x+3 && p.y > boss.y && p.y < boss.y+3) {
                boss.hp -= (2 + atkBonus); projectiles.splice(i, 1);
                if (boss.hp <= 0) { killCount++; orbs.push({x: boss.x+1, y: boss.y+1, type: Math.random()<0.5?'atk':'def'}); boss = null; document.getElementById("boss-ui").style.display = "none"; checkBossVictory(); }
                continue;
            }
            for (let ei = enemies.length - 1; ei >= 0; ei--) {
                const en = enemies[ei];
                if (en.dying) continue;
                if (Math.abs(p.x - (en.x+0.5)) < 0.4 && Math.abs(p.y - (en.y+0.5)) < 0.4) {
                    const arrowDmg = en.type === 'slime' ? 1 : (2 + atkBonus);
                    en.hp -= arrowDmg;
                    projectiles.splice(i, 1);
                    if (en.hp <= 0) { en.dying = true; en.deathTimer = 3.0; if(!en.isBossMinion) { gold += 15; totalGoldEarned += 15; if(Math.random()<0.3) { scrap++; totalScrapFound++; } } killCount++; checkBossVictory(); }
                    break;
                }
            }
        }
    }

    function updateBoss() {
        if (!boss || paused) return;

        if (boss.jumbleActive) {
            boss.jumbleTimer -= dt;
            if (boss.jumbleTimer <= 0) {
                const jx1 = boss.x - 5, jy1 = boss.y - 5, jx2 = boss.x + 7, jy2 = boss.y + 7;
                if (player.x >= jx1 && player.x <= jx2 && player.y >= jy1 && player.y <= jy2) {
                    if (player.hasShield && player.shieldDur > 0) {
                        player.shieldDur--;
                        if (player.shieldDur <= 0) player.hasShield = false;
                    } else {
                        player.hp -= Math.max(1, 30 - defBonus);
                    }
                    const cx = boss.x + 1.5, cy = boss.y + 1.5;
                    const dx = player.x > cx ? 1 : (player.x < cx ? -1 : 0);
                    const dy = player.y > cy ? 1 : (player.y < cy ? -1 : 0);
                    for (let s = 0; s < 2; s++) {
                        const nx = player.x + dx, ny = player.y + dy;
                        if (map[ny]?.[nx] !== undefined && map[ny][nx] !== 1 && !enemies.some(e => e.x === nx && e.y === ny)) {
                            player.x = nx; player.y = ny;
                        } else break;
                    }
                }
                boss.jumbleActive = false;
                boss.attackCount = (boss.attackCount + 1) % 3;
                boss.attackTimer = 3.0 + Math.random() * 2.0;
            }
        } else if (boss.aiming) {
            boss.aimTimer -= dt;
            if (boss.aimTimer <= 0) {
                const bx = boss.x * TILE + TILE * 1.5;
                const by = boss.y * TILE + TILE * 1.5;
                const tx = boss.aimTarget.x * TILE + TILE / 2;
                const ty = boss.aimTarget.y * TILE + TILE / 2;
                const angle = Math.atan2(ty - by, tx - bx);
                bossProjectiles.push({
                    x: bx / TILE, y: by / TILE,
                    vx: Math.cos(angle) * 0.08,
                    vy: Math.sin(angle) * 0.08
                });
                boss.aiming = false;
                boss.aimTarget = null;
                boss.attackCount = (boss.attackCount + 1) % 3;
                boss.attackTimer = 3.0 + Math.random() * 2.0;
            }
        } else {
            boss.attackTimer -= dt;
            if (boss.attackTimer <= 0) {
                if (boss.attackCount >= 2) {
                    boss.jumbleActive = true;
                    boss.jumbleTimer = 2.0;
                } else {
                    boss.aimTarget = { x: player.x, y: player.y };
                    boss.aimTimer = 2.0;
                    boss.aiming = true;
                }
            }
        }

        for (let i = bossProjectiles.length - 1; i >= 0; i--) {
            const bp = bossProjectiles[i];
            bp.x += bp.vx * dt * 60;
            bp.y += bp.vy * dt * 60;
            if (map[Math.floor(bp.y)]?.[Math.floor(bp.x)] === 1) {
                bossProjectiles.splice(i, 1);
                continue;
            }
            if (Math.abs(bp.x - (player.x + 0.5)) < 0.5 && Math.abs(bp.y - (player.y + 0.5)) < 0.5) {
                if (player.hasShield && player.shieldDur > 0) {
                    player.shieldDur--;
                    if (player.shieldDur <= 0) player.hasShield = false;
                } else {
                    player.hp -= Math.max(1, 15 - defBonus);
                }
                bossProjectiles.splice(i, 1);
            }
        }
    }

    function checkBossVictory() {
        if (!boss && isBossFloor(floor) && enemies.every(e => e.dying)) {
            player.hasKey = true;
            map[ROWS-2][COLS-2] = 2;
        }
    }

    function buyHeal() { if(gold >= 40) { gold -= 40; player.heals++; } }
    function buyArrows() { if(gold >= 30) { gold -= 30; player.arrows += 5; } }
    function buyShield() { if(scrap >= 2) { scrap -= 2; player.hasShield = true; player.shieldDur = 10; } }
    function buyArtifact(type) {
        const count = type === 'atk' ? atkPurchases : defPurchases;
        const price = 300 + (count * 300);
        if (gold >= price) {
            gold -= price;
            if (type === 'atk') { atkBonus++; atkPurchases++; }
            else { defBonus++; defPurchases++; }
            updateArtifactButtons();
        }
    }
    function updateArtifactButtons() {
        document.getElementById("btn-atk").innerText = `${t("powerStone")} (${300 + atkPurchases * 300}G)`;
        document.getElementById("btn-def").innerText = `${t("ironCharm")} (${300 + defPurchases * 300}G)`;
    }
    function sellScrap() { if(scrap >= 1) { scrap -= 1; gold += 25; totalGoldEarned += 25; } }
    function closeMenus() { paused = false; document.querySelectorAll('.ui-panel').forEach(p => { if(p.id !== 'ui-menu' && p.id !== 'ui-death') p.style.display = 'none'; }); }

    // ── Mobile touch controls ────────────────────────────────────────────
    function mobileMoveInDir(dir) {
        if (dir === 'up') tryMovePlayer(0, -1);
        else if (dir === 'down') tryMovePlayer(0, 1);
        else if (dir === 'left') tryMovePlayer(-1, 0);
        else if (dir === 'right') tryMovePlayer(1, 0);
    }

    function startMobileMove(dir) {
        if (mobileMoveInterval) clearInterval(mobileMoveInterval);
        mobileMoveInDir(dir);
        mobileMoveInterval = setInterval(() => mobileMoveInDir(dir), 130);
    }

    function stopMobileMove() {
        if (mobileMoveInterval) { clearInterval(mobileMoveInterval); mobileMoveInterval = null; }
        document.querySelectorAll('.dpad-btn.pressed').forEach(b => b.classList.remove('pressed'));
    }

    document.getElementById('dpad').addEventListener('touchstart', (e) => {
        e.preventDefault();
        const btn = e.target.closest('.dpad-btn');
        if (!btn || !gameActive || paused) return;
        btn.classList.add('pressed');
        startMobileMove(btn.dataset.dir);
    }, { passive: false });

    document.getElementById('dpad').addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const el = document.elementFromPoint(touch.clientX, touch.clientY);
        const btn = el ? el.closest('.dpad-btn') : null;
        if (btn && btn.dataset.dir) {
            document.querySelectorAll('.dpad-btn.pressed').forEach(b => { if (b !== btn) b.classList.remove('pressed'); });
            btn.classList.add('pressed');
            if (mobileMoveInterval) clearInterval(mobileMoveInterval);
            mobileMoveInDir(btn.dataset.dir);
            mobileMoveInterval = setInterval(() => mobileMoveInDir(btn.dataset.dir), 130);
        }
    }, { passive: false });

    document.getElementById('dpad').addEventListener('touchend', (e) => { e.preventDefault(); stopMobileMove(); }, { passive: false });
    document.getElementById('dpad').addEventListener('touchcancel', stopMobileMove);

    function mobileShootBow() {
        const centerX = player.x * TILE + TILE/2;
        const centerY = player.y * TILE + TILE/2;
        shootBow(Math.atan2(mousePos.y - centerY, mousePos.x - centerX));
    }

    // ── Aim joystick ────────────────────────────────────────────────────
    function updateJoystick(touch) {
        const joystick = document.getElementById('aim-joystick');
        const thumb = document.getElementById('aim-thumb');
        const rect = joystick.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const maxR = rect.width / 2 - thumb.offsetWidth / 2 - 2;
        let dx = touch.clientX - cx;
        let dy = touch.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxR) { dx = dx / dist * maxR; dy = dy / dist * maxR; }
        aimAngle = Math.atan2(dy, dx);
        thumb.style.left = `calc(50% + ${dx}px)`;
        thumb.style.top = `calc(50% + ${dy}px)`;
        thumb.style.transform = 'translate(-50%, -50%)';
    }

    function resetJoystick() {
        aimAngle = null;
        const thumb = document.getElementById('aim-thumb');
        thumb.style.left = '50%';
        thumb.style.top = '50%';
        thumb.style.transform = 'translate(-50%, -50%)';
    }

    const aimJs = document.getElementById('aim-joystick');
    aimJs.addEventListener('touchstart', (e) => { e.preventDefault(); updateJoystick(e.touches[0]); }, { passive: false });
    aimJs.addEventListener('touchmove', (e) => { e.preventDefault(); updateJoystick(e.touches[0]); }, { passive: false });
    aimJs.addEventListener('touchend', (e) => { e.preventDefault(); resetJoystick(); }, { passive: false });
    aimJs.addEventListener('touchcancel', resetJoystick);

    document.getElementById('btn-touch-sword').addEventListener('touchstart', (e) => { e.preventDefault(); swordAttack(); }, { passive: false });
    document.getElementById('btn-touch-bow').addEventListener('touchstart', (e) => { e.preventDefault(); mobileShootBow(); }, { passive: false });
    document.getElementById('btn-touch-heal').addEventListener('touchstart', (e) => { e.preventDefault(); healPlayer(); }, { passive: false });

    // ── Console cheat commands ──────────────────────────────────────────
    const _cheat = () => { cheaterDetected = true; cheatedThisRun = true; document.getElementById("cheater-skull").style.display = "block"; };

    window.Game = {
        // Gold & resources
        addGold:   (n = 100)  => { _cheat(); gold += n;  console.log(`%c+${n} gold (total: ${gold})`, 'color:#fb0'); },
        addScrap:  (n = 5)    => { _cheat(); scrap += n; console.log(`%c+${n} scrap (total: ${scrap})`, 'color:#aaa'); },
        setGold:   (n = 999)  => { _cheat(); gold = n;   console.log(`%cGold set to ${gold}`, 'color:#fb0'); },

        // Combat
        addAtk:    (n = 1)    => { _cheat(); atkBonus += n; console.log(`%cATK bonus: +${atkBonus}`, 'color:#f44'); },
        addDef:    (n = 1)    => { _cheat(); defBonus += n; console.log(`%cDEF bonus: ${defBonus}`, 'color:#0af'); },
        heal:      (n = 200)  => { _cheat(); player.hp = Math.min(200, player.hp + n); console.log(`%cHP: ${player.hp}/200`, 'color:#f44'); },
        godMode:   ()         => { _cheat(); defBonus = 999; console.log('%cGOD MODE: damage reduced to 1', 'color:#ff0'); },

        // Items
        addArrows: (n = 50)   => { _cheat(); player.arrows += n; console.log(`%c+${n} arrows (total: ${player.arrows})`, 'color:#8b4513'); },
        addHeals:  (n = 5)    => { _cheat(); player.heals += n;  console.log(`%c+${n} potions (total: ${player.heals})`, 'color:#a0f'); },
        giveShield:()         => { _cheat(); player.hasShield = true; player.shieldDur = 10; console.log('%cShield restored (10 charges)', 'color:#0af'); },

        // Floor navigation
        nextFloor: ()         => { _cheat(); floor++; initLevel(); console.log(`%cJumped to floor ${floor}`, 'color:#0f0'); },
        gotoFloor: (n = 1)    => { _cheat(); if(!gameActive){console.log('%cStart the game first!','color:#f44');return;} floor = Math.max(1, n); initLevel(); console.log(`%cWarped to floor ${floor}`, 'color:#0f0'); },
        getKey:    ()         => { _cheat(); player.hasKey = true; if(map[ROWS-2]) map[ROWS-2][COLS-2] = 2; console.log('%cKey obtained — exit unlocked', 'color:#0f0'); },

        // Nuclear option
        cheater:   ()         => {
            _cheat();
            gold = 9999; scrap = 99; atkBonus = 10; defBonus = 10;
            player.hp = 200; player.heals = 20; player.arrows = 99;
            player.hasShield = true; player.shieldDur = 10; player.hasKey = true;
            if(map[ROWS-2]) map[ROWS-2][COLS-2] = 2;
            console.log('%c╔══════════════════════╗', 'color:#ff0');
            console.log('%c║   CHEATER MODE ON    ║', 'color:#ff0; font-weight:bold');
            console.log('%c╚══════════════════════╝', 'color:#ff0');
            console.log('%cGold: 9999 | Scrap: 99 | ATK: +10 | DEF: 10 | HP: 200 | Arrows: 99 | Heals: 20', 'color:#aaa');
            console.log('%c⚠ The bosses know what you did.', 'color:#f44; font-style:italic');
        },

        // Info
        help: () => {
            console.log('%c╔═══════════════════════════════════════╗', 'color:#0af');
            console.log('%c║       ANOTHER DUNGEON GAME — CHEATS  ║', 'color:#0af; font-weight:bold');
            console.log('%c╠═══════════════════════════════════════╣', 'color:#0af');
            console.log('%cGame.addGold(n)    — add n gold (default 100)', 'color:#fb0');
            console.log('%cGame.addScrap(n)   — add n scrap (default 5)', 'color:#aaa');
            console.log('%cGame.setGold(n)    — set gold to exact amount', 'color:#fb0');
            console.log('%cGame.addAtk(n)     — add n ATK bonus (default 1)', 'color:#f44');
            console.log('%cGame.addDef(n)     — add n DEF bonus (default 1)', 'color:#0af');
            console.log('%cGame.heal(n)       — restore n HP (default 200)', 'color:#f44');
            console.log('%cGame.godMode()     — take only 1 damage per hit', 'color:#ff0');
            console.log('%cGame.addArrows(n)  — add n arrows (default 50)', 'color:#8b4513');
            console.log('%cGame.addHeals(n)   — add n potions (default 5)', 'color:#a0f');
            console.log('%cGame.giveShield()  — restore shield (10 charges)', 'color:#0af');
            console.log('%cGame.nextFloor()   — advance one floor', 'color:#0f0');
            console.log('%cGame.gotoFloor(n)  — warp to specific floor', 'color:#0f0');
            console.log('%cGame.getKey()      — unlock the exit door', 'color:#0f0');
            console.log('%cGame.cheater()     — give absolutely everything', 'color:#ff0; font-weight:bold');
            console.log('%c╚═══════════════════════════════════════╝', 'color:#0af');
        }
    };
    console.log('%c🗡 Another Dungeon Game loaded — type Game.help() for cheat commands', 'color:#0f0; font-style:italic');

    function draw(ts) {
        rafId = null;
        const elapsed = (lastTs === null || ts === undefined) ? 1 / 60 : (ts - lastTs) / 1000;
        if (ts !== undefined) lastTs = ts;
        if (!gameActive || (paused && !talk)) { if (gameActive) rafId = requestAnimationFrame(draw); return; }
        dt = Math.min(Math.max(elapsed, 0), 0.05); // clamp so a background tab can't cause a huge jump
        realDt = dt;
        if (talk) { updateTalk(); dt = 0; }   // world freezes while someone is talking
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (player.cooldown > 0) player.cooldown -= dt;
        updateEnemies(); updateBoss(); updateProjectiles();
        idleTime += dt; updateEasterEggs(); updateCompanion();
        if (isBossFloor(floor)) checkBossVictory();   // fading enemies used to block the door forever
        ctx.save();
        if (shakeTimer > 0) ctx.translate((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8);

        for(let y=0; y<ROWS; y++) for(let x=0; x<COLS; x++) if(Math.hypot(x-player.x, y-player.y) < 4) visited[y][x] = true;
        for (let y=0; y<ROWS; y++) for (let x=0; x<COLS; x++) {
            if (visited[y][x]) {
                ctx.fillStyle = map[y][x] === 1 ? "#333" : map[y][x] === 3 ? "#000" : (map[y][x] === 2 ? (player.hasKey || isKeylessFloor(floor) ? "#0af" : "#f00") : "#111");
                ctx.fillRect(x*TILE, y*TILE, TILE-1, TILE-1);
                if (map[y][x] === 3) { ctx.strokeStyle = "#fc6"; ctx.lineWidth = 2; ctx.strokeRect(x*TILE+2, y*TILE+2, TILE-5, TILE-5); ctx.lineWidth = 1; }
            }
        }
        drawQuestExtras();

        if (aimAngle !== null) {
            mousePos.x = player.x * TILE + 20 + Math.cos(aimAngle) * 80;
            mousePos.y = player.y * TILE + 20 + Math.sin(aimAngle) * 80;
        }

        ctx.strokeStyle = "rgba(0, 255, 255, 0.6)";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(player.x * TILE + 20, player.y * TILE + 20);
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.lineWidth = 1;

        projectiles.forEach(p => { ctx.fillStyle = "#8b4513"; ctx.fillRect(p.x*TILE-4, p.y*TILE-4, 8, 8); });
        chests.forEach(c => { if(visited[c.y][c.x]) {
            if (c.biting) drawMimic(c);
            else if (c.type === 'mimic') {
                const m = mimicTell(c);
                ctx.fillStyle = `rgb(221,${Math.round(136 - 70 * m.k)},0)`;                 // reddens as it loses its nerve
                ctx.fillRect(c.x*TILE+10 + m.dx, c.y*TILE+15 + m.dy, 20, 15);
            }
            else { ctx.fillStyle = "#d80"; ctx.fillRect(c.x*TILE+10, c.y*TILE+15, 20, 15); }
        } });
        drawMimicPuffs();
        orbs.forEach(o => { if(visited[o.y] && visited[o.y][o.x]) { ctx.fillStyle = "#a0f"; ctx.beginPath(); ctx.arc(o.x*TILE+20, o.y*TILE+20, 8, 0, Math.PI*2); ctx.fill(); } });
        npcs.forEach(drawQuestNpc);
        drawCompanion();

        if(!player.hasKey && visited[keyPos.y]?.[keyPos.x] && !isKeylessFloor(floor)) {
            ctx.fillStyle = "#fb0"; ctx.beginPath(); ctx.arc(keyPos.x*TILE+20, keyPos.y*TILE+20, 6, 0, 7); ctx.fill();
        }

        if (boss) {
            ctx.fillStyle = "#911";
            ctx.fillRect(boss.x*TILE, boss.y*TILE, TILE*3-2, TILE*3-2);
            document.getElementById("boss-bar-fill").style.width = (boss.hp / boss.maxHp * 100) + "%";

            if (boss.aiming && boss.aimTarget) {
                const bx = boss.x * TILE + TILE * 1.5;
                const by = boss.y * TILE + TILE * 1.5;
                const tx = boss.aimTarget.x * TILE + TILE / 2;
                const ty = boss.aimTarget.y * TILE + TILE / 2;
                const blink = Math.floor(Date.now() / 250) % 2 === 0;
                if (blink) {
                    ctx.strokeStyle = "#f44";
                    ctx.lineWidth = 3;
                    ctx.setLineDash([8, 8]);
                    ctx.beginPath();
                    ctx.moveTo(bx, by);
                    ctx.lineTo(tx, ty);
                    ctx.stroke();
                    ctx.setLineDash([]);
                    ctx.lineWidth = 1;
                }
            }

            if (boss.jumbleActive) {
                const blink = Math.floor(Date.now() / 250) % 2 === 0;
                if (blink) {
                    const jx1 = boss.x - 5, jy1 = boss.y - 5;
                    ctx.fillStyle = "rgba(128, 128, 128, 0.4)";
                    for (let yy = jy1; yy <= jy1 + 12; yy++) {
                        for (let xx = jx1; xx <= jx1 + 12; xx++) {
                            if (yy >= 0 && yy < ROWS && xx >= 0 && xx < COLS) {
                                ctx.fillRect(xx * TILE, yy * TILE, TILE - 1, TILE - 1);
                            }
                        }
                    }
                }
            }
        }

        bossProjectiles.forEach(bp => {
            ctx.fillStyle = "#d22";
            ctx.beginPath();
            ctx.arc(bp.x * TILE, bp.y * TILE, 7, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#f80";
            ctx.beginPath();
            ctx.arc(bp.x * TILE, bp.y * TILE, 3, 0, Math.PI * 2);
            ctx.fill();
        });

        enemies.forEach(en => {
            if(visited[en.y][en.x]) {
                if (en.dying) {
                    ctx.save();
                    ctx.globalAlpha = en.deathTimer / 3.0;
                    ctx.fillStyle = "#555";
                    if (en.type === 'slime') {
                        ctx.beginPath();
                        ctx.arc(en.x*TILE+20, en.y*TILE+22, 10, 0, Math.PI*2);
                        ctx.fill();
                    } else {
                        ctx.fillRect(en.x*TILE+10, en.y*TILE+10, 20, 20);
                    }
                    ctx.restore();
                    return;
                }
                const hue = urlEasterEgg ? ((Date.now() / 10 + en.x * 30) % 360) : 0;
                if (en.type === 'slime') {
                    ctx.fillStyle = urlEasterEgg ? `hsl(${hue}, 100%, 50%)` : (en.cooldown > 0 ? "#292" : "#4f4");
                    ctx.beginPath();
                    ctx.arc(en.x*TILE+20, en.y*TILE+22, 10, 0, Math.PI*2);
                    ctx.fill();
                    for(let i=0; i<en.maxHp; i++) { ctx.fillStyle = i < en.hp ? "#0f0" : "#400"; ctx.fillRect(en.x*TILE+8 + i*8, en.y*TILE-6, 6, 5); }
                } else if (en.type === 'fighter') {
                    ctx.fillStyle = urlEasterEgg ? `hsl(${hue}, 100%, 50%)` : (en.cooldown > 0 ? "#840" : "#fa0");
                    ctx.fillRect(en.x*TILE+10, en.y*TILE+10, 20, 20);
                    for(let i=0; i<en.maxHp; i++) { ctx.fillStyle = i < en.hp ? "#0f0" : "#400"; ctx.fillRect(en.x*TILE+5 + i*3, en.y*TILE-6, 2, 5); }
                } else {
                    ctx.fillStyle = urlEasterEgg ? `hsl(${hue}, 100%, 50%)` : (en.cooldown > 0 ? "#611" : "#f44"); ctx.fillRect(en.x*TILE+10, en.y*TILE+10, 20, 20);
                    for(let i=0; i<en.maxHp; i++) { ctx.fillStyle = i < en.hp ? "#0f0" : "#400"; ctx.fillRect(en.x*TILE+4 + i*5, en.y*TILE-6, 4, 5); }
                }
            }
        });
        if (urlEasterEgg) {
            ctx.fillStyle = "#f00";
        } else if (rainbowPlayer) {
            const hue = (Date.now() / 10) % 360;
            ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        } else {
            ctx.fillStyle = "#0f0";
        }
        ctx.fillRect(player.x*TILE+12, player.y*TILE+12, 16, 16);
        drawIdleBubble();
        drawFloaters();
        drawTalk();
        ctx.restore();
        drawQuestHud();
        if (flashTimer > 0) { ctx.fillStyle = `rgba(255,0,0,${Math.min(0.45, flashTimer * 1.3)})`; ctx.fillRect(0, 0, canvas.width, canvas.height); }

        document.getElementById("hp").innerText = player.hp;
        document.getElementById("floor").innerText = floor;
        document.getElementById("atk-bonus").innerText = atkBonus;
        document.getElementById("def-bonus").innerText = defBonus;
        document.getElementById("bar-scrap").innerText = scrap;
        document.getElementById("bar-gold").innerText = gold;
        document.getElementById("bar-key").innerText = (player.hasKey || isKeylessFloor(floor)) ? t("ready") : t("missing");
        document.getElementById("bar-key").style.color = (player.hasKey || isKeylessFloor(floor)) ? "#0f0" : "#f44";
        document.getElementById("heal-count").innerText = player.heals;
        document.getElementById("arrow-count").innerText = player.arrows;
        document.getElementById("dur-bar").style.width = (player.shieldDur * 10) + "%";
        document.getElementById("img-shield").style.display = player.hasShield ? "block" : "none";
        document.getElementById("img-sword").style.display = "block";
        document.getElementById("img-bow").style.display = "block";
        document.getElementById("img-heal").style.display = player.heals > 0 ? "block" : "none";

        if(player.hp <= 0 && !guardianSave()) { showDeathScreen(); return; }
        rafId = requestAnimationFrame(draw);
    }
