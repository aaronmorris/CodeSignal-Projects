const vowels = 'AEIOUaeiou';
var hardSurname = function (surname) {
	var max = 0;
	var count = 0;

	for (var c of surname) {
		count = vowels.indexOf(c) >= 0 ? 0 : count + 1;
		max = Math.max(max, count);
	}

	return max;
};

console.log('Blaszczykowski = 6');
console.log(hardSurname('Blaszczykowski') === 6);
console.log('Papastathopoulos == 2');
console.log(hardSurname('Papastathopoulos') === 2);
console.log('Aubameyang == 2');
console.log(hardSurname('Aubameyang') === 2);
console.log('A == 0');
console.log(hardSurname('A') === 0);
console.log('Z == 1');
console.log(hardSurname('Z') === 1);
