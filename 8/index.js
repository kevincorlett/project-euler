const fs = require('fs');
const path = require('path');

const inputStr = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().replace(/\n/g,'');
const nums = inputStr.split('').map(x => parseInt(x));

let max = 0;

for (let i=0; i<nums.length-13; i++){
    
    const current = nums.slice(i, i+13).reduce((a,b) => a*b);
    if (current > max){
        max = current;
    }
}
console.log(max);
