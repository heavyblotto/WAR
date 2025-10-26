# Bigfoot War: Game Design Document
 
**Genre**: Digital Card Game, Casual, War-Based  
**Platform**: Web (Node.js backend, HTML5 frontend)  
**Target Audience**: Casual gamers, slot machine players, card game enthusiasts (13+)  
**Session Length**: 3-6 minutes  
**Core Loop**: Choose Warlord → Select Territory/Tier → Draw cards → War with AI → Earn Spoils/XP/Stank → Bonus rolls → Unlock content

## Game Overview

Bigfoot War is a single‑player, web‑based card battler inspired by the classic War rules. Each match is a short, 3–6 minute duel that emphasizes readable outcomes, satisfying payoffs, and strategic identity without heavy deckbuilding overhead.

Before a match you:
- Choose a Warlord (your character and theme).
- See your Active Signature Set (auto-rolled mini‑package of 2–4 Warlord Cards); optional: Reroll once free or Lock using a token.
- Pick a Territory and Tier (I/II/III): Territories add a simple rules twist, daily Weather, rotating Bounties (optional goals), and a Stank track (local progression).

During play, both sides reveal one card per round; the higher rank wins and deals damage. Special Warlord cards and Relics (powerful Joker‑slot effects) add clear, readable twists like heal, armor, rank shifts, or peeks. Ties trigger War!: three cards face‑down, then one up for a decisive, high‑damage resolution. Cards always return to their owner’s discard; when decks empty, you reshuffle. No card capture.

Runs are fair and replayable. Deck size is fixed (54), replacements follow guardrails, and shuffles/mappings use a deterministic seed, so replays and practice rematches can reproduce the same order exactly. Progression unlocks Warlords, Relics, Territories, Warlord Decks, and Signature Sets over time. For a longer goal, Rampages are three‑node routes inside a Territory (two modifiers then a boss) that grant cosmetic deck rewards. Competitive players can add Warfront Pass for deep leaderboards, replays, and analytics (no gameplay power).

### Key Features
- **Short, satisfying matches**: 3–6 minute wars with simultaneous reveals and decisive War! tie resolutions
- **Clear identity + light tuning**: Choose a Warlord, then play with an auto‑rolled Signature Set (curated Warlord Cards) under suit/rank guardrails; optional one‑click Reroll/Lock
- **Fixed, fair decks**: 54 cards (52 Natural + 2 Relics), one‑for‑one replacements, discard/reshuffle; no card capture; seeded shuffles for replays
- **Readable effects**: Warlord cards and Relics (Joker‑slot powers) add small, visual twists atop simple War rules
- **Territories with variety**: Forest/Mountain/Swamp/Jungle each add a rules twist, daily Weather, Bounties (optional goals), and a Stank track
- **Rampages**: Three‑node, in‑territory routes (2 modifiers + boss) that award cosmetic deck variants
- **Progression that respects time**: Unlock Warlords, Relics, Territories, Warlord Decks, and Signature Sets; weekly Featured Pairings set goals
- **History and replays**: Deterministic replays and per‑war timelines; leaderboards/analytics via Warfront Pass (no gameplay power)

## Core Gameplay

### Game Modes & Flows

- Quick Play: Start a standard war with your last-used Warlord, Territory, and Tier. Great for fast sessions.
- Territory Free Play: Pick any unlocked Territory and Tier (I/II/III), see its current Weather and active Bounty, then start a war (availability may rotate by plan).
- Rampages & Gauntlets: Sprint (2 nodes: 1 modifier + Boss) or Story (3 nodes: 2 modifiers + Boss) routes inside a Territory. Nodes draw from a rotating pool; mid-nodes offer a choice between two mini-boss/modifier tiles.
- Featured Pairings: Weekly highlights that encourage using a specific Warlord in a specific Territory for extra Stank and bonuses.
- Warlord Challenges: Optional constraints tied to your chosen Warlord (e.g., win with few ties). Completing them grants Mastery progress and cosmetics.

### War Mechanics

#### Pre-War Setup (plain-English overview)
- Choose your Warlord. Base identity uses that Warlord’s deck template; final mapping is resolved from Warlord Deck template × Signature Set under guardrails (no deckbuilding menus).
- Active Signature Set (auto‑rolled): A curated mini‑package of Warlord Cards defines cadence/identity without changing total power. The engine resolves the final mapping from Warlord Deck template × Signature Set deterministically.
- Choose a Territory and a Tier (I/II/III). Territory rules (like extra healing in Forest) and daily Weather apply for the whole war.
- If you are on a Rampage route, you will see which step you are on and any special modifiers, with Sprint (2 nodes) and Story (3 nodes) variants. Mid-nodes may offer a choice between two options; node tooltips show modifier, time estimate, and reward preview.
- The game creates a fair, reproducible shuffle using a secure seed and locks in which standard cards are replaced by your Warlord/Relic cards.
 - Your opponent is an AI-controlled Bigfoot Warlord (or a Territory Boss during Rampages). The AI uses a full 54-card deck built with the same replacement guardrails and a locked set/seed so its deck is just as fair and replayable as yours. Territory Tier modifies the AI’s power and proc rates.

#### **Opponent Selection (how you pick or get assigned an opponent)**
- Quick Play: The game assigns an opponent automatically based on Territory, Tier, and your progression for fast entry.
- Opponent Picker (Warfront Pass): Toggle to choose from available AI Warlords in that Territory/Tier. Each card shows name, difficulty stars, affinity tag, and 1–2 signature specials (plus Set name chip). Free: Quick Play assigns an opponent.
- History Rematch: From Game Log, choose “Rematch (same seed)” to replay the exact deck order, or “Rematch (new seed)” for a fresh shuffle against the same opponent (history depth depends on plan).
- Rampages/Boss: Rampages have weekly boss styles; Sprint=1 modifier+Boss, Story=2 modifiers+Boss. Mid-nodes present a choice between two mini-boss/modifier tiles.

Repetition rules (anti-farming):
- Repetition decay: Fighting the same opponent more than 3 times per day reduces XP/Spoils (e.g., −20% after the 3rd, −40% after the 4th, floor −60%).
- Auto-bump: After 2 consecutive wins vs the same opponent at a Tier, the game suggests (or requires) the next Tier for normal rewards.
- Set rotation: The AI cycles its active Sets/mappings for that opponent to avoid identical repeats.

#### **Round Structure (what happens each round)**
1. Draw: Both you and the AI draw the top card of your own decks.
2. Reveal: Cards flip at the same time so there is no advantage from going first.
3. Compare: The higher rank wins (Ace is highest, then King, Queen, Jack, then 10 down to 2).
4. Damage: The winner deals damage equal to the winning card’s rank value plus your Power stat.
5. Special Effects: If a revealed card is a special Warlord card or a Relic, its effect happens now (for example, healing, armor, or reducing the enemy’s next card).
6. Discard: Both revealed cards go to their owners’ discard piles. When a deck runs out, its discard pile is shuffled and reused.
7. Repeat: Keep playing rounds until one Warlord’s Health reaches 0.

#### **Ties (called “War!”) in simple terms**
- If both cards have the same rank, each side places 3 cards face-down, then reveals a 4th card. That 4th compare decides the winner of the tie.
- The winner of this tie deals a large “War!” damage bonus (territories may slightly change the bonus). All cards used during the tie go to each player’s discard pile.

#### **End-of-War Resolution (what you get at the end)**
- Outcome: You either win, lose, or draw (very rare).
- XP: You get base XP for a win plus any difficulty bonus from the Tier you played.
- Spoils: You earn Spoils during the war (typically 1 per round you win). At the end, Spoils convert to XP up to a cap, and every 5 Spoils grant a bonus roll.
- Stank: If you played inside a Territory, you gain Territory Stank; Featured Pairings can boost this.
- Mastery: If you used a specific Warlord, you gain Warlord Mastery progress and may complete Warlord Challenges.
- Rampages: If you are on a Rampage, the game advances you to the next node or awards the Rampage clear and its cosmetic/relic variant reward. Story clear (3 nodes) guarantees one unique Specimen from the territory set if missing; Sprint clear rolls increased Specimen rarity.

#### **Draw/Discard/Reshuffle Rules**:
- After each reveal, each player's played card moves to their own discard pile (no card capture).
- When a draw deck is empty, shuffle that player's discard pile to form a new draw deck.
- Special cards (Warlord/Relic) also discard unless an effect states otherwise.

#### **Initial Deck Sizes**
- **Fixed Deck Size**: 54 cards per Warlord at all times.
- **Composition Model**: Start from a standard 52-card set plus 2 Joker slots (Relics). Warlord Cards replace specific Natural cards one-for-one. Relic Cards occupy the Joker slots; additional Relics (late game) replace Natural cards.
- **Starter Composition**: 50 Natural + 2 Warlord + 2 Relic = 54 (≈7.4% specials).
- **Mid-game Composition**: 48 Natural + 4 Warlord + 2 Relic = 54 (≈11.1% specials).
- **Late-game Cap**: 46 Natural + 6 Warlord + 2–4 Relic = 54 (≈14.8–18.5% specials).
- **Balance Guardrails**: Maintain suit/rank distribution when selecting replacements to preserve Territory bonuses.

#### **Tie Resolution (Traditional War)**:
- **War!**: Both players draw 3 cards face-down
- **Reveal**: Both players reveal 4th card
- **Compare**: Higher rank wins the tie (no card capture)
- **Discards**: All face-down and face-up cards from the tie go to each player's discard pile
- **Massive Damage**: Winner deals 3x damage on the resolving reveal

### Card System (what’s in the deck and how damage works)

**Card Types**:

**Natural Cards (Standard Deck)**:
- **Ranks**: Ace high. Rank values: Ace=14, King=13, Queen=12, Jack=11, 10–2 are face value.
- **Damage Formula**: Damage = rank value + Power.
- **Jokers/Relics**: Jokers are not drawn as Natural cards; Relics occupy Joker slots.

**Warlord Cards (Modified Cards)**

Warlord Cards are curated replacements for specific Natural cards that define a Warlord’s identity without increasing raw power. They are selected under suit/rank guardrails from the Warlord Deck template and the active Signature Set, and they trigger simple, readable effects (e.g., small heals/armor, ±1 rank shifts, peeks, or a single skip/stun window). Late‑game, a deck contains 4–6 Warlord Cards per war (within the fixed 54), and caps ensure clarity: stun/skip ≤1 average per war, −1 rank resolves once, and numerical adders stay small. Effects follow suit flavor (Hearts heal, Spades armor, Diamonds debuff next rank, Clubs momentum +1 next draw).

**Example Warlord Cards**:
- **Ace of Spades** – "Rock Throw" – on win: stun enemy next turn (≤1/war)
- **King of Hearts** – "Glacier Mend" – on win: heal +3 (small sustain)
- **Queen of Diamonds** – "Swamp Mist" – on reveal (resolve once): enemy next card −1 rank
- **Jack of Clubs** – "Stealth Strike" – on win: enemy skips next turn (≤1/war)
- **10 of Spades** – "Ice Carapace" – on win: gain +1 armor (persists 1 hit)
- **9 of Clubs** – "River Push" – on win: +1 next‑draw rank (momentum)
- **8 of Diamonds** – "Silt Veil" – after a tie: enemy next card −1 rank (resolve once)
- **7 of Hearts** – "Creek Aid" – on win: heal +1 (chip sustain)

**Relic Cards**

Relic Cards are powerful, one‑sentence effects that live in the two Joker slots of every 54‑card deck (at least 2 per war). Some systems can insert temporary “Free Relics” mid‑war; late‑game, extra Relics may replace mid‑band Natural cards under guardrails. Relics use clear trigger windows (e.g., next win/loss/War!, on reveal), small caps (often 1–2 uses), and are authored to remain readable: convert close loss→tie (once), next win deals double damage, peek next suit, +1 next‑draw rank, enemy next −1 rank (resolve once). All inserts/replacements respect suit/rank guardrails and per‑war caps; visual toasts and icons make them obvious.

**Example Relic Cards (Special Effects)**:
- **Red Joker** – "Forest Blessing" – next win deals double damage (1 use)
- **Black Joker** – "Mountain Fury" – next loss by ≤2 converts to tie (1 use)
- **Swamp Totem** – "Swamp Mist" – enemy next card −1 rank (resolve once)
- **Jungle Idol** – "Jungle Frenzy" – your next draw +1 rank (1 use)
- **Lantern of Echoes** – "Echo Peek" – on reveal: peek top card of both decks (1 use)
- **Star Tether** – "War! Boon" – on War! win: +3 bonus damage and peek both next cards (1 use)

### Warlord Decks & Card Structure (how specials are added fairly)

Each Warlord Deck and resulting final deck contain exactly:

**Total**: 54 cards per Warlord (fixed)
**Base Set**: 52 Natural cards (Ace–2 across 4 suits) + 2 Joker slots (occupied by Relics)
**Warlord Cards**: Replace specific Natural cards one-for-one (2–6 depending on progression). Which cards are replaced is determined by the selected Warlord Deck (identity template) and the Active Signature Set (auto‑rolled), all under guardrails.
**Relic Cards**: At least 2 (occupying Joker slots); late-game may include up to 2 additional Relics by replacing Natural cards

#### Replacement Guardrails & Deterministic Mapping (Warlord Deck × Signature Set)

- **One-for-one replacements**: Each Warlord or Relic card replaces a single Natural card. Total deck size remains 54.
- **Suit guardrail**: Preserve suit counts close to base (≈13 per suit). Prefer replacing the same suit as the special. If unavailable, pick a card from the same suit family or rotate suits evenly to keep counts within ±1.
- **Rank guardrail**: Maintain a natural rank spread. Prefer replacing within the same rank band: Ace–Jack (face), 10–7 (high), 6–4 (mid), 3–2 (low). Avoid clustering all replacements into the same band.
- **Territory respect**: Do not reduce the territory suit below base unless the Warlord’s identity explicitly requires it; see Territory Suit Rules below.
- **No duplicate identities**: Each Natural card can be replaced at most once. Special identities are unique in a deck.
- **Fixed per-war mapping**: At War start, generate a deterministic map by resolving: selected Warlord Deck (base identity) × auto‑rolled Signature Set (curated Warlord Cards), under guardrails. Player and AI both lock a mapping and seed; mappings do not change mid-war.

#### **Per-Warlord deck template**
- Name
  - Identity: theme, flavor
  - Replacements (example): [Rank of Suit] → Warlord Card Name (effect)
  - Notes: suit/rank considerations

**Examples**
- Sasquatch (PNW, rock throwing)
  - Replacements: Ace of Spades → Rock Throw (stun); King of Hearts → Creekbed Rally (heal)
  - Notes: Spades/Hearts preserved; stays in face-card band
- Yeti (Himalayas, ice/heal)
- Replacements (Warlord Deck default): Ace of Spades → Avalanche; Queen of Hearts → Glacier Mend (heal)
  - Notes: Hearts emphasis is fine in Mountain territories; face + high bands
