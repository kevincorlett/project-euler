const { getDigitsB, concatDigitsB, isPrimeB } = require('../utils.js');

const min = 2n, max = 1000000n;
let result = 0;
for (let n=min; n < max; n++){
    const rotations = getRotations(n);

    if (rotations.every(x => isPrimeB(x) )){
        result++;
    }
}
console.log(result);

function getRotations(num){
    const digits = getDigitsB(num);

    const rotations = [digits];
    for (let i=1; i<digits.length; i++){
        rotations.push([...rotations[i-1].slice(1), rotations[i-1][0]]);
    }

    return rotations.map(x => concatDigitsB(x));
}