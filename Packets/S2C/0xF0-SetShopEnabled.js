var BasePacket = require('../BasePacket');


module.exports = class extends BasePacket {//S2C.
	struct = {
		bitfield: ['bitfield', {
			Enabled: 1,
			ForceEnabled: 2,
		}],
	}
};
