var ConstantsUnit = require('../../Constants/Unit');
//var Types = require('../Constants/Types');
//const Packets = require('../Core/Packets');
const {createPacket, sendPacket} = require('../../Core/PacketUtilities');
const { Vector2 } = require('three');
var Targetedshot = require('../Attacks/Missiles/Targetedshot');
const { appendGlobal, removeGlobal } = require('./global.Units');

var Stats = {
	Unit: require('./Stats/Unit'),
	Player: require('./Stats/Player'),
	Turret: require('./Stats/Turret'),
};
var Death = {
	Unit: require('./Death/Unit'),
	Player: require('./Death/Player'),
	Minion: require('./Death/Minion'),
};
var Battle = {
	Unit: require('./Battle/Unit'),
	Player: require('./Battle/Player'),
	Turret: require('./Battle/Turret'),
	Inhibitor: require('./Battle/Inhibitor'),
	Nexus: require('./Battle/Nexus'),
};

const Inventory = require('./Controllers/Inventory');
const BuffController = require('./Controllers/BuffController');
const PacketController = require('./Controllers/PacketController');

const oppositeTeam = {'BLUE': 'RED', 'RED': 'BLUE'};


class Unit {
	visibleForEnemy = false;
	collisionRadius = 48;
	callbacks = {
		move: {},
		collision: {},
	};
	Movement = {};
	spawnPosition = new Vector2(0, 0);
	get Position(){
		return this.Movement?.Waypoints?.[0] || this.spawnPosition;
	}
	
	constructor(team, num = 0, character = '', config = {}){
		Object.assign(this, config);
		this.netId = this.netId || ++global.lastNetId;

		this.info = this.info || {};
		this.info.type = this.info.type || this.constructor.name;
		this.info.team = this.info.team || team;
		this.info.num = this.info.num || num;
		this.info.spawnNum = this.info.spawnNum || this.info.num || num;
		
		this.stats = new (Stats[this.info.type] || Stats.Unit)(this, ConstantsUnit[this.info.type]?.stats || {});
		this.death = new (Death[this.info.type] || Death.Unit)(this);
		this.battle = new (Battle[this.info.type] || Battle.Unit)(this);
		this.inventory = new Inventory(this);
		this.buffController = new BuffController(this);
		this.packetController = new PacketController(this);

		appendGlobal(this);
		console.debug(Date.now(), 'Created Unit', this.constructor.name, this.netId);
		console.log('UnitsCount', global.UnitsCount.count);
		//console.log(global.Units);

		this.update();
	}
	destructor(){
	//	removeGlobal(this);
	}
	initialized(){
		this.spawn();
	}
	spawn(){
		this.respawn();
	}

