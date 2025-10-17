# Bigfoot War: Game Design Document

## Overview
**Bigfoot War** is a single-player, web-based card game where players control a Bigfoot character leading a clan in a territorial war against AI-controlled rival Bigfoot clans. Thematically centered on global cryptids (e.g., Sasquatch, Yeti, Agogwe, Hibagon, Mapinguary), it blends simple War-inspired mechanics with strategic depth via suit-based abilities with elemental properties, Battle Honor (luck-tracking) for cards, War Trophies (relics), pre-game War Bets with gold, and optional NFT integration. Built for browsers (using React/Phaser.js), the game targets quick, engaging sessions (5-15 minutes) with polished 2D visuals and immersive Bigfoot-themed animations. Roguelike deckbuilder elements frame gameplay as "Territory Sieges" across a War Front Map of regions controlled by enemy Bigfoot Warlords with access points Subterranean War Tunnels hosting Black Market Armories run by secret societies. Players conquer territories for locale-specific resources, build decks to expand their empire, and defend against revolts, with meta-progression and run-based deck evolution enhancing replayability. Territory Sieges require dynamic mobilization costs, gating expansion based on the player's empire, Bigfoot stats, and war economy. Secret societies act as shadowy manipulators running War Bets as the "House" (setting odds and rewards) and centering bounties, quests, and underground arena battles to foment the conflict amongst the Bigfoot Warlords, ensuring the Bigfoot War.

**Genre**: Digital Card Game, Strategy, Collectible, Roguelike Deckbuilder  
**Platform**: Web (mobile/desktop browsers)  
**Target Audience**: Casual gamers, card game enthusiasts, crypto/NFT collectors (13+, with optional blockchain features)  
**Core Loop**: Select a Bigfoot Warlord with unique stats, embark on Territory Sieges through the War Front Map or Subterranean War Tunnels (pay mobilization costs, build/upgrade war party deck via Clashes, War Bets, and War Trophies), conquer resources and territories, and unlock meta-progression for future campaigns.

## Core Gameplay
Players and the AI each control a Bigfoot Warlord with unique stats (HP, Luck, Strength, Agility, Wisdom, Gold Find) leading a 52-card "war party" (deck of Bigfoot warriors). The game follows a War-inspired structure with strategic layers, enhanced by roguelike sieges, War Trophies, and War Bets:

- **War Party (Deck) and Cards**: Each card has a rank (2-Ace) and a suit (Hearts, Spades, Diamonds, Clubs) with powers and elemental properties (e.g., Hearts as forest-like healing, Spades as mountain-like offense). Cards represent Bigfoots with thematic abilities tied to suits or archetypes (e.g., evasive Dwarfs, tanky Squatches). Variations include hybrid suits or generated combos (e.g., "Fiery Hearts Agogwe").
- **Clash Mechanics (Rounds)**: Simultaneous card reveals in frontline battles. Higher rank wins the pot (cards to winner’s discard). Winner deals damage to opponent’s health pool (base 100 HP, modified by Bigfoot Warlord stats). Ties trigger "Epic Clash Mode": Play 3 face-down cards, reveal 4th, sum ranks for massive damage.
- **Suit-Based Abilities**: Suits trigger effects on wins, with elemental flavor:
  - **Hearts (Forest/Healing)**: Heal 5-10 HP or buff draws (e.g., +1 card next Clash).
  - **Spades (Mountain/Offense)**: Deal extra damage (e.g., 2x rank) or debuff (e.g., skip AI turn).
  - **Diamonds (Swamp/Utility)**: Steal cards or scout opponent’s deck.
  - **Clubs (Jungle/Control)**: Stun AI or apply multi-round damage.
- **Territory Sieges (Roguelike Runs)**: Structured as campaigns across a War Front Map of territories (e.g., Pacific Northwest for Sasquatch, Himalayas for Yeti). Start with basic war party after paying mobilization costs; encounters (Clashes, ambushes, armories, War Bets) offer upgrades (add/remove/evolve cards). 
- **Mobilization Costs for Sieges**: Dynamic upfront fees (paid in gold/resources) to launch sieges, representing troop readiness and supplies. Base minimum (e.g., 50 gold for adjacent territories) + modifiers based on player (e.g., Bigfoot stats/Battle Honor), game state (e.g., empire size, revolt risk), and war economy (e.g., resource scarcity). Success refunds partial costs + plunder; failure wastes supplies. Gating encourages strategic expansion.
- **War Bets (Gold)**: Before Clashes or sieges, pick a wager (e.g., 10-100 gold for fixed buffs like +damage or risks like -HP). Outcomes fixed (e.g., "Sasquatch Ritual: Bet 50 gold for +20% Clash damage"). Run by secret societies as the "House," who set odds, take cuts, and provide rewards. Gold gathered from wins, plunder nodes, or tunnel caches.
- **War Trophies (Relics)**: Passive/triggered effects (e.g., "Yeti Skull" for +Spades damage, "Lucky Fang" for Battle Honor boosts). Gained via Clashes, ambushes, armories, or War Bets. Cap at 5-10 per siege.
- **Objective**: Reduce AI’s HP to 0 in Clashes while surviving siege thresholds (e.g., resource/score goals). Conquer territories for resources; defend against revolts. AI adapts (easy: random plays; hard: predicts based on war party/trophies).

