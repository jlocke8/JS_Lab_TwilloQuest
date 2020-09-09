function mutate(strArray){
	var newArray=[ ];
	strArray.forEach(item=>{newArray.push(item.toUpperCase())});

	return newArray;

}
