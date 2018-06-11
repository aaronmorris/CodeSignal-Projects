var map =  [[1,0,0,2,2,0], 
            [0,0,2,1,0,2], 
            [0,1,1,2,2,2], 
            [1,2,1,0,2,1]];

map = [[]];

 console.log(largestPlateau(map));

function largestPlateau(map) {
    var maxPlateau = 0;
    var maxpPlateauValue;
    var rows = map.length;
    var columns = map[0] ? map[0].length: 0;

    for (r = 0; r < rows; r++) {
        for (l = 0; l < columns; l++) {
            var currentValue = map[r][l];
            var plateauSize = checkRightCell(map, r, l, map[r][l], 0);

            if (plateauSize > maxPlateau) {
                maxPlateau = plateauSize;
                maxpPlateauValue = currentValue;
            }
        }
    }

    return maxPlateau;
}

function checkNextCell(map, row, column, currentValue, currentCount) {
    var cellValue = map[row][column];
    
    if (cellValue < 0) {
        return currentCount;
    }

    if (map[row][column] == currentValue) {
        currentCount++;
        
        map[row][column] = currentValue * -1;
        if (map[row][column] == 0)
        {
            map[row][column] = -9
        }

        if (column < map[0].length - 1) {
            currentCount = checkNextCell(map, row, column+1, currentValue, currentCount);
        }

        if (column > 0) {
            currentCount = checkNextCell(map, row, column-1, currentValue, currentCount);
        }

        if (row < map.length - 1) {
            currentCount = checkNextCell(map, row + 1, column, currentValue, currentCount);
        }

        if (row > 0) {
            currentCount = checkNextCell(map, row - 1, column, currentValue, currentCount);
        }
    } 

    return currentCount;

    
}
