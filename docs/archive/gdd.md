# Bigfoot War: Game Design Document

## Executive Summary

**Genre**: Digital Card Game, Slot-Inspired, War-Based  
**Platform**: Web (Node.js backend, HTML5 frontend)
**Target Audience**: Casual gamers, slot machine players, card game enthusiasts (13+)  
**Session Length**: 1-6 minutes (with auto-resolution options)  
**Core Loop**: Choose Warlord → Bet Gold → Pull Lever (Auto-Reveal) → Collect Amplified Rewards → Build Luck Meters → Unlock Higher Bets

**Bigfoot War** is a slot-machine inspired digital card battler that transforms the classic War card game into an engaging, luck-driven experience. 

The game fuses the strategic appeal of the classic card game War while adding the excitement and progression systems that keep players coming back. With its focus on fairness, accessibility, engaging monetization, and comprehensive Bigfoot lore spanning 59+ global cryptids, Bigfoot War is positioned to capture both casual gamers and slot enthusiasts in the growing digital card game market.

### Key Innovations
- **Lever-Based Gameplay**: Single "Pull Lever" button auto-reveals both cards simultaneously
- Deterministic Fairness
- Progression Synergy

### Success Metrics

**Engagement Targets** (2025 Casual Gaming Benchmarks):
- **Day 1 Retention**: 30% (vs. median 20-28%, top 40-60%)
- **Day 7 Retention**: 10% (vs. median 6-12%)
- **Day 30 Retention**: 5% (vs. median 4-6%)
- **Session Length**: 3-6 minutes average (increased to 4-8 min with wagering)
- **Sessions Per Day**: 2-3 for active users

**Revenue Targets** (Hybrid Casual Model):
- **Conversion Rate**: 8-15% of players make purchases
- **ARPU**: $3-8 per paying user per month (vs. casual $1-5)
- **LTV**: $20-40 per paying user lifetime value (vs. casual $15-30)
- **MRR**: $5k-20k by Month 6 (scaling from 5k MAU)

**Technical Targets**:
- **Load Time**: <3 seconds on 3G connection
- **API Response**: <100ms for lever-pull actions
- **Uptime**: 99.9% service availability
- **Frame Rate**: 60fps animations (30fps fallback on low-end devices)

### Key Innovations

### Core Slot-Inspired Mechanics

Bigfoot War transforms the traditional War card game into a slot-machine experience through streamlined reveals, virtual wagering, and luck-driven progression. The core War mechanics remain intact but are presented as rapid-fire "spins" with amplified excitement.

## Game Mechanics

### Splash Page
1. Player taps **War Horn** to Sign Up.
2. Player taps **War Horn** to Sign In.

### Core Game Loop (Step-by-Step)

#### Phase 1: Pre-War Setup, Lobby

**Optimized Flow** (Target: 1-2 taps max for Quick War, 2-4 taps for Campaign):

| Step | Action | Taps | Time (sec) | Optimization |
|------|--------|------|-----------|--------------|
| 1 | Warlord Selection | 1 | 1 | Browse book or auto-select |
| 2 | Mode Selection | 1 (Quick War) or 2-3 (Campaign) | 2-5 | Quick War: instant; Campaign: Territory unlock |
| 3 | Pro Betting (Optional) | 0-1 | 2 | Haptic slider with auto-suggest |
| 4 | Warlord Cards (2-10 based on level) | 1 (auto-select) or 2-3 (manual) | 2-5 | Auto-select based on Territory affinity |
| 5 | Tap War Horn | 1 | 1 | Primary CTA |
| **Total** | **Quick War** | **3-4 taps** | **6-12s** | **Fast dopamine** |
| **Total** | **Campaign** | **5-9 taps** | **10-20s** | **Deeper engagement** |

1. **Warlord Selection**: Player browses book of available Bigfoot Warlords (Sasquatch, Yeti, Mapinguary, Agogwe, etc.), each with unique Warlord stats (`Health`, `Power`) and special effects.
2. Player chooses to play a **Quick War** or **Territory Campaign**.

**Territory Campaign Setup**

For Territory Campaign, player can Start a **New Campaign**, or **Continue Campaign**.

**Continue Campaign Setup**
1. Player browses book of Campaigns to select the next Territory in the Campaign to capture or to replay existing captured Territories.
2. For **Pro players** (paid membership), **Wagering Decision**: Player chooses bet amount in Gold.
3. Player browses book of Warlord cards, selects 1-10 Warlord cards to play (number allowed depends on XP, Level, Campaign).
4. Player taps **War Horn** button to start the War.

**New Campaign Setup**
1. Depending on player **XP** and **Level**, players browse book of available Campaigns (e.g. Pacific Northwest, Florida Everglades, Himalaya Foothills, etc.).
2. For **Free to Play**, player pays Gold for one-time Campaign Unlock (**Pro players** subscription pays for Unlocks).
3. Player browses book of Campaigns to select the first Territory in the Campaign to capture.
4. For **Pro players** (paid membership), **Wagering Decision**: Player chooses bet amount in Gold.
5. Player browses book of Warlord cards, selects 1-10 cards to play (number allowed depends on XP, Level, Campaign).
6. Player taps **War Horn** button to start the first Campaign War.

**Quick War Setup**
1. Player chooses opposing Warlord by browsing book of previously defeated opponents. Players can filter Warlords. 
2. For **Pro players** (paid membership), **Wagering Decision**: Player chooses bet amount in Gold.
3. Player browses book of Warlord cards, selects 1-10 cards to play (number allowed depends on XP, Level, Campaign).
4. Player taps **War Horn** button to start the War.

#### Phase 2: War Initialization, Lobby > War Board

1. **Deck Generation**: System creates 54-card deck (Natural cards + Warlord Cards + 2 jokers).
2. **Seed Creation**: Deterministic seed generated from secure inputs (HMAC(userId, warId|timestamp)) for reproducible results.
3. **Deck Shuffle**: Seeded shuffle ensures consistent draw order for replays.
4. **Initial State**: Both players start with full health, empty meters, and shuffled decks.
5. **War Board Display**: Game transitions to main gameplay screen with Territory-themed accents.

#### Phase 3: Core War Loop, War Board

**Optimized Flow** (Target: 1 tap per round, 3-6 min war duration):

| Round Step | Action | Taps | Time (ms) | Notes |
|-----------|--------|------|-----------|-------|
| 1 | **Lever Pull** | 1 | 180 | Haptic feedback, mechanical animation |
| 2 | Card Reveal | 0 | 280-320 | Simultaneous flip, spring animation |
| 3 | Rank Comparison | 0 | 0 | Auto-calculate server-side |
| 4 | Damage Animation | 0 | 300 | Damage pop, health bar update |
| 5 | Special Effects | 0 | 200-500 | Proc VFX (optional skip) |
| 6 | Meter Updates | 0 | 150 | Smooth fill animations |
| 7 | Loop Decision | 0 | 0 | Auto-advance if health > 0 |
| **Total per Round** | | **1 tap** | **800-1,700ms** | **Pro: Fast (800ms), Standard (1.7s)** |

**Primary Action**: Single "Pull Lever" button replaces manual card draws
- **Simultaneous Reveals**: Both player and AI cards flip at the same time, like slot reels stopping
- **Auto-Resolution**: Cards compare automatically; higher rank wins and deals damage
- **Visual Feedback**: Lever press triggers satisfying mechanical animation with haptic feedback

1. **Lever Pull**: Player presses "Pull Lever" button (primary action) triggering simultaneous card reveals
2. **Card Reveal**: Both player and AI cards flip simultaneously (280-320ms spring animation) with territory-themed effects.
3. **Rank Comparison**: System compares card ranks (Ace=14, King=13, Queen=12, Jack=11, 10-2 face value) plus Power stat bonuses. Jokers always lose the round but grants a random reward to the owner (some variation of a pick two/three or scratch-off type mini-game)
4. **Damage Calculation**: Winner deals damage = rank value + Power stat + Territory bonuses + special effects
5. **Special Effects**: Triggered effects resolve (heal, armor, debuffs, rank shifts, peeks, stuns, skips) with visual feedback.
6. **Meter Updates**: Karma Meter (+1 on loss, +2 on War! loss), Streak Meter (+1 winning round, +1 winning War!).
7. **Health Updates**: Damage applied to loser's health bar.
8. **Card Disposal**: All cards go to respective discard piles (no capture).

#### Phase 4: War! Resolution (Tie Handling)

**War! Tie Resolution**:
- **Trigger**: When both cards have the same rank
- **Animation**: 3 face-down cards stack rapidly (80ms each), then explosive 4th card reveal
- **Visual**: Marquee lights, siren sounds, screen pulse effect
- **All cards**: Go to respective discard piles (no capture)

1. **Tie Detection**: When both cards have same rank (or tied Jokers), War! sequence triggers.
2. **War! Animation**: Three face-down cards stack rapidly (80ms each) + explosive 4th card reveal with marquee lights and siren sounds
3. **War! Damage**: Winner deals 3-4x damage (territory-dependent) with enhanced visual effects
4. **War! Effects**: Special War!-triggered effects activate (bonus damage, armor, peeks, etc.)
5. **War! Payout**: Special Gold, XP payouts for winning War! (based on level, War! card-pairings, Streaks). Joker War! add big multipliers based on level / XP and also add extra random Warlord card to the player's deck.
5. **Card Disposal**: All War! cards go to respective discard piles (no capture).

#### Phase 5: Round Completion

1. **Proc System**: Random special effects trigger (15-25% base rate, +5-15% with higher bets).
2. **Near-Miss Detection**: Loss by 1-2 ranks triggers partial payout (0.5x bet) + Karma Meter boost.
3. **Jackpot Check**: Deterministic combos (matching suits + War! win) + 1% random chance for jackpot.
4. **Meter Triggers**: Check if Karma (6) or Streak (20) meters trigger bonuses.

#### Phase 6: War Continuation Decision

1. **Health Check**: If either player's health reaches 0, war ends.
2. **Deck Check**: If either deck empties, reshuffle occurs.
3. **Continue Loop**: If both players alive and cards available, return to Phase 3.

#### Phase 7: War Conclusion

1. **Victory Determination**: Player wins if AI health reaches 0, loses if player health reaches 0.
2. **Gold Payout**: Calculate Gold won = (bet × multiplier) + base rewards + bonuses - Gold wagered.
3. **XP Calculation**: Base XP (50 for win, 10-20 for loss) + Spoils conversion (up to 50 XP) + War! bonus (+20) + meter triggers + wagering bonus (Pro: +1 XP/10 Gold bet).
4. **Spoils Generation**: Spoils earned based on performance (1-10 Spoils per war, avg 5).
5. **Progression Updates**: Update Level XP and Warlord Mastery XP.

#### Phase 8: Post-War Results

**Optimized Flow** (Target: 2-3 seconds with auto-advance):

| Step | Action | Taps | Time (sec) | Notes |
|------|--------|------|-----------|-------|
| 1 | Results Screen | 0 | 1.5 | Verdict banner with VFX |
| 2 | Spoils Conversion | 0 | 1 | Animated bar (auto) |
| 3 | Specimen Collection | 0 | 0.5 | "New" badges flash |
| 4 | Gold Summary | 0 | 0.3 | Net Gold result |
| 5 | Progression Display | 0 | 0.5 | XP/Level progress |
| **Total** | | **0 taps** | **~3.8s** | **Auto-advance to Phase 9** |

1. **Results Screen**: Display verdict banner with territory-themed VFX (confetti/leaf/ice/swamp/jungle).
2. **Spoils Conversion**: Animated bar converting Spoils to XP (up to 50 XP cap).
4. **Specimen Collection**: New Specimens collected with "new" badges and collection summary.
5. **Gold Summary**: Net Gold result with wagering efficiency.
6. **Progression Display**: Campaign progress, Level progress.

#### Phase 9: Post-War Decisions

**Optimized Flow** (Target: 1 tap to continue):

| Option | Action | Taps | Time (sec) | Visual |
|--------|--------|------|-----------|--------|
| **Rematch** | "Rematch (new seed)" | 1 | 2 | Red lever with new shuffle indicator |
| **Next Territory** | Continue Campaign | 1 | 3 | Gold unlock prompt if needed |
| **Back to Lobby** | Return to main | 1 | 0.5 | Instant transition |
| **Knapsack** | View Collection | 1 | 5 | Collection viewer with "new" badges |

1. **Rematch Options**:
    - "Rematch (new seed)" - fresh shuffle with new RNG
2. **Navigation Options**:
    - Return to Lobby for new war setup
3. **Collection Management**: Open Knapsack to view Specimen details and Collection progress.

### Campaigns
Campaigns contain Territories where players engage in War with AI opponents. Campaigns are based on regional and geographic locales (Pacific Northwest, Himalayas, Amazon, African Savannah, etc.), and can include 3-10 Territories linked sequentially.

**Campaign Structure**:
- Each Territory contains a Bigfoot Warlord AI opponent, with increasing difficulty (Tier 1-3, then Boss)
- Warlords are mostly thematic but non-thematic Warlords may be present; Warlords may repeat across Territories with different decks
- First Territory in each Campaign: **Free** after Campaign unlock
- Subsequent Territories: Require Gold unlock (100-5kG range depending on tier)
- Elite mode: Replay captured territories with enhanced difficulty and rewards (500G Pro gets 400G)

**Campaign Flow** (Detailed Step-by-Step):
1. **Campaign Selection**: Browse unlocked Campaigns in Lobby (F2P pays 1k-10k Gold; Pro gets free Tier 1-2)
2. **Territory Map**: Linear map shows locked/unlocked Territories with costs
3. **Territory Unlock**: Next Territory costs 100-5kG (Tier 1: 100-250G, Tier 2: 500-1kG, Tier 3: 2k-5kG)
4. **Territory Setup**: Select Warlord (2-10 cards based on level), Pro bet (optional), War Horn to start
5. **War Execution**: Standard war with Territory bonuses (see Territory System)
6. **Post-War**: Spoils/XP/Gold rewards; "Unlock Next Territory? [Cost]G" prompt
7. **Campaign Completion**: Badge + 200G + (100 XP × Territories) + Spoils Pod (20-50 Specimens)

**Territory Tier Scaling**:

| Tier | Territory Theme Example | AI Difficulty Mult | Rewards Mult | Home Warlord Bonus |
|------|-------------------------|-------------------|--------------|---------------------|
| **Tier 1 (Intro)** | Forest Outskirts | +0% (Equal) | 1.0x | +5% XP/Gold |
| **Tier 2 (Mid)** | Swamp Ambush | +10% Power | 1.2x | +15% XP/Gold + Proc +5% |
| **Tier 3 (Boss)** | Mountain Peak | +20% Power/cards | 1.5x | +20% XP/Gold + Jackpot Mult |
| **Elite (Replay)** | Elite Forest | +15% overall | 1.3x | Exclusive Specimen +1% proc |

**Campaign Unlock Costs**:
- F2P: One-time 1k-10k Gold per Campaign (free replays after unlock)
- Pro (Gold Pass): Free Tier 1-2 Campaigns
- Pro (Platinum): Free all Campaigns + Elite access

