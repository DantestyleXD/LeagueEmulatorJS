
// allows you to inspect packets, parses them to readable objects
// bad code and behavior here, but who cares, it's only for testing / developing purposes

// todo: reading .lrf files (for now it has to be unpacked with https://github.com/moonshadow565/LoLReplayUnpacker)
// todo: sending recorded packets to the server, will give more control than in game client and possibility to verify response
// todo: sending recorded packets to the client, with ability to set breakpoints, pause etc.

// run with 'node tools/packet-inspector' then open link in your browser: `http://127.0.0.1/`
// example recordings: https://github.com/Karmel0x/LeagueEmulatorJS/issues/2

var replayDir = '../LeagueEmulatorJS_replays/';


require('../../Core/init_utilities')();
var {server, wss} = require('./init_client-server');
const fs = require('fs');

const enet = require('../../../enetcppjs/build/Release/enetcppjs.node');
require("../../Core/BufferExtend");
const {createPacket, sendPacket} = require('../../Core/PacketUtilities');

const packetParser = require('./packetParser');


var replayUnpacked;
var pId = 0;

wss.onMessage = (data) => {

	var res = JSON.parse(data);
	console.log(res);

	if(res.cmd == 'loadpackets'){
		
		let offset = res.offset || 0;
		let limit = (res.limit || 5000) + offset;
		let packetnames = res.packetnames || [];
		for(let i = offset; i < replayUnpacked.length && i < limit; i++){
			var packetData = packetParser(replayUnpacked[i], i);

			if(packetnames && packetnames.length && !packetnames.includes(packetData.cmdName))
				continue;

			wss.clients.sendToAll(JSON.stringify({
				cmd: 'newpacket',
				packet: packetData,
			}));

		}
	}
	else if(res.cmd == 'initialize_client'){
		require('./init_client-network')();
	}
	else if(res.cmd == 'sendpacket'){
		let i = res.Id;
		var buffer = replayUnpacked[i].Bytes ? Buffer.from(replayUnpacked[i].Bytes, 'base64') : Buffer.from(replayUnpacked[i].BytesHex.split(' ').join(''), 'hex');
		
        enet.sendPacket(0, buffer, replayUnpacked[i].Channel);
	}
	else if(res.cmd == 'sendpacket_type'){
		var KEY_CHECK = createPacket(res.name, res.channel);
		KEY_CHECK.partialKey = [ 0x2A, 0x00, 0xFF ];
		KEY_CHECK.ClientID = 0;
		KEY_CHECK.PlayerID = 1;
		sendPacket(0, KEY_CHECK);
	}
	else if(res.cmd == 'loadreplaylist'){
		var replayList = fs.readdirSync(replayDir).filter((value) => {
			return value.endsWith('.json');
		});
		wss.clients.sendToAll(JSON.stringify({
			cmd: 'loadreplaylist',
			list: replayList,
		}));
	}
	else if(res.cmd == 'loadreplayfile'){
		//try{
			replayUnpacked = require('../../' + replayDir + res.name);
		//}catch(e){
		//	console.log(e);
		//}
	}
	else if(res.cmd == 'addpacket'){
		var packet = {
			Id: pId++,
			Channel: res.data.channel,
			BytesHex: res.data.bytes,
			Time: res.data.time || 1,
		};
		
		var packetData = packetParser(packet);
		if(!packetData)
			return;

		wss.clients.sendToAll(JSON.stringify({
			cmd: 'newpacket',
			packet: packetData,
		}));
	}

}
