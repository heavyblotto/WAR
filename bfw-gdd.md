# Bigfoot War: Game Design Document
 
**Genre**: Digital Card Game, Casual, War-Based  
**Platform**: Web (Node.js backend, HTML5 frontend)  
**Target Audience**: Casual gamers, slot machine players, card game enthusiasts (13+)  
**Session Length**: 3-6 minutes  
**Core Loop**: Choose Bigfoot Warlord → Draw cards → War with AI → Win rewards → Unlock new content

## Game Overview

**Bigfoot War** is a simplified, web-based card game that combines the classic War card game with Bigfoot mythology. Players control Bigfoot Warlords in quick, engaging battles against AI opponents using traditional playing cards enhanced with special Bigfoot-themed effects.

### Core Concept
- **Traditional War Mechanics**: Draw top card, reveal simultaneously, higher rank wins
- **Bigfoot Theme**: Warlords, territories, and special cards themed around cryptid lore
- **Slot Machine Appeal**: Random rewards, visual feedback, win streaks, lucky moments
- **Simple Progression**: Unlock new Bigfoots and cards through victories

### Key Features
- **Quick Sessions**: 3-6 minute games perfect for casual play
- **Traditional Cards**: Standard 52-card deck with familiar ranks and suits
- **Special Cards**: Warlord-specific and Relic cards with unique effects
- **Visual Appeal**: Animated card flips, damage numbers, Bigfoot reactions
- **Random Rewards**: Lucky draws, double damage, bonus rounds
- **Simple Stats**: Only 3 stats (Health, Luck, Power) for easy understanding

## Core Gameplay

### War Mechanics

**Basic War Flow**:
1. **Setup**: Choose Warlord, shuffle deck, start War
2. **Draw**: Both players draw top card from deck
3. **Reveal**: Simultaneous card flip with animation
4. **Compare**: Higher rank wins (Ace > King > Queen > Jack > 10 > 9...)
5. **Damage**: Winner deals damage = card rank + Power stat
6. **Effects**: Special cards trigger additional effects
7. **Repeat**: Continue until one Warlord reaches 0 Health

**Tie Resolution (Traditional War)**:
- **War!**: Both players draw 3 cards face-down
- **Reveal**: Both players reveal 4th card
- **Compare**: Higher rank wins all cards
- **Massive Damage**: Winner deals 4x damage

### Card System

**Card Types**:

**Natural Cards (Standard Deck)**:
- **Ace** (High) - Deals 4 damage
- **King** - Deals 3 damage
- **Queen** - Deals 2 damage
- **Jack** - Deals 1 damage
- **10-2** - Deal damage equal to rank
- **Joker** - Special effect (random bonus)

**Warlord Cards (Modified Playing Cards)**:
- **Ace of Spades** - "Sasquatch Rock Throw" - Deals 4 damage + stuns enemy next turn
- **King of Hearts** - "Yeti Healing" - Deals 3 damage + heals 2 Health
- **Queen of Diamonds** - "Mapinguary Scry" - Deals 2 damage + reveals enemy's next card
- **Jack of Clubs** - "Agogwe Stealth" - Deals 1 damage + enemy skips next turn

**Relic Cards (Special Effects)**:
- **Red Joker** - "Forest Blessing" - Next win deals double damage
- **Black Joker** - "Mountain Fury" - Next loss becomes a win
- **Ace of Clubs** - "Swamp Mist" - Enemy's next card is -1 rank
- **King of Spades** - "Jungle Rage" - Your next card is +1 rank

### Deck Structure

**Standard Deck**: 52 playing cards (Ace-King, 4 suits)
**Warlord Deck**: 4-6 modified cards specific to your Bigfoot
**Relic Deck**: 2-4 special effect cards
**Total**: ~60 cards per Warlord

## Game Systems

### Stats System (Simplified)

**Health**: How much damage you can take (100 HP base)
**Luck**: Affects special card draws and bonuses (+10% to +50%)
**Power**: Affects damage dealt (+1 to +3 damage per win)

### Progression System

**Levels 1-10**: Unlock new Warlords
**Levels 11-20**: Unlock new Relics
**Levels 21+**: Unlock new Territories

**XP Sources**:
- Win War: +50 XP
- War Victory: +25 XP bonus
- Daily Login: +100 XP
- Lucky Draw: +10 XP

### Reward System

**Daily Bonuses**:
- Login Streak: 1st day (100 XP), 2nd day (200 XP), 3rd day (300 XP + Relic)
- Free Cards: Daily draw from Relic deck
- Lucky Moments: Random events give temporary bonuses

**Win Streaks**:
- 3 Wins: +1 Power for next War
- 5 Wins: +1 Luck for next War
- 10 Wins: Unlock new Warlord

**Random Rewards**:
- Lucky Draws: 10% chance to draw a Joker
- Double Damage: 5% chance any win deals double damage
- Free Relics: Random Relic cards appear in deck
- Bonus Rounds: Special "Epic War" rounds with bigger rewards
- Jackpot Wins: Rare combinations trigger massive damage

## Content

### Bigfoot Warlords

**Sasquatch** (Starter):
- **Theme**: Pacific Northwest, rock throwing
- **Special Cards**: Rock Throw (Ace of Spades), Creekbed Rally (King of Hearts)
- **Stats**: Health 100, Luck 20%, Power +1

**Yeti** (Level 5):
- **Theme**: Himalayas, ice and healing
- **Special Cards**: Glacier Mend (Queen of Hearts), Avalanche (Ace of Spades)
- **Stats**: Health 110, Luck 15%, Power +2

**Mapinguary** (Level 10):
- **Theme**: Amazon, forest protection
- **Special Cards**: Forest Guard (King of Clubs), Swamp Mist (Queen of Diamonds)
- **Stats**: Health 95, Luck 25%, Power +1

