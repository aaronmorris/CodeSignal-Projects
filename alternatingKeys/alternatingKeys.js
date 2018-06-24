const leftHandKeys = ['Q', 'W', 'E', 'R', 'T', 'A', 'S', 'D', 'F', 'G', 'Z', 'X', 'C', 'V', 'B'];
const rightHandKeys = ['Y', 'U', 'I', 'O', 'P', 'H', 'J', 'K', 'L', 'N', 'M'];
const firstKeyTime = 50;
const sameHandTime = 75;
const differentHandTime = 50;
const leftHand = 'L';
const rightHand = 'R';
const space = ' ';

function alternatingKeys(text) {
    if (text.length == 0) { 
        return 0; 
    }

    let currentHand = getFirstHand(text);
    text = text.substring(1);
    var totalTime = firstKeyTime;
    for (var character of text) {
        var thisHand;
        if (character == space) {
            thisHand = switchHands(currentHand);
        } else {
            thisHand = getHand(character);
        }

        totalTime += (thisHand == currentHand ? sameHandTime : differentHandTime);
        currentHand = thisHand;
    }

    return totalTime;
}

function getHand(character) {
    return leftHandKeys.indexOf(character.toUpperCase()) > -1 ? leftHand : rightHand;
}

function getFirstHand(text) {
    spaceCount = 0;
    var currentHand = leftHand;
    for (var character of text) {
        if (character == space) {
            spaceCount++;
        }
        else {
            currentHand = getHand(character);
            break;
        }
    }

    if (spaceCount > 0) {
        currentHand = spaceCount % 2 == 0 ? currentHand : switchHands(currentHand);
    }

    return currentHand;
}

function switchHands(currentHand) {
    return currentHand == leftHand ? rightHand : leftHand;
}

console.log(alternatingKeys("abc") == 200);
console.log(alternatingKeys('land') == 200);
console.log(alternatingKeys('nice job') == 500);
console.log(alternatingKeys('    ') == 200);
console.log(alternatingKeys('c  c') == 225);
console.log(alternatingKeys(' lg') == 150);