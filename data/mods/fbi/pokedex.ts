
// FBI fire red pokedex.ts:
// 


export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	bulbasaur:
	{
		inherit: true,
		types: ["Grass"],
		baseStats: {hp: 45,atk: 49,def: 49,spa: 65,spd: 65,spe: 45},
		abilities: {0: "Overgrow"}
	},
	ivysaur:
	{
		inherit: true,
		types: ["Grass"],
		baseStats: {hp: 60,atk: 62,def: 63,spa: 80,spd: 80,spe: 60},
		abilities: {0: "Overgrow"}
	},
	venusaur:
	{
		inherit: true,
		types: ["Grass", "Poison"],
		baseStats: {hp: 80,atk: 82,def: 83,spa: 100,spd: 100,spe: 80},
		abilities: {0: "Overgrow"}
	},
	charmander:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 39,atk: 52,def: 43,spa: 60,spd: 50,spe: 65},
		abilities: {0: "Blaze"}
	},
	charmeleon:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 58,atk: 64,def: 58,spa: 80,spd: 65,spe: 80},
		abilities: {0: "Blaze"}
	},
	charizard:
	{
		inherit: true,
		types: ["Fire", "Flying"],
		baseStats: {hp: 78,atk: 84,def: 78,spa: 109,spd: 85,spe: 100},
		abilities: {0: "Blaze"}
	},
	squirtle:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 44,atk: 48,def: 65,spa: 50,spd: 64,spe: 43},
		abilities: {0: "Torrent"}
	},
	wartortle:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 59,atk: 63,def: 80,spa: 65,spd: 80,spe: 58},
		abilities: {0: "Torrent"}
	},
	blastoise:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 79,atk: 83,def: 100,spa: 85,spd: 105,spe: 78},
		abilities: {0: "Torrent"}
	},
	caterpie:
	{
		inherit: true,
		types: ["Bug"],
		baseStats: {hp: 45,atk: 30,def: 35,spa: 20,spd: 20,spe: 45},
		abilities: {0: "Shield Dust"}
	},
	metapod:
	{
		inherit: true,
		types: ["Bug"],
		baseStats: {hp: 50,atk: 20,def: 55,spa: 25,spd: 25,spe: 30},
		abilities: {0: "Shed Skin"}
	},
	butterfree:
	{
		inherit: true,
		types: ["Bug", "Flying"],
		baseStats: {hp: 60,atk: 45,def: 50,spa: 80,spd: 80,spe: 90},
		abilities: {0: "Compound Eyes"}
	},
	weedle:
	{
		inherit: true,
		types: ["Bug", "Poison"],
		baseStats: {hp: 40,atk: 35,def: 30,spa: 20,spd: 20,spe: 50},
		abilities: {0: "Shield Dust"}
	},
	kakuna:
	{
		inherit: true,
		types: ["Bug", "Poison"],
		baseStats: {hp: 45,atk: 25,def: 50,spa: 25,spd: 25,spe: 35},
		abilities: {0: "Shed Skin"}
	},
	beedrill:
	{
		inherit: true,
		types: ["Bug", "Poison"],
		baseStats: {hp: 65,atk: 90,def: 40,spa: 45,spd: 80,spe: 85},
		abilities: {0: "Intimidate"}
	},
	pidgey:
	{
		inherit: true,
		types: ["Normal", "Flying"],
		baseStats: {hp: 40,atk: 45,def: 40,spa: 35,spd: 35,spe: 56},
		abilities: {0: "Keen Eye"}
	},
	pidgeotto:
	{
		inherit: true,
		types: ["Normal", "Flying"],
		baseStats: {hp: 63,atk: 60,def: 55,spa: 50,spd: 50,spe: 71},
		abilities: {0: "Keen Eye"}
	},
	pidgeot:
	{
		inherit: true,
		types: ["Normal", "Flying"],
		baseStats: {hp: 83,atk: 80,def: 75,spa: 70,spd: 70,spe: 91},
		abilities: {0: "Keen Eye"}
	},
	rattata:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 30,atk: 56,def: 35,spa: 25,spd: 35,spe: 72},
		abilities: {0: "Run Away", 1: "Guts"}
	},
	raticate:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 55,atk: 81,def: 60,spa: 50,spd: 70,spe: 97},
		abilities: {0: "Run Away", 1: "Guts"}
	},
	spearow:
	{
		inherit: true,
		types: ["Flying"],
		baseStats: {hp: 40,atk: 60,def: 30,spa: 31,spd: 31,spe: 70},
		abilities: {0: "Keen Eye"}
	},
	fearow:
	{
		inherit: true,
		types: ["Flying", "Ground"],
		baseStats: {hp: 80,atk: 95,def: 65,spa: 61,spd: 61,spe: 100},
		abilities: {0: "Keen Eye"}
	},
	ekans:
	{
		inherit: true,
		types: ["Poison"],
		baseStats: {hp: 35,atk: 60,def: 44,spa: 40,spd: 54,spe: 55},
		abilities: {0: "Intimidate", 1: "Shed Skin"}
	},
	arbok:
	{
		inherit: true,
		types: ["Poison", "Dark"],
		baseStats: {hp: 70,atk: 85,def: 69,spa: 65,spd: 79,spe: 80},
		abilities: {0: "Intimidate", 1: "Shed Skin"}
	},
	pikachu:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 35,atk: 55,def: 30,spa: 50,spd: 40,spe: 90},
		abilities: {0: "Static"}
	},
	raichu:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 60,atk: 90,def: 55,spa: 90,spd: 80,spe: 100},
		abilities: {0: "Static"}
	},
	sandshrew:
	{
		inherit: true,
		types: ["Ground"],
		baseStats: {hp: 50,atk: 75,def: 85,spa: 20,spd: 30,spe: 40},
		abilities: {0: "Sand Veil"}
	},
	sandslash:
	{
		inherit: true,
		types: ["Ground"],
		baseStats: {hp: 75,atk: 100,def: 110,spa: 45,spd: 85,spe: 65},
		abilities: {0: "Sand Stream"}
	},
	nidoranf:
	{
		inherit: true,
		types: ["Poison"],
		baseStats: {hp: 55,atk: 47,def: 52,spa: 40,spd: 40,spe: 41},
		abilities: {0: "Poison Point"}
	},
	nidorina:
	{
		inherit: true,
		types: ["Poison"],
		baseStats: {hp: 70,atk: 62,def: 67,spa: 55,spd: 55,spe: 56},
		abilities: {0: "Poison Point"}
	},
	nidoqueen:
	{
		inherit: true,
		types: ["Poison", "Ground"],
		baseStats: {hp: 90,atk: 82,def: 87,spa: 75,spd: 85,spe: 76},
		abilities: {0: "Poison Point"}
	},
	nidoranm:
	{
		inherit: true,
		types: ["Poison"],
		baseStats: {hp: 46,atk: 57,def: 40,spa: 40,spd: 40,spe: 50},
		abilities: {0: "Poison Point"}
	},
	nidorino:
	{
		inherit: true,
		types: ["Poison"],
		baseStats: {hp: 61,atk: 72,def: 57,spa: 55,spd: 55,spe: 65},
		abilities: {0: "Poison Point"}
	},
	nidoking:
	{
		inherit: true,
		types: ["Poison", "Ground"],
		baseStats: {hp: 81,atk: 92,def: 77,spa: 85,spd: 75,spe: 85},
		abilities: {0: "Poison Point"}
	},
	clefairy:
	{
		inherit: true,
		types: ["Fairy"],
		baseStats: {hp: 70,atk: 45,def: 48,spa: 60,spd: 65,spe: 35},
		abilities: {0: "Cute Charm"}
	},
	clefable:
	{
		inherit: true,
		types: ["Fairy"],
		baseStats: {hp: 95,atk: 70,def: 73,spa: 85,spd: 90,spe: 60},
		abilities: {0: "Cute Charm"}
	},
	vulpix:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 38,atk: 41,def: 40,spa: 50,spd: 65,spe: 65},
		abilities: {0: "Flash Fire"}
	},
	ninetales:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 73,atk: 76,def: 75,spa: 81,spd: 100,spe: 100},
		abilities: {0: "Drought", 1: "Flash Fire"}
	},
	jigglypuff:
	{
		inherit: true,
		types: ["Normal", "Fairy"],
		baseStats: {hp: 115,atk: 45,def: 20,spa: 45,spd: 25,spe: 20},
		abilities: {0: "Cute Charm"}
	},
	wigglytuff:
	{
		inherit: true,
		types: ["Normal", "Fairy"],
		baseStats: {hp: 140,atk: 70,def: 45,spa: 75,spd: 50,spe: 45},
		abilities: {0: "Cute Charm"}
	},
	zubat:
	{
		inherit: true,
		types: ["Poison", "Flying"],
		baseStats: {hp: 40,atk: 45,def: 35,spa: 30,spd: 40,spe: 55},
		abilities: {0: "Inner Focus"}
	},
	golbat:
	{
		inherit: true,
		types: ["Poison", "Flying"],
		baseStats: {hp: 75,atk: 80,def: 70,spa: 65,spd: 75,spe: 90},
		abilities: {0: "Inner Focus"}
	},
	oddish:
	{
		inherit: true,
		types: ["Grass", "Poison"],
		baseStats: {hp: 45,atk: 50,def: 55,spa: 75,spd: 65,spe: 30},
		abilities: {0: "Chlorophyll"}
	},
	gloom:
	{
		inherit: true,
		types: ["Grass", "Poison"],
		baseStats: {hp: 60,atk: 65,def: 70,spa: 85,spd: 75,spe: 40},
		abilities: {0: "Chlorophyll"}
	},
	vileplume:
	{
		inherit: true,
		types: ["Grass", "Poison"],
		baseStats: {hp: 75,atk: 80,def: 85,spa: 100,spd: 90,spe: 50},
		abilities: {0: "Chlorophyll"}
	},
	paras:
	{
		inherit: true,
		types: ["Bug", "Grass"],
		baseStats: {hp: 35,atk: 70,def: 55,spa: 45,spd: 55,spe: 25},
		abilities: {0: "Effect Spore"}
	},
	parasect:
	{
		inherit: true,
		types: ["Bug", "Ghost"],
		baseStats: {hp: 70,atk: 95,def: 110,spa: 60,spd: 110,spe: 30},
		abilities: {0: "Effect Spore", 1: "Thick Fat"}
	},
	venonat:
	{
		inherit: true,
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60,atk: 55,def: 50,spa: 40,spd: 55,spe: 45},
		abilities: {0: "Compoundeyes"}
	},
	venomoth:
	{
		inherit: true,
		types: ["Bug", "Psychic"],
		baseStats: {hp: 70,atk: 65,def: 60,spa: 95,spd: 85,spe: 90},
		abilities: {0: "Shield Dust"}
	},
	diglett:
	{
		inherit: true,
		types: ["Ground", "Steel"],
		baseStats: {hp: 10,atk: 55,def: 25,spa: 35,spd: 45,spe: 95},
		abilities: {0: "Sand Veil", 1: "Arena Trap"}
	},
	dugtrio:
	{
		inherit: true,
		types: ["Ground", "Steel"],
		baseStats: {hp: 55,atk: 110,def: 50,spa: 50,spd: 70,spe: 120},
		abilities: {0: "Sand Veil", 1: "Arena Trap"}
	},
	meowth:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 40,atk: 45,def: 35,spa: 40,spd: 40,spe: 90},
		abilities: {0: "Pickup"}
	},
	persian:
	{
		inherit: true,
		types: ["Normal", "Dark"],
		baseStats: {hp: 65,atk: 90,def: 60,spa: 85,spd: 65,spe: 115},
		abilities: {0: "Limber", 1: "Intimidate"}
	},
	psyduck:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 50,atk: 52,def: 48,spa: 65,spd: 50,spe: 55},
		abilities: {0: "Damp", 1: "Cloud Nine"}
	},
	golduck:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 80,atk: 82,def: 78,spa: 95,spd: 80,spe: 85},
		abilities: {0: "Damp", 1: "Cloud Nine"}
	},
	mankey:
	{
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 40,atk: 80,def: 35,spa: 35,spd: 45,spe: 70},
		abilities: {0: "Vital Spirit"}
	},
	primeape:
	{
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 65,atk: 105,def: 60,spa: 60,spd: 70,spe: 95},
		abilities: {0: "Vital Spirit"}
	},
	growlithe:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 55,atk: 70,def: 45,spa: 70,spd: 50,spe: 60},
		abilities: {0: "Intimidate", 1: "Flash Fire"}
	},
	arcanine:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 90,atk: 110,def: 80,spa: 100,spd: 80,spe: 95},
		abilities: {0: "Intimidate", 1: "Flash Fire"}
	},
	poliwag:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 40,atk: 50,def: 40,spa: 40,spd: 40,spe: 90},
		abilities: {0: "Water Absorb", 1: "Damp"}
	},
	poliwhirl:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 65,atk: 65,def: 65,spa: 50,spd: 50,spe: 90},
		abilities: {0: "Water Absorb", 1: "Damp"}
	},
	poliwrath:
	{
		inherit: true,
		types: ["Water", "Fighting"],
		baseStats: {hp: 90,atk: 85,def: 95,spa: 70,spd: 90,spe: 70},
		abilities: {0: "Water Absorb", 1: "Damp"}
	},
	abra:
	{
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 25,atk: 20,def: 15,spa: 105,spd: 55,spe: 90},
		abilities: {0: "Synchronize", 1: "Inner Focus"}
	},
	kadabra:
	{
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 40,atk: 35,def: 30,spa: 120,spd: 70,spe: 105},
		abilities: {0: "Synchronize", 1: "Inner Focus"}
	},
	alakazam:
	{
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 55,atk: 50,def: 45,spa: 135,spd: 85,spe: 120},
		abilities: {0: "Synchronize", 1: "Inner Focus"}
	},
	machop:
	{
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 70,atk: 80,def: 50,spa: 35,spd: 35,spe: 35},
		abilities: {0: "Guts"}
	},
	machoke:
	{
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 80,atk: 100,def: 70,spa: 50,spd: 60,spe: 45},
		abilities: {0: "Guts"}
	},
	machamp:
	{
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 90,atk: 130,def: 80,spa: 65,spd: 85,spe: 55},
		abilities: {0: "Guts"}
	},
	bellsprout:
	{
		inherit: true,
		types: ["Grass"],
		baseStats: {hp: 50,atk: 85,def: 50,spa: 50,spd: 45,spe: 40},
		abilities: {0: "Chlorophyll"}
	},
	weepinbell:
	{
		inherit: true,
		types: ["Grass", "Dark"],
		baseStats: {hp: 65,atk: 100,def: 70,spa: 60,spd: 65,spe: 55},
		abilities: {0: "Chlorophyll"}
	},
	victreebel:
	{
		inherit: true,
		types: ["Grass", "Dark"],
		baseStats: {hp: 80,atk: 120,def: 90,spa: 75,spd: 85,spe: 70},
		abilities: {0: "Chlorophyll"}
	},
	tentacool:
	{
		inherit: true,
		types: ["Water", "Poison"],
		baseStats: {hp: 40,atk: 40,def: 35,spa: 50,spd: 100,spe: 70},
		abilities: {0: "Clear Body", 1: "Liquid Ooze"}
	},
	tentacruel:
	{
		inherit: true,
		types: ["Water", "Poison"],
		baseStats: {hp: 80,atk: 70,def: 65,spa: 80,spd: 120,spe: 100},
		abilities: {0: "Clear Body", 1: "Liquid Ooze"}
	},
	geodude:
	{
		inherit: true,
		types: ["Rock", "Ground"],
		baseStats: {hp: 40,atk: 80,def: 100,spa: 30,spd: 30,spe: 20},
		abilities: {0: "Rock Head", 1: "Sturdy"}
	},
	graveler:
	{
		inherit: true,
		types: ["Rock", "Ground"],
		baseStats: {hp: 55,atk: 95,def: 115,spa: 45,spd: 45,spe: 35},
		abilities: {0: "Rock Head", 1: "Sturdy"}
	},
	golem:
	{
		inherit: true,
		types: ["Rock", "Ground"],
		baseStats: {hp: 80,atk: 110,def: 130,spa: 55,spd: 65,spe: 45},
		abilities: {0: "Rock Head", 1: "Sturdy"}
	},
	ponyta:
	{
		inherit: true,
		types: ["Fire", "Fairy"],
		baseStats: {hp: 50,atk: 85,def: 55,spa: 65,spd: 65,spe: 90},
		abilities: {0: "Run Away", 1: "Flash Fire"}
	},
	rapidash:
	{
		inherit: true,
		types: ["Fire", "Fairy"],
		baseStats: {hp: 65,atk: 100,def: 70,spa: 90,spd: 80,spe: 105},
		abilities: {0: "Run Away", 1: "Flash Fire"}
	},
	slowpoke:
	{
		inherit: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 90,atk: 65,def: 65,spa: 40,spd: 40,spe: 15},
		abilities: {0: "Oblivious", 1: "Own Tempo"}
	},
	slowbro:
	{
		inherit: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 95,atk: 75,def: 110,spa: 100,spd: 80,spe: 30},
		abilities: {0: "Oblivious", 1: "Own Tempo"}
	},
	magnemite:
	{
		inherit: true,
		types: ["Electric", "Steel"],
		baseStats: {hp: 25,atk: 35,def: 70,spa: 95,spd: 55,spe: 45},
		abilities: {0: "Magnet Pull", 1: "Sturdy"}
	},
	magneton:
	{
		inherit: true,
		types: ["Electric", "Steel"],
		baseStats: {hp: 50,atk: 60,def: 95,spa: 120,spd: 70,spe: 70},
		abilities: {0: "Magnet Pull", 1: "Sturdy"}
	},
	farfetchd:
	{
		inherit: true,
		types: ["Normal", "Flying"],
		baseStats: {hp: 52,atk: 65,def: 55,spa: 58,spd: 62,spe: 60},
		abilities: {0: "Keen Eye", 1: "Inner Focus"}
	},
	doduo:
	{
		inherit: true,
		types: ["Dark", "Flying"],
		baseStats: {hp: 35,atk: 85,def: 45,spa: 35,spd: 35,spe: 75},
		abilities: {0: "Run Away", 1: "Early Bird"}
	},
	dodrio:
	{
		inherit: true,
		types: ["Dark", "Flying"],
		baseStats: {hp: 60,atk: 110,def: 70,spa: 70,spd: 70,spe: 100},
		abilities: {0: "Serene Grace", 1: "Early Bird"}
	},
	seel:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 65,atk: 45,def: 55,spa: 45,spd: 70,spe: 45},
		abilities: {0: "Thick Fat"}
	},
	dewgong:
	{
		inherit: true,
		types: ["Water", "Ice"],
		baseStats: {hp: 90,atk: 70,def: 80,spa: 70,spd: 95,spe: 70},
		abilities: {0: "Thick Fat"}
	},
	grimer:
	{
		inherit: true,
		types: ["Poison"],
		baseStats: {hp: 80,atk: 80,def: 50,spa: 40,spd: 50,spe: 25},
		abilities: {0: "Stench", 1: "Sticky Hold"}
	},
	muk:
	{
		inherit: true,
		types: ["Poison"],
		baseStats: {hp: 105,atk: 105,def: 75,spa: 65,spd: 100,spe: 50},
		abilities: {0: "Stench", 1: "Sticky Hold"}
	},
	shellder:
	{
		inherit: true,
		types: ["Ghost", "Ice"],
		baseStats: {hp: 30,atk: 65,def: 100,spa: 45,spd: 25,spe: 40},
		abilities: {0: "Shell Armor", 1: "Water Absorb"}
	},
	cloyster:
	{
		inherit: true,
		types: ["Ghost", "Ice"],
		baseStats: {hp: 50,atk: 95,def: 180,spa: 85,spd: 45,spe: 70},
		abilities: {0: "Shell Armor", 1: "Water Absorb"}
	},
	gastly:
	{
		inherit: true,
		types: ["Ghost", "Poison"],
		baseStats: {hp: 30,atk: 35,def: 30,spa: 100,spd: 35,spe: 80},
		abilities: {0: "Levitate"}
	},
	haunter:
	{
		inherit: true,
		types: ["Ghost", "Poison"],
		baseStats: {hp: 45,atk: 50,def: 45,spa: 115,spd: 55,spe: 95},
		abilities: {0: "Levitate"}
	},
	gengar:
	{
		inherit: true,
		types: ["Ghost", "Poison"],
		baseStats: {hp: 60,atk: 65,def: 60,spa: 130,spd: 75,spe: 110},
		abilities: {0: "Levitate"}
	},
	onix:
	{
		inherit: true,
		types: ["Rock", "Ground"],
		baseStats: {hp: 55,atk: 45,def: 160,spa: 30,spd: 45,spe: 50},
		abilities: {0: "Rock Head", 1: "Sturdy"}
	},
	drowzee:
	{
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 60,atk: 48,def: 45,spa: 43,spd: 90,spe: 42},
		abilities: {0: "Insomnia"}
	},
	hypno:
	{
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 85,atk: 73,def: 70,spa: 73,spd: 115,spe: 67},
		abilities: {0: "Insomnia"}
	},
	krabby:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 30,atk: 105,def: 90,spa: 25,spd: 25,spe: 50},
		abilities: {0: "Hyper Cutter", 1: "Shell Armor"}
	},
	kingler:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 55,atk: 130,def: 115,spa: 50,spd: 50,spe: 75},
		abilities: {0: "Hyper Cutter", 1: "Shell Armor"}
	},
	voltorb:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 40,atk: 30,def: 50,spa: 55,spd: 55,spe: 100},
		abilities: {0: "Soundproof", 1: "Static"}
	},
	electrode:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 60,atk: 50,def: 70,spa: 80,spd: 80,spe: 140},
		abilities: {0: "Soundproof", 1: "Static"}
	},
	exeggcute:
	{
		inherit: true,
		types: ["Grass", "Psychic"],
		baseStats: {hp: 60,atk: 40,def: 80,spa: 60,spd: 45,spe: 40},
		abilities: {0: "Chlorophyll"}
	},
	exeggutor:
	{
		inherit: true,
		types: ["Grass", "Psychic"],
		baseStats: {hp: 95,atk: 95,def: 85,spa: 125,spd: 75,spe: 55},
		abilities: {0: "Chlorophyll"}
	},
	cubone:
	{
		inherit: true,
		types: ["Ground"],
		baseStats: {hp: 50,atk: 50,def: 95,spa: 40,spd: 50,spe: 35},
		abilities: {0: "Rock Head", 1: "Lightningrod"}
	},
	marowak:
	{
		inherit: true,
		types: ["Ground"],
		baseStats: {hp: 60,atk: 80,def: 110,spa: 50,spd: 80,spe: 45},
		abilities: {0: "Rock Head", 1: "Lightningrod"}
	},
	hitmonlee:
	{
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 50,atk: 120,def: 53,spa: 35,spd: 110,spe: 87},
		abilities: {0: "Limber"}
	},
	hitmonchan:
	{
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 50,atk: 105,def: 79,spa: 35,spd: 110,spe: 76},
		abilities: {0: "Keen Eye"}
	},
	lickitung:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 90,atk: 55,def: 75,spa: 60,spd: 75,spe: 30},
		abilities: {0: "Own Tempo", 1: "Oblivious"}
	},
	koffing:
	{
		inherit: true,
		types: ["Poison"],
		baseStats: {hp: 40,atk: 65,def: 95,spa: 60,spd: 45,spe: 35},
		abilities: {0: "Levitate"}
	},
	weezing:
	{
		inherit: true,
		types: ["Poison"],
		baseStats: {hp: 65,atk: 90,def: 120,spa: 85,spd: 70,spe: 60},
		abilities: {0: "Levitate"}
	},
	rhyhorn:
	{
		inherit: true,
		types: ["Ground", "Rock"],
		baseStats: {hp: 80,atk: 85,def: 95,spa: 30,spd: 30,spe: 25},
		abilities: {0: "Lightningrod", 1: "Rock Head"}
	},
	rhydon:
	{
		inherit: true,
		types: ["Ground", "Rock"],
		baseStats: {hp: 105,atk: 130,def: 120,spa: 45,spd: 45,spe: 40},
		abilities: {0: "Lightningrod", 1: "Rock Head"}
	},
	chansey:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 250,atk: 5,def: 5,spa: 35,spd: 105,spe: 50},
		abilities: {0: "Natural Cure", 1: "Serene Grace"}
	},
	tangela:
	{
		inherit: true,
		types: ["Grass"],
		baseStats: {hp: 65,atk: 55,def: 115,spa: 100,spd: 40,spe: 60},
		abilities: {0: "Chlorophyll"}
	},
	kangaskhan:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 115,atk: 95,def: 80,spa: 40,spd: 80,spe: 90},
		abilities: {0: "Early Bird"}
	},
	horsea:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 30,atk: 40,def: 70,spa: 70,spd: 25,spe: 60},
		abilities: {0: "Swift Swim"}
	},
	seadra:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 55,atk: 65,def: 95,spa: 95,spd: 45,spe: 85},
		abilities: {0: "Poison Point"}
	},
	goldeen:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 45,atk: 67,def: 60,spa: 35,spd: 50,spe: 63},
		abilities: {0: "Swift Swim", 1: "Water Veil"}
	},
	seaking:
	{
		inherit: true,
		types: ["Water", "Ghost"],
		baseStats: {hp: 90,atk: 107,def: 65,spa: 65,spd: 80,spe: 68},
		abilities: {0: "Swift Swim", 1: "Water Veil"}
	},
	staryu:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 30,atk: 45,def: 55,spa: 70,spd: 55,spe: 85},
		abilities: {0: "Illuminate", 1: "Natural Cure"}
	},
	starmie:
	{
		inherit: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 60,atk: 75,def: 85,spa: 100,spd: 85,spe: 115},
		abilities: {0: "Illuminate", 1: "Natural Cure"}
	},
	mrmime:
	{
		inherit: true,
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 40,atk: 45,def: 65,spa: 100,spd: 120,spe: 90},
		abilities: {0: "Soundproof"}
	},
	scyther:
	{
		inherit: true,
		types: ["Bug", "Flying"],
		baseStats: {hp: 70,atk: 110,def: 80,spa: 55,spd: 80,spe: 105},
		abilities: {0: "Swarm"}
	},
	jynx:
	{
		inherit: true,
		types: ["Ice", "Psychic"],
		baseStats: {hp: 65,atk: 50,def: 35,spa: 115,spd: 95,spe: 95},
		abilities: {0: "Oblivious"}
	},
	electabuzz:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 65,atk: 83,def: 57,spa: 95,spd: 85,spe: 105},
		abilities: {0: "Static"}
	},
	magmar:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 65,atk: 85,def: 57,spa: 120,spd: 85,spe: 93},
		abilities: {0: "Flame Body"}
	},
	pinsir:
	{
		inherit: true,
		types: ["Bug"],
		baseStats: {hp: 65,atk: 125,def: 100,spa: 55,spd: 70,spe: 95},
		abilities: {0: "Hyper Cutter"}
	},
	tauros:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 75,atk: 100,def: 95,spa: 40,spd: 70,spe: 110},
		abilities: {0: "Intimidate"}
	},
	magikarp:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 20,atk: 10,def: 55,spa: 15,spd: 20,spe: 80},
		abilities: {0: "Swift Swim"}
	},
	gyarados:
	{
		inherit: true,
		types: ["Water", "Flying"],
		baseStats: {hp: 95,atk: 125,def: 79,spa: 60,spd: 100,spe: 81},
		abilities: {0: "Intimidate"}
	},
	lapras:
	{
		inherit: true,
		types: ["Water", "Ice"],
		baseStats: {hp: 130,atk: 85,def: 80,spa: 85,spd: 95,spe: 60},
		abilities: {0: "Water Absorb", 1: "Shell Armor"}
	},
	ditto:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 48,atk: 48,def: 48,spa: 48,spd: 48,spe: 48},
		abilities: {0: "Limber"}
	},
	eevee:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 55,atk: 55,def: 50,spa: 45,spd: 65,spe: 55},
		abilities: {0: "Run Away"}
	},
	vaporeon:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 130,atk: 65,def: 60,spa: 110,spd: 95,spe: 65},
		abilities: {0: "Water Absorb"}
	},
	jolteon:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 65,atk: 65,def: 60,spa: 110,spd: 95,spe: 130},
		abilities: {0: "Volt Absorb"}
	},
	flareon:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 65,atk: 130,def: 60,spa: 95,spd: 110,spe: 65},
		abilities: {0: "Flash Fire"}
	},
	porygon:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 65,atk: 60,def: 70,spa: 85,spd: 75,spe: 40},
		abilities: {0: "Trace"}
	},
	omanyte:
	{
		inherit: true,
		types: ["Rock", "Water"],
		baseStats: {hp: 35,atk: 40,def: 100,spa: 90,spd: 55,spe: 35},
		abilities: {0: "Swift Swim", 1: "Shell Armor"}
	},
	omastar:
	{
		inherit: true,
		types: ["Rock", "Water"],
		baseStats: {hp: 70,atk: 60,def: 125,spa: 115,spd: 70,spe: 55},
		abilities: {0: "Swift Swim", 1: "Shell Armor"}
	},
	kabuto:
	{
		inherit: true,
		types: ["Water", "Dark"],
		baseStats: {hp: 30,atk: 80,def: 90,spa: 55,spd: 45,spe: 55},
		abilities: {0: "Swift Swim", 1: "Battle Armor"}
	},
	kabutops:
	{
		inherit: true,
		types: ["Water", "Dark"],
		baseStats: {hp: 70,atk: 115,def: 105,spa: 65,spd: 70,spe: 90},
		abilities: {0: "Swift Swim", 1: "Battle Armor"}
	},
	aerodactyl:
	{
		inherit: true,
		types: ["Rock", "Flying"],
		baseStats: {hp: 80,atk: 105,def: 65,spa: 60,spd: 75,spe: 130},
		abilities: {0: "Rock Head", 1: "Pressure"}
	},
	snorlax:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 160,atk: 110,def: 65,spa: 65,spd: 110,spe: 30},
		abilities: {0: "Immunity", 1: "Thick Fat"}
	},
	articuno:
	{
		inherit: true,
		types: ["Ice", "Flying"],
		baseStats: {hp: 90,atk: 85,def: 100,spa: 95,spd: 125,spe: 85},
		abilities: {0: "Pressure"}
	},
	zapdos:
	{
		inherit: true,
		types: ["Electric", "Flying"],
		baseStats: {hp: 90,atk: 90,def: 85,spa: 125,spd: 90,spe: 100},
		abilities: {0: "Pressure"}
	},
	moltres:
	{
		inherit: true,
		types: ["Fire", "Flying"],
		baseStats: {hp: 90,atk: 100,def: 90,spa: 125,spd: 85,spe: 90},
		abilities: {0: "Pressure"}
	},
	dratini:
	{
		inherit: true,
		types: ["Dragon"],
		baseStats: {hp: 41,atk: 64,def: 45,spa: 50,spd: 50,spe: 50},
		abilities: {0: "Shed Skin"}
	},
	dragonair:
	{
		inherit: true,
		types: ["Dragon"],
		baseStats: {hp: 61,atk: 84,def: 65,spa: 70,spd: 70,spe: 70},
		abilities: {0: "Shed Skin"}
	},
	dragonite:
	{
		inherit: true,
		types: ["Dragon", "Flying"],
		baseStats: {hp: 91,atk: 134,def: 95,spa: 100,spd: 100,spe: 80},
		abilities: {0: "Inner Focus"}
	},
	mewtwo:
	{
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 106,atk: 110,def: 90,spa: 154,spd: 90,spe: 130},
		abilities: {0: "Pressure"}
	},
	mew:
	{
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 100,atk: 100,def: 100,spa: 100,spd: 100,spe: 100},
		abilities: {0: "Synchronize"}
	},
	chikorita:
	{
		inherit: true,
		types: ["Grass"],
		baseStats: {hp: 45,atk: 49,def: 65,spa: 49,spd: 65,spe: 45},
		abilities: {0: "Overgrow"}
	},
	bayleef:
	{
		inherit: true,
		types: ["Grass"],
		baseStats: {hp: 60,atk: 62,def: 80,spa: 63,spd: 80,spe: 60},
		abilities: {0: "Overgrow"}
	},
	meganium:
	{
		inherit: true,
		types: ["Grass"],
		baseStats: {hp: 80,atk: 82,def: 100,spa: 83,spd: 100,spe: 80},
		abilities: {0: "Overgrow"}
	},
	cyndaquil:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 39,atk: 52,def: 43,spa: 60,spd: 50,spe: 65},
		abilities: {0: "Blaze"}
	},
	quilava:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 58,atk: 64,def: 58,spa: 80,spd: 65,spe: 80},
		abilities: {0: "Blaze"}
	},
	typhlosion:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 78,atk: 84,def: 78,spa: 109,spd: 85,spe: 100},
		abilities: {0: "Blaze"}
	},
	totodile:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 50,atk: 65,def: 64,spa: 44,spd: 48,spe: 43},
		abilities: {0: "Torrent"}
	},
	croconaw:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 65,atk: 80,def: 80,spa: 59,spd: 63,spe: 58},
		abilities: {0: "Torrent"}
	},
	feraligatr:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 85,atk: 105,def: 100,spa: 79,spd: 83,spe: 78},
		abilities: {0: "Torrent"}
	},
	sentret:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 35,atk: 46,def: 34,spa: 35,spd: 45,spe: 20},
		abilities: {0: "Run Away", 1: "Keen Eye"}
	},
	furret:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 85,atk: 76,def: 64,spa: 45,spd: 55,spe: 90},
		abilities: {0: "Run Away", 1: "Keen Eye"}
	},
	hoothoot:
	{
		inherit: true,
		types: ["Normal", "Flying"],
		baseStats: {hp: 60,atk: 30,def: 30,spa: 36,spd: 56,spe: 50},
		abilities: {0: "Insomnia", 1: "Keen Eye"}
	},
	noctowl:
	{
		inherit: true,
		types: ["Normal", "Flying"],
		baseStats: {hp: 100,atk: 50,def: 50,spa: 76,spd: 96,spe: 70},
		abilities: {0: "Insomnia", 1: "Keen Eye"}
	},
	ledyba:
	{
		inherit: true,
		types: ["Bug", "Flying"],
		baseStats: {hp: 40,atk: 20,def: 30,spa: 40,spd: 80,spe: 55},
		abilities: {0: "Swarm", 1: "Early Bird"}
	},
	ledian:
	{
		inherit: true,
		types: ["Bug", "Flying"],
		baseStats: {hp: 55,atk: 35,def: 50,spa: 55,spd: 110,spe: 85},
		abilities: {0: "Swarm", 1: "Early Bird"}
	},
	spinarak:
	{
		inherit: true,
		types: ["Bug", "Poison"],
		baseStats: {hp: 40,atk: 60,def: 40,spa: 40,spd: 40,spe: 30},
		abilities: {0: "Swarm", 1: "Insomnia"}
	},
	ariados:
	{
		inherit: true,
		types: ["Bug", "Poison"],
		baseStats: {hp: 70,atk: 90,def: 70,spa: 60,spd: 60,spe: 40},
		abilities: {0: "Swarm", 1: "Insomnia"}
	},
	crobat:
	{
		inherit: true,
		types: ["Poison", "Flying"],
		baseStats: {hp: 85,atk: 90,def: 80,spa: 70,spd: 80,spe: 130},
		abilities: {0: "Inner Focus"}
	},
	chinchou:
	{
		inherit: true,
		types: ["Water", "Electric"],
		baseStats: {hp: 75,atk: 38,def: 38,spa: 56,spd: 56,spe: 67},
		abilities: {0: "Volt Absorb", 1: "Illuminate"}
	},
	lanturn:
	{
		inherit: true,
		types: ["Water", "Electric"],
		baseStats: {hp: 125,atk: 58,def: 58,spa: 76,spd: 76,spe: 67},
		abilities: {0: "Volt Absorb", 1: "Illuminate"}
	},
	pichu:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 20,atk: 40,def: 15,spa: 35,spd: 35,spe: 60},
		abilities: {0: "Static"}
	},
	cleffa:
	{
		inherit: true,
		types: ["Fairy"],
		baseStats: {hp: 50,atk: 25,def: 28,spa: 45,spd: 55,spe: 15},
		abilities: {0: "Cute Charm"}
	},
	igglybuff:
	{
		inherit: true,
		types: ["Normal", "Fairy"],
		baseStats: {hp: 90,atk: 30,def: 15,spa: 40,spd: 20,spe: 15},
		abilities: {0: "Cute Charm"}
	},
	togepi:
	{
		inherit: true,
		types: ["Fairy"],
		baseStats: {hp: 35,atk: 20,def: 65,spa: 40,spd: 65,spe: 20},
		abilities: {0: "Hustle", 1: "Serene Grace"}
	},
	togetic:
	{
		inherit: true,
		types: ["Fairy", "Flying"],
		baseStats: {hp: 55,atk: 40,def: 85,spa: 80,spd: 105,spe: 40},
		abilities: {0: "Hustle", 1: "Serene Grace"}
	},
	natu:
	{
		inherit: true,
		types: ["Psychic", "Flying"],
		baseStats: {hp: 40,atk: 50,def: 45,spa: 70,spd: 45,spe: 70},
		abilities: {0: "Synchronize", 1: "Early Bird"}
	},
	xatu:
	{
		inherit: true,
		types: ["Psychic", "Flying"],
		baseStats: {hp: 65,atk: 75,def: 70,spa: 95,spd: 70,spe: 95},
		abilities: {0: "Synchronize", 1: "Early Bird"}
	},
	mareep:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 55,atk: 40,def: 40,spa: 65,spd: 45,spe: 35},
		abilities: {0: "Static"}
	},
	flaaffy:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 70,atk: 55,def: 55,spa: 80,spd: 60,spe: 45},
		abilities: {0: "Static"}
	},
	ampharos:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 90,atk: 75,def: 75,spa: 115,spd: 90,spe: 55},
		abilities: {0: "Static"}
	},
	bellossom:
	{
		inherit: true,
		types: ["Grass"],
		baseStats: {hp: 75,atk: 80,def: 85,spa: 90,spd: 100,spe: 50},
		abilities: {0: "Chlorophyll"}
	},
	marill:
	{
		inherit: true,
		types: ["Water", "Fairy"],
		baseStats: {hp: 70,atk: 20,def: 50,spa: 20,spd: 50,spe: 40},
		abilities: {0: "Thick Fat", 1: "Huge Power"}
	},
	azumarill:
	{
		inherit: true,
		types: ["Water", "Fairy"],
		baseStats: {hp: 100,atk: 50,def: 80,spa: 50,spd: 80,spe: 50},
		abilities: {0: "Thick Fat", 1: "Huge Power"}
	},
	sudowoodo:
	{
		inherit: true,
		types: ["Rock"],
		baseStats: {hp: 70,atk: 100,def: 115,spa: 30,spd: 65,spe: 30},
		abilities: {0: "Sturdy", 1: "Rock Head"}
	},
	politoed:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 90,atk: 75,def: 75,spa: 90,spd: 100,spe: 70},
		abilities: {0: "Water Absorb", 1: "Drizzle"}
	},
	hoppip:
	{
		inherit: true,
		types: ["Grass", "Flying"],
		baseStats: {hp: 35,atk: 35,def: 40,spa: 35,spd: 55,spe: 50},
		abilities: {0: "Chlorophyll"}
	},
	skiploom:
	{
		inherit: true,
		types: ["Grass", "Flying"],
		baseStats: {hp: 55,atk: 45,def: 50,spa: 45,spd: 65,spe: 80},
		abilities: {0: "Chlorophyll"}
	},
	jumpluff:
	{
		inherit: true,
		types: ["Grass", "Flying"],
		baseStats: {hp: 75,atk: 55,def: 70,spa: 55,spd: 85,spe: 110},
		abilities: {0: "Chlorophyll"}
	},
	aipom:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 55,atk: 70,def: 55,spa: 40,spd: 55,spe: 85},
		abilities: {0: "Run Away", 1: "Pickup"}
	},
	sunkern:
	{
		inherit: true,
		types: ["Grass"],
		baseStats: {hp: 30,atk: 30,def: 30,spa: 30,spd: 30,spe: 30},
		abilities: {0: "Chlorophyll"}
	},
	sunflora:
	{
		inherit: true,
		types: ["Grass"],
		baseStats: {hp: 75,atk: 75,def: 55,spa: 105,spd: 85,spe: 30},
		abilities: {0: "Chlorophyll"}
	},
	yanma:
	{
		inherit: true,
		types: ["Bug", "Flying"],
		baseStats: {hp: 65,atk: 65,def: 45,spa: 75,spd: 45,spe: 95},
		abilities: {0: "Speed Boost", 1: "Compoundeyes"}
	},
	wooper:
	{
		inherit: true,
		types: ["Water", "Ground"],
		baseStats: {hp: 55,atk: 45,def: 45,spa: 25,spd: 25,spe: 15},
		abilities: {0: "Damp", 1: "Water Absorb"}
	},
	quagsire:
	{
		inherit: true,
		types: ["Water", "Ground"],
		baseStats: {hp: 95,atk: 85,def: 85,spa: 65,spd: 65,spe: 35},
		abilities: {0: "Damp", 1: "Water Absorb"}
	},
	espeon:
	{
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 65,atk: 65,def: 60,spa: 130,spd: 95,spe: 110},
		abilities: {0: "Synchronize"}
	},
	umbreon:
	{
		inherit: true,
		types: ["Dark"],
		baseStats: {hp: 95,atk: 65,def: 110,spa: 60,spd: 130,spe: 65},
		abilities: {0: "Synchronize"}
	},
	murkrow:
	{
		inherit: true,
		types: ["Dark", "Flying"],
		baseStats: {hp: 60,atk: 85,def: 42,spa: 85,spd: 42,spe: 91},
		abilities: {0: "Insomnia"}
	},
	slowking:
	{
		inherit: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 95,atk: 75,def: 80,spa: 100,spd: 110,spe: 30},
		abilities: {0: "Oblivious", 1: "Own Tempo"}
	},
	misdreavus:
	{
		inherit: true,
		types: ["Ghost"],
		baseStats: {hp: 60,atk: 60,def: 60,spa: 85,spd: 85,spe: 85},
		abilities: {0: "Levitate"}
	},
	unown:
	{
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 48,atk: 72,def: 48,spa: 72,spd: 48,spe: 48},
		abilities: {0: "Levitate"}
	},
	wobbuffet:
	{
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 190,atk: 33,def: 58,spa: 33,spd: 58,spe: 33},
		abilities: {0: "Shadow Tag"}
	},
	girafarig:
	{
		inherit: true,
		types: ["Normal", "Psychic"],
		baseStats: {hp: 70,atk: 80,def: 65,spa: 90,spd: 65,spe: 85},
		abilities: {0: "Inner Focus", 1: "Early Bird"}
	},
	pineco:
	{
		inherit: true,
		types: ["Bug"],
		baseStats: {hp: 50,atk: 65,def: 90,spa: 35,spd: 35,spe: 15},
		abilities: {0: "Sturdy"}
	},
	forretress:
	{
		inherit: true,
		types: ["Bug", "Steel"],
		baseStats: {hp: 75,atk: 90,def: 140,spa: 60,spd: 60,spe: 40},
		abilities: {0: "Sturdy"}
	},
	dunsparce:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 100,atk: 70,def: 70,spa: 65,spd: 65,spe: 45},
		abilities: {0: "Serene Grace", 1: "Run Away"}
	},
	gligar:
	{
		inherit: true,
		types: ["Ground", "Flying"],
		baseStats: {hp: 65,atk: 75,def: 105,spa: 35,spd: 65,spe: 85},
		abilities: {0: "Hyper Cutter", 1: "Sand Veil"}
	},
	steelix:
	{
		inherit: true,
		types: ["Steel", "Ground"],
		baseStats: {hp: 75,atk: 85,def: 200,spa: 55,spd: 65,spe: 30},
		abilities: {0: "Rock Head", 1: "Sturdy"}
	},
	snubbull:
	{
		inherit: true,
		types: ["Fairy"],
		baseStats: {hp: 60,atk: 80,def: 50,spa: 40,spd: 40,spe: 30},
		abilities: {0: "Intimidate", 1: "Run Away"}
	},
	granbull:
	{
		inherit: true,
		types: ["Fairy"],
		baseStats: {hp: 90,atk: 120,def: 75,spa: 60,spd: 60,spe: 45},
		abilities: {0: "Intimidate", 1: "Intimidate"}
	},
	qwilfish:
	{
		inherit: true,
		types: ["Water", "Poison"],
		baseStats: {hp: 65,atk: 95,def: 75,spa: 55,spd: 55,spe: 85},
		abilities: {0: "Poison Point", 1: "Swift Swim"}
	},
	scizor:
	{
		inherit: true,
		types: ["Bug", "Steel"],
		baseStats: {hp: 70,atk: 130,def: 100,spa: 55,spd: 80,spe: 65},
		abilities: {0: "Swarm"}
	},
	shuckle:
	{
		inherit: true,
		types: ["Bug", "Rock"],
		baseStats: {hp: 20,atk: 10,def: 230,spa: 10,spd: 230,spe: 5},
		abilities: {0: "Sturdy"}
	},
	heracross:
	{
		inherit: true,
		types: ["Bug", "Fighting"],
		baseStats: {hp: 80,atk: 125,def: 75,spa: 40,spd: 95,spe: 85},
		abilities: {0: "Swarm", 1: "Guts"}
	},
	sneasel:
	{
		inherit: true,
		types: ["Dark", "Ice"],
		baseStats: {hp: 55,atk: 95,def: 55,spa: 35,spd: 75,spe: 115},
		abilities: {0: "Inner Focus", 1: "Keen Eye"}
	},
	teddiursa:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 60,atk: 80,def: 50,spa: 50,spd: 50,spe: 40},
		abilities: {0: "Pickup"}
	},
	ursaring:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 90,atk: 130,def: 75,spa: 75,spd: 75,spe: 55},
		abilities: {0: "Guts"}
	},
	slugma:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 40,atk: 40,def: 40,spa: 70,spd: 40,spe: 20},
		abilities: {0: "Magma Armor", 1: "Flame Body"}
	},
	magcargo:
	{
		inherit: true,
		types: ["Fire", "Rock"],
		baseStats: {hp: 50,atk: 50,def: 120,spa: 80,spd: 80,spe: 30},
		abilities: {0: "Magma Armor", 1: "Flame Body"}
	},
	swinub:
	{
		inherit: true,
		types: ["Ice", "Ground"],
		baseStats: {hp: 50,atk: 50,def: 40,spa: 30,spd: 30,spe: 50},
		abilities: {0: "Oblivious"}
	},
	piloswine:
	{
		inherit: true,
		types: ["Ice", "Ground"],
		baseStats: {hp: 100,atk: 100,def: 80,spa: 60,spd: 60,spe: 50},
		abilities: {0: "Oblivious"}
	},
	corsola:
	{
		inherit: true,
		types: ["Water", "Rock"],
		baseStats: {hp: 55,atk: 55,def: 85,spa: 65,spd: 85,spe: 35},
		abilities: {0: "Hustle", 1: "Natural Cure"}
	},
	remoraid:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 35,atk: 65,def: 35,spa: 65,spd: 35,spe: 65},
		abilities: {0: "Hustle"}
	},
	octillery:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 75,atk: 105,def: 75,spa: 105,spd: 75,spe: 45},
		abilities: {0: "Suction Cups"}
	},
	delibird:
	{
		inherit: true,
		types: ["Ice", "Flying"],
		baseStats: {hp: 45,atk: 55,def: 45,spa: 65,spd: 45,spe: 75},
		abilities: {0: "Vital Spirit", 1: "Hustle"}
	},
	mantine:
	{
		inherit: true,
		types: ["Water", "Flying"],
		baseStats: {hp: 65,atk: 40,def: 70,spa: 80,spd: 140,spe: 70},
		abilities: {0: "Swift Swim", 1: "Water Absorb"}
	},
	skarmory:
	{
		inherit: true,
		types: ["Steel", "Flying"],
		baseStats: {hp: 65,atk: 80,def: 140,spa: 40,spd: 70,spe: 70},
		abilities: {0: "Keen Eye", 1: "Sturdy"}
	},
	houndour:
	{
		inherit: true,
		types: ["Dark", "Fire"],
		baseStats: {hp: 45,atk: 60,def: 30,spa: 80,spd: 50,spe: 65},
		abilities: {0: "Early Bird", 1: "Flash Fire"}
	},
	houndoom:
	{
		inherit: true,
		types: ["Dark", "Fire"],
		baseStats: {hp: 75,atk: 90,def: 50,spa: 110,spd: 80,spe: 95},
		abilities: {0: "Early Bird", 1: "Flash Fire"}
	},
	kingdra:
	{
		inherit: true,
		types: ["Water", "Dragon"],
		baseStats: {hp: 75,atk: 95,def: 95,spa: 95,spd: 95,spe: 85},
		abilities: {0: "Swift Swim"}
	},
	phanpy:
	{
		inherit: true,
		types: ["Ground"],
		baseStats: {hp: 90,atk: 60,def: 60,spa: 40,spd: 40,spe: 40},
		abilities: {0: "Pickup"}
	},
	donphan:
	{
		inherit: true,
		types: ["Ground"],
		baseStats: {hp: 90,atk: 120,def: 120,spa: 60,spd: 60,spe: 50},
		abilities: {0: "Sturdy"}
	},
	porygon2:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 85,atk: 80,def: 90,spa: 105,spd: 95,spe: 60},
		abilities: {0: "Trace"}
	},
	stantler:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 73,atk: 95,def: 62,spa: 85,spd: 65,spe: 85},
		abilities: {0: "Intimidate"}
	},
	smeargle:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 55,atk: 20,def: 35,spa: 20,spd: 45,spe: 75},
		abilities: {0: "Own Tempo"}
	},
	tyrogue:
	{
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 35,atk: 35,def: 35,spa: 35,spd: 35,spe: 35},
		abilities: {0: "Guts"}
	},
	hitmontop:
	{
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 50,atk: 95,def: 95,spa: 35,spd: 110,spe: 70},
		abilities: {0: "Intimidate"}
	},
	smoochum:
	{
		inherit: true,
		types: ["Ice", "Psychic"],
		baseStats: {hp: 45,atk: 30,def: 15,spa: 85,spd: 65,spe: 65},
		abilities: {0: "Oblivious"}
	},
	elekid:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 45,atk: 63,def: 37,spa: 65,spd: 55,spe: 95},
		abilities: {0: "Static"}
	},
	magby:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 45,atk: 75,def: 37,spa: 70,spd: 55,spe: 83},
		abilities: {0: "Flame Body"}
	},
	miltank:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 95,atk: 80,def: 105,spa: 40,spd: 70,spe: 100},
		abilities: {0: "Thick Fat"}
	},
	blissey:
	{
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 255,atk: 10,def: 10,spa: 75,spd: 135,spe: 55},
		abilities: {0: "Natural Cure", 1: "Serene Grace"}
	},
	raikou:
	{
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 90,atk: 85,def: 75,spa: 115,spd: 100,spe: 115},
		abilities: {0: "Pressure"}
	},
	entei:
	{
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 115,atk: 115,def: 85,spa: 90,spd: 75,spe: 100},
		abilities: {0: "Pressure"}
	},
	suicune:
	{
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 100,atk: 75,def: 115,spa: 90,spd: 115,spe: 85},
		abilities: {0: "Pressure"}
	},
	larvitar:
	{
		inherit: true,
		types: ["Rock", "Ground"],
		baseStats: {hp: 50,atk: 64,def: 50,spa: 45,spd: 50,spe: 41},
		abilities: {0: "Guts"}
	},
	pupitar:
	{
		inherit: true,
		types: ["Rock", "Ground"],
		baseStats: {hp: 70,atk: 84,def: 70,spa: 65,spd: 70,spe: 51},
		abilities: {0: "Shed Skin"}
	},
	tyranitar:
	{
		inherit: true,
		types: ["Rock", "Dark"],
		baseStats: {hp: 100,atk: 134,def: 110,spa: 95,spd: 100,spe: 61},
		abilities: {0: "Sand Stream"}
	},
	lugia:
	{
		inherit: true,
		types: ["Psychic", "Flying"],
		baseStats: {hp: 106,atk: 90,def: 130,spa: 90,spd: 154,spe: 110},
		abilities: {0: "Pressure"}
	},
	hooh:
	{
		inherit: true,
		types: ["Fire", "Flying"],
		baseStats: {hp: 106,atk: 130,def: 90,spa: 110,spd: 154,spe: 90},
		abilities: {0: "Pressure"}
	},
	celebi:
	{
		inherit: true,
		types: ["Psychic", "Grass"],
		baseStats: {hp: 100,atk: 100,def: 100,spa: 100,spd: 100,spe: 100},
		abilities: {0: "Natural Cure"}
	},

}