function brothersInTheBar(glasses) {
	var roundCount = -1;
	while (glasses != null) {
		roundCount++;
		glasses = findAndRemoveGlasses(glasses);
	}

	return roundCount;
}

function findAndRemoveGlasses(glasses) {
	var currentSize = -1;
	var currentCount = 0;
	for (var i = 0; i < glasses.length; i++) {
		if (glasses[i] === currentSize) {
			currentCount++;
			if (currentCount === 3) {
				glasses.splice(i - 2, 3);
				return glasses;
			}
		}
		else {
			currentCount = 1;
			currentSize = glasses[i];
		}
	}

	return null;
}

var glasses, result;
glasses = [1, 1, 2, 3, 3, 3, 2, 2, 1, 1];
result = brothersInTheBar(glasses);
console.log(result + ': ' + (result === 3));

glasses = [1, 1, 2, 1, 2, 2, 1, 1];
result = brothersInTheBar(glasses);
console.log(result + ': ' + (result === 0));

glasses = [2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1];
result = brothersInTheBar(glasses);
console.log(result + ': ' + (result === 42));
