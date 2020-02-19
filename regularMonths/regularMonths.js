function regularMonths(currentMonth) {
    let monthArray = currentMonth.split('-');
    let currentDate = new Date(monthArray[1], monthArray[0], 1);
    while(currentDate.getDay() != 1) {
        currentDate.setMonth(currentDate.getMonth() + 1);
        if (currentDate.getMonth() == 12) {
            currentDate.setMonth(1);
            currentDate.setFullYear(currentDate.getFullYear + 1);
        }
    }

    return (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getFullYear();
}

// Note that the getMonths function returns on a 0 based index, January is 0, not 1
var input;
input = '02-2016';
console.log('input: ' + input);
console.log('expected output: "08-2016"');
console.log('actual output: ' + regularMonths(input));