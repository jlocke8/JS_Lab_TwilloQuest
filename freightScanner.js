function scan(strArray){
	let numContraband = 0;
	strArray.forEach(cargo => {
		if(cargo == "contraband"){
			numContraband++;
		}
	});
	
		return numContraband;
}