- Mapinguary (Amazon, forest protection)
  - Replacements: King of Clubs → Forest Guard; Queen of Diamonds → Swamp Mist (-1 enemy rank)
  - Notes: Clubs/Diamonds align with Jungle/Swamp identities
- Agogwe (Tanzania, stealth)
  - Replacements: Jack of Clubs → Stealth Strike (skip turn); Queen of Spades → Camouflage
  - Notes: Face-card band; Clubs/Spades remain balanced

#### **Territory Suit Rules**
- Forest (Hearts): Keep Hearts count ≥ base (13) and allow at most +1 over base after replacements. If a replacement would reduce Hearts below base, pick a Hearts card to replace instead.
- Mountain (Spades): Same rule for Spades.
- Swamp (Diamonds): Same rule for Diamonds.
- Jungle (Clubs): Same rule for Clubs.
- Draw weighting (light bias): During shuffles, apply a small, seeded bias (≈+5–10%) to order territory suit cards earlier when available. Identity of cards is unchanged.

#### **Deterministic generation**
- Seed: Derive a per-war seed from secure inputs (e.g., HMAC(userId, warId|timestamp) via Node `crypto`).
- Mapping: Use the seed to select exact Natural cards to replace under the guardrails; persist the mapping in session state.
- Shuffle: Perform a seeded shuffle so both clients (or server and client) can replay the order if needed for replays/analytics.

Each Warlord comes with one default deck. Players can earn new decks through:

- Game bonuses and rewards
- XP progression
- In app purchases

### Example War (illustrative walk-through)
- Pre-War: You choose Yeti in Mountain Tier II under Blizzard. The game auto‑rolls the “Avalanche” Signature Set (shown as Active Set: Avalanche). You can Reroll once for free or Lock if you have a token. The engine resolves the final mapping from Warlord Deck × Signature Set under guardrails and shuffles both decks using a secure seed.
- Round 1: You reveal King of Spades (Ice Carapace) and the AI reveals 9 of Hearts. You win and deal 13 + your Power damage; Ice Carapace gives you +1 armor for your next hit.
- Round 2: Both reveal 8s (tie). War! triggers: 3 face-down cards are placed, then both reveal. You reveal Queen of Hearts (Glacier Mend) vs AI’s 10 of Clubs. You win, deal the big War! damage, then heal from Glacier Mend.
- Rounds continue with territory rules applying (in Mountain, every third round win grants armor). You accrue Spoils on each round win and fill your Epic Meter.
- End-of-War: You win. You receive base XP + Tier bonus, Spoils convert to XP (up to the cap) and award bonus rolls, Mountain Stank increases, and your Yeti gains Mastery XP. If this was the Boss node of a Rampage, you also earn the Mountain Relic Mk II.

## Game Systems

### Stats System (Simplified)

**Health**: How much damage you can take (100 HP base)
**Power**: Affects damage dealt (+1 to +3 damage per win)

### Progression System

**Levels 1-10**: Unlock new Warlords
**Levels 11-20**: Unlock new Relics
**Levels 21+**: Unlock new Territories

**Leveling Curve**
- XP_to_next(level):
  - Levels 1–10: 150 + 50 × (level − 1)
  - Levels 11–20: 600 + 100 × (level − 10)
  - Levels 21–30: 1600 + 150 × (level − 20)
- Examples:
  - L1→2: 150
  - L5→6: 350
  - L10→11: 600
  - L15→16: 1100
  - L20→21: 1600

**Deck Density by Level** (total remains 54)
- Levels 1–4: 2 Warlord, 2 Relic
- Levels 5–7: 3 Warlord, 2 Relic
- Levels 8–10: 4 Warlord, 2 Relic
- Levels 11–13: 5 Warlord, 3 Relic
- Levels 14–16: 6 Warlord, 3 Relic
- Levels 17–20: 6 Warlord, 4 Relic (cap)
- Levels 21+: Maintain cap; progress via Territories/cosmetics/Epic perks

**Unlock Cadence**
- Levels 1–10: New Warlord approximately every 3 levels (e.g., 1, 4, 7, 10)
- Levels 11–20: New Relic approximately every 3 levels (e.g., 11, 14, 17, 20)
- Levels 21+: New Territory approximately every 2–3 levels

- Stank thresholds (per Territory): Unlock territory‑themed Signature Sets, Totem variants, and cosmetic frames at scent ranks I–V; numbers match Territory Stank thresholds in Territories section. No gameplay power beyond identity within guardrails.

**Level-Up Rewards**
- Each odd level: +1 bonus roll and cosmetic currency
- Each even level: Relic shard or minor Relic cooldown token
- Milestones:
  - Level 5/10/15/20: Guarantee feature unlock matching tier focus (Warlord/Relic/Relic Slot/Theme)
  - First-time unlocks grant themed cosmetic shards
  - Warlord Deck unlocks: Each Warlord gains additional Warlord Decks at key milestones (see Warlord Deck Unlock Rules)
  - Signature Set unlocks: New Sets granted via levels and territory boss clears; see Signature Sets (Deck Identity & Auto‑Roll)

- Each Warlord has a Mastery rank (I–V) earned via wars won, territory clears, bounties, and challenges while using that Warlord.
- Mastery rewards: cosmetics (emotes, banners, frames), Signature Set unlocks, signature Relic Mk II.
- Example thresholds: 200/500/1000/1600/2400 Mastery XP.
 - Emotes at milestones: unlock 1 emote at Mastery II (warlord‑themed), 1 at Mastery IV (alt variant). Cosmetic only.

**Warlord Deck Unlock Rules**
- Each Warlord starts with 1 Warlord Deck (Default).
- Unlock additional Warlord Decks via:
  - Mastery ranks: unlock at Mastery II and IV
  - Rampage clears: first clear in the Warlord’s primary territory unlocks a themed Deck
  - Featured Pairing: limited-time deck variant drops when featured (auto-unlocks if run completed during the week)
  - Store: cosmetic Warlord Deck variants purchasable (no stat advantage; identity shifts within guardrails)
- Deck Slots per Warlord: 3 at baseline; +1 slot at Mastery III; +1 slot at Mastery V (max 5 saved Decks per Warlord)

**Signature Sets (Deck Identity & Auto‑Roll)**
- Each Warlord has 4–6 Signature Sets (named packages of 2–4 Warlord Cards). One Set is auto‑rolled at war start and shown as an “Active Set” chip.
- Player agency: Reroll once for free; optionally Lock a Set using a Lock Token (lasts 3 wars or until a loss; disabled in ranked slices).
- Flow: Warlord → Active Set (auto‑rolled, optional Reroll/Lock) → Territory/Tier → optional Opponent. Engine resolves a deterministic mapping from Warlord Deck × Signature Set, then applies Territory/Weather mutation and performs a seeded shuffle.
- Progression: Levels and Territory boss clears unlock Sets; weekly Featured grants temporary access to a new Set (1 win accelerates unlock).

**XP & Rewards Sources**:
- War Win: +50 XP (base). Difficulty bonus: Easy 0%, Medium +25 XP, Hard +50 XP, Expert +75 XP.
- Spoils Conversion: +5 XP per Spoils (cap: 50 XP per war from Spoils; excess Spoils grant bonus-rolls only).
- Daily Login: +100 XP (scaled by streak as below).
- Lucky Moments: Cosmetic currency or bonus-roll shards (no XP).

### Game Log & History

**Purpose & Scope**
- Record every war for the player with round-by-round events, enable post-game review, per-Warlord stats, and deterministic replays via seed.

**Event Model (per round)**
- Each round produces exactly one event (ties include the full War! sequence inside the same round):
  - roundIndex
  - playerCard: { rank, suit, isSpecial, tags[] }
  - enemyCard: { rank, suit, isSpecial, tags[] }
  - tieSequence?: { facedownCount: 3, finalReveal: { player, enemy } }
  - territory: { key, weather, tier }
  - procs: { lucky?: boolean, doubleDamage?: boolean, freeRelicInserted?: boolean }
  - modifiersApplied: ["heartsHeal+1", "armor+1", "murk-1", "frenzy+1", ...]
  - damage: { dealtByPlayer, dealtByEnemy }
  - spoilsEarned: { player: 0|1, enemy: 0|1 }
  - streakState: { player, enemy }
  - timestamp

**War Summary**
- warId, userId, warlord, enemyWarlord, territory, tier, weather, replaySeed
- result (win/loss/draw), roundsPlayed, timeMs
- totals: damageDealt, damageTaken, spoils, procsCount { lucky, doubleDamage, freeRelic }
- xpBreakdown: { base, difficultyBonus, spoils, missions }

**Per-Warlord Aggregates (rolling)**
- For each owned/played Warlord: totalWars, winRate, avgRounds, avgDamageDelta, territoryBreakdown, tierMix, procRates, suitDistribution, tieRate, avgSpoils.

**Retention & Privacy**
- Retain the last 100 wars’ full event logs per player; keep summaries and aggregates indefinitely.
- Store replaySeed but do not include raw seeds in analytics payloads; history endpoints are authenticated.

**UI/UX**
- Lobby: History panel lists recent wars, filters by Warlord/Territory/Tier/Result.
- Results: "View Log" opens a War Detail modal with per-round timeline and key stats.

**Notes**
- Events are immutable; corrections happen via derived aggregates recompute.

### Reward System

**Daily Bonuses**:
- Login Streak: 1st day (100 XP), 2nd day (200 XP), 3rd day (300 XP + Relic). Streak grace: a 24h grace window prevents streak reset once per 7-day cycle.
- Free Cards: 1 daily draw from Relic deck.
- Lucky Moments: Random events give temporary bonuses (no XP directly).

**Economy Guardrails**:
- Daily XP soft cap: min(2 × XP_to_next(current_level), 1500). After reaching the cap, XP gains are reduced by 50% until daily reset. Cosmetic rewards and bonus-roll drops are unaffected.

**Win Streaks**:
- 3 Wins: +1 Power for next War (one-loss grace: first loss does not break this tier once)
 - 5 Wins: Unlocks a one-time Fortune boost next War (Fortune starts at +2/6)
- 10 Wins: Unlock new Warlord

**Spoils**:
- Each round win grants +1 Spoils (no cards are captured).
- At end of War, Spoils convert to +5 XP per Spoils (cap 50 XP per war). Every 5 Spoils grant 1 bonus roll. Difficulty scaling applies to Spoils XP: Easy 50%, Medium 100%, Hard 125%, Expert 150% (cap enforced after scaling).
 - Specimens (cosmetic collectibles): Each Spoils also yields 1 Specimen roll—a humorous “junk-treasure” Bigfoots prize (territory- and rarity-weighted; no power). Specimens fill cosmetic collections that unlock emotes, Brag Back badges, and titles. End-of-war XP conversion for Spoils is unchanged.

**Random Rewards & Fortune Meter**:
- Fortune Meter: Fills on negative outcomes and guarantees a spike when full.
  - Fill: +1 on a round loss; +2 on losing a War! tie; +1 on any tie resolved against you.
  - Full: at 6. On full, guarantees within the next 2 rounds either a Lucky Draw or a Double Damage on the next win (auto-selected to avoid waste). Resets after triggering.
  - UI: thin halo around the Draw lever brightens as it fills; tooltip shows current fill (e.g., 4/6).