**Completion Rewards**:
- Campaign Badge: Visual emblem for campaign completion
- Gold Bonus: 200G + (100 XP × number of Territories)
- Spoils Pod: 20-50 Specimens for full campaign collection
- Exclusive Specimen: Boss territory grants rare Specimen
- Mastery XP: Home Warlord gains +10% Mastery XP when playing campaign themes

**Pro Enhancements**:
- Free Tier 1-2 unlocks (Gold Pass); Free all + Elite (Platinum)
- +0.5 wager multiplier in home Territories
- Auto-suggest optimal Warlords for Territory affinity

**Sim Validation**: F2P completes 1 Campaign/week (15 wars/Territory, +1,200 XP/week). Pro: 10 days faster with free unlocks.

### Quick War System

**Overview**: Fast, standalone bursts for casual entry (1-3 min sessions). No Campaign commitment. Ideal for dopamine hits between longer sessions. Streamlined setup for mobile-first experience.

**Entry Flow**:
1. **Lobby Button**: Tap "Quick War" (auto-selects opponent from previously defeated)
2. **Opponent Selection**: Browse book or use auto-select; Filter by difficulty/theme
3. **Pro Wagering** (Optional): Bet 10-500 Gold (wagering amplifies rewards)
4. **Warlord Cards**: Select 2-4 cards (fewer for speed; depends on level)
5. **Tap War Horn**: Start instant war (no Campaign unlock needed)

**Opponent Selection**:
- **Auto-Select**: Chooses random unlocked Warlord with difficulty ±2 levels
- **Manual Filter**: By archetype, region, difficulty (Easy/Medium/Hard)
- **Previously Defeated**: Only Warlords you've beaten before
- **Quick Chains**: Streak bonuses for consecutive Quick Wars

**Rewards & Scaling**:

| Mode | Duration | XP (Win) | Gold (Win) | Spoils | Win Rate Target | Notes |
|------|----------|----------|------------|--------|-----------------|-------|
| **Standard Quick** | 1-3 min | 40 XP | 15G | 2-5 | 70% | Base; +10% if chained (3 in row) |
| **Auto Quick** | 30s | 30 XP | 10G | 1-3 | 65% | Highlights only; Pro: Full visuals |
| **Themed Quick** | 2 min | 50 XP | 20G | 4-6 | 60% | Affinity bonus; Event-tied |

**Rewards Formulas**:
- Base rewards × 0.8 (vs. Campaign) + Streak Mult (1 + 0.1 × Chain Length)
- Opponent Difficulty = Player Level ±2 (ensures 65-70% win rate)
- Quick Chain Bonus: +10% Gold/XP after 3 consecutive Quick Wars

**Pro Enhancements**:
- Wagering (up to 500G cap vs. 2k in Campaigns)
- +20% XP (vs. F2P)
- "Quick Pro Mode": 1s reveals (vs. 3-4s standard)
- Double rewards on Quick Chain streaks

**Integration**: Counts toward daily caps; Unlocks feed Campaigns (defeat for Territory hints). **Sim Results**: 5 Quick Wars/day → 250 XP/100G (F2P); 20% of total progression.

### Tournament System

**Overview**: Weekly Pro-exclusive competitive peaks. Async AI/PvP with shareable seeds for replays. Ties to economy via entry fees and prizes. Real-time leaderboards via WebSockets for social engagement.

**Tournament Types & Scaling**:

| Type | Duration | Entry (Gold) | Players | Scoring Formula | Prizes (Gold/XP) | Pro Perk |
|------|----------|--------------|---------|-----------------|------------------|----------|
| **Weekly Standard** | 7 days | 200G | 64 | (Wins × 10) + (Gold Wagered × 0.5) + Win Rate % | 1st: 5kG/500 XP; Pot: 2x entry | Free entry 1x/week |
| **Themed (e.g., Swamp)** | 3 days | 500G | 32 | Above + Territory Bonus (1.2x) | 1st: 3kG/300 XP; Cosmetics | +0.5 wager mult |
| **High Roller** | 1 day | 1kG | 16 | (Net Gold × 1) + Streaks | 1st: 10kG/1k XP; Prestige | Unlimited entries; Spectator |
| **Seasonal** | Monthly | 300G | 128 | Full (incl. Spoils collected) | Pot: 3x; Exclusive Pod | 40% entry refund |

**Scoring Formula**:
```
Score = (Wins × 20) + (Avg Mult × Bet Total) + (Spoils × 5) - (Losses Penalty × 0.5 × Bet Lost)
Prize Distribution:
- 50% to top 3
- 30% to mid tier
- 20% participation (pity 50G minimum)
```

**Entry Flow**:
1. **Entry**: Pay Gold fee at Tournament Lobby
2. **Matchmaking**: 16-128 players (bracket or leaderboard)
3. **Wars**: Async wars (play vs. AI proxy seeded from opponent)
4. **Scoring**: Real-time updates via WebSockets
5. **Conclusion**: Prizes distributed; Replays available

**Pro Perks**:
- **Gold Pass**: Free entries 1x/week; +25% scoring
- **Platinum**: Free entries 3x/week; +50% scoring; VIP Spectator (watch live wars)
- **F2P Access**: Limited to 1 tournament/month (no wagering required)

**Sim Results**: 40% participation among Pro players; Avg net +300G/entry; +30% session length during tournaments.

### Alternative Game Flows

### Card System Rules

**Deck Composition**: Fixed 54-card structure (52 Natural positions + 2 fixed Jokers)

**Card Replacement System**:
- **Replacement Formula**: `min(2 + floor(Level/3), 6)` Warlord cards per war
- **Pool Bias**: 70% high ranks (J, Q, K, A), 30% affinity suit
- **Seed Prioritization**: Player gets top 20% pool with Pro (favored draws)
- **Visual Effect**: Warlord cards have unique borders, particles, signature symbols

**Replacement by Level**:
- **L1-5**: 2-3 Warlord cards
- **L6-10**: 3-4 Warlord cards  
- **L11-15**: 4-5 Warlord cards
- **L16+**: 5-6 Warlord cards (cap)

**Card Ranks**: Ace high (14), King (13), Queen (12), Jack (11), 10-2 face value, Joker (1)

**Damage Formula**: 
```
Damage = rank value + Power stat + territory bonuses + special effects
Max Bonus from Cards Alone: +4 damage (never exceeds)
```

**Warlord Cards**: Replace specific Natural cards one-for-one (2-6 per war based on level). Each Warlord defines a unique pool of replacement cards with themed effects.

**Suit Themes & Affinities**:
- **Hearts**: Healing effects, Forest territory affinity
- **Spades**: Armor effects, Mountain territory affinity
- **Diamonds**: Debuff effects, Swamp territory affinity
- **Clubs**: Momentum effects, Jungle territory affinity

**Pro Enhancements**: +2 Warlord cards in deck (beyond level cap); seed prioritizes top 20% pool for better draws.

### Wagering Rules, Pro Players

- **Bet Caps**: Level 1-5 (max 100 Gold), Level 6-10 (max 500 Gold), Level 11+ (max 2000 Gold)

### Territory Rules

- **Suit Affinities**: Forest (Hearts), Mountain (Spades), Swamp (Diamonds), Jungle (Clubs)
- **Territory Bonuses**: Forest (+1 heal on Hearts wins), Mountain (+1 armor every 3rd win), Swamp (+10% tie rate), Jungle (+1 random stat per Clubs win)

### Luck and Meter Rules

- **Karma Meter**: Fills on losses (+1 round loss, +2 War! loss, +1 tie loss, +2 bet loss), triggers at 6 for guaranteed Double Damage
- **Streak Meter**: Fills on win streaks (+1 per winning round), +1 per winning War!), triggers at 20 for Gold jackpot
- **Proc Rates**: Base 15-25% chance per reveal, +5-15% with higher bets
- **Jackpot Triggers**: Deterministic combos (matching suits + War! win) + 1% random chance

### Special Effect Rules

- **Trigger Windows**: On reveal, on win, on loss, on tie, on War! win, after tie
- **Effect Caps**: Stun/Skip ≤1 per war average, Debuff -1 resolves once, Armor/Heal +1 to +2
- **No Stacking**: -1 rank effects don't stack with other -1 rank effects
- **Resolve Once**: Some effects marked to prevent multiple activations
- **Visual Feedback**: All effects have clear visual and audio feedback

### Tournament Rules, Pro Players

- **Entry Fees**: Gold-based entry fees (200-1000 Gold depending on tournament type)
- **Scoring**: Based on Gold wagered, Gold won, wars played, win rate
- **Leaderboards**: Real-time updates with territory/Warlord filters
- **Rewards**: Exclusive cosmetics, Gold prizes, prestige titles
- **Spectator Mode**: Watch other players

### Monetization Rules and Flows

- **Free-to-Play Core**: All wars, Warlords, and territories accessible without payment
- **Gold Earning**: Unlimited through gameplay with soft daily caps
- **Convenience Purchases**: Gold packs, Pro subscriptions, cosmetics
- **No Pay-to-Win**: All purchases provide convenience or cosmetics only
- **Advertising**: Rewarded ads (+100-200 Gold), optional interstitials

**Gold Purchase Flow**
- **Entry**: Tap Gold counter or purchase button
- **Pack Selection**: Starter ($0.99), Value ($4.99), Premium ($9.99), Mega ($19.99)
- **Payment Processing**: Secure transaction
- **Gold Delivery**: Instant Gold addition
- **Outcome**: Enhanced Campaign Unlock and wagering capabilities

**Pro Subscription Flow**

**Entry**: Tap Pro upgrade button  
**Plan Selection**: Gold Pass ($4.99/month) or Platinum Pass ($9.99/month)  
**Payment Processing**: Recurring subscription (Apple/Google in-app)  
**Benefits Activation**: Immediate access to premium features  
**Outcome**: Enhanced gameplay experience

**Pro Benefits Comparison Table**:

| Feature | Gold Pass ($4.99/mo) | Platinum ($9.99/mo) | Impact |
|---------|----------------------|---------------------|--------|
| **Earnings Boost** | +15% all faucets | +25% + daily 500G | +200-400G/day |
| **Sink Discounts** | 20% off unlocks/cosmetics | 40% off + free Elite Territories | Faster progression |
| **Wagering Exclusive** | Bet mults +0.5x; pity 75% | +1x mult; insurance on losses | RTP 96-98% |
| **Ad Removal** | Full | Full + double rewarded (300G) | +750G/day equiv. |
| **Exclusives** | Fast anims, 1 extra Warlord slot | Prestige packs (50kG/mo), VIP tournaments | Retention +20% |
| **Sub Perks** | 10kG welcome | 25kG + exclusive skins | 40% LTV uplift |
| **Daily Wag Cap** | 10kG | Unlimited | High-roller friendly |

**Pro Purchase Flow**:
- **Entry**: Tap Pro upgrade button in lobby or settings
- **Plan Selection**: Compare Gold vs Platinum with side-by-side benefits
- **Payment Processing**: Secure recurring subscription
- **Benefits Activation**: Immediate access (No ads, faster animations, wagering)
- **Outcome**: Enhanced gameplay experience with progression boost

**Welcome Bonus**: Gold Pass gets 10kG welcome bonus; Platinum gets 25kG + exclusive skin pack

**Cosmetic Purchase Flow**
- **Entry**: Tap cosmetic item or shop button
- **Item Selection**: Warlord skins, card backs, emotes
- **Payment Processing**: Gold or real money payment
- **Item Delivery**: Immediate cosmetic application
- **Outcome**: Enhanced visual experience

### Progression Rules and Flows

**Design Philosophy**: Pacing targets L5 Week 1, L10 Week 3-4, L20 Month 2 (F2P @10-15 wars/day). Early linear (quick dopamine), mid quadratic (grind with events), infinite tail (L50+ prestige). Average XP/war: **65 F2P** (50 base + perf), **81 Pro** (+25%). Win rate: 60-70%.

**Leveling Formula** (L1-50+):

```
XP_to_next(level) = 
- L1-10: 150 + 50 × (level − 1)    [Linear: quick start]
- L11-30: 600 + 100 × (level − 10) [Mild accel]
- L31+: 3000 + 200 × (level − 30) + 50 × (level − 30)² [Quadratic: prestige grind]

Cumulative XP = Sum of all previous thresholds
```

**Level Progression Table** (Key Milestones):

| Level | XP to Next | Cumulative XP | Wars F2P (@65XP) | Days F2P (10 wars/day) | Rewards |
|-------|-----------|----------------|-------------------|-------------------------|---------|
| 5     | 350       | 1,250         | 19                | 2                        | Bet cap 100G; New Territory |
| 10    | 600       | 3,750         | 58                | 6                        | Warlord Pack (3); Campaign Unlock |
| 15    | 1,100     | 8,250         | 127               | 13                       | +Proc Rate; Mastery Boost |
| 20    | 1,500     | 15,250        | 235               | 24                       | Bet cap 500G; Elite Territories |
| 25    | 2,000     | 24,250        | 373               | 37                       | New Warlord; Event Access |
| 30    | 2,500     | 36,750        | 565               | 57                       | Bet cap 2kG; Prestige Title |
| 40    | 4,700     | 105,750       | 1,627             | 163                      | Infinite Mode; VIP Cosmetics |
| 50    | 9,300     | 282,250       | 4,342             | 434                      | Legacy Rewards; Custom Warlord |

**Unlock Schedule**:
- **Every 3 Levels**: New Playable Warlord (e.g., L3: Yeti, L6: Mapinguary)
- **Every 5 Levels**: Bet Cap Unlock / Territory Discount (20-40% off unlocks)
- **Even Levels**: New Warlord Card / Effect Unlock
- **Milestone Levels** (10/20/30): Feature Unlocks (Tournaments, Auto-War, Elite Mode)
- **Pro Players**: 25% faster progression (e.g., L10 in 46 wars); Free milestone skips

**Mastery Stank Ranks**: Warlord-specific XP earned through themed gameplay (I-V ranks). 20% of total XP contributes to Warlord Mastery.

**Level-Up Flow**
- **Trigger**: XP threshold reached
- **Animation**: Level-up celebration VFX with territory-themed effects
- **Rewards**: 
  - Odd levels: +100-500 Gold bonus (scales with level)
  - Even levels: Unlock new Warlord card / Special effect
  - Milestone levels: Guaranteed feature unlock + exclusive cosmetics
  - Bet unlocks for Pro players (at L5, L10, L20, L30)
- **Unlocks**: New Warlords, territories, bet caps, features
- **Outcome**: Return to Lobby with new capabilities

**Soft Cap Mechanics**: Daily XP soft cap starts at 2 × XP_to_next(current_level) with maximum 1,500 XP/day. After reaching cap, XP gains reduced by 50% until daily reset. Cosmetic rewards and bonus-roll drops unaffected.

**Mastery Progression Flow**
- **Trigger**: Warlord-specific XP earned
- **Stank Rank Advancement**: I → II → III → IV → V
- **Rewards**:
  - Stank Rank I: Unlock new Warlord cards
  - Stank Rank II: Unlock new special effect
  - Stank Rank III: Exclusive cosmetic variants
  - Stank Rank IV: Unlock new Warlord cards
  - Stank Rank V: Prestige title + exclusive animations
