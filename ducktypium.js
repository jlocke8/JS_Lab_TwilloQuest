//var acceptableInput = ["red", "blue", "yellow"];
var acceptableInput = ["red", "blue", "yellow"];
var colorMap = {
		"red":{"blue":"purple", "yellow":"orange"},
		"blue":{"red":"purple", "yellow":"green"},
		"yellow":{"red":"orange", "blue":"green"}
	}

var error = new Error("Fuck!");

class Ducktypium {

	constructor(colorStr){
		if(acceptableInput.includes(colorStr) == true){
			this.color = colorStr;
		}else{
			throw error;
		}
		this.calibrationSequence = [];
	}
	
	refract(colorStr){
		if(acceptableInput.includes(colorStr) == true){
//			if(this.color == "red"){
//
//			}else if(this.color == "blue"){
//
//			}else if(this.color == "yellow"){
//				if(colorStr == "red"){
//					return "orange";
//				}
//				if(colorStr == "blue"){
//					return "green";
//				}
//			}else{
//				return colorStr;
//			}
			var result =  colorMap[this.color][colorStr];
			if(result == undefined){
				return colorStr;
			}else{
				return result;
			}
		}else{
			throw error;
		}
	}

	calibrate(numArray){
		this.calibrationSequence = numArray.sort().map(item => item*3);
	}
}
