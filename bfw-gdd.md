# Bigfoot War: Game Design Document
 
**Genre**: Digital Card Game, Casual, War-Based  
**Platform**: Web (Node.js backend, HTML5 frontend)  
**Target Audience**: Casual gamers, slot machine players, card game enthusiasts (13+)  
**Session Length**: 3-6 minutes  
**Core Loop**: Choose Warlord → Select Territory/Tier → Draw cards → War with AI → Earn Spoils/XP/Reputation → Bonus rolls → Unlock content

## Game Overview

**Bigfoot War** is a simplified, web-based card game that combines the classic War card game with Bigfoot mythology. Players control Bigfoot Warlords in quick, engaging battles against AI opponents using a fixed 54-card deck per warlord (52 Natural + 2 Relics), deterministic seeded shuffles, territory-specific rules (tiers, weather, reputation), and impactful special effects.

### Core Concept
- **Traditional War Mechanics**: Draw top card, reveal simultaneously, higher rank wins
- **Bigfoot Theme**: Warlords, territories, and special cards themed around cryptid lore
- **Slot Machine Appeal**: Random rewards, visual feedback, win streaks, lucky moments
- **Simple Progression**: Unlock new Bigfoots and cards through victories
- **Deck Handling**: Fixed 54-card decks with one-for-one replacements, discard/reshuffle, no capture, clear tie (War!) rules
- **Deterministic RNG**: Seeded mapping and shuffles ensure fairness, replays, and analytics
- **Territory Layer**: Tiers, reputation, weather, bounties, and suit pity for strategic choice

### Terminology (Game & Gameplay)
- **Round**: One compare-and-resolution cycle. If a tie occurs, the full War! sequence (3 face-down + 1 reveal) is part of the same round and yields a single winner.
- **War**: A full match from setup until one Warlord reaches 0 Health.
- **War! (Tie)**: Both players place 3 cards face-down, then reveal a 4th; resolving reveal applies territory-specific massive damage.
- **Deck (54)**: Fixed per Warlord each war: 52 Natural + 2 Relics; specials replace Natural cards one-for-one.
- **Discard/Reshuffle**: Played cards go to each player’s discard; reshuffle when draw pile is empty; no card capture.
- **Warlord Cards**: Special identity cards replacing specific Natural cards according to guardrails.
- **Relics**: Powerful effects occupying Joker slots; Free Relics can temporarily replace a Natural card.
- **Replacement Guardrails**: Suit counts near base, rank-band balance, no duplicate identities, territory suit respected.
- **Rank Bands**: Face (A–J), High (10–7), Mid (6–4), Low (3–2).
- **Deterministic Mapping**: Seeded, per-war selection of which Natural cards are replaced by specials.
- **Replay Seed**: Derived secure seed allowing shuffles/mapping to be replayed for logs/replays.
- **Spoils**: +1 per round win; converts to XP and bonus rolls at war end (with caps/scaling).
- **Epic Meter**: Fills via Spoils and streak milestones; triggers an Epic War with boosted procs when full.
- **Proc**: A triggered random effect (e.g., Lucky Draws, Double Damage, Free Relic insertion).
- **Bonus Roll**: An end-of-war cosmetic-only loot spin earned (1 per 5 Spoils and certain events); roll quality scales with Territory Tier and during Epic War.
- **Suit Pity**: If 4 rounds pass without the territory suit, next reshuffle lightly biases toward that suit.
- **Territory**: Suit-themed battleground with tiers, weather, reputation, rules, and bounties.
- **Tier**: I/II/III difficulty modifiers affecting AI power and rewards.
- **Weather**: Daily territory modifier (e.g., Rain, Blizzard) changing rules.
- **Reputation**: Territory-specific progression track with ranks and rewards.
- **Bounties**: Rotating territory objectives for extra rewards.
- **Trials/Gauntlets**: Three-node mini-campaigns culminating in a boss.
- **Mapping Variant (Loadout)**: Curated set of replacements for a Warlord, selected pre-war.
 - **Aspect**: A Warlord’s curated replacement style (formerly Variant); shifts cadence/identity without changing power.
 - **Trail**: A saved deck preset per Warlord that binds an Aspect, small preferences, and cosmetics.
- **Mastery**: Per-Warlord progression granting cosmetics and variant unlocks.
- **Featured Pairing**: Weekly Warlord × Territory spotlight with bonuses.
- **Challenges**: Rotating Warlord-specific constraints granting Mastery XP and cosmetics.

### Key Features
- **Quick Sessions**: 3-6 minute games perfect for casual play
- **Deck Model**: Fixed 54-card decks (52 Natural + 2 Relics) with familiar ranks and suits
- **Warlord Deck**: Themed Warlord decks containing **Natural (traditional) Cards** plus **Warlord Cards** and **Relic Cards**
- **Warlord Cards**: Warlord-specific cards, specialized from any Natural Card (e.g. Yeti: 7 Spades, Sasquatch 9 of Diamonds)
 - **Relic Cards**: Totems with unique effects that replace Jokers
- **Visual Appeal**: Animated card flips, damage numbers, Bigfoot reactions
- **Random Rewards**: Lucky Draws, Double Damage, Free Relics, Epic Meter, Jackpots
 - **Simple Stats**: Only 2 stats (Health, Power) for easy understanding
 - **Territories**: Suit-themed zones with tiers, reputation, dynamic weather, and rotating bounties
 - **Game Log & History**: Per-war timelines, per-Warlord stats, and deterministic replays
 - **Trials & Gauntlets**: Territory mini-campaigns culminating in boss encounters and relic variants
 - **Warlord Challenges & Featured Pairings**: Rotating constraints and weekly Warlord × Territory spotlights that shape goals and routes
 - **Warlord Mastery & Variants**: Per-Warlord mastery rewards and selectable mapping variants for fresh runs

## Core Gameplay

### Game Modes & Flows

- Quick Play: Start a standard war with your last-used Warlord, Territory, and Tier. Great for fast sessions.
- Territory Free Play: Pick any unlocked Territory and Tier (I/II/III), see its current Weather and active Bounty, then start a war.
- Trials & Gauntlets: Enter a 3-step route inside a Territory (two modifier nodes and a Boss). Clear all three in sequence to earn special cosmetics and upgraded relic variants.
- Featured Pairings: Weekly highlights that encourage using a specific Warlord in a specific Territory for extra reputation and bonuses.
- Warlord Challenges: Optional constraints tied to your chosen Warlord (e.g., win with few ties). Completing them grants Mastery progress and cosmetics.

### War Mechanics