## Key Features
### 1. Bigfoot Warlord Selection and Progression
- **Selection**: Pick from unlocked Bigfoot Warlords in the lobby or pre-siege (gallery with profiles, lore snippets, 2D portraits). Options include quiz/RNG suggestions or siege commitment. Defaults to favorites or last used.
- **Stats**: Each Bigfoot Warlord has unique stats (1-10 scale, modified by Battle Experience/levels):
  - **HP**: Base health pool (e.g., 100-120; tanky Squatches high).
  - **Luck**: Boosts Battle Honor gains (e.g., +20% Epic Win chance; agile Agogwe high).
  - **Strength**: Enhances suit damage (e.g., +1 for Spades; aggressive Sasquatches high).
  - **Agility**: Improves draws/Clashes (e.g., +1 card in ties; evasive Dwarfs high).
  - **Wisdom**: Boosts War Trophy effects (e.g., +effect duration; lore-heavy Yetis high).
  - **Gold Find**: Increases gold from nodes/wins (e.g., +10%; resourceful Mapinguary high).
- **Progression**: Earn Battle Experience (XP) from Clashes (+10), Epic Clashes (+50), siege completions (+100), or War Bets (+bonus). Levels (1-10) unlock stat points, enhanced passives, visuals (e.g., evolving portraits), or perks (e.g., suit mastery %). Meta-progression persists for unlocks (Bigfoots, War Trophies, territories).
- **Unlocks**: Start with basics (e.g., Neutral Sasquatch). Unlock via achievements (e.g., win milestones), quests, AI clan lord captures, or territory conquests. Rarity tiers; procedural discovery in sieges.
- **Gameplay Impact**: Stats bias war party/playstyle (e.g., high Luck boosts War Bet odds). Sets battlefield visuals/narrative; absorbs Battle Honor for buffs. Influences siege paths and costs (e.g., high Strength lowers mobilization fees for aggressive sieges).

### 2. War Party Building and Card Collection
- **War Party Building**: Customize pre-siege with 52-card limit, mixing suits or archetypes (synergies highlighted in UI). Unlock slots/perks via meta-progression. Mid-siege upgrades via Clashes, armory purchases, or War Bet rewards. Ties to conquest: Conquered territories unlock local cards (e.g., Himalayas for Yeti variants); exploration nodes (scout/ambush) yield recruits.
- **Card Pool**: 100-200 base cards, expanding to 300-500 with variations (e.g., hybrid suits like "Fiery Hearts"). Each Bigfoot has default suits; rarer combos via unlocks or conquests. Rarity: Common to Legendary.
- **Collection and Conquering**: Starter war party (20-30 cards). Methods:
  - Achievements for gold (spend in armories).
  - Conquering territories/tunnels (e.g., plunder nodes yield cards; Himalayan conquests unlock Yeti cards).
  - Crafting/fusing duplicates for variations/upgrades.
  - Daily quests, events, AI clan lord captures, or War Bet wins.
  - Finding: Cryptid Atlas map with hints; Battle Honor-triggered evolutions.
- **Visuals**: Cards feature polished 2D Bigfoot artwork (AI-generated via Stable Diffusion, refined in Photopea) with suit-themed backgrounds (e.g., jungles, mountains). Animations (via Phaser.js) for Clashes (e.g., Spades rockslides). Procedural art via noise (backgrounds), layered sprites (creatures), L-systems (details) using p5.js.

### 3. War Front Map and Subterranean War Tunnels
- **War Front Map**: Procedural globe/continent view (JS noise gen) with territories controlled by rival Bigfoot clans (e.g., Himalayas for Yeti, Pacific Northwest for Sasquatch). Sieges start by selecting territories (after paying mobilization costs), facing themed AI clan lords and ambushes (e.g., avalanches in snowy zones). Conquered territories yield buffs (e.g., +Gold Find) and unlock adjacent zones.
- **Territory Control**: Conquer by completing sieges (defeat clan lord). Maintain via garrisons (assign spare cards/trophies) or gold fortifications (meta-upgrades). Territories have stability meters (100 points, decay over sieges); low stability triggers revolts (AI defensive sieges to reclaim). Home territory vulnerable if overexpanded; loss triggers exile sieges (hard mode to reclaim).
- **Subterranean War Tunnels**: Hidden layers accessed via map nodes or ambushes (e.g., sinkholes). Host riskier Clashes (e.g., limited-visibility), trophy caches, or Black Market Armories run by secret societies (e.g., "Illuminati Outpost" with rune visuals). Connect territories for guerrilla shortcuts.
- **Black Market Armories**: Underground hubs to spend gold for cards, War Trophies, or upgrades. Run by human "breakaway civilizations" (NPCs), with faction biases (e.g., favor Hearts discounts).

