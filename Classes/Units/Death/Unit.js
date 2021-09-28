var ConstantsUnit = require('../../../Constants/Unit');


class DeathUnit {

	constructor(parent){
		this.parent = parent;
		
		if( !this.respawnTime )
			this.respawnTime = ConstantsUnit[this.parent.info.type]?.respawnTime || 0;
	}

	/*respawnTime = 0;
	totalRespawnTime = 0;
	Exp = 0;
	Gold = 0;*/
	
}


module.exports = DeathUnit;
