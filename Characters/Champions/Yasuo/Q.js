const Spell = require("../../Spell");
const Skillshot = require("../../../Classes/Attacks/Missiles/Skillshot");
const YasuoBuffs = require('./Buffs')

module.exports = class Q extends Spell {
	q1 = async ( CastInfo, spellHash, owner ) =>
	{
		/*CastInfo.SpellHash = spellHash.YasuoQW;
		CastInfo.SpellSlot = 0;
		CastInfo.SpellNetID = this.netId;
		CastInfo.MissileNetID = 0;//skillshot.missile.netId;
		CastInfo.target = [];
		CastInfo.DesignerCastTime = 0.3;
		CastInfo.DesignerTotalTime = 1.45;
		//CastInfo.Cooldown = 5.7;//todo: `owner.SET_COOLDOWN` is not needed
		owner.castSpellAns(CastInfo);*/

		var windup = 0.133;//?
		await global.Utilities.wait(windup * 1000);

		CastInfo.SpellHash = spellHash.YasuoQ;
		CastInfo.SpellSlot = 0;
		CastInfo.SpellNetID = this.netId;
		CastInfo.MissileNetID = 0;//skillshot.missile.netId;
		CastInfo.target = [];
		CastInfo.DesignerCastTime = 0.3;
		CastInfo.DesignerTotalTime = 1.45;
		//CastInfo.Cooldown = 5.7;//todo: `owner.SET_COOLDOWN` is not needed
		owner.castSpellAns(CastInfo);

		
		owner.buffController.addBuffC( new YasuoBuffs.YasuoQ01 )
	};

	q2 = async ( CastInfo, spellHash, owner ) =>
	{
		/*CastInfo.SpellHash = spellHash.YasuoQ2W;
		CastInfo.SpellSlot = 0;
		CastInfo.SpellNetID = this.netId;
		CastInfo.MissileNetID = 0;//skillshot.missile.netId;
		CastInfo.target = [];
		CastInfo.DesignerCastTime = 0.3;
		CastInfo.DesignerTotalTime = 1.45;
		//CastInfo.Cooldown = 5.7;//todo: `owner.SET_COOLDOWN` is not needed
		owner.castSpellAns(CastInfo);*/

		var windup = 0.133;//?
		await global.Utilities.wait(windup * 1000);

		CastInfo.SpellHash = spellHash.YasuoQ2;
		CastInfo.SpellSlot = 0;
		CastInfo.SpellNetID = this.netId;
		CastInfo.MissileNetID = 0;//skillshot.missile.netId;
		CastInfo.target = [];
		CastInfo.DesignerCastTime = 0.3;
		CastInfo.DesignerTotalTime = 1.45;
		//CastInfo.Cooldown = 5.7;//todo: `owner.SET_COOLDOWN` is not needed
		owner.castSpellAns(CastInfo);
	};

	q3 = async ( CastInfo, spellHash, owner ) =>
	{
		/*CastInfo.SpellHash = spellHash.YasuoQ3W;
		CastInfo.SpellSlot = 0;
		CastInfo.SpellNetID = this.netId;
		CastInfo.MissileNetID = 0;//skillshot.missile.netId;
		CastInfo.target = [];
		CastInfo.DesignerCastTime = 0.3;
		CastInfo.DesignerTotalTime = 1.45;
		//CastInfo.Cooldown = 5.7;//todo: `owner.SET_COOLDOWN` is not needed
		owner.castSpellAns(CastInfo);*/

		var windup = 0.133;//?
		await global.Utilities.wait(windup * 1000);

		CastInfo.SpellHash = spellHash.YasuoQ3;
		CastInfo.SpellSlot = 0;
		CastInfo.SpellNetID = this.netId;
		CastInfo.MissileNetID = 0;//skillshot.missile.netId;
		CastInfo.target = [];
		CastInfo.DesignerCastTime = 0.3;
		CastInfo.DesignerTotalTime = 1.45;
		//CastInfo.Cooldown = 5.7;//todo: `owner.SET_COOLDOWN` is not needed
		owner.castSpellAns(CastInfo);

		var windup = 0.133;//?
		await global.Utilities.wait(windup * 1000);

		CastInfo.TargetPosition = anglePosition.add(owner.position);
		var skillshot = Skillshot.create(owner, CastInfo.TargetPosition, {
			speed: 1200, range: 1150, radius: 90
		});
		CastInfo.TargetPosition = skillshot.target.Waypoints[0];
		CastInfo.TargetPositionEnd = skillshot.target.Waypoints[0];

		var collidedWith = [];
		skillshot.missile.callbacks.collision._ = {
			options: {
				range: 90,
			},
			function: (target) => {
				if(skillshot.missile.parent == target || collidedWith.includes(target.netId))
					return;
				
				collidedWith.push(target.netId);
				
				skillshot.missile.parent.battle.attack(target);
				if(target.knockUp)
					target.knockUp({
						duration: 0.75,
						ParabolicGravity: 16.5,
						Facing: 1,
					});
			},
		};

		CastInfo.SpellHash = spellHash.YasuoQ3Mis;
		CastInfo.SpellSlot = 0;
		CastInfo.SpellNetID = this.netId;
		CastInfo.MissileNetID = skillshot.missile.netId;
		CastInfo.target = [];
		CastInfo.DesignerCastTime = 0.3;
		CastInfo.DesignerTotalTime = 1.45;
		//CastInfo.Cooldown = 5.7;//todo: `owner.SET_COOLDOWN` is not needed
		owner.spawnProjectileAns(CastInfo);

        skillshot.missile.firefire(skillshot.target);
		
		await global.Utilities.wait(windup * 1000 * 2);
	}

	async cast(packet){
		var owner = this.parent.parent;
		var spellHash = this.parent.spellHash;

		if(owner.castingSpell)
			return;

		owner.castingSpell = true;
		//owner.SET_COOLDOWN(packet.Slot, 1);//todo: check if spell is on cooldown
        owner.halt_start();

		// Yasuo uses angle.. Q+Flash combo..
		var anglePosition = Spell.anglePosition(packet.Position, owner.position);

		var CastInfo = this.CastInfo_Position(packet);

		// Check if player is casting Q for the first time or not
		if( owner.buffController.hasBuffC( spellHash.YasuoQ ) ) this.q2( CastInfo, spellHash, owner );
		else if( owner.buffController.hasBuffC( spellHash.YasuoQ2 ) ) this.q3( CastInfo, spellHash, owner );
		else this.q1( CastInfo, spellHash, owner )
		
		//owner.AddParticleTarget(particleHash['Yasuo_Base_Q3_Hand.troy']);
		//owner.AddParticleTarget(particleHash['Yasuo_Base_Q3_cast_sound.troy']);

		owner.castingSpell = false;
        owner.halt_stop();
	}
};