### 4. Battle Honor System (Luck-Tracking)
- Each card tracks a "Battle Honor Profile":
  - **Metrics**: Wins, Losses, Win Rate, Epic Wins (clutch ties), Key Wins (decisive rounds), Epic Losses (humiliating defeats), Streaks, Suit Synergies.
  - **Impact**: High-honor cards gain "War Scars" (glow, buffs like +1 rank in ties). Low-honor cards add risk-reward. Boosts War Bet outcomes (e.g., +odds for buffs). Resets per siege; persists in meta.
- UI: War party viewer shows Battle Honor (bars, badges). Backend (Node.js/Firebase) syncs; localStorage for offline.

### 5. War Bets (Gold)
- **Mechanics**: Before Clashes/sieges, pick a wager (e.g., 10-100 gold for fixed buffs like +damage or risks like -HP). Outcomes fixed (e.g., "Yeti Ritual: Bet 50 gold for +20% Clash damage"). Run by secret societies as the "House," who set odds, take cuts, and provide rewards. Gold gathered from wins, plunder nodes, or tunnel caches.
- **Gold and Resource Gathering**:
  - **Gold**: Universal currency from wins (+10-50), plunder nodes (e.g., "gold veins"), tunnel caches, or quests. Spent in armories, War Bets, or mobilization costs.
  - **Essence Crystals**: Mystical, from high-altitude territories (e.g., Himalayas). Infuse cards for upgrades (e.g., +Luck) or stat boosts.
  - **Ancient Bones**: Defensive, from forested Hearts zones (e.g., Pacific Northwest). Fortify territories or craft HP trophies.
  - **Volcanic Ash**: Offensive, from Spades mountains (e.g., Andes). Enhance suit damage or War Bets.
  - **Swamp Herbs**: Utility, from Diamonds swamps (e.g., Amazon). Brew potions for scouting/healing.
- **Impact**: Adds risk-reward to sieges (e.g., big bets for resurrection). Ties to War Trophies (e.g., "Lucky Coin" boosts bet buffs).

### 6. War Trophies (Relics)
- **Cryptid Artifacts**: Passive/triggered effects (e.g., "Yeti Skull" for +Spades damage, "Lucky Fang" for Battle Honor boosts). Gained via Clashes, ambushes, armories, or War Bets. Cap at 5-10 per siege.
- **Synergies**: Amplify Bigfoot stats, suit abilities, Battle Honor, and War Bets. Themed to cryptid lore (e.g., "Swamp Totem" for Hearts buffs). AI gains trophies for difficulty.
- **Meta-Progression**: Unlock starter trophy slots or specific trophies via campaign progress.

### 7. Secret Societies
- **Role**: Shadowy human factions (e.g., "Veil Keepers," "Loosh Harvesters") who monitor the Bigfoot War from tunnels, fomenting conflict to harvest Loosh (psychic residue from battles). They run Black Market Armories, War Bets (as the "House"), bounties, quests, and underground arena battles, using players as proxies to collect relics/items and Loosh.
- **Bounties**: Post "clan lord bounties" (e.g., "Hunt Himalayan Yeti Chief for 200 gold + relic"). Scale with war economy; completing foments chaos (e.g., weakens AI territories but raises costs).
- **Quests**: Multi-step chains (e.g., "Retrieve relic from Spades mountains"). Foment war by targeting contested zones; rewards include resources or codex unlocks.
- **Underground Arena Battles**: Society-hosted duels vs. AI gladiators (3-round brackets). Entry costs gold/Loosh; harvests extra Loosh from Clashes. Rewards top ranks with exclusive trophies.
- **Collecting Relics/Items and Loosh**: Seek specific trophies/items (e.g., "Deliver Volcanic Ash relic"); players extract during sieges. Loosh generated post-Clash (+5/win, +20/Epic Clash); trade for buffs (e.g., -mobilization costs).
- **Monitoring and Fomenting**: Spy via tunnels (e.g., warn of revolts for Loosh); leak intel to stoke rivalries (e.g., +AI aggression for bigger Loosh yields). Keep records in a "Cryptid Codex" (meta-UI with procedural entries).

### 8. Bigfoot Roster
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

### 3. War Front Map and Subterranean War Tunnels
- **War Front Map**: Procedural globe/continent view (JS noise gen) with territories controlled by rival Bigfoot clans (e.g., Himalayas for Yeti, Pacific Northwest for Sasquatch). Sieges start by selecting territories (after paying mobilization costs), facing themed AI clan lords and ambushes (e.g., avalanches in snowy zones). Conquered territories yield buffs (e.g., +Gold Find) and unlock adjacent zones.
- **Territory Control**: Conquer by completing sieges (defeat clan lord). Maintain via garrisons (assign spare cards/trophies) or gold fortifications (meta-upgrades). Territories have stability meters (100 points, decay over sieges); low stability triggers revolts (AI defensive sieges to reclaim). Home territory vulnerable if overexpanded; loss triggers exile sieges (hard mode to reclaim).
- **Subterranean War Tunnels**: Hidden layers accessed via map nodes or ambushes (e.g., sinkholes). Host riskier Clashes (e.g., limited-visibility), trophy caches, or Black Market Armories run by secret societies (e.g., "Illuminati Outpost" with rune visuals). Connect territories for guerrilla shortcuts.
- **Black Market Armories**: Underground hubs to spend gold for cards, War Trophies, or upgrades. Run by human "breakaway civilizations" (NPCs), with faction biases (e.g., favor Hearts discounts).

