const { Vector2 } = require('three');
const _Summoner = require('./_Summoner');
const BuffTypes = require('../../../Constants/BuffTypes');

class SummonerBarrier extends _Summoner {// Barrier
	spellHash = 214940034;
	cast(packet){
		super.cast(packet);

	}
}
class SummonerBoost extends _Summoner {// Cleanse
	spellHash = 105717908;
	cast(packet){
		super.cast(packet);

	}
}
class SummonerClairvoyance extends _Summoner {// Clairvoyance
	spellHash = 159999845;
	cast(packet){
		super.cast(packet);

	}
}
class SummonerDot extends _Summoner {// Ignite
	spellHash = 104222500;
	effect = {
		Base: 75,
		PerLevel: 15,
	};
	buff = {
		BuffType: BuffTypes.DAMAGE,
		Duration: 5,
	};
	cast(packet){
		super.cast(packet);

	}
}
class SummonerExhaust extends _Summoner {// Exhaust
	spellHash = 145275620;
	effect = {
		MovementSpeed: { PercentBonus : 3 },
		AttackSpeed: { PercentBonus : 3 },
		Armor: { FlatBonus : 10 },
		MagicResist: { FlatBonus: 10 },
		PerLevel: 15,
	};
	buff = {
		BuffType: BuffTypes.COMBAT_DEHANCER,
		Duration: 5,
	};
	cast(packet){
		super.cast(packet);

	}
}
class SummonerFlash extends _Summoner {// Flash
	spellHash = 105475752;
	cast(packet){
		super.cast(packet);

		var pos = new Vector2(packet.Position.x, packet.Position.y);
		this.parent.parent.Movement.teleport(pos);
	}
}
class SummonerHaste extends _Summoner {// Ghost
	spellHash = 105565333;
	effect = {
		Base: 75,
		PerLevel: 15,
	};
	buff = {
		BuffType: BuffTypes.HASTE,
		Duration: 5,
	};
	cast(packet){
		super.cast(packet);

	}
}
//class SummonerHealReduce? extends Spell {// Heal Reduce
//	//todo
//}
class SummonerHeal extends _Summoner {// Heal
	spellHash = 56930076;
	effect = {
		Base: 75,
		PerLevel: 15,
	};
	buff = {
		BuffType: BuffTypes.HEAL,
		Duration: 5,
	};
	cast(packet){
		super.cast(packet);

		var source = this.parent.parent;

		source.AddParticleTarget( this.PackageHash, "global_ss_heal_02.troy", null, source );
		source.AddParticleTarget( this.PackageHash, "global_ss_heal_speedboost.troy", null, source );
		source.battle.heal((this.effect.Base + (source.stats.Level * this.effect.PerLevel)) / (1 + source.buffController.hasBuffC(this)));
		source.buffController.addBuffC(this);
	}
	buffActivate(){
		var source = this.parent.parent;
		source.stats.MoveSpeed.PercentBonus += 30;
		source.stats.charStats_send();
	}
	buffDeactivate(){
		var source = this.parent.parent;
		source.stats.MoveSpeed.PercentBonus -= 30;
		source.stats.charStats_send();
	}
}
class SummonerMana extends _Summoner {// Clarity
	spellHash = 56980513;
	cast(packet){
		super.cast(packet);

	}
}
//class SummonerOdinGarrison extends _Summoner {// OdinGarrison
//	spellHash = 226996206;
//	cast(packet){
//		super.cast(packet);
//
//	}
//}
class SummonerRevive extends _Summoner {// Revive
	spellHash = 97039269;
	effect = {
		MovementSpeed: { PercentBonus: 1.25 },
		PerLevel: 15,
	};
	buff = {
		BuffType: BuffTypes.HASTE,
		Duration: 5,
	};
	cast(packet){
		super.cast(packet);

	}
}
class SummonerSmite extends _Summoner {// Smite
	spellHash = 106858133;
	cast(packet){
		super.cast(packet);

	}
}
class SummonerTeleport extends _Summoner {// Teleport
	spellHash = 5182308;
	cast(packet){
		super.cast(packet);

	}
}

module.exports = {
	SummonerBarrier,
	SummonerBoost,
	SummonerClairvoyance,
	SummonerDot,
	SummonerExhaust,
	SummonerFlash,
	SummonerHaste,
	SummonerHeal,
	SummonerMana,
	//SummonerOdinGarrison, // Dominion
	SummonerRevive,
	SummonerSmite,
	SummonerTeleport,
};
