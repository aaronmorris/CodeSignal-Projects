function diceRolls2(dice) {
	var numberOfDice = getNumberOfDice(dice);
	var numberOfValues = getNumberOfValues(dice);

	
}

function getNumberOfDice(dice) {
	return dice.length;
}

function getNumberOfValues(dice) {
	return getNumberOfDice() > 0 ? dice[0].length : 0;
}

var dice = [[1,2], [3,4]];
diceRolls2(dice);