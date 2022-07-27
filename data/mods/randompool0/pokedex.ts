export const Pokedex: {[speciesid: string]: SpeciesData} = {
	baltoy: {
		inherit: true,
		types: ["Steel", "Psychic"],
		baseStats: {hp: 81, atk: 69, def: 101, spa: 115, spd: 81, spe: 30},
		abilities: {0: "Levitate"},
		evos: null,
	},
	barraskewda: {
		inherit: true,
		types: ["Dark", "Ground"],
		baseStats: {hp: 65, atk: 120, def: 85, spa: 75, spd: 55, spe: 85},
		abilities: {0: "Intimidate", 1: "Propeller Tail", H: "Swift Swim"},
		prevo: null,
	},
	blastoise: {
		inherit: true,
		types: ["Water", "Fighting"],
		baseStats: {hp: 60, atk: 91, def: 110, spa: 92, spd: 95, spe: 52},
		abilities: {0: "Torrent", 1: "Shell Armor", H: "Mega Launcher"},
		prevo: null,
	},
	blaziken: {
		inherit: true,
		baseStats: {hp: 85, atk: 125, def: 70, spa: 55, spd: 70, spe: 95},
		abilities: {0: "Blaze", 1: "Early Bird", H: "Demilitarize"},
		prevo: null,
	},
	boltund: {
		inherit: true,
		types: ["Electric", "Fairy"],
		baseStats: {hp: 95, atk: 95, def: 70, spa: 70, spd: 70, spe: 115},
		abilities: {0: "Ball Fetch", H: "Strong Jaw"},
		prevo: null,
	},
	carvanha: {
		inherit: true,
		types: ["Dark"],
		baseStats: {hp: 75, atk: 75, def: 88, spa: 110, spd: 45, spe: 100},
		abilities: {0: "Steely Spirit", H: "Pressure"},
		evos: null,
	},
	chansey: {
		inherit: true,
		baseStats: {hp: 125, atk: 95, def: 45, spa: 50, spd: 130, spe: 40},
		abilities: {0: "Thick Fat", H: "Misty Surge"},
		prevo: null,
		evos: null,
	},
	clauncher: {
		inherit: true,
		types: ["Water", "Bug"],
		baseStats: {hp: 45, atk: 85, def: 90, spa: 75, spd: 85, spe: 85},
		abilities: {0: "Shell Armor", 1: "Shed Skin", H: "Drizzle"},
	},
	duosion: {
		inherit: true,
		types: ["Ghost"],
		baseStats: {hp: 100, atk: 55, def: 80, spa: 100, spd: 95, spe: 45},
		abilities: {0: "Clear Body", 1: "Overcoat", H: "Levitate"},
		prevo: null,
		evos: null,
	},
	eiscue: {
		inherit: true,
		baseStats: {hp: 85, atk: 95, def: 160, spa: 60, spd: 45, spe: 45},
	},
	eiscuenoice: {
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 85, atk: 95, def: 80, spa: 60, spd: 95, spe: 95},
	},
	genesect: {
		inherit: true,
		types: ["Bug", "Normal"],
		baseStats: {hp: 71, atk: 93, def: 74, spa: 130, spd: 74, spe: 98},
		abilities: {0: "Enhancements"},
	},
	genesectdouse: {
		inherit: true,
		types: ["Bug", "Normal"],
		baseStats: {hp: 71, atk: 93, def: 74, spa: 130, spd: 74, spe: 98},
		abilities: {0: "Enhancements"},
	},
	genesectshock: {
		inherit: true,
		types: ["Bug", "Normal"],
		baseStats: {hp: 71, atk: 93, def: 74, spa: 130, spd: 74, spe: 98},
		abilities: {0: "Enhancements"},
	},
	genesectburn: {
		inherit: true,
		types: ["Bug", "Normal"],
		baseStats: {hp: 71, atk: 93, def: 74, spa: 130, spd: 74, spe: 98},
		abilities: {0: "Enhancements"},
	},
	genesectchill: {
		inherit: true,
		types: ["Bug", "Normal"],
		baseStats: {hp: 71, atk: 93, def: 74, spa: 130, spd: 74, spe: 98},
		abilities: {0: "Enhancements"},
	},
	guzzlord: {
		inherit: true,
		types: ["Poison"],
		baseStats: {hp: 151, atk: 89, def: 79, spa: 97, spd: 73, spe: 41},
		abilities: {0: "Cheek Pouch"},
	},
	klink: {
		inherit: true,
		baseStats: {hp: 50, atk: 98, def: 79, spa: 50, spd: 55, spe: 98},
		abilities: {0: "Sheer Force"},
	},
	magmar: {
		inherit: true,
		types: ["Fire", "Electric"],
		baseStats: {hp: 65, atk: 101, def: 75, spa: 101, spd: 75, spe: 95},
		abilities: {0: "Flame Body", 1: "Static", H: "Adaptability"},
		prevo: null,
		evos: null,
	},
	mamoswine: {
		inherit: true,
		baseStats: {hp: 95, atk: 140, def: 100, spa: 60, spd: 60, spe: 70},
		abilities: {0: "Snow Warning", 1: "Snow Cloak", H: "Vital Spirit"},
		prevo: null,
	},
	reshiram: {
		inherit: true,
		types: ["Fairy", "Dragon"],
		baseStats: {hp: 85, atk: 95, def: 95, spa: 95, spd: 95, spe: 85},
		abilities: {0: "Multiscale", H: "Tangling Hair"},
	},
	shiinotic: {
		inherit: true,
		types: ["Rock", "Fairy"],
		baseStats: {hp: 120, atk: 45, def: 95, spa: 90, spd: 75, spe: 55},
		abilities: {0: "Sand Veil", 1: "Effect Spore", H: "Mist Shroud"},
		prevo: null,
	},
	spinarak: {
		inherit: true,
		types: ["Bug", "Ground"],
		baseStats: {hp: 25, atk: 85, def: 65, spa: 45, spd: 65, spe: 135},
		abilities: {0: "Swarm", H: "Sand Stream"},
	},
	vaporeon: {
		inherit: true,
		types: ["Grass", "Water"],
		baseStats: {hp: 90, atk: 63, def: 78, spa: 100, spd: 110, spe: 65},
		abilities: {0: "Water Absorb", 1: "Damp", H: "Water Veil"},
		prevo: null,
	},
	yanmega: {
		inherit: true,
		types: ["Dragon", "Flying"],
		baseStats: {hp: 45, atk: 95, def: 75, spa: 110, spd: 80, spe: 126},
		abilities: {0: "Compound Eyes", H: "Tinted Lens"},
		prevo: null,
	},
};