**Agogwe** (Level 15):
- **Theme**: Tanzania, stealth and agility
- **Special Cards**: Stealth Strike (Jack of Clubs), Camouflage (Queen of Spades)
- **Stats**: Health 90, Luck 30%, Power +1

### Territories

**Forest Territories** (Hearts):
- **Bonus**: +1 Health per Hearts win
- **Enemy**: Forest Guardian Warlord
- **Reward**: Forest Blessing Relic

**Mountain Territories** (Spades):
- **Bonus**: +1 Power per Spades win
- **Enemy**: Mountain King Warlord
- **Reward**: Mountain Fury Relic

**Swamp Territories** (Diamonds):
- **Bonus**: +1 Luck per Diamonds win
- **Enemy**: Swamp Mist Warlord
- **Reward**: Swamp Mist Relic

**Jungle Territories** (Clubs):
- **Bonus**: +1 random stat per Clubs win
- **Enemy**: Jungle Rage Warlord
- **Reward**: Jungle Rage Relic

### Visual Design

**Card Animations**:
- **Flip**: Satisfying card flip with Bigfoot-themed back
- **Reveal**: Dramatic reveal with particle effects
- **Damage**: Big, colorful damage numbers
- **Win/Loss**: Bigfoot reactions (celebrate/anger)

**UI Elements**:
- **Health Bar**: Simple, clear health display
- **Win Streak**: Prominent streak counter
- **Lucky Indicators**: Cards glow when drawn
- **Reward Pop-ups**: Big, satisfying reward notifications

**Audio Design**:
- **Card Sounds**: Satisfying flip and reveal sounds
- **Bigfoot Sounds**: Roars, growls, celebration sounds
- **UI Sounds**: Button clicks, reward chimes
- **Ambient**: Forest, mountain, swamp, jungle themes

## Technical Architecture

### Backend (Node.js)

**Core Services**:
- **Game Engine**: War logic, card management, AI opponent
- **User Management**: Authentication, progression, statistics
- **Matchmaking**: AI opponent selection, difficulty scaling
- **Rewards**: Daily bonuses, random rewards, progression

**Database Schema**:
```javascript
// User Schema
{
  id: String,
  username: String,
  level: Number,
  xp: Number,
  health: Number,
  luck: Number,
  power: Number,
  unlockedWarlords: [String],
  unlockedRelics: [String],
  dailyStreak: Number,
  lastLogin: Date
}

// War Schema
{
  id: String,
  userId: String,
  warlord: String,
  enemyWarlord: String,
  territory: String,
  result: String, // 'win', 'loss', 'draw'
  damageDealt: Number,
  damageTaken: Number,
  cardsPlayed: [String],
  specialEffects: [String],
  timestamp: Date
}
```

**API Endpoints**:
- `POST /api/war/start` - Start new War
- `POST /api/war/play` - Play card in War
- `GET /api/user/profile` - Get user data
- `POST /api/user/daily` - Claim daily bonus
- `GET /api/warlords` - Get available Warlords
- `GET /api/territories` - Get available Territories

### Frontend (HTML5/CSS/JavaScript)

**Core Components**:
- **Game Board**: Card display, health bars, UI elements
- **Card Animations**: Flip, reveal, damage animations
- **Audio System**: Sound effects, music, ambient audio
- **UI System**: Menus, progression, rewards

**Technology Stack**:
- **HTML5 Canvas**: Card animations and effects
- **CSS3**: Styling, transitions, responsive design
- **JavaScript**: Game logic, API communication
- **Web Audio API**: Sound effects and music
- **Local Storage**: Offline progress, settings

### AI System

**Difficulty Scaling**:
- **Easy**: Random card selection, basic stats
- **Medium**: Slight advantage in card draws, moderate stats
- **Hard**: Better card selection, higher stats
- **Expert**: Optimal play, maximum stats

**AI Behavior**:
- **Card Selection**: Weighted random based on difficulty
- **Special Effects**: Trigger effects based on AI difficulty
- **Adaptive**: Adjust difficulty based on player win rate

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
**Lucky Boosters**: Increased luck for 24 hours ($0.99)

### Retention Features

**Daily Login Rewards**: Free XP, cards, and bonuses
**Win Streak Bonuses**: Consecutive wins unlock better rewards
**Lucky Moments**: Random events keep players engaged
**Achievement System**: Unlock rewards for various accomplishments

## Development Roadmap

### Phase 1: Core Game (Months 1-3)
- **Week 1-4**: Basic War mechanics, card system
- **Week 5-8**: AI opponents, progression system
- **Week 9-12**: Visual polish, audio, animations

### Phase 2: Content & Features (Months 4-6)
- **Week 13-16**: Additional Warlords, Territories
- **Week 17-20**: Relic system, special effects
- **Week 21-24**: Daily bonuses, win streaks

### Phase 3: Polish & Launch (Months 7-9)
- **Week 25-28**: UI/UX polish, bug fixes
- **Week 29-32**: Beta testing, balance adjustments
- **Week 33-36**: Launch preparation, marketing

### Phase 4: Post-Launch (Months 10+)
- **New Content**: Additional Warlords, Territories, Relics
- **Events**: Special limited-time events
- **Community**: Leaderboards, achievements, social features

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

**Bigfoot War** combines the simplicity of traditional War with engaging Bigfoot theming and slot machine appeal. The game targets casual players who want quick, satisfying sessions with clear progression and random rewards. The simplified systems make it accessible while the Bigfoot theme and special effects keep it engaging.

The Node.js web architecture ensures broad accessibility while the free-to-play model with cosmetic purchases provides sustainable monetization. The development roadmap focuses on core gameplay first, then content expansion, ensuring a solid foundation for long-term success.