- **Outcome**: Enhanced Warlord capabilities

### XP Earnings (Faucets)

Performance-driven XP earnings create engaging progression loops. Average **65 XP/war** (F2P), **81 XP/war** (Pro with +25% boost).

| Source | XP Amount | Frequency/Triggers | F2P Daily (10-15 Wars) | Pro Boost |
|--------|-----------|--------------------|-------------------------|-----------|
| **Base War Win** | 50 | Per full victory | 325-488 | +15% (+8 XP) |
| **War Loss/Near-Miss** | 10-20 | 35% wars; +10 if 1-2 rank loss | 50-100 | +20% (+2-4 XP) |
| **War! Win** | +20 | 3-5% wars | 20-50 | +25% (+5 XP) |
| **Spoils Conversion** | 5 XP/Spoil (opt-in) | 1-10/war (avg 5); cap 50/war | 125-250 | None (Gold alt) |
| **Karma Trigger** | +40 | At 6 (losses fill) | 40 (1-2x/day) | +20% (+8 XP) |
| **Streak Trigger** | +60 | At 10 (wins fill) | 60 (1x/day) | +30% (+18 XP) |
| **Jackpot** | bet × 2 XP | 1% wars | 20-50 | +50% (×2.5) |
| **Daily/Events** | 50-200 | Login, missions, Weekly (+50% XP) | 100-300 | Double (Pro) |
| **Wagering Bonus** (Pro) | +1 XP/10G bet | Per war | N/A | 10-50 XP/war |

**Total F2P Daily**: 800-1,500 XP (pre-soft cap: 1.2k/day → 80% after 1k)

**XP Sources Breakdown** (Per War F2P, 65% win rate):
- Base War Win: 50 XP (65% of wars) = **32.5 avg**
- Loss/Near-Miss: 10-20 XP (35% of wars) = **5.25 avg**
- War! Bonus: 20 XP (5% of wars) = **1 avg**
- Spoils (avg 5, all converted): 25 XP = **25 avg**
- Meters/Jackpots: 2.25 XP (assumed) = **2.25 avg**
- **Total: ~65.5 XP/war**

**Sim Validation**: 100k wars confirms L10 in 58 wars F2P (~6 days @10 wars/day).

### Special Event Flows

**Daily Rewards Flow**
- **Entry**: Login streak maintained
- **Reward Scaling**: 100-500 Gold (7-day streak)
- **Bonus Elements**: Daily missions, pick / scratch off mini-games
- **Outcome**: Gold and cosmetic rewards

**Weekly Events Flow**
- **Double Wager Week**: All bet multipliers +0.5x
- **Jackpot Festival**: Jackpot trigger rate +2%
- **Territory Showdown**: Featured territory +50% Gold earnings
- **Outcome**: Enhanced rewards during event period

**Seasonal Content Flow**
- **Quarterly Updates**: New Warlords, territories, themes
- **Limited-Time**: Exclusive seasonal cosmetics and events
- **Progression**: New content unlockable through play
- **Outcome**: Fresh content and engagement

### Error and Edge Case Flows

**Connection Loss Flow**
- **Detection**: Network connectivity lost
- **State Preservation**: Current war state saved
- **Reconnection**: Automatic reconnection attempt
- **State Recovery**: Resume from last saved state
- **Outcome**: Seamless gameplay continuation

### Bigfoot Warlord System

**Overview**: 59+ Warlords from global cryptid lore form the core personalization system. Player selects 1 Warlord per war; 12 are playable initially, with more unlocked via progression (every 3 levels). Warlords define deck replacements, special effects, and archetype playstyles.

**Design Principles**:
- **Balance**: Base symmetric War ~52% wins (seeded fair); Warlord replacements shift +5-12% (e.g., +8% aggro vs control AI)
- **Archetype Diversity**: 4 archetypes (Steady, Control, Aggro, Burst) create rock-paper-scissors dynamics
- **Progression Tie-In**: Mastery XP from themed wars; Unlocks feed Campaigns (e.g., Sasquatch for PNW)
- **Slot Feel**: Replacements = "paylines" (high ranks trigger procs 20%); Jokers = bonuses

#### Bigfoot Warlord Stats

**Stats Formula**:
```
Health = 200 + (10 × Level) + (Mastery × 20)  [Average 250 at L10]
Power = Base (1-4) + Mastery (0-2) + Home Affinity (+1)

Example (Sasquatch, L10, Mastery III, in Forest):
Health = 200 + (10 × 10) + (3 × 20) = 360 HP
Power = 3 + 2 + 1 = 6 damage bonus
```

**Power Scaling by Archetype**:
- **Steady** (Yeti, Agogwe): Base 1-2 (sustain focus)
- **Control** (Skunk Ape, Orang Pendek): Base 1-2 (debuff/peek focus)
- **Aggro** (Sasquatch, Ukumarzapai): Base 3 (damage/stun focus)
- **Burst** (Nyalmo, Chemosit, Arulataq): Base 4 (War!/streak focus)

**Pro Enhancements**: +1 Power; Extra repl slot in deck

#### Warlord Archetype System

**Archetype Definitions** (Volatility/Rock-Paper-Scissors):

| Archetype | Playstyle | Winrate Shift | Counters | Best For | Unlock Level |
|-----------|-----------|---------------|----------|----------|--------------|
| **Steady** | Heal/Armor sustain | +5% long wars | Aggro (gets burst down) | Defensive play, attrition | 1+ (Yeti, Agogwe) |
| **Control** | Debuff/Peek control | +7% vs Burst | Steady (outlasts) | Combo setups, information | 3+ (Skunk Ape, Orang Pendek) |
| **Aggro** | Damage/Stun burst | +9% vs Steady | Control (gets disrupted) | Fast finishes, intimidation | 6+ (Sasquatch, Ukumarzapai) |
| **Burst** | War!/Streak highs | +6% short wars | Aggro (too fast) | Luck spikes, jackpots | 9+ (Nyalmo, Chemosit, Arulataq) |

**Archetype Matchups** (Sim-Validated: 100k wars, Python REPL):
- Aggro beats Steady +9% (bursts through sustain)
- Control beats Burst +7% (disrupts spike windows)
- Steady beats Control +5% (outlasts debuffs)
- Burst beats Aggro +4% (faster than counter-stuns)

**Meta Balance**: Ensures no single archetype dominates; counters create strategic depth.

#### Bigfoot Warlord Special Effects

**Key Playable Warlords** (12 initial roster with archetypes):

| Region/Affinity | Warlord | Archetype | Base Power | Signature Effect | Trigger | Mastery Rewards (I-V) |
|-----------------|---------|-----------|------------|------------------|---------|-----------------------|
| **PNW/Forest** | Sasquatch | Aggro | 3 | Rock Throw: Stun next (≤1/war) | On Win | I: +1 repl; V: +2 dmg |
| **PNW/Forest** | Skunk Ape | Control | 2 | Foul Debuff: -1 enemy rank | On Loss | III: Cosmetics |
| **Himalaya/Mtn** | Yeti | Steady | 2 | Ice Heal: +2 heal on win | On Win | II: Armor effect |
| **Himalaya/Mtn** | Nyalmo | Burst | 4 | Glacier Burst: +3 dmg War! | On War! Win | IV: +Proc rate |
| **Amazon/Jungle** | Mapinguari | Control | 2 | Vine Debuff: Skip enemy | On Tie | I: Peek effect |
| **Amazon/Jungle** | Ukumarzapai | Aggro | 3 | Momentum: +1 Streak meter | On Win | V: Prestige title |
| **Africa/Swamp** | Agogwe | Steady | 1 | Stealth Heal: +1 HP loss | On Loss | II: Meter nudge |
| **Africa/Swamp** | Chemosit | Burst | 4 | Carnivore: 2× dmg low card | On Win vs <7 | IV: Joker reward |
| **Australia/Ocean** | Yowie | Aggro | 3 | Outback Stun: Skip on win | On Win (≤1/war) | III: Exclusive skin |
| **SE Asia/Jungle** | Orang Pendek | Control | 1 | Small Peek: Reveal next | On Reveal | I: +1 rank shift |
| **Europe/Mtn** | Big Grey Man | Steady | 2 | Phantom Armor: +1 every 3 wins | On Win (every 3rd) | II: Heal bonus |
| **Arctic/Forest** | Arulataq | Burst | 4 | Inuit War!: 4× War! dmg | On War! Win | V: Exclusive animations |

**Signature Effects Details**:
- **Stun/Skip**: Limited to ≤1 use per war (prevents snowballing)
- **Debuff**: Always ±1 rank (never stacks with other rank shifts)
- **Heal**: Small values (+1 to +3) for sustain focus
- **Peek**: Reveals next card or suit (information advantage)
- **Meter Nudges**: +1 Karma or +1 Streak (≤1 per war per card)
- **Proc Triggers**: 20% base rate + bet-scale bonuses

#### Bigfoot Warlord Roster

**Playable Warlords** (12 initial roster; more unlock every 3 levels):

**North American Cryptids**:
- **Sasquatch** (L1+): ⚡ **Aggro** | Power 3 | Pacific Northwest rock-throwing giant | Signature: Rock Throw (Stun on win) | *PLAYABLE*
- **Skunk Ape** (L3+): 🎯 **Control** | Power 2 | Florida bog trickster with foul debuffs | Signature: Foul Debuff (-1 rank on loss) | *PLAYABLE*
- **Matlox** (L6+): ⚡ **Aggro** | Power 3 | PNW cannibal giant with intimidation tactics | *PLAYABLE*
- **Gugwe** (L9+): ⚡ **Aggro** | Power 3 | Aggressive Sasquatch variant with burst windows | *PLAYABLE*
- **Genoskwa** (L15+): 🛡️ **Steady** | Power 2 | Stone giant with armor-on-win cadence | *AI Only*
- **Grassman**: 🎯 **Control** | Power 2 | Ohio stalker with chase cadence | *AI Only*
- **Maywas**: 🎯 **Control** | Power 1 | Hunter with suit peeks and snares | *AI Only*
- **Mogollon Monster**: 🎯 **Control** | Power 2 | Desert ridge variant with sand glare | *AI Only*
- **Argopelter**: ⚡ **Aggro** | Power 3 | Arboreal creature with branch throwing | *AI Only*
- **Siwil**: 🛡️ **Steady** | Power 2 | Hairy giant with forest guardian tactics | *AI Only*
- **Nuk-Luk**: 🎯 **Control** | Power 1 | Small bushman-like creature from Yukon | *AI Only*

**Himalayan/Asian Cryptids**:
- **Yeti** (L1+): 🛡️ **Steady** | Power 2 | Himalayan ice and healing master | Signature: Ice Heal (+2 HP on win) | *PLAYABLE*
- **Nyalmo** (L9+): 💥 **Burst** | Power 4 | Colossal yeti with War! focus | Signature: Glacier Burst (+3 dmg War!) | *PLAYABLE*
- **Mecheny**: 🛡️ **Steady** | Power 2 | Relentless attrition master | *AI Only*
- **Dzu-Teh**: 🛡️ **Steady** | Power 2 | Large bear-like Yeti variant | *AI Only*
- **Gin Sung**: ⚡ **Aggro** | Power 3 | Bear-man with counterpunch windows | *AI Only*
- **Didi**: 🎯 **Control** | Power 2 | Tall ape-like humanoid | *AI Only*
- **Vedi**: 🛡️ **Steady** | Power 2 | Yeti variant with glacial tactics | *AI Only*
- **Barmanu**: 🎯 **Control** | Power 2 | Hairy humanoid from Pakistan | *AI Only*
- **Momo**: 🎯 **Control** | Power 1 | Hairy humanoid from Northeast India | *AI Only*
- **Yeren (Giant)**: 🛡️ **Steady** | Power 2 | Primate-like hominin from China | *AI Only*
- **Almas**: 🎯 **Control** | Power 2 | Non-human ape from Caucasus | *AI Only*
- **Abnauayu**: 🛡️ **Steady** | Power 2 | Almas variant from Asia/Caucasus | *AI Only*
- **Afonya**: 🎯 **Control** | Power 2 | Hairy wildman from Russia | *AI Only*
- **Germakchi**: ⚡ **Aggro** | Power 3 | Hairy wildman from Central Asia | *AI Only*
- **Gul-Biavan**: 🎯 **Control** | Power 2 | Non-human ape from Asia/Caucasus | *AI Only*

**South American Cryptids**:
- **Mapinguari** (L12+): 🎯 **Control** | Power 2 | Amazon guardian with debuff mastery | Signature: Vine Debuff (Skip on tie) | *PLAYABLE*
- **Ukumarzapai** (L6+): ⚡ **Aggro** | Power 3 | Bear-man with momentum chains | Signature: Momentum (+1 Streak) | *PLAYABLE*
- **Orang Gadang**: 🎯 **Control** | Power 2 | Sumatran giant with vine control | *AI Only*
- **Curinquean**: 🛡️ **Steady** | Power 2 | Large ape-like creature | *AI Only*
- **Cer Ra Ca Wa**: 🎯 **Control** | Power 2 | Giant humanoid similar to Mapinguary | *AI Only*
- **Fating'ho**: 🛡️ **Steady** | Power 2 | Forest-dwelling humanoid | *AI Only*
- **Ine Weu**: 🎯 **Control** | Power 2 | Hairy humanoid similar to Mapinguary | *AI Only*

**African Cryptids**:
- **Agogwe** (L1+): 🛡️ **Steady** | Power 1 | Small reddish-haired humanoid from East Africa | Signature: Stealth Heal (+1 HP on loss) | *PLAYABLE*
- **Chemosit** (L18+): 💥 **Burst** | Power 4 | Large carnivore bear-like creature | Signature: Carnivore (2× dmg vs <7) | *PLAYABLE*
- **Kikomba**: 🛡️ **Steady** | Power 1 | Ape-man similar to Agogwe | *AI Only*
- **Tano**: ⚡ **Aggro** | Power 3 | Giant hairy humanoid | *AI Only*
- **Wa'ab**: 🎯 **Control** | Power 2 | Hairy wildman with swamp mastery | *AI Only*

**European Cryptids**:
- **Big Grey Man** (L15+): 🛡️ **Steady** | Power 2 | Scottish ridge phantom | Signature: Phantom Armor (+1 every 3rd win) | *PLAYABLE*
- **Barbegazi**: 🛡️ **Steady** | Power 2 | Alpine skimmer with armor chips | *AI Only*
- **Hibagon**: ⚡ **Aggro** | Power 3 | Hot-tempered ape from Japan | *AI Only*

**Oceanic Cryptids**:
- **Yowie** (L21+): ⚡ **Aggro** | Power 3 | Large hairy humanoid from Australia | Signature: Outback Stun (Skip on win) | *PLAYABLE*
- **Junjudee**: 🎯 **Control** | Power 1 | Small hairy humanoid related to Yowie | *AI Only*
- **Moehau**: 🛡️ **Steady** | Power 2 | Hairy man of the mountains from New Zealand | *AI Only*

