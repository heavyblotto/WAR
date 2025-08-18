# Bigfoot War - Game Design Ideas

## Core Concept
A Next.js card game based on the classic game *War*, featuring Bigfoot creatures from around the world. Players battle using simple card mechanics with a thematic combat system, delivering a slot machine-like experience with strategic depth and cryptozoology flair. The game emphasizes quick, addictive matches and a rewarding progression system, immersing players in a hunt for mythical Bigfoots.

## Game Mechanics

### Basic Gameplay Loop
1. **Card Draw**: Both players draw simultaneously from a standard 52-card deck.
2. **Winner Selection**: Higher card wins (Ace = 14, King = 13, Queen = 12, Jack = 11, numbered cards 2-10).
3. **Habitat Boost**: Card values increase (+1 to +3) based on the Bigfoot-arena pairing (e.g., Yeti gains +2 in Frozen Peaks).
4. **Decision Phase**: Winner chooses "Grab" (collect both cards) or "Smash" (attack opponent’s Bigfoot).
5. **Smash Mechanics**: Timing-based mini-game with Bigfoot-specific animations (e.g., Sasquatch throws a rock, Skunk Ape releases a toxic cloud):
   - Perfect timing = 1.5x damage
   - Good timing = 1.0x damage
   - Miss = 0.5x damage
6. **Damage Resolution**: Apply suit-based effects (Poison, Heal, Stun) and update health.
7. **Win Conditions**: Collect all cards OR reduce opponent’s health to 0.

### Card Suit Attack System
- ♠️ **Spades**: Poison (5 damage per turn for 3 turns)
- ♥️ **Hearts**: Heal (restore 10 HP)
- ♣️ **Clubs**: Stun (opponent skips next turn)

### Face Card Special Abilities
- **Jacks (11)**: "Quick Strike" - Attack twice this turn
- **Queens (12)**: "Royal Command" - Choose your next card’s suit
- **Kings (13)**: "Devastating Blow" - Ignore opponent’s defense
- **Aces (14)**: "Wild Card" - Copy the last ability used

## Bigfoot Types & Stats

### MVP Strategy - Single Player vs AI
- **Starting Roster**: Player begins with **Sasquatch** (balanced starter).
- **AI Opponents**: 10 Bigfoots available as AI opponents (3 Dwarf, 5 Squatch, 2 Giant).
- **Progression**: Defeat AI Bigfoots to unlock them as playable characters.

### Starter Bigfoot
- **Sasquatch**: 100 HP, 1.2x Attack, 2 Defense (Classic Bigfoot, balanced stats)

### Unlock Progression Tiers
**Tier 1 (Levels 1-3)**: Dwarf Types (3 creatures)
- Easier opponents, lower HP, unique abilities
- Examples: Agogwe, Hibagon, Barbegazi

**Tier 2 (Levels 4-7)**: Squatch Types (5 creatures)
- Balanced opponents, varied strategies
- Examples: Yeti, Skunk Ape, Yowie, Momo, Grassman

**Tier 3 (Levels 8-10)**: Giant Types (2 creatures)
- Challenging opponents, high HP, powerful attacks
- Examples: Genoskwa, Nyalmo

### Boss Battle System
- **Weekly Boss**: Rotate through 10 Bigfoots as special boss encounters with boosted stats.
- **Survival Mode**: Fight a sequence of AI Bigfoots until defeated.
- **Future**: Add Boss Rush Mode (sequence of tougher opponents).

### Stat Formula
```
Bigfoot Health = Base HP (50-150)
Attack Damage = (Card Value + Habitat Boost) × Attack Multiplier
Defense = Flat damage reduction per hit (1-5)
```

## Rage Meter System
- **Building Rage**: Gain +10 per 10 HP damage taken, +5 for perfect Smash timing, +15 if opponent heals.
- **Rage Ability** (at 100 rage): "Primal Burst" - Next attack deals double damage and applies the Bigfoot’s suit effect (e.g., Yeti adds Heal, Skunk Ape adds Poison).