### 4. Battle Honor System (Luck-Tracking)
- Each card tracks a "Battle Honor Profile":
  - **Metrics**: Wins, Losses, Win Rate, Epic Wins (clutch ties), Key Wins (decisive rounds), Epic Losses (humiliating defeats), Streaks, Suit Synergies.
  - **Impact**: High-honor cards gain "War Scars" (glow, buffs like +1 rank in ties). Low-honor cards add risk-reward. Boosts War Bet outcomes (e.g., +odds for buffs). Resets per siege; persists in meta.
- UI: War party viewer shows Battle Honor (bars, badges). Backend (Node.js/Firebase) syncs; localStorage for offline.

### 5. War Bets (Gold)
- **Mechanics**: Before Clashes/sieges, pick a wager (e.g., 10-100 gold for fixed buffs like +damage or risks like -HP). Outcomes fixed (e.g., "Yeti Ritual: Bet 50 gold for +20% Clash damage"). Run by secret societies as the "House," who set odds, take cuts, and provide rewards. Gold gathered from wins, plunder nodes, or tunnel caches.
- **Gold and Resource Gathering**:
  - **Gold**: Universal currency from wins (+10-50), plunder nodes (e.g., "gold veins"), tunnel caches, or quests. Spent in armories, War Bets, or mobilization costs.
  - **Essence Crystals**: Mystical, from high-altitude territories (e.g., Himalayas). Infuse cards for upgrades (e.g., +Luck) or stat boosts.
  - **Ancient Bones**: Defensive, from forested Hearts zones (e.g., Pacific Northwest). Fortify territories or craft HP trophies.
  - **Volcanic Ash**: Offensive, from Spades mountains (e.g., Andes). Enhance suit damage or War Bets.
  - **Swamp Herbs**: Utility, from Diamonds swamps (e.g., Amazon). Brew potions for scouting/healing.
- **Impact**: Adds risk-reward to sieges (e.g., big bets for resurrection). Ties to War Trophies (e.g., "Lucky Coin" boosts bet buffs).

### 6. War Trophies (Relics)
- **Cryptid Artifacts**: Passive/triggered effects (e.g., "Yeti Skull" for +Spades damage, "Lucky Fang" for Battle Honor boosts). Gained via Clashes, ambushes, armories, or War Bets. Cap at 5-10 per siege.
- **Synergies**: Amplify Bigfoot stats, suit abilities, Battle Honor, and War Bets. Themed to cryptid lore (e.g., "Swamp Totem" for Hearts buffs). AI gains trophies for difficulty.
- **Meta-Progression**: Unlock starter trophy slots or specific trophies via campaign progress.

### 7. Secret Societies
- **Role**: Shadowy human factions (e.g., "Veil Keepers," "Loosh Harvesters") who monitor the Bigfoot War from tunnels, fomenting conflict to harvest Loosh (psychic residue from battles). They run Black Market Armories, War Bets (as the "House"), bounties, quests, and underground arena battles, using players as proxies to collect relics/items and Loosh.
- **Bounties**: Post "clan lord bounties" (e.g., "Hunt Himalayan Yeti Chief for 200 gold + relic"). Scale with war economy; completing foments chaos (e.g., weakens AI territories but raises costs).
- **Quests**: Multi-step chains (e.g., "Retrieve relic from Spades mountains"). Foment war by targeting contested zones; rewards include resources or codex unlocks.
- **Underground Arena Battles**: Society-hosted duels vs. AI gladiators (3-round brackets). Entry costs gold/Loosh; harvests extra Loosh from Clashes. Rewards top ranks with exclusive trophies.
- **Collecting Relics/Items and Loosh**: Seek specific trophies/items (e.g., "Deliver Volcanic Ash relic"); players extract during sieges. Loosh generated post-Clash (+5/win, +20/Epic Clash); trade for buffs (e.g., -mobilization costs).
- **Monitoring and Fomenting**: Spy via tunnels (e.g., warn of revolts for Loosh); leak intel to stoke rivalries (e.g., +AI aggression for bigger Loosh yields). Keep records in a "Cryptid Codex" (meta-UI with procedural entries).

