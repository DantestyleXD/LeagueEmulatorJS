var BasePacket = require('../BasePacket');


module.exports = class extends BasePacket {//C2S.
	struct = {
		ClientID: 'int32',
		PauseTimeRemaining: 'int32',
		bitfield_IsTournament: 'uint8',
	}
};
