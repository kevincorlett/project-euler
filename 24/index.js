const digits = '0123456789'.split('');
const target = 1000000;

let counter = 0;
let result = [];

countPermutations(digits);

result.reverse();
console.log(result.join(''));

function countPermutations(digits){
    
    if (digits.length === 0){
        return ++counter === target;
    }
    
    let targetReached = false;
    for (let i=0; i<digits.length && !targetReached; i++){
        
        const spliced = digits.toSpliced(i, 1);

        targetReached = countPermutations(spliced);
        
        if (targetReached){
            result.push(digits[i]);
        }
    }
    
    return targetReached;
}
