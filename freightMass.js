function calculateMass(strArray){
	var totalMass;
	totalMass = strArray.reduce((mass, item) => mass + item.length,0);
	return totalMass;
}
