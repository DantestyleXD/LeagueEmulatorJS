var BasePacket = require('../BasePacket');


module.exports = class extends BasePacket {//S2C.
	struct = {
		bitfield: ['bitfield', {
			VoteYes: 1,
			OpenVoteMenu: 2,
		}],
		PlayerNetID: 'uint32',
		ForVote: 'uint8',
		AgainstVote: 'uint8',
		NumPlayers: 'uint8',
		TeamID: 'uint32',
		TimeOut: 'float',
	}
};
