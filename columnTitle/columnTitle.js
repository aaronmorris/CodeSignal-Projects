function columnTitle(number) {
    // 65 is A
    let output = '';
    while (number > 26) {
        // output += String.fromCharCode(Math.floor((number / 26)) + 64);
        output = String.fromCharCode((number % 26) + 64) + output;
        let remainder = number % 26;
        while (remainder > 26) {
            remainder = remainder % 26;
        }
        console.log('remainder: ' + remainder);
        console.log('remainder + 64 ' + (remainder + 64));
        console.log('code: ' + (number % 26) + 64);
        console.log('output: ' + output);
        console.log('number: ' + number);
        console.log('number / 26: ' + (number / 26));
        // number = Math.floor(number / 26);
        // number = Math.ceil(number / 26);
        // number = number / 26;
        number = number - ((number % 26) * 26);
        console.log('number: ' + number);
    }

    let final = number % 26;
    return String.fromCharCode(final + 64) + output;
}

var response;
var input;
var expected;
var status;

// input = 1;
// expected = 'A';
// response = columnTitle(input);
// status = response == expected;
// console.log('status: ' + status + ' ---- ' + input + ' should be ' + expected + ' - actual: ' + response);

// input = 2;
// expected = 'B';
// response = columnTitle(input);
// status = response == expected;
// console.log('status: ' + status + ' ---- ' + input + ' should be ' + expected + ' - actual: ' + response);

// input = 27;
// expected = 'AA';
// response = columnTitle(input);
// status = response == expected;
// console.log('status: ' + status + ' ---- ' + input + ' should be ' + expected + ' - actual: ' + response);

// input = 28;
// expected = 'AB';
// response = columnTitle(input);
// status = response == expected;
// console.log('status: ' + status + ' ---- ' + input + ' should be ' + expected + ' - actual: ' + response);

// input = 16808;
// expected = 'XVL';
// response = columnTitle(input);
// status = response == expected;
// console.log('status: ' + status + ' ---- ' + input + ' should be ' + expected + ' - actual: ' + response);

// input = 282475250;
// expected = 'WTCPTR';
// response = columnTitle(input);
// status = response == expected;
// console.log('status: ' + status + ' ---- ' + input + ' should be ' + expected + ' - actual: ' + response);

input = 101027545;
expected = 'HMAZZU';
response = columnTitle(input);
status = response == expected;
console.log('status: ' + status + ' ---- ' + input + ' should be ' + expected + ' - actual: ' + response);