const { concatDigits } = require("../utils");

let result = 0;

for (let a=1;a<10;a++){
    test([a]);
    test([a,a]);
    for (let b=0; b<10; b++){
        test([a,b,a]);
        test([a,b,b,a]);
        for (let c=0; c<10; c++){
            test([a,b,c,b,a]);
            test([a,b,c,c,b,a]);
        }
    }
}
console.log(result);

function test(digits){
    const num = concatDigits(digits);
    if (isBinaryPalendromic(num)){
        result += num;
    }
}

function isBinaryPalendromic(n){
    return isStringPalendromic(n.toString(2));
}

function isStringPalendromic(str){
    for (let i=0, j = str.length-1; i<j; i++, j--){
        if (str[i] !== str[j]){
            return false;
        }
    }

    return true;
}