### 8. NFT Integration (Optional)
- **Dynamic NFTs**: Cards, Bigfoots, or War Trophies with high Battle Honor or siege milestones mint as ERC-721 dNFTs (Polygon/Sui). Metadata updates on-chain (e.g., evolving art/stats). Conquered cards/resources or bet wins as mintable NFTs.
- **Minting**: Milestones (e.g., 10 Epic Wins, siege completions, big bets); costs gold or crypto. Perks: unique passives, hybrid breeding.
- **Economy**: Trade on marketplaces (e.g., OpenSea). Rarity based on Battle Honor/siege difficulty; cross-game utility.
- **Accessibility**: Blockchain optional; WalletConnect for browser integration.

### 9. Progression, Campaign, and Replayability
- **Territory Sieges**: Campaigns across War Front Map or Subterranean War Tunnels. Encounters: Clashes (War resolves), ambushes, armories, War Bets, trophy nodes. Territory choices influence difficulty (e.g., Himalayas for tough Yeti clan lords). 
- **Campaign Mode**: Story-driven arcs in sieges (e.g., "Unite the Cryptids") with AI clan lords, conquests, and unlocks.
- **Battle Experience (XP)**: Earn from Clashes (+10), Epic Clashes (+50), siege completions (+100), War Bets (+bonus). Levels (1-10) unlock Bigfoot stat points, passives, or visuals. Meta-progression for unlocks (Bigfoots, War Trophies, territories).
- **Daily/Quests**: Reward gold/resources (e.g., "Conquer territory," "Win 3 War Bets").
- **Replayability**: AI variety, procedural maps/art (JS algorithms), Battle Honor narratives, seasonal events, trophy/War Bet synergies.

## Technical Outline
- **Frontend**: React for UI (war party builder, War Front Map, armories, trophy displays), Phaser.js for animations and procedural visuals, p5.js for 2D procedural gen. Optimize for 60fps, low-latency Clashes/War Bets.
- **Backend**: Node.js for AI logic (minimax for hard mode), Firebase for saves, WebSockets for events (e.g., seasonal modifiers).
- **Blockchain**: Polygon/Sui for dNFT minting. Smart contracts verify Battle Honor/trophy data. IPFS for metadata.
- **Procedural Art**: AI-generated via Stable Diffusion, refined in Photopea. Noise (backgrounds), layered sprites (creatures), L-systems (details) using p5.js. Sprite sheets for animations.
- **Accessibility**: Keyboard navigation, color-blind modes, haptic feedback (Vibration API). Save via IndexedDB; shareable replays via URL params.

## Art and Audio
- **Visual Style**: Polished 2D cryptozoological aesthetic—lush forests, snowy peaks, swampy bogs, eerie tunnels. Cards/Bigfoots/War Trophies with AI-generated 2D artwork and sprite animations (e.g., Hearts glow, Spades sparks). War Front Map with dynamic territories/tunnels (e.g., banners for conquered zones).
- **Audio**: Bigfoot roars, ambient nature (howls, leaves), tunnel echoes. UI cues for Clashes/War Bets (e.g., coin clinks).
- **Tone**: Playful yet epic, balancing humor (quirky Bigfoot antics) with tension (Clashes, War Bets, conquest risks).

## Monetization
- **Free-to-Play Base**: Earn cards/gold/resources/War Trophies via gameplay, sieges, War Bets.
- **Optional Purchases**: Cosmetic skins, premium packs, NFT minting fees (fiat/crypto).
- **NFT Economy**: Royalties on secondary sales, tradeable cards/Bigfoots/War Trophies for high-Battle Honor performers. Blockchain optional.

## Next Steps
- **Prototyping**: CodePen demo for Clash loop, suit abilities, Battle Honor, Territory Sieges (map/tunnels), War Bets, and War Trophies.
- **Balance Testing**: Simulate Battle Honor, suit synergies, War Bet outcomes, trophy balance, siege difficulty, stat impacts, and resource yields.
- **Iteration**: Explore async PvP (e.g., territory invasions), deeper campaign arcs, sample Bigfoot rosters with stats, or hybrid modes (e.g., co-op PvE).
- **Community**: Share on X for feedback; add social features (e.g., Battle Honor sharing).




# Bigfoot War: Game Design Document

## Overview
**Bigfoot War** is a single-player, web-based card game where players control a Bigfoot Warlord leading a clan in a territorial war against AI-controlled rival Bigfoot Warlord clans. Thematically centered on global cryptids (e.g., Sasquatch, Yeti, Agogwe, Hibagon, Mapinguary), it blends simple War-inspired mechanics with strategic depth via suit-based abilities with elemental properties, Battle Honor (luck-tracking) for cards, War Trophies (relics), and pre-game War Bets with gold. Built for browsers (using React/Phaser.js), the game targets quick, engaging sessions (5-15 minutes) with polished 2D visuals and immersive Bigfoot-themed animations. Roguelike deckbuilder elements frame gameplay as "Territory Sieges" across a War Front Map of regions controlled by enemy Bigfoots, with integrated tunnel paths hosting Black Market Armories. Players conquer territories for unlocks and build decks to expand their empire. Territory Sieges require mobilization costs, gating expansion based on the player's empire and Bigfoot stats.

