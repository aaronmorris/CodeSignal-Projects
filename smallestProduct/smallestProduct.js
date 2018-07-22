function smallestProduct(arr) {
	arr = arr.sort();
	var positve = [];
	var negative = [];
	var zero = [];
	for (var number of arr) {
		if (number < 0) {
			negative.push(number);
		}
		else if (number === 0) {
			zero.push(number);
		}
		else {
			positve.push(number);
		}
	}

	console.log(negative);
	console.log(zero);
	console.log(positve);

	if (negative.length % 2 !== 0) {
		
	}
}

var arr = [3, 2, 1];
var result = smallestProduct(arr);
console.log(result + ': ' + (result === 6));
