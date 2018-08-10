function charLocation(text, width, characterToFind) {
	var snake = buildSnake(text, width);
	var sectionCount = snake.length;
	var matches = [];
	for (let i = 0; i < sectionCount; i++) {
		for (let j = 0; j < width; j++) {
			if (snake[i][j] === characterToFind) {
				matches.push([i, j]);
			}
		}
	}

	return matches;
}

function buildSnake(text, width) {
	var counter = 0;
	var snake = [];
	while (text.length > 0) {
		var section = text.substring(0, width);
		text = text.replace(section, '');
		if (counter % 2 === 1) {
			section = reverseString(section);
			section = section.padStart(width, ' ');
		}

		console.log(section);

		snake.push(section);
		counter++;
	}

	return snake;
}

function reverseString(text) {
	let reverse = '';
	for (let char of text) {
		reverse = char + reverse;
	}

	return reverse;
}

// console.log(charLocation('I always wondered why I came to this world.', 14, 'w'));
// console.log();
// console.log(charLocation('everyone has a chance.', 50, 'e'));
// console.log();
console.log(charLocation('For there was never yet philosopher that could endure the toothache patiently. -- William Shakespeare, Much Ado About Nothing', 17, 't'));
