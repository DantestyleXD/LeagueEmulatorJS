var BasePacket = require('../BasePacket');

module.exports = class extends BasePacket {//C2S.
	struct = {
		RespawnPointEvent: 'uint8',
		RespawnPointUIID: 'uint8',
	}
};
