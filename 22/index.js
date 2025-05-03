const fs = require('fs');
const aChar = 'A'.charCodeAt(0);
const names = fs.readFileSync('names.txt').toString();

const result = names
    .split(',')
    .map(x => x.substring(1,x.length-1))
    .sort()
    .map(x => x
        .split('')
        .reduce((n,y) => n + y.charCodeAt(0) - aChar + 1,0)
    )
    .reduce((n,x,i) => n + x*(i+1), 0);

console.log(result);