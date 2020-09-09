function scan(strArray) {
	var logofContraband=[];

	strArray.forEach((pieceofCargo, indexNum) => {
		if(pieceofCargo == "contraband"){
			logofContraband.push(indexNum);
		}
	});
	
	return logofContraband;
}
