const { getDigits, concatDigits } = require("../utils");

let result = 0;

for (let i=1; i<50000; i++){
    const digits = [];
    let n = 1;
    while (digits.length < 9){
        const x = i * n;

        digits.push(...getDigits(x).reverse());

        n++;
    }

    if (isPandigital(digits)){
        const pd = concatDigits(digits.reverse());
        if (pd > result){
            result = pd;
        }
    }
}

console.log(result);

function isPandigital(digits){
    return digits.length === 9 && digits.toSorted().join('') === '123456789';
}