## Arena System
Dynamic environments with thematic intros and effects:
- **Forest Clearing** (Starter): Neutral effects, lush green intro animation.
- **Frozen Peaks** (Level 3): +2 Habitat Boost for ice-based Bigfoots (e.g., Yeti, Barbegazi), subtle screen shake.
- **Toxic Swamp** (Level 6): +2 Habitat Boost for swamp-based Bigfoots (e.g., Skunk Ape), fog obscures card edges.

## Progression & Economy

### Gold Economy (Slot Machine Psychology)
- **Casual Matches**: Free entry, 100-150g reward.
- **Bigfoot Bounty**: 5% chance post-match for a slot machine-style reward (gold, cosmetic card back, or rare Bigfoot unlock).
- **Daily Login Streak**: Escalating rewards over 7 days (Day 1: 50g, Day 7: Bounty spin + cosmetic).
- **Future**: Add Ranked Matches (25g entry, 150g winner pot) and Tournaments (100g entry, 800g winner pot).

### Gold Spending Options
- **Card Packs** (100-300g): Cosmetic card backs.
- **Bigfoot Skins** (300-500g): Visual customization (e.g., “Golden Sasquatch”).
- **Booster Items** (50g): Temporary match buffs (e.g., +1 Habitat Boost for one match).
- **Future**: Add Arena Access (200g for early unlocks).

### XP System (10-25 XP per win)
- **Stat Points**: +2 HP, +0.1 Attack, +1 Defense per level.
- **Ability Unlocks**: New face card powers at higher levels.
- **Arena Access**: Unlock Frozen Peaks (Level 3), Toxic Swamp (Level 6).
- **Future**: Add Prestige Ranks (Bronze/Silver/Gold borders).

### Progression Path
```
Levels 1-3: Learn basics, unlock Yeti
Levels 4-6: Master timing, unlock Skunk Ape
Levels 7-10: Arena variety, unlock Survival Mode
Levels 11+: Future seasonal content
```

## Meta Game Features

### Quest System
- **Daily**: “Win 2 matches” (100g + 25 XP)
- **Weekly**: “Apply 10 Poison effects” (300g + 50 XP)
- **Future**: Add Seasonal Quests (e.g., “Defeat 5 different Bigfoot types” for a rare skin).

### Game Modes
- **Quick Match**: vs random AI Bigfoot
- **Weekly Boss**: Fight a boosted Bigfoot
- **Survival Mode**: Defeat as many AI Bigfoots as possible
- **Future**: Add Daily Ladder (8-player bracket) and Tournaments

### Social Features
- **Bigfoot Victory Card**: Shareable image of your Bigfoot, opponent defeated, and stats (damage dealt, cards won).
- **Leaderboards**: Global rankings
- **Future**: Add Friend Challenge Mode (async challenges) and Clan Wars.

## Technical Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Storage**: Local storage for progression (MVP)

### Performance Considerations
- **Lazy Loading**: Load Bigfoot sprites and arena assets on demand.
- **Image Optimization**: Use WebP format, multiple resolutions.
- **Animation Efficiency**: CSS transforms for Smash animations and arena intros.
- **Offline Caching**: Store core game files locally for offline play.

## Monetization Strategy

### Core Philosophy
Profitable free-to-play with a focus on cosmetics and optional progression boosts, ensuring a generous free experience.

### Revenue Streams (MVP)
- **Gold Pack**: $5 for 3000g
- **Cosmetic Card Backs**: $2-5 (e.g., “Mossy Forest Back”)
- **Bigfoot Skins**: $5-10 (e.g., “Neon Yeti”)
- **Battle Pass**: $10/season with exclusive cosmetics and a seasonal Bigfoot
- **Welcome Bundle**: $5 for 3000g + rare card back (first-time offer)

### Revenue Streams (Future)
- **VIP Tournaments**: $10-25 entry, winner takes 70% of pot
- **Seasonal Exclusives**: $5-15 for limited-time Bigfoot skins
- **XP Boosters**: $2 for 2x XP (24 hours)
- **Premium Support**: $10/month for priority customer service

### Conversion Funnels
- **Day 1**: Free starter pack (100g, basic card back), show Battle Pass benefits
- **Day 3**: Welcome Bundle offer ($5 for 3000g + rare card back)
- **Week 1**: First Boss Battle free, Battle Pass preview
- **Future**: Add loyalty rewards and referral bonuses

