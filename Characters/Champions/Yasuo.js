const { Vector2 } = require("three");
const _Champion_ = require("../_Champion_");
const ChampionSpells = require('./Yasuo/index.js');

const spellHash = {
	YasuoQ: 0,
	YasuoQ2: 0,
	YasuoQ3: 0,
	YasuoQW: 0,
	YasuoQ2W: 0,
	YasuoQ3W: 0,
	YasuoQMis: 0,
	YasuoQ2Mis: 0,
	YasuoQ3Mis: 0,

	YasuoWMovingWall: 0,
	YasuoDashWrapper: 0,
	YasuoRKnockUpComboW: 0,
};
const particleHash = {
	'Yasuo_Base_Q3_Hand.troy': 0,
	'Yasuo_Base_Q3_cast_sound.troy': 0,
	'Yasuo_Base_Q3_Indicator_Ring.troy': 0,
	'Yasuo_Base_Q3_Indicator_Ring_alt.troy': 0,
	
	'Yasuo_Base_Q_wind_ready_buff.troy': 0,
	'Yasuo_Base_Q_strike_build_up_test.troy': 0,

	'Yasuo_Base_Q1_cast_sound.troy': 0
};
const boneHash = {
	//'root': 0,
	'L_HAND': 119924804,
};

{
	// just for development
	const { HashStringObject } = require("../../Functions/HashString");
	HashStringObject(spellHash);
	HashStringObject(particleHash);
	HashStringObject(boneHash);
}

module.exports = class Yasuo extends _Champion_ {
	PackageHash = 3275499062;
	attackWindupPercent = 22;
	spellHash = spellHash;
	constructor(parent){
		super(parent);

		this.spells = {
			0: new ChampionSpells.Q(this),
			1: new ChampionSpells.W(this),
			2: new ChampionSpells.E(this),
			3: new ChampionSpells.R(this),
			//62: new Passive(this),
			//64-81: Attack?
		};
	}
};
