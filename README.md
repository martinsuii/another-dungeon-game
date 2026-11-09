# ⚔️ Another Dungeon Game
### (not) Completely Vibecoded Edition
[![On VibeCruiser](https://vibecruiser.com/badge/martinsuii--another-dungeon-game.svg)](https://vibecruiser.com/v/martinsuii--another-dungeon-game?ref=badge)

[**🕹️ Play Now →**](https://martinsuii.is-a.dev/another-dungeon-game/)
---

## What Is This?

A browser-based dungeon crawler built entirely in vanilla JavaScript and HTML5 Canvas — no frameworks, no dependencies, no excuses. Procedurally generated floors, a scrap-and-gold economy, boss fights with their own attack patterns, and an online leaderboard.

---

## Features

### 🗺️ Procedural Floors
Every floor is randomly generated with walls, chests, enemies, and a key you need to find before the exit unlocks. A BFS pathfinding check guarantees every floor is actually winnable — no dead ends, no softlocks.

### ⚔️ Two-Weapon Combat
- **Sword** (Space) — melee swing, hits adjacent tiles
- **Bow** (F + Mouse aim) — fire arrows in any direction using your mouse cursor as the crosshair

### 🏪 Market Floors
Safe floors appear at X5 and X9 of every decade (5, 9, 15, 19, 25, 29...) with four vendors:
| Vendor | Sells |
| :--- | :--- |
| 🔧 The Forge | Shields, arrows |
| 💎 Artifact Seller | ATK and DEF upgrades |
| 🧙 The Witch | Healing potions |
| 💰 Scrap Buyer | Sells scrap and gives you gold |

### 👁️ Boss Fights
Every 10th floor is a boss encounter. Each boss has:
- A unique name, portrait, and pre-fight dialog
- A dedicated HP bar with the boss's name and color
- Minion waves that respawn when fully cleared
- HP that scales up with each successive boss

The door only opens once **both** the boss and all minions are dead.

#### Boss attacks
Every boss fires aimed shots and a big area attack. From floor 20 on they add a signature move, always telegraphed in pink first:

| Attack | What it does |
| :--- | :--- |
| **Spread** | A fan of 3 shots aimed at you |
| **Ring** | 10 shots flying outward from the boss |
| **Rain** | Marked tiles explode after a moment — step off them |

Floor 10's Dungeon Warden keeps it simple. Deeper bosses combine more moves (80+ uses all three).

### 🏆 Leaderboard
When a run ends you can submit it under a nickname (3-12 characters). The top 10 are ranked by floor, then gold, then fastest time, and shown from the main menu. Hold a row to copy that entry's ID.
- Runs that cheated can't be submitted.
- Runs that used a secret mode can't be submitted either (the promotion link is fine).
- Nicknames go through a profanity filter.
- Scores are validated on the server; players can only read the board, never write to it directly.

### ⚙️ Settings
Language (English / Čeština), screen shake, red damage flash, and steady boss warnings (no blinking). Saved in your browser.

### 📱 Touch Controls
On phones and tablets an on-screen D-pad and sword / bow / potion buttons appear automatically.

### 🥚 Secrets
There are a few hidden things in the dungeon. Idle for a while, look closely at chests, and keep your eyes on the walls. No spoilers here.

---

## Controls

| Key | Action |
| :--- | :--- |
| **W A S D** | Move |
| **Space** | Sword attack |
| **Mouse / F** | Shoot arrow |
| **E** | Drink potion |

On touch devices, use the on-screen D-pad and buttons.

---

## Technical Details

- **Engine:** Pure JavaScript, HTML5 Canvas
- **Dependencies:** None
- **Map generation:** Random with BFS reachability validation
- **Floor pattern:** Normal → Boss (X0) → Market (X5, X9) → repeat
- **Enemy AI:** Manhattan-distance chase with tile-based collision
- **Languages:** English and Czech
- **Leaderboard backend:** [Supabase](https://supabase.com) (Postgres + row-level security). The game only uses the public publishable key; scores are written through a validated `submit_score` function.
- **Keepalive:** a daily GitHub Action (`.github/workflows/keepalive.yml`) pings the database so the free tier doesn't pause.

### Enemies

| Enemy | HP | DMG | Speed | First Appearance | Color |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Grunt | 6 | 10 | Fast (1.2s) | Floor 1 | Red |
| Slime | 3 | 3 | Very fast (0.45s) | Floor 3 | Green |
| Fighter | 10 | 20 | Slow (1.6s) | Floor 16 | Yellow |
| Archer | 5 | 12 (arrow) | Keeps its distance | Floor 21 | Purple |

---

**Archers** back away when you get close and shoot a telegraphed arrow when they can see you (walls block it). **Elites** (gold ring, from floor 21) are a normal enemy with double HP and 1.5x damage that drops three times the gold and more scrap. Counts grow with depth: 1 archer at floor 21, 2 at 36, 3 at 51, 4 at 66+; 1 elite at floor 21, 2 at 40+, 3 at 60+.

---
