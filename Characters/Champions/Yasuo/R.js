const Spell = require("../../Spell");

module.exports = class R extends Spell {
	async cast(packet){
		var owner = this.parent.parent;
		var spellHash = this.parent.spellHash;

		if(owner.castingSpell)
			return;

		owner.castingSpell = true;
		//owner.SET_COOLDOWN(packet.Slot, 4);
        owner.halt_start();



		owner.castingSpell = false;
        owner.halt_stop();
	}
};