const Unit = require("./Unit");
const CAMP = require('../../Constants/CAMP')
const {createPacket, sendPacket} = require("../../Core/PacketUtilities");


global.Jungle = global.Jungle || {};
global.Jungle['BLUE'] = global.Jungle['BLUE'] || {};
global.Jungle['RED']  = global.Jungle['RED'] || {};
global.Jungle['NEUTRAL'] = global.Jungle['NEUTRAL'] || {};

module.exports = class Jungle {
    mapSide = '';
    group = '';
	num = 0;
    constructor( mapSide, group ){
        this.mapSide = mapSide;
        this.group = group;
        //this.num = ++this.num;

        let camp = CAMP[mapSide][group]/*[this.num]*/;
        this.spawns = camp.spawns;
        this.firstSpawn = camp.DelaySpawnTime;
        this.respawnTime = camp.RespawnTime;

        if( !global.Jungle[mapSide][group] ) global.Jungle[mapSide][group] = {}
        global.Jungle[mapSide][group]/*[num]*/ = this
    }
    spawnCamp( mapSide, group ){
        if( !global.Jungle[mapSide][group] ) return;

        var camp = global.Jungle[mapSide][group];
        camp.forEach( async spawn => {
            debugger;
        });

        debugger;
    }
}