**Southeast Asian Cryptids**:
- **Orang Pendek** (L3+): 🎯 **Control** | Power 1 | Small hominid from Sumatra | Signature: Small Peek (Reveal next) | *PLAYABLE*
- **Kapre**: ⚡ **Aggro** | Power 3 | Tree-dwelling giant from Philippines | *AI Only*
- **Orang Mawas**: 🎯 **Control** | Power 2 | Ape or hominid from Malaysia | *AI Only*
- **Batutut**: 🎯 **Control** | Power 1 | Small hairy hominid from Vietnam/Laos | *AI Only*
- **Sisemite**: 🛡️ **Steady** | Power 2 | Hairy humanoid from Central America | *AI Only*

**Middle Eastern Cryptids**:
- **Nasnas**: 🎯 **Control** | Power 1 | One-legged trickster with skip-turn feints | *AI Only*
- **Ucu**: 🎯 **Control** | Power 2 | Sloth-primate with slow debuffing pushes | *AI Only*

**Arctic Cryptids**:
- **Arulataq** (L27+): 💥 **Burst** | Power 4 | Giant hairy humanoid from Inuit lore | Signature: Inuit War! (4× War! dmg) | *PLAYABLE*

**Regional Territory Themes**:
- **Pacific Northwest**: Forest guardians, rock throwing, cannibal tactics
- **Himalayas**: Ice mastery, glacial punishes, mountain dominance
- **Amazon Basin**: Jungle control, vine mastery, debuff tactics
- **African Savannah**: Stealth mastery, ambush windows, counter strikes
- **Southeast Asia**: Tree mastery, smoke cover, momentum chains
- **Scottish Highlands**: Phantom tactics, mist mastery, ridge dominance
- **Australian Outback**: Survival tactics, endurance mastery, territorial control

**Cultural Integration**:
- **Indigenous Lore**: Respectful integration of Native American, Inuit, and Aboriginal cryptid traditions
- **Regional Folklore**: Authentic representation of local legends and cultural significance
- **Mythological Accuracy**: Research-backed representation of cryptid characteristics and behaviors
- **Educational Value**: Players learn about global cryptid lore while enjoying gameplay

### Card System

**Deterministic Deck Generation**:

Decks are created per session with minimal player input using seeded RNG for fairness and replayability.

**Generation Steps** (Seed → Mapping → Replacements → Shuffle):
1. **Seed Creation**: `HMAC(userId, warId|timestamp)` generates deterministic seed
2. **Base Deck**: Start with 52 Natural cards (4 suits × 13 ranks)
3. **Mapping**: Use seed to select exact Natural cards to replace under guardrails
4. **Replacements**: Replace 2-6 cards (level-based) with Warlord cards from Warlord's pool
5. **Shuffle**: Perform seeded shuffle for reproducible draw order
6. **Replay**: Store seed and mapping for deterministic replays

**Replacement Guardrails**:
- **No Duplicates**: Each Warlord card unique within deck
- **Rank Bias**: 70% high ranks (J, Q, K, A), 30% affinity suit
- **Archetype Balance**: Steady gets heal/armor, Control gets debuff/peek, Aggro gets stun/dmg, Burst gets War! bonuses
- **Pro Enhancement**: Top 20% pool prioritization for better draws
- **AI Thematic**: AI uses Territory-themed pool (e.g., Forest Territory = Hearts-heavy)

**Auto-Generated Decks**: Decks created per session with minimal player input
- **Warlord Cards**: 2-6 Warlord cards based on Warlord identities and level
- **Jokers**: 2 fixed Jokers (rank 1); can tie (1 vs. 1) but always lose; grants reward to owner

**Natural Cards (Standard Deck)**:
- **Ranks**: Ace high. Rank values: Ace=14, King=13, Queen=12, Jack=11, 10–2 are face value
- **Damage Formula**: Damage = rank value + Power stat
- **Suits**: Hearts, Spades, Diamonds, Clubs with territory affinities
- **Visual Design**: Standard playing card layout with Bigfoot-themed borders

**Warlord Cards**:
Warlord Cards are curated replacements for specific Natural cards that define a Warlord's identity. They trigger simple, readable effects with clear visual feedback. Each Warlord defines a unique pool of 10-20 themed replacement cards.

**Pro Enhancements**:
- +2 Warlord cards in deck (beyond level cap, max 8 total)
- Seed favors player: top 20% pool prioritization
- Elite Territory bonus: +1 Warlord card per war

**Example Warlord Cards by Rank Band**:

| Rank Band | Card | Warlord | Card Name | Archetype | Trigger | Effect | Visual |
|---|---|---|---|---|---|---|---|
| Face Cards (J-A) | Ace♠ | Sasquatch | Rock Throw | Aggro | On win | Stun enemy next turn (≤1/war) | Rocks fly |
| Face Cards | King♥ | Yeti | Ice Rally | Steady | On win | Heal +2 | Frost heal |
| Face Cards | Queen♦ | Skunk Ape | Foul Mist | Control | On loss | Enemy -1 rank next | Green fog |
| Face Cards | Jack♣ | Mapinguari | Vine Lash | Control | On tie | +1 Karma | Vines snare |
| High (10-9) | 10♠ | Nyalmo | Glacier Burst | Burst | On War! Win | +3 dmg | Ice explode |
| High (10-9) | 9♥ | Agogwe | Stealth Mend | Steady | On loss | Heal +1 HP | Shadow heal |
| High (10-9) | 9♣ | Ukumarzapai | Momentum | Aggro | On win | +1 Streak meter | Roar |
| Mid (8-6) | 8♦ | Chemosit | Carnivore Rush | Burst | On win vs <7 | 2× damage | Claw slash |
| Mid | 7♠ | Big Grey Man | Phantom Guard | Steady | On win (every 3rd) | +1 armor | Mist armor |
| Mid | 6♥ | Orang Pendek | Small Peek | Control | On reveal | Peek next card | Camo shift |
| Low (5-3) | 5♣ | Yowie | Outback Skip | Aggro | On win (≤1) | Skip enemy next | Dust kick |
| Low | 4♦ | Nasnas | One-Leg Feint | Control | On loss | Enemy skip next | Limp animation |
| Low | 3♥ | Arulataq | Inuit Strike | Burst | On War! Win | 4× War! dmg | Aurora burst |
| 2️⃣ | 2♠ | Grassman | Stalk Chase | Control | On win | Peek next suit | Chase particles |
| 2️⃣ | 2♦ | Barbegazi | Alpine Skip | Steady | On loss | Heal +1 on your next win | Ice skip |

**Expanded Warlord Card Pool** (showing archetype balance):
- **Aggro Warlords** (Sasquatch, Yowie, Ukumarzapai): Stun/damage focus, high ranks
- **Steady Warlords** (Yeti, Agogwe, Big Grey Man): Heal/armor focus, mid-low ranks
- **Control Warlords** (Skunk Ape, Orang Pendek, Mapinguari): Debuff/peek, all ranks
- **Burst Warlords** (Nyalmo, Chemosit, Arulataq): War!/streak focus, high ranks for biggest spikes

**Underdog Bonus**: Low cards (<7) get enhanced effects when they win:
- **Big Moment**: 2× damage or +10 flat bonus
- **Example**: 2♦ wins vs Ace = base +2 (vs +14 expected) → scales to +4 or +10 flat
- Creates dramatic reversals and "big moment" excitement

**Joker Cards**:
Joker Cards are powerful "slot machine bonuses" that live in the two fixed Joker slots of every 54-card deck. They always lose the round (rank 1 + 0 Power) but grant a **reward mini-game** to the owner, creating excitement even from losses.

**Joker Mechanics**:
- **Rank**: 1 (always loses vs. any Natural card)
- **Tie Handling**: Joker vs. Joker = War! (mult 2x, rare!)
- **Effect**: Owner gets instant reward mini-game (visual scratch-off/pick game)

**Reward Mini-Game** (Instant, Seeded):

| Type | Odds | Reward |
|------|------|--------|
| **Pick 2/3** | 60% | 2 Spoils + 20G |
| **Scratch-Off** | 30% | 1-3 Warlord cards added to deck temporarily |
| **Jackpot** | 10% | bet × 3 Gold + 50 XP |

**War! Jokers** (Tie with another Joker):
- Cascading reward: Jokers in War! = +2 mult
- Bonus: Ultra-rare Joker War! grants +5 mult and rare Specimen
- Visual: Explosive 4th card reveal with special Joker VFX

**Pro Enhancements**:
- +50% rewards (Pick = 3 Spoils + 30G; Scratch = 2-4 cards)
- 3rd Joker slot unlock at L20+ (for max chaos and bonuses)

**Deterministic Generation**

| Aspect | Description |
|---|---|
| **Seed** | Derive a per-war seed from secure inputs (HMAC(userId, warId\|timestamp)) |
| **Mapping** | Use seed to select exact Natural cards to replace under guardrails |
| **Shuffle** | Perform seeded shuffle for reproducible draw orders |
| **Replay** | Store seed and mapping for deterministic replays |

### Card Effects and Triggers

**Trigger Windows**:

| Trigger | Description |
|---|---|
| **On Reveal** | Effect triggers when card is revealed (before comparison) |
| **On Win** | Effect triggers when this card wins the comparison |
| **On Loss** | Effect triggers when this card loses the comparison |
| **On Tie** | Effect triggers when this card ties (before War! resolution) |
| **On War! Win** | Effect triggers when this card wins a War! tie resolution |
| **After Tie** | Effect triggers after a tie is resolved (regardless of winner) |

**Effect Types**:

| Effect Type | Description |
|---|---|
| **Damage Modifiers** | +1 to +4 damage (never >+4 from cards alone) |
| **Heal Effects** | +1 to +3 healing (small sustain values) |
| **Armor Effects** | +1 to +2 armor (persists 1-2 hits) |
| **Rank Shifts** | Always ±1 rank (enemy next -1, your next +1) |
| **Skip/Stun** | Skip enemy next turn or stun (≤1 per war average) |
| **Peek Effects** | Reveal enemy next suit or top card |
| **Meter Nudges** | +1 Karma, +1 Streak (≤1 per war per card) |

**Effect Caps and Balance**:

| Aspect | Description |
|---|---|
| **Per-War Caps** | Most effects limited to 1-3 uses per war |
| **Resolve Once** | Some effects marked as "resolve once" to prevent stacking |
| **No Stacking** | -1 rank effects don't stack with other -1 rank effects |
| **Visual Feedback** | All effects have clear visual and audio feedback |
| **Readable Outcomes** | Effects are simple and immediately understandable |

### Territory System

**Territory Affinities & Suit Themes**:

| Territory | Suit Affinity | Bonus | Pro Effect |
|---|---|---|---|
| **Forest** (Hearts) | Hearts | Auto-heal +1 on Hearts wins | +10% heal on all Hearts wins |
| **Mountain** (Spades) | Spades | +1 armor every 3rd win | +1 armor every 2nd win |
| **Swamp** (Diamonds) | Diamonds | +10% tie rate (more War! opportunities) | +15% tie rate (more War! damage) |
| **Jungle** (Clubs) | Clubs | +1 random stat per Clubs win | +2 random stats per Clubs win |

**Territory Tier Scaling**:

| Tier | Territory Theme Example | AI Difficulty Multiplier | Rewards Multiplier | Home Warlord Bonus |
|---|---|---|---|---|
| **Tier 1** | Forest Outskirts | +0% (Equal) | 1.0x | +5% XP/Gold |
| **Tier 2** | Swamp Ambush | +10% Power | 1.2x | +15% XP/Gold + Proc +5% |
| **Tier 3** | Mountain Peak (Boss) | +20% Power/cards | 1.5x | +20% XP/Gold + Jackpot Mult |
| **Elite** | Elite Forest (Replay) | +15% overall | 1.3x | Exclusive Specimen +1% proc |

**Warlord Affinity Bonuses**:
Warlords gain subtle bonuses when playing in their "home" territories, reflecting their regional mastery:

- **Pacific Northwest Warlords** (Sasquatch, Matlox, Gugwe): Forest Guardian badge, PNW folklore tooltip
- **Himalayan Warlords** (Yeti, Nyalmo, Mecheny): Mountain Sage badge, Himalayan lore tooltip
- **Amazon Warlords** (Mapinguary, Ukumarzapai): Jungle Guardian badge, Amazon folklore tooltip
- **African Warlords** (Agogwe, Chemosit): Savannah Hunter badge, African lore tooltip
- **Southeast Asian Warlords** (Kapre, Orang Gadang): Canopy Walker badge, Southeast Asian folklore tooltip
- **European Warlords** (Big Grey Man, Barbegazi): Highland Phantom badge, European lore tooltip
- **Oceanic Warlords** (Yowie, Moehau): Outback Survivor badge, Oceanic folklore tooltip

**Home Territory Advantage**: Playing in home territory grants +15-25% XP/Gold rewards, exclusive visual emblems, and territory-themed bonuses (e.g., Sasquatch in Forest gets +1 Power).

### Territory Unlock Flow

Territory unlocks serve as a **primary Gold sink**, directly inspired by proven F2P successes like *Coin Master*'s village progression. This creates meaningful progression gates without gating core content (F2P can grind), prevents "Gold hoarding," and drives repeated play.

**Unlock Flow Steps**:
1. **Campaign Selection**: Player browses unlocked Campaigns (cost 1k-10k Gold one-time; Pro gets free)
2. **Territory Preview**: Campaign map shows locked/unlocked Territories with costs
3. **Unlock Decision**: Player can unlock next Territory if Gold available (auto-suggest "Next Territory: 250G")
4. **Confirmation**: "Unlock [Territory Name] for 250G? (Earned enough!)" with progress bar
5. **Access**: Territory becomes playable; replay previously captured ones free

**Territory Scaling & Costs**:

| Territory Tier | Example (PNW Campaign) | Gold Cost | Wars to Grind (~30G avg win) | Unlock Reward | AI Difficulty |
|----------------|------------------------|-----------|------------------------------|---------------|---------------|
| **Tier 1 (Intro)** | Forest Outskirts | 100-250G | 4-8 | Base XP + Specimen, +1 Power for home Warlord | Equal to player |
| **Tier 2 (Mid)** | Swamp Ambush | 500-1kG | 17-33 | +Proc Rate (+5%), +15% XP home | +10% Power |
| **Tier 3 (Boss)** | Mountain Peak | 2k-5kG | 67-167 | Jackpot Multiplier, Mastery Boost, Elite cosmetics | +20% Power/cards |
| **Elite (Replay)** | Elite Forest | 500G (Pro 400G) | 17 | Exclusive Specimen, +1% proc rate | +15% overall |

**Difficulty Scaling Formulas**:
- **AI Power**: Player Power × (1 + 0.1 × Tier); Tier 1 = equal, Tier 2 = +10%, Tier 3 = +20%
- **Rewards Multiplier**: Base × (1 + 0.2 × Tier) × (1 + Affinity Match × 0.15)
- **Completion Payout**: 200G + (100 XP × Territories in Campaign); Full Spoils Pod: 20-50 Specimens

**Pro Enhancements**:
- **Gold Pass**: Free Tier 1-2 unlocks; 20% off Tier 3/Elite
- **Platinum**: Free all unlocks + +0.5 wager mult in home Territories
- **Auto-Elite**: Unlocked Elite mode for all territories after campaign completion