	//Waypoints = [new Vector2(0, 0)];
	get position(){
		return this.Position;
	}
	moveTime = 0;
	ACTION = 0;
	attack_TargetNetID(TargetNetID, MovementData = []){
		if(!global.UnitsNetId[TargetNetID])
			return console.log('global.Units[netId] does not contain', TargetNetID);

		this.attack(global.UnitsNetId[TargetNetID], MovementData);
	}
	isAbleForAttacking(){
		if(this.battle.died)
			return false;

		return true;
	}
	attack(target, MovementData = []){
		if(!this.isAbleForAttacking())
			return;
		//console.debug(this.Position.distanceTo(target.Position), this.stats.Range.Total);
		if(this.Position.distanceTo(target.Position) > this.stats.Range.Total){
			this.callbacks.move.pending = {
				options: {
					range: this.stats.Range.Total,
				},
				function: () => {
					delete this.callbacks.move.pending;
					this.attack(target, MovementData);
				}
			};
			this.Movement.move1(target.Position);
			//this.Movement.move0(MovementData);
			return;
		}
		this.attackProcess(target);
	}
	attackAns(options){
		var NEXT_AUTO_ATTACK = createPacket('NEXT_AUTO_ATTACK', 'S2C');
		NEXT_AUTO_ATTACK.netId = this.netId;

		let TargetPosition = {
			x: options.target.Position.x,
			y: options.target.Position.y,
			z: 10,
		};

		NEXT_AUTO_ATTACK.Attack = {
			TargetNetID: options.target.netId,
			TargetPosition: TargetPosition,
			AttackSlot: options.AttackSlot,
			MissileNextID: options.missile.netId,
			ExtraTime: 127,
		};
		
		this.packetController.sendTo_vision(NEXT_AUTO_ATTACK);
	}
	attackProcess(target){
		var missile = new Targetedshot(this, {speed: 2000});
		this.attackAns({
			target,
			missile,
			AttackSlot: 1,
		});
		missile.fire(target, this.character.attackWindupPercent);
		if(this.Movement.moveClear)
			this.Movement.moveClear();
	}
	static getUnitsInRange(position, range, team = 'ALL'){
		var enemiesInRange = [];
		for(var allyUnit_id in global.Units[team]['ALL']){
			if(position.distanceTo(global.Units[team]['ALL'][allyUnit_id].position) <= range)
				enemiesInRange.push(global.Units[team]['ALL'][allyUnit_id]);
		}
		return enemiesInRange;
	}
	static getNearest(position, unitsArray, maxRange = 25000){
		var nearest = -1;
		unitsArray.reduce((previousValue, currentValue, index) => {
			let dist = position.distanceTo(currentValue.position);
			if(dist < previousValue){
				nearest = index;
				return dist;
			}
			return previousValue;
		}, maxRange);
		return unitsArray[nearest] || false;
	}
	attackableUnit = true;
	autoAttackToggle = true;
	acquisitionRange = 400;
	autoAttack(){
		var oppositeTeamArray = Object.values(global.Units[oppositeTeam[this.info.team]]['ALL']);
		var target = Unit.getNearest(this.position, oppositeTeamArray, this.acquisitionRange);
		if(this.constructor.name == 'Player')
			console.log('autoAttack target', target);
		if(!target)
			return;

		console.log('autoAttack s', this.netId, target.netId);
		this.attack(target);
	}
	async update(){
		for(;;){
			await global.Utilities.wait(1000);

			if(!global.Game.started)
				continue;

			//if(!this.battle.died){
			//	if(this.attackableUnit && this.autoAttackToggle)
			//		this.autoAttack();
			//}
		}
	}

	respawn(){
		this.battle.died = false;

		this.stats.CurrentHealth = this.stats.HealthPoints.Total;
		this.stats.CurrentMana = this.stats.ManaPoints.Total;
		
		let pos = ConstantsUnit[this.info.type]?.team?.[this.info.team]?.spawn?.[this.info.spawnNum] || {x: 0, y: 0};

		if(this.Movement?.Waypoints)
			this.Movement.Waypoints = [this.spawnPosition];
		
		this.SET_HEALTH();
		
		global.Teams[this.info.team].vision(this, true);
	}
	//SET_HEALTH(){
	//    var SET_HEALTH = createPacket('SET_HEALTH');
	//    SET_HEALTH.netId = this.netId;
	//    SET_HEALTH.count = 0;
	//    this.packetController.sendTo_vision(SET_HEALTH);
	//}
	SET_HEALTH(){
		var SET_HEALTH = createPacket('SET_HEALTH');
		SET_HEALTH.netId = this.netId;
		SET_HEALTH.count = 0;
		SET_HEALTH.MaxHealth = this.stats.HealthPoints.Total;
		SET_HEALTH.Health = this.stats.CurrentHealth;
		this.packetController.sendTo_vision(SET_HEALTH);
	}
	UPDATE_MODEL(character){
		var UPDATE_MODEL = createPacket('UPDATE_MODEL');
		UPDATE_MODEL.netId = this.netId;
		UPDATE_MODEL.bitfield = {
			OverrideSpells: true,
			ModelOnly: false,
			ReplaceCharacterPackage: true,
		};
		UPDATE_MODEL.ID = 0;
		UPDATE_MODEL.SkinID = 0;
		UPDATE_MODEL.SkinName = character;
		this.packetController.sendTo_vision(UPDATE_MODEL);
	}
	SET_ANIMATION(animPairs){
		var SET_ANIMATION = createPacket('SET_ANIMATION');
		SET_ANIMATION.netId = this.netId;
		SET_ANIMATION.AnimationOverrides = [];
		for(let i in animPairs)
			SET_ANIMATION.AnimationOverrides.push({
				fromAnim: animPairs[i][0],
				toAnim: animPairs[i][1],
			});
		this.packetController.sendTo_vision(SET_ANIMATION);
	}
}


module.exports = Unit;
