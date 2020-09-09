//var configs = process.argv[2];

class TargetingSolution{
//	coordinate = {
//		xpos:"",
//		ypos:"",
//		zpos:""
//	};
//
	constructor(config){

		this.x = config.x;
		this.y = config.y;
		this.z = config.z;

	}

	target(){
		return( '(' + this.x.toString()+', '+ this.y.toString() +', '+ this.z.toString() +')');
		
		
	}

print(){
console.log("targeting coordinates:\n");
	console.log('(' + this.x.toString()+', '+ this.y.toString() +', '+ this.z.toString() +')');
}

}

//sln = new TargetingSolution({
//	x:45,
//	y:12,
//	z:-1
//});


//console.log(sln.target());
