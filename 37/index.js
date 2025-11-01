const { isPrime, getDigits, concatDigits } = require("../utils");

const results = [];
let p = 10;
while (results.length < 11){
    while (!isPrime(++p)){
        //noop;
    }

    const digits = getDigits(p);
    let ok = true;
    for (let i = 1, j=digits.length-1; i < digits.length; i++, j--){
        let a = concatDigits(digits.slice(i));
        if (!(ok = isPrime(a))){
            break;
        }
        let b = concatDigits(digits.toSpliced(j))
        if (!(ok = isPrime(b))){
            break;
        }
    }

    if (ok){
        console.log('found:', p);
        results.push(p);
    }

}

console.log(results.reduce((a,b) => a + b));