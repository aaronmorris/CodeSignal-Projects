const alphaNumeric = '0123456789abcdefghijklmnopqrstuvwxyz$ ';
function guessIt(message, options) {
	var escapedMessage = '';
	for (var c of message) {
		escapedMessage += (alphaNumeric.indexOf(c) > -1) ? c : '\\' + c;
	}

	escapedMessage = escapedMessage.replace(/\$/g, '.*');

	var regEx = RegExp('^' + escapedMessage + '$');
	var validOptions = [];

	for (var option of options) {
		if (regEx.test(option)) {
			validOptions.push(option);
		}
	}

	return validOptions;
}

var message;
var options;

message = 'prizes$';
options = ['prizes!', 'prizes?', 'prizes c:', 'prizes', 'money!', 'big prizes', 'prizes suck'];
console.log(guessIt(message, options));

message = 'm$ney';
options = ['money', 'maney', 'monay'];
console.log(guessIt(message, options));

message = '$237000 of cash';
options = ['this one is worth 237000 of cash', '237000 cash', 'this one is worth 236000 of cash'];
console.log(guessIt(message, options));