**Pre-War Setup (plain-English overview)**
- Choose your Warlord, then pick a Trail (your saved deck preset). Each Trail binds an Aspect (the Warlord’s curated style) and small, guardrailed preferences. Aspects change cadence/identity but not total power.
- Choose a Territory and a Tier (I/II/III). Territory rules (like extra healing in Forest) and daily Weather apply for the whole war.
- If you are on a Trial route, you will see which step you are on and any special modifiers.
- The game creates a fair, reproducible shuffle using a secure seed and locks in which standard cards are replaced by your Warlord/Relic cards.
 - Your opponent is an AI-controlled Bigfoot Warlord (or a Territory Boss during Trials). The AI uses a full 54-card deck built with the same replacement guardrails and a locked variant/seed so its deck is just as fair and replayable as yours. Territory Tier modifies the AI’s power and proc rates.

**Opponent Selection (how you pick or get assigned an opponent)**
- Quick Play: The game assigns an opponent automatically based on Territory, Tier, and your progression for fast entry.
- Pick Opponent (Free Play): Toggle “Pick Opponent” to choose from available AI Warlords in that Territory/Tier. Each card shows name, difficulty stars, affinity tag, 1–2 signature specials, and variant archetype (e.g., Defender/Aggressor).
- History Rematch: From Game Log, choose “Rematch (same seed)” to replay the exact deck order, or “Rematch (new seed)” for a fresh shuffle against the same opponent.
- Trials/Boss: Trials have fixed bosses; mid-nodes may present a choice between two mini-bosses.

Repetition rules (anti-farming):
- Repetition decay: Fighting the same opponent more than 3 times per day reduces XP/Spoils (e.g., −20% after the 3rd, −40% after the 4th, floor −60%).
- Auto-bump: After 2 consecutive wins vs the same opponent at a Tier, the game suggests (or requires) the next Tier for normal rewards.
- Variant rotation: The AI cycles its mapping variants for that opponent to avoid identical repeats.

**Round Structure (what happens each round)**
1. Draw: Both you and the AI draw the top card of your own decks.
2. Reveal: Cards flip at the same time so there is no advantage from going first.
3. Compare: The higher rank wins (Ace is highest, then King, Queen, Jack, then 10 down to 2).
4. Damage: The winner deals damage equal to the winning card’s rank value plus your Power stat.
5. Special Effects: If a revealed card is a special Warlord card or a Relic, its effect happens now (for example, healing, armor, or reducing the enemy’s next card).
6. Discard: Both revealed cards go to their owners’ discard piles. When a deck runs out, its discard pile is shuffled and reused.
7. Repeat: Keep playing rounds until one Warlord’s Health reaches 0.

**Ties (called “War!”) in simple terms**
- If both cards have the same rank, each side places 3 cards face-down, then reveals a 4th card. That 4th compare decides the winner of the tie.
- The winner of this tie deals a large “War!” damage bonus (territories may slightly change the bonus). All cards used during the tie go to each player’s discard pile.

**End-of-War Resolution (what you get at the end)**
- Outcome: You either win, lose, or draw (very rare).
- XP: You get base XP for a win plus any difficulty bonus from the Tier you played.
- Spoils: You earn Spoils during the war (typically 1 per round you win). At the end, Spoils convert to XP up to a cap, and every 5 Spoils grant a bonus roll.
- Reputation: If you played inside a Territory, you gain Territory Reputation; Featured Pairings can boost this.
- Mastery: If you used a specific Warlord, you gain Warlord Mastery progress and may complete Warlord Challenges.
- Trials: If you are on a Trial, the game advances you to the next node or awards the Trial clear and its cosmetic/relic variant reward.

**Draw/Discard/Reshuffle Rules**:
- After each reveal, each player's played card moves to their own discard pile (no card capture).
- When a draw deck is empty, shuffle that player's discard pile to form a new draw deck.
- Special cards (Warlord/Relic) also discard unless an effect states otherwise.

**Initial Deck Sizes**
- **Fixed Deck Size**: 54 cards per Warlord at all times.
- **Composition Model**: Start from a standard 52-card set plus 2 Joker slots (Relics). Warlord Cards replace specific Natural cards one-for-one. Relic Cards occupy the Joker slots; additional Relics (late game) replace Natural cards.
- **Starter Composition**: 50 Natural + 2 Warlord + 2 Relic = 54 (≈7.4% specials).
- **Mid-game Composition**: 48 Natural + 4 Warlord + 2 Relic = 54 (≈11.1% specials).
- **Late-game Cap**: 46 Natural + 6 Warlord + 2–4 Relic = 54 (≈14.8–18.5% specials).
- **Balance Guardrails**: Maintain suit/rank distribution when selecting replacements to preserve Territory bonuses.

**Tie Resolution (Traditional War)**:
- **War!**: Both players draw 3 cards face-down
- **Reveal**: Both players reveal 4th card
- **Compare**: Higher rank wins the tie (no card capture)
- **Discards**: All face-down and face-up cards from the tie go to each player's discard pile
- **Massive Damage**: Winner deals 4x damage on the resolving reveal

### Card System (what’s in the deck and how damage works)

**Card Types**:

**Natural Cards (Standard Deck)**:
- **Ranks**: Ace high. Rank values: Ace=14, King=13, Queen=12, Jack=11, 10–2 are face value.
- **Damage Formula**: Damage = rank value + Power.
- **Jokers/Relics**: Jokers are not drawn as Natural cards; Relics occupy Joker slots.

**Example Warlord Cards (Modified Playing Cards)**:
- **Ace of Spades** - "Sasquatch Rock Throw" - Deals base damage + stuns enemy next turn
- **King of Hearts** - "Yeti Healing" - Deals base damage + heals 2 Health
- **Queen of Diamonds** - "Mapinguary Scry" - Deals base damage + reveals enemy's next card
- **Jack of Clubs** - "Agogwe Stealth" - Deals base damage + enemy skips next turn

**Example Relic Cards (Special Effects)**:
 - **Red Joker** - "Forest Blessing" - Next win deals double damage
 - **Black Joker** - "Mountain Fury" - Next loss becomes a win
 - **Swamp Totem** - "Swamp Mist" - Enemy's next card is -1 rank
 - **Jungle Idol** - "Jungle Rage" - Your next card is +1 rank

### Warlord Deck Card Structure (how specials are added fairly)

Each deck is generated to contain exactly:

**Total**: 54 cards per Warlord (fixed)
**Base Set**: 52 Natural cards (Ace–2 across 4 suits) + 2 Joker slots (occupied by Relics)
**Warlord Cards**: Replace specific Natural cards one-for-one (2–6 depending on progression)
**Relic Cards**: At least 2 (occupying Joker slots); late-game may include up to 2 additional Relics by replacing Natural cards

#### Replacement Guardrails & Deterministic Mapping

- **One-for-one replacements**: Each Warlord or Relic card replaces a single Natural card. Total deck size remains 54.
- **Suit guardrail**: Preserve suit counts close to base (≈13 per suit). Prefer replacing the same suit as the special. If unavailable, pick a card from the same suit family or rotate suits evenly to keep counts within ±1.
- **Rank guardrail**: Maintain a natural rank spread. Prefer replacing within the same rank band: Ace–Jack (face), 10–7 (high), 6–4 (mid), 3–2 (low). Avoid clustering all replacements into the same band.
- **Territory respect**: Do not reduce the territory suit below base unless the Warlord’s identity explicitly requires it; see Territory Suit Rules below.
- **No duplicate identities**: Each Natural card can be replaced at most once. Special identities are unique in a deck.
- **Fixed per-war mapping**: At War start, generate a deterministic map of replacements for the player and AI. This mapping does not change mid-war.

**Per-Warlord mapping template**
- Name
  - Identity: theme, flavor
  - Replacements (example): [Rank of Suit] → Warlord Card Name (effect)
  - Notes: suit/rank considerations

**Examples**
- Sasquatch (PNW, rock throwing)
  - Replacements: Ace of Spades → Rock Throw (stun); King of Hearts → Creekbed Rally (heal)
  - Notes: Spades/Hearts preserved; stays in face-card band
- Yeti (Himalayas, ice/heal)
  - Replacements: Ace of Spades → Avalanche; Queen of Hearts → Glacier Mend (heal)
  - Notes: Hearts emphasis is fine in Mountain territories; face + high bands
- Mapinguary (Amazon, forest protection)
  - Replacements: King of Clubs → Forest Guard; Queen of Diamonds → Swamp Mist (-1 enemy rank)
  - Notes: Clubs/Diamonds align with Jungle/Swamp identities
- Agogwe (Tanzania, stealth)
  - Replacements: Jack of Clubs → Stealth Strike (skip turn); Queen of Spades → Camouflage
  - Notes: Face-card band; Clubs/Spades remain balanced

**Territory Suit Rules**
- Forest (Hearts): Keep Hearts count ≥ base (13) and allow at most +1 over base after replacements. If a replacement would reduce Hearts below base, pick a Hearts card to replace instead.
- Mountain (Spades): Same rule for Spades.
- Swamp (Diamonds): Same rule for Diamonds.
- Jungle (Clubs): Same rule for Clubs.
- Draw weighting (light bias): During shuffles, apply a small, seeded bias (≈+5–10%) to order territory suit cards earlier when available. Identity of cards is unchanged.

**Deterministic generation**
- Seed: Derive a per-war seed from secure inputs (e.g., HMAC(userId, warId|timestamp) via Node `crypto`).
- Mapping: Use the seed to select exact Natural cards to replace under the guardrails; persist the mapping in session state.
- Shuffle: Perform a seeded shuffle so both clients (or server and client) can replay the order if needed for replays/analytics.

Each Warlord comes with one default deck. Players can earn new decks through:

- Game bonuses and rewards
- XP progression
- In app purchases

### Example War (illustrative walk-through)
- Pre-War: You choose Yeti with the “Permafrost” variant in Mountain Tier II under Blizzard weather. The game locks in which cards are replaced and shuffles both decks using a secure seed.
- Round 1: You reveal King of Spades (Ice Carapace) and the AI reveals 9 of Hearts. You win and deal 13 + your Power damage; Ice Carapace gives you +1 armor for your next hit.
- Round 2: Both reveal 8s (tie). War! triggers: 3 face-down cards are placed, then both reveal. You reveal Queen of Hearts (Glacier Mend) vs AI’s 10 of Clubs. You win, deal the big War! damage, then heal from Glacier Mend.
- Rounds continue with territory rules applying (in Mountain, every third round win grants armor). You accrue Spoils on each round win and fill your Epic Meter.
- End-of-War: You win. You receive base XP + Tier bonus, Spoils convert to XP (up to the cap) and award bonus rolls, Mountain reputation increases, and your Yeti gains Mastery XP. If this was the Boss node of a Trial, you also earn the Mountain Relic Mk II.

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

**Level-Up Rewards**
- Each odd level: +1 bonus roll and cosmetic currency
- Each even level: Relic shard or minor Relic cooldown token
- Milestones:
  - Level 5/10/15/20: Guarantee feature unlock matching tier focus (Warlord/Relic/Relic Slot/Theme)
  - First-time unlocks grant themed cosmetic shards

**Warlord Mastery**
- Each Warlord has a Mastery rank (I–V) earned via wars won, territory clears, bounties, and challenges while using that Warlord.
- Mastery rewards: cosmetics (emotes, banners, frames), variant unlocks (see Mapping Variants), signature Relic Mk II.
- Example thresholds: 200/500/1000/1600/2400 Mastery XP.

**Trailcraft (Deck Building)**
- Trails (your presets): Each Warlord has 3 Trail slots at Mastery I, 4 at Mastery III, and 5 at Mastery V. A Trail saves your chosen Aspect, tiny preferences, Relic skin priority, and cosmetics (card back, frame, emotes).
- Aspects (Warlord styles): Each Warlord offers 2–3 curated Aspects that change which Natural cards are replaced under guardrails. Aspects shift cadence/identity without increasing power (total always 54; replacements respect suit/rank caps).
- Preferences (guardrailed):
  - Band preference: Favor Face or Favor Mid (used as a tie-breaker only within guardrails).
  - Suit preference: Favor Territory Suit (keeps suit counts within ±1 of base).
- Flow: Trail → Aspect → Territory/Tier → optional Opponent. Engine resolves a deterministic mapping from Aspect + preferences, then applies Territory/Weather mutation and performs a seeded shuffle.
- Progression: Mastery unlocks Aspects and Trail slots; Relic Mk II is cosmetic. No raw stat boosts.

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

**Random Rewards & Fortune Meter**:
- Fortune Meter: Fills on negative outcomes and guarantees a spike when full.
  - Fill: +1 on a round loss; +2 on losing a War! tie; +1 on any tie resolved against you.
  - Full: at 6. On full, guarantees within the next 2 rounds either a Lucky Draw or a Double Damage on the next win (auto-selected to avoid waste). Resets after triggering.
  - UI: thin halo around the Draw lever brightens as it fills; tooltip shows current fill (e.g., 4/6).
