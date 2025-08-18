// lib/bigfoots.ts
export interface Bigfoot {
  name: string;
  type: "Dwarf" | "Giant" | "Squatch";
  location: string | string[];
  habitat: string[];
  description: string;
  stats: {
    health: number; // Base, scales with level
    damage: number;
    luck: number; // Percentage
  };
  passive: { name: string; effect: string };
  aiPersonality: {
    type: "Aggressive" | "Defensive" | "Tricky";
    grabChance: number;
    smashChance: number;
    defendChance: number;
    warBetMultiplier: number; // Higher for Tricky
  };
  attacks: {
    Hearts: { name: string; effect: string };
    Spades: { name: string; effect: string };
    Diamonds: { name: string; effect: string };
    Clubs: { name: string; effect: string };
    cardNumbers: {
      [rank: string]: { name: string; effect: string };
    };
  };
  environmentBonus: {
    habitats: string[];
    damageBoost: number; // Percentage
  };
}

export const bigfoots: Bigfoot[] = [
  {
    name: "Agogwe",
    type: "Dwarf",
    location: "Tanzania",
    habitat: [
      "Dense tropical rainforests of Tanzania, rich with towering canopies.",
      "Thick, swampy marshlands near the Zambezi River.",
      "Remote mountainous woodlands with heavy mist and limited visibility.",
    ],
    description:
      "A small, elusive humanoid covered in coarse hair. The Agogwe moves swiftly through Tanzania’s dense forests, vanishing in the blink of an eye. Known for its cunning, it toys with intruders using the jungle’s cover.",
    stats: {
      health: 80, // Dwarf: Lower base health
      damage: 10,
      luck: 25, // Dwarf: Higher base luck
    },
    passive: {
      name: "Jungle Mirage",
      effect: "10% chance to evade attacks per turn, reflecting the Agogwe’s elusive nature.",
    },
    aiPersonality: {
      type: "Tricky",
      grabChance: 0.5, // 50% Grab
      smashChance: 0.3, // 30% Smash
      defendChance: 0.2, // 20% Defend
      warBetMultiplier: 3, // High bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Forest Veil",
        effect: "Increases evasion by 15% for 2 turns, blending into the jungle.",
      },
      Spades: {
        name: "Shadow Dart",
        effect: "Throws a dart from the shadows, dealing 3 damage and reducing enemy accuracy by 10% for 2 turns.",
      },
      Diamonds: {
        name: "Jungle Ambush",
        effect: "Strikes from hiding, dealing double damage on the next attack.",
      },
      Clubs: {
        name: "Branch Snare",
        effect: "Entangles the opponent with vines, stunning them for 1 turn.",
      },
      cardNumbers: {
        "2-10": {
          name: "Swift Strike",
          effect: "Damage scales with card number (2–10), increased by 10% in jungle habitats.",
        },
        Jack: {
          name: "Trickster’s Feint",
          effect: "Deals moderate damage and swaps the player’s card with a random one from the deck.",
        },
        Queen: {
          name: "Forest Gambit",
          effect: "Deals AoE damage to all enemies and increases Agogwe’s Luck by 10% for 2 turns.",
        },
        King: {
          name: "Master of the Canopy",
          effect: "Gains a permanent 10% damage buff in jungle habitats.",
        },
        Ace: {
          name: "Phantom Rush",
          effect: "Deals massive damage to all enemies and grants 20% evasion for 2 turns.",
        },
        Joker: {
          name: "Wild Mirage",
          effect: "Randomly evades all damage or deals triple damage to a single enemy.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Dense tropical rainforests of Tanzania, rich with towering canopies.",
        "Thick, swampy marshlands near the Zambezi River.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Argopelter",
    type: "Dwarf",
    location: "Oregon",
    habitat: [
      "Hollow trunks of ancient coniferous trees deep within the Oregon wilderness.",
      "Rocky hillsides lined with Douglas fir and spruce, where they can ambush from above.",
      "Fog-covered forest floors, hidden among thick underbrush.",
    ],
    description:
      "A wiry, mischievous creature that inhabits hollow trees in Oregon’s wilderness. The Argopelter is notorious for ambushing trespassers, hurling wood splinters and branches with deadly precision using its whip-like arms, causing chaos in its forested domain.",
    stats: {
      health: 80, // Dwarf: Lower base health
      damage: 10,
      luck: 25, // Dwarf: Higher base luck
    },
    passive: {
      name: "Splinter Barrage",
      effect: "10% chance on Smash to deal bonus splash damage to all enemies, reflecting the Argopelter’s chaotic projectile attacks.",
    },
    aiPersonality: {
      type: "Aggressive",
      grabChance: 0.4, // 40% Grab
      smashChance: 0.6, // 60% Smash
      defendChance: 0, // No Defend
      warBetMultiplier: 1, // Standard bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Wooden Barricade",
        effect: "Creates a shield of wood, reducing incoming damage by 20% for 2 turns.",
      },
      Spades: {
        name: "Splinter Volley",
        effect: "Hurls a volley of sharp splinters, dealing 3 damage and reducing enemy defense by 10% for 2 turns.",
      },
      Diamonds: {
        name: "Precision Toss",
        effect: "Throws a single, well-aimed branch, dealing high damage to one target.",
      },
      Clubs: {
        name: "Timber Slam",
        effect: "Slams a heavy branch into the ground, stunning one enemy for 1 turn.",
      },
      cardNumbers: {
        "2-10": {
          name: "Branch Toss",
          effect: "Damage scales with card number (2–10), increased by 10% in forest habitats.",
        },
        Jack: {
          name: "Rapid Barrage",
          effect: "Launches multiple small branches, dealing moderate damage to one enemy with a 20% chance to hit an additional target.",
        },
        Queen: {
          name: "Forest Frenzy",
          effect: "Deals AoE damage by scattering debris, with a 25% chance to reduce all enemies’ attack by 10%.",
        },
        King: {
          name: "Lord of the Hollows",
          effect: "Gains a permanent 10% damage buff in forest habitats.",
        },
        Ace: {
          name: "Catastrophic Volley",
          effect: "Unleashes a massive barrage of branches, dealing high AoE damage and reducing enemy defense by 15%.",
        },
        Joker: {
          name: "Chaos Toss",
          effect: "Randomly deals massive damage to one enemy or moderate damage to all enemies, with a 25% chance to stun.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Hollow trunks of ancient coniferous trees deep within the Oregon wilderness.",
        "Fog-covered forest floors, hidden among thick underbrush.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Barbegazi",
    type: "Dwarf",
    location: "Swiss-French Alps",
    habitat: [
      "Snow-capped peaks of the Swiss-French Alps, in the narrow crevices of glacial ice.",
      "Remote high-altitude caves, hidden beneath layers of ice and rock.",
      "Wind-swept cliffsides, covered in deep, untrodden snowbanks.",
    ],
    description:
      "Small, gnome-like creatures adapted to the cold, using their large feet as snowshoes or skis. Barbegazi are shy but known for aiding travelers caught in avalanches, guiding them to safety in the Swiss-French Alps’ icy landscapes.",
    stats: {
      health: 80, // Dwarf: Lower base health
      damage: 10,
      luck: 25, // Dwarf: Higher base luck
    },
    passive: {
      name: "Snowshoe Grace",
      effect: "Reduces stun duration by 50%, reflecting the Barbegazi’s nimble navigation in snowy terrains.",
    },
    aiPersonality: {
      type: "Defensive",
      grabChance: 0.8, // 80% Grab
      smashChance: 0.2, // 20% Smash
      defendChance: 0.5, // 50% Defend when Health < 50%
      warBetMultiplier: 1, // Standard bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Frost Shelter",
        effect: "Heals Barbegazi by 10 HP and grants 5 HP regeneration per turn for 2 turns.",
      },
      Spades: {
        name: "Chill Snap",
        effect: "Releases a cold gust, dealing 3 damage and slowing enemy attack speed by 15% for 2 turns.",
      },
      Diamonds: {
        name: "Snow Surge",
        effect: "Triggers a snowy surge, dealing moderate AoE damage and reducing enemy movement speed by 10%.",
      },
      Clubs: {
        name: "Ice Wall",
        effect: "Erects a barrier of ice, blocking 15 damage for 1 turn.",
      },
      cardNumbers: {
        "2-10": {
          name: "Frost Strike",
          effect: "Damage scales with card number (2–10), increased by 10% in snowy habitats.",
        },
        Jack: {
          name: "Glacial Jab",
          effect: "Deals moderate damage and slows one enemy’s attack speed by 20% for 2 turns.",
        },
        Queen: {
          name: "Blizzard Veil",
          effect: "Deals AoE ice damage and grants Barbegazi a 10% damage reduction shield for 2 turns.",
        },
        King: {
          name: "Alpine Guardian",
          effect: "Gains a permanent 10% damage buff in snowy habitats.",
        },
        Ace: {
          name: "Avalanche Rush",
          effect: "Deals massive AoE ice damage and slows all enemies’ attack speed by 20% for 2 turns.",
        },
        Joker: {
          name: "Frost Chaos",
          effect: "Randomly heals Barbegazi for 20 HP or deals moderate AoE ice damage with a 25% chance to slow enemies.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Snow-capped peaks of the Swiss-French Alps, in the narrow crevices of glacial ice.",
        "Wind-swept cliffsides, covered in deep, untrodden snowbanks.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },


  {
    name: "Didi",
    type: "Dwarf",
    location: "Guyana",
    habitat: [
      "Volcanic plateaus with sparse vegetation and rocky outcrops in Guyana.",
      "Foothills near volcanic mountains where steaming geysers erupt.",
      "Dense, high-altitude jungle fringes, where tree canopies break into volcanic rock.",
    ],
    description:
      "Known as the 'Monkey King,' the Didi is a 5-foot-tall, ape-like creature wielding primitive clubs. Ruling Guyana’s volcanic jungles with intelligence and cunning, it manipulates foes with tactical strikes, turning enemies against each other.",
    stats: {
      health: 80, // Dwarf: Lower base health
      damage: 10,
      luck: 25, // Dwarf: Higher base luck
    },
    passive: {
      name: "Monkey King’s Cunning",
      effect: "10% chance to redirect an enemy’s attack to another enemy, reflecting the Didi’s intelligent manipulation.",
    },
    aiPersonality: {
      type: "Tricky",
      grabChance: 0.5, // 50% Grab
      smashChance: 0.3, // 30% Smash
      defendChance: 0.2, // 20% Defend
      warBetMultiplier: 3, // High bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Trickster’s Ward",
        effect: "Increases luck by 15% for 2 turns, enhancing the Didi’s cunning tactics.",
      },
      Spades: {
        name: "Club Toss",
        effect: "Throws a club, dealing 3 damage and reducing enemy attack power by 10% for 2 turns.",
      },
      Diamonds: {
        name: "Royal Bash",
        effect: "Delivers a powerful club strike, dealing high single-target critical damage.",
      },
      Clubs: {
        name: "Deceptive Strike",
        effect: "Deals 4 damage and redirects the enemy’s next attack to a random target (ally or enemy).",
      },
      cardNumbers: {
        "2-10": {
          name: "Club Strike",
          effect: "Damage scales with card number (2–10), increased by 10% in volcanic or jungle habitats.",
        },
        Jack: {
          name: "Feinted Blow",
          effect: "Deals moderate damage and reduces enemy attack power by 15% for 2 turns.",
        },
        Queen: {
          name: "King’s Gambit",
          effect: "Deals AoE damage and redirects one enemy’s next attack to another enemy.",
        },
        King: {
          name: "Monkey King’s Rule",
          effect: "Gains a permanent 10% damage buff in volcanic or jungle habitats.",
        },
        Ace: {
          name: "Sovereign Smash",
          effect: "Deals massive single-target damage and reduces enemy attack power by 20% for 2 turns.",
        },
        Joker: {
          name: "Cunning Chaos",
          effect: "Randomly deals moderate AoE damage or redirects all enemies’ next attacks to random targets.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Volcanic plateaus with sparse vegetation and rocky outcrops in Guyana.",
        "Dense, high-altitude jungle fringes, where tree canopies break into volcanic rock.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Hibagon",
    type: "Dwarf",
    location: "Japan",
    habitat: [
      "Dense bamboo forests at the base of Mount Hiba in Hiroshima Prefecture.",
      "Steep mountain slopes dotted with hot springs and scattered foliage.",
      "Misty, evergreen forests where light barely penetrates the thick canopy.",
    ],
    description:
      "Smaller than North America’s Bigfoot, the Hibagon is an aggressive, foul-smelling creature with ape-like features. Known for walking on all fours, it terrorizes Hiroshima Prefecture’s forests, its stench disorienting intruders before it strikes with fearsome force.",
    stats: {
      health: 80, // Dwarf: Lower base health
      damage: 10,
      luck: 25, // Dwarf: Higher base luck
    },
    passive: {
      name: "Foul Odor",
      effect: "Enemies have -5% critical hit chance per turn due to the Hibagon’s stench, reflecting its disorienting presence.",
    },
    aiPersonality: {
      type: "Aggressive",
      grabChance: 0.4, // 40% Grab
      smashChance: 0.6, // 60% Smash
      defendChance: 0, // No Defend
      warBetMultiplier: 1, // Standard bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Bamboo Aegis",
        effect: "Increases defense by 20% for 2 turns, fortifying Hibagon with bamboo armor.",
      },
      Spades: {
        name: "Stench Cloud",
        effect: "Releases a noxious cloud, dealing 3 damage and causing 20% chance of enemy confusion (randomized actions) for 2 turns.",
      },
      Diamonds: {
        name: "Frenzied Charge",
        effect: "Charges with all-fours speed, dealing high single-target damage.",
      },
      Clubs: {
        name: "Ground Quake",
        effect: "Slams the ground, dealing 4 damage and reducing enemy accuracy by 15% for 2 turns.",
      },
      cardNumbers: {
        "2-10": {
          name: "Feral Strike",
          effect: "Damage scales with card number (2–10), increased by 10% in forest habitats.",
        },
        Jack: {
          name: "Wild Lunge",
          effect: "Deals moderate damage and reduces enemy critical hit chance by 10% for 2 turns.",
        },
        Queen: {
          name: "Odor Surge",
          effect: "Deals AoE damage and increases enemy confusion chance by 15% for 2 turns.",
        },
        King: {
          name: "Lord of the Bamboo",
          effect: "Gains a permanent 10% damage buff in forest habitats.",
        },
        Ace: {
          name: "Beast’s Onslaught",
          effect: "Deals massive single-target damage and reduces enemy accuracy by 20% for 2 turns.",
        },
        Joker: {
          name: "Chaos Stench",
          effect: "Randomly deals moderate AoE damage or causes all enemies to miss their next attack due to confusion.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Dense bamboo forests at the base of Mount Hiba in Hiroshima Prefecture.",
        "Misty, evergreen forests where light barely penetrates the thick canopy.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Ine Weu",
    type: "Dwarf",
    location: "Indonesia",
    habitat: [
      "Steamy, shadowy jungle caverns deep within the island of Flores.",
      "Riverbanks covered in thick jungle, hidden from human trails.",
      "Limestone caves on the volcanic slopes of Indonesian jungles.",
    ],
    description:
      "Small humanoids with long earlobes and hairy bodies, Ine Weu are elusive shape-shifters known for supernatural transformations. Blending seamlessly into the jungles of Flores, they avoid human interaction, using their mimicry to confuse and outwit intruders.",
    stats: {
      health: 80, // Dwarf: Lower base health
      damage: 10,
      luck: 25, // Dwarf: Higher base luck
    },
    passive: {
      name: "Shape-Shifter’s Guise",
      effect: "10% chance to copy the enemy’s passive effect for 1 turn, reflecting Ine Weu’s transformative abilities.",
    },
    aiPersonality: {
      type: "Tricky",
      grabChance: 0.5, // 50% Grab
      smashChance: 0.3, // 30% Smash
      defendChance: 0.2, // 20% Defend
      warBetMultiplier: 3, // High bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Mimic Veil",
        effect: "Copies the enemy’s defense stat for 2 turns, enhancing Ine Weu’s resilience.",
      },
      Spades: {
        name: "Phantom Swipe",
        effect: "Deals 3 damage and mimics the effect of the enemy’s last attack (scaled to Ine Weu’s stats).",
      },
      Diamonds: {
        name: "Stealth Strike",
        effect: "Strikes from stealth, dealing high critical damage to one target.",
      },
      Clubs: {
        name: "Form Flux",
        effect: "Swaps Ine Weu’s attack stat with the enemy’s for 1 turn, disrupting their strategy.",
      },
      cardNumbers: {
        "2-10": {
          name: "Shadow Mimic",
          effect: "Damage scales with card number (2–10), increased by 10% in jungle cave habitats.",
        },
        Jack: {
          name: "Echo Slash",
          effect: "Deals moderate damage and copies the enemy’s last card effect (e.g., stun, debuff) for 1 turn.",
        },
        Queen: {
          name: "Mirage Barrage",
          effect: "Deals AoE damage and mimics one random enemy stat (attack, defense, or luck) for 2 turns.",
        },
        King: {
          name: "Master of Forms",
          effect: "Gains a permanent 10% damage buff in jungle cave habitats.",
        },
        Ace: {
          name: "Primal Shift",
          effect: "Deals massive single-target damage and fully copies the enemy’s passive for 1 turn.",
        },
        Joker: {
          name: "Chaos Morph",
          effect: "Randomly deals moderate AoE damage or copies a random enemy attack, with a 25% chance to apply the copied effect.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Steamy, shadowy jungle caverns deep within the island of Flores.",
        "Limestone caves on the volcanic slopes of Indonesian jungles.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Jungli Admi",
    type: "Dwarf",
    location: "Nepal",
    habitat: [
      "Remote Himalayan valleys with scattered pines and rocky cliffs.",
      "High-altitude scrublands where cold winds whip through sparse vegetation.",
      "Snow-dusted gorges near the Nepalese-Indian border, shrouded in mist.",
    ],
    description:
      "A muscular, Yeti-like creature with long arms and thick fur, the Jungli Admi roams Nepal’s Himalayan foothills. Despite its smaller Dwarf stature, it intimidates intruders with earth-shaking roars, using fear and raw power to dominate foes.",
    stats: {
      health: 80, // Dwarf: Lower base health
      damage: 10,
      luck: 25, // Dwarf: Higher base luck
    },
    passive: {
      name: "Yeti’s Menace",
      effect: "10% chance to reduce enemy critical hit chance by 10% for 1 turn, reflecting the Jungli Admi’s intimidating presence.",
    },
    aiPersonality: {
      type: "Aggressive",
      grabChance: 0.4, // 40% Grab
      smashChance: 0.6, // 60% Smash
      defendChance: 0, // No Defend
      warBetMultiplier: 1, // Standard bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Crag Armor",
        effect: "Increases defense by 20% for 2 turns, fortifying the Jungli Admi against attacks.",
      },
      Spades: {
        name: "Frightful Claw",
        effect: "Deals 3 damage and reduces enemy critical hit chance by 10% for 2 turns.",
      },
      Diamonds: {
        name: "Peak Crusher",
        effect: "Delivers a powerful strike, dealing high single-target damage.",
      },
      Clubs: {
        name: "Roar of Dread",
        effect: "Deals 4 damage and forces one enemy to use a Grab attack (instead of Smash) on their next turn.",
      },
      cardNumbers: {
        "2-10": {
          name: "Cliff Strike",
          effect: "Damage scales with card number (2–10), increased by 10% in Himalayan habitats.",
        },
        Jack: {
          name: "Fearful Bash",
          effect: "Deals moderate damage and reduces enemy critical hit chance by 15% for 2 turns.",
        },
        Queen: {
          name: "Gorge Intimidation",
          effect: "Deals AoE damage and forces one random enemy to use a Grab attack on their next turn.",
        },
        King: {
          name: "Himalayan Tyrant",
          effect: "Gains a permanent 10% damage buff in Himalayan habitats.",
        },
        Ace: {
          name: "Yeti’s Fury",
          effect: "Deals massive single-target damage and reduces enemy critical hit chance by 20% for 2 turns.",
        },
        Joker: {
          name: "Primal Roar",
          effect: "Randomly deals moderate AoE damage or forces all enemies to use Grab attacks on their next turn.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Remote Himalayan valleys with scattered pines and rocky cliffs.",
        "Snow-dusted gorges near the Nepalese-Indian border, shrouded in mist.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },


  {
    name: "Junjudee",
    type: "Dwarf",
    location: "Australia",
    habitat: [
      "Rainforests of Queensland, teeming with dense foliage and hidden caves.",
      "Rocky outcrops in the Australian Outback, littered with natural hollows.",
      "Coastal cliffs near the Great Dividing Range, where salt and mist mingle.",
    ],
    description:
      "Small, mischievous humanoids known as 'little hairy men,' Junjudee are quick and agile, often seen in groups. With reddish-brown fur and a penchant for pranks, they dart through Australia’s wilds, coordinating attacks to overwhelm intruders with teamwork and speed.",
    stats: {
      health: 80, // Dwarf: Lower base health
      damage: 10,
      luck: 25, // Dwarf: Higher base luck
    },
    passive: {
      name: "Pack Mischief",
      effect: "10% chance to reduce a random enemy stat (attack, defense, or luck) by 5% for 1 turn, reflecting the Junjudee’s group pranks.",
    },
    aiPersonality: {
      type: "Tricky",
      grabChance: 0.5, // 50% Grab
      smashChance: 0.3, // 30% Smash
      defendChance: 0.2, // 20% Defend
      warBetMultiplier: 3, // High bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Group Cover",
        effect: "Increases luck by 15% for 2 turns, enhancing the Junjudee’s coordinated tactics.",
      },
      Spades: {
        name: "Stone Volley",
        effect: "Throws a volley of rocks, dealing 3 damage and reducing enemy luck by 10% for 2 turns.",
      },
      Diamonds: {
        name: "Swarm Strike",
        effect: "Coordinates a group attack, dealing high single-target damage.",
      },
      Clubs: {
        name: "Pack Frenzy",
        effect: "Deals AoE damage and reduces enemy defense by 10% for 2 turns.",
      },
      cardNumbers: {
        "2-10": {
          name: "Quick Skirmish",
          effect: "Damage scales with card number (2–10), increased by 10% in rainforest or Outback habitats.",
        },
        Jack: {
          name: "Trickster’s Jab",
          effect: "Deals moderate damage and reduces a random enemy stat (attack, defense, or luck) by 10% for 2 turns.",
        },
        Queen: {
          name: "Mob Assault",
          effect: "Deals AoE damage and reduces all enemies’ luck by 10% for 2 turns.",
        },
        King: {
          name: "Outback Ringleader",
          effect: "Gains a permanent 10% damage buff in rainforest or Outback habitats.",
        },
        Ace: {
          name: "Frenzied Swarm",
          effect: "Deals massive single-target damage and reduces enemy defense by 15% for 2 turns.",
        },
        Joker: {
          name: "Chaos Pack",
          effect: "Randomly deals moderate AoE damage or reduces a random enemy stat by 20% for 1 turn.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Rainforests of Queensland, teeming with dense foliage and hidden caves.",
        "Rocky outcrops in the Australian Outback, littered with natural hollows.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Orang Pendek",
    type: "Dwarf",
    location: "Sumatra",
    habitat: [
      "Dense, vine-covered jungles on the slopes of Sumatra’s volcanic highlands.",
      "Thick undergrowth along rivers and waterfalls, far from human reach.",
      "Patchwork forests, bordering cultivated fields that Orang Pendek often raids.",
    ],
    description:
      "A small, bipedal ape known for its surprising strength and elusive nature, Orang Pendek walks upright, uprooting trees and vines. Raiding crops from nearby villages, it disrupts foes with agile strikes and resource sabotage in Sumatra’s dense jungles.",
    stats: {
      health: 80, // Dwarf: Lower base health
      damage: 10,
      luck: 25, // Dwarf: Higher base luck
    },
    passive: {
      name: "Crop Raider",
      effect: "10% chance to steal 5% of an enemy’s resources (e.g., card draw or energy) for 1 turn, reflecting Orang Pendek’s crop-raiding tactics.",
    },
    aiPersonality: {
      type: "Tricky",
      grabChance: 0.5, // 50% Grab
      smashChance: 0.3, // 30% Smash
      defendChance: 0.2, // 20% Defend
      warBetMultiplier: 3, // High bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Vine Shield",
        effect: "Increases defense by 15% for 2 turns and deals 2 counterattack damage when hit.",
      },
      Spades: {
        name: "Sabotage Bite",
        effect: "Deals 3 damage and reduces enemy card draw by 1 for their next turn.",
      },
      Diamonds: {
        name: "Vinebreaker Rush",
        effect: "Charges with surprising strength, dealing high single-target damage.",
      },
      Clubs: {
        name: "Root Snare",
        effect: "Deals 4 damage and reduces the effectiveness of enemy card numbers by 20% (e.g., lowers damage scaling) for 1 turn.",
      },
      cardNumbers: {
        "2-10": {
          name: "Agile Strike",
          effect: "Damage scales with card number (2–10), increased by 10% in jungle or patchwork forest habitats.",
        },
        Jack: {
          name: "Sneaky Snap",
          effect: "Deals moderate damage and reduces enemy card draw by 1 for their next turn.",
        },
        Queen: {
          name: "Raider’s Rush",
          effect: "Deals AoE damage and reduces the effectiveness of all enemies’ card numbers by 15% for 1 turn.",
        },
        King: {
          name: "Jungle Plunderer",
          effect: "Gains a permanent 10% damage buff in jungle or patchwork forest habitats.",
        },
        Ace: {
          name: "Wild Uproot",
          effect: "Deals massive single-target damage and reduces enemy card draw by 2 for their next turn.",
        },
        Joker: {
          name: "Chaos Raid",
          effect: "Randomly deals moderate AoE damage or steals 10% of all enemies’ resources for 1 turn.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Dense, vine-covered jungles on the slopes of Sumatra’s volcanic highlands.",
        "Patchwork forests, bordering cultivated fields that Orang Pendek often raids.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Dzu-Teh",
    type: "Giant",
    location: "Himalayas",
    habitat: [
      "Snowy, barren ridgelines of the highest Himalayan peaks.",
      "Thick, snow-covered forests at the base of mountains, filled with pine and fir.",
      "Glacier valleys, where narrow pathways lead to hidden dens.",
    ],
    description:
      "A yeti-like beast known for its brute strength and fearsome nature, the Dzu-Teh is covered in dark, shaggy fur and roams the highest Himalayan peaks. Moving on all fours, it aggressively defends its territory, manipulating the rugged terrain to overwhelm intruders.",
    stats: {
      health: 120, // Giant: Higher base health
      damage: 15,
      luck: 15, // Giant: Lower base luck
    },
    passive: {
      name: "Peak Dominance",
      effect: "10% chance to reduce enemy movement range by 20% for 1 turn, reflecting Dzu-Teh’s control over Himalayan terrain.",
    },
    aiPersonality: {
      type: "Aggressive",
      grabChance: 0.4, // 40% Grab
      smashChance: 0.6, // 60% Smash
      defendChance: 0, // No Defend
      warBetMultiplier: 1, // Standard bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Rockfall Barrier",
        effect: "Increases defense by 20% for 2 turns and reflects 2 damage to attackers.",
      },
      Spades: {
        name: "Crag Slash",
        effect: "Deals 4 damage and reduces enemy movement range by 15% for 2 turns.",
      },
      Diamonds: {
        name: "Peak Charge",
        effect: "Charges with immense force, dealing high single-target damage.",
      },
      Clubs: {
        name: "Snowfield Quake",
        effect: "Deals AoE damage and reduces enemy attack range by 10% for 2 turns.",
      },
      cardNumbers: {
        "2-10": {
          name: "Ridge Smash",
          effect: "Damage scales with card number (2–10), increased by 10% in Himalayan ridge or forest habitats.",
        },
        Jack: {
          name: "Cliff Swipe",
          effect: "Deals moderate damage and reduces enemy movement range by 20% for 2 turns.",
        },
        Queen: {
          name: "Avalanche Surge",
          effect: "Deals AoE damage and reduces all enemies’ attack range by 15% for 2 turns.",
        },
        King: {
          name: "Himalayan Overlord",
          effect: "Gains a permanent 10% damage buff in Himalayan ridge or forest habitats.",
        },
        Ace: {
          name: "Titanic Rush",
          effect: "Deals massive single-target damage and reduces enemy movement range by 25% for 2 turns.",
        },
        Joker: {
          name: "Peak Chaos",
          effect: "Randomly deals moderate AoE damage or reduces all enemies’ movement range by 30% for 1 turn.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Snowy, barren ridgelines of the highest Himalayan peaks.",
        "Thick, snow-covered forests at the base of mountains, filled with pine and fir.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Genoskwa",
    type: "Giant",
    location: "North America",
    habitat: [
      "Dark, secluded valleys filled with thick, towering pines in North America.",
      "Rocky canyons with jagged boulders and narrow cliff paths.",
      "Mud-filled caves along riverbanks, reinforced with hardened layers of dirt.",
    ],
    description:
      "Known as the 'Stone Giant,' the Genoskwa is a brutal and territorial creature with tough, mud-hardened skin that mimics stone. Infamous for its savage strength, it hurls rocks and delivers crushing blows to defend its North American domain, using its armored hide to absorb and counter attacks.",
    stats: {
      health: 120, // Giant: Higher base health
      damage: 15,
      luck: 15, // Giant: Lower base luck
    },
    passive: {
      name: "Stone Fortress",
      effect: "10% chance to reduce incoming critical hit damage by 20% for 1 turn, reflecting Genoskwa’s stone-like skin.",
    },
    aiPersonality: {
      type: "Aggressive",
      grabChance: 0.4, // 40% Grab
      smashChance: 0.6, // 60% Smash
      defendChance: 0, // No Defend
      warBetMultiplier: 1, // Standard bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Mud Fortification",
        effect: "Stacks a defensive layer reducing incoming damage by 15% for 2 turns and increases counterattack damage by 2.",
      },
      Spades: {
        name: "Boulder Hurl",
        effect: "Hurls a massive boulder, dealing 4 damage and reducing enemy critical hit chance by 10% for 2 turns.",
      },
      Diamonds: {
        name: "Stonebreaker Punch",
        effect: "Delivers a devastating punch, dealing high single-target damage.",
      },
      Clubs: {
        name: "Canyon Slam",
        effect: "Deals AoE damage and grants a 10% counterattack damage buff for 2 turns.",
      },
      cardNumbers: {
        "2-10": {
          name: "Rock Smash",
          effect: "Damage scales with card number (2–10), increased by 10% in valley or canyon habitats.",
        },
        Jack: {
          name: "Crag Strike",
          effect: "Deals moderate damage and reduces enemy critical hit chance by 15% for 2 turns.",
        },
        Queen: {
          name: "Landslide Barrage",
          effect: "Deals AoE damage and increases Genoskwa’s counterattack damage by 15% for 2 turns.",
        },
        King: {
          name: "Stone Monarch",
          effect: "Gains a permanent 10% damage buff in valley or canyon habitats.",
        },
        Ace: {
          name: "Titanic Blow",
          effect: "Deals massive single-target damage and reduces enemy critical hit chance by 20% for 2 turns.",
        },
        Joker: {
          name: "Rockfall Chaos",
          effect: "Randomly deals moderate AoE damage or increases counterattack damage by 20% for 1 turn.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Dark, secluded valleys filled with thick, towering pines in North America.",
        "Rocky canyons with jagged boulders and narrow cliff paths.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Moehau",
    type: "Giant",
    location: "New Zealand",
    habitat: [
      "Dense, fog-filled forests of New Zealand's Coromandel Ranges.",
      "Remote, mountain ravines where clearings are few and far between.",
      "Dark, forested gorges that hide from all but the most determined adventurers.",
    ],
    description:
      "A brutal, half-man, half-animal predator native to New Zealand’s Coromandel Ranges, the Moehau is a territorial giant wielding wood and stone tools with deadly precision. Its sharp talons and aggressive temperament make it a fearsome foe, dominating intruders with calculated, critical strikes.",
    stats: {
      health: 120, // Giant: Higher base health
      damage: 15,
      luck: 15, // Giant: Lower base luck
    },
    passive: {
      name: "Talon Precision",
      effect: "10% chance to increase critical hit chance by 10% for 1 turn, reflecting Moehau’s sharp talons and tool proficiency.",
    },
    aiPersonality: {
      type: "Aggressive",
      grabChance: 0.4, // 40% Grab
      smashChance: 0.6, // 60% Smash
      defendChance: 0, // No Defend
      warBetMultiplier: 1, // Standard bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Tool Fortification",
        effect: "Increases attack precision by 10% and critical hit damage by 15% for 2 turns.",
      },
      Spades: {
        name: "Talon Gouge",
        effect: "Deals 4 damage and increases Moehau’s critical hit chance by 10% for 2 turns.",
      },
      Diamonds: {
        name: "Stonecarver Strike",
        effect: "Delivers a precise tool-based strike, dealing high single-target damage.",
      },
      Clubs: {
        name: "Ravine Barrage",
        effect: "Deals AoE damage and increases Moehau’s critical hit damage by 15% for 2 turns.",
      },
      cardNumbers: {
        "2-10": {
          name: "Tool Slash",
          effect: "Damage scales with card number (2–10), increased by 10% in forest or ravine habitats.",
        },
        Jack: {
          name: "Carved Strike",
          effect: "Deals moderate damage and increases Moehau’s critical hit chance by 15% for 2 turns.",
        },
        Queen: {
          name: "Gorge Onslaught",
          effect: "Deals AoE damage and increases Moehau’s critical hit damage by 20% for 2 turns.",
        },
        King: {
          name: "Coromandel Warlord",
          effect: "Gains a permanent 10% damage buff in forest or ravine habitats.",
        },
        Ace: {
          name: "Talon Tempest",
          effect: "Deals massive single-target damage and increases Moehau’s critical hit chance by 20% for 2 turns.",
        },
        Joker: {
          name: "Frenzied Craft",
          effect: "Randomly deals moderate AoE damage or increases Moehau’s critical hit damage by 25% for 1 turn.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Dense, fog-filled forests of New Zealand's Coromandel Ranges.",
        "Remote, mountain ravines where clearings are few and far between.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Matlox",
    type: "Giant",
    location: "Western Canada",
    habitat: [
      "Dark, forested mountain ranges with rugged, inaccessible paths in Western Canada.",
      "Isolated, windswept cliffs where caves provide natural shelter.",
      "Thick, untamed pine forests with dense undergrowth and hidden hollows.",
    ],
    description:
      "A cannibalistic giant covered in black bristles, with long claws and sharp fangs, the Matlox is a terrifying predator of Western Canada’s remote regions. Its monstrous presence instills fear, slowing enemies’ attacks as it unleashes savage, predatory strikes to dominate its territory.",
    stats: {
      health: 120, // Giant: Higher base health
      damage: 15,
      luck: 15, // Giant: Lower base luck
    },
    passive: {
      name: "Predator’s Glare",
      effect: "10% chance to reduce enemy attack speed by 10% for 1 turn, reflecting Matlox’s terrifying presence.",
    },
    aiPersonality: {
      type: "Aggressive",
      grabChance: 0.4, // 40% Grab
      smashChance: 0.6, // 60% Smash
      defendChance: 0, // No Defend
      warBetMultiplier: 1, // Standard bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Feral Intimidation",
        effect: "Increases Matlox’s damage by 10% and reduces enemy attack speed by 10% for 2 turns.",
      },
      Spades: {
        name: "Terror Claw",
        effect: "Deals 4 damage and reduces enemy attack speed by 15% for 2 turns.",
      },
      Diamonds: {
        name: "Fang Rend",
        effect: "Delivers a savage bite, dealing high single-target damage.",
      },
      Clubs: {
        name: "Cliff Roar",
        effect: "Deals AoE damage and reduces all enemies’ attack speed by 10% for 2 turns.",
      },
      cardNumbers: {
        "2-10": {
          name: "Savage Slash",
          effect: "Damage scales with card number (2–10), increased by 10% in mountain or forest habitats.",
        },
        Jack: {
          name: "Fearsome Swipe",
          effect: "Deals moderate damage and reduces enemy attack speed by 15% for 2 turns.",
        },
        Queen: {
          name: "Terror Surge",
          effect: "Deals AoE damage and reduces all enemies’ attack speed by 15% for 2 turns.",
        },
        King: {
          name: "Forest Tyrant",
          effect: "Gains a permanent 10% damage buff in mountain or forest habitats.",
        },
        Ace: {
          name: "Primal Devastation",
          effect: "Deals massive single-target damage and reduces enemy attack speed by 20% for 2 turns.",
        },
        Joker: {
          name: "Carnage Roar",
          effect: "Randomly deals moderate AoE damage or reduces all enemies’ attack speed by 25% for 1 turn.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Dark, forested mountain ranges with rugged, inaccessible paths in Western Canada.",
        "Thick, untamed pine forests with dense undergrowth and hidden hollows.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Curinquean",
    type: "Giant",
    location: "South America",
    habitat: [
      "Jungle riverbanks, thick with foliage and steep embankments.",
      "Remote jungle clearings, covered in towering hardwoods.",
      "Deep, tangled swamps where rivers meet and create hidden pools.",
    ],
    description:
      "Fierce and territorial, the Curinquean, also known as Maricoxi, is a hairy giant dwelling in South American jungles. Living in primitive villages, it wields spears and clubs with devastating force, drawing strength from its tribal unity to overwhelm intruders with coordinated attacks.",
    stats: {
      health: 120, // Giant: Higher base health
      damage: 15,
      luck: 15, // Giant: Lower base luck
    },
    passive: {
      name: "Tribal Unity",
      effect: "10% chance to increase damage by 5% per enemy present for 1 turn, reflecting Curinquean’s village-based coordination.",
    },
    aiPersonality: {
      type: "Aggressive",
      grabChance: 0.4, // 40% Grab
      smashChance: 0.6, // 60% Smash
      defendChance: 0, // No Defend
      warBetMultiplier: 1, // Standard bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Village Rally",
        effect: "Increases Curinquean’s damage by 5% per enemy present for 2 turns.",
      },
      Spades: {
        name: "Spear Volley",
        effect: "Deals 4 damage and gains +2 damage per enemy present for this attack.",
      },
      Diamonds: {
        name: "Warclub Crush",
        effect: "Delivers a powerful club strike, dealing high single-target damage.",
      },
      Clubs: {
        name: "Tribal Surge",
        effect: "Deals AoE damage and increases Curinquean’s damage by 3% per enemy present for 2 turns.",
      },
      cardNumbers: {
        "2-10": {
          name: "Spear Thrust",
          effect: "Damage scales with card number (2–10), increased by 10% in jungle or clearing habitats.",
        },
        Jack: {
          name: "Coordinated Strike",
          effect: "Deals moderate damage and gains +3 damage per enemy present for this attack.",
        },
        Queen: {
          name: "Jungle Ambush",
          effect: "Deals AoE damage and increases Curinquean’s damage by 5% per enemy present for 2 turns.",
        },
        King: {
          name: "Maricoxi Chieftain",
          effect: "Gains a permanent 10% damage buff in jungle or clearing habitats.",
        },
        Ace: {
          name: "Tribal Onslaught",
          effect: "Deals massive single-target damage and gains +5 damage per enemy present for this attack.",
        },
        Joker: {
          name: "Village Frenzy",
          effect: "Randomly deals moderate AoE damage or increases Curinquean’s damage by 10% per enemy present for 1 turn.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Jungle riverbanks, thick with foliage and steep embankments.",
        "Remote jungle clearings, covered in towering hardwoods.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },

  {
    name: "Tano",
    type: "Giant",
    location: "Gold Coast, Africa",
    habitat: [
      "Coastal cliffs and caves overlooking the vast Atlantic Ocean.",
      "Dense mangrove forests on Africa's Gold Coast, where the tides ebb and flow.",
      "Isolated inland river systems lined with thick forest and underbrush.",
    ],
    description:
      "A gigantic, white-skinned ape with black hair, the Tano is a ferocious predator of Africa's Gold Coast. Known for its territorial aggression and vulnerability to fire, it wraps itself in animal skins and unleashes devastating attacks when weakened, growing fiercer as its health dwindles.",
    stats: {
      health: 120, // Giant: Higher base health
      damage: 15,
      luck: 15, // Giant: Lower base luck
    },
    passive: {
      name: "Fire-Foe's Fury",
      effect: "10% chance to increase damage by 20% for 1 turn when health is below 50%, reflecting Tano's desperate rage against fire-based threats.",
    },
    aiPersonality: {
      type: "Aggressive",
      grabChance: 0.4, // 40% Grab
      smashChance: 0.6, // 60% Smash
      defendChance: 0, // No Defend
      warBetMultiplier: 1, // Standard bets on Wars
    },
    attacks: {
      Hearts: {
        name: "Savage Resilience",
        effect: "Increases Tano's damage by 15% for 2 turns when health is below 50%.",
      },
      Spades: {
        name: "Feral Swipe",
        effect: "Deals 4 damage and increases Tano's damage by 10% for 2 turns when health is below 50%.",
      },
      Diamonds: {
        name: "Primal Rush",
        effect: "Charges with immense force, dealing high single-target damage.",
      },
      Clubs: {
        name: "Coastal Slam",
        effect: "Deals AoE damage and increases Tano's damage by 10% for 2 turns when health is below 50%.",
      },
      cardNumbers: {
        "2-10": {
          name: "Wild Strike",
          effect: "Damage scales with card number (2–10), increased by 10% in coastal or mangrove habitats.",
        },
        Jack: {
          name: "Frenzied Claw",
          effect: "Deals moderate damage and increases Tano's damage by 15% for 2 turns when health is below 50%.",
        },
        Queen: {
          name: "Coastal Fury",
          effect: "Deals AoE damage and increases Tano's damage by 15% for 2 turns when health is below 50%.",
        },
        King: {
          name: "Mangrove Tyrant",
          effect: "Gains a permanent 10% damage buff in coastal or mangrove habitats.",
        },
        Ace: {
          name: "Beast's Rampage",
          effect: "Deals massive single-target damage and increases Tano's damage by 20% for 2 turns when health is below 50%.",
        },
        Joker: {
          name: "Primal Chaos",
          effect: "Randomly deals moderate AoE damage or increases Tano's damage by 25% for 1 turn when health is below 50%.",
        },
      },
    },
    environmentBonus: {
      habitats: [
        "Coastal cliffs and caves overlooking the Atlantic Ocean.",
        "Dense mangrove forests on Africa's Gold Coast, where the tides ebb and flow.",
      ],
      damageBoost: 10, // +10% damage in these habitats
    },
  },
];