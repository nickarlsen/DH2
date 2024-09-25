const kickMoves = ['jumpkick', 'highjumpkick', 'megakick', 'doublekick', 'blazekick', 'lowkick', 'rollingkick', 'triplekick', 'stomp'];

export const Abilities: {[k: string]: ModdedAbilityData} = {
	striker: {
		shortDesc: "Boosts the power of kicking moves by 1.2x, and boost the Accuracy by 10%.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (kickMoves.includes(move.id)) {
				return this.chainModify(1.2);
			}
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (kickMoves.includes(move.id)) {
				return this.chainModify(1.1);
			}
		},
		name: "Striker",
		num: -1,
	},
	confiscate: {
		name: "Confiscate",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp && this.checkMoveMakesContact(move, source, target, true) && source.hp) {
				const item = source.takeItem();
				if (item) {
					this.add('-enditem', source, item.name, '[from] ability: Confiscate', '[of] ' + target);
				}
			}
		},
		rating: 2,
		shortDesc: "When the user is knocked out by an enemy's attack, removes the attacker's item (same way as Knock Off)",
		num: -2,
	},
	cacophony: {
		onBasePowerPriority: 7,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Cacophony boost');
				return this.chainModify(1.2);
			}
		},
		onModifyMove(move) {
			if (move.flags['sound']) {
				move.infiltrates = true;
			}
		},
		flags: {breakable: 1},
		name: "Cacophony",
		shortDesc: "The user's sound-based moves have 1.2x power and ignore the effects of Substitute.",
		rating: 3.5,
		num: -3,
	},
	overcoat: {
		inherit: true,
		isNonstandard: null,
		gen: 4,
	},
	fluffy: {
		inherit: true,
		isNonstandard: null,
		gen: 4,
	},
	sunshine: {
		onStart(source) {
			this.field.setWeather('sunnyday');
		},
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('sunshine')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "Sunshine",
		shortDesc: "On switch-in, the weather becomes Sunny Day until the user switches out.",
		rating: 4.5,
		num: -4,
	},
	precipitate: {
		onStart(source) {
			this.field.setWeather('raindance');
		},
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('precipitate')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "Precipitate",
		shortDesc: "On switch-in, the weather becomes Rain Dance until the user switches out.",
		rating: 4.5,
		num: -5,
	},
	strongjaw: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bite']) {
				return this.chainModify(1.3);
			}
		},
		shortDesc: "This Pokemon's bite-based attacks have 1.3x power. Bug Bite is not boosted.",
		desc: "This Pokemon's bite-based attacks have 1.3x power. Bug Bite is not boosted.",
		name: "Strong Jaw",
		rating: 3.5,
		num: 173,
	},
	merciless: {
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify([5120, 4096]);
			}
		},
		name: "Merciless",
		shortDesc: "This Pokemon's attacks that are super effective against the target do 1.25x damage.",
		desc: "This Pokemon's attacks that are super effective against the target do 1.25x damage.",
		rating: 2.5,
		num: 196,
	},

	cutecharm: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact']) {
				if (this.randomChance(1, 3)) {
					source.addVolatile('attract', target);
				}
			}
		},
	},
	effectspore: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact'] && !source.status) {
				const r = this.random(300);
				if (r < 10) {
					source.setStatus('slp', target);
				} else if (r < 20) {
					source.setStatus('par', target);
				} else if (r < 30) {
					source.setStatus('psn', target);
				}
			}
		},
	},
	flamebody: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact']) {
				if (this.randomChance(1, 3)) {
					source.trySetStatus('brn', target);
				}
			}
		},
	},
	flashfire: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (move.id === 'willowisp' && (target.hasType('Fire') || target.status || target.volatiles['substitute'])) {
					return;
				}
				if (target.status === 'frz') {
					return;
				}
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[from] ability: Flash Fire');
				}
				return null;
			}
		},
	},
	intimidate: {
		inherit: true,
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!target.volatiles['substitute']) {
					activated = true;
					break;
				}
			}

			if (!activated) {
				this.hint("In Gen 3, Intimidate does not activate if every target has a Substitute.", false, pokemon.side);
				return;
			}
			this.add('-ability', pokemon, 'Intimidate', 'boost');

			for (const target of pokemon.adjacentFoes()) {
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({atk: -1}, target, pokemon, null, true);
				}
			}
		},
	},
	lightningrod: {
		onFoeRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Electric') return;
			if (this.validTarget(this.effectState.target, source, move.target)) {
				return this.effectState.target;
			}
		},
		flags: {breakable: 1},
		name: "Lightning Rod",
		rating: 0,
		num: 32,
	},
	minus: {
		inherit: true,
		onModifySpA(spa, pokemon) {
			for (const active of this.getAllActive()) {
				if (!active.fainted && active.hasAbility('plus')) {
					return this.chainModify(1.5);
				}
			}
		},
	},
	plus: {
		inherit: true,
		onModifySpA(spa, pokemon) {
			for (const active of this.getAllActive()) {
				if (!active.fainted && active.hasAbility('minus')) {
					return this.chainModify(1.5);
				}
			}
		},
	},
	poisonpoint: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact']) {
				if (this.randomChance(1, 3)) {
					source.trySetStatus('psn', target);
				}
			}
		},
	},
	pressure: {
		inherit: true,
		onStart(pokemon) {
			this.addSplit(pokemon.side.id, ['-ability', pokemon, 'Pressure', '[silent]']);
		},
	},
	raindish: {
		inherit: true,
		onWeather() {},
		onResidualOrder: 10,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				this.heal(pokemon.baseMaxhp / 16);
			}
		},
	},
	roughskin: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact']) {
				this.damage(source.baseMaxhp / 16, source, target);
			}
		},
	},
	shadowtag: {
		inherit: true,
		onFoeTrapPokemon(pokemon) {
			pokemon.trapped = true;
		},
	},
	static: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact']) {
				if (this.randomChance(1, 3)) {
					source.trySetStatus('par', target);
				}
			}
		},
	},
	trace: {
		inherit: true,
		onUpdate(pokemon) {
			if (!pokemon.isStarted) return;
			const target = pokemon.side.randomFoe();
			if (!target || target.fainted) return;
			const ability = target.getAbility();
			const bannedAbilities = ['forecast', 'multitype', 'trace'];
			if (bannedAbilities.includes(target.ability)) {
				return;
			}
			if (pokemon.setAbility(ability)) {
				this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
			}
		},
	},
	truant: {
		inherit: true,
		onStart() {},
		onSwitchIn(pokemon) {
			pokemon.truantTurn = this.turn !== 0;
		},
		onBeforeMove(pokemon) {
			if (pokemon.truantTurn) {
				this.add('cant', pokemon, 'ability: Truant');
				return false;
			}
		},
		onResidualOrder: 27,
		onResidual(pokemon) {
			pokemon.truantTurn = !pokemon.truantTurn;
		},
	},
	voltabsorb: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric' && move.id !== 'thunderwave') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Volt Absorb');
				}
				return null;
			}
		},
	},
};