## Bigfoot Creature Reference Table (MVP Roster)

| Name | Type | Location | Primary Habitat | Key Traits | Game Stats |
|------|------|----------|----------------|------------|------------|
| **Agogwe** | Dwarf | Tanzania | Tropical rainforests | Elusive, camouflage | HP: 50, ATK: 1.3x, DEF: 1, Special: Stealth (Poison lasts +1 turn) |
| **Hibagon** | Dwarf | Japan | Bamboo forests | Foul odor, aggressive | HP: 50, ATK: 1.5x, DEF: 1, Special: Poison Aura (+5 Poison damage) |
| **Barbegazi** | Dwarf | Swiss-French Alps | Snowy peaks | Ice abilities, helpful | HP: 55, ATK: 1.1x, DEF: 2, Special: Ice Shield (+5 Heal) |
| **Sasquatch** | Squatch | Pacific Northwest | Creek beds | Classic Bigfoot, rock thrower | HP: 100, ATK: 1.2x, DEF: 2, Special: Rock Throw (+5 Stun damage) |
| **Yeti** | Squatch | Himalayas | Snowy peaks | White fur, mountain dweller | HP: 100, ATK: 1.0x, DEF: 4, Special: Cold Immunity (+10 Heal) |
| **Skunk Ape** | Squatch | Florida, USA | Everglades swamps | Foul odor, glowing eyes | HP: 80, ATK: 1.4x, DEF: 1, Special: Toxic Cloud (+10 Poison damage) |
| **Yowie** | Squatch | Australia | Underground rivers | Violent, fanged | HP: 90, ATK: 1.4x, DEF: 2, Special: Rage (+5 Stun damage) |
| **Momo** | Squatch | Eastern US | Abandoned farmland | Foul smell, livestock thief | HP: 75, ATK: 1.3x, DEF: 2, Special: Stench (+5 Poison damage) |
| **Genoskwa** | Giant | North America | Dark valleys | Stone-like skin, brutal | HP: 140, ATK: 1.2x, DEF: 5, Special: Stone Armor (+3 DEF) |
| **Nyalmo** | Giant | Nepal | Pine forests | Massive size, tree-shaking | HP: 150, ATK: 1.2x, DEF: 4, Special: Giant Strength (+10 Stun damage) |

### Creature Type Distribution
- **Dwarf Types**: 3 creatures (Smaller, agile, special abilities)
- **Squatch Types**: 5 creatures (Balanced, diverse abilities)
- **Giant Types**: 2 creatures (Large, powerful, high HP)

### Regional Distribution
- **North America**: 4 creatures (Sasquatch, Skunk Ape, Momo, Genoskwa)
- **Asia**: 3 creatures (Yeti, Hibagon, Nyalmo)
- **Oceania**: 1 creature (Yowie)
- **Africa**: 1 creature (Agogwe)
- **Europe**: 1 creature (Barbegazi)

## User Experience & Interface Design

### Screen Flow & Navigation

#### **Landing/Home Screen**
- **Hero Section**: Animated Sasquatch vs Yeti battle preview
- **Play Now Button**: Jump to Quick Match
- **Daily Quests**: 2 visible quests with progress bars
- **Featured Bigfoot**: Weekly spotlight with lore snippet
- **Quick Stats**: Player level, gold, win streak

#### **Main Menu Hub**
- **Battle Modes**: Quick Match, Weekly Boss, Survival Mode
- **Collection**: View unlocked Bigfoots, stats, lore
- **Shop**: Gold spending, cosmetics, Battle Pass
- **Profile**: Stats, achievements, settings
- **Leaderboard**: Global rankings

#### **Pre-Battle Screens**
- **Bigfoot Selection**: Choose from unlocked Bigfoots
- **Arena Selection**: Choose from unlocked arenas
- **Opponent Preview**: AI Bigfoot stats and lore snippet
- **Loading Screen**: Animated arena intro (5-10 seconds)

