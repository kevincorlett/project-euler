const { isPrime } = require('../utils.js');
const limit = 1000;

let max = 0;
let result = 0;
for (let a = -limit; a < limit; a++){
    for (let b = -limit; b < limit; b++){
        let n = 0;
        while (isPrime((n*n) + (a*n) + b)){
            n++;
        }
        if (n > max){
            max = n;
            result = a * b;
        }
    }
}

console.log(result);