**Genre**: Digital Card Game, Strategy, Collectible, Roguelike Deckbuilder  
**Platform**: Web (mobile/desktop browsers)  
**Target Audience**: Casual gamers, card game enthusiasts, crypto/NFT collectors (13+, with optional blockchain features)  
**Core Loop**: Select a Bigfoot character with unique stats, embark on Territory Sieges through the War Front Map (pay mobilization costs, build/upgrade war party deck via Clashes, War Bets, and War Trophies), conquer territories for unlocks, and gain meta-progression for future campaigns.

## Core Gameplay
Players and the AI each control a Bigfoot character with unique stats (HP, Luck, Strength, Agility, Wisdom, Gold Find) leading a 30-40 card "war party" (deck of Bigfoot warriors). The game follows a War-inspired structure with strategic layers, enhanced by roguelike sieges, War Trophies, and War Bets:

- **War Party (Deck) and Cards**: Each card has a rank (2-Ace) and a suit (Hearts, Spades, Diamonds, Clubs) with implied elemental properties (e.g., Hearts as forest-like healing, Spades as mountain-like offense). Cards represent Bigfoots with thematic abilities tied to suits or archetypes (e.g., evasive Dwarfs, tanky Squatches). Variations include hybrid suits or generated combos (e.g., "Fiery Hearts Agogwe").
- **Clash Mechanics (Rounds)**: Simultaneous card reveals in frontline battles. Higher rank wins the pot (cards to winner’s discard). Winner deals damage to opponent’s health pool (base 100 HP, modified by Bigfoot stats). Ties trigger "Epic Clash Mode": Play 3 face-down cards, reveal 4th, sum ranks for massive damage.
- **Suit-Based Abilities**: Suits trigger effects on wins, with implied elemental flavor:
  - **Hearts (Forest/Healing)**: Heal 5-10 HP or buff draws (e.g., +1 card next Clash).
  - **Spades (Mountain/Offense)**: Deal extra damage (e.g., 2x rank) or debuff (e.g., skip AI turn).
  - **Diamonds (Swamp/Utility)**: Steal cards or scout opponent’s deck.
  - **Clubs (Jungle/Control)**: Stun AI or apply multi-round damage.
- **Territory Sieges (Roguelike Runs)**: Structured as campaigns across a War Front Map of territories (e.g., Pacific Northwest for Sasquatch, Himalayas for Yeti). Start with basic war party after paying mobilization costs; encounters (Clashes, ambushes, armories, War Bets) offer upgrades (add/remove/evolve cards). 
- **Mobilization Costs for Sieges**: Upfront fees (paid in gold) to launch sieges, representing troop readiness. Base minimum (e.g., 50 gold for adjacent territories) + modifiers based on player (e.g., Bigfoot stats/Battle Honor) and empire size. Success refunds partial costs + plunder; failure wastes supplies. Gating encourages strategic expansion.
- **War Bets (Gold)**: Before Clashes or sieges, pick a wager (e.g., 10-100 gold for fixed buffs like +damage or risks like -HP). Outcomes fixed (e.g., "Sasquatch Ritual: Bet 50 gold for +20% Clash damage"). Offered in armories by secret societies, who set odds and rewards. Gold gathered from wins, plunder nodes, or caches.
- **War Trophies (Relics)**: Passive/triggered effects (e.g., "Yeti Skull" for +Spades damage, "Lucky Fang" for Battle Honor boosts). Gained via Clashes, ambushes, armories, or War Bets. Cap at 5-10 per siege.
- **Objective**: Reduce AI’s HP to 0 in Clashes while surviving siege thresholds (e.g., defeat clan lord). Conquer territories for unlocks; AI adapts (easy: random plays; hard: predicts based on war party/trophies).

## Key Features
### 1. Bigfoot Character Selection and Progression
- **Selection**: Pick from unlocked Bigfoots in the lobby or pre-siege (gallery with profiles, lore snippets, 2D portraits). Options include quiz/RNG suggestions or siege commitment. Defaults to favorites or last used. Players start with default "Sasquatch" as a balanced intro character.
- **Stats**: Each Bigfoot has unique stats (1-10 scale, modified by Battle Experience/levels):
  - **HP**: Base health pool (e.g., 100-120; tanky Squatches high).
  - **Luck**: Boosts Battle Honor gains (e.g., +20% Epic Win chance; agile Agogwe high).
  - **Strength**: Enhances suit damage (e.g., +1 for Spades; aggressive Sasquatches high).
  - **Agility**: Improves draws/Clashes (e.g., +1 card in ties; evasive Dwarfs high).
  - **Wisdom**: Boosts War Trophy effects (e.g., +effect duration; lore-heavy Yetis high).
  - **Gold Find**: Increases gold from nodes/wins (e.g., +10%; resourceful Mapinguary high).
