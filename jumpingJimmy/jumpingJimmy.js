function jumpingJimmy(tower, jumpHeight) {
	var max = 0;
	for (var level of tower) {
		if (level <= jumpHeight) {
			max += level;
		}
		else {
			break;
		}
	}

	return max;
}

let tower = [3, 1, 2];
let jumpHeight = 3;
let expectedOutput = 6;
let actualOuptut = jumpingJimmy(tower, jumpHeight);
showResult(expectedOutput, actualOuptut);

tower = [1, 2, 3, 4];
jumpHeight = 2;
expectedOutput = 3;
actualOuptut = jumpingJimmy(tower, jumpHeight);
showResult(expectedOutput, actualOuptut);

tower = [5, 1, 8, 2, 4, 3, 1, 9, 8, 5, 1];
jumpHeight = 1;
expectedOutput = 0;
actualOuptut = jumpingJimmy(tower, jumpHeight);
showResult(expectedOutput, actualOuptut);

function showResult(expectedOutput, actualOuptut) {
	console.log(`Expected: ${expectedOutput} - Actual: ${actualOuptut} - Pass: ${expectedOutput === actualOuptut}`);
}
