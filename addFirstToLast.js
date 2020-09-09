function addFirstToLast(strArray){
	var length = strArray.length;
	var firstAndLast = '';
	if(length > 0){
		firstAndLast = strArray[0] + strArray[length-1];
	}
	return firstAndLast ;
}

console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));
