var BasePacket = require('../BasePacket');
var Vector3 = require('../SharedStruct/Vector3');


module.exports = class extends BasePacket {//S2C.
	struct = {
		flags_DoLerpTime: 'uint8',
		Direction: Vector3,
		LerpTime: 'float',
	}
};
