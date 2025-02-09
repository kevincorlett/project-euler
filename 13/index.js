const fs = require('fs');
const path = require('path');

const inputStr = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();
const nums = inputStr.split('\n').map(x => BigInt(x));
const sum = nums.reduce((a,b) => a+b);
console.log(sum.toString().substring(0,10));