**Total Cost per Campaign** (5 Territories): ~5k-20k Gold depending on tier mix.

### Gold Virtual Currency System

**Economic Philosophy**: Target an overall **RTP (Return to Player) of 94-96%** for wagering—industry standard for mobile casual slots/hybrids. This ensures long-term sustainability while feeling generous (player gets back ~94¢ per $1 wagered over 1k+ wars). Net progression: **+10-20G per war** for F2P (no bet), scaling to +50-100G with bets. Faucets (earnings) recycle 60-70% Gold via sinks, preventing inflation while driving sessions (2-3/day, 3-6 min each).

Gold is used to unlock new Campaigns and Territories. For **Pro players**: Gold serves as the primary wagering currency, earned freely through gameplay and purchasable for convenience. It creates perceived risk without real money loss.

**Gold Earning Sources (Faucets)**:

| Source | Gold Amount | Frequency/CD | Triggers/Notes | Expected Daily (2-3 Sessions) |
|--------|-------------|--------------|----------------|-------------------------------|
| **Base War Win** | 25G + (bet × 1.5) if Pro | Per war (65% win rate) | Full war victory; scales w/ difficulty | 100-200G |
| **War Loss/Near-Miss** | 8-15G | Per war (35% losses) | Loss by 1-2 ranks: +5G partial; pity after 3 losses: 50% refund | 50-100G |
| **War! (Tie Win)** | +40G | ~5% rounds/war (3-5% wars) | 3-4x damage → bonus payout | 20-50G |
| **Spoils Conversion** | 4G each (opt-in) | 1-10/war (avg 5) | Post-war; cap 50 XP equiv. | 50-100G |
| **Karma Meter Trigger** | +50G | At 6 (losses fill: +1/-2) | Guaranteed double damage + Gold | 50G (1-2x/day) |
| **Streak Meter Trigger** | bet × 2 | At 10 (wins fill: +1/round) | Gold jackpot; reset on 3 losses | 100G (1x/day) |
| **Daily Login** | 100G (Day1) → 500G (Day7) | Daily streak | + mini-game (pick/scratch: +50-200G) | 200-400G |
| **Rewarded Ads** | 150G | 5x/day (1/5 min) | Watch video; double on streak | 300-750G |
| **Daily Spin Wheel** | 50-300G | 1x/day | Free spin; ad for re-spin | 100G |
| **Milestones (Level-Up)** | 100-500G | Per level | Odd levels: stacked win bonuses | 100G (weekly) |

**Total F2P Daily Baseline**: 1,070-2,350G (pre-cap)

**Soft Daily Cap Mechanic**: After 1.5kG/day, earnings ×0.8 efficiency (encourages next-day return/IAP).

**Gold Spending (Sinks)**:
- **Campaign Unlocks**: One-time 1k-10k Gold (F2P); Pro gets free unlocks
- **Territory Unlocks**: 100-5k Gold (sequential within Campaigns)
- **Cosmetics**: 100-1k Gold for skins, emotes, card backs
- **Wagering (Pro players)**: Primary use for amplified rewards (detailed below)
- **Tournament Entry** (Pro): 200-1k Gold entry fees

### Wagering System (Pro players)

**Pre-War Betting**: Players wager Gold before each war to multiply outcomes, creating slot-like tension and excitement. **RTP Target: 94-96%** ensures sustainable economy while feeling generous.

**Bet Scaling**: Higher tiers unlock larger maximum bets
- **Level 1-5**: Max 100 Gold bet
- **Level 6-10**: Max 500 Gold bet  
- **Level 11+**: Max 2,000 Gold bet

**Outcome Resolution Formulas**:

**Full Payout Formula**:
```
Net Gold = (Bet × Mult) + Base_Gold + Bonuses - Bet
Net XP   = Base_XP + (Bet / 10) + Mult_XP

Perf_Mult (Gold) = 
- Win: 1.8 × (1 + Streak_Mult/10 + War!_Count×0.25)
- Loss: 0.4 + Near-Miss×0.1
- Draw/War!: Refund + 0.75

Streak_Mult: 0-10 based on consecutive wins
```

**Examples (50 Gold Bet)**:
- **Win with 2 War!s**: 50 × (1.8 + 0.5×2) + 25 = 190G (+140 net)
- **Loss with Near-Miss**: 50 × 0.5 = 25G (-25 net, pity 50% after 2 losses)
- **Jackpot Win**: 50 × 10 + 500 = 1,000G (+950 net)

**Pity/Insurance Mechanics**:
- After 2 consecutive losses: Next bet gets 50% insurance (75% refund)
- After 3 consecutive losses: Next bet gets 75% insurance (87.5% refund)
- **Gold Pass**: 75% insurance after 2 losses
- **Platinum**: 100% insurance + 20% extra after 2 losses

**Sim Validation Results** (100k wars, 50G avg bet):
- RTP: **94.2%** confirmed
- Average net: +12G/war (F2P), +28G/war (Pro with wagering)
- Win rate: 65% (sustained through archetype balance)

**Outcome Types**:
- **Win**: Payout = (bet × multiplier) + base rewards + bonuses
- **Loss**: Deduct wagered Gold (pity system activates)
- **Draw**: Refund bet + small Gold bonus
- **Near-Miss**: Loss by 1-2 ranks triggers partial payout (0.5x bet) + Karma Meter boost

### Gold Sinks – Progression + Vanity

**Key Principle**: Escalating, optional spends for perceived value. 60-70% recirculation prevents "Gold hoarding" and sustains wagering velocity.

| Sink | Cost Range (Gold) | Value | Frequency | Notes |
|------|-------------------|--------|-----------|-------|
| **Campaign Unlock** | 1k-10k (one-time) | Access 3-10 Territories | Per Campaign (5-10 total) | Pro: Free |
| **Territory Unlock** (New/Elite) | 100-5k (sequential) | Harder bosses, +20% XP/Gold rewards | 3-5 per Campaign | Replay free; Elite: cosmetics + proc boost |
| **Cosmetics** | 100-1k | Skins, backs, emotes | Ongoing | Bundles 20% off; evolve w/ wins |
| **Tournament Entry** (Pro-only base, F2P limited) | 200-1k | Prizes (2-5x entry) | Weekly | F2P: 1 free entry/day |
| **Warlord Mastery Upgrades** | 500-2k (per rank I-V) | +1 Power/effect | Per Warlord (repeatable) | Ties to XP; visual prestige |
| **Cosmetic Upgrades** | 200-800 | Evolve skins (e.g., LVL5 glow) | Per item | Sink for hoarders |

**Daily Sink Potential**: 500-2kG (e.g., 1 Territory + cosmetic). **Pity**: 20% back after 5 failed grinds.

### IAP Purchase System

Tiered packs w/ **over-value bonuses** (100-400% extra Gold equiv.). Dynamic pricing via A/B (e.g., +20% during events). Target 8-15% conversion, ARPU $3-8/mo.

| Pack Type | Price | Gold | Bonus Gold (%) | Extra Perks | LTV Impact |
|-----------|-------|------|----------------|-------------|------------|
| **Starter** | $0.99 | 600 | +20% (120G) | 1 ad skip | Impulse (Day1) |
| **Value** | $4.99 | 3,500 | +100% (3.5kG) | 3-day streak boost | Core converter |
| **Premium** | $9.99 | 8,000 | +150% (12kG) | Exclusive skin + 5kG Territory voucher | Mid-whale |
| **Mega** | $19.99 | 20,000 | +200% (40kG) | All above + Pro trial (7 days) | Whale entry |
| **Bundles** (Limited) | $24.99 | 30kG | +250% | Seasonal Warlord pack + event skips | Event spikes (+30% rev) |

**Purchase Flow**:
1. Entry: Tap Gold counter or purchase button
2. Pack Selection: Browse tiered packs with bonus callouts
3. Payment Processing: Secure transaction (Stripe)
4. Gold Delivery: Instant Gold addition with celebration
5. Outcome: Enhanced Campaign Unlock and wagering capabilities

### Enhanced Luck Elements

**Proc System**: Boosted randomness with slot-like excitement
- **Base Proc Rates**: 15-25% chance per reveal for special effects
- **Joker Rewards**: 
- **Near-Miss Feedback**: Loss by 1 rank triggers visual "almost jackpot" animation

**Jackpot System**:
- **Trigger Conditions**: Deterministic combos (matching suits + War! win) + 1% random chance
- **Visual Escalation**: Cascading effects, screen flashes, celebratory animations
- **Rewards**: Large damage bonus + XP multiplier + Gold multiplier

### Progressive Luck Meters

**Karma Meter**:
- **Visual**: Halo around Draw lever brightens as it fills
- **Reset**: After triggering, resets to 0

**Streak Meter**:
- **Visual**: Progress bar with sparkle effects
- **Reset**: After trigger, or 3 consecutive losses

**Speed Settings**:

- **Fast (Pro players)**: 1-2 second reveals (default)
- **Standard**: 3-4 second reveals (full animations)

### **Weekly Events**
Rotating slot-themed events to maintain engagement:

**Double Wager Week**:
- **Duration**: 7 days
- **Effect**: All bet multipliers increased by +0.5x
- **Rewards**: Exclusive "High Roller" cosmetics
- **Participation**: Requires minimum Gold wagered

**Jackpot Festival**:
- **Duration**: 3 days
- **Effect**: Jackpot trigger rate increased by +2%
- **Rewards**: Guaranteed rare Specimens
- **Participation**: Free for all players

**Warlord Spotlight**:
- **Duration**: 3 days
- **Effect**: Bonus rewards for featured Warlord
- **Rewards**: Warlord-themed cosmetics
- **Participation**: Play with featured Warlord

### **Seasonal Regional Events**
Monthly rotating regional themes celebrating Bigfoot mythology:

**"Pacific Northwest Legends" Month**:
- **Duration**: 30 days
- **Effect**: Bonus XP for Forest territory + Sasquatch family Warlords get special effects
- **Rewards**: PNW-themed Specimens, "Forest Guardian" emotes, regional cosmetics

**"Himalayan Mysteries" Month**:
- **Duration**: 30 days
- **Effect**: Mountain territory bonuses + Yeti variants get glacial mastery effects
- **Rewards**: Himalayan-themed Specimens, "Mountain Sage" emotes, glacial cosmetics

**"Amazon Guardians" Month**:
- **Duration**: 30 days
- **Effect**: Jungle territory focus + Mapinguary family bonuses
- **Rewards**: Amazon-themed Specimens, "Jungle Master" emotes, vine cosmetics

**"African Savannah Hunters" Month**:
- **Duration**: 30 days
- **Effect**: Swamp territory mastery + Agogwe family stealth bonuses
- **Rewards**: African-themed Specimens, "Savannah Hunter" emotes, stealth cosmetics

### **Specimen Collection System**
Cosmetic collectibles earned through Spoils:

**Specimen Rarities**:
- **Common**: Basic territory-themed items (50% drop rate)
- **Uncommon**: Enhanced territory items (30% drop rate)
- **Rare**: Warlord-themed items (15% drop rate)
- **Epic**: Exclusive event items (5% drop rate)

**Collection Rewards**:
- **Complete Set**: Unlock exclusive emote
- **Territory Master**: Unlock territory-themed card back
- **Warlord Collector**: Unlock Warlord-themed animations
- **Grand Collector**: Unlock prestige title and exclusive cosmetics

**Specimen Sources**:
- **Spoils**: Every Spoils grants 1 Specimen roll
- **Jackpots**: Guaranteed rare Specimens
- **Events**: Exclusive seasonal Specimens

## **UI/UX**

**Lobby Interface (Slot-Inspired Design)**:

**Header Layout**:
- **Left**: Game logo with Bigfoot silhouette
- **Center**: Gold counter with animated sparkles, level indicator
- **Right**: Settings gear, profile avatar, Pro status badge

**Warlord Carousel**:
- **Layout**: Horizontal scrollable carousel with large portraits
- **Elements**: 
  - Warlord portrait (200x200px) with slot theme effects
  - Nameplate with Mastery rank (I-V) indicator
  - Mastery progress bar (0-100%)
- **Interactions**: Tap to select, swipe to browse, hold for details
- **Visual Feedback**: Selected Warlord gets glow effect, others dimmed

**Campaign Row**:
- **Layout**: Horizontal chips for each Campaign
- **Lock / Unlock Icon**: Indicates unlocked
- **Conquered Icon**: Indicates Campaign won by player
- **Cost**: Cost to Unlock new Campaign
- **Rewards**: All rewards details
- Tap **War Horn** to enter Campaign.

**Campaign Details**
- Simple linear map of Forest/Mountain/Swamp/Jungle Territories
- **Territory Chip Elements**:
  - Suit icon (Hearts/Spades/Diamonds/Clubs) with colorblind-safe shapes
  - Lock / Unlock icon
  - Conquered icon

**Betting Interface**:
- **Layout**: Slot-style bet selector with Gold amounts
- **Elements**:
  - Bet amount display with Gold icon
  - Multiplier indicator (large, prominent)
  - Bet history (last 3 bets)

**Primary CTA**
- **War Horn** button to start War

**War Board Interface**:

**Primary CTA**:
- **Layout**: Large, prominent "Pull Lever" button
- **Design**: Mechanical lever with satisfying press depth (6px)
- **States**:
  - **Ready**: Bright glow with territory tint
  - **Pressed**: Mechanical "give" with haptic feedback
  - **Success**: Bounce animation (120ms) with particle burst
- **Mobile**: Pull-down gesture with visual lever movement
- **Desktop**: Tactile press with depth animation

**Top Panel (AI Opponent)**:
- **Layout**: Horizontal bar with opponent information
- **Elements**:
  - AI Warlord portrait (100x100px)
  - Name
  - Health bar with segmented tick marks
  - Armor chips overlay (frost/stone/leaf/stealth themes)
  - Active effects icons (debuffs, buffs, special states)
- **Animations**: Damage/heal animations with color transitions
- **Critical State**: Red pulsing when AI health drops below 25%

**Center Stage (Card Reveal Area)**:
- **Layout**: Central play surface acting as slot machine reels
- **Card Reveals**: 
  - Simultaneous flip animation (280-320ms spring)
  - Standard reveal: Card flip with suit/rank highlight
  - Warlord cards: Glint shader pass with themed particles
  - War! sequence: Rapid 3-card stack (80ms each) + explosive reveal
- **Background**: Territory-themed animated backdrop
- **War! Overlay**: Marquee-style overlay with animated bulbs

**Bottom Panel (Player)**:
- **Layout**: Player information and primary controls
- **Elements**:
  - Player Warlord portrait (100x100px)
  - Health bar with segmented tick marks
  - Power chips display (+1 to +3)
  - Primary Draw button (lever metaphor)
  - Karma halo around Draw button (brightens as it fills)
- **Meters Row**:
  - **Loss Meter**: Progress bar
  - **Streak Meter**: Progress bar with sparkle effects

**Results Screen Interface**:

