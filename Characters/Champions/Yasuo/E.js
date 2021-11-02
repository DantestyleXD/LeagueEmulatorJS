const Spell = require("../../Spell");

module.exports = class E extends Spell {
	castRange = 475;
	cast(packet){
		var owner = this.parent.parent;
		var spellHash = this.parent.spellHash;
		
		if(owner.castingSpell)
			return;

		owner.castingSpell = true;
		//owner.SET_COOLDOWN(packet.Slot, 3);

		var realPosition = this.getRealPosition(packet);
		var CastInfo = this.CastInfo_Position(packet);

		//CastInfo.SpellHash = spellHash.EzrealArcaneShift;
		//owner.castSpellAns(CastInfo);

		CastInfo.SpellHash = spellHash.YasuoDashWrapper;
		CastInfo.ManaCost = 0;
		CastInfo.SpellSlot = 2;//?
		CastInfo.SpellNetID = this.netId;
		CastInfo.MissileNetID = 1073743444;
		owner.spawnProjectileAns(CastInfo);

		owner.SET_ANIMATION([
			['RUN', 'Spell3']
		]);
		owner.callbacks.collision[this.netId] = {
			options: {
				range: owner.collisionRadius,
			},
			function: (target) => {
				if(target.netId != packet.TargetNetID)
					return;

				delete owner.callbacks.collision[this.netId];
				this.hit(target);
			}
		};

		owner.dashTo(realPosition, {
			speed: 750 + owner.stats.MoveSpeed.Total * 0.6,
			range: 475, minRange: 475,
			callback: () => {
				if(owner.callbacks.collision[this.netId])
					delete owner.callbacks.collision[this.netId];
				//else
				//	this.hit_TargetNetID(packet.TargetNetID);

				owner.SET_ANIMATION([
					['Spell3', 'RUN']
				]);
			}
		});
		
		owner.castingSpell = false;
	}
	//hit_TargetNetID(TargetNetID){
	//	if(!TargetNetID || !global.UnitsNetId[TargetNetID])
	//		return;
//
	//	var target = global.UnitsNetId[TargetNetID];
	//	this.hit(target);
	//}
	hit(target){
		//if(target.dead)
		//	return;
		var owner = this.parent.parent;

		owner.battle.attack(target);
	}
};