const heightIndex = 0;
const weightLimitIndex = 1;
const reachIndex = 0;
const weightIndex = 1;

function treeClimbing(branches, friends) {
	var branchCount = branches.length;
	var friendsThatMakeIt = 0;
	var topOfTree = branches[branchCount - 1][heightIndex];
	for (var friend of friends) {
		var currentHeight = 0;
		for (var i = 0; i < branchCount; i++) {
			var closeEnough = branches[i][heightIndex] - currentHeight <= friend[reachIndex];
			var strongEnough = branches[i][weightLimitIndex] >= friend[weightIndex];
			if (closeEnough && strongEnough) {
				currentHeight = branches[i][heightIndex];
			}
		}

		if (currentHeight === topOfTree) {
			friendsThatMakeIt++;
		}
	}

	return friendsThatMakeIt;
}

var friends = [];
var branches = [];

friends = [[4, 1], [7, 10], [6, 2], [7, 6]];
branches = [[3, 10], [6, 9], [7, 2], [10, 7], [11, 1], [12, 2], [18, 11]];

console.log('Should be 1: - Actual: ' + treeClimbing(branches, friends));

branches = [[7, 9], [8, 6], [18, 8], [21, 12], [26, 9]];
friends = [[8, 4], [11, 2], [4, 4], [3, 5], [10, 6], [12, 3]];

console.log('Should be 3: - Actual: ' + treeClimbing(branches, friends));
