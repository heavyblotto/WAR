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
- **Warlord Deck**: Themed Warlord decks containing **Natural (traditional) Cards** plus **Warlord Cards** and **Relic Cards**
- **Warlord Cards**: Warlord-specific cards, attached to any Natural Card (e.g. Yeti: 7 Spades, Sasquatch 9 of Diamonds)
- **Relic cards**: Totems with unique effects, attached to Jacks
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

### Overview
The technical stack for *Bigfoot War* is designed for a web-based, single-player card game with AI opponents, emphasizing scalability, low latency, and ease of development. Hosting on Vercel leverages its serverless capabilities, edge caching, and seamless CI/CD for fast deployments. The architecture integrates a modern full-stack framework to unify frontend and backend, reducing complexity from the original vanilla setup. Key focuses include secure user data handling, performant animations, and integration points for monetization.

We recommend adopting **Next.js** as the core framework, which bundles React for the frontend and Node.js for backend API routes. This allows static rendering for the frontend (fast loads via Vercel's CDN) and serverless functions for dynamic logic (e.g., game simulations). TypeScript is suggested across the board for type safety, especially in card/deck management and API interactions.

### Backend (Node.js with Next.js API Routes)

**Core Services**:
- **Game Engine**: Handles War logic (shuffling, comparisons, damage calculations), card management (deck building with Warlord/Relic modifiers), and AI opponent behavior. Use libraries like `lodash` for random weighted selections.
- **User Management**: Authentication (via JWT or OAuth providers like Auth0), progression tracking (XP, unlocks), and statistics (win rates, streaks).
- **Matchmaking**: AI opponent selection with difficulty scaling; no real-time multiplayer needed initially.
- **Rewards**: Processes daily bonuses, random events, and progression unlocks. Integrate cron-like scheduling via Vercel's scheduled functions for daily resets.

**Database**:
- **Recommended: MongoDB Atlas (Serverless)**: A NoSQL database for flexible schemas, ideal for JSON-like data (e.g., unlocked Warlords as arrays). Free tier supports initial development; scales automatically. Use Mongoose ORM for schema validation and queries.
- **Alternatives**:
  - **Vercel Postgres**: SQL option for structured analytics (e.g., querying war history). Use Prisma ORM for type-safe access; free beta tier available.
  - **Supabase**: Open-source alternative with auth and real-time features; includes PostgreSQL backend and storage for user assets.
- **Schema Example** (Updated for TypeScript/MongoDB):
```typescript
// User Schema (Mongoose)
interface User {
  id: string;
  username: string;
  level: number;
  xp: number;
  health: number;
  luck: number;
  power: number;
  unlockedWarlords: string[];
  unlockedRelics: string[];
  dailyStreak: number;
  lastLogin: Date;
}

// War Schema
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
```

**API Endpoints** (Next.js `/api` Routes):
- `POST /api/war/start`: Initializes a new War session, shuffles decks, and selects AI opponent.
- `POST /api/war/play`: Processes a card play, resolves effects, and returns updated game state.
- `GET /api/user/profile`: Retrieves user data (secured with auth middleware).
- `POST /api/user/daily`: Claims daily bonus, updates streak.
- `GET /api/warlords`: Lists available Warlords based on user unlocks.
- `GET /api/territories`: Lists available Territories.
- **Security**: Use Vercel's edge middleware for rate limiting and CORS. Implement secure RNG with Node's `crypto` module to prevent predictable outcomes.

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
- **Card Selection**: Use weighted randomness (via Lodash); adapt based on player history stored in DB.
- **Special Effects**: Trigger probabilistically, scaled by difficulty.
- **Adaptive**: Query user win rate from DB to adjust difficulty dynamically (e.g., via API middleware).

### Deployment and Monitoring
- **Hosting**: Vercel for all-in-one deployment. Git-based CI/CD; preview branches for testing.
- **Metrics**: Use Vercel Analytics for load times (<3s), API responses (<100ms), and uptime (99.9%).
- **Scalability**: Serverless auto-scales; monitor costs for high-traffic events.
- **Future Expansions**: Easy to add WebSockets (via Upstash or similar) for potential multiplayer if needed.


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
