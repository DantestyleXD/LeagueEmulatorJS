/*
Actives:
[
	"Ghost Ward","Mana Shield",
	"Crescent","Hunter's Sight",
	"Bonetooth Totem","Hunter's Ward",
	"Hunt","Sweeping Lens",
	"Scrying"
]

Passives:
[
	"Enhanced Movement","Prospector",
	"Butcher","Ward Refresh",
	"Point Runner","Mana Charge",
	"Slow Resist","Valor's Reward",
	"Icy","Spellblade",
	"Mana Font","Insight",
	"Awe","Rage",
	"Favor","Cleave",
	"Cold Steel","Tribute",
	"Greed","Spoils of War",
	"Maim","Tenacity",
	"Eyes of Pain","Lifeline",
	"Trap Detection","Mementos of the Hunt",
	"Sapping Barbs","Conservation",
	"Homeguard","Captain",
	"Furor","Distortion",
	"Alacrity"
]*/

const events = require('./Utilities/events.js');

var ItemSpells = {
	Alacrity: class ItemSpell {
		static spellHash = 0;
		onUse(target = undefined) {

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
		onUse(target = undefined) {

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
		onUse(target = undefined) {

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
		onUse(target = undefined) {

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
		onUse(target = undefined) {

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
		onUse(target = undefined) {

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
