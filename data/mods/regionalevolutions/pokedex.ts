export const Pokedex: { [k: string]: ModdedSpeciesData } = {
	// Kanto Dex
	// Johto Dex

	dratini: {
		inherit: true,
		otherFormes: ["Dratini-Johto"],
		formeOrder: ["Dratini", "Dratini-Johto"],
	},
	dratinijohto: {
		num: 147,
		name: "Dratini-Johto",
		baseSpecies: "Dratini",
		forme: "Johto",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 41, atk: 54, def: 65, spa: 60, spd: 50, spe: 30},
		abilities: {0: "Ionization", H: "Perish Body"},
		heightm: 1.8,
		weightkg: 3.3,
		color: "Blue",
		evos: ["Dragonair-Johto"],
		eggGroups: ["Water 1", "Dragon"],
	},
	dragonair: {
		inherit: true,
		otherFormes: ["Dragonair-Johto"],
		formeOrder: ["Dragonair", "Dragonair-Johto"],
	},
	dragonairjohto: {
		num: 148,
		name: "Dragonair-Johto",
		baseSpecies: "Dragonair",
		forme: "Johto",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 61, atk: 74, def: 75, spa: 90, spd: 70, spe: 50},
		abilities: {0: "Ionization", H: "Perish Body"},
		heightm: 4,
		weightkg: 16.5,
		color: "Blue",
		prevo: "Dratini-Johto",
		evoLevel: 30,
		evos: ["Dratomic"],
		eggGroups: ["Water 1", "Dragon"],
	},
	dratomic: {
		num: -1,
		name: "Dratomic",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 91, atk: 94, def: 115, spa: 120, spd: 100, spe: 70},
		abilities: {0: "Ionization", H: "Perish Body"},
		heightm: 2.2,
		weightkg: 210,
		color: "Brown",
		prevo: "Dragonair-Johto",
		evoLevel: 55,
		eggGroups: ["Water 1", "Dragon"],
	},

	// Hoenn Dex
	// Sinnoh Dex
	// Hisui Dex
	// Unova Dex
	// Kalos Dex
	// Alola Dex
	// Galar Dex
	
	rotom: {
		inherit: true,
		otherFormes: ["Rotom-Galar"],
		formeOrder: ["Rotom", "Rotom-Galar"],
	},
	rotomgalar: {
		num: 479,
		name: "Rotom-Galar",
		baseSpecies: "Rotom",
		forme: "Galar",
		types: ["Ghost"],
		gender: "N",
		baseStats: {hp: 50, atk: 50, def: 77, spa: 95, spd: 77, spe: 91},
		abilities: {0: "Levitate"},
		heightm: 0.25,
		weightkg: 0.3,
		color: "Red",
		eggGroups: ["Amorphous"],
		evos: ["Rotomoire"],
	},
	rotomoire: {
		num: -2,
		name: "Rotomoire",
		types: ["Ghost", "Psychic"],
		gender: "N",
		baseStats: {hp: 65, atk: 60, def: 84, spa: 107, spd: 100, spe: 104},
		abilities: {0: "Protean"},
		heightm: 0.5,
		weightkg: 5,
		color: "Red",
		prevo: "Rotom-Galar",
		evoType: "levelHold",
		evoItem: "Grimoire",
		eggGroups: ["Amorphous"],
	},
	buneary: {
		inherit: true,
		otherFormes: ["Buneary-Galar"],
		formeOrder: ["Buneary", "Buneary-Galar"],
	},
	bunearygalar: {
		num: 427,
		name: "Buneary-Galar",
		baseSpecies: "Buneary",
		forme: "Galar",
		types: ["Fairy"],
		baseStats: {hp: 55, atk: 66, def: 44, spa: 44, spd: 56, spe: 85},
		abilities: {0: "Klutz", 1: "Cute Charm", H: "Dazzling"},
		heightm: 0.5,
		weightkg: 4,
		color: "Brown",
		evos: ["Lopunny-Galar"],
		eggGroups: ["Field", "Human-Like"],
	},
	lopunny: {
		inherit: true,
		otherFormes: ["Lopunny-Galar"],
		formeOrder: ["Lopunny", "Lopunny-Galar"],
	},
	lopunnygalar: {
		num: 428,
		name: "Lopunny-Galar",
		baseSpecies: "Lopunny",
		forme: "Galar",
		types: ["Fairy"],
		baseStats: {hp: 65, atk: 86, def: 84, spa: 54, spd: 86, spe: 105},
		abilities: {0: "Sweet Veil", 1: "Cute Charm", H: "Dazzling"},
		heightm: 1.5,
		weightkg: 25,
		color: "Brown",
		prevo: "Buneary-Galar",
		evoType: "levelFriendship",
		eggGroups: ["Field", "Human-Like"],
		evos: ["Chroncony"],
	},
	chroncony: {
		num: -3,
		name: "Chroncony",
		types: ["Fairy", "Electric"],
		baseStats: {hp: 75, atk: 106, def: 84, spa: 54, spd: 86, spe: 115},
		abilities: {0: "Galvanize", 1: "Cute Charm", H: "Dazzling"},
		heightm: 1.3,
		weightkg: 28.3,
		color: "Brown",
		eggGroups: ["Field", "Human-Like"],
		prevo: "Lopunny-Galar",
		evoType: "useItem",
		evoItem: "Thunder Stone",
	},

	// Paldea Dex

	skiddo: {
		inherit: true,
		otherFormes: ["Skiddo-Paldea"],
		formeOrder: ["Skiddo", "Skiddo-Paldea"],
	},
	skiddopaldea: {
		num: 672,
		name: "Skiddo-Paldea",
		baseSpecies: "Skiddo",
		forme: "Paldea",
		types: ["Grass", "Water"],
		baseStats: {hp: 66, atk: 60, def: 55, spa: 67, spd: 57, spe: 45},
		abilities: {0: "Swift Swim", H: "Grass Pelt"},
		heightm: 0.9,
		weightkg: 34,
		color: "Brown",
		evos: ["Machara"],
		eggGroups: ["Field"],
	},
	machara: {
		num: -4,
		name: "Machara",
		types: ["Grass", "Water"],
		baseStats: {hp: 123, atk: 95, def: 69, spa: 102, spd: 81, spe: 61},
		abilities: {0: "Swift Swim", H: "Grass Pelt"},
		heightm: 1.7,
		weightkg: 107,
		color: "Brown",
		prevo: "Skiddo-Paldea",
		evoLevel: 32,
		eggGroups: ["Field"],
	},

	// Kitakami Dex

	wimpod: {
		inherit: true,
		otherFormes: ["Wimpod-Kitakami"],
		formeOrder: ["Wimpod", "Wimpod-Kitakami"],
	},
	wimpodkitakami: {
		num: 767,
		name: "Wimpod-Kitakami",
		baseSpecies: "Wimpod",
		forme: "Kitakami",
		types: ["Bug", "Ground"],
		baseStats: {hp: 40, atk: 35, def: 30, spa: 20, spd: 80, spe: 30},
		abilities: {0: "Dry Skin", H: "Tough Claws"},
		heightm: 2.1,
		weightkg: 79.5,
		color: "Gray",
		evos: ["Golisargil"],
		eggGroups: ["Bug", "Water 3"],
	},
	golisargil: {
		num: -5,
		name: "Golisargil",
		types: ["Bug", "Ground"],
		baseStats: {hp: 75, atk: 125, def: 65, spa: 45, spd: 140, spe: 90},
		abilities: {0: "Dry Skin", H: "Rattled"},
		heightm: 0.6,
		weightkg: 280,
		color: "Gray",
		prevo: "Wimpod",
		evoLevel: 30,
		eggGroups: ["Bug", "Water 3"],
	},

	// Orre Dex

	// Eldegoss, Skarmory, Milotic

	// Distortion World Dex
	// Ultra Space Dex

	// Granbull

	// Paradox Dex

	// Stufful
};
