function scanAndFilter(strArray, filterText){

	strArray.forEach((item, index) => {
		if(item == filterText){
			strArray.splice(index, 1);
		}
	});
	return strArray;


}
