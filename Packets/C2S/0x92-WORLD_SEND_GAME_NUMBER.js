var BasePacket = require('../BasePacket');


module.exports = class extends BasePacket {//C2S.
	struct = {
		GameID: 'int64',
		SummonerName: ['char', 128],
	}
};
