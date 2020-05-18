function nextLarger(a) {
	let length = a.length;
	let output = [];
	for (let i = 0; i < length; i++) {
		let found = false;
		let index = i;
		while (index < length) {
			index++;
			if (a[index] > a[i]) {
				output.push(a[index]);
				found = true;
				break;
			}
		}

		if (!found) {
			output.push(-1);
		}
	}

	return output;
}

var test = [6, 7, 3, 8];
console.log(test);
console.log(nextLarger(test));

test = [8, 7, 3, 8];
console.log(test);
console.log(nextLarger(test));

test = [4];
console.log(test);
console.log(nextLarger(test));

test = [4, 2];
console.log(test);
console.log(nextLarger(test));