**Verdict Banner**:
- **Layout**: Large, prominent win/loss indicator
- **Visual Effects**: 
  - **Win**: Confetti/leaf/ice/swamp/jungle VFX aligned to territory
  - **Loss**: Disappointment effects with territory theme
  - **Draw**: Neutral effects (rare occurrence)
- **Animation**: Slide-in with territory-themed particles

**XP Breakdown**:
- **Layout**: Detailed breakdown of XP earned
- **Elements**:
  - Base XP (50 for win)
  - Spoils conversion (up to 50 XP cap)
  - Wagering bonuses
- **Visual**: Animated counters with territory-themed colors

**Spoils Conversion**:
- **Layout**: Animated bar converting Spoils to XP
- **Elements**:
  - Spoils count → XP conversion animation
  - Bonus roll indicators (1 per 5 Spoils)
  - Specimen collection summary with "new" badges
  - CTA to open Knapsack for Specimen details

**Gold Summary**:
- **Layout**: Gold wagered vs. Gold won breakdown
- **Elements**:
  - Net Gold result (positive/negative with color coding)
  - Wagering efficiency (Gold won per Gold wagered)

**Progression Updates**:
- **Warlord Mastery**: Progress bar with Stank Rank advancement
- **Level Progress**: XP bar with next level preview

**Navigation Elements**:
- **Rematch CTAs**: 
- **Back to Lobby**: Return to main interface
- **View Log**: Open detailed war timeline

**Accessibility Features**:

**Colorblind Support**:
- **Suit Indicators**: Shape-coded symbols (Hearts=leaf, Spades=rock, Diamonds=gem, Clubs=club)
- **High Contrast**: Alternative color schemes for better visibility
- **Pattern Overlays**: Texture patterns for additional distinction
- **Status Indicators**: Multiple visual cues (color + shape + pattern)

**Reduced Motion**:
- **Animation Alternatives**: Fade transitions instead of complex animations
- **Static Effects**: Simplified particle effects for motion-sensitive users
- **Audio Attenuation**: Reduced audio peaks and dynamic range compression
- **Haptic Reduction**: Reduced haptic feedback intensity

**Screen Reader Support**:
- **Clear Labels**: Descriptive text for all interactive elements
- **State Announcements**: Concise updates for game state changes
- **Navigation**: Logical tab order and keyboard accessibility
- **Progress Announcements**: Clear progress updates for meters and progression

### **Core Game Elements**

**Modular Artwork Specifications**:

**Asset Minimization Strategy** (<150 PNGs total):
- **4 Base Territory Kits**: Forest, Mountain, Swamp, Jungle themes with overlays (fog, particles, etc.)
- **12 Warlord Archetype Silhouettes**: Recolored per region/variant (e.g., Yeti blue → red for variants)
- **Card Assets**: 52 base Natural cards + 20 Warlord card templates (reuse suit icons as icons)
- **UI Elements**: Reusable buttons, meters, health bars with procedural tints
- **Total Asset Count**: ~120-150 PNGs (vs. 500+ with unique-per-Warlord approach)

**Procedural Tinting System**:
- **Affinity Shaders**: Hearts = red glow, Spades = blue glow, Diamonds = yellow/green glow, Clubs = green glow
- **Territory Tints**: Apply color filters to Warlord silhouettes based on home territory
- **Dynamic VFX**: Single particle system for all proc effects; recolored by theme
- **Shader-Based Effects**: Use GPU shaders for card glints, meter fills, heals

**Asset Optimization**:
- **WebP Format**: All images in WebP with JPEG/PNG fallbacks
- **Lazy Loading**: Load non-core assets on-demand (e.g., Warlord details, campaign maps)
- **Sprite Sheets**: Combine related animations (lever states, card flips, particles)
- **Audio Compression**: MP3 for web delivery (<50MB total audio)
- **Sim Results**: 40% load reduction vs. traditional approach (<3s on 3G vs. 5s)

**Lever Button (Primary Action)**:
- **Design**: Large, beveled mechanical lever with satisfying press depth (6px)
- **Animation**: Press-in (180ms) → rebound (120ms) with spring physics
- **Visual States**: 
  - **Idle**: Subtle glow with territory tint
  - **Ready**: Brightened halo with Karma Meter integration
  - **Pressed**: Mechanical "give" with haptic feedback
  - **Success**: Bounce animation (120ms) with particle burst
- **Mobile**: Pull-down gesture with visual lever movement
- **Desktop**: Tactile press with depth animation

**Card Stage**:
- **Layout**: Central play surface acting as slot machine reels
- **Card Reveals**: Simultaneous flip animation (280-320ms spring)
- **Visual Effects**: 
  - **Standard Reveal**: Card flip with suit/rank highlight
  - **Warlord Cards**: Glint shader pass with themed particles
  - **War! Sequence**: Rapid 3-card stack (80ms each) + explosive reveal
- **Background**: Territory-themed animated backdrop

**Meter System (Slot-Style Progress)**:
- **Karma Meter**: Halo around Draw lever, brightens as it fills
- **Streak Meter**: Progress bar with sparkle effects
- **Visual Feedback**: Smooth fill animations with territory-themed colors

### **Territory Visual Themes**

