export const Abilities: {[abilityid: string]: AbilityData} = {
	galewings: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move && (move.type === 'Flying' ||
				(pokemon.species.id === 'silvallyflying' &&
					move.id === 'multiattack')) && pokemon.hp === pokemon.maxhp) {
				return priority + 1;
			}
		},
		name: "Gale Wings",
		rating: 3,
		num: 177,
	},
	powerofalchemy: {
		onAnyFaint(target) {
			if (!this.effectState.target.hp) return;
			const ability = target.getAbility();
			const additionalBannedAbilities = [
				'noability', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'wonderguard',
			];
			if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) return;
			this.add('-ability', this.effectState.target, ability, '[from] ability: Power of Alchemy', '[of] ' + target);
			this.effectState.target.setAbility(ability);
		},
		name: "Power of Alchemy",
		shortDesc: "This Pokémon copies the ability of the last fainted Pokémon.",
		rating: 0,
		num: 223,
	},
	quickdraw: {
		onModifyPriority(priority, source, move) {
			if (source.activeMoveActions < 1) {
				return priority + 1;
			} else if (source.activeMoveActions > 1) {
				return priority + 0;
			}
		},
		name: "Quick Draw",
		shortDesc: "User's moves have increased priority in the first turn.",
		rating: 2.5,
		num: 259,
	},
	rkssystem: { // Unused code but I'll keep it cause it can be useful in the future
		onStart(pokemon) {
			switch (pokemon.species.id) {
			case 'silvally':
				this.add('-ability', pokemon, 'Adaptability', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('adaptability');
				break;
			case 'silvallybug':
				this.add('-ability', pokemon, 'Tinted Lens', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('tintedlens');
				break;
			case 'silvallydark':
				this.add('-ability', pokemon, 'Dark Aura', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('darkaura');
				break;
			case 'silvallydragon':
				this.add('-ability', pokemon, 'Multiscale', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('multiscale');
				break;
			case 'silvallyelectric':
				this.add('-ability', pokemon, 'Lightning Rod', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('lightningrod');
				break;
			case 'silvallyfairy':
				this.add('-ability', pokemon, 'Misty Surge', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('mistysurge');
				break;
			case 'silvallyfighting':
				this.add('-ability', pokemon, 'Scrappy', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('scrappy');
				break;
			case 'silvallyfire':
				this.add('-ability', pokemon, 'Flash Fire', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('flashfire');
				break;
			case 'silvallyflying':
				this.add('-ability', pokemon, 'Gale Wings', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('galewings');
				break;
			case 'silvallyghost':
				this.add('-ability', pokemon, 'Prankster', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('prankster');
				break;
			case 'silvallygrass':
				this.add('-ability', pokemon, 'Grassy Surge', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('grassysurge');
				break;
			case 'silvallyground':
				this.add('-ability', pokemon, 'Mold Breaker', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('moldbreaker');
				break;
			case 'silvallyice':
				this.add('-ability', pokemon, 'Refrigerate', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('refrigerate');
				break;
			case 'silvallypoison':
				this.add('-ability', pokemon, 'Corrosion', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('corrosion');
				break;
			case 'silvallypsychic':
				this.add('-ability', pokemon, 'Magic Guard', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('magicguard');
				break;
			case 'silvallyrock':
				this.add('-ability', pokemon, 'Sand Stream', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('sandstream');
				break;
			case 'silvallysteel':
				this.add('-ability', pokemon, 'Magnet Pull', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('magnetpull');
				break;
			case 'silvallywater':
				this.add('-ability', pokemon, 'Water Absorb', '[from] ability: RKS System', '[of] ' + pokemon);
				pokemon.setAbility('waterabsorb');
				break;
			}
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1},
		name: "RKS System",
		shortDesc: "Ability varies based on the user's type.",
		rating: 4,
		num: 225,
	},
	staticcling: {
		onTakeItem(item, pokemon, source) {
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if (!pokemon.hp || pokemon.item === 'stickybarb') return;
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				this.add('-activate', pokemon, 'ability: Static Cling');
				return false;
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				if (target.item || target.switchFlag || target.forceSwitchFlag || source.switchFlag === true) {
					return;
				}
				const yourItem = source.takeItem(target);
				if (!yourItem) {
					return;
				}
				if (!target.setItem(yourItem)) {
					source.item = yourItem.id;
					return;
				}
				this.add('-enditem', source, yourItem, '[silent]', '[from] ability: Static Cling', '[of] ' + target);
			}
		},
		onSourceHit(target, source, move) {
			if (!move || !target) return;
			if (target !== source && move.flags['contact']) {
				if (source.item || source.volatiles['gem'] || move.id === 'fling') return;
				const yourItem = target.takeItem(source);
				if (!yourItem) return;
				if (!source.setItem(yourItem)) {
					target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
					return;
				}
				this.add('-enditem', source, yourItem, '[silent]', '[from] ability: Static Cling', '[of] ' + source);
				this.add('-item', target, yourItem, '[from] ability: Static Cling', '[of] ' + source);
			}
		},
		name: "Static Cling",
		shortDesc: "User cannot lose its item. Steals opponent's item on contact.",
		rating: 4,
		num: -1,
	},
	rarecold: {
		onSourceModifyDamage(damage, source, target, move) {
			if (source.getStat('spe', false, true) <= target.getStat('spe', false, true) && !(move.priority > 0.1)) {
				return this.chainModify(0.7);
			}
		},
		name: "Rare Cold",
		shortDesc: "User takes 30% less damage if user moves before the target.",
		rating: 0,
		num: -2,
	},
	watercycle: {
		onBasePower(basePower, attacker, defender, move) {
			if (defender.volatiles['partiallytrapped'] || defender.volatiles['trapped']) {
				return this.chainModify(1.3);
			}
		},
		name: "Water Cycle",
		shortDesc: "User deal 1.3x damage to trapped targets.",
		rating: 0,
		num: -3,
	},
	cloudburst: {
		onBeforeMove(source, target, move) {
			if (move.type === 'Electric' && !this.field.isWeather('raindance')) {
				this.field.setWeather('raindance');
			}
		},
		name: "Cloud Burst",
		shortDesc: "User summons Rain before executing an Electric-type move.",
		rating: 0,
		num: -4,
	},
	packleader: {
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				return this.chainModify(1.3);
			}
		},
		name: "Pack Leader",
		shortDesc: "If this Pokemon goes first, it deals 1.3x damage.",
		rating: 0,
		num: -5,
	},
	/* privatewifi: {
		onStart(source) {
			if (source.hasItem('burndrive')) {
				source.types[1] = 'Fire';
			} else if (source.hasItem('chilldrive')) {
				source.types[1] = 'Ice';
			} else if (source.hasItem('dousedrive')) {
				source.types[1] = 'Water';
			} else if (source.hasItem('shockdrive')) {
				source.types[1] = 'Electric';
			}
			this.add('-activate', source, 'ability: Private Wi-Fi');
			this.add('-message', `${source.name} changed its type to match its Drive!`);
			for (const foeactive of source.side.foe.active) {
				if (
					!foeactive ||
					foeactive.fainted ||
					(
						!foeactive.hasType(source.types[1]) &&
						!foeactive.hasType("Steel")
					)
				) continue;
				// Boosts player's Pokemon's highest stat
				let statName = 'atk';
				let bestStat = 0;
				let s: StatIDExceptHP;
				for (s in source.storedStats) {
					if (source.storedStats[s] > bestStat) {
						statName = s;
						bestStat = source.storedStats[s];
					}
				}
				this.boost({[statName]: 1}, source);

				// Boosts opponent's Pokemon's highest stat
				let statNameOpp = 'atk';
				let bestStatOpp = 0;
				let sOpp: StatIDExceptHP;
				for (sOpp in foeactive.storedStats) {
					if (foeactive.storedStats[sOpp] > bestStatOpp) {
						statNameOpp = sOpp;
						bestStatOpp = foeactive.storedStats[sOpp];
					}
				}
				this.boost({[statNameOpp]: 1}, foeactive);
			}
		},
		name: "Private Wi-Fi",
		shortDesc: "If this Pokemon switches in and the opposing Pokemon shares its type, both have their highest stat boosted.",
		rating: 0,
		num: -6,
	},*/
	mountaineer: {
		onDamage(damage, target, source, effect) {
			if (effect && effect.id === 'stealthrock') {
				return false;
			}
		},
		onTryHit(target, source, move) {
			if (move.type === 'Rock' && !target.activeTurns) {
				this.add('-immune', target, '[from] ability: Mountaineer');
				return null;
			}
		},
		isNonstandard: undefined,
		name: "Mountaineer",
		rating: 3,
		num: -2,
	},
	lifegem: {
		onModifyDamage(damage, source, target, move) {
			if (!target.hasAbility("aurabreak")) {
				return this.chainModify(1.3);
			}
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status') {
				this.damage(source.baseMaxhp / 10, source, source);
			}
		},
		name: "Life Gem",
		shortDesc: "Holder's attacks do 1.3x damage, and it loses 1/10 its max HP after the attack.",
		rating: 3,
		num: -7,
	},
	powercore: {
		onTryBoost(boost, target, source, effect) {
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: Power Core", "[of] " + target);
			}
		},
		name: "Power Core",
		shortDesc: "This Pokemon's stats cannot be changed.",
		rating: 3,
		num: -8,
	},
	aerialmenace: {
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Flying') {
				if (!this.boost({atk: 1})) {
					this.add('-immune', target, '[from] ability: Aerial Menace');
				}
				return null;
			}
		},
		name: "Aerial Menace",
		shortDesc: "This Pokemon's attack is raised by one stage if hit by a Flying-type move; Flying-type immunity.",
		rating: 3,
		num: -9,
	},
	shadowworld: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Shadow World');
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target !== source || move.category !== 'Status' || move.type === 'Ghost' || move.type === 'Dark') {
				if (!move.auraBooster) move.auraBooster = this.effectState.target;
				if (move.auraBooster !== this.effectState.target) return;
				return this.chainModify(1.2);
			} else if (target !== source || move.category !== 'Status' || move.type === 'Fairy' || move.type === 'Psychic') {
				if (!move.auraBooster) move.auraBooster = this.effectState.target;
				if (move.auraBooster !== this.effectState.target) return;
				return this.chainModify(0.8);
			}
		},
		name: "Shadow World",
		shortDesc: "While active, Ghost & Dark moves have 1.2x power. Psychic & Fairy have 0.8x power.",
		rating: 3,
		num: -10,
	},
	burnheal: {
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'brn') {
				this.heal(target.baseMaxhp / 8);
				return false;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon, target, move) {
			// this is a hack but it's a lot shorter than copying the entire modifyDamage function into scripts to change 1 line
			if (pokemon.status === "brn" && move.id !== "facade") {
				return this.chainModify(2);
			}
		},
		name: "Burn Heal",
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when burned; no HP loss or damage reduction.",
		rating: 4,
		num: -11,
	},
	sharpshooter: {
		onStart(source) {
			const target = source.side.foe.active[0];
			target.addVolatile('lockon', source);
			this.add('-activate', target, 'move: Lock-On', '[of] ' + source);
		},
		name: "Sharpshooter",
		shortDesc: "On switch-in, this Pokemon activates the Lock-On effect.",
		rating: 2,
		num: -12,
	},
	forecast: {
		onBasePowerPriority: 9,
		onBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire' || move.type === 'Water') {
				this.debug('forecast boost');
				return this.chainModify(1.5);
			}
		},
		name: "Forecast",
		shortDesc: "Ice-, Fire-, and Water-type moves deal 1.5x damage.",
		rating: 2,
		num: 59,
	},
	liquidscales: {
		onDamagingHit(damage, target, source, move) {
			if (move.category !== 'Status') {
				this.add('-activate', target, 'ability: Liquid Scales');
				this.heal(target.baseMaxhp / 10);
			}
		},
		name: "Liquid Scales",
		shortDesc: "If targeted by a foe's move, this Pokemon restores 1/10 max HP.",
		rating: 3,
		num: -13,
	},
	flowergift: {
		onModifyAtkPriority: 3,
		onModifyAtk(atk, source) {
			for (const pokemon of this.getAllActive()) {
				if (pokemon.hasAbility('aurabreak')) return;
			}
			if (source.species.id !== 'shayminsky') return;
			if (['sunnyday', 'desolateland'].includes(source.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 4,
		onModifySpD(spd, source) {
			if (source.species.id !== 'shayminsky') return;
			if (['sunnyday', 'desolateland'].includes(source.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		name: "Flower Gift",
		shortDesc: "If user is Shaymin-Sky and Sunny Day is active, its Attack and Sp. Def are 1.5x.",
		rating: 1,
		num: 122,
	},
	mistycoat: {
		onModifySpDPriority: 6,
		onModifySpD(pokemon) {
			if (this.field.isTerrain('mistyterrain')) return this.chainModify(1.5);
		},
		name: "Misty Coat",
		shortDesc: "If Misty Terrain is active, this Pokemon's Special Defense is multiplied by 1.5.",
		rating: 0.5,
		num: -14,
	},
	pulpup: {
		onStart(pokemon) {
			pokemon.addVolatile('stockpile');
		},
		name: "Pulp Up",
		shortDesc: "On entry, at >= 2/3 HP; 1x Stockpile, at <= 1/3 HP; 3x Stockpile, else 2x Stockpile.",
		rating: 3,
		num: -15,
	},
	asonearrokuda: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'As One');
			this.add('-ability', pokemon, 'Mold Breaker');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		onModifySpe(spe, pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1},
		name: "As One (Arrokuda)",
		shortDesc: "Mold Breaker + Swift Swim",
		rating: 4,
		num: -16,
	},
	iceface: {
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(0.5);
			} else if (move.type === 'Fire') {
				return this.chainModify(2);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(0.5);
			} else if (move.type === 'Fire') {
				return this.chainModify(2);
			}
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') return null;
		},
		name: "Ice Face",
		shortDesc: "Takes 2x damage from Fire and 0.5x damage from Water. Immune to flinch.",
		rating: 3,
		num: 248,
	},
	washup: {
		onStart(source) {
			this.field.addPseudoWeather('watersport');
		},
		name: "Wash Up",
		shortDesc: "On switch-in, this Pokemon summons the Water Sport effect.",
		rating: 2,
		num: -17,
	},
	darkaura: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Dark Aura');
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Dark') return;
			if (!move.auraBooster) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify(1.33);
		},
		name: "Dark Aura",
		rating: 3,
		num: 186,
	},
	fairyaura: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Fairy Aura');
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Fairy') return;
			if (!move.auraBooster) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify(1.33);
		},
		name: "Fairy Aura",
		rating: 3,
		num: 187,
	},
	aurabreak: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Aura Break');
		},
		name: "Aura Break",
		shortDesc: "This Pokemon ignores the effects certain Abilities of other Pokemon have on their moves.",
		rating: 2.5,
		num: 188,
	},
	powerconstruct: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dragon' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dragon' && attacker.hp <= attacker.maxhp / 3) {
				return this.chainModify(1.5);
			}
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1},
		name: "Power Construct",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Dragon attacks.",
		rating: 2,
		num: 211,
	},
	pillage: {
		id: "pillage",
		name: "Pillage",
		shortDesc: "On switch-in, swaps ability with the opponent.",
		onSwitchIn(pokemon) {
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			if ((pokemon.side.foe.active.some(
				foeActive => foeActive && pokemon.isAdjacent(foeActive) && foeActive.ability === 'noability'
			)) ||
			pokemon.species.id !== 'morvilant') {
				this.effectState.gaveUp = true;
			}
		},
		onUpdate(pokemon) {
			if (!pokemon.isStarted || this.effectState.gaveUp) return;
			if (!this.effectState.switchingIn) return;
			const possibleTargets = pokemon.side.foe.active.filter(foeActive => foeActive && pokemon.isAdjacent(foeActive));
			while (possibleTargets.length) {
				let rand = 0;
				if (possibleTargets.length > 1) rand = this.random(possibleTargets.length);
				const target = possibleTargets[rand];
				const ability = target.getAbility();
				const additionalBannedAbilities = [
					// Zen Mode included here for compatability with Gen 5-6
					'noability', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'pillage',
					'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'zenmode',
				];
				if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) {
					possibleTargets.splice(rand, 1);
					continue;
				}
				target.setAbility('pillage', pokemon);
				pokemon.setAbility(ability);

				this.add('-activate', pokemon, 'ability: Pillage');
				this.add('-activate', pokemon, 'Skill Swap', '', '', '[of] ' + target);
				this.add('-activate', pokemon, 'ability: ' + ability.name);
				this.add('-activate', target, 'ability: Pillage');
				return;
			}
		},
	},
};
