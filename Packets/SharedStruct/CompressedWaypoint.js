var Types = require('../../Constants/Types');
const { getIntBytes_r, binaryToByteArray, byteArrayToBinary } = require("../../Core/Utilities");


module.exports = {//CompressedWaypoint
	reader: (buffer, size) => {
		var obj = {};
		obj.flagsBuffer = [];
		if(size > 1){
			obj.flagsBufferByte = buffer.readobj(['uint8', parseInt((size - 2) / 4 + 1)]);
			obj.flagsBuffer = byteArrayToBinary(obj.flagsBufferByte);
			//console.log('obj.flagsBufferByte, obj.flagsBuffer', obj.flagsBufferByte, obj.flagsBuffer);
		}

		obj.lastX = buffer.read1('int16');
		obj.lastY = buffer.read1('int16');
		obj.waypoints = [];
		obj.waypoints.push({x: obj.lastX, y: obj.lastY});

		for (let i = 1, flag = 0; i < size; i++){

			if(obj.flagsBuffer[flag++])
				obj.lastX += buffer.read1('int8');
			else
				obj.lastX = buffer.read1('int16');

			if(obj.flagsBuffer[flag++])
				obj.lastY += buffer.read1('int8');
			else
				obj.lastY = buffer.read1('int16');

			obj.waypoints.push({x: obj.lastX, y: obj.lastY});
		}

		return obj.waypoints;
	},
	writer: (buffer, Waypoints) => {
		var relativeWaypoints = [];
		var flagsBinary = '';
	
		if(Waypoints.length > 1){
			for (let i = 1; i < Waypoints.length; i++){
				let relativeWaypoint = {
					X: Waypoints[i].x - Waypoints[i - 1].x,
					Y: Waypoints[i].y - Waypoints[i - 1].y,
				};
				relativeWaypoints.push(relativeWaypoint);
				
				flagsBinary += +(relativeWaypoint.x <= Types.maxValues['int8'] && relativeWaypoint.x >= Types.minValues['int8']);
				flagsBinary += +(relativeWaypoint.y <= Types.maxValues['int8'] && relativeWaypoint.y >= Types.minValues['int8']);
			}
			
			var flagsBuffer = getIntBytes_r(binaryToByteArray(flagsBinary), 8);
			var flagsCount = parseInt((Waypoints.length - 2) / 4 + 1);
			buffer.writeobj(['uint8', flagsCount], flagsBuffer);
	
			//console.log('flagsBinary, Types.maxValues, flagsBuffer', flagsBinary, Types.maxValues, flagsBuffer);
		}
	
		buffer.write1('int16',  Waypoints[0].x);
		buffer.write1('int16',  Waypoints[0].y);
	
		for(let i = 1, flag = 0; i < Waypoints.length; i++){
			if(flagsBinary[flag++] == '1')
				buffer.write1('int8',  relativeWaypoints[i-1].x);
			else
				buffer.write1('int16',  Waypoints[i].x);
	
			if(flagsBinary[flag++] == '1')
				buffer.write1('int8',  relativeWaypoints[i-1].y);
			else
				buffer.write1('int16',  Waypoints[i].y);
		}
	
	}
};
