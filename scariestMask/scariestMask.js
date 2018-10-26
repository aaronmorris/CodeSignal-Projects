function scariestMask(mask) {
	let differences = 0;
	for (let line of mask) {
		let reverseLine = reverseString(line);
		if (reverseLine === line) {
			continue;
		}

		let stringLength = line.length;
		let localDifferences = 0;
		for (let i = 0; i < stringLength; i++) {
			if (line[i] !== reverseLine[i]) {
				localDifferences++;
			}
		}

		differences += (localDifferences / 2);
	}

	return differences;
}

function reverseString(input) {
	return input.split('').reverse().join('');
}

let mask = ['A    A',
		' O  O ',
		'= WW ='];
console.log(scariestMask(mask));

mask =
	['     ',
		' @ @ ',
		'  <  ',
		' O   ',
		'     '];
console.log(scariestMask(mask));
