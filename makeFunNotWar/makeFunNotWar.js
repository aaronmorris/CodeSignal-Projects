const cardValueIndex = 0;
const cardSuiteIndex = 1;
const PLAYER1 = "Player1";
const PLAYER2 = "Player2";

let player1Discards = [];
let player2Discards = [];
let player1CardCount = 0;
let player2CardCount = 0;

function makeFunNotWar(p1Cards, p2Cards) {
	var numberOfCards = p1Cards.length;

	for (let i = 0; i < numberOfCards; i++) {
		let player1Card = getCardValueAndSuite(p1Cards[i]);
		let player2Card = getCardValueAndSuite(p2Cards[i]);

		let isSameSuite = p1Cards[i][cardSuiteIndex] === p2Cards[i][cardSuiteIndex];
		let isSameNumber = p1Cards[i][cardValueIndex] === p2Cards[i][cardValueIndex];
		let cardsSpent = 1;
		let playedWar = false;
		if (isSameNumber) {
			cardsSpent = playWar(p1Cards, p2Cards, i);
			i += cardsSpent;
			playedWar = true;
		}

		if (getWinnner(getCardValueAndSuite(p1Cards[i]), getCardValueAndSuite(p2Cards[i])) === PLAYER1) {
			player1CardCount += cardsSpent;
			if (playedWar) player1CardCount++;
		}
		else {
			player2CardCount += cardsSpent;
			if (playedWar) player2CardCount++;
		}

		// console.log(player1Card[cardSuiteIndex]);
		// console.log(player1Card[cardValueIndex]);
		console.log(p1Cards[i] + ' - ' + p2Cards[i]);
		console.log(player1CardCount + ' vs. ' + player2CardCount);
	}

	return [player1CardCount * 2, player2CardCount * 2];
}

function getCardValueAndSuite(card) {
	if (card.length === 2) {
		return [card[0], card[1]];
	}

	return [card[0] + card[1], card[2]];
}

function playWar(player1Cards, player2Cards, startIndex) {
	let currentIndex = startIndex + 4;
	let player1Card = getCardValueAndSuite(player1Cards[currentIndex]);
	let player2Card = getCardValueAndSuite(player2Cards[currentIndex]);
	let isSameNumber = player1Card[cardValueIndex] === player2Card[cardValueIndex];
	if (isSameNumber) {
		currentIndex = playWar(player1Cards, player2Cards, currentIndex);
	}

	return currentIndex;
}

function getWinnner(player1Card, player2Card) {
	let isSameSuite = player1Card[cardSuiteIndex] === player2Card[cardSuiteIndex];
	if (isSameSuite) {
		console.log('getting lowest value');
		return getLowestCard(player1Card[cardValueIndex], player2Card[cardValueIndex]);
	}

	return getHighestCard(player1Card[cardValueIndex], player2Card[cardValueIndex]);
}

function getLowestCard(player1CardValue, player2CardValue) {
	if (getNumericalCardValue(player1CardValue) < getNumericalCardValue(player2CardValue)) {
		return PLAYER1;
	}

	return PLAYER2;
}

function getHighestCard(player1CardValue, player2CardValue) {
	console.log('getHighestCard - ' + getNumericalCardValue(player1CardValue) + ' vs. ' + getNumericalCardValue(player2CardValue));
	if (getNumericalCardValue(player1CardValue) > getNumericalCardValue(player2CardValue)) {
		return PLAYER1;
	}

	return PLAYER2;
}

function getNumericalCardValue(cardValue) {
	if (!isNaN(cardValue)) {
		return parseInt(cardValue);
	}

	let value = '';
	switch (cardValue) {
		case 'J':
			value = 11;
			break;
		case 'Q':
			value = 12;
			break;
		case 'K':
			value = 13;
			break;
		default:
			value = 14;
			break;
	}

	return value;
}

let p1Cards = ["3H", "10C", "AD", "JS"];
let p2Cards = ["2D", "8S", "KH", "8C"];
// console.log(makeFunNotWar(p1Cards, p2Cards));

player1CardCount = 0;
player2CardCount = 0;
p1Cards = ["2D", "7H", "JD", "3C"];
p2Cards = ["3H", "10C", "AD", "JS"];
// console.log(makeFunNotWar(p1Cards, p2Cards));

player1CardCount = 0;
player2CardCount = 0;
p1Cards = ["5H", "3C", "4C", "5C", "JD"];
p2Cards = ["5H", "5C", "8C", "9C", "7D"];
// console.log(makeFunNotWar(p1Cards, p2Cards));

player1CardCount = 0;
player2CardCount = 0;
p1Cards = ["3S", "6D", "KC", "3H", "5H", "JH", "8C", "JD", "AS", "8S", "6S", "AD", "7H", "5C", "QS", "10H", "6C", "QD", "4S", "2S", "AC", "9S", "10D", "10C", "3D", "7C", "8H", "4H", "2D", "10S", "7D", "4C", "2C", "5D", "KS", "QC", "KH", "QH", "9C", "JC", "KD", "7S", "4D", "6H", "9D", "2H"];
p2Cards = ["AH", "AH", "9H", "3S", "4H", "9C", "KC", "KS", "JC", "AS", "4S", "10D", "QD", "10S", "KD", "3H", "10H", "8S", "5D", "2D", "2H", "7S", "8H", "6C", "QC", "7C", "3D", "10C", "9S", "QH", "5C", "2S", "3C", "9D", "5S", "6S", "KH", "QS", "6H", "AD", "AH", "8C", "7D", "JS", "4C", "JH"]
// should be [24, 68]
console.log(makeFunNotWar(p1Cards, p2Cards));

player1CardCount = 0;
player2CardCount = 0;
p1Cards = ["5H", "3C", "4C", "5C", "JD"];
p2Cards = ["5H", "5C", "8C", "9C", "7D"];
// console.log(makeFunNotWar(p1Cards, p2Cards));