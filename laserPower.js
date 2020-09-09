function calculatePower(numArray){
	var power;
	power = numArray.reduce((sum, item) => {
		return sum + item*2;
	}, 0);

	return power;
}
