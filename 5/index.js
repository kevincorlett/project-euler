const numbers = new Array(20).fill().map((x,i) => i+1);

let result = 1;

while (!numbers.every(x => result % x === 0)){
    result++;
}


console.log(result);