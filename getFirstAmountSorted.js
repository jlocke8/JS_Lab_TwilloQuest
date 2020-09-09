function getFirstAmountSorted(array, num){
	
	let sortedArray = array.sort().slice(0,num);
	return sortedArray;

}

console.log(getFirstAmountSorted(["third", "second", "first"], 2));
console.log(getFirstAmountSorted(["golden", "terrier"], 1));
console.log(getFirstAmountSorted(["cheerios", "apple jacks", "lucky charms"],3));
console.log(getFirstAmountSorted(["golden", "terrier", "boxer"],0));