- **Progression**: Earn Battle Experience (XP) from Clashes (+10), Epic Clashes (+50), siege completions (+100), or War Bets (+bonus). Levels (1-10) unlock stat points, enhanced passives, visuals (e.g., evolving portraits), or perks (e.g., suit mastery %). Meta-progression persists for unlocks (Bigfoots, War Trophies, territories).
- **Unlocks**: Start with basics (e.g., Neutral Sasquatch). Unlock via achievements (e.g., win milestones), AI clan lord captures, or territory conquests. Rarity tiers; procedural discovery in sieges.
- **Gameplay Impact**: Stats bias war party/playstyle (e.g., high Luck boosts War Bet odds). Sets battlefield visuals/narrative; absorbs Battle Honor for buffs. Influences siege paths and costs (e.g., high Strength lowers mobilization fees for aggressive sieges).

### 2. War Party Building and Card Collection
- **War Party Building**: Customize pre-siege with 30-40 card limit, mixing suits or archetypes (synergies highlighted in UI). Unlock slots/perks via meta-progression. Mid-siege upgrades via Clashes, armory purchases, or War Bet rewards. Ties to conquest: Conquered territories unlock local cards (e.g., Himalayas for Yeti variants); exploration nodes (scout/ambush) yield recruits.
- **Card Pool**: 150-200 base cards, with variations (e.g., hybrid suits like "Fiery Hearts"). Each Bigfoot has default suits; rarer combos via unlocks or conquests. Rarity: Common to Legendary. Card choices constrained to locales/conquests—start limited to home territory (e.g., Sasquatch cards), unlock via empire expansion (e.g., max 50% foreign cards until integrated).
- **Collection and Conquering**: Starter war party (20-30 cards). Methods:
  - Achievements for gold (spend in armories).
  - Conquering territories (e.g., plunder nodes yield cards; Himalayan conquests unlock Yeti cards).
  - Crafting/fusing duplicates for variations/upgrades.
  - Daily quests, events, AI clan lord captures, or War Bet wins.
  - Recruiting in armories (e.g., hire cards for gold, with temporary buffs).
- **Card Loss and Retrieval**: Rare card loss in siege failures or high-risk War Bets. Retrieval automatic via meta-progress (e.g., ransom with gold) or Battle Honor-triggered evolutions; no separate missions.
- **Visuals**: Cards feature polished 2D Bigfoot artwork (AI-generated via Stable Diffusion, refined in Photopea) with suit-themed backgrounds (e.g., jungles, mountains). Animations (via Phaser.js) for Clashes (e.g., Spades rockslides). Procedural art via noise (backgrounds), layered sprites (creatures), L-systems (details) using p5.js.

### 3. War Front Map
- **War Front Map**: Procedural globe/continent view (JS noise gen) with territories controlled by rival Bigfoot clans (e.g., Himalayas for Yeti, Pacific Northwest for Sasquatch). Sieges start by selecting territories (after paying mobilization costs), facing themed AI clan lords and ambushes (e.g., avalanches in snowy zones). Conquered territories yield buffs (e.g., +Gold Find) and unlock adjacent zones. Integrated tunnel paths offer riskier shortcuts with treasure-heavy nodes (e.g., limited-visibility Clashes, caches).
- **Territory Control**: Conquer by completing sieges (defeat clan lord). Territories auto-maintain stability; overexpansion increases AI difficulty in distant zones rather than triggering separate revolts.
- **Black Market Armories**: Hubs in tunnel paths to spend gold for cards, War Trophies, or upgrades. Run by secret societies (NPCs with lore flavor), offering War Bets and cryptic hints.

### 4. Battle Honor System (Luck-Tracking)
- Each card tracks a "Battle Honor Profile":
  - **Metrics**: Wins, Losses, Win Rate, Epic Wins (clutch ties), Key Wins (decisive rounds), Epic Losses (humiliating defeats), Streaks, Suit Synergies.
  - **Impact**: High-honor cards gain "War Scars" (glow, buffs like +1 rank in ties). Low-honor cards add risk-reward. Boosts War Bet outcomes (e.g., +odds for buffs). Resets per siege; persists in meta.
- UI: War party viewer shows Battle Honor (bars, badges). Backend (Node.js/Firebase) syncs; localStorage for offline.

### 5. War Bets (Gold)
- **Mechanics**: Before Clashes/sieges, pick a wager (e.g., 10-100 gold for fixed buffs like +damage or risks like -HP). Outcomes fixed (e.g., "Yeti Ritual: Bet 50 gold for +20% Clash damage"). Offered in armories by secret societies, who set odds and provide rewards. Gold gathered from wins, plunder nodes, or caches.
- **Gold and Resource Gathering**:
  - **Gold**: Universal currency from wins (+10-50), plunder nodes (e.g., "gold veins"), or quests. Spent in armories, War Bets, or mobilization costs.
  - **Cryptid Essence**: Rare resource from Epic Wins or high-altitude territories. Infuse cards for upgrades (e.g., +Luck) or stat boosts.
- **Impact**: Adds risk-reward to sieges (e.g., big bets for resurrection). Ties to War Trophies (e.g., "Lucky Coin" boosts bet buffs).