- Lucky Draws: base 10% per round (per round resolution). Epic War: +5 percentage points. Tier II: +2pp; Tier III: +4pp. Cap: 22%.
- Double Damage: base 5% per round. Epic War: +3pp. Tier II: +1pp; Tier III: +2pp. Cap: 12%.
- Free Relics: base 1% per round; available in Epic War and Trials. Inserts a temporary Relic by replacing a mid-band Natural card under guardrails; duration: current War only; max 1 active Free Relic; cooldown: returns to deck only after 2 reshuffles.
- Epic Meter: Fills via Spoils (+1 per Spoils) and win streak milestones (+3 at 3-win, +5 at 5-win). When full (e.g., 20), the next War is an Epic War with increased proc rates (+50%) and improved bonus-roll odds; meter resets after use.
- Jackpot Wins: Trigger on deterministic combos (e.g., resolving a tie with both players revealing face cards and the winner's card matches territory suit) plus a small random chance (1%). Jackpots grant a large one-time damage bonus and a premium bonus-roll.

**Missions**:
- Daily Missions (3): Lightweight goals awarding 50–100 XP each (e.g., win 3 rounds with Hearts, trigger 1 Relic, win a War without a tie). Reroll 1/day.
- Weekly Missions (3): Larger goals awarding 300–500 XP each (e.g., win 5 Wars on Hard, fill Epic Meter twice).

**Featured Pairings**
- Weekly Warlord × Territory spotlights (e.g., Yeti × Mountain, Agogwe × Jungle): +10% Territory Reputation there and +1 bonus-roll quality tier when using the featured Warlord in the featured Territory.

**Warlord Challenges**
- Rotating constraints per Warlord (3 active): examples include “Win with ≤1 tie”, “Trigger 2 specials”, “Finish with ≥20 HP”. Rewards: Mastery XP + cosmetic shard.

**First-Time Clear Bonuses**:
- First win with a Warlord: +1 bonus roll + Warlord-specific cosmetic shard
- First win in each Territory: +Relic shard + themed card-back progress
- These are one-time rewards and do not repeat.

## Content

### Bigfoot Warlords

**Sasquatch** (Starter):
- **Theme**: Pacific Northwest, rock throwing
- **Special Cards**: Rock Throw (Ace of Spades), Creekbed Rally (King of Hearts)
- **Stats**: Health 100, Power +1

**Yeti** (Level 5):
- **Theme**: Himalayas, ice and healing
- **Special Cards**: Glacier Mend (Queen of Hearts), Avalanche (Ace of Spades)
- **Stats**: Health 110, Power +2

**Mapinguary** (Level 10):
- **Theme**: Amazon, forest protection
- **Special Cards**: Forest Guard (King of Clubs), Swamp Mist (Queen of Diamonds)
- **Stats**: Health 95, Power +1

**Agogwe** (Level 15):
- **Theme**: Tanzania, stealth and agility
- **Special Cards**: Stealth Strike (Jack of Clubs), Camouflage (Queen of Spades)
- **Stats**: Health 90, Power +1

#### Aspects (formerly Mapping Variants)

All Aspects obey replacement guardrails (suit/rank balance, territory respect, no duplicates). Aspects shift cadence and identity without increasing total power.

- **Sasquatch**
  - Rock & Rally (default): Ace of Spades → Rock Throw (stun); King of Hearts → Creekbed Rally (heal)
  - Boulder Barrage: King of Spades → Rock Barrage (minor multi-hit flavor); 9 of Clubs → Boulder Toss (+1 base rank on reveal turn)
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

The game features a roster of Bigfoots based on global cryptid lore. Below is a starting list with name, locale, and brief description (for those with available data; others noted as variants or similar to known cryptids). These serve as playable characters, AI clan lords, or card inspirations, with stats and abilities tailored to their themes.

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

#### Global Territory Mechanics
- **Territory Tiers**: Choose I/II/III when entering a territory.
  - Tier II: +25% XP rewards and +1 bonus roll; AI gains +1 Power and +10% proc rates.
  - Tier III: +75% XP rewards and +2 bonus rolls; AI gains +2 Power and +20% proc rates.
- **Territory Reputation**: Per-territory XP bar with ranks I–V at 100/300/600/1000/1500 Territory XP.
  - Rank rewards: themed cosmetic shard, +1% territory suit weighting (stacking), Relic shard, boss encounter access, hard-mode toggle.
- **Weather (Rotating Modifiers)**: Each territory has a daily weather affecting rules.
  - Forest Rain: +healing effects; Double Damage proc −2% absolute.
  - Mountain Blizzard: −tie rate; +1 armor on every third round win.
  - Swamp Fog: +tie rate; reveal enemy suit (not rank) next round.
  - Jungle Monsoon: +1 Epic Meter gain per Spoils.
- **Bounties (Rotating Objectives)**: Daily/weekly tasks per territory (e.g., “Defeat Mountain King with ≤3 ties”) for bonus rolls and cosmetic shards.
- **Suit Pity Timer**: If 4 rounds pass without the territory suit, seed-weight the next reshuffle to surface ~2 cards of that suit (+25% ordering weight), honoring guardrails.
 - **Trials & Gauntlets**: Three-node mini-campaigns per territory (two modifiers + boss). First clear grants Relic Mk II/III variants and themed cosmetics.
 - **Affinity & Featured Pairings**: Certain Warlords gain weekly affinity in specific territories (shown in UI), granting extra reputation and rewards.

**Forest Territories** (Hearts):
- **Bonus**: +1 Health per Hearts win
- **Enemy**: Forest Guardian Warlord
- **Reward**: Forest Blessing Relic
 - **Rules**: Healing effects are +50% stronger; Hearts wins heal an additional +1. War! resolves at 3.5× damage and grants the winner +3 heal (replaces the global 4× in this territory).
 - **Deck Mutation (start of war)**: Promote up to two low-band Hearts to mid-band for this war (deterministic under guardrails).
 - **AI Tendencies**: Prioritizes sustain, conserves face cards to avoid overkill; lower tie propensity.

**Mountain Territories** (Spades):
- **Bonus**: +1 Power per Spades win
- **Enemy**: Mountain King Warlord
- **Reward**: Mountain Fury Relic
 - **Rules**: Gain +1 temporary armor every time you secure your 3rd, 6th, 9th… round win (reduces next damage by 1–2). Spades wins grant +1 armor immediately.
 - **Deck Mutation (start of war)**: Promote one mid-band Spade to high-band for this war.
 - **AI Tendencies**: Hoards high Spades for post-tie reveals; punishes War! states.

**Swamp Territories** (Diamonds):
- **Bonus**: Diamonds win grants a Debuff token (enemy’s next card −1 rank)
- **Enemy**: Swamp Mist Warlord
- **Reward**: Swamp Mist Relic
 - **Rules**: Suit Pity triggers after 3 rounds without Diamonds (instead of 4). Fog weather reveals enemy suit (not rank) next round. Occasional “bog” effect: both players’ next draw −1 rank (low chance).
 - **Deck Mutation (start of war)**: Tag one enemy high-band card with “murk” (−1 rank when revealed) for this war.
 - **AI Tendencies**: Plays for ties to exploit debuffs; higher tie-setup probability.

**Jungle Territories** (Clubs):
- **Bonus**: +1 random stat per Clubs win
- **Enemy**: Jungle Rage Warlord
- **Reward**: Jungle Rage Relic
 - **Rules**: First Clubs win each war grants “Frenzy” (+1 rank on your next two rounds). Tie rate +10% (chaotic tempo).
 - **Deck Mutation (start of war)**: One random Clubs card gains +1 rank on its first appearance only.
 - **AI Tendencies**: Aggressively cycles specials; accepts volatility for spike outcomes.
 - **Boss Trial**: Jungle Rage champion uses high tie-rate and Frenzy windows; first clear awards Jungle Relic Mk II and a themed board frame.

### Visual Design

**Card Animations**:
- **Flip**: Satisfying card flip with Bigfoot-themed back
- **Reveal**: Dramatic reveal with particle effects
- **Damage**: Big, colorful damage numbers
- **Win/Loss**: Bigfoot reactions (celebrate/anger)

**UI Elements**:
- **Health Bar**: Simple, clear health display
- **Win Streak**: Prominent streak counter
- **Fortune Indicators**: Draw lever halo brightens with Fortune fill; small glow on cards when a guaranteed Lucky Draw is queued
- **Reward Pop-ups**: Big, satisfying reward notifications
 - **Territory Module**: Shows suit, tier (I/II/III), weather badge, reputation bar, bounty objective, trial/boss availability, and any Featured Pairing bonus
 - **Mastery/Variants**: Lobby panel with Mastery rank/progress and Variant selector (when unlocked)
 - **Challenges**: Warlord-specific rotating constraints badge with quick access

**Audio Design**:
- **Card Sounds**: Satisfying flip and reveal sounds
- **Bigfoot Sounds**: Roars, growls, celebration sounds
- **UI Sounds**: Button clicks, reward chimes
- **Ambient**: Forest, mountain, swamp, jungle themes

### Visual Style & Themes
- **Style Pillars**: Bold, readable, playful-spooky. Leverage deep forest greens, midnight blues, moss and ember accents. Apply territory tints: Hearts=warm woodland, Spades=slate/ice, Diamonds=swamp teal, Clubs=jungle jade.
- **Art Direction**: Modern woodcut meets pulp-cryptid posters. Chunky silhouettes, textured shading, limited gradients, high contrast. Warlords show humorous fidgets and mildly spooky moments.
- **Typography**: Display face with cryptid flair for headings; highly legible UI font for numbers (tabular lining for damage and XP). Clear hierarchy: H1 marquee, H2 section labels, chip labels for suits/tiers/weather.

### Territories as Visual Skins
- Forest/Hearts: Dappled light, drifting spores, warm particle glow. Rain overlays and leaf bursts on hits.
- Mountain/Spades: Frost edge vignette, wind streaks. Blizzard adds flurries and muffled audio bed.
- Swamp/Diamonds: Low fog pass, fireflies, ripple decals on impact.
- Jungle/Clubs: Foreground leaves parallax, heat shimmer, occasional vine sweep.
- Trials: Map totem nodes with carved inlays; boss node gets gold foil rim and animated totem eyes.

### Slot-Machine Energy, War Simplicity
- Single-surface focus: Card Stage is the “reel.” Draw button is the “lever” (pull-down gesture on mobile; tactile press on desktop).
- Feedback cadence: pre-flip charge hum → thunk flip → reveal pop → win sting → coins-like Spoils sparkle. War! triggers siren + marquee lights + rapid 3-card “clack” stack.
- Reel flourish: subtle vertical parallax during shuffles; nudge animation on advantage rounds.

### Animation Language
- Flip: 280–320ms spring; face cards get glint shader pass.
- Damage: 300ms pop with squash; Double Damage adds bolt tracer and color shift.
- War!: three 80ms face-down stacks, explosive reveal with vignette pulse; territory may tint the pulse.
- Epic: Totem ring pulses; full state adds light chroma shift across UI trim.

### Audio Direction
- Slot stingers blended with natural/cryptid tones: wood knock, antler bell, icy chime, vine twang.
- Territory ambiences layered softly; dynamic ducking ensures flip/reveal clarity.
- Reduced Motion also reduces audio peaks; dynamic range compressed for mobile.

### UI Kit & Design Tokens
- Colors: base forest (#0F2A1E), slate (#1F2D3A), moss (#3B6B4A), ember (#F2A33A); suit tints per territory; status (heal=#6BD38A, damage=#FF5A5A, armor=#8AA1FF).
- Type scale: H1 28/32, H2 22/28, Label 14/18, Numerals 18/20 tabular.
- Spacing: 4/8/12/16/24 tokens; components align to 8pt grid.
- Radius: 10px cards, 12px panels; chips circular or 16px radius.
- Motion: standard 250–350ms, fast 150–200ms, reduced 150ms fades; use GPU transforms.

### War Board (Spec)

**Layout (mobile-first, scales to desktop)**
- Top: AI panel (portrait, name, health bar, armor chips, active effects icons)
- Center: Card Stage (flip/reveal zone) with left/right discard stacks and War! overlay
- Bottom: Player panel (portrait, health, Power chips), primary Draw button with Fortune halo, meters row
  - Spoils Meter (pips up to 10, then xN)
  - Epic Meter (segmented ring; displays “NEXT WAR EPIC” when full)
- Side Drawer (peek on mobile, fixed on desktop): Territory module (suit, weather, tier, reputation bar, bounty), Streak badge (with grace shield), Active Relics list
  - Also shows: Trial/Boss availability, Featured Pairing bonus (if active), and territory Affinity tips

**Components**
- HealthBar: segmented with tick marks and damage/heal animations
- Meter: configurable for Spoils/Epic; supports tooltips and progress states
- TerritoryPanel: suit icon, rules tooltip, weather, tier selector (I/II/III), reputation bar, bounty objective
- StreakBadge: shows current streak and grace availability
- ProcToast: transient notifications (Lucky Draw queued/guaranteed, Double Damage, Free Relic inserted)
- ResultsModal: war outcome, XP breakdown, Spoils conversion, bonus rolls, territory rep gain
- CardStage: handles flip, War! sequence (3 face-down + 1 reveal), and particle effects

**Behaviors**
- Draw/Reveal: single primary action; auto-resolves rounds including ties as one round
- War!: quickly stack 3 face-down cards (≈80ms each), reveal 4th, apply massive damage modifier (territory may override)
- Procs:
  - Lucky Draws: glow on Draw button; toast “Relic queued”; add to Active Relics list
  - Double Damage: large critical-style damage number with bolt icon; respects Reduced Motion
  - Free Relic: toast and icon in Active Relics; removed after war or 2 reshuffles cooldown
- Suit Pity Feedback: after 4 suitless rounds, subtle tooltip “Winds shift toward [suit]” (no numeric odds shown)
- Mission Progress: non-blocking toasts; tap to open Missions panel
 - Trial Entry: if on a Trial node, display a small step indicator (1/3, 2/3, Boss) and unique boss banner on the final node

### UI Spec Mockups (textual)

#### Lobby (with Opponent Chooser)
- Header: game logo; right corner: settings and profile.
- Warlord Carousel: large portrait, nameplate, Mastery rank bar, Variant selector chip.
- Territory Row: chips for Forest/Mountain/Swamp/Jungle, showing suit icon, weather badge, Tier dropdown, reputation bar, bounty icon.
- Opponent Chooser (toggle panel): grid of opponent cards (portrait, name, difficulty stars, affinity tag, two signature special icons, variant archetype chip). Tooltip on hover/tap: “Repeating the same opponent reduces XP/Spoils; Tier up to restore.”
- Primary CTA: “Draw & Start” (Quick Play) or “Start vs [Opponent]”. Secondary: “Continue Trial.”
- Daily/Weekly Banners: Featured Pairing, Bounties, Challenges.
- Tokens & timings: focus ring on CTA (8px glow, 150ms); card hover scale 1.03, 120ms; panel slide 220ms.

#### War Board (lever and War! overlay)
- Top Marquee: opponent portrait, name, health bar with armor chips; badges for Tier/Weather.
- Card Stage: center “reel,” left/right discard stacks; War! overlay is a marquee bar with animated bulbs; territory tint applied to overlay.
- Lever Button: large, beveled; press depth 6px; success bounce 120ms; pull-down gesture on mobile triggers the same.
- Meters: Spoils pips (10 per row → multiplier), Epic ring (segmented, pulses at 95%).
- Side Drawer: territory module, streak, active relics, bounty/challenge ticker.
- Tokens & timings: flip 300ms; damage pop 300ms; War! stack 3×80ms + reveal 220ms; lever press 180ms press-in, 120ms rebound.

#### Results (Bonus Rolls)
- Verdict Banner: Win/Loss; confetti/leaf/ice/swamp/jungle VFX aligned to territory.
- XP Breakdown: base + Tier bonus + Spoils (cap noted) + missions.
- Spoils Conversion: bar animates from Spoils count to XP; shows 1 Bonus Roll per 5 Spoils.
- Bonus Rolls: slot-style reels (3 columns); stop order L→R; rarity color pulses; duplicate converts to shards with a pop.
- Reputation & Mastery: territory rep bar increase; Warlord mastery progress.
- CTAs: Rematch (same seed), Rematch (new seed), Back to Lobby. Tooltip: “Repetition decay may apply.”
- Tokens & timings: roll spin 1.2s, per-reel stop delay 200ms; confetti burst 600ms; progress bars 500ms ease.

### UI/UX Details

**Lobby/Home**
- Warlord carousel, Territory selector (tier, weather, reputation), Missions panel, Daily Rewards
- “Next Unlock” chip: XP_to_next and upcoming reward
- Quick Play: remembers last Warlord/Territory/Tier
 - Mastery Panel: shows current Warlord Mastery rank/progress and next reward; Variant selector appears when Mastery unlocks
 - Opponent Chooser: toggle to pick an opponent; shows difficulty stars, affinity, signature specials, variant archetype; tooltips explain repetition decay and auto-bump
 - Trail Tabs: per-Warlord tabs for Trail slots (3–5). Inside a Trail: Aspect selector and Preferences (band/suit). Live preview meters show specials %, suit balance, band distribution. Save with punny names.
 - Leaderboards: button on Lobby; slices for global/territory/tier/warlord/aspect/speed/no-tie. Pro users unlock deep filters and history; free users see Top 100 and their rank.

**Results Screen**
- Top: Win/Loss and XP total with breakdown (base, difficulty, Spoils, missions)
- Middle: Spoils earned/converted, bonus rolls, shard drops/cosmetics
- Bottom: Territory reputation gained, bounty status, Trial progress/clear (and relic variant earned if applicable), Featured Pairing participation, Warlord Mastery XP gained
 - Rematch CTAs: “Rematch (same seed)” and “Rematch (new seed)” buttons; tooltip shows any repetition decay that will apply
 - Rank Delta: if the run affects a leaderboard slice, show rank change and CTA to view the board (Pro deep-link includes filters).

**Navigation & Flows**
- Deep links from Missions to pre-selected Territory/Tier
- One-tap rematch with same settings
- Collections: shard progress bars; “Where to earn” badges link to Territories
 - History: “Rematch with same seed” option for practice runs (uses replaySeed)
 - Trials: enter/continue Trial route directly from Territory selector, with node preview and cosmetic reward preview

**Accessibility**
- Colorblind-safe suit indicators (shape-coded); high-contrast theme option
- Reduced Motion: replace flips/bursts with fades/counters; disable large shakes
- Screen reader labels on Draw, meters, and outcomes; concise announcements for procs

**Performance & Animation**
- Flip 250–350ms easing; damage pop 300ms; cap animations at 60fps
- Use GPU-friendly transforms and sprite sheets for particles
- Lazy-load audio; prefetch assets for selected Warlord/Territory

**Telemetry & QA Hooks**
- Log: animation durations, dropped frames, input latency, proc counts, mission toasts
- A/B bundles for animation timing (fast/standard/reduced) and haptic/feedback intensity

## Technical Architecture

### Overview
The technical stack for *Bigfoot War* is designed for a web-based, single-player card game with AI opponents, emphasizing scalability, low latency, and ease of development. Hosting on Vercel leverages its serverless capabilities, edge caching, and seamless CI/CD for fast deployments. The architecture integrates a modern full-stack framework to unify frontend and backend, reducing complexity from the original vanilla setup. Key focuses include secure user data handling, performant animations, and integration points for monetization.

We use **Next.js** as the core framework, which bundles React for the frontend and Node.js for backend API routes. This allows static rendering for the frontend (fast loads via Vercel's CDN) and serverless functions for dynamic logic (e.g., game simulations). TypeScript is used across the board for type safety, especially in card/deck management and API interactions.

### Backend (Node.js with Next.js API Routes)

**Core Services**:
- **Game Engine**: Handles War logic (shuffling, comparisons, damage calculations), fixed 54-card deck handling (discard/reshuffle, no capture), tie resolution (3 down + 1 up, 4x damage, all cards to discard), card management (one-for-one Warlord replacements; Relics occupy Joker slots), and AI behavior. Maintain suit/rank guardrails when replacing cards. Deterministic PRNG (see Seed/PRNG Contract). Use `lodash` for utilities.
- **User Management**: Authentication (NextAuth or OAuth provider), progression (XP, unlocks), and statistics (win rates, streaks). Store in Postgres via Prisma.
- **Matchmaking**: AI opponent selection with difficulty scaling; opponent identity/variant rotation; repetition decay/auto-bump stored in Redis.
- **Rewards**: Daily bonuses, random events, progression unlocks. Vercel Cron for daily/weekly tasks (resets, bounties, featured pairings).
- **Cache/Session**: Upstash Redis (or Vercel KV) for active war session state (rngCounter, state hashes, meters), repetition counters, rate limits.

**Database**:
- **Primary: Vercel Postgres + Prisma**: SQL schemas for users, wars, war_events, trails, mastery, challenges. Strong consistency, easy analytics/joins, serverless scale.
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
  unlockedAspects: string[]; // keys
  signatureRelicMk: 1|2|3;
}

interface Trail {
  userId: string;
  warlord: string;
  trailId: string;
  name: string;
  aspectKey: string;
  preferences?: { bandPreference?: 'face'|'mid'; suitPreference?: 'territory'|'none' };
  relicSkin?: string;
  cosmetics?: { cardBack?: string; frame?: string; emotes?: string[] };
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
 - `GET /api/mastery/:warlord`: Returns mastery state and unlocked variants for a warlord.
 - `POST /api/mastery/progress`: Submits mastery XP gains from a war; server validates against warId.
 - `GET /api/featured`: Lists active Featured Pairings.
 - `GET /api/challenges/:warlord`: Lists active challenges for a warlord; claim endpoint `POST /api/challenges/claim`.
 - `GET /api/opponents?territory=...&tier=...`: Lists available AI Warlords for selection with metadata and lock reasons.
 - `POST /api/war/start` (extended): Accepts optional `opponent` and `rematchSeedMode` ("same"|"new"); enforces repetition decay and auto-bump rules on rewards.
 - `GET /api/trails/:warlord`: List Trails for a Warlord.
 - `POST /api/trails`: Create or update a Trail (server validates guardrails; no power changes allowed).
 - `DELETE /api/trails/:trailId`: Delete a Trail.
 - `GET /api/leaderboards?slice=...`: Returns Top 100 for a given slice (territory, tier, warlord, aspect, region, season). Free for headline slices; advanced filters require Pro.
 - `GET /api/leaderboards/me?slice=...`: Returns the user's rank snapshot for the slice.
 - `GET /api/replays/:warId`: Returns replay metadata for stepping through (Pro for full detail; free for highlights).
 - `POST /api/season/finalize` (cron): rotates seasons, snapshots ranks, computes rewards.

**Turn API Contract**
- `POST /api/war/start`
  - Request: { warlordId, trailId, territory, tier, opponentId?, rematchSeedMode?: 'same'|'new' }
  - Response: { warId, replaySeed, rngCounter: 0, stateHash, player: { deckSig }, opponent: { id, aspectKey, deckSig }, meters: { fortune: base, epic: base } }
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
- Per-War: rounds played, round win rate, Spoils earned, Spoils XP granted (pre/post scaling and cap), Fortune fills/uses, proc counts (Lucky, Double, Free Relic), suit pity activations, time-to-first-special, streak changes, Epic Meter gain/use, Jackpot triggers.
- Economy: daily XP earnings, source breakdown (War Win, Spoils, daily bonuses), bonus-roll outcomes, Relic insertions and durations.
- Player Progression: time-to-first Warlord unlock, session length, sessions/day, difficulty mix.
- Privacy/Security: aggregate metrics; do not store raw seeds or personally identifiable info in analytics payloads.
 - Cross-link: analytics events should include `warId`, `replaySeed`, `warlord`, and `territory` to correlate with Game Log/history for debugging and replays.
 - Mastery & Variants: track mastery XP gains, challenge completions, variant usage per war, and Featured Pairing participation.
 - Pro & Leaderboards: track Pro engagement (stats views, filters used, replays opened), fraud signals (server replay mismatch, abnormal proc patterns), season rotations, and leaderboard API latency.

## Monetization

### Free-to-Play Model

**Core Game**: Completely free to play
**Progression**: All content unlockable through gameplay
**No Pay-to-Win**: All purchases are cosmetic or convenience

### Premium Features

**Bigfoot Skins**: Visual variants of Warlords ($2.99 each)
**Card Backs**: Custom card back designs ($1.99 each)
**Territory Themes**: Visual territory variants ($4.99 each)
**XP Boosters**: Double XP for 24 hours ($0.99)

### Pro Plan (Optional, Non-Power)
- Purpose: Enhance mastery, competition, and analysis with no gameplay power.
- Price: $2.99/month or $14.99/year (regional pricing). 7-day trial. Includes seasonal cosmetic bundle (card back, frame, emote).
- Features:
  - Advanced Stats: per-Warlord/Aspect/Territory/Tier breakdowns, trendlines, heatmaps (War!, rounds, damage deltas), card legends timeline, Fortune/Epic trigger analysis, custom filters (opponent, seed mode, weather, boss, trials only).
  - Leaderboards: global/region/territory/warlord/aspect/speed/no-tie slices; historical ranks; deep filters; alerts on rank changes. Core Top 100 and your rank remain free.
  - Replays Studio: fetch/step through replays with proc tables; shareable stat cards; CSV/JSON export.
  - Weekly Fixed-Seed Challenge: Pro-only board for a seeded boss run; cosmetic rewards. Free can view boards and top replays.
- Safeguards: privacy opt-out; no stat/Relic power; server-verified runs only; anti-cheat flags hidden automatically.

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
- v1 playable target: 10 Warlords (30 Aspects)
- v1 AI-only opponents: 14–20 (mix of non-playables and playables’ alternates)
- 6-month goal: 24 playable Warlords (72 Aspects) via monthly pod releases

### Pod Groupings (art/kits/assets)
- PNW Pod: Sasquatch, Bukwus, Grassman, Matlox, Gugwe, Big Grey Man
- Mountain/Glacial Pod: Yeti, Dzu-Teh, Nyalmo, Mecheny, Gin Sung
- Jungle Pod: Mapinguary, Orang Gadang, Kapre, Ukumarzapai, Curinquean
- Swamp/Beast Pod: Skunk Ape, Ucu, Sisemite, Maywas, Nasnas

### Aspect Triangle Template (per Warlord)
- Sustain/Control Aspect: territory-aligned sustain, armor, mild debuffs; avoids raw damage spikes
- Aggressor/Burst Aspect: higher face/high-band skew; Double Damage synergies; minimal defense
- Trick/Utility Aspect: tie manipulation, reveal peeks, one-shot cadence changes; low direct damage

### Kit Bible Snippet (per Warlord)
- Signature Moves (max 3 named identity effects) with clear constraints; no more than one stun/skip per war on average
- Effect Palette Limits: healing (+1 to +3), armor (+1 to +2), rank +/-1, reveal/peek, tie tools; damage multipliers only via Double Damage/Jackpot
- Territory Affinity: one primary and one secondary territory where the kit feels best; no mandatory suit skew that violates guardrails

### Release Cadence
- Monthly: 1 Pod release (4–6 Warlords added as AI; 1–2 become playable), 1 new boss variant, 1 relic variant, seasonal cosmetics
- Weekly: Featured Pairings (4–6 spotlight matchups), rotating Bounties and Weather; one mini-event or trial remix

### Opponent Pool Rules
- Per Territory: maintain a pool of 8–12 opponents (mix of playables and AI-only)
- Boss Rotation: each territory has 1 primary boss and 1–2 variants; rotate weekly; Trials always culminate in the current boss
- Tier Distribution: ensure at least 2 opponents tuned per Tier; Expert adds one “hard counter” kit to encourage Aspect switches
- Repetition Controls: standard decay/auto-bump rules apply to chosen opponents

### v1 Slice (example)
- Playable (10): Sasquatch, Yeti, Mapinguary, Agogwe, Grassman, Kapre, Skunk Ape, Genoskwa, Didi, Bukwus
- AI-only pool (16): Big Grey Man, Matlox, Gugwe, Dzu-Teh, Nyalmo, Mecheny, Gin Sung, Orang Gadang, Ukumarzapai, Curinquean, Ucu, Sisemite, Maywas, Nasnas, Teh-Ima, Hibagon
- Territories: all 4 with Trials and 1 boss each; add 1 boss variant per month
- Aspects: 3 per playable (30 total)
- Systems: Aspects/Trails, Fortune/Epic meters, Opponent chooser (with decay), Game Log, Featured Pairings

### 6-Month Expansion Outline
- Month 1–2: Jungle Pod release (2 playables), boss variant, cosmetic set
- Month 3: Mountain Pod focus (2 playables), new Trial route remix, relic Mk II
- Month 4: Swamp Pod focus (2 playables), seasonal event, charm pack (if adopted)
- Month 5: PNW Pod focus (2 playables), boss variant, board frame set
- Month 6: Mixed pod (2 playables), new featured pairing ruleset, analytics-driven balance pass

**Bigfoot War** combines the simplicity of traditional War with engaging Bigfoot theming and slot machine appeal. The game targets casual players who want quick, satisfying sessions with clear progression and random rewards. The simplified systems make it accessible while the Bigfoot theme and special effects keep it engaging.

The Node.js web architecture ensures broad accessibility while the free-to-play model with cosmetic purchases provides sustainable monetization. The development roadmap focuses on core gameplay first, then content expansion, ensuring a solid foundation for long-term success.

## Glossary

- Ambush: Agogwe variant ability granting conditional +1 rank on specific triggers.
- Armor: Temporary damage reduction token; consumed on next damage instance.
- Bands (Rank Bands): Face (A–J), High (10–7), Mid (6–4), Low (3–2).
- Bounties: Rotating territory objectives granting extra rewards.
- Deck Mutation: Start-of-war, territory-defined promotion/tag applied under guardrails.
- Deterministic Mapping: Seeded selection of replaced Natural cards by specials.
- Epic Meter: Progress meter that, when full, makes the next war an Epic War with boosted procs and rewards.
- Featured Pairing: Weekly Warlord × Territory bonus pairing.
- Free Relic: Temporary Relic inserted for current war via proc; respects deck size and guardrails.
- Gauntlet/Trial: Three-node mini-campaign within a territory ending with a boss.
- Guardrails: Suit/rank balance rules for replacements.
- Jackpot: Rare, deterministic-plus-random trigger for a large bonus.
- Loadout (Mapping Variant): Curated replacement set for a Warlord selected pre-war.
- Lucky Draw: Proc that queues a Relic bonus; displayed via toast and panel.
- Mastery: Per-Warlord progression track granting cosmetics and variant unlocks.
- Meter (Spoils/Epic): UI components visualizing progress; Spoils convert to XP/rolls; Epic triggers Epic War.
- Missions: Daily/weekly goals awarding XP.
- Pity (Suit Pity): Bias to surface territory suit after drought.
- Proc: Probabilistic trigger (e.g., Double Damage, Lucky Draw, Free Relic).
- Relic: Powerful effect occupying Joker slot; may have Mk variants.
- Reputation (Territory): Progression bar for a territory with rank rewards.
- Seed (Replay Seed): Derived secure seed enabling reproducible mapping and shuffles.
- Spoils: Currency gained per round win; converts to XP and bonus rolls at war end.
- Bonus Roll: Cosmetic-only loot spin earned from Spoils (1 per 5) and certain events; odds and quality scale with Territory Tier and Epic War status; duplicates convert to shards/cosmetic currency.
- Streak (Win Streak): Consecutive war wins granting temporary bonuses and unlocks.
- Tie (War!): Special tie resolution sequence (3 down + 1 up) with territory-specific massive damage.
- Tier: Territory difficulty level (I/II/III) affecting AI power and rewards.
- Variant (Signature Relic Mk II/Mk III): Upgraded territory relic versions unlocked via trials.