#### **Battle Interface**
- **Top HUD**: HP bars, Bigfoot names, status effects
- **Center Stage**: Card reveal area, Smash animations
- **Bottom Controls**: Grab/Smash buttons, timing mini-game overlay
- **Side Panels**: Rage meters, card counts, 30-second timer
- **Bigfoot Banter**: Lore-based text callouts (e.g., Skunk Ape: “Smell ya later!”)

#### **Post-Battle Screens**
- **Victory/Defeat Animation**: Bigfoot celebration or defeat pose
- **Rewards Summary**: Gold, XP, Bigfoot Bounty (if triggered)
- **Stats Breakdown**: Damage dealt, perfect timings
- **Next Battle Options**: Rematch, new opponent, return to menu

#### **Collection**
- **Bigfoot Gallery**: Grid view of 10 Bigfoots (locked/unlocked)
- **Detailed View**: Stats, lore, 2D sprite
- **Filter/Sort**: By type, region, unlock status

#### **Shop**
- **Gold Shop**: Card backs, Bigfoot skins, boosters
- **Battle Pass**: Seasonal rewards track
- **Daily Deal**: Rotating discounted cosmetic

### Mobile-First Design Principles
- **One-Handed Play**: Thumb-reachable controls
- **Large Touch Targets**: Minimum 44px tap areas
- **Swipe Gestures**: Navigate between screens
- **Portrait Orientation**: Optimized for phones
- **Haptic Feedback**: Vibrations for Smash hits, victories
- **Offline Capability**: Core gameplay works offline

## User Accounts & Authentication

### Account System (MVP)
- **Guest Play**: No registration, local storage, no leaderboards
- **Conversion Prompts**: Encourage account creation after 3 matches

### Future Account Features
- **Email + Social Login**: Google, Apple integration
- **Cloud Save**: Sync progress across devices
- **Profile Customization**: Avatar, favorite Bigfoot
- **Social Features**: Friend lists, Bigfoot Victory Card sharing

### Data Privacy
- **Minimal Data Collection**: Gameplay stats only
- **GDPR Compliant**: Clear privacy policy
- **Account Deletion**: Easy opt-out process

## Development Phases

### Phase 1: Core Game Logic
- War mechanics with Grab/Smash
- Three-suit system (Poison, Heal, Stun)
- Habitat Boosts and simple AI

### Phase 2: Combat & UI
- Bigfoot stats, Rage Meter (Primal Burst)
- Thematic Smash animations, arena intros
- Bigfoot banter text

### Phase 3: Progression & Polish
- Gold economy, Bigfoot Bounty, daily login streak
- XP system, basic unlocks (Bigfoots, card backs)
- Mobile-first UI with haptic feedback

### Phase 4: Social & Monetization
- Bigfoot Victory Card sharing
- Battle Pass and cosmetic shop
- Global leaderboard

## Retention & Monetization Strategy

### Retention Hooks
- **Daily Login Streak**: Escalating rewards (Day 7 Bounty spin)
- **Bigfoot Bounty**: Random post-match rewards
- **Weekly Boss**: Rotating challenges with lore snippets
- **Bigfoot Banter**: Humorous, immersive callouts

### Monetization (Cosmetic Only)
- **Gold Pack**: $5 for 3000g
- **Card Backs**: $2-5
- **Bigfoot Skins**: $5-10
- **Battle Pass**: $10/season
- **Welcome Bundle**: $5 for 3000g + rare card back

### Future Monetization
- VIP tournaments, seasonal Bigfoot skins
- XP boosters, custom arenas
- Never pay-to-win mechanics

## Key Design Principles
1. **Slot Machine Feel**: Generous gold, Bigfoot Bounty rewards
2. **Skill Expression**: Smash timing and Bigfoot-arena synergy
3. **Thematic Immersion**: Bigfoot lore, banter, arena intros
4. **Accessible Core**: 2-3 minute matches, easy to learn
5. **Rich Progression**: Unlocks and quests drive long-term play

## Future Features
- Expand roster to 57 Bigfoots
- Add Wild Encounter events (random Bigfoot interruptions)
- Introduce Mystery Bigfoot challenges and Friend Challenge Mode
- Implement lore-based quests and seasonal events
- Add VIP tournaments and custom arenas