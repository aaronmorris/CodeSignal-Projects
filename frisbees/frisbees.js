function frisbees(friends, numberOfPasses, startingPlayer) {
	// console.log('freinds: ' + friends);
	let numberOfFriends = friends.length;
	// console.log('numberOfFriends: ' + numberOfFriends);
	let passesCount = [];
	while (numberOfFriends--) passesCount[numberOfFriends] = 0;

	let currentPlayer = friends[startingPlayer];
	let currentPlayerIndex = startingPlayer;

	console.log('currentPlayerIndex: ' + startingPlayer);
	for (let p = 0; p < numberOfPasses; p++) {
		let friendsInRange = getFriendsInRange(friends, currentPlayer);
		console.log('friendsInRange: ' + friendsInRange);
		let friendsWhoNeedPasses = getPlayersWhoNeedPasses(friendsInRange, passesCount);
		let farthestAwayPlayers = getFarthestAwayPlayers(friendsWhoNeedPasses, currentPlayer);
		// console.log('farthestAwayPlayers: ' + farthestAwayPlayers);
		currentPlayer = farthestAwayPlayers[0];
		currentPlayerIndex = friends.indexOf(currentPlayer);
		console.log('currentPlayerIndex: ' + currentPlayerIndex);
		passesCount[currentPlayerIndex]++;
		// console.log('passesCount: ' + passesCount);
	}

	return currentPlayerIndex;
}

function getDistance(friend, currentPlayer) {
	if (friend == null) {
		return Number.MIN_SAFE_INTEGER;
	}

	var xs = friend[0] - currentPlayer[0];
	var ys = friend[1] - currentPlayer[1];

	xs *= xs;
	ys *= ys;

	return Math.sqrt(xs + ys);
};

function getFarthestAwayPlayers(friends, currentPlayer) {
	var numberOfFriends = friends.length;
	// console.log('getFarthestAwayPlayers() - numberOfFriends: ' + numberOfFriends);
	if (numberOfFriends === 1) {
		return friends;
	}

	var playerDistances = getPlayerDistances(friends, currentPlayer);
	var maxDistance = Array.max(playerDistances);
	// console.log('maxDistance: ' + maxDistance);

	var playersAtMaxDistance = [];

	for (var i = 0; i < numberOfFriends; i++) {
		if (playerDistances[i] === maxDistance) {
			playersAtMaxDistance.push(friends[i]);
		}
	}

	return playersAtMaxDistance;
}

function getFriendsInRange(friends, currentPlayer) {
	let distances = getPlayerDistances(friends, currentPlayer);
	let friendsInRange = [];
	let numberOfFriends = friends.length;
	// console.log('getFriendsInRange() - numberOfFriends: ' + numberOfFriends);
	for (var x = 0; x < numberOfFriends; x++) {
		if (distances[x] <= currentPlayer[2]) {
			friendsInRange.push(friends[x]);
		}
		else {
			console.log(distances[x] + ' is out of range for ' + currentPlayer[2]);
			friendsInRange.push(null);
		}
	}

	console.log('friendsInRange: ' + friendsInRange);

	return friendsInRange;
}

function getPlayerDistances(friends, currentPlayer) {
	// console.log('getPlayerDistance() - currentPlayer: ' + currentPlayer);
	var distances = [];
	for (let friend of friends) {
		// console.log('friend: ' + friend);
		if (friend == null) {
			distances.push(Number.MIN_SAFE_INTEGER);
			continue;
		}

		// var distance1 = Math.abs(friend[0] - currentPlayer[0]);
		// var distance2 = Math.abs(friend[1] - currentPlayer[1]);
		// var totalDistance = distance1 + distance2;
		// if (totalDistance > currentPlayer[2]) {
		// 	totalDistance = -1;
		// }

		// distances.push(totalDistance);
		distances.push(getDistance(friend, currentPlayer));
	}

	console.log('distances: ' + distances);
	return distances;
}

function getPlayersWhoNeedPasses(friends, passesCount) {
	let minimumPasses = getMinimumPasses(friends, passesCount);
	// console.log(passesCount.length);
	// console.log('minimumPasses: ' + minimumPasses);
	let numberOfFriends = friends.length;
	let friendsWhoNeedPasses = [];
	for (let i = 0; i < numberOfFriends; i++) {
		// console.log(friend);
		if (friends[i] != null && passesCount[i] === minimumPasses) {
			friendsWhoNeedPasses.push(friends[i]);
		}
		else {
			friendsWhoNeedPasses.push(null);
		}
	}

	// console.log('friendsWhoNeedPasses: ' + friendsWhoNeedPasses);
	return friendsWhoNeedPasses;
}

function getMinimumPasses(friends, passesCount) {
	let minimumPasses = Number.MAX_SAFE_INTEGER;
	for (let x = 0; x < friends.length; x++) {
		if (friends[x] != null && passesCount[x] < minimumPasses) {
			minimumPasses = passesCount[x];
		}
	}

	return minimumPasses;
}

Array.max = function(array) {
	return Math.max.apply(Math, array);
};

Array.min = function(array) {
	return Math.min.apply(Math, array);
};

var friends = [];
var numberOfPasses = 0;
var startingPlayer = 0;

friends = [[152, 213, 276], [274, 259, 151], [40, 57, 130], [203, 87, 189], [43, 182, 163]];
numberOfPasses = 19;
startingPlayer = 4;
console.log('lastPlayerIndex: ' + frisbees(friends, numberOfPasses, startingPlayer));

numberOfPasses = 2;
startingPlayer = 1;
// console.log('lastPlayerIndex: ' + frisbees(friends, numberOfPasses, startingPlayer));