- Lucky Draws: base 10% per round (per round resolution). Epic War: +5 percentage points. Tier II: +2pp; Tier III: +4pp. Cap: 22%.
- Double Damage: base 5% per round. Epic War: +3pp. Tier II: +1pp; Tier III: +2pp. Cap: 12%.
- Free Relics: base 1% per round; available in Epic War and Rampages. Inserts a temporary Relic by replacing a mid-band Natural card under guardrails; duration: current War only; max 1 active Free Relic; cooldown: returns to deck only after 2 reshuffles. Rampage pity: after two losses on the same node, start next attempt with +1 Fortune (single-use per node).
- Epic Meter: Fills via Spoils (+1 per Spoils) and win streak milestones (+3 at 3-win, +5 at 5-win). When full (e.g., 20), the next War is an Epic War with increased proc rates (+50%) and improved bonus-roll odds; meter resets after use.
- Jackpot Wins: Trigger on deterministic combos (e.g., resolving a tie with both players revealing face cards and the winner's card matches territory suit) plus a small random chance (1%). Jackpots grant a large one-time damage bonus and a premium bonus-roll.

**Forging (Cosmetic Crafting)**:
- Purpose: convert Spoils and Specimen shards into permanent cosmetics; no gameplay power.
- Inputs: Spoils (base sink), Specimen shards (territory/warlord keyed), Stank rank gates (I–V), Mastery gates (II/IV), and Blueprints (boss Story clear, Featured, weekly challenge).
- Outputs: Signature Set frames/badges, Brag Back badges, Emote variants, Totem/Relic skins, Card backs (incl. Scent Trails), Titles/Nameplates, Specimen fusions.
- Unforge: convert cosmetic back to Spoils + shards at ~60–70% refund (no 100%); duplicates auto‑shard.
- UI:
  - Results: if a recipe becomes craftable, show "Forge now" CTA (one‑tap) with cost preview.
  - Collections > Knapsack: Forging tab with recipe book, progress, filters (warlord/territory/type), bulk craft (Pass), and blueprint inventory with source badges.
- Entitlements:
  - Free: full access; single craft queue.
  - Warfront Pass: bulk craft (×5), two‑item queue, outcome preview for random pools, cost breakdown analytics.
- Recipe templates (examples):
  - Set Frame (Warlord × Set): 1 blueprint (boss Story) + 200 Spoils + 10 territory shards + Stank II
  - Emote Variant (Warlord): 150 Spoils + 6 Warlord shards + Mastery II
  - Brag Back Badge (Territory): 120 Spoils + 8 territory shards + Stank I
  - Totem Skin (Territory Relic): 1 blueprint (any boss) + 180 Spoils + 6 shards + Stank III
  - Card Back (Universal): 300 Spoils + 12 mixed shards
  - Scent Trail (Animated): 400 Spoils + 2 rare Specimens + Stank IV
  - Specimen Fusion: 5 dupes (same territory/rarity) → 1 higher‑rarity shard (cosmetic use only)

**Missions**:
- Daily Missions (3): Lightweight goals awarding 50–100 XP each (e.g., win 3 rounds with Hearts, trigger 1 Relic, win a War without a tie). Reroll 1/day.
- Weekly Missions (3): Larger goals awarding 300–500 XP each (e.g., win 5 Wars on Hard, fill Epic Meter twice).

**Featured Pairings**
- Weekly Warlord × Territory spotlights (e.g., Yeti × Mountain, Agogwe × Jungle): +10% Territory Stank there and +1 bonus-roll quality tier when using the featured Warlord in the featured Territory.

**Warlord Challenges**
- Rotating constraints per Warlord (3 active): examples include “Win with ≤1 tie”, “Trigger 2 specials”, “Finish with ≥20 HP”. Rewards: Mastery XP + cosmetic shard.

**First-Time Clear Bonuses**:
- First win with a Warlord: +1 bonus roll + Warlord-specific cosmetic shard
- First win in each Territory: +Relic shard + themed card-back progress
- These are one-time rewards and do not repeat.

## Content

### Authoring Tables

#### Warlord Card Catalog (Template)
Use this table to author Warlord Cards. Each row represents one modified playing card that replaces a specific Natural card under guardrails.

| id | warlord | set | rank | suit | card_name | trigger | effect_summary | band | caps | notes |
|---|---|---|---|---|---|---|---|---|---|---|
| SASQ_ROCK_THROW | Sasquatch | Rock & Rally | A | S | Rock Throw | on win | deal base damage + stun enemy next turn | Face | ≤1 stun/war on average | Signature evergreen |
| YETI_GLACIER_MEND | Yeti | Avalanche | Q | H | Glacier Mend | on win | deal base damage + heal +3 | Face | heal values small (+1…+3) | Signature evergreen |
| MAP_SWAMP_MIST | Mapinguary | Forest Guard | Q | D | Swamp Mist | on reveal (resolve once) | enemy next card −1 rank | Face | resolves once | Debuff does not stack |
| AGG_STEALTH_STRIKE | Agogwe | Shadowstep | J | C | Stealth Strike | on win | enemy skips next turn | Face | ≤1 skip/war on average | High-clarity skip window |
|  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |

Guidelines:
- Rank band spread per Warlord (across all 8 uniques): Face×2, High(10–7)×3, Mid(6–4)×2, Low(3–2)×1.
- Suit spread: keep primary territory suit within base±1; never drop any suit below base−1.
- Effect palette caps per war: Stun/Skip ≤1 avg; Debuff −1 resolves once; Armor/Heal chips small (+1…+2); no explicit damage multipliers (use Underdog/Relics).

#### Rank-Band “Underdog” Rules (simple, universal)
- 2–3 (Longshot): win → Big Moment (2× damage with cap OR +10 flat, pre‑selected by Set); lose → +2 Fortune and +1 next‑draw rank; once per reshuffle.
- 4–5 (Underdog): win → +8 damage OR +2 armor (identity decides); lose → +1 armor (70%) or +1 heal (30%); max 2 triggers/war.
- 6–8 (Tactical): win → small utility (peek next enemy suit OR +1 next‑draw rank OR +1 Spoils if your next War! is a win); no loss effect.
- 9–10 (Reliable): win → clean damage; 30% +2 chip utility; no loss effect.
- J–A (Dominant): pure damage; cosmetic flourish only.

Suit flavor (no extra math): Hearts=heal, Spades=armor, Diamonds=−1 enemy next rank, Clubs=+1 next rank. Magnitude always comes from the rank band.

#### Signature Set Map (per Warlord)
Map each Warlord’s Sets to card ids from the catalog.

| warlord | set_name | card_ids (comma-separated) | identity_notes |
|---|---|---|---|
| Sasquatch | Rock & Rally | SASQ_ROCK_THROW, SASQ_CREEKBED_RALLY | stun windows + rally sustain |
| Yeti | Avalanche | YETI_GLACIER_MEND, YETI_AVALANCHE_STRIKE | decisive reveals + heal spot |
|  |  |  |  |

#### Relic Catalog (Template)
Author Relics as simple, 1‑sentence effects. Relics occupy Joker slots; some variants replace a mid‑band Natural card under guardrails when inserted temporarily.

| id | type | territory | trigger_window | effect_summary | cap_duration | replaces | notes |
|---|---|---|---|---|---|---|---|
| RELIC_FOREST_BLESS | Territory | Forest | next win | next win deals double damage | 1 use | Joker slot | Red Joker theme |
| RELIC_MTN_FURY | Territory | Mountain | next loss | next loss becomes a win | 1 use | Joker slot | Black Joker theme |
| RELIC_SWAMP_TOTEM | Territory | Swamp | next enemy reveal | enemy next card −1 rank | resolves once | Joker slot | Debuff does not stack |
| RELIC_JUNGLE_IDOL | Territory | Jungle | next draw | your next card +1 rank | 1 use | Joker slot | Clubs frenzy flavor |
| RELIC_GLOBAL_PEEK | Global | — | on win | peek enemy next suit | 2 uses/war | Joker slot | Utility, low power |
| RELIC_GLOBAL_TIE_SAVE | Global | — | on loss by ≤2 | convert to tie (once) | 1 use/war | Joker slot | Readable, anti‑frustration |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |

#### Content Budget Guidelines (v1)

Warlord Cards (Playable)
- Per Warlord: 8 unique
  - 2 Evergreen signatures (always present)
  - 6 Set‑unique across 3 Signature Sets (≈2 per set; 2–4 active per war as progression allows)
- Total: 80 unique across 10 playables

Warlord Cards (AI‑only)
- Reuse‑first: 1 new identity special per AI; 1–2 borrowed from playable pool
- Total new: ~12 (for 16 AI), with heavy reuse to reduce scope

Relics
- Territory Relics: 4 base (Forest, Mountain, Swamp, Jungle)
- Boss Mk II: 4 (one per territory)
- Global: 8–10 universal 1‑liners
- Total: 16–18 unique

Rationale & Guardrails
- Late‑game per‑war cap of 6 Warlord Cards is satisfied by 2 Evergreen + 2–4 Set cards
- Rank band spread per Warlord: Face×2, High(10–7)×3, Mid(6–4)×2, Low(3–2)×1
- Suit spread: primary territory suit within base±1; no suit below base−1
- Effect caps per war: Stun/Skip ≤1 avg; Debuff −1 resolves once; small Armor/Heal (+1…+2); multipliers only via Underdog/Relics

#### Authoring Patterns & Formulas

High-level taxonomy
- Triggers: on reveal; on win; on loss; on tie start/end; on War! win; on next draw; first time per war/reshuffle; after X consecutive Y; if territory suit won; if previous round tied; if you have armor/heal.
- Effects: flat damage adders; rank shifts (+1 next draw / −1 enemy next); armor/heal (+1…+2); peek/reveal (suit/top); skip/stun (≤1 avg/war); convert loss→tie (once); Spoils hooks (+1 if your next War! is a win); meter nudges (Fortune +1, Epic +1); cosmetic hooks (Specimen/emote/Knapsack copy only).
- Guardrails: per‑war/per‑reshuffle caps; resolve‑once flags; no stacking −1 rank; no raw multipliers (use Underdog/Double Damage/Jackpot); maintain suit/rank spread.
- Flavor mapping: Hearts=heal; Spades=armor; Diamonds=−1 enemy next rank; Clubs=+1 next‑draw rank.
- Band intent: Low (2–3) big payoff + consolation; Mid (6–8) utility; High (9–10) clean damage + tiny utility; Face (J–A) signature identity.

Warlord Card patterns
- On‑Win Utility
  - Hearts: heal +1 (Face/High); +2 only on a signature Face card.
  - Spades: +1 armor (persists 1 hit).
  - Clubs: +1 next‑draw rank.
  - Diamonds: enemy next −1 rank (resolve once).
- On‑Reveal One‑Shot
  - enemy next −1 rank (resolve once); peek enemy next suit.
- Tie/War! Interactions
  - if previous round tied: on win, +2 damage; on War! win: gain +1 armor.
- Outcome Converters (rare)
  - on loss by ≤1: convert to tie (once/war). Prefer Relic for this; limit to a single Warlord across roster if used.
- State‑based
  - if you have armor: on win, heal +1.
- Territory‑tagged
  - if winning with territory suit: +1 Spoils if your next War! is a win (cap 1/war).

Suggested numeric knobs
- Bonus damage: +2 to +4 for mid‑band utilities (never >+4 from cards).
- Heal/Armor: +1 baseline; +2 only on signatures or Hearts/Spades Face.
- Rank shifts: always ±1.
- Meter nudges: Fortune +1, Epic +1 (≤1/war/card id).

Band defaults (speed authoring)
- 2–3: if win → choose one of {+8 damage, heal +2, +2 armor}; if loss → Fortune +2 and +1 next‑draw rank (Underdog covers most; card adds flavor only).
- 6–8: pick exactly one utility; no loss effect.
- 9–10: 30% chance +2 chip utility; else nothing.
- Face: one standout (stun/skip) and one sustain/control; minimal adders elsewhere.

Relic patterns
- Next‑Window (1‑liners)
  - Next Win: deal double damage (Forest).
  - Next Loss by ≤2: convert to tie (Mountain).
  - Next Draw: your next card +1 rank (Jungle).
  - Next Enemy Reveal: enemy next −1 rank (Swamp).
- War! Hooks
  - on War! win: +3 bonus damage; first War! win: gain +1 armor.
- Momentum
  - after your first Clubs win: +1 next two draws (cap shown); after you heal: peek enemy next suit (2 uses/war).
- Safety Nets (rare)
  - first time you’d drop to ≤10 HP: heal +3 (once/war).
- Cosmetic/QoL (non‑power)
  - on win with territory suit: +1% Specimen rarity visualization (display only).

Relic caps & scopes
- Charges: 1 use (territory relics), 2 uses (light global utility). Duration: this war only.
- Insert/replace rules: honor guardrails (temporary mid‑band replacement when applicable).
- Exclusions: avoid duplicating Warlord skip/stun in Relics within the same war.

Templates (authoring JSON examples)

Warlord Card
```json
{
  "id": "YETI_GLACIER_MEND",
  "warlord": "Yeti",
  "set": "Avalanche",
  "replaces": { "rank": "Q", "suit": "H" },
  "trigger": "on_win",
  "conditions": [],
  "effects": [{ "type": "heal", "value": 3 }],
  "band": "Face",
  "caps": { "perWar": 2, "perReshuffle": 3, "resolveOnce": false },
  "notes": "Signature evergreen; small heal"
}
```

Relic
```json
{
  "id": "RELIC_GLOBAL_TIE_SAVE",
  "type": "Global",
  "territory": null,
  "triggerWindow": { "event": "on_loss", "byAtMost": 2 },
  "effects": [{ "type": "convert_loss_to_tie" }],
  "charges": 1,
  "replaces": "JokerSlot",
  "notes": "Readable anti-frustration; once per war"
}
```

Reward hooks (non‑power)
- Specimen rarity bump (UI only), emote shards on first weekly resolution, Stank adjective badges on boss clears (cosmetic badges/Brag Backs).

Anti‑exploit defaults
- Cooldowns for converters/skip: ≤1/war; resolve‑once on −1 rank; AI uses same caps; Tier modifies difficulty, not caps.

### Bigfoot Warlords

#### Roster Summary (v1)
- Playable Warlords: 10
- AI-only Opponents: 16

#### Playable Warlords (v1: 10)

**Sasquatch** (Playable)
- Theme: Pacific Northwest, rock throwing, hearty rally
- Signature Sets: Rock & Rally (default), Boulder Barrage, Creek Guardian
- Stats: Health 100, Power +1; Affinity: Forest (primary), Mountain (secondary)

**Yeti** (Playable)
- Theme: Himalayas, ice armor and healing
- Signature Sets: Avalanche (default), Permafrost, Summit Sage
- Stats: Health 110, Power +2; Affinity: Mountain (primary), Swamp (secondary)

**Mapinguary** (Playable)
- Theme: Amazon guardian, debuffs and control
- Signature Sets: Forest Guard (default), Canopy Ward, River Sentinel
- Stats: Health 95, Power +1; Affinity: Jungle (primary), Swamp (secondary)

**Agogwe** (Playable)
- Theme: Tanzania stealth, ambush windows
- Signature Sets: Shadowstep (default), Ambush, Hunter’s Guile
- Stats: Health 90, Power +1; Affinity: Jungle (primary), Mountain (secondary)

**Skunk Ape** (Playable)
- Theme: Florida bog trickster; foul debuffs, sprints
- Signature Sets: Mire Misfit (default), Bog Raider, Cypress Sneak
- Stats: Health 95, Power +1; Affinity: Swamp (primary), Forest (secondary)

**Bukwus** (Playable)
- Theme: PNW wood spirit; fear, misdirection
- Signature Sets: Driftwood Warden (default), Spirit Trick, Tidal Mask
- Stats: Health 100, Power +1; Affinity: Forest (primary), Swamp (secondary)

**Grassman** (Playable)
- Theme: Ohio stalker; chase cadence and chip sustain
- Signature Sets: Field Stalker (default), Cornrow Cover, Haybale Heave
- Stats: Health 100, Power +1; Affinity: Forest (primary), Jungle (secondary)

**Dzu-Teh** (Playable)
- Theme: Yeti variant; brute force, glacial punishes
- Signature Sets: Ridgebreaker (default), White Fang, Glacier Press
- Stats: Health 110, Power +1; Affinity: Mountain (primary), Forest (secondary)

**Orang Gadang** (Playable)
- Theme: Sumatran giant; vine control, momentum chains
- Signature Sets: Canopy March (default), River Stride, Orang Charge
- Stats: Health 95, Power +2; Affinity: Jungle (primary), Swamp (secondary)

**Kapre** (Playable)
- Theme: Tree-dwelling giant; smoke cover, stagger hits
- Signature Sets: Cigar Shade (default), Trunk Guard, Canopy Bluff
- Stats: Health 105, Power +1; Affinity: Jungle (primary), Forest (secondary)

**Sasquatch** (details):
- **Theme**: Pacific Northwest, rock throwing
- **Special Cards**: Rock Throw (Ace of Spades), Creekbed Rally (King of Hearts)
- **Stats**: Health 100, Power +1

**Yeti** (details):
- **Theme**: Himalayas, ice and healing
- **Special Cards**: Glacier Mend (Queen of Hearts), Avalanche (Ace of Spades)
- **Stats**: Health 110, Power +2

**Mapinguary** (details):
- **Theme**: Amazon, forest protection
- **Special Cards**: Forest Guard (King of Clubs), Swamp Mist (Queen of Diamonds)
- **Stats**: Health 95, Power +1

**Agogwe** (details):
- **Theme**: Tanzania, stealth and agility
- **Special Cards**: Stealth Strike (Jack of Clubs), Camouflage (Queen of Spades)
- **Stats**: Health 90, Power +1

#### Signature Sets (player-facing, curated mini-packages)

Signature Sets are small, named packages of 2–4 Warlord Cards that define a clear identity per Warlord. They obey the same replacement guardrails (suit/rank balance, territory respect, no duplicates) and do not increase total power. One Set is auto‑rolled at war start; players can Reroll once for free or spend a Lock Token to keep a Set for up to 3 wars.

- **Sasquatch**
  - Rock & Rally (default): Ace of Spades → Rock Throw (stun); King of Hearts → Creekbed Rally (heal)
  - Boulder Barrage: King of Spades → Rock Barrage (minor multi‑hit flavor); 9 of Clubs → Boulder Toss (+1 base rank on reveal turn)
  - Creek Guardian: Queen of Hearts → Creek Shield (+1 armor this and next round); 8 of Hearts → River’s Aid (heal +1)
  - Notes: Maintains Spades/Hearts focus; mixes face/high bands. Good in Forest/Mountain.

- **Yeti**
  - Avalanche (default): Ace of Spades → Avalanche (burst); Queen of Hearts → Glacier Mend (heal)
  - Permafrost: King of Spades → Ice Carapace (+1 armor, stacks to 2); 10 of Diamonds → Frostbite (enemy −1 rank next round)
  - Summit Sage: Jack of Hearts → Warmth (heal over 2 rounds); 9 of Spades → Ridge Strike (+1 rank if previous round tied)
  - Notes: Spades/Hearts preserved; adds defensive cadence; strong in Mountain/Swamp.

- **Mapinguary**
  - Forest Guard (default): King of Clubs → Forest Guard; Queen of Diamonds → Swamp Mist (−1 enemy rank)
  - Canopy Ward: 10 of Clubs → Vine Snare (enemy −1 rank if you win with Clubs); Jack of Diamonds → Sap Shield (+1 armor on Diamonds win)
  - River Sentinel: 9 of Clubs → River Push (+1 rank next round on Clubs win); 8 of Diamonds → Silt Veil (−1 enemy rank after a tie)
  - Notes: Clubs/Diamonds balanced; synergizes Jungle/Swamp rules.

- **Agogwe**
  - Shadowstep (default): Jack of Clubs → Stealth Strike (skip turn); Queen of Spades → Camouflage
  - Ambush: 9 of Clubs → Lurker’s Pounce (+1 rank if enemy’s last was face); 7 of Spades → Night Veil (hide your next card’s suit/preview)
  - Hunter’s Guile: 10 of Clubs → Track Prey (reveal enemy suit next round); Jack of Spades → Smoke Cover (−1 enemy rank if you lose by ≤1)
  - Notes: Clubs/Spades identity; excels in Jungle/Mountain.

#### Example Warlord Decks (Base Identities)

- **Sasquatch**
  - Stone Heaver (Default): Face-band Spades/Hearts emphasis; reliable stun windows and solid sustain.
  - Gorge Sentinel: Hearts-leaning sustain/armor; lower tie rate; favors extended rounds.
  - Landslide: High-band Spades skew; bursts after ties; punishes War! reveals.

- **Yeti**
  - Avalanche (Default): Spades burst identity; favors decisive reveals and post-tie spikes.
  - Periglacial Guard: Hearts/Spades balance; armor cadence and controlled tempo.
  - Whiteout Scout: Visibility/control tools; minor debuffs; thrives under Blizzard.

- **Mapinguary**
  - Forest Guardian (Default): Clubs/Diamonds control; steady debuffs; protects tempo.
  - River Watch: Reactive debuffs post-tie; river-themed momentum on Clubs wins.
  - Canopy Warder: Armor on Diamonds wins; light snares on Clubs chains.

- **Agogwe**
  - Shadowstalker (Default): Stealth/skip-turn windows; Clubs/Spades face-band identity.
  - Night Hunt: Ambush and reveal peeks; sets up tie manipulation.
  - Bush Phantom: Suit concealment and light misdirection; safer mid-band spread.

The game features a roster of Bigfoots based on global cryptid lore. Below is a starting list with name, locale, and brief description (for those with available data; others noted as variants or similar to known cryptids). These serve as playable characters, AI clan lords, or card inspirations, with stats and abilities tailored to their themes.

#### AI-Only Opponents (v1: 16)
- Big Grey Man (Mountain): eerie ridge phantom; punishes face-card reveals
- Matlox (Forest): PNW cannibal giant; slow, heavy swings
- Gugwe (Forest): aggressive Sasquatch variant; burst windows after ties
- Barbegazi (Mountain): alpine skimmer; armor chips on slides
- Hibagon (Mountain): hot-tempered ape; volatile mid-band spikes
- Genoskwa (Forest): stone giant; armor-on-win cadence
- Nyalmo (Mountain): colossal yeti; tie setups, punishing War! reveals
- Mecheny (Mountain): relentless attrition; chip damage over time
- Gin Sung (Mountain): bear-man; counterpunch windows
- Ucu (Swamp): sloth-primate; slow debuffing pushes
- Sisemite (Jungle): cliff ambusher; +1 next rank on jungle chains
- Maywas (Forest): hunter; suit peeks and snares
- Nasnas (Swamp): one‑legged trickster; skip-turn feints
- Orang Mawas (Jungle): river chaser; frenzy after Clubs wins
- Mande Burung (Mountain): scout; reveal tools, low damage
- Mogollon Monster (Forest): desert ridge variant; sand glare misreads

- **Agogwe**: Locale: East Africa; Description: Small, reddish-haired humanoid, often seen in forests.
- **Argopelter**: Locale: North America (lumberjack folklore); Description: Arboreal creature that throws branches at intruders.
- **Barbegazi**: Locale: Alps (Switzerland/France); Description: Gnome-like being with large feet for skiing on snow.
- **Didi**: Locale: Himalayas; Description: Tall, ape-like humanoid, similar to Yeti.
- **Fating'ho**: Locale: South America; Description: Forest-dwelling humanoid, akin to Mapinguary.
- **Hibagon**: Locale: Japan (Hiroshima); Description: Ape-like creature with dark fur, reported in mountains.
- **Ine Weu**: Locale: South America; Description: Hairy humanoid, similar to Mapinguary.
- **Jungli Admi**: Locale: India; Description: Wild man of the jungles, ape-like humanoid.
- **Junjudee**: Locale: Australia; Description: Small, hairy humanoid, related to Yowie folklore.
- **Orang Pendek**: Locale: Sumatra; Description: Small hominid, bipedal with short fur.
- **Siwil**: Locale: North America (Indigenous lore); Description: Hairy giant, similar to Sasquatch.
- **Teh-Ima**: Locale: Himalayas; Description: Small Yeti variant, hairy and elusive.
- **Xipe**: Locale: Central America; Description: Skinless or flayed humanoid, mythical being.
- **Arulataq**: Locale: Arctic (Inuit lore); Description: Giant, hairy humanoid.
- **Curinquean**: Locale: South America; Description: Large, ape-like creature, similar to Mapinguary.
- **Dzu-Teh**: Locale: Himalayas; Description: Large, bear-like Yeti variant.
- **Genoskwa**: Locale: North America (Iroquois lore); Description: Stone giant, aggressive Sasquatch-like being.
- **Gin Sung**: Locale: Asia; Description: Bear-man, similar to Yeti.
- **Matlox**: Locale: North America (Pacific Northwest); Description: Giant, hairy cannibal.
- **Moehau**: Locale: New Zealand; Description: Hairy man of the mountains.
- **Nyalmo**: Locale: Himalayas; Description: Giant ape-man, Yeti variant.
- **Orang Gadang**: Locale: Sumatra; Description: Large orangutan-like humanoid.
- **Tano**: Locale: Africa; Description: Giant, hairy humanoid.
- **Yeren (Giant)**: Locale: China; Description: Primate-like hominin, large and hairy.
- **Abnauayu**: Locale: Asia/Caucasus; Description: Non-human ape or hominid, variant of Almas.
- **Afonya**: Locale: Russia; Description: Hairy wildman, similar to Almas.
- **Almas**: Locale: Asia/Caucasus; Description: Non-human ape or hominid.
- **Barmanu**: Locale: Pakistan; Description: Hairy humanoid, similar to Yeti.
- **Batutut**: Locale: Vietnam/Laos; Description: Small, hairy hominid.
- **Big Grey Man**: Locale: Scotland; Description: Large, grey-haired humanoid in mountains.
- **Bukwus**: Locale: Pacific Northwest; Description: Wild man of the woods, spirit-like.
- **Cer Ra Ca Wa**: Locale: South America; Description: Giant humanoid, similar to Mapinguary.
- **Chemosit**: Locale: East Africa; Description: Large carnivore, bear-like.
- **Germakochi**: Locale: Central Asia; Description: Hairy wildman, Almas variant.
- **Grassman**: Locale: Ohio, USA; Description: Large, hairy ape-like creature.
- **Gugwe**: Locale: North America; Description: Hairy giant, Sasquatch variant.
- **Gul-Biavan**: Locale: Asia/Caucasus; Description: Non-human ape or hominid, Almas variant.
- **Kapre**: Locale: Philippines; Description: Tree-dwelling giant, cigar-smoking humanoid.
- **Kikomba**: Locale: Africa; Description: Ape-man, similar to Agogwe.
- **Mahalu**: Locale: India; Description: Giant wildman.
- **Mande Burung**: Locale: India; Description: Hairy humanoid, Yeti-like.
- **Mapinguary**: Locale: Amazon; Description: Giant ground sloth or primate.
- **Maywas**: Locale: North America; Description: Hairy giant, Sasquatch variant.
- **Mecheny**: Locale: Himalayas; Description: Yeti variant, large hairy entity.
- **Meh-Teh**: Locale: Himalayas; Description: Yeti variant, large hairy entity.
- **Momo**: Locale: Northeast India; Description: Hairy humanoid, Yeti-like.
- **Mogollon Monster**: Locale: Arizona, USA; Description: Large, hairy ape-like creature.
- **Nasnas**: Locale: Middle East; Description: One-legged humanoid, mythical.
- **Nuk-Luk**: Locale: Canada (Yukon); Description: Small bushman-like creature.
- **Orang Mawas**: Locale: Malaysia; Description: Ape or hominid, similar to Orang Pendek.
- **Sasquatch**: Locale: United States and Canada; Description: Large and hairy ape-like creature.
- **Sisemite**: Locale: Central America; Description: Hairy humanoid, Bigfoot-like.
- **Skunk Ape**: Locale: Florida, USA; Description: Primate, foul-smelling ape-like creature.
- **Ucu**: Locale: Argentina; Description: Giant sloth-like or primate.
- **Ukumarzapai**: Locale: South America; Description: Bear-man, similar to Mapinguary.
- **Vedi**: Locale: Himalayas; Description: Yeti variant.
- **Wa'ab**: Locale: Africa; Description: Hairy wildman.
- **Yeti**: Locale: Himalayas (Asia); Description: Large and hairy human-like entity.
- **Yowie**: Locale: Australia; Description: Large and hairy human-like entity.

### Territories

Territories are distinct battlegrounds, each with unique rules, weather, bounties, and suit affinities that shape gameplay. They offer tiered challenges, progression via "Stank," and serve as settings for Rampages and Gauntlets. Each territory introduces specific Warlord enemies, Relic rewards, and deck mutations, encouraging diverse strategies.

- **Forest (Hearts)**: Emphasizes healing and sustain, boosting recovery effects and promoting Hearts cards.
- **Mountain (Spades)**: Focuses on armor and defensive play, granting armor on wins and promoting Spades cards for strategic advantage.
- **Swamp (Diamonds)**: Centers on debuffs and tie manipulation, featuring unique suit pity rules, fog effects, and rank-reducing mechanics.
- **Underground**: Torchlit tunnels and caverns; Echo Charge rewards War! wins with a +1 next‑reveal rank; armor‑leaning, deliberate cadence.
- **Astral**: Supernatural “phased” layer; Astral Flux occasionally converts reveals into Epic/Fortune nudges; volatile, readable spikes.


#### Global Territory Mechanics
- **Territory Tiers**: Choose I/II/III when entering a territory.
  - Tier II: +25% XP rewards and +1 bonus roll; AI gains +1 Power and +10% proc rates.
  - Tier III: +75% XP rewards and +2 bonus rolls; AI gains +2 Power and +20% proc rates.
- **Territory Stank**: Per-territory XP bar with scent ranks I–V at 100/300/600/1000/1500 Stank XP.
  - Scent adjectives by rank: Whiffy → Pungent → Rank → Rancid → Mythic Musk.
  - Rank rewards: themed cosmetic shard, +1% territory suit weighting (stacking), Relic shard, boss encounter access, hard-mode toggle.
- **Weather (Rotating Modifiers)**: Each territory has a daily weather affecting rules.
  - Forest Rain: +healing effects; Double Damage proc −2% absolute.
  - Mountain Blizzard: −tie rate; +1 armor on every third round win.
  - Swamp Fog: +tie rate; reveal enemy suit (not rank) next round.
  - Jungle Monsoon: +1 Epic Meter gain per Spoils.
- **Bounties (Rotating Objectives)**: Daily/weekly tasks per territory (e.g., “Defeat Mountain King with ≤3 ties”) for bonus rolls and cosmetic shards.
- **Suit Pity Timer**: If 4 rounds pass without the territory suit, seed-weight the next reshuffle to surface ~2 cards of that suit (+25% ordering weight), honoring guardrails.
 - **Rampages & Gauntlets**: Three-node mini-campaigns per territory (two modifiers + boss). First clear grants Relic Mk II/III variants and themed cosmetics.
 - **Rampages & Gauntlets**: Sprint (2 nodes) and Story (3 nodes) routes per territory. Nodes draw from a rotating pool (8–10 weekly); mid-nodes offer a choice between two tiles. First Story clear grants Relic Mk II/III variants and a guaranteed unique Specimen if missing; Sprint clear increases Specimen rarity odds. Repetition decay applies to XP only; cosmetics unaffected.
 - **Affinity & Featured Pairings**: Certain Warlords gain weekly affinity in specific territories (shown in UI), granting extra Stank and rewards.

**Forest Territories** (Hearts):
- **Bonus**: +1 Health per Hearts win
- **Enemy**: Forest Guardian Warlord
- **Reward**: Forest Blessing Relic
 - **Rules**: Healing effects are +50% stronger; Hearts wins heal an additional +1. War! resolves at 3.5× damage and grants the winner +3 heal (replaces the global 4× in this territory).
 - **Deck Mutation (start of war)**: Promote up to two low-band Hearts to mid-band for this war (deterministic under guardrails).
 - **AI Tendencies**: Prioritizes sustain, conserves face cards to avoid overkill; lower tie propensity.
 - **Specimens (examples)**:
   - Common: Rotten Pinecone, Sap-Stuck Feather
   - Uncommon: Moss-Wrapped Pebble, Stale Apple Core
   - Rare: Truffle-Near-Miss, Hollow Log Whistle
   - Epic: Dumpster Crown (Forest Trim)

**Mountain Territories** (Spades):
- **Bonus**: +1 Power per Spades win
- **Enemy**: Mountain King Warlord
- **Reward**: Mountain Fury Relic
 - **Rules**: Gain +1 temporary armor every time you secure your 3rd, 6th, 9th… round win (reduces next damage by 1–2). Spades wins grant +1 armor immediately.
 - **Deck Mutation (start of war)**: Promote one mid-band Spade to high-band for this war.
 - **AI Tendencies**: Hoards high Spades for post-tie reveals; punishes War! states.
 - **Specimens (examples)**:
   - Common: Pocket Gravel, Tin Mug Dreg
   - Uncommon: Glacier Jerky, Snow-Wet Mitt
   - Rare: Frozen Fish Head, Summit Token (Bent)
   - Epic: Banana Peel Scepter (Icy Grip)

**Swamp Territories** (Diamonds):
- **Bonus**: Diamonds win grants a Debuff token (enemy’s next card −1 rank)
- **Enemy**: Swamp Mist Warlord
- **Reward**: Swamp Mist Relic
 - **Rules**: Suit Pity triggers after 3 rounds without Diamonds (instead of 4). Fog weather reveals enemy suit (not rank) next round. Occasional “bog” effect: both players’ next draw −1 rank (low chance).
 - **Deck Mutation (start of war)**: Tag one enemy high-band card with “murk” (−1 rank when revealed) for this war.
 - **AI Tendencies**: Plays for ties to exploit debuffs; higher tie-setup probability.
 - **Specimens (examples)**:
   - Common: Bog Coin, Murk-Snail Shell
   - Uncommon: Sedge Basket, Marshmallow (Pre-Melt)
   - Rare: Bog-Softened Boot, Reed Flute (Gurgling)
   - Epic: Feral Scarf (Tang of Mystery)

**Jungle Territories** (Clubs):
- **Bonus**: +1 random stat per Clubs win
- **Enemy**: Jungle Rage Warlord
- **Reward**: Jungle Rage Relic
 - **Rules**: First Clubs win each war grants “Frenzy” (+1 rank on your next two rounds). Tie rate +10% (chaotic tempo).
 - **Deck Mutation (start of war)**: One random Clubs card gains +1 rank on its first appearance only.
 - **AI Tendencies**: Aggressively cycles specials; accepts volatility for spike outcomes.
 - **Boss Rampage**: Jungle Rage champion uses high tie-rate and Frenzy windows; first clear awards Jungle Relic Mk II and a themed board frame.
 - **Specimens (examples)**:
   - Common: Vine-Tie, Beetle Case
   - Uncommon: River Reed Straw, Leaf-Pressed Sardine
   - Rare: Overripe Durian, Bark-Peel Charm
   - Epic: The Eternal Whiff (Sealed Jar)

**Underground Territories** (Tunnels/Caverns):
- **Bonus**: Echo Charge – on War! win, your next reveal gains +1 rank (once per war; shows as a badge until consumed)
- **Enemy**: Stone Echo Warlord
- **Reward**: Lantern of Echoes Relic
 - **Rules**: Echo Charge triggers only once and does not stack with other next‑draw rank boosts; tooltip shows “Echo ready.”
 - **Deck Mutation (start of war)**: Tag one random mid‑band card with “Stone Chip”: on win with that card, gain +1 armor (resolves once).
 - **AI Tendencies**: Prefers early tie setups to bank Echo for decisive reveals; slower cadence and post‑tie punishes.
 - **Rampage Nodes (examples)**: Cave‑In (first tie counts as War! instantly), Narrow Tunnel (first Clubs win +1 next‑draw rank), Bat Swarm (reveal enemy suit next), Lost Shaft (on War! win: +1 armor once).
 - **Specimens (examples)**:
   - Common: Rusted Nail, Coal Chip
   - Uncommon: Lantern Wick, Bat Trinket
   - Rare: Shale Talisman, Chalk Rune
   - Epic: Helm of Echoes

**Astral Territories** (Phased Dimension):
- **Bonus**: Astral Flux – 10% of reveals become Flux. Win a Flux → +1 Epic; lose a Flux → +1 Fortune (short toast)
- **Enemy**: Veil Stalker Warlord
- **Reward**: Star Tether Relic
 - **Rules**: Flux chance is fixed and indicated by a shimmer frame; effect auto‑applies with concise toast.
 - **Deck Mutation (start of war)**: Tag one random mid‑band card with “Astral Mark”: on reveal, peek enemy next suit (resolves once).
 - **AI Tendencies**: Aligns play to cash Flux wins for Epic or soak Flux losses for Fortune; favors volatility windows.
 - **Rampage Nodes (examples)**: Phase Slip (first loss by ≤1 converts to tie once), Constellation (first Hearts win heals +1 once), Time Ripple (after a tie: +1 next‑draw rank once), Veil Stalker (this node only: +15% Flux).
 - **Specimens (examples)**:
   - Common: Star Salt, Prism Shard
   - Uncommon: Phase Thread, Moonglass Chip
   - Rare: Comet Trinket, Chrono Charm
   - Epic: Jar of Midnight

### Visual Style & Themes

**Style Pillars**
- Bold, readable, playful-spooky aesthetic with high contrast
- Deep forest greens, midnight blues, moss and ember accents
- Territory tints: Hearts=warm woodland, Spades=slate/ice, Diamonds=swamp teal, Clubs=jungle jade
- Modern woodcut meets pulp-cryptid posters: chunky silhouettes, textured shading, limited gradients
- Warlords display humorous fidgets and mildly spooky moments

**Slot-Machine Metaphor**
- Card Stage acts as the "reel"; Draw button is the "lever" (pull-down on mobile, tactile press on desktop)
- Feedback cadence: pre-flip charge hum → thunk flip → reveal pop → win sting → coins-like Spoils sparkle
- War! triggers: siren + marquee lights + rapid 3-card "clack" stack
- Reel flourish: subtle vertical parallax during shuffles; nudge animation on advantage rounds

**Territory Visual Skins**
- Forest/Hearts: Dappled light, drifting spores, warm particle glow; rain overlays and leaf bursts on hits
- Mountain/Spades: Frost edge vignette, wind streaks; blizzard adds flurries and muffled audio
- Swamp/Diamonds: Low fog pass, fireflies, ripple decals on impact
- Jungle/Clubs: Foreground leaves parallax, heat shimmer, occasional vine sweep
- Rampages: Map totem nodes with carved inlays; boss node gets gold foil rim and animated totem eyes

**Animation Timing & Effects**
- Flip: 280–320ms spring; face cards get glint shader pass
- Damage pop: 300ms with squash; Double Damage adds bolt tracer and color shift
- War! sequence: three 80ms face-down stacks, explosive reveal with vignette pulse (territory-tinted)
- Epic state: Totem ring pulses; full state adds light chroma shift across UI trim
- Win/Loss reactions: Warlord portrait celebrate/anger animations

**Audio Design**
- Slot stingers blended with natural/cryptid tones: wood knock, antler bell, icy chime, vine twang
- Card sounds: flip, reveal, damage numbers
- Warlord sounds: roars, growls, celebration
- UI feedback: button clicks, reward chimes
- Territory ambiences: layered softly with dynamic ducking for flip/reveal clarity
- Reduced Motion mode: attenuates audio peaks; dynamic range compressed for mobile

**Design Tokens**
- Colors: base forest (#0F2A1E), slate (#1F2D3A), moss (#3B6B4A), ember (#F2A33A); suit tints per territory; status (heal=#6BD38A, damage=#FF5A5A, armor=#8AA1FF)
- Typography: Display face with cryptid flair for headings; highly legible UI font for numbers (tabular lining for damage/XP). Clear hierarchy: H1 marquee (28/32), H2 section labels (22/28), Label (14/18), Numerals (18/20 tabular)
- Spacing: 4/8/12/16/24 tokens; components align to 8pt grid
- Radius: 10px cards, 12px panels; chips circular or 16px radius
- Motion: standard 250–350ms, fast 150–200ms, reduced 150ms fades; use GPU transforms

**Key UI Elements**
- Health Bar: Segmented with tick marks and damage/heal animations
- Win Streak: Prominent streak counter with grace shield indicator
- Fortune Indicators: Draw lever halo brightens with Fortune fill; small glow on cards when Lucky Draw queued
- Territory Module: Suit, tier (I/II/III), weather badge, Stank bar, bounty objective, rampage/boss availability, Featured Pairing bonus
- Mastery Panel: Lobby panel showing rank/progress and Variant selector (when unlocked)
- Reward Pop-ups: Big, satisfying notifications with territory-themed VFX

### UI Spec Mockups

#### Lobby (with Opponent Chooser)
- Header: game logo; right corner: settings and profile
- Warlord Carousel: large portrait, nameplate, Mastery rank bar; Set Scout (Warfront Pass) chip previews next 3 possible Sets
- Territory Row: chips for Forest/Mountain/Swamp/Jungle, showing suit icon, weather badge, Tier dropdown, Stank bar, bounty icon (Free: 2 territories rotate daily; Pass: full chooser)
- Active Set Panel: "Active Set: [name]" with Reroll (Free: 1×/war; Pass: +1/day) and Lock (Pass: tokens/day; disabled in ranked). Tooltip shows remaining lock tokens
- Opponent Chooser (Warfront Pass): grid of opponent cards (portrait, name, difficulty stars, affinity tag, 1–2 signature specials, Set name chip). Free: Quick Play only. Tooltip: "Repeating the same opponent reduces XP/Spoils; Tier up to restore."
- Primary CTA: "Draw & Start" (Quick Play) or "Start vs [Opponent]". Secondary: "Continue Rampage" / "Start Sprint" / "Start Story" (when on a Rampage).
- Daily/Weekly Banners: Featured Pairing, Bounties, Challenges
- Tokens & timings: focus ring on CTA (8px glow, 150ms); card hover scale 1.03, 120ms; panel slide 220ms

#### War Board
**Layout (mobile-first, scales to desktop)**
- Top: AI panel (portrait, name, health bar with armor chips, active effects icons; badges for Tier/Weather)
- Center: Card Stage (flip/reveal zone) with left/right discard stacks and War! overlay (marquee bar with animated bulbs; territory tint applied)
- Bottom: Player panel (portrait, health, Power chips), primary Draw button (lever metaphor: large, beveled; press depth 6px; success bounce 120ms; pull-down gesture on mobile) with Fortune halo, meters row
  - Spoils Meter (pips up to 10, then xN)
  - Epic Meter (segmented ring; displays "NEXT WAR EPIC" when full; pulses at 95%)
- Side Drawer (peek on mobile, fixed on desktop): Territory module (suit, weather, tier, Stank bar, bounty), Streak badge (with grace shield), Active Relics list, Rampage/Boss availability, Featured Pairing bonus (if active), territory Affinity tips
 

**Components**
- HealthBar: segmented with tick marks and damage/heal animations
- Meter: configurable for Spoils/Epic; supports tooltips and progress states
- TerritoryPanel: suit icon, rules tooltip, weather, tier selector (I/II/III), Stank bar, bounty objective
- StreakBadge: shows current streak and grace availability
- ProcToast: transient notifications (Lucky Draw queued/guaranteed, Double Damage, Free Relic inserted)
- CardStage: handles flip, War! sequence (3 face-down + 1 reveal), and particle effects

**Behaviors**
- Draw/Reveal: single primary action; auto-resolves rounds including ties as one round
- War!: quickly stack 3 face-down cards (≈80ms each), reveal 4th, apply massive damage modifier (territory may override)
- Procs:
  - Lucky Draws: glow on Draw button; toast "Relic queued"; add to Active Relics list
  - Double Damage: large critical-style damage number with bolt icon; respects Reduced Motion
  - Free Relic: toast and icon in Active Relics; removed after war or 2 reshuffles cooldown
- Suit Pity Feedback: after 4 suitless rounds, subtle tooltip "Winds shift toward [suit]" (no numeric odds shown)
- Mission Progress: non-blocking toasts; tap to open Missions panel
- Rampage Entry: if on a Rampage node, display a small step indicator (Sprint: 1/2, Boss; Story: 1/3, 2/3, Boss) and unique boss banner on the final node. Node tiles show modifier, time estimate, and reward preview. Remix Rampage (Warfront Pass) appears as a weekly fixed‑seed tile.

Round Feedback & Rules
- Underdog: toast on low‑rank loss ("Underdog: +1 next rank"); on low‑rank win ("Big Moment: 2× or +10"). Respects Reduced Motion
- Fortune: halo tooltip shows fill (e.g., 4/6); triggers Lucky/Double automatically when full
- War!: banner copy: "Winner deals 3× damage"; territory may override multiplier

**Tokens & timings**
- Flip: 300ms; damage pop: 300ms; War! stack: 3×80ms + reveal 220ms
- Lever press: 180ms press-in, 120ms rebound

#### Results (Bonus Rolls)
- Verdict Banner: Win/Loss; confetti/leaf/ice/swamp/jungle VFX aligned to territory
- XP Breakdown: base + Tier bonus + Spoils (cap noted) + missions
- Spoils Conversion: bar animates from Spoils count to XP; shows 1 Bonus Roll per 5 Spoils. Specimens collected are summarized with "new" badges and a CTA to open Knapsack.
- Bonus Rolls: slot-style reels (3 columns); stop order L→R; rarity color pulses; duplicate converts to shards with a pop
- Stank & Mastery: territory Stank bar increase; Warlord mastery progress
- CTAs: Rematch (same seed), Rematch (new seed), Back to Lobby. Tooltip: "Repetition decay may apply."
- Tokens & timings: roll spin 1.2s, per-reel stop delay 200ms; confetti burst 600ms; progress bars 500ms ease
- Log & Replay: "View Log" opens per‑round timeline; "Open Replay" (Free: highlights; Pass: full step‑through with proc tables)
- Set Panels: "Set Breakdown" (cards used this war); Set Scout (Pass) previews next 3 possible Sets for the chosen Warlord
- Emotes: if a new emote unlocked, show "Equip to wheel" CTA
 - Forging: if a recipe becomes craftable (costs met), show a "Forge now" CTA with cost preview; link to Knapsack > Forging

### UI/UX Details

#### **Lobby/Home**
- Warlord carousel, Territory selector (tier, weather, Stank), Missions panel, Daily Rewards
- “Next Unlock” chip: XP_to_next and upcoming reward
- Quick Play: remembers last Warlord/Territory/Tier
 - Mastery Panel: shows current Warlord Mastery rank/progress and next reward
 - Opponent Chooser (Warfront Pass): toggle to pick an opponent; shows difficulty stars, affinity, signature specials; tooltips explain repetition decay and auto-bump. Free: Quick Play only.
- Active Set: “Active Set: [name]” chip
  - Free: Reroll (1× free per war); no Lock
  - Warfront Pass: Reroll (1× free +1/day), Lock (spends token; lasts 3 wars or until a loss; disabled in ranked slices)
 - Leaderboards: button on Lobby; slices for global/territory/tier/warlord/speed/no-tie. Warfront Pass unlocks deep filters and history; free sees Top 100 and their rank.

#### **Results Screen**
- Top: Win/Loss and XP total with breakdown (base, difficulty, Spoils, missions)
- Middle: Spoils earned/converted, bonus rolls, shard drops/cosmetics
- Bottom: Territory Stank gained, bounty status, Rampage progress/clear (and relic variant earned if applicable), Featured Pairing participation, Warlord Mastery XP gained
 - Rematch CTAs: “Rematch (same seed)” and “Rematch (new seed)” buttons; tooltip shows any repetition decay that will apply
 - Rank Delta: if the run affects a leaderboard slice, show rank change and CTA to view the board (Warfront Pass deep-link includes filters).

#### **Navigation & Flows**
- Deep links from Missions to pre-selected Territory/Tier
- One-tap rematch with same settings
- Collections: shard progress bars; “Where to earn” badges link to Territories; Knapsack (Specimen inventory) shows territory/warlord/rarity sets and cosmetic rewards
 - Collections: shard progress bars; “Where to earn” badges link to Territories; Knapsack (Specimen inventory) shows territory/warlord/rarity sets and cosmetic rewards; Forging tab lists recipes, costs, and supports bulk craft (Pass)
 - History: “Rematch with same seed” option for practice runs (uses replaySeed)
 - Rampages: enter/continue Rampage route directly from Territory selector, with node preview and cosmetic reward preview

#### **Emotes (UI/UX)**
- Purpose: quick, expressive cosmetic reactions that don’t slow the game or reveal information.
- Formats:
  - Face Emotes: short animated Warlord portrait reactions with light SFX (≤500ms tail).
  - Stickers: small static/animated decals that appear briefly near the board edge.
  - Stamps: minimal text/glyph bubbles (localized), low profile.
- Constraints:
  - Cosmetic only (no gameplay effect). Cooldown: 5s; queue buffer: 3. Opponent emotes can be minimized/muted.
  - Reduced Motion: swaps loops for single frames; SFX attenuated.
- Wheel & Equip:
  - Radial wheel (hold/tap on portrait or key): 8 slots (4 quick, 4 secondary). Results screen offers “Equip to wheel” for new emotes.
- Optional triggers (user-toggle):
  - Tie win/loss → auto Wow/Oops once per war; Jackpot/Epic → Banner Salute if equipped.
- Integration:
  - Specimens: completing Specimen collections unlocks themed emotes (cosmetic only).
  - Brag Backs: choose one Badge Emote to display as a subtle corner badge on card backs.
- Starter inventory (examples):
  - Universal (face/sticker)
    - GG Howl (face; friendly short howl + leaf confetti)
    - Wow Eyes (face; widened eyes + sparkle)
    - Calm Breath (face; soft frost/steam exhale)
    - Thumbs Branch (sticker; twig thumbs‑up)
    - Oops Pinecone (sticker; pinecone bonk)
  - Territory‑themed
    - Forest: Spore Cheer (sparkle spores), Sap Wink (sticky wink)
    - Mountain: Frost Whistle (frost note), Summit Nod (snowflake shimmer)
    - Swamp: Bog Bubble (plop), Firefly Swirl (glow ring)
    - Jungle: Vine Wave (swish), Beetle Parade (tiny beetles)
  - Specimen tie‑ins
    - Dumpster Crown Tilt (face; smug crown tilt)
    - Eternal Whiff Jar (sticker; sealed jar puff)
    - Banana Peel Tap (sticker; peel spin + ding)
  - Warlord‑specific
    - Sasquatch: Rock Toss Cheer / Plaid Pop
    - Yeti: Frost Wink / Warmth Wave
    - Mapinguary: Bark Shield Nod / Leaf Peck
    - Agogwe: Shadow Peek / Vine Snap

#### **Accessibility**
- Colorblind-safe suit indicators (shape-coded); high-contrast theme option
- Reduced Motion: replace flips/bursts with fades/counters; disable large shakes
- Screen reader labels on Draw, meters, and outcomes; concise announcements for procs

#### **Performance & Animation**
- Flip 250–350ms easing; damage pop 300ms; cap animations at 60fps
- Use GPU-friendly transforms and sprite sheets for particles
- Lazy-load audio; prefetch assets for selected Warlord/Territory

#### **Telemetry & QA Hooks**
- Log: animation durations, dropped frames, input latency, proc counts, mission toasts
- A/B bundles for animation timing (fast/standard/reduced) and haptic/feedback intensity

## Technical Architecture

### Overview
The technical stack for *Bigfoot War* is designed for a web-based, single-player card game with AI opponents, emphasizing scalability, low latency, and ease of development. Hosting on Vercel leverages its serverless capabilities, edge caching, and seamless CI/CD for fast deployments. The architecture integrates a modern full-stack framework to unify frontend and backend, reducing complexity from the original vanilla setup. Key focuses include secure user data handling, performant animations, and integration points for monetization.

We use **Next.js** as the core framework, which bundles React for the frontend and Node.js for backend API routes. This allows static rendering for the frontend (fast loads via Vercel's CDN) and serverless functions for dynamic logic (e.g., game simulations). TypeScript is used across the board for type safety, especially in card/deck management and API interactions.

### Backend (Node.js with Next.js API Routes)

**Core Services**:
- **Game Engine**: Handles War logic (shuffling, comparisons, damage calculations), fixed 54-card deck handling (discard/reshuffle, no capture), tie resolution (3 down + 1 up, 4x damage, all cards to discard), card management (one-for-one Warlord replacements; Relics occupy Joker slots), and AI behavior. Maintain suit/rank guardrails when replacing cards. Supports resolving the final deck from selected Warlord Deck × Signature Set deterministically. Deterministic PRNG (see Seed/PRNG Contract). Use `lodash` for utilities.
- **User Management**: Authentication (NextAuth or OAuth provider), progression (XP, unlocks), and statistics (win rates, streaks). Store in Postgres via Prisma.
- **Matchmaking**: AI opponent selection with difficulty scaling; opponent identity/variant rotation; repetition decay/auto-bump stored in Redis.
- **Rewards**: Daily bonuses, random events, progression unlocks. Vercel Cron for daily/weekly tasks (resets, bounties, featured pairings).
- **Cache/Session**: Upstash Redis (or Vercel KV) for active war session state (rngCounter, state hashes, meters), repetition counters, rate limits.

**Database**:
- **Primary: Vercel Postgres + Prisma**: SQL schemas for users, wars, war_events, warlord_decks, warbooks, mastery, challenges. Strong consistency, easy analytics/joins, serverless scale.
- **Alternatives**:
  - **MongoDB Atlas (Serverless)**: Flexible docs for rapid iteration; good for nested event payloads.
  - **Supabase (Postgres)**: Open-source managed Postgres with auth/storage; viable alternative to Vercel Postgres.
- **Schema Example** (TypeScript interfaces reflecting Postgres models):
```typescript
// User
interface User {
  id: string;
  username: string;
  level: number;
  xp: number;
  power: number;
  unlockedWarlords: string[];
  unlockedRelics: string[];
  dailyStreak: number;
  lastLogin: Date;
  pendingFortuneBoost?: number; // e.g., +2 starting Fortune (from streak/reward)
  plan: 'free'|'pass';
  entitlements: {
    opponentPicker: boolean;
    territoryChooserUnlimited: boolean;
    totemSlots: 1|2;
    signatureSet: { freeRerollsPerWar: number; extraFreeRerollsPerDay: number; lockTokensPerDay: number; lockAllowedInRanked: boolean };
    rampage: { activeRoutesPerWeek: number; retriesPerDayAfterClear: number; remixEnabled: boolean };
    historyLimit: number; // -1 for unlimited
    replayMode: 'highlights'|'full';
    leaderboardSlices: 'headline'|'deep';
    emoteWheelSize: 4|8;
    analyticsDepth: 'simple'|'advanced';
    collectionsHints: boolean;
  };
}

// War (summary)
interface War {
  id: string;
  userId: string;
  warlord: string;
  enemyWarlord: string;
  territory: string;
  result: 'win' | 'loss' | 'draw';
  damageDealt: number;
  damageTaken: number;
  cardsPlayed: string[];
  specialEffects: string[];
  timestamp: Date;
}
// War Event (round-level)
interface WarEvent {
  warId: string;
  roundIndex: number;
  playerCard: { rank: number; suit: 'H'|'S'|'D'|'C'; isSpecial: boolean; tags: string[] };
  enemyCard: { rank: number; suit: 'H'|'S'|'D'|'C'; isSpecial: boolean; tags: string[] };
  tieSequence?: { facedownCount: number; finalReveal: { playerRank: number; enemyRank: number } };
  territory: { key: string; weather?: string; tier: number };
  procs: { lucky?: boolean; doubleDamage?: boolean; freeRelicInserted?: boolean };
  modifiersApplied: string[];
  damage: { dealtByPlayer: number; dealtByEnemy: number };
  spoilsEarned: { player: 0|1; enemy: 0|1 };
  streakState: { player: number; enemy: number };
  timestamp: Date;
}

// Per-Warlord aggregate (materialized view)
interface WarlordStats {
  userId: string;
  warlord: string;
  totalWars: number;
  wins: number;
  avgRounds: number;
  avgDamageDelta: number;
  territoryBreakdown: Record<string, { wars: number; winRate: number }>;
  tierMix: Record<'I'|'II'|'III', number>;
  procRates: { lucky: number; doubleDamage: number; freeRelic: number };
  suitDistribution: { H: number; S: number; D: number; C: number };
  tieRate: number;
  avgSpoils: number;
}

// Mastery, Variants, Challenges
interface WarlordMastery {
  userId: string;
  warlord: string;
  masteryXp: number; // thresholds: 200/500/1000/1600/2400
  rank: 1|2|3|4|5;
  unlockedSignatureSets: string[]; // ids
  signatureRelicMk: 1|2|3;
}

interface SignatureSet {
  id: string;
  warlord: string;
  name: string; // e.g., "Avalanche", "Rock & Rally"
  cards: Array<{ rank: number; suit: 'H'|'S'|'D'|'C'; specialId: string }>;
  unlockSource: 'default'|'level'|'territory_clear'|'featured'|'purchase';
  createdAt: Date;
  updatedAt: Date;
}

interface EntitlementPlan {
  plan: 'free'|'pass';
  opponentPicker: boolean;
  territoryChooserUnlimited: boolean;
  totemSlots: 1|2;
  signatureSet: { freeRerollsPerWar: number; extraFreeRerollsPerDay: number; lockTokensPerDay: number; lockAllowedInRanked: boolean };
  rampage: { activeRoutesPerWeek: number; retriesPerDayAfterClear: number; remixEnabled: boolean };
  historyLimit: number; // -1 for unlimited
  replayMode: 'highlights'|'full';
  leaderboardSlices: 'headline'|'deep';
  emoteWheelSize: 4|8;
  analyticsDepth: 'simple'|'advanced';
  collectionsHints: boolean;
}

interface WarlordDeck {
  id: string;
  warlord: string;
  name: string; // e.g., "Avalanche", "Rock & Rally"
  description?: string;
  // Identity template: which Natural cards are replaced by which specials
  replacements: Array<{ rank: number; suit: 'H'|'S'|'D'|'C'; specialId: string }>;
  unlockSource: 'default'|'mastery'|'rampage'|'featured'|'purchase';
  createdAt: Date;
  updatedAt: Date;
}

interface FeaturedPairing {
  weekId: string;
  warlord: string;
  territory: string;
  startsAt: Date;
  endsAt: Date;
}

interface WarlordChallenge {
  id: string;
  warlord: string;
  description: string;
  activeFrom: Date;
  activeTo: Date;
  reward: { masteryXp: number; cosmeticShard: number };
}
```

**API Endpoints** (Next.js `/api` Routes):
- `POST /api/war/start`: Initializes a new War session, shuffles decks, and selects AI opponent.
- `POST /api/war/play`: Processes a card play, resolves effects, and returns updated game state.
- `GET /api/user/profile`: Retrieves user data (secured with auth middleware).
- `POST /api/user/daily`: Claims daily bonus, updates streak.
- `GET /api/warlords`: Lists available Warlords based on user unlocks.
- `GET /api/territories`: Lists available Territories.
- `GET /api/history`: Paginated list of recent wars (filters: warlord, territory, tier, result).
- `GET /api/history/:warId`: Returns war summary + round events for a specific war.
- `GET /api/stats/warlord/:name`: Returns per-Warlord aggregates for the current user.
 - `GET /api/mastery/:warlord`: Returns mastery state and unlocked Signature Sets for a warlord.
 - `POST /api/mastery/progress`: Submits mastery XP gains from a war; server validates against warId.
 - `GET /api/featured`: Lists active Featured Pairings.
 - `GET /api/challenges/:warlord`: Lists active challenges for a warlord; claim endpoint `POST /api/challenges/claim`.
 - `GET /api/opponents?territory=...&tier=...`: Lists available AI Warlords for selection with metadata and lock reasons.
- `POST /api/war/start` (extended): Accepts optional `opponent` and `rematchSeedMode` ("same"|"new"); enforces repetition decay and auto-bump rules on rewards.
- `GET /api/warlord-decks/:warlord`: List available Warlord Decks for a Warlord.
- `POST /api/warlord-decks`: Create or update a Warlord Deck (admin/dev tools only).
 - `GET /api/signature-sets/:warlord`: List Signature Sets for a Warlord.
 - `POST /api/signature-sets`: Create or update a Signature Set (admin/dev only).
 - `POST /api/signature-sets/lock`: Spend a Lock Token to lock a set for 3 wars or until a loss (server validates tokens and ranked restrictions).
- `GET /api/leaderboards?slice=...`: Returns Top 100 for a given slice (territory, tier, warlord, region, season). Free for headline slices; advanced filters require Warfront Pass.
 - `GET /api/leaderboards/me?slice=...`: Returns the user's rank snapshot for the slice.
 - `GET /api/replays/:warId`: Returns replay metadata for stepping through (Warfront Pass for full detail; free for highlights).
 - `POST /api/season/finalize` (cron): rotates seasons, snapshots ranks, computes rewards.

**Turn API Contract**
- `POST /api/war/start`
  - Request: { warlordId, territory, tier, opponentId?, rematchSeedMode?: 'same'|'new', setAction?: { type: 'reroll'|'lock'; signatureSetId?: string } }
  - Response: { warId, replaySeed, rngCounter: 0, stateHash, player: { deckSig, signatureSetId, signatureSetName }, opponent: { id, signatureSetId, signatureSetName, deckSig }, meters: { fortune: base, epic: base } }
- `POST /api/war/play`
  - Request: { warId, stateHash, rngCounter }
  - Server: replays seed to next events, resolves round, increments rngCounter
  - Response: { delta: { roundIndex, playerCard, enemyCard, damage, procs, modifiers, spoils }, rngCounter, stateHash, meters }
- Notes: client never sends chosen cards—draw order is derived server-side from seed + rngCounter. Client sends only the last acknowledged `stateHash` to protect against desync.
- **Security**: Use Vercel's edge middleware for rate limiting and CORS. Implement secure RNG with Node's `crypto` module to prevent predictable outcomes.
 - **Security**: Use Vercel's edge middleware for rate limiting and CORS. Implement secure, seeded RNG (e.g., HMAC-based seed) with Node's `crypto` to drive deterministic mapping, replacement selection under guardrails, and seeded shuffles. Persist per-war seeds/mappings in session state for replays/analytics.

### Seed / PRNG Contract
- Seed Derivation: `replaySeed = HMAC_SHA256(secretKey, userId|warId|timestamp)`; store `replaySeed` and never expose `secretKey`.
- RNG Stream: derive independent substreams (e.g., via HKDF) for: mapping selection, shuffles, proc rolls. Track `rngCounter` per stream.
- Determinism Rule: given the same `replaySeed` and `rngCounter` positions, server recomputes the exact same events; client state is validated via `stateHash` after each round.
- Auditability: store { warId, replaySeed, finalCounters } for replay/debug; analytics link by warId only.

**In-App Payments Integration**:
- **Recommended: Stripe**: For cosmetic purchases (skins, boosters). Use Stripe's Node.js SDK for server-side verification. Create endpoints like `POST /api/purchase` to handle webhooks and update user DB (e.g., unlock skin). Supports one-time payments and boosters with timed expirations.
- **Alternatives**:
  - **PayPal**: For broader payment options; integrate via SDK for buttons and webhooks.
  - **Paddle**: Handles global taxes/VAT; merchant-of-record reduces compliance needs.
- **Implementation**: Use hosted checkout pages for PCI compliance. Store transaction IDs only; apply boosts via DB flags checked in game logic.

### Frontend (React with Next.js)

**Core Components**:
- **Game Board**: Renders card displays, health bars, streak counters, and UI elements using React components.
- **Card Animations**: Flip reveals, particle effects, and damage numbers via libraries like Framer Motion or GSAP.
- **Audio System**: Sound effects (flips, roars) and ambient music using Howler.js for cross-browser support.
- **UI System**: Menus for Warlord selection, progression screens, and reward pop-ups with responsive design.

**Technology Stack**:
- **Next.js + React**: For component-based UI and SSR/SSG for performance. Use Tailwind CSS for styling and transitions.
- **HTML5 Canvas (via Konva.js)**: For custom animations and effects; easier state management than raw Canvas.
- **Web Audio API (with Howler.js)**: Handles sounds; preload assets for low latency.
- **State Management**: React Context or Zustand for game state (e.g., current deck, health).
- **Local Storage**: Via `localforage` for offline progress and settings.
- **Enhancements**: Add PWA support with Next.js for mobile feel. Use Vercel's image optimization for card assets.

**Performance Optimizations**:
- Static generation for non-dynamic pages (e.g., menus).
- Lazy loading for audio/animations to meet <3s load times.
- Target 60fps with React memoization and Canvas throttling.

### AI System

**Difficulty Scaling**:
- **Easy**: Pure random card selection, base stats.
- **Medium**: Weighted draws favoring higher ranks, +10% stats.
- **Hard**: Predictive selection (e.g., hold specials for ties), +20% stats.
- **Expert**: Basic minimax algorithm for optimal plays, max stats.

**AI Behavior**:
- **Deck & Identity**: AI plays as a specific Bigfoot Warlord (or Boss) with its own mapping variant. Its deck is generated with the same 54-card rules, replacement guardrails, and seeded mapping/shuffle as the player.
- **Card Selection**: Use weighted randomness (via Lodash); adapt based on player history stored in DB.
- **Special Effects**: Trigger probabilistically, scaled by difficulty.
- **Adaptive**: Query user win rate from DB to adjust difficulty dynamically (e.g., via API middleware).
 - **Asymmetric Counters**: Territory-specific AI plans per Warlord (e.g., Mountain holds high Spades for post-tie punish vs Sasquatch; Swamp sets ties to exploit debuffs vs Yeti). This creates distinct matchups that reward variant selection and territory mastery.
 - **Variant Rotation & Anti-Farming**: For selectable opponents, the AI rotates through its variants across repeated encounters; repetition decay and auto-bump rules are enforced server-side to keep rewards balanced.

### Deployment and Monitoring
- **Hosting**: Vercel for all-in-one deployment. Git-based CI/CD; preview branches for testing.
- **Metrics**: Use Vercel Analytics for load times (<3s), API responses (<100ms), and uptime (99.9%).
- **Scalability**: Serverless auto-scales; monitor costs for high-traffic events.
- **Future Expansions**: Easy to add WebSockets (via Upstash or similar) for potential multiplayer if needed.

### Analytics & Instrumentation
- Per-War: rounds played, round win rate, Spoils earned, Spoils XP granted (pre/post scaling and cap), Fortune fills/uses, proc counts (Lucky, Double, Free Relic), suit pity activations, time-to-first-special, streak changes, Epic Meter gain/use, Jackpot triggers, Underdog triggers by rank band.
- Economy: daily XP earnings, source breakdown (War Win, Spoils, daily bonuses), bonus-roll outcomes, Relic insertions and durations.
- Player Progression: time-to-first Warlord unlock, session length, sessions/day, difficulty mix.
- Privacy/Security: aggregate metrics; do not store raw seeds or personally identifiable info in analytics payloads.
 - Cross-link: analytics events should include `warId`, `replaySeed`, `warlord`, and `territory` to correlate with Game Log/history for debugging and replays.
- Mastery & Sets: track mastery XP gains, challenge completions, Signature Set usage per war, and Featured Pairing participation.
- Warfront Pass & Leaderboards: track Warfront Pass engagement (stats views, filters used, replays opened), fraud signals (server replay mismatch, abnormal proc patterns), season rotations, and leaderboard API latency. Pass perks: “Set Scout” (preview next 3 possible Sets), deeper Underdog analytics.

## Monetization

### Free-to-Play Model

**Core Game**: Completely free to play
**Progression**: All content unlockable through gameplay
**No Pay-to-Win**: All purchases are cosmetic or convenience

### Premium Features

**Bigfoot Skins**: Visual variants of Warlords ($2.99 each)
**Card Backs**: Custom card back designs ($1.99 each)
  - **Brag Backs**: dynamic backs that change with XP
**Territory Themes**: Visual territory variants ($4.99 each)
**XP Boosters**: Double XP for 24 hours ($0.99)
**Signature Sets (Cosmetic Frames/Badges)**: Cosmetic frames/badges for Sets ($2.99–$4.99, non-power). Sets themselves are unlockable via Levels/Rampages/Featured Pairings; purchases never add power.

### Warfront Pass (Competitive, Non-Power)
- Purpose: Enhance mastery, competition, and analysis with no gameplay power.
- Price: $2.99/month or $14.99/year (regional pricing). 7-day trial. Includes seasonal cosmetic bundle (card back, frame, emote).
- Features:
  - Advanced Stats: per-Warlord/Signature Set/Territory/Tier breakdowns, trendlines, heatmaps (War!, rounds, damage deltas), card legends timeline, Fortune/Epic trigger analysis, custom filters (opponent, seed mode, weather, boss, rampages only).
  - Leaderboards: global/region/territory/warlord/set/speed/no-tie slices; historical ranks; deep filters; alerts on rank changes. Core Top 100 and your rank remain free.
  - Replays Studio: fetch/step through replays with proc tables; shareable stat cards; CSV/JSON export.
  - Weekly Fixed-Seed Challenge: Warfront-only board for a seeded boss run; cosmetic rewards. Free can view boards and top replays.
  - Seasonal Emotes: one unique seasonal emote per season (Badge Emote layer for Brag Backs).
- Safeguards: privacy opt-out; no stat/Relic power; server-verified runs only; anti-cheat flags hidden automatically.

### Free vs Warfront Pass

Free (Core, Non-Power):
- Territories: 2 rotating per day (all tiers I–III when in rotation)
- Pre‑war controls: Quick Play only (no Opponent Picker); 1 Totem slot; Signature Set auto‑roll with 1× free Reroll; no Lock tokens
- Rampages: 1 active route/week; retries after clear limited to 1/day
- Challenges: Daily/Weekly basics (cosmetic shards only)
- History: last 5 wars summary; no step‑through
- Replays: highlights only (key rounds)
- Leaderboards: headline slices (global + your rank)
- Emotes: wheel size 4; base inventory
- Analytics: simple post‑war (3–5 stats)
- Collections: Knapsack visible; no set completion hints

Warfront Pass (Competitive, Non-Power):
- Territories: full chooser anytime
- Pre‑war controls: Opponent Picker; 2 Totem slots; Signature Sets: +3 Lock tokens/day; +1 extra free Reroll/day
- Rampages: unlimited retries; rotating Remix Rampage (cosmetic)
- Challenges: Advanced Warlord Challenge Track (cosmetic bundles, emotes, frames)
- History: unlimited
- Replays: full step‑through with proc tables; share/export
- Leaderboards: deep slices (territory/tier/warlord/set/speed/no‑tie), historical trends, alerts
- Emotes: wheel size 8; seasonal emote; badge layer for Brag Backs
- Analytics: Set Scout (preview next 3 Sets); Underdog band breakdowns; legends timeline
- Collections: set preview/hints; duplicate‑to‑shard bonuses (cosmetic only)

### Retention Features

**Daily Login Rewards**: Free XP, cards, and bonuses
**Win Streak Bonuses**: Consecutive wins unlock better rewards
**Lucky Moments**: Random events keep players engaged
**Achievement System**: Unlock rewards for various accomplishments

## Success Metrics

### Engagement Metrics
- **Session Length**: Target 3-6 minutes
- **Sessions Per Day**: Target 2-3 sessions
- **Retention**: 70% Day 1, 40% Day 7, 20% Day 30
- **Win Rate**: 60-70% (balanced difficulty)

### Monetization Metrics
- **Conversion Rate**: 5-10% of players make purchases
- **ARPU**: $2-5 per paying user
- **LTV**: $10-20 per paying user
- **Revenue**: $1,000-5,000 monthly (target)

### Technical Metrics
- **Load Time**: <3 seconds initial load
- **Performance**: 60fps animations
- **Uptime**: 99.9% server availability
- **Response Time**: <100ms API responses

## Conclusion
## Content Roadmap

### Roster Plan (v1 and beyond)
- Total named Bigfoots in roster backlog: ~59
- v1 playable target: 10 Warlords (Signature Sets per Warlord)
- v1 AI-only opponents: 14–20 (mix of non-playables and playables’ alternates)
- 6-month goal: 24 playable Warlords (expanding Signature Sets per Warlord) via monthly pod releases

### Pod Groupings (art/kits/assets)
- PNW Pod: Sasquatch, Bukwus, Grassman, Matlox, Gugwe, Big Grey Man
- Mountain/Glacial Pod: Yeti, Dzu-Teh, Nyalmo, Mecheny, Gin Sung
- Jungle Pod: Mapinguary, Orang Gadang, Kapre, Ukumarzapai, Curinquean
- Swamp/Beast Pod: Skunk Ape, Ucu, Sisemite, Maywas, Nasnas

### Signature Set Identity Notes (per Warlord)
- Sustain/Control Sets: territory‑aligned sustain, armor, mild debuffs; avoids raw damage spikes
- Aggressor/Burst Sets: higher face/high‑band skew; Double Damage windows via curated cards; minimal defense
- Trick/Utility Sets: tie manipulation, reveal peeks, one‑shot cadence changes; low direct damage

### Kit Bible Snippet (per Warlord)
- Signature Moves (max 3 named identity effects) with clear constraints; no more than one stun/skip per war on average
- Effect Palette Limits: healing (+1 to +3), armor (+1 to +2), rank +/-1, reveal/peek, tie tools; damage multipliers only via Double Damage/Jackpot
- Territory Affinity: one primary and one secondary territory where the kit feels best; no mandatory suit skew that violates guardrails

### Release Cadence
- Monthly: 1 Pod release (4–6 Warlords added as AI; 1–2 become playable), 1 new boss variant, 1 relic variant, seasonal cosmetics
- Weekly: Featured Pairings (4–6 spotlight matchups), rotating Bounties and Weather; one mini-event or rampage remix

### Opponent Pool Rules
- Per Territory: maintain a pool of 8–12 opponents (mix of playables and AI-only)
- Boss Rotation: each territory has 1 primary boss and 1–2 variants; rotate weekly; Rampages always culminate in the current boss
- Tier Distribution: ensure at least 2 opponents tuned per Tier; Expert adds one “hard counter” kit to encourage Set diversity
- Repetition Controls: standard decay/auto-bump rules apply to chosen opponents

### v1 Slice (example)
- Playable (10): Sasquatch, Yeti, Mapinguary, Agogwe, Grassman, Kapre, Skunk Ape, Genoskwa, Didi, Bukwus
- AI-only pool (16): Big Grey Man, Matlox, Gugwe, Dzu-Teh, Nyalmo, Mecheny, Gin Sung, Orang Gadang, Ukumarzapai, Curinquean, Ucu, Sisemite, Maywas, Nasnas, Teh-Ima, Hibagon
- Territories: all 4 with Rampages and 1 boss each; add 1 boss variant per month
- Signature Sets: 4–6 per playable
- Systems: Signature Sets (auto‑roll & lock), Fortune/Epic meters, Opponent chooser (with decay), Game Log, Featured Pairings

### 6-Month Expansion Outline
- Month 1–2: Jungle Pod release (2 playables), boss variant, cosmetic set
- Month 3: Mountain Pod focus (2 playables), new Rampage route remix, relic Mk II
- Month 4: Swamp Pod focus (2 playables), seasonal event, charm pack (if adopted)
- Month 5: PNW Pod focus (2 playables), boss variant, board frame set
- Month 6: Mixed pod (2 playables), new featured pairing ruleset, analytics-driven balance pass

**Bigfoot War** combines the simplicity of traditional War with engaging Bigfoot theming and slot machine appeal. The game targets casual players who want quick, satisfying sessions with clear progression and random rewards. The simplified systems make it accessible while the Bigfoot theme and special effects keep it engaging.

The Node.js web architecture ensures broad accessibility while the free-to-play model with cosmetic purchases provides sustainable monetization. The development roadmap focuses on core gameplay first, then content expansion, ensuring a solid foundation for long-term success.

## Glossary

### Bigfoot War Terms
- Signature Set: Small, named package of 2–4 Warlord Cards auto‑rolled at war start; defines cadence/identity without changing power; may be Rerolled/Locked.
- Warlord Deck: Base deck template per Warlord; final mapping is resolved from Warlord Deck × Signature Set under guardrails. Unlock sources: default, mastery, rampage, featured, purchase.
- Warlord Cards: Special identity cards that replace specific Natural cards under guardrails.
- Relic: Powerful effect occupying a Joker slot; may have Mk variants tied to territories/bosses.
- Stank (Territory Progression): Territory XP track; scent ranks Whiffy → Pungent → Rank → Rancid → Mythic Musk; gates Signature Sets and Totem variants (cosmetic only).
- Spoils: Currency gained per round win; converts to XP and bonus rolls at war end.
- Bonus Roll: Cosmetic-only loot spin earned from Spoils (1 per 5) and certain events; duplicates convert to shards.
- Specimen (Spoils Junk): Cosmetic-only “junk-treasure” attached to Spoils; themed by territory/warlord with rarity; fills collections for emotes, Brag Back badges, and titles.
- Knapsack: Specimen inventory UI showing territory/warlord/rarity sets, progress, cosmetic rewards, and Forging.
- Forging: Cosmetic crafting using Spoils, Specimen shards, Stank/Mastery gates, and Blueprints to create frames, badges, emote variants, skins, card backs, and titles; unforge returns partial Spoils/shards.
- Shards: Fragmented cosmetic currency from duplicate bonus rolls, Specimen fusions, or dismantling cosmetics; Forging input only; no power.
- Gauntlet/Rampage: Sprint (2 nodes) or Story (3 nodes) mini-campaign inside a territory ending with a boss.
- Warfront: Competitive track encompassing leaderboards, analytics, replays, and queues.
- Warfront Pass: Paid membership unlocking advanced analytics, deep leaderboards, full replays, weekly seeded challenges (non-power).
- Fortune Meter: Fills on negative outcomes; when full, guarantees a Lucky Draw or Double Damage within 2 rounds; resets after triggering.
- Epic Meter: Fills via Spoils and streak milestones; when full, the next War is Epic with increased proc rates and better bonus-roll odds.
- Streak (Win Streak): Consecutive war wins granting temporary, time-limited bonuses and unlocks.
- Territory: Suit-themed battleground with tiers, weather, Stank, rules, and bounties.
- Weather: Daily territory modifier that changes rules (e.g., Rain, Blizzard).
- Challenges: Rotating Warlord-specific constraints granting Mastery XP and cosmetics.
- Tie (War!): Special tie sequence (3 down + 1 up) with territory-specific massive damage.
- War: A full match from setup until one Warlord reaches 0 Health.
- Deck (54): Fixed deck size per Warlord: 52 Natural + 2 Relics; specials replace Natural cards one-for-one.
- Discard/Reshuffle: Played cards go to owner’s discard; when draw pile is empty, shuffle discard to form a new draw deck; no card capture.

### Technical Terms
- Deterministic Mapping: Seeded selection of exactly which Natural cards are replaced by specials under guardrails.
- Seed (Replay Seed): Derived secure seed enabling reproducible mapping and shuffles for replays and verification.
- Deterministic Shuffle: Seeded shuffle guaranteeing reproducible draw orders.

### Game/Visual/UX/UI Jargon
- Bands (Rank Bands): Face (A–J), High (10–7), Mid (6–4), Low (3–2).
- Guardrails: Suit/rank balance rules for replacements to preserve identity and fairness.
- Proc: Probabilistic trigger (e.g., Lucky Draw, Double Damage, Free Relic); subject to caps and visibility rules.
- Pity (Suit Pity): Bias to surface territory suit after drought (UI tooltip only; no numeric odds shown).
- Bounties: Rotating territory objectives granting extra rewards.
- Deck Mutation: Start-of-war, territory-defined promotion/tag applied under guardrails.
- Jackpot: Rare, deterministic-plus-random trigger for a large bonus.
- Featured Pairing: Weekly Warlord × Territory bonus pairing.
- Card Stage: Central play surface for flips/reveals.
- War! Overlay: Marquee-style overlay shown during tie resolutions.
- Lever Button (Draw Lever): Primary action control used to draw/reveal cards.
- Side Drawer: Context panel showing territory module, streak, active relics, and ticker items.
- Top Marquee: Opponent header with portrait, name, health, armor chips, and badges.
- Health Bar: Segmented health display with damage/heal animations.
- Meter: Generic progress component used for Spoils/Epic; supports tooltips and states.
- Spoils Meter: Pips-based meter that tracks Spoils earned within a war.
- Epic Meter (UI): Segmented ring that flags the next war as Epic when full.
- Fortune Halo: Visual halo around the Draw lever indicating Fortune fill state.
- Territory Panel: UI module showing suit, rules tooltip, weather, tier, Stank, and bounty.
- Streak Badge: UI element indicating win streak and grace availability.
- Proc Toast: Transient notification for Lucky Draw, Double Damage, Free Relic, and similar procs.
- Results Modal: Post-war dialog summarizing outcome, XP, Spoils conversion, rolls, Stank, and Mastery gains.
- Warlord Carousel: Lobby selector for choosing a Warlord, showing portrait and mastery state.
- Territory Row: Lobby row of selectable territories with suit icon, weather, tier, and Stank.
- Opponent Chooser: Toggleable grid to select an AI opponent with difficulty and Set metadata.
- Primary CTA: Main call-to-action button in a view (e.g., Draw & Start).
- Verdict Banner: Prominent win/loss indicator on the results screen.
- XP Breakdown (UI): Results section detailing base XP, difficulty, Spoils, and missions.
- Spoils Conversion (UI): Visual animation converting Spoils into XP and bonus rolls.
- Rank Delta (UI): Results label showing leaderboard rank changes with link to board.
- Tokens & Timings: Prescribed micro-interaction timings and glow/scale tokens for consistency.
- Style Pillars: High-level visual identity guidelines (bold, readable, playful-spooky).
- Art Direction: Visual style references (modern woodcut, pulp-cryptid), contrast, and shading approach.
- Typography (UI): Display/number font guidance, tabular lining for numeric readability.
- Colors (Design Token): Core palette plus suit/status tints used across UI.
- Type Scale (Design Token): Standardized font sizes/line heights for headings and labels.
- Spacing (Design Token): 4/8/12/16/24 spacing tokens shared across components.
- Radius (Design Token): Standardized corner radii for cards and panels.
- Motion (Design Token): Timing curves and durations for standard/fast/reduced motion.
- Visual Skins (Territories): Cosmetic overlays and VFX variants per territory.
- Reduced Motion: Accessibility mode replacing high-motion animations with simpler transitions.
- Screen Reader Labels: Accessibility text for controls and outcomes.
- Deep Links: Navigation hooks that pre-select Territory/Tier or resume Rampages from Missions.
- Leaderboards (UI): Views and filters for ranks by territory/tier/warlord/set/slices.
- Active Set (UI): “Active Set: [name]” chip with Reroll/Lock controls.
- Mastery Panel: Lobby panel for mastery rank/progress and variant selection.
- Mission Toasts: Non-blocking UI notifications for mission progress updates.
- Reel (Metaphor): Slot-machine metaphor where Card Stage acts as the reel.
- Parallax (Reel Flourish): Subtle vertical motion during shuffles to enhance feedback.
- Flip (Animation): Card flip animation timing and spring behavior.
- Damage Pop (Animation): Impact animation when damage numbers display.
- War! Stack (Animation): Three quick face-down stacks then reveal sequence.
- Epic Pulse (Animation): Totem ring pulse and chroma shift during Epic state.
- Territory Tint: Color grading applied to overlays/effects per territory theme.

## Technical Architecture Terms
- Next.js: Full-stack React framework used for UI and API routes.
- API Routes (Next.js): Serverless HTTP endpoints implemented within the Next.js app.
- Serverless Functions: On-demand compute units hosting backend logic (e.g., play/seed/shuffle).
- Vercel: Hosting platform providing serverless runtime, edge caching, and CI/CD.
- Edge Middleware: Request-time logic at the edge for rate limiting and CORS.
- Edge Caching: CDN-level caching for faster static/SSR responses.
- CI/CD (Git-based): Automatic builds and deploy previews triggered by git pushes/PRs.
- Vercel Analytics: Built-in telemetry for performance and availability metrics.
- Prisma: Type-safe ORM used with Postgres for DB access and schema.
- Vercel Postgres: Managed Postgres database service used as primary store.
- Upstash Redis: Managed Redis used for sessions, meters, and repetition counters.
- Vercel KV: Key-value store alternative to Redis for session/state.
- MongoDB Atlas: Managed document database used as an optional alternative.
- Supabase: Open-source Postgres platform offering auth/storage as an alternative.
- Stripe Webhooks: Server-side payment verification handlers for cosmetic purchases.
- Vercel Cron: Scheduled jobs for daily/weekly resets and rotations.
- Static Generation (SSG): Pre-rendered pages for fast, cacheable loads.
- Server-Side Rendering (SSR): Per-request rendering used for dynamic pages.
- Image Optimization: On-the-fly image processing and CDN delivery for assets.
- PWA (Progressive Web App): Installable web app enhancements for mobile-like experience.
- Tailwind CSS: Utility-first CSS framework for styling and transitions.
- Konva.js: Canvas abstraction library used for custom visuals and effects.
- Howler.js: Cross-browser audio library for SFX and ambience.
- Framer Motion: React animation library used for UI transitions.
- GSAP: Animation toolkit used for advanced timing/effects.
- Zustand: Lightweight state management for UI/game client state.
- localforage: Local storage wrapper for offline settings and progress.
- WebSockets (Future): Persistent connections planned for potential multiplayer/real-time features.
- Seed/PRNG Contract: Specification for deterministic seed derivation and RNG streams.
- replaySeed: Derived seed used to reproduce mapping and shuffles for replays.
- rngCounter: Monotonic counter advancing RNG positions per event/round.
- stateHash: Server-validated hash of acknowledged client state to prevent desync.
- HMAC-SHA256: Cryptographic function used to derive secure per-war seeds.
- HKDF: Key derivation used to create independent RNG substreams.
- Deterministic Shuffle: Seeded shuffle guaranteeing reproducible draw orders.
- Rate Limiting: Middleware control preventing abusive API usage.
- CORS: Cross-origin resource sharing configuration for API security.
- Materialized View (Stats): Precomputed aggregates (e.g., per-Warlord stats) for fast queries.
- deckSig: Compact deck signature used to reference a generated deck layout.
- Replays Endpoint: API route for fetching replay metadata and stepping through events.



--

## Overall Design Analysis & Strengths:

1.  **Clear Vision & Niche:** You've identified a strong niche: "War" rules + digital card battler + slot machine appeal + cryptid theme. This combination is unique and should appeal to your target audience. The "Depiction is not Endorsement" protocol is clearly articulated, setting a strong ethical foundation.
2.  **Accessibility & Session Length:** The 3-6 minute session length and "readable outcomes" are excellent for casual players and mobile-first design. This is crucial for retention.
3.  **Depth Without Overload:** You've struck a good balance. There's no heavy deckbuilding, which reduces friction, but the Warlord Decks, Signature Sets, Relics, Territories, and progression offer plenty of strategic choice and long-term goals. The "one-for-one replacements" and "guardrails" ensure strategic identity without broken mechanics.
4.  **Deterministic & Fair:** The emphasis on deterministic seeds, replays, and fair deck generation is a huge plus for competitive integrity and player trust. This is often overlooked in casual games but adds immense value.
5.  **Progression & Retention:** The multi-layered progression (levels, mastery, Stank, Rampages, challenges, daily/weekly content) provides constant engagement and a sense of accomplishment. The anti-farming mechanics are smart.
6.  **Monetization Strategy:** The free-to-play core with purely cosmetic/convenience monetization via the Warfront Pass and direct purchases is player-friendly and sustainable. The clear feature differentiation between Free and Pass is well-defined.
7.  **Technical Acumen:** The Next.js/Vercel/Postgres stack is a solid choice for a modern web game, balancing performance, scalability, and developer experience. The detailed API contracts and DB schemas show a strong technical foundation.
8.  **Detailed UI/UX:** The mockups and component breakdowns in the GDD provide an excellent starting point for visual design. The slot-machine metaphor, animation timings, and audio design considerations are particularly strong.
9.  **Content Breadth:** The sheer volume of Bigfoot lore you've cataloged, combined with the detailed card and Relic authoring tables, ensures a rich and expandable content pipeline.

## Suggestions & Feedback for Visual Prototyping:

1.  **Visual Language Consistency:**
    *   **Pulp-Cryptid vs. Modern Woodcut:** These are both fantastic aesthetics, but ensure they blend cohesively. "Modern woodcut" implies a certain flatness and texture, while "pulp-cryptid posters" might suggest more dynamic, illustrative, or even slightly distressed elements. How will these styles interact on a single card or screen?
    *   **Example:** Will Warlord portraits be woodcut-style with bold silhouettes, or more painterly like classic pulp art? Will text elements lean into the "spooky" or "bold, readable" aspects more?

2.  **Territory Visuals as Dynamic Backgrounds:**
    *   You've described weather effects beautifully. For prototyping, consider how these dynamic elements (rain, blizzards, fog, monsoons) can be implemented without overwhelming the UI.
    *   **Suggestion:** Perhaps the background could be a subtle animated panorama that hints at the environment and weather without being distracting. The "vignette" and "low fog pass" suggestions are excellent for this.

3.  **Card Design - Focus on Readability & "Pop":**
    *   **Information Hierarchy:** Given the amount of info on special cards (rank, suit, card_name, trigger, effect_summary, caps, notes), ensure the visual design prioritizes immediate readability of rank and suit, then the effect summary.
    *   **Visual Cues for Specials:** How will Warlord Cards and Relics immediately distinguish themselves from Natural cards? Unique borders, glows, icons, or background textures could work.
    *   **"Band" Visuals:** The "Rank-Band Underdog Rules" are clever. Can you subtly hint at a card's band (e.g., low-band cards having slightly more weathered or "underdog" art, while dominant cards look more pristine or imposing)?
    *   **Suggestion:** Prototype a few key Warlord Cards (e.g., Sasquatch's Rock Throw, Yeti's Glacier Mend) and a couple of Relics to see how all the required text and visual elements fit without clutter.

4.  **Slot Machine Metaphor - Refine the Tactile Feedback:**
    *   **Draw Button:** The "lever" metaphor for the Draw button is strong. How will its animation convey its "pull" and "release" visually and haptically (if on mobile)? A subtle visual "give" or spring animation upon press/release will be key.
    *   **Spoils Sparkle:** Make sure the Spoils conversion animation is truly satisfying. "Coins-like sparkle" is a good start; maybe adding a quick count-up sound effect.
    *   **War! Trigger:** The "siren + marquee lights + rapid 3-card 'clack' stack" sounds fantastic. This needs to feel impactful. Consider a quick camera shake or screen pulse.

5.  **Meters & Progression Visualizations:**
    *   **Fortune Halo & Epic Pulse:** These are great visual indicators. Ensure they are distinct enough. The Fortune halo around the Draw lever is smart.
    *   **Stank Bar:** "Scent adjectives" are a fun touch. Can the Stank bar itself visually change (e.g., increasing moss/grime, glowing more ominously) as the rank increases from "Whiffy" to "Mythic Musk"?
    *   **Mastery Rank:** How will Warlord Mastery (I-V) be displayed prominently? A badge or evolving icon next to the Warlord's portrait could work.

6.  **Accessibility Considerations (Pre-computation/Early Design):**
    *   You've listed "Colorblind-safe suit indicators (shape-coded)." This is excellent. Make sure these shape codes are integrated from the very start of card design, not as an afterthought.
    *   How will "Reduced Motion" impact all the described particle effects and shakes? Clearly defining alternative, simpler animations (e.g., fades instead of bursts) now will save time later.

7.  **Dynamic UI Elements for Pass Holders:**
    *   For the Warfront Pass features (Opponent Chooser, Set Scout, Leaderboard filters), think about how these "premium" UI elements will integrate into the existing free UI without feeling disruptive or jarring. They should feel like natural extensions.

