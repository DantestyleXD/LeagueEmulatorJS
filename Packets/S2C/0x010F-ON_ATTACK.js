var ExtendedPacket = require('../ExtendedPacket');
var Vector3 = require('../SharedStruct/Vector3');


module.exports = class extends ExtendedPacket {//S2C.EXTENDED.ON_ATTACK
	struct = {
		LookAtType: 'uint8',
		TargetPosition: Vector3,
		TargetNetID: 'uint32',
	}
};
