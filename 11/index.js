const fs = require('fs');
const path = require('path');

const inputStr = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();
const grid = inputStr.split('\n').map(x => x.split(' '));

let result = 0;
for(let row=0; row<grid.length; row++){
    for (let col=0;col<grid[0].length;col++){
        for (let i=-1;i<2;i++){
            const rowLimit = row + 4*i;
            if (rowLimit < 0 || rowLimit >= grid.length){
                continue;
            }

            for (let j=-1;j<2;j++){
                if (j === 0 && i === 0){
                    continue;
                }
                const colLimit = col + j*4;
                if (colLimit < 0 || colLimit >= grid[0].length){
                    continue;
                }
                
                let current = grid[row][col];
                for (let x=1;x<4;x++){
                    current *= grid[row + i*x][col + j*x]
                }
                if (current > result){
                    result = current;
                }

            }
        }
    }
}
console.log(result);