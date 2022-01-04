/*
Actives:
[
	"Bonetooth Totem", "Crescent", 
	"Ghost Ward", "Hunt", 
	"Hunter's Sight", "Hunter's Ward", 
	"Mana Shield", "Scrying", 
	"Sweeping Lens"
]

Passives:
[
	"Alacrity", "Awe", 
	"Butcher", "Captain", 
	"Cleave", "Cold Steel", 
	"Conservation", "Distortion", 
	"Enhanced Movement", "Eyes of Pain", 
	"Favor", "Furor", 
	"Greed", "Homeguard", 
	"Icy", "Insight", 
	"Lifeline", "Maim", 
	"Mana Charge", "Mana Font", 
	"Mementos of the Hunt", "Point Runner", 
	"Prospector", "Rage", 
	"Sapping Barbs", "Slow Resist", 
	"Spellblade", "Spoils of War", 
	"Tenacity", "Trap Detection", 
	"Tribute", "Valor's Reward", 
	"Ward Refresh"
]
*/

// TIPS: "effect" object inside the item (item.json) it's the correct value
// for unique passives without name

const events = require('./Utilities/events.js');
const UTILS  = require('./Utilities/functions.js');

var ItemSpells = {
	// Actives
	BonetoothTotem: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Crescent: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	GhostWard: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Hunt: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	HunterSight: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	HunterWard: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	ManaShield: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Scrying: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	SweepingLens: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	
	// Passives
	Alacrity: class ItemSpell {
		static spellHash = 0;
		onAdd( parent ) {
			parent.stats.MoveSpeed.FlatBonus += 20;
		}
	},
	Avarice: class ItemSpell {
		static spellHash = 0;
		timeoutID = null;

		effect = ( parent ) => {
			//setTimeout()
			return setInterval( () => { 
				parent.stats.Gold += 3;
				parent.stats.charStats_send();
			}, 10000 );
		}
		onAdd( parent ){
			this.timeoutID = this.effect( parent );
        }
	},
	Awe: class ItemSpell {
		static spellHash = 0;
		onAdd( parent ){
			var playerManaTotal = parent.stats.ManaPoints.total();
			parent.stats.AttackDamage.FlatBonus += UTILS.percentage( playerManaTotal, 2);
		}
	},
    Butcher: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Captain: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Cleave: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
    ColdSteel: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Conservation: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Distortion: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	EnhancedMovement: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
    EyesOfPain: class ItemSpell {
		static spellHash = 0;
		onAdd( parent ) {
			parent.stats.MagicPenetration.FlatBonus += 15;
		}
	},
	Favor: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Furor: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
    Greed: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
    Homeguard: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Icy: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Incinerate: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
    Insight: class ItemSpell {
		static spellHash = 0;
		onAdd( parent ){
			var playerManaTotal = parent.stats.ManaPoints.Total();
			parent.stats.AbilityPower.FlatBonus += UTILS.percentage( playerManaTotal, 2);
		}
	},
	Lifeline: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Maim: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
    ManaCharge: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	ManaFont: class ItemSpell {
		static spellHash = 0;
		effect = ( parent ) => {
			//setTimeout()
			return setInterval( () => { 
				var currentMana = parent.stats.CurrentMana;
				var missingMana = parent.stats.ManaPoints.Total() - currentMana;
				currentMana += UTILS.percentage( missingMana, 1.5 );
				parent.stats.charStats_send();
			}, 5000 );
		}
		onAdd( parent ){
			this.timeoutID = this.effect( parent );
        }
	},
	MementosOfTheHunt: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
    PointRunner: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Prospector: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Rage: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
    SappingBarbs: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	SlowResist: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Spellblade: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	SpiritDrain: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
    SpoilsOfWar: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	Tenacity: class ItemSpell {
		static spellHash = 0;
		onAdd( parent ) {
			parent.stats.Tenacity.PercentBonus += 35;
		}
	},
	TrapDetection: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
    Tribute: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	ValorReward: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	},
	WardRefresh: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

		}
	}
}

module.exports = ItemSpells;