**Forest Territory** (Hearts Theme):
- **Background**: Dappled sunlight through trees, drifting spores
- **Color Palette**: Deep forest greens (#0F2A1E), moss accents (#3B6B4A)

**Mountain Territory** (Spades Theme):
- **Background**: Snow-capped peaks, wind streaks, ice formations
- **Color Palette**: Slate blues (#1F2D3A), ice whites, frost accents

**Swamp Territory** (Diamonds Theme):
- **Background**: Low fog banks, fireflies, murky waters
- **Color Palette**: Swamp teals, murky greens, fog grays

**Jungle Territory** (Clubs Theme):
- **Background**: Foreground leaves parallax, heat shimmer, dense foliage
- **Color Palette**: Jungle jade, tropical greens, vine browns

### **Card Design**

**Natural Cards**:
- **Design**: Standard playing card layout with Bigfoot-themed borders
- **Suits**: Colorblind-safe shape coding (Hearts=leaf, Spades=rock, Diamonds=gem, Clubs=club)
- **Ranks**: Bold, readable numbers with territory-themed backgrounds
- **Special Effects**: Subtle glow on face cards, rank-specific particles

**Warlord Cards**:
- **Design**: Enhanced borders with Warlord-themed colors and textures
- **Visual Cues**: Unique card backs, signature symbols, themed particles
- **Effects**: Card-specific animations on reveal (rocks falling, ice forming, etc.)
- **Readability**: Clear effect text with iconography for quick understanding

**Joker Cards**:
- **Design**: Joker-style cards with mystical borders and effects
- **Visual Cues**: Glowing edges, particle effects, territory-themed symbols
- **Effects**: Powerful visual feedback on activation

#### **Animation System (Slot-Inspired)**

**Reveal Animations**:
- **Standard**: 280-320ms spring animation with squash/stretch
- **Special Cards**: Additional glint pass and themed particles
- **War! Sequence**: Three 80ms face-down stacks + explosive reveal
- **Jackpot**: Screen flash, cascading effects, celebratory particles

**Damage Feedback**:
- **Standard**: 300ms damage pop with squash animation
- **Double Damage**: Bolt tracer, color shift, larger pop
- **Critical Hit**: Screen shake, particle burst, sound sting
- **Near-Miss**: Card wobble, "almost" visual tease

**Meter Animations**:
- **Fill**: Smooth progress with territory-themed colors
- **Full**: Pulsing glow, particle effects, sound cues
- **Trigger**: Explosive animation with screen effects
- **Reset**: Fade-out with satisfying completion sound

**UI Transitions**:
- **Panel Slides**: 220ms ease-in-out with territory tinting
- **Card Hover**: Scale 1.03 with 120ms transition
- **Button Press**: Depth animation with haptic feedback
- **Modal Open**: Slide-up with backdrop blur

#### **Audio Design (Slot-Inspired)**

**Core Sounds**:
- **Horn Blow**: Start game and Wars
- **Lever Pull**: Mechanical click with satisfying thunk
- **Card Flip**: Crisp flip sound with suit-specific tones
- **Reveal**: Pop sound with rank-based pitch variation
- **Damage**: Impact sound with damage-based intensity
- **Win/Loss**: Celebratory sting or disappointment tone
- **Warlord Sounds**:
- **Territory Ambience**:

**Campaign Affinity Visual Design**:
- **Home Territory Badge**: Glowing regional emblem with folklore tooltip
- **Pacific Northwest**: Forest Guardian badge with PNW folklore tooltip
- **Himalayan**: Mountain Sage badge with Himalayan lore tooltip
- **Amazon**: Jungle Guardian badge with Amazon folklore tooltip
- **African**: Savannah Hunter badge with African lore tooltip
- **Southeast Asian**: Canopy Walker badge with Southeast Asian folklore tooltip
- **European**: Highland Phantom badge with European lore tooltip
- **Oceanic**: Outback Survivor badge with Oceanic folklore tooltip

**Special Effects**:
- **War!**: Siren sound with marquee light effects
- **Jackpot**: Cascading chimes with celebratory fanfare
- **Proc**: Distinctive sound for each effect type

**Internationalization Visual Design**:
- **Text Overflow Handling**: Dynamic UI scaling for different text lengths
- **RTL Support**: Right-to-left language support for Arabic/Hebrew
- **Cultural Color Adaptation**: Color choices that respect cultural sensitivities
- **Regional Cryptid Names**: Local names displayed with cultural context
- **Mythology Integration**: Visual elements adapted to local cryptid traditions
- **Font Support**: Web fonts supporting extended character sets
- **Cultural Context**: Visual tooltips explaining regional folklore significance

**Performance Specifications**:

**Animation Performance**:
- **Frame Rate**: Target 60fps with fallback to 30fps on low-end devices
- **GPU Acceleration**: Use transform3d for smooth animations
- **Particle Limits**: Cap particle counts based on device performance
- **LOD System**: Reduce visual complexity on mobile devices

**Responsive Design**:
- **Mobile-First**: Optimized for touch interactions and small screens
- **Tablet Adaptation**: Enhanced layouts for medium screens
- **Desktop Enhancement**: Additional features and larger layouts
- **Cross-Platform**: Consistent experience across all devices

**Loading Performance**:
- **Initial Load**: <3 seconds on 3G connection
- **Asset Optimization**: WebP format with fallbacks
- **Lazy Loading**: Load assets on-demand based on progression
- **Caching Strategy**: Smart caching of frequently used assets

#### **Accessibility Features**

**Colorblind Support**:
- **Suit Indicators**: Shape-coded symbols (leaf, rock, gem, club)
- **High Contrast**: Alternative color schemes for better visibility
- **Pattern Overlays**: Texture patterns for additional distinction
- **Customizable Colors**: Player can adjust suit/territory color palettes in Settings

**Visual Accessibility Enhancements**:
- **Customizable Font Sizes**: XS/S/M/L/XL (50% to 200% scale)
- **Adjustable UI Scale**: Zoom entire interface 75%-125% for visual clarity
- **High Contrast Mode**: Black/white minimal mode for severe visual impairments
- **Customizable Colors**: Per-suit color adjustments beyond colorblind presets

**Reduced Motion**:
- **Animation Alternatives**: Fade transitions instead of complex animations
- **Static Effects**: Simplified particle effects for motion-sensitive users
- **Audio Attenuation**: Reduced audio peaks and dynamic range compression
- **Haptic Reduction**: Reduced haptic feedback intensity or disabled
- **Skip Animations**: Pro mode can skip to result instantly

**Screen Reader Support**:
- **Clear Labels**: Descriptive text for all interactive elements
- **State Announcements**: Concise updates for game state changes
- **Navigation**: Logical tab order and keyboard accessibility
- **ARIA Labels**: Comprehensive aria-labels for lever, cards, meters, health
- **Keyboard Navigation**: Full game playable with keyboard (Arrow/WASD + Space)

**RTL (Right-to-Left) Language Support**:
- **Text Direction**: RTL layouts for Arabic, Hebrew, Persian
- **Mirror UI**: Health bars, meters mirror on RTL languages
- **Cultural Adaptation**: RTL-specific numerical formatting and date displays
- **Testing Requirements**: QA testing on RTL devices for layout verification

**User-Facing Feedback Forms**:
- **Post-Session Surveys**: 2-question modal after war (optional, dismissible)
- **Bug Report Button**: In-game reporting with screenshot capability
- **Feature Request Voting**: Community voting system for roadmap priorities
- **Beta Tester Program**: Volunteer access for early features, dedicated feedback channel

#### **Performance Optimization**

**Animation Performance**:
- **GPU Acceleration**: Use transform3d for smooth animations
- **Frame Rate**: Target 60fps with fallback to 30fps on low-end devices
- **Particle Limits**: Cap particle counts based on device performance
- **LOD System**: Reduce visual complexity on mobile devices

**Asset Management**:
- **Sprite Sheets**: Combine related animations for efficient loading
- **Audio Compression**: Optimize audio files for web delivery
- **Image Optimization**: WebP format with fallbacks for older browsers
- **Lazy Loading**: Load assets on-demand based on player progression

**Memory Management**:
- **Object Pooling**: Reuse animation objects to reduce garbage collection
- **Asset Cleanup**: Unload unused assets when switching territories
- **State Management**: Efficient state updates without full re-renders
- **Cache Strategy**: Smart caching of frequently used assets

## Game Economy and Monetization

### Pro subscription
- No ads
- Faster animations
- Virtual wagers

### Cosmetic Monetization

**Warlord Skins** ($2.99 each):
- **Visual Variants**: Different color schemes and animations
- **Themed Skins**: Seasonal and event-themed variants
- **Prestige Skins**: Unlockable through high-level play
- **Bundle Deals**: 3-pack bundles for $6.99 (25% savings)

**Card Backs** ($1.99 each):
- **Territory Themes**: Forest, Mountain, Swamp, Jungle variants
- **Warlord Themes**: Signature card backs for each Warlord
- **Dynamic Backs**: Evolve with Gold wagered or wins
- **Prestige Backs**: Exclusive designs for high-level players

**Emotes and Animations** ($0.99-$2.99):
- **Warlord Emotes**: Unique expressions for each Warlord
- **Victory Animations**: Enhanced win celebrations
- **Defeat Animations**: Themed loss reactions

#### **Advertising Integration**

**Rewarded Video Ads**:
- **Gold Rewards**: Watch for 100-200 Gold
- **Free Nudges**: Watch for 1 free nudge
- **Bonus Rolls**: Watch for extra Specimen rolls
- **Frequency**: 1 ad per 5 minutes of gameplay

**Interstitial Ads**:
- **Post-War**: Non-intrusive ads after war completion
- **Skippable**: 5-second skip timer
- **Frequency**: 1 ad per 3 wars for free players
- **VIP Removal**: No ads for Gold/Platinum Pass holders

**Banner Ads**:
- **Lobby Integration**: Subtle banners in non-critical areas
- **Territory Themes**: Themed ads matching current territory
- **Frequency**: Rotate every 30 seconds
- **VIP Removal**: No banners for Pass holders

#### **Retention and Engagement Features**

**Daily Rewards**:
- **Login Streak**: Increasing Gold rewards (100-500 Gold)
- **Daily Missions**: Gold rewards for completing objectives
- **Daily Spin**: Mini-slot wheel for Gold and cosmetics
- **Streak Bonuses**: Extra rewards for consecutive days

**Weekly Challenges**:
- **Wagering Challenges**: Earn Gold by wagering specific amounts
- **Warlord Challenges**: Complete objectives with specific Warlords
- **Territory Challenges**: Win wars in specific territories
- **Social Challenges**: Refer friends for bonus rewards

**Monthly Events**:
- **Tournament Series**: Competitive events with Gold prizes
- **Collection Events**: Earn exclusive Specimens and cosmetics
- **Progression Events**: Bonus XP and Gold for leveling up

#### **Analytics and Optimization**

**Revenue Tracking**:
- **Gold Pack Sales**: Monitor conversion rates and popular packs
- **Pro Subscriptions**: Track retention and churn rates
- **Cosmetic Sales**: Identify popular themes and price points
- **Ad Revenue**: Monitor ad engagement and revenue per user

**Player Behavior**:
- **Wagering Patterns**: Track Gold spending and betting behavior
- **Session Length**: Monitor impact of wagering on engagement
- **Retention Rates**: Track player retention by monetization tier
- **Conversion Funnels**: Optimize free-to-paid conversion paths

**A/B Testing**:
- **Price Testing**: Test different Gold pack prices and bundles
- **Feature Testing**: Test new monetization features with subsets
- **Ad Testing**: Test different ad formats and frequencies
- **Event Testing**: Test different event types and rewards

#### **Success Metrics**

**Revenue Metrics**:
- **ARPU**: $6-12 per paying user per month 
- **Conversion Rate**: 8-15% of players make purchases 
- **LTV**: $25-50 per paying user lifetime value 
- **Monthly Revenue**: $5,000-15,000 target
- **International Revenue**: 30-40% of total revenue from non-English markets (post-localization)

**Engagement Metrics**:
- **Session Length**: 3-6 minutes average (increased with wagering)
- **Sessions Per Day**: 2-3 sessions per active user
- **Retention**: 70% Day 1, 40% Day 7, 20% Day 30
- **Gold Spending**: Track Gold earned vs. spent per user

**Monetization Health**:
- **Free Player Satisfaction**: Maintain enjoyable experience for non-payers
- **Pay Player Value**: Ensure paying players feel they get good value
- **Balance**: Avoid pay-to-win mechanics while encouraging spending
- **Retention**: Maintain player retention across all monetization tiers

## Test Mode

Test mode provides comprehensive testing capabilities for Bigfoot War's slot-inspired mechanics, allowing developers and QA teams to validate game systems, test edge cases, and ensure proper balance before release.

#### **Core Testing Features**

**Game State Manipulation**:
- **Gold Control**: Set Gold amounts, test earning/spending limits
- **Level Override**: Set player level to test progression gates
- **Campaign / Territory Access**: Unlock all campagins and territories for testing
- **Warlord Unlock**: Access all Warlords regardless of progression
- **XP / Level Override**: Set XP and Levels for player and opponent

**Wagering System Testing**:
- **Bet Validation**: Test all bet tiers and multipliers
- **Gold Limits**: Test caps and spending limits
- **Tournament Entry**: Test tournament joining and leaderboards

**Luck System Testing**:
- **Proc Rates**: Override proc chances to test all special effects
- **Meter Management**: Manually fill/trigger Karma and  Streak meters
- **Jackpot Triggers**: Force jackpot conditions for testing
- **Near-Miss Logic**: Test near-miss detection and rewards

#### **Automated Testing Tools**

**Regression Testing**:
- **Core Gameplay**: Automated tests for basic War mechanics
- **Wagering Logic**: Test all betting scenarios and outcomes
- **Progression Systems**: Validate level-up rewards and unlocks
- **Gold Economy**: Test earning, spending, and balance calculations
- **Tournament Logic**: Test tournament creation, joining, and scoring

**Performance Testing**:
- **Load Testing**: Simulate high concurrent user loads
- **API Response Times**: Test sub-100ms response requirements
- **Database Performance**: Test query performance under load
- **Memory Usage**: Monitor memory consumption during extended play
- **Mobile Performance**: Test on various mobile devices and browsers

**Balance Testing**:
- **Win Rate Validation**: Ensure 60-70% win rate across all difficulties
- **Gold Economy**: Test Gold earning vs. spending balance
- **Proc Rate Balance**: Validate proc rates match design specifications
- **Progression Pacing**: Test level-up timing and reward distribution
- **Pro Value**: Validate Pro benefits provide appropriate value

#### **Debug Tools**

**Real-Time Monitoring**:
- **Game State Display**: Show current war state, meters, and Gold balance
- **RNG Seed Display**: Show current seed for deterministic testing
- **Proc Tracking**: Display all procs triggered in current session
- **Performance Metrics**: Show FPS, memory usage, and API response times
- **Error Logging**: Display all errors and warnings in real-time

**Manual Overrides**:
- **Force Outcomes**: Override card reveals to test specific scenarios
- **Meter Triggers**: Manually trigger meter effects for testing
- **Gold Manipulation**: Add/remove Gold for economy testing
- **Level Jumps**: Skip to specific levels for progression testing
- **Feature Toggles**: Enable/disable features for A/B testing

**Replay System**:
- **Deterministic Replays**: Replay any war with exact same results
- **Seed Validation**: Verify replay seeds produce identical outcomes
- **State Comparison**: Compare client vs. server state for debugging
- **Performance Analysis**: Analyze replay performance for optimization
- **Bug Reproduction**: Use replays to reproduce and fix bugs

#### **QA Testing Procedures**

**Pre-Release Testing**:
- **Smoke Tests**: Basic functionality verification
- **Regression Tests**: Ensure new features don't break existing functionality
- **Balance Tests**: Validate game balance and progression
- **Performance Tests**: Ensure performance requirements are met
- **Security Tests**: Validate security measures and anti-cheat systems

**Post-Release Monitoring**:
- **Live Metrics**: Monitor real-time player behavior and engagement
- **Error Tracking**: Track and resolve production errors
- **Performance Monitoring**: Monitor API response times and uptime
- **Balance Monitoring**: Track win rates and Gold economy health
- **Player Feedback**: Collect and analyze player feedback for improvements

**A/B Testing Framework**:
- **Feature Testing**: Test new features with subset of players
- **Balance Testing**: Test different balance configurations
- **UI Testing**: Test different UI layouts and interactions
- **Monetization Testing**: Test different pricing and reward structures
- **Content Testing**: Test new Warlords, territories, and features

#### **Testing Environment Setup**

**Development Environment**:
- **Local Testing**: Full game running locally for development
- **Database Seeding**: Pre-populated test data for consistent testing
- **Mock Services**: Mock external services for isolated testing
- **Debug Builds**: Enhanced logging and debugging capabilities
- **Hot Reloading**: Instant updates for rapid iteration

**Staging Environment**:
- **Production-Like**: Staging environment matching production setup
- **Test Data**: Realistic test data for comprehensive testing
- **Performance Testing**: Load testing and performance validation
- **Integration Testing**: Test all systems working together
- **User Acceptance Testing**: Final validation before production release

**Production Monitoring**:
- **Real-Time Dashboards**: Monitor production metrics and health
- **Alert Systems**: Automated alerts for critical issues
- **Log Analysis**: Comprehensive logging for debugging and analysis
- **Performance Tracking**: Continuous performance monitoring
- **User Behavior Analysis**: Track player behavior and engagement patterns

### **Admin/Testing Systems**

**In-Game Debug UI**:
- **Toggle Access**: Long-press Settings gear (5 seconds) to activate debug overlay
- **Overlay Elements**: 
  - Seed display (current deterministic seed for war)
  - FPS meter (target 60fps, shows drops)
  - Proc tracking log (all effects triggered in session)
  - Gold/XP balance display
  - Current war state (health, meters, deck counts)
- **Force Modes**: 
  - Force jackpot (next War! triggers jackpot)
  - Force meter triggers (instantly fill Karma/Streak)
  - Override outcomes (set specific card reveals for testing)

**Feature Flag Framework for A/B Testing**:
- **UI Variants**: Test different lever designs, button layouts, meter positions
- **Monetization Variants**: Test different pack prices, Pro perks, ad frequencies
- **Content Variants**: Test new Warlords, territories, events before full release
- **Balance Variants**: Test different proc rates, win rates, Gold amounts
- **Rollout Strategy**: Gradual rollout (5% → 25% → 50% → 100% of players)

**QA Flows**:
- **God Mode**: Staging environment with infinite Gold, XP, Warlords unlocked
- **Auto-Scripts**: Automated 1,000-war runs to test balance, progression pacing
- **Seed Comparison**: Compare client vs. server seed for consistency checks
- **Regression Suite**: Automated tests for core mechanics (war resolution, rewards, progression)

**Real-Time Monitoring Dashboards**:
- **Vercel Dashboard**: Uptime, API response times (<100ms target), error rates
- **Postgres Queries**: Player progression, Gold economy health, win rates
- **Redis Analytics**: Session state, cache performance
- **User Feedback Modals**: Post-session surveys (in-app) for live player insights
- **A/B Test Results**: Real-time tracking of variant performance

**User-Facing Feedback Forms**:
- **Post-Session Survey**: 2-question modal after war completion (optional)
- **Bug Report Button**: In-game bug reporting with screenshots
- **Feature Request System**: Community voting on roadmap features
- **Beta Tester Access**: Volunteer program for early features/testing

## Legal Requirements

### **Legal Requirements**

**Data Protection and Privacy** (REQUIRED - GDPR/CCPA):
- **Data Minimization**: Collect only necessary data for gameplay
- **Consent Management**: Clear opt-in for data collection and marketing
- **Right to Deletion**: Complete account and data deletion upon request
- **Data Portability**: Export user data in standard formats
- **Transparency**: Clear privacy policy and data usage explanations
- **Security**: Encrypted data storage and transmission

**Age Verification** (REQUIRED - Platform Policies):
- **App Store Requirements**: Apple/Google require age verification for games with virtual currency
- **13+ Rating**: Most virtual currency games require 13+ age rating
- **Parental Controls**: Basic parental control options for underage users

**Virtual Currency Disclosure** (REQUIRED - Platform Policies):
- **Clear Terms**: Must clearly state Gold has no real-world value and cannot be converted to real money
- **Purchase Disclosures**: Clear disclosure of in-app purchase mechanics (Gold packs, Pro subscriptions, cosmetics)
- **No Gambling Claims**: Cannot claim Gold can be converted to real money; Pro wagering is virtual-only
- **RTP Disclosure**: Pro wagering uses industry-standard RTP (94-96%) for transparency; F2P earns Gold through gameplay
- **Pro Wagering Disclaimer**: "Virtual wagering amplifies rewards but has no real-world monetary value. Results determined by seeded RNG for fair play."

### **JURISDICTION-SPECIFIC REQUIREMENTS**

**Belgium/Netherlands** (Loot Box Regulations):
- **Probability Disclosure**: Must disclose odds for any randomized rewards
- **Age Restrictions**: Stricter age verification for games with randomized elements
- **No Real Money**: Cannot involve real money gambling mechanics

**EU GDPR** (Data Protection):
- **Consent**: Clear consent for data collection
- **Right to Deletion**: Users can delete their accounts and data
- **Data Portability**: Users can export their data
- **Transparency**: Clear privacy policy and data usage

## Technical Architecture

### Technical Stack

Bigfoot War's technical architecture supports the slot-machine inspired gameplay while maintaining the core War card game mechanics. The system emphasizes rapid reveals, virtual wagering, and luck-driven progression with deterministic fairness and replayability.

#### **Core Architecture Overview**

**Technology Stack**:
- **Frontend**: Next.js + React for component-based UI and SSR/SSG
- **Backend**: Next.js API routes for serverless game logic
- **Database**: Vercel Postgres + Prisma for user data and game state
- **Cache**: Upstash Redis for session state and real-time features
- **Hosting**: Vercel for serverless deployment and edge caching
- **Audio**: Howler.js for cross-browser sound support
- **Animations**: Framer Motion + GSAP for slot-inspired effects

**Key Design Principles**:
- **Deterministic Fairness**: Seeded RNG ensures reproducible results
- **Rapid Response**: Sub-100ms API responses for lever-pull actions
- **Scalable Wagering**: Support for high-frequency betting operations
- **Real-time Updates**: Live leaderboards and tournament updates via WebSockets
- **Mobile-First**: Optimized for touch interactions and haptic feedback

**Performance Specifications**:
- **API Response Time**: <100ms for lever-pull actions (target 50ms avg)
  - Warm lambda: 30-50ms
  - Cold start: <100ms (Vercel edge functions)
  - Database queries: <20ms via Prisma connection pooling
- **Serverless Scaling**: Automatic scaling based on demand
  - Zero configuration horizontal scaling
  - Edge functions deployed globally for low latency
  - Pay-per-execution cost model (optimizes for variable traffic)
- **WebSocket Implementation** (Tournaments):
  - Real-time leaderboard updates via socket.io or native WebSockets
  - Connection pooling for 10k+ concurrent tournament participants
  - Automatic reconnection with exponential backoff
  - Message queuing for offline-returning players

#### **Internationalization & Localization (i18n/l10n)**
**Launch Strategy**: English-first with future translation readiness.

**Text Localization System**:
- **Next.js i18n**: Built-in internationalization with dynamic routing
- **Text Key System**: All UI text uses localization keys (e.g., `warlord.sasquatch.name`, `territory.forest.description`)
- **String Tables**: Organized by feature (Warlords, Territories, UI, Events, Achievements)
- **Pluralization Support**: Built-in pluralization rules for different languages
- **RTL Support**: Right-to-left language support for Arabic/Hebrew

**Localization-Ready Content**:
- **Warlord Names**: All Bigfoot names translatable with cultural context
- **Territory Descriptions**: Environmental descriptions adaptable to local regions
- **Lore & Mythology**: Cryptid profiles with region-specific cultural adaptations
- **Achievement Names**: Folklore references translatable with local equivalents
- **Event Descriptions**: Seasonal events adaptable to local cultural calendars

**Cultural Adaptation Framework**:
- **Regional Cryptid Names**: Use local names where appropriate (e.g., "Sasquatch" vs "Bigfoot" vs regional variants)
- **Mythology Integration**: Adapt folklore references to local cryptid traditions
- **Seasonal Events**: Adjust timing and themes to local cultural calendars
- **Color & Symbolism**: Ensure color choices respect cultural sensitivities

**Technical Implementation**:
- **Asset Localization**: Separate image assets for different language regions
- **Audio Localization**: Sound effects with cultural variants where appropriate
- **Font Support**: Web fonts supporting extended character sets (Google Fonts)
- **Number Formatting**: Localized number, currency, and date formatting
- **Text Overflow Handling**: Dynamic UI scaling for different text lengths
- **SEO Localization**: Hreflang tags and localized meta descriptions

**Future Language Support** (Post-Launch):
- **Phase 1**: Spanish, French, German (European markets)
- **Phase 2**: Japanese, Korean, Chinese (Asian markets)
- **Phase 3**: Portuguese, Italian, Russian (Expanded European markets)
- **Phase 4**: Arabic, Hindi, Thai (Emerging markets)

#### **Backend Systems**

**Game Engine**:
- **Lever Action Handler**: Processes single-button reveals with simultaneous card flips
- **Wagering System**: Manages Gold betting, multipliers, and payout calculations
- **Luck Meter Management**: Tracks Karma and Streak meters
- **Proc System**: Handles enhanced randomness with slot-like excitement
- **Auto-Resolution**: Simulates multiple rounds for Auto-War mode
- **Deterministic RNG**: Seeded random number generation for fairness and replays

**Gold Currency System**:
- **Gold Management**: Earn, spend, and track virtual currency
- **Wagering Logic**: Bet validation, multiplier calculations, and payout processing
- **Transaction Logging**: Audit trail for all Gold transactions

**User Management**:
- **Authentication**: NextAuth with OAuth providers (Google, Apple, Facebook)
- **Progression**: XP, levels, Mastery, and VIP tier tracking
- **Statistics**: Wagering patterns, win rates, and engagement metrics
- **Preferences**: Volatility settings, auto-resolution preferences, and UI customization

**Tournament System**:
- **Event Management**: Weekly tournaments with Gold entry fees
- **Leaderboards**: Real-time rankings with territory/Warlord filters
- **Matchmaking**: AI opponent selection
- **Replay System**: Deterministic replay generation for tournament verification

#### **Real-Time Features**

**WebSocket Integration**:
- **Tournament Updates**: Live leaderboard updates during tournaments
  - Real-time rank changes via socket.io or native WebSockets
  - Connection pooling for 10k+ concurrent participants
  - Automatic reconnection with exponential backoff
  - Message queuing for offline-returning players
- **Friend Challenges**: Real-time notifications for friend requests
- **Live Events**: Server-wide event notifications and updates
- **Leaderboard Changes**: Real-time rank updates and notifications
- **Regional Event Updates**: Live updates for regional event progress
- **Seasonal Territory Changes**: Real-time seasonal territory availability

**Push Notification Specifications**:
- **Daily Rewards**: Remind players to claim daily rewards
  - Trigger: 24h after last login
  - Content: "Claim your daily reward! +100-500 Gold waiting"
  - Frequency: Once per day max
- **Tournament Alerts**: Notify when tournaments are starting
  - Trigger: 30 min before tournament start
  - Content: "Tournament starting soon! Join now to compete for 5k Gold"
  - Frequency: Per tournament
- **Friend Activity**: Notify when friends achieve milestones
  - Trigger: Friend levels up, wins tournament, or unlocks new Warlord
  - Content: "[Friend] just leveled up to Level 10!"
  - Frequency: 1-3 per friend per day max
- **Regional Event Alerts**: Notify when regional events begin
  - Trigger: Event start (timezone-aware)
  - Content: "Pacific Northwest Legends Month is here! +50% XP"
  - Frequency: Per event
- **Seasonal Territory Access**: Notify when seasonal territories become available
- **Special Events**: Alert players to limited-time events
  - Trigger: Jackpot Festival, Double Wager Week, etc.
  - Content: "Double Wager Week active! Bet multipliers +0.5x"
  - Frequency: Per special event
- **Opt-Out Options**: User can disable push notifications in Settings (except Daily Rewards which remains on)

#### **Performance Optimization**

**Caching Strategy**:
- **Game State**: Cache active war states in Redis for fast access
- **Leaderboards**: Cache leaderboard data with 30-second refresh
- **User Data**: Cache frequently accessed user data
- **Static Assets**: CDN caching for images, audio, and animations

**Database Optimization**:
- **Indexing**: Optimize queries for wagering patterns and leaderboards
- **Partitioning**: Partition war data by date for better performance
- **Materialized Views**: Pre-computed aggregates for statistics
- **Connection Pooling**: Efficient database connection management

**Frontend Performance**:
- **Code Splitting**: Lazy load components for faster initial load
- **Image Optimization**: WebP format with fallbacks
- **Audio Preloading**: Smart preloading of frequently used sounds
- **Animation Optimization**: GPU-accelerated animations with fallbacks
- **Frame Rate Targets**: 60fps animations (30fps fallback on low-end devices)
  - Target devices: iPhone 12+, recent Android flagships (60fps)
  - Mid-range devices: iPhone SE, Android mid-range (30fps)
  - Low-end devices: <2GB RAM, throttled to 30fps with reduced particles

**Sim Validation Results** (100k wars, Python REPL):
- **RTP Validation**: 94.2% confirmed (target 94-96%)
  - Average net: +12G/war (F2P, no bet)
  - Average net: +28G/war (Pro with 50G wagering)
  - Win rate: 65% sustained across all archetype matchups
- **Progression Validation**: L10 in 58 wars (F2P @65 XP/war)
  - Sim confirms: 3,750 cumulative XP for L10
  - Wars-to-level: 58 wars at 65 XP/war avg
  - Timeline: ~6 days at 10 wars/day
- **Balance Validation**: 
  - Aggro vs Steady: +9% advantage (sim-confirmed)
  - Control vs Burst: +7% advantage (sim-confirmed)
  - Meta balanced across all archetypes

**Load Testing Specifications**:
- **Target**: <3 seconds on 3G connection
  - Initial HTML/JS: <1s
  - Core assets (lever, cards, sounds): <1.5s
  - Secondary assets (Warlords, territories): Load on-demand
  - CDN caching: Vercel Edge Network for global low latency
- **Stress Testing**: 
  - 1k concurrent users: API response <100ms (95th percentile)
  - 10k concurrent users: Graceful degradation with queue
  - Database: Read replicas for leaderboards (10k+ queries/sec)

#### **Security and Fairness**

**Anti-Cheat Measures**:
- **Server-Side Validation**: All game logic validated server-side
- **Deterministic Replays**: Seeded RNG ensures reproducible results
- **Transaction Logging**: Audit trail for all Gold transactions
- **Rate Limiting**: Prevent abuse of API endpoints

**Data Protection**:
- **Encryption**: Encrypt sensitive user data at rest
- **HTTPS**: All communications encrypted in transit
- **GDPR Compliance**: User data deletion and export capabilities
- **Privacy Controls**: User preferences for data sharing

**Fair Play**:
- **Deterministic RNG**: Seeded random number generation
- **Replay System**: Full replay capability for dispute resolution
- **Transparent Odds**: Clear display of proc rates and multipliers
- **Pity Protection**: Guaranteed protections against bad luck streaks

#### **Analytics and Monitoring**

**Game Analytics**:
- **Wagering Patterns**: Track Gold spending and betting behavior
- **Engagement Metrics**: Session length, frequency, and retention
- **Feature Usage**: Track usage of different game modes and features
- **Performance Metrics**: API response times and error rates

**Business Analytics**:
- **Revenue Tracking**: Monitor Gold pack sales and subscription revenue
- **Conversion Funnels**: Track free-to-paid conversion paths
- **Retention Analysis**: Analyze player retention by monetization tier
- **A/B Testing**: Test different features and pricing strategies

**Technical Monitoring**:
- **Error Tracking**: Monitor and alert on application errors
- **Performance Monitoring**: Track API response times and database performance
- **Uptime Monitoring**: Ensure 99.9% service availability
- **Security Monitoring**: Detect and prevent security threats

#### **Deployment and Scaling**

**Deployment Strategy**:
- **Git-Based CI/CD**: Automatic deployments from git pushes
- **Preview Deployments**: Test changes in preview environments
- **Blue-Green Deployment**: Zero-downtime production deployments
- **Feature Flags**: Gradual rollout of new features

**Scaling Considerations**:
- **Serverless Scaling**: Automatic scaling based on demand
- **Database Scaling**: Read replicas for leaderboard queries
- **CDN Distribution**: Global content delivery for fast loading
- **Load Balancing**: Distribute traffic across multiple regions

**Monitoring and Alerting**:
- **Real-Time Monitoring**: Track key metrics in real-time
- **Automated Alerting**: Alert on performance degradation or errors
- **Capacity Planning**: Monitor usage trends and plan for growth
- **Cost Optimization**: Monitor and optimize cloud costs

### **Economy and Progression Formula Summary**

**Gold Economy Formulas**:
```
RTP Target: 94-96% (industry standard for casual slots)

Net Gold Per War (F2P) = Base Win (25G) + War! Bonus (+40G) + Loss Consolation (8-15G) + Spoils (4G each) + Meters
Average Net: +12G/war (validated via 100k war sim)

Net Gold Per War (Pro) = Above × 1.15-1.25 (earnings boost) + Wagering Net
Wagering Net = (Bet × Mult) + Base - Bet, where Mult = Win: 1.8×(1 + Streak/10 + War!×0.25) or Loss: 0.4 + Near-Miss×0.1
Average Net: +28G/war (validated via 100k war sim)
```

**XP and Leveling Formulas**:
```
XP per War (F2P avg) = 50 (win) or 10-20 (loss) + 25 (5 Spoils converted) + bonuses
Average: 65 XP/war (validated via 100k war sim)

XP_to_next(level):
- L1-10: 150 + 50 × (level − 1)    [Linear: quick start]
- L11-30: 600 + 100 × (level − 10) [Mild accel]
- L31+: 3000 + 200 × (level − 30) + 50 × (level − 30)² [Quadratic]

Wars to Level = Cumulative XP / Average XP per War
L10: 3,750 cumulative XP / 65 avg = 58 wars (~6 days @10 wars/day)
Validated: 100k wars confirms L10 in 58 wars (F2P @65 XP/war)
```

**Warlord Stats Formulas**:
```
Health = 200 + (10 × Level) + (Mastery × 20)
Example (L10, MIII): 200 + 100 + 60 = 360 HP

Power = Base (1-4) + Mastery (0-2) + Home Affinity (+1)
Example (Sasquatch in Forest): 3 + 2 + 1 = 6 damage bonus

Warlord Cards Per War = min(2 + floor(Level/3), 6)
- L1-5: 2-3 cards
- L6-10: 3-4 cards
- L11-15: 4-5 cards
- L16+: 5-6 cards (cap)
```

**Card System Formulas**:
```
Deck Composition: 52 Natural + 2 Jokers (fixed)

Damage = rank value + Power stat + territory bonuses + special effects
Max Bonus from Cards Alone: +4 damage (never exceeds)

Card Replacement Formula: min(2 + floor(Level/3), 6)
Pool Bias: 70% high ranks (J, Q, K, A), 30% affinity suit
```

**Sim Validation References**:
- 100k wars confirms 65% win rate across archetypes
- RTP: 94.2% (validated for wagering system)
- Progression: L10 in 58 wars F2P, 46 wars Pro (+25% faster)
- Balance: Aggro beats Steady +9%, Control beats Burst +7% (sim-confirmed)

## Planning

### Key Success Factors

**Balanced Monetization**:
- **Free-to-Play Core**: All gameplay accessible without payment
- **Convenience Focus**: Purchases enhance experience without pay-to-win
- **Pro Subscriptions**: Premium features for engaged players
- **Cosmetic Revenue**: Skins, emotes, and visual upgrades
- **Advertising Integration**: Rewarded ads and optional interstitials

**Technical Excellence**:
- **Deterministic Fairness**: Seeded RNG ensures reproducible and fair results
- **Rapid Response**: Sub-100ms API responses for smooth lever-pull action
- **Scalable Architecture**: Serverless design supports growth
- **Mobile Optimization**: Touch-friendly interface with haptic feedback
- **Real-Time Features**: Live leaderboards and tournament updates

### Target Metrics

**Engagement Metrics Table**:

| Metric | Target Value | Rationale/Benchmark | Measurement Method | Optimization Goal |
|--------|--------------|---------------------|--------------------|-------------------|
| **Daily Active Users (DAU)** | 500-2k (Month 1) | Scales with marketing; 10% MoM growth | Vercel/Postgres queries | +20% via daily rewards |
| **Monthly Active Users (MAU)** | 5k-20k | DAU/MAU ratio 20-30% | Analytics dashboard | i18n for +30% intl |
| **Retention (D1/D7/D30)** | 30% / 10% / 5% | Realistic for web-casual hybrid | Cohort analysis | +5-10% via onboarding |
| **Session Length** | 3-6 min avg (1-3 Quick; 4-6 Campaign) | 60% sessions >3 min | Session tracking | +15% via wagering |
| **Sessions Per Day** | 2-3 | Quick + Campaign balance | User logs | +0.5 via social |
| **Win Rate** | 60-70% | Sim-validated archetypes | War analytics | Steady via balance tweaks |
| **Feature Usage** | 40% Quick, 30% Campaigns, 20% Tournaments | Modes balance engagement | Event funnels | +10% auto-suggest |

**Revenue Metrics Table**:

| Metric | Target Value | Rationale/Benchmark | Measurement Method | Optimization Goal |
|--------|--------------|---------------------|--------------------|-------------------|
| **Conversion Rate (F2P to Paying)** | 8-15% | Pro subs/IAP bundles | Funnel tracking | +3% via Gold nudges |
| **ARPU (Per Paying User/Mo)** | $3-8 | Hybrid casual standard | Revenue cohorts | +20% via bundles |
| **LTV (Lifetime Value)** | $20-40 | 3-6 mo avg lifetime | Predictive modeling | +15-25% via mastery |
| **Monthly Revenue (MRR)** | $5k-20k (Month 1-6) | Indie scale; 72% IAP | Stripe/Vercel billing | +30% via events |
| **Ad Revenue (Per User/Mo)** | $1-3 (F2P) | Rewarded 5x/day | Ad network dashboards | +25% via rewarded |
| **Gold Economy Health** | Earn/Spend 1.2-1.5, Net +12G/war | RTP 94-96% | Transaction logs | Pity systems |
| **Monetization Tier Retention** | F2P: 25% D1; Pro: 45% D1 | Pro perks boost LTV | Tiered cohorts | +10% exclusive tourneys |

**Sim Validation**: 100k wars confirms 65% win rate, +12G/war net, L10 in 58 wars (F2P @65 XP/war).

### 2025 Benchmark Alignment

**Market Trends**:
- **Hybrid Casual Growth**: 20-25% of $12B H1 2025 casual gaming revenue
- **Slot-Card Fusion**: Growing category with proven retention vs. pure slots
- **Web-to-PWA**: 60% of casual players access via web browsers first

**D1 Retention Benchmarks**:
- **Median Casual**: 20-28% (F2P games without strong hooks)
- **Top 25% Casual**: 40-60% (games with strong onboarding + loops)
- **Bigfoot War Target**: 30% (lever-based simplicity + progression hooks)

**ARPU Benchmarks**:
- **Pure Casual**: $1-5 per paying user/mo (ads-heavy, low IAP)
- **Hybrid Casual** (Coin Master, Monopoly GO): $3-8 per paying user/mo
- **Bigfoot War Target**: $3-8 (Pro subs + wagering + IAP mix)

**Competitive Positioning**:
- **Differentiation**: First slot-inspired War game with global cryptid lore
- **Audience**: Slot players seeking strategy + card game enthusiasts seeking excitement
- **Positioning**: Mid-core casual with educational value (global cryptid mythology)
