export const Items: {[itemid: string]: ModdedItemData} = {
	//slate 1
	kunai: {
		name: "Kunai",
		fling: {
			basePower: 90,
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source.kunai === undefined) source.kunai = 0;
			console.log(source.kunai);
			if (move.category !== 'Status') source.kunai ++;
			else source.kunai = 0;
			if (source.kunai >= 3) {
				this.boost({def: 1, spd: 1});
				source.kunai = 0;
			}
		},
		num: 640,
		gen: 6,
		shortDesc: "If the holder uses 3 consecutive attacking moves, it gains +1 Defense and Special Defense.",
		rating: 3,
	},
	fishhook: {
		name: "Fish Hook",
		fling: {
			basePower: 90,
		},
		onFoeTrapPokemon(pokemon) {
			if (pokemon.hasType('Water') && pokemon.isAdjacent(this.effectState.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (!pokemon.knownType || pokemon.hasType('Water')) {
				pokemon.maybeTrapped = true;
			}
		},
		onDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				const move = this.dex.moves.get(moveSlot.id);
				if (move.type === 'Electric' || move.type === 'Grass') {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		num: 270,
		shortDesc: "Prevents opposing Water-types from switching out while holder is active. Holder cannot use Grass or Electric-type moves.",
		gen: 4,
		rating: 3,
	},
	baseball: {
		name: "Baseball",
		spritenum: 606,
		fling: {
			basePower: 10,
			status: 'baseball',
		},
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (this.effectState.target.activeTurns) return;
			if (target.useItem()) {
				this.add('-message', `baseball this guy`);
				return null;
			}
		},
		onStart(pokemon) {
			pokemon.trySetStatus('baseball', pokemon);
		},
		num: 640,
		gen: 6,
		shortDesc: 'When switching in, any attacker gets Baseballed. Single use.',
		rating: 3,
	},
	ironfist: {
		spritenum: 749,
		fling: {
			basePower: 60,
			multihit: 2,
			secondary: {
				chance: 30,
				volatileStatus: 'flinch',
			},
		},
		onPrepareHit(source, target, move) {
			if (move.flags['punch'] && move.name !== "Double Iron Bash") {
				this.actions.useMove("Double Iron Bash", source, target);
				return null;
			}
		},
		flags: {},
		name: "Iron Fist",
		rating: 3,
		shortDesc: "All punching moves turn into Double Iron Bash.",
		num: 89,
	},
	kinglerite: {
		name: "Kinglerite",
		shortDesc: "If held by a Kingler, this item allows it to Mega Evolve in battle.",
		spritenum: 605,
		megaStone: "Kingler-Mega",
		megaEvolves: "Kingler",
		itemUser: ["Kingler"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
	},

	//slate 2
	balanceboard: {
		name: "Balance Board",
		shortDesc: "If Atk/Def/SpA/SpD is raised, SpA/SpD/Atk/Def is raised. Single use.",
		spritenum: 716,
		rating: 3,
		onAfterBoost(boost, target, source, effect) {
			if (!boost || effect.id === 'balanceboard') return;
			let activated = false;
			const balanceBoost: SparseBoostsTable = {};
			if (boost.spa && boost.atk != boost.spa) {
				balanceBoost.atk = boost.spa;
				activated = true;
			}
			if (boost.spd && boost.def != boost.spd) {
				balanceBoost.def = boost.spd;
				activated = true;
			}
			if (boost.atk && boost.atk != boost.spa) {
				balanceBoost.spa = boost.atk;
				activated = true;
			}
			if (boost.def && boost.def != boost.spd) {
				balanceBoost.spd = boost.def;
				activated = true;
			}
			if (activated && target.useItem()) {
				this.boost(balanceBoost, target, target, null, true);
			}
		},
	},
	buckethat: {
		fling: {
			basePower: 30,
			onHit(target, source, move) {
				source.side.addFishingTokens(1);
			},
		},
		name: "Bucket Hat",
		shortDesc: "On switchin, the holder consumes a Fishing Token to restore 1/4 max HP.",
		spritenum: 236,
		rating: 3,
		onSwitchIn(pokemon) {
			if (pokemon.hp != pokemon.baseMaxhp && pokemon.side.removeFishingTokens(1)) {
				this.heal(pokemon.baseMaxhp / 4);
			}
		},
	},
	jarofmercury: {
		name: "Jar of Mercury",
		shortDesc: "If the holder were to be hit by DIB, lowers attacker's stats by 1.  Single use.",
		spritenum: 761,
		rating: 3,
		fling: {
			basePower: 10,
			boosts: {
				atk: -1,
				def: -1,
				spa: -1,
				spd: -1,
				spe: -1,
			},
		},
		onTryHit(pokemon, source, move) {
			if (move.name === 'Double Iron Bash' && pokemon.useItem()) {
				this.add('-activate', pokemon, 'item: Jar of Mercury', move.name);
				this.boost({atk: -1, def: -1, spa: -1, spd: -1, spe: -1}, source, pokemon, null, true);
				return null;
			}
		},
		num: 650,
		gen: 6,
	},
	nervecharm: {
		name: "Nerve Charm",
		shortDesc: "(Semi-functional) Every other turn, the holder sets Quick Guard.",
		rating: 3,
		fling: {
			basePower: 40,
			priority: 1,
		},
		onStart(pokemon) {
			pokemon.removeVolatile('nervecharm');
			if (pokemon.activeTurns) {
				pokemon.addVolatile('nervecharm');
			}
		},
		beforeTurnCallback(pokemon) {
			if (pokemon.removeVolatile('nervecharm')) {
				console.log("adding quickguard");
				pokemon.side.addSideCondition('quickguard');
			}
			pokemon.addVolatile('nervecharm');
		},
		condition: {},
	},
	cornerstonemask: {
		inherit: true,
		shortDesc: "Ougayporn-Comerstone: 1.2x power attacks.",
		rating: 3,
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Ougayporn-Comerstone') return false;
			return true;
		},
		forcedForme: "Ougayporn-Comerstone",
		itemUser: ["Ougayporn-Comerstone"],
	},
	electrodite: {
		name: "Electrodite",
		shortDesc: "If held by an Electrode, this item allows it to Mega Evolve in battle.",
		spritenum: 628,
		megaStone: "Electrode-Mega",
		megaEvolves: "Electrode",
		itemUser: ["Electrode"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
	},

	//slate 3
	aguavberry: {
		inherit: true,
		shortDesc: "Restores 60% max HP at 1/4 max HP or less; confuses if -SpD Nature. Single use.",
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp * .6)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * .6);
			if (pokemon.getNature().minus === 'spd') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	figyberry: {
		inherit: true,
		shortDesc: "Restores 60% max HP at 1/4 max HP or less; confuses if -Atk Nature. Single use.",
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp * .6)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * .6);
			if (pokemon.getNature().minus === 'atk') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	iapapaberry: {
		inherit: true,
		shortDesc: "Restores 60% max HP at 1/4 max HP or less; confuses if -Def Nature. Single use.",
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp * .6)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * .6);
			if (pokemon.getNature().minus === 'def') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	magoberry: {
		inherit: true,
		shortDesc: "Restores 60% max HP at 1/4 max HP or less; confuses if -Spe Nature. Single use.",
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp * .6)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * .6);
			if (pokemon.getNature().minus === 'spe') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	wikiberry: {
		inherit: true,
		shortDesc: "Restores 60% max HP at 1/4 max HP or less; confuses if -SpA Nature. Single use.",
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp * .6)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp * .6);
			if (pokemon.getNature().minus === 'spa') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	zeldaniumz: {
		name: "Zeldanium Z",
		shortDesc: "If held by a Zelda with Triple Arrows, it can use Arrows of Light.",
		spritenum: 651,
		onTakeItem: false,
		zMove: "Arrows of Light",
		zMoveFrom: "Triple Arrows",
		itemUser: ["Zelda"],
	},
	moltresite: {
		name: "Moltresite",
		shortDesc: "If held by a Moltres, this item allows it to Mega Evolve in battle.",
		spritenum: 622,
		megaStone: "Moltres-Mega",
		megaEvolves: "Moltres",
		itemUser: ["Moltres"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
	},
	impidimpite: {
		name: "Impidimpite",
		shortDesc: "If held by an Impidimp, this item allows it to Mega Evolve in battle.",
		spritenum: 601,
		megaStone: "Impidimp-Mega",
		megaEvolves: "Impidimp",
		itemUser: ["Impidimp"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
	},
	fleshvaliantite: {
		name: "Fleshvaliantite",
		shortDesc: "If held by a Flesh Valiant, this item allows it to Mega Evolve in battle.",
		spritenum: 587,
		megaStone: "Flesh Valiant-Mega",
		megaEvolves: "Flesh Valiant",
		itemUser: ["Flesh Valiant"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
	},
}
