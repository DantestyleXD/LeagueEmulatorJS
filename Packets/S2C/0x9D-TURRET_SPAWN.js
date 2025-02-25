var BasePacket = require('../BasePacket');

module.exports = class extends BasePacket {//S2C.TURRET_SPAWN
	struct = {
		NetID: 'uint32',
		NetNodeID: 'uint8',
		Name: ['char', 64],//utf-8?
		bitfield: ['bitfield', {
			IsTargetable: 1,
			unk1: 2,
			unk2: 3,
		}],
		IsTargetableToTeamSpellFlags: 'uint32',
	}
};
