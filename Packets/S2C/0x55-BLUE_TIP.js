var BasePacket = require('../BasePacket');
const TipCommand = {
	ACTIVATE_TIP: 0,
	REMOVE_TIP: 1,
	ENABLE_TIP_EVENTS: 2,
	DISABLE_TIP_EVENTS: 3,
	ACTIVATE_TIP_DIALOGUE: 4,
	ENABLE_TIP_DIALOGUE_EVENTS: 5,
	DISABLE_TIP_DIALOGUE_EVENTS: 6,
};

module.exports = class extends BasePacket {//S2C.BLUE_TIP
	struct = {
		TipName: ['char', 128],
		TipOther: ['char', 128],
		TipImagePath: ['char', 128],
		TipCommand: 'uint8',
		TipID: 'uint32',
	}
};
