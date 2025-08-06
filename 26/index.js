
const limit = 1000;

let maxLength=0, result=0;

for(let d=1n; d<1000n; d++){
    const cache = {};
    
    const length = longDivide(1n, d, 0);
    if (length > maxLength){
        maxLength = length;
        result = d;
    }
    
    function longDivide(numerator, denominator, position){
        //escape hatch in case of bugs
        if (++position > limit){
            throw new Error('Position exceeded limit');
        }

        const key = `${numerator}/${denominator}`;
        if (Object.hasOwn(cache, key)){
            //we've been here before, so we've found the first repetition of a recurring cycle
            return position - cache[key];
        }
        cache[key] = position;

        const remainder = numerator % denominator;
        if (remainder > 0n){
            return longDivide(remainder * 10n, denominator, position);
        }

        //if we get here there's no recursion
        return 0;
    }
}

console.log(result);