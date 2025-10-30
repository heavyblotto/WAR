

Quick, cryptid-fueled card clashes in an endless, grind-free loop. No wagering means pure skill/luck battles (65-75% win rates for fun); no specimens eliminates collection grind, replacing it with free archetype presets and lore unlocks. Warlords become accessible "presets" grouped into **5 archetypes** (expanding the original GDD's 4: Aggro, Steady, Control, Burst → + **Trickster** for Joker/peek synergy). Territories evolve into **endless procedural modes**, generated on-the-fly via seeded AI for infinite replayability without fixed campaigns.

This design targets 2-5 minute sessions, 45% D1 retention, and viral shares as the primary "reward." Dev impact: Reduces assets (20 Warlords total for MVP, 4 per archetype), balance sims (10k wars), and QA by 60%. Inspired by 2025 casual hits like *Wildfrost* (procedural roguelike deckbattles) and *Slay the Spire* mobile ports (endless runs with archetype variety), it emphasizes thematic immersion—e.g., Sasquatch charges through forests—over complexity.

#### 1. Ultra-Minimal Core Loop
The loop is distilled to three taps: **Select** (archetype/Territory) → **War** (lever pull & resolve) → **Win/Unlock** (lore + share). No decks to build; each archetype is a pre-configured "Warlord preset" with 1-3 signature effects from the original 20+ (e.g., stun, heal). Seeded RNG ensures reproducible wars for sharing.

- **Step 1: Select (10-20s)**  
  Lobby: 5 archetype buttons (icon + name, e.g., roaring Bigfoot for Aggro). Tap to preview lore tooltip and stats (Power: 3, Effects: Stun + Damage). Optional: Toggle procedural Territory (AI generates biome/opponent) or "Easy Mode" (+10% win rate). Premium OTP unlocks cosmetics (e.g., golden levers).

- **Step 2: War (30-60s)**  
  Single **lever pull**. Simultaneous card reveals: Player vs. AI cryptid (archetype-matched). Resolve:  
    | Phase | Animation (Pure CSS) | Resolution |
    |-------|----------------------|------------|
    | **Pull** | Lever spins (transform: rotateZ(360deg) 500ms ease-in-out) | Deck shuffles (seeded HMAC RNG in Workers). |
    | **Reveal** | Cards flip (perspective: 1000px; transform: rotateY(180deg) 300ms cubic-bezier) + territory VFX (e.g., fog overlay for Swamp: backdrop-filter: blur). | Compare ranks + Power + effects (e.g., Aggro stuns enemy next round). Ties → mini-War! (3 quick flips). |
    | **Effects** | Burst particles (keyframes scale + opacity); heals (green glow pulse). | 1-2 effects proc (15-25% chance, no stacking). Win = +1 streak meter. |
    | **Outcome** | Victory shake (transform: translateX(10px) alternate); loss fade. | Damage tally; streak builds to jackpot (e.g., at 10: free replay). |

  Pure CSS keeps bundle <50KB: Use `:hover`/`:active` for mobile taps; GSAP-free via `transition` + `keyframes` (examples: W3Schools flip card, FreeFrontend 3D flips).

- **Step 3: Win/Unlock (10s)**  
  Unlock: Progressive lore entry in Cryptid Codex (e.g., "Sasquatch hides in shadows—unlock his roar!"). Badges for milestones (e.g., 5 Aggro wins). **Primary Reward: Social Share**—auto-generate seeded replay URL/HTML snippet (e.g., "I crushed Yeti in Swamp! Seed: abc123 → Try it: [link]"). Post to X via Web Share API.

**Loop Flowchart (Text-Based)**:  
```
Lobby (Select Archetype/Territory) 
↓
Lever Pull → Reveal/Resolve (Effects + Streak)
↓
Win: Unlock Lore/Badge + Share Replay
Loss: Streak Reset + Ad (Free Tier)
↓ Repeat (Endless)
```

#### 2. 5 Archetype Presets: Free, Thematic Warlords
Warlords are free from the start, grouped into **5 presets** (4 players choose 1 representative; AI pulls from pool). Each has fixed Power (1-4), 1-2 effects, and regional flavor. MVP: 20 total (4 per archetype). Balance: Rock-paper-scissors (Aggro > Steady > Control > Burst > Trickster > Aggro).

| Archetype | Playstyle | Power | Effects (from Original GDD) | Example Warlords (Region) | Win Condition |
|-----------|-----------|-------|-----------------------------|---------------------------|---------------|
| **Aggro** | Rush down fast | 3-4 | Stun (skip enemy), +Damage | Sasquatch (NA), Yowie (Oceania), Ukumarzapai (SA) | Quick kills before sustain. |
| **Steady** | Outlast foes | 1-2 | Heal (+1-2 HP), Armor (+1) | Yeti (Himalaya), Agogwe (Africa), Big Grey Man (Europe) | Grind through attrition. |
| **Control** | Deny resources | 2-3 | Debuff (-1 rank), Peek (reveal next) | Skunk Ape (NA), Orang Pendek (SE Asia), Mapinguari (SA) | Disrupt combos. |
| **Burst** | High-risk spikes | 4 | War! Bonus (2-4x dmg), Streak Nudge | Nyalmo (Himalaya), Chemosit (Africa), Arulataq (Arctic) | Jackpot on ties/luck. |
| **Trickster** | Mind games/utility | 2 | Skip (enemy turn), Joker Reward (mini-game) | Grassman (NA), Moehau (Oceania), Kapre (SE Asia) | Evasion + surprises. |

**Unlocks**: Beat 3 wars with an archetype → Full Codex entry + cosmetic (e.g., Aggro: Fiery trail VFX). Procedural AI opponents mix archetypes for variety.

#### 3. Endless Procedural Territories (AI-Driven Replayability)
Ditch fixed 3-10 per campaign for **infinite procedural generation** via Cloudflare Workers AI (free tier): Seed (from player ID + streak) → Biome/opponent/effects. No grinding—scale difficulty organically (e.g., +1 Power every 10 wins).

- **Generation Logic** (Simple JS in Workers):  
  1. **Biome** (6 types, suit affinity): Forest (Hearts, vines), Swamp (Spades, debuffs), Mountain (Diamonds, ice), Jungle (Clubs, bursts), Savannah (Hearts, stuns), Arctic (Spades, heals).  
  2. **Opponent**: AI picks counter-archetype (e.g., vs. Aggro: Steady) from regional pool.  
  3. **Modifiers**: 1-2 random (e.g., "Fog: +Peek chance").  
  4. **Difficulty**: Streak-based (low: 70% win; high: 50%, jackpot at 20).  

- **Modes**:  
  - **Classic**: Fixed biomes rotate.  
  - **Endless Run**: Chain 50+ wars; high scores shareable.  
  - **Daily Seed**: Global challenge (e.g., "Survive Arctic Burst x10").  

Inspired by *Slay the Spire*'s procedural acts and *Wildfrost*'s endless climbs—ensures fresh sessions without content bloat.

#### 4. Pure CSS Animations: Lightweight & Thematic
All VFX via CSS (no JS libs):  
- **Lever**: `@keyframes crank { 0% { transform: rotate(0); } 100% { rotate(180deg); } }` + shadow pulse.  
- **Card Flip**: 3D transform (as in Slider Revolution/FreeFrontend examples): Front/back faces, hover for preview.  
- **Effects**:  
  - Stun: Lightning crackle (box-shadow keyframes).  
  - Heal: Radial gradient expand.  
  - War!: Explosive scale + shake.  
- **Territory Overlays**: CSS filters (e.g., Swamp: hue-rotate + blur). Mobile-optimized: 60fps, <100ms loads via HTMX partials.

#### 5. Social Shares as Core Rewards
**The "Reward" Loop**: Wins trigger auto-share prompt: "Bigfoot War: I [archetype] stomped [opponent] in [biome]! Seed: xyz789 [play link] #BigfootWar".  
- Formats: HTML snippet (embeddable replay via HTMX), image (CSS screenshot), or URL (Cloudflare shortlink).  
- Incentives: Premium: Custom badges on shares; streaks unlock "brag emotes" (e.g., Sasquatch roar GIF).  
- Virality: Replays let friends load exact war (seeded RNG)—like Hearthstone but simpler. Target: 20% share rate for organic growth.

#### Balance, Progression & Metrics
- **Progression**: Codex fills via archetypes (100% at 15 wins each); global leaderboard for endless scores.  
- **Metrics**: 65% avg win (tunable via AI); 5 sessions/day; ARPU $0.50 (25% OTP).  
- **Edge Cases**: Loss streak? "Mercy mode" (free retry). Ties: 20% rate for excitement.  

This radical design makes *Bigfoot War* a "pick-up-and-clash" PWA gem—endless cryptid fun in <5 minutes, primed for viral X loops. Perfect for HTMX swaps (e.g., reveal → effect HTML). For prototypes, test CSS flips via CodePen links from searches.