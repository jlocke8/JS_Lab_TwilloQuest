var in1 = process.argv[2];
var in2 = process.argv[3];

if (in1.toLowerCase() == in2.toLowerCase()){
	console.log(0);
}else if(in1.toLowerCase() < in2.toLowerCase()){
	console.log(-1);
}else if(in1.toLowerCase() > in2.toLowerCase()){
	console.log(1);
}
