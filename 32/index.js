const max = 10000n;
let x = 0;
const results = {};
for (let a=1n; a<max; a++){

    for (let b=1n; b<max;b++){

        const str = `${a}${b}${a*b}`;
        if (str.length > 9){
            break;
        }
        
        if (isPandigital(str)){
            results[a*b] = true;
            console.log(`${a}x${b}=${a*b}`);
        }
    }
}

const result = Object.keys(results).map(Number).reduce((a,b) => a+b);
console.log(result);

function isPandigital(str){
    return str.length === 9 && str.split('').map(Number).sort().join('') === '123456789';
}