const Spell = require("../../Spell");

class YasuoBuffs extends Spell{
    constructor(parent){
		super(parent);
	}
    cast(packet){
		//override
	}
}

class YasuoQ01 extends YasuoBuffs{
	spellHash = 145515457
    buff = {
		BuffType: 1,
		Duration: 6,
	};
    cast(packet){
		source.buffController.addBuffC(this);
	}
    buffActivate() {}
    buffDeactivate() {}
}

class YasuoQ02 extends YasuoBuffs{
	spellHash = 145515458
    buff = {
		BuffType: 1,
		Duration: 6,
	};
    cast(packet){
		source.buffController.addBuffC(this);
	}
    buffActivate() {}
    buffDeactivate() {}
}

class YasuoE extends YasuoBuffs{
	spellHash = 133737557
    buff = {
		BuffType: 1,
		Duration: 6,
	};
    cast(packet){
		source.buffController.addBuffC(this);
	}
    buffActivate() {}
    buffDeactivate() {}
}

module.exports = {
	YasuoQ01,
	YasuoQ02,
	YasuoE
}