### 6. War Trophies (Relics)
- **Cryptid Artifacts**: Passive/triggered effects (e.g., "Yeti Skull" for +Spades damage, "Lucky Fang" for Battle Honor boosts). Gained via Clashes, ambushes, armories, or War Bets. Cap at 5-10 per siege.
- **Synergies**: Amplify Bigfoot stats, suit abilities, Battle Honor, and War Bets. Themed to cryptid lore (e.g., "Swamp Totem" for Hearts buffs). AI gains trophies for difficulty.
- **Meta-Progression**: Unlock starter trophy slots or specific trophies via campaign progress.

### 7. Secret Societies
- **Role**: Shadowy NPC factions in armories who offer War Bets, sell upgrades, and provide lore flavor (e.g., cryptic hints about "Loosh" from battles).

### 8. NFT Integration (Optional)
- **Dynamic NFTs**: Cards, Bigfoots, or War Trophies with high Battle Honor or siege milestones mint as ERC-721 dNFTs (Polygon/Sui). Metadata updates on-chain (e.g., evolving art/stats). Conquered cards or bet wins as mintable NFTs.
- **Minting**: Milestones (e.g., 10 Epic Wins, siege completions, big bets); costs gold or crypto. Perks: unique passives, hybrid breeding.
- **Economy**: Trade on marketplaces (e.g., OpenSea). Rarity based on Battle Honor/siege difficulty; cross-game utility.
- **Accessibility**: Blockchain optional; WalletConnect for browser integration.

### 9. Progression, Campaign, and Replayability
- **Territory Sieges**: Campaigns across War Front Map. Encounters: Clashes (War resolves), ambushes, armories, War Bets, trophy nodes. Territory choices influence difficulty (e.g., Himalayas for tough Yeti clan lords).
- **Campaign Mode**: Story-driven arcs in sieges (e.g., "Unite the Cryptids") with AI clan lords, conquests, and unlocks.
- **Battle Experience (XP)**: Earn from Clashes (+10), Epic Clashes (+50), siege completions (+100), War Bets (+bonus). Levels (1-10) unlock Bigfoot stat points, passives, or visuals. Meta-progression for unlocks (Bigfoots, War Trophies, territories).
- **Daily/Quests**: Reward gold/essence (e.g., "Conquer territory," "Win 3 War Bets").
- **Replayability**: AI variety, procedural maps/art (JS algorithms), Battle Honor narratives, seasonal events, trophy/War Bet synergies.

## Technical Outline
- **Frontend**: React for UI (war party builder, War Front Map, armories, trophy displays), Phaser.js for animations and procedural visuals, p5.js for 2D procedural gen. Optimize for 60fps, low-latency Clashes/War Bets.
- **Backend**: Node.js for AI logic (minimax for hard mode), Firebase for saves, WebSockets for events (e.g., seasonal modifiers).
- **Blockchain**: Polygon/Sui for dNFT minting. Smart contracts verify Battle Honor/trophy data. IPFS for metadata.
- **Procedural Art**: AI-generated via Stable Diffusion, refined in Photopea. Noise (backgrounds), layered sprites (creatures), L-systems (details) using p5.js. Sprite sheets for animations.
- **Accessibility**: Keyboard navigation, color-blind modes, haptic feedback (Vibration API). Save via IndexedDB; shareable replays via URL params.

## Art and Audio
- **Visual Style**: Polished 2D cryptozoological aesthetic—lush forests, snowy peaks, swampy bogs, eerie tunnels. Cards/Bigfoots/War Trophies with AI-generated 2D artwork and sprite animations (e.g., Hearts glow, Spades sparks). War Front Map with dynamic territories (e.g., banners for conquered zones).
- **Audio**: Bigfoot roars, ambient nature (howls, leaves), tunnel echoes. UI cues for Clashes/War Bets (e.g., coin clinks).
- **Tone**: Playful yet epic, balancing humor (quirky Bigfoot antics) with tension (Clashes, War Bets, conquest risks).

## Monetization
- **Free-to-Play Base**: Earn cards/gold/essence/War Trophies via gameplay, sieges, War Bets.
- **Optional Purchases**: Cosmetic skins, premium packs, NFT minting fees (fiat/crypto).
- **NFT Economy**: Royalties on secondary sales, tradeable cards/Bigfoots/War Trophies for high-Battle Honor performers. Blockchain optional.

## Next Steps
- **Prototyping**: CodePen demo for Clash loop, suit abilities, Battle Honor, Territory Sieges (map with tunnels), War Bets, and War Trophies.
- **Balance Testing**: Simulate Battle Honor, suit synergies, War Bet outcomes, trophy balance, siege difficulty, stat impacts, and gold/essence yields.
- **Iteration**: Explore async PvP (e.g., territory invasions), deeper campaign arcs, sample Bigfoot rosters with stats, or hybrid modes (e.g., co-op PvE).
- **Community**: Share on X for feedback; add social features (e.g., Battle Honor sharing).
