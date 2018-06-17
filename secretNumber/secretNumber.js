function secretNumber(numberLength, sumOfDigits, k) {

}

function sumOfDigits(number) {
    return number.toString().split('').map(Number).reduce(function (a, b) {
            return a + b;
        }, 0);
}