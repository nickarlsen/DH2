import {FS} from '../../../lib';
import {toID} from '../../../sim/dex-data';
import {Pokemon} from "../../../sim/pokemon";

// Similar to User.usergroups. Cannot import here due to users.ts requiring Chat
// This also acts as a cache, meaning ranks will only update when a hotpatch/restart occurs
const usergroups: {[userid: string]: string} = {};
const usergroupData = FS('config/usergroups.csv').readIfExistsSync().split('\n');
for (const row of usergroupData) {
	if (!toID(row)) continue;

	const cells = row.split(',');
	if (cells.length > 3) throw new Error(`Invalid entry when parsing usergroups.csv`);
	usergroups[toID(cells[0])] = cells[1].trim() || ' ';
}

export function getName(name: string): string {
	const userid = toID(name);
	if (!userid) throw new Error('No/Invalid name passed to getSymbol');

	const group = usergroups[userid] || ' ';
	return group + name;
}

export const Conditions: {[id: string]: ModdedConditionData} = {
	baseball: {
		name: 'baseball',
		effectType: 'Status',
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
  			return this.chainModify(0.75);
  		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
  			return this.chainModify(0.75);
  		},
		onTryHit(source, target, move) {
			if (move.flags['sound']) {
				this.add('-fail', target);
        		this.add(`c:|${Math.floor(Date.now() / 1000)}|${getName(source.name)}|Shut Up‼️`);
				return null;
			}
		},
	},
	bigbutton: {
		inherit: true,
		duration: null,
		onStart(pokemon) {
			if (!pokemon.big) pokemon.big = true;
			this.add('-start', pokemon, 'Dynamax', '[silent]');
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (['grassknot', 'lowkick'].includes(move.id)) {
				return this.chainModify(2);
			}
		},
		onBasePower(basePower, pokemon, target, move) {
			const boostedMoves = [
				'astonish', 'extrasensory', 'needlearm', 'stomp', 'steamroller', 'bodyslam', 'shadowforce', 'phantomforce', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault', 'doubleironbash'
			];
			if (boostedMoves.includes(move.id)) {
				return this.chainModify(2);
			}
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, 'Dynamax', '[silent]');
		}
	},

	//slate 3
	sunnyday: {
		inherit: true,
		onFieldStart(battle, source, effect) {
			if (battle.terrain === 'fishingterrain') {
				this.add('-message', 'The fishing terrain blocked out the sun!');
				return;
			}
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'SunnyDay', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'SunnyDay');
			}
		},
	},
	raindance: {
		inherit: true,
		onFieldResidual() {
			this.add('-weather', 'RainDance', '[upkeep]');
			if (this.field.isTerrain('fishingterrain')) this.effectState.duration ++;
			this.eachEvent('Weather');
		},
	},
}
