const rowMax = 20, colMax = 20;

const cache = {};

function countMoves(row, col){
    //check the cache first
    if (!cache.hasOwnProperty(row)){
        cache[row] = {};
    } else if (cache[row].hasOwnProperty(col)){
        return cache[row][col];
    }
    
    let moves = 0;
    //if we can go either right or down, then we have a choice - increment the number of possible moves
    if (col < colMax && row < rowMax){
        moves++;
    }

    //add the number of possible routes from the right spot
    if (col < colMax){
        moves += countMoves(row, col + 1);
    }

    //add the number of possible moves from the downward spot
    if (row < rowMax){
        moves += countMoves(row + 1, col);
    }

    return cache[row][col] = moves;
}

console.log(1 + countMoves(0,0));
