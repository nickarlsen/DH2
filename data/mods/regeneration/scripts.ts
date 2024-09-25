export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
   gen: 9,
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ['ReGeneration', 'ReGeneration NFE', 'ReGeneration LC'],
		customDoublesTiers: ['ReGeneration', 'ReGeneration NFE', 'ReGeneration LC'],
	},
	init() {
		   this.modData("Learnsets", "alakazam").learnset.brainwave = ["9L1"];

		   this.modData("Learnsets", "gengar").learnset.avalanche = ["9L1"];
		   this.modData("Learnsets", "gengar").learnset.blizzard = ["9L1"];
		   this.modData("Learnsets", "gengar").learnset.focusenergy = ["9L1"];
		   this.modData("Learnsets", "gengar").learnset.frostbreath = ["9L1"];
		   this.modData("Learnsets", "gengar").learnset.icebeam = ["9L1"];
		   this.modData("Learnsets", "gengar").learnset.iceshard = ["9L1"];
		   this.modData("Learnsets", "gengar").learnset.powdersnow = ["9L1"];
		   this.modData("Learnsets", "gengar").learnset.snowscape = ["9L1"];
		   this.modData("Learnsets", "gengar").learnset.illwind = ["9L1"];

		   this.modData("Learnsets", "dragonite").learnset.barrier = ["9L1"];
		   this.modData("Learnsets", "dragonite").learnset.guardiandive = ["9L1"];
		   this.modData("Learnsets", "dragonite").learnset.uturn = ["9L1"];

		   this.modData("Learnsets", "venusaur").learnset.aromaticmist = ["9L1"];
		   this.modData("Learnsets", "venusaur").learnset.calmmind = ["9L1"];
		   this.modData("Learnsets", "venusaur").learnset.dazzlinggleam = ["9L1"];
		   this.modData("Learnsets", "venusaur").learnset.drainingkiss = ["9L1"];
		   this.modData("Learnsets", "venusaur").learnset.fairywind = ["9L1"];
		   this.modData("Learnsets", "venusaur").learnset.floralhealing = ["9L1"];
		   this.modData("Learnsets", "venusaur").learnset.flowershield = ["9L1"];
		   this.modData("Learnsets", "venusaur").learnset.healpulse = ["9L1"];
		   this.modData("Learnsets", "venusaur").learnset.playrough = ["9L1"];
		   this.modData("Learnsets", "venusaur").learnset.psychic = ["9L1"];
		   this.modData("Learnsets", "venusaur").learnset.vitalenergy = ["9L1"];
		   this.modData("Learnsets", "venusaur").learnset.zenheadbutt = ["9L1"];

		   this.modData("Learnsets", "charizard").learnset.ceaselessedge = ["9L1"];
		   this.modData("Learnsets", "charizard").learnset.throatchop = ["9L1"];
		   this.modData("Learnsets", "charizard").learnset.smokytorment = ["9L1"];
		   this.modData("Learnsets", "charizard").learnset.suckerpunch = ["9L1"];

		   this.modData("Learnsets", "blastoise").learnset.chargebeam = ["9L1"];
		   this.modData("Learnsets", "blastoise").learnset.charge = ["9L1"];
		   this.modData("Learnsets", "blastoise").learnset.iondeluge = ["9L1"];
		   this.modData("Learnsets", "blastoise").learnset.powerwash = ["9L1"];
		   this.modData("Learnsets", "blastoise").learnset.thunder = ["9L1"];
		   this.modData("Learnsets", "blastoise").learnset.thunderwave = ["9L1"];
		   this.modData("Learnsets", "blastoise").learnset.thunderbolt = ["9L1"];
		   this.modData("Learnsets", "blastoise").learnset.thundershock = ["9L1"];
		   this.modData("Learnsets", "blastoise").learnset.voltswitch = ["9L1"];
		   this.modData("Learnsets", "blastoise").learnset.zapcannon = ["9L1"];

		   this.modData("Learnsets", "beedrill").learnset.closecombat = ["9L1"];
		   this.modData("Learnsets", "beedrill").learnset.flail = ["9L1"];
		   this.modData("Learnsets", "beedrill").learnset.reversal = ["9L1"];
		   this.modData("Learnsets", "beedrill").learnset.spikes = ["9L1"];
		   this.modData("Learnsets", "beedrill").learnset.stickyweb = ["9L1"];
		   this.modData("Learnsets", "beedrill").learnset.taunt = ["9L1"];
		   this.modData("Learnsets", "beedrill").learnset.terablast = ["9L1"];

		   this.modData("Learnsets", "pidgeot").learnset.acrobatics = ["9L1"];
		   this.modData("Learnsets", "pidgeot").learnset.closecombat = ["9L1"];

		   this.modData("Learnsets", "wigglytuff").learnset.crunch = ["9L1"];
		   this.modData("Learnsets", "wigglytuff").learnset.darkpulse = ["9L1"];
		   this.modData("Learnsets", "wigglytuff").learnset.rapidspin = ["9L1"];
		   this.modData("Learnsets", "wigglytuff").learnset.taunt = ["9L1"];
		   this.modData("Learnsets", "wigglytuff").learnset.uturn = ["9L1"];

		   this.modData("Learnsets", "dodrio").learnset.brickbreak = ["9L1"];
		   this.modData("Learnsets", "dodrio").learnset.bulldoze = ["9L1"];
		   this.modData("Learnsets", "dodrio").learnset.dig = ["9L1"];
		   this.modData("Learnsets", "dodrio").learnset.drillrun = ["9L1"];
		   this.modData("Learnsets", "dodrio").learnset.earthquake = ["9L1"];
		   this.modData("Learnsets", "dodrio").learnset.highjumpkick = ["9L1"];
		   this.modData("Learnsets", "dodrio").learnset.lowkick = ["9L1"];
		   this.modData("Learnsets", "dodrio").learnset.quickguard = ["9L1"];
		   this.modData("Learnsets", "dodrio").learnset.rototiller = ["9L1"];
		   this.modData("Learnsets", "dodrio").learnset.sandattack = ["9L1"];
		   this.modData("Learnsets", "dodrio").learnset.triplekick = ["9L1"];

		   this.modData("Learnsets", "seadra").learnset.acidspray = ["9L1"];
		   this.modData("Learnsets", "seadra").learnset.coralcrash = ["9L1"];
		   this.modData("Learnsets", "seadra").learnset.dracometeor = ["9L1"];
		   this.modData("Learnsets", "seadra").learnset.sludgebomb = ["9L1"];
		   this.modData("Learnsets", "seadra").learnset.sludgewave = ["9L1"];
		   this.modData("Learnsets", "seadra").learnset.thunder = ["9L1"];
		   this.modData("Learnsets", "seadra").learnset.thunderbolt = ["9L1"];
		   this.modData("Learnsets", "seadra").learnset.toxicspikes = ["9L1"];

		   this.modData("Learnsets", "vaporeon").learnset.slipaway = ["9L1"];

		   this.modData("Learnsets", "flareon").learnset.crunch = ["9L1"];
		   this.modData("Learnsets", "flareon").learnset.flareout = ["9L1"];
		   this.modData("Learnsets", "flareon").learnset.playrough = ["9L1"];
		   this.modData("Learnsets", "flareon").learnset.psychicfangs = ["9L1"];
		   this.modData("Learnsets", "flareon").learnset.suckerpunch = ["9L1"];

		   this.modData("Learnsets", "jolteon").learnset.buzzoff = ["9L1"];

		   this.modData("Learnsets", "nidoking").learnset.barbbarrage = ["9L1"];

		   this.modData("Learnsets", "nidoqueen").learnset.moonlight = ["9L1"];

		   this.modData("Learnsets", "butterfree").learnset.strengthsap = ["9L1"];
		   this.modData("Learnsets", "butterfree").learnset.powdergale = ["9L1"];

		delete this.modData('Learnsets', 'alakazam').learnset.focusblast;
		delete this.modData('Learnsets', 'alakazam').learnset.nastyplot;

		delete this.modData('Learnsets', 'gengar').learnset.focusblast;
		delete this.modData('Learnsets', 'gengar').learnset.nastyplot;
		delete this.modData('Learnsets', 'gengar').learnset.terablast;
		delete this.modData('Learnsets', 'gengar').learnset.thunderbolt;
		delete this.modData('Learnsets', 'gengar').learnset.thunder;

		delete this.modData('Learnsets', 'dragonite').learnset.dragonclaw;
		delete this.modData('Learnsets', 'dragonite').learnset.dragondance;
		delete this.modData('Learnsets', 'dragonite').learnset.dragonrush;
		delete this.modData('Learnsets', 'dragonite').learnset.dualwingbeat;
		delete this.modData('Learnsets', 'dragonite').learnset.honeclaws;
		delete this.modData('Learnsets', 'dragonite').learnset.outrage;
		delete this.modData('Learnsets', 'dragonite').learnset.poweruppunch;
		delete this.modData('Learnsets', 'dragonite').learnset.terablast;

		delete this.modData('Learnsets', 'venusaur').learnset.earthpower;
		delete this.modData('Learnsets', 'venusaur').learnset.weatherball;

		delete this.modData('Learnsets', 'blastoise').learnset.aurasphere;
		delete this.modData('Learnsets', 'blastoise').learnset.avalanche;
		delete this.modData('Learnsets', 'blastoise').learnset.blizzard;
		delete this.modData('Learnsets', 'blastoise').learnset.focusblast;
		delete this.modData('Learnsets', 'blastoise').learnset.hail;
		delete this.modData('Learnsets', 'blastoise').learnset.icebeam;
		delete this.modData('Learnsets', 'blastoise').learnset.icepunch;
		delete this.modData('Learnsets', 'blastoise').learnset.icywind;
		delete this.modData('Learnsets', 'blastoise').learnset.mist;
		delete this.modData('Learnsets', 'blastoise').learnset.shellsmash;

		delete this.modData('Learnsets', 'pidgeot').learnset.toxic;

		delete this.modData('Learnsets', 'dodrio').learnset.fly;

		delete this.modData('Learnsets', 'seadra').learnset.blizzard;
		delete this.modData('Learnsets', 'seadra').learnset.icebeam;

		// Removing the prevos' moves
		delete this.modData('Learnsets', 'gastly').learnset.nastyplot;
		delete this.modData('Learnsets', 'gastly').learnset.terablast;
		delete this.modData('Learnsets', 'gastly').learnset.thunderbolt;
		delete this.modData('Learnsets', 'gastly').learnset.thunder;

		delete this.modData('Learnsets', 'haunter').learnset.focusblast;
		delete this.modData('Learnsets', 'haunter').learnset.nastyplot;
		delete this.modData('Learnsets', 'haunter').learnset.terablast;
		delete this.modData('Learnsets', 'haunter').learnset.thunderbolt;
		delete this.modData('Learnsets', 'haunter').learnset.thunder;

		delete this.modData('Learnsets', 'dratini').learnset.dragondance;
		delete this.modData('Learnsets', 'dratini').learnset.dragonrush;
		delete this.modData('Learnsets', 'dratini').learnset.outrage;
		delete this.modData('Learnsets', 'dratini').learnset.terablast;

		delete this.modData('Learnsets', 'dragonair').learnset.dragondance;
		delete this.modData('Learnsets', 'dragonair').learnset.dragonrush;
		delete this.modData('Learnsets', 'dragonair').learnset.outrage;
		delete this.modData('Learnsets', 'dragonair').learnset.terablast;

		delete this.modData('Learnsets', 'bulbasaur').learnset.weatherball;

		delete this.modData('Learnsets', 'ivysaur').learnset.weatherball;

		delete this.modData('Learnsets', 'squirtle').learnset.aurasphere;
		delete this.modData('Learnsets', 'squirtle').learnset.blizzard;
		delete this.modData('Learnsets', 'squirtle').learnset.hail;
		delete this.modData('Learnsets', 'squirtle').learnset.icebeam;
		delete this.modData('Learnsets', 'squirtle').learnset.icepunch;
		delete this.modData('Learnsets', 'squirtle').learnset.mist;
		delete this.modData('Learnsets', 'squirtle').learnset.shellsmash;

		delete this.modData('Learnsets', 'wartortle').learnset.aurasphere;
		delete this.modData('Learnsets', 'wartortle').learnset.blizzard;
		delete this.modData('Learnsets', 'wartortle').learnset.hail;
		delete this.modData('Learnsets', 'wartortle').learnset.icebeam;
		delete this.modData('Learnsets', 'wartortle').learnset.icepunch;
		delete this.modData('Learnsets', 'wartortle').learnset.mist;
		delete this.modData('Learnsets', 'wartortle').learnset.shellsmash;

		delete this.modData('Learnsets', 'pidgey').learnset.toxic;

		delete this.modData('Learnsets', 'pidgeotto').learnset.toxic;

		delete this.modData('Learnsets', 'doduo').learnset.fly;

		delete this.modData('Learnsets', 'horsea').learnset.blizzard;
		delete this.modData('Learnsets', 'horsea').learnset.icebeam;
	},


};
