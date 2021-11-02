const Spell = require("../../Spell");

module.exports = class W extends Spell {
	async cast(packet){
		var owner = this.parent.parent;
		
		if(owner.castingSpell)
			return;

		owner.castingSpell = true;
		//owner.SET_COOLDOWN(packet.Slot, 2);
        owner.halt_start();


		
		owner.castingSpell = false;
        owner.halt_stop();
	}
};