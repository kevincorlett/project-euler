const factorials = Array.from({ length: 10 }).map((x,i,a) => {
    return a[i] = (i == 0 ? 1n : a[i-1] * BigInt(i));
});

const max = 9999999n;
let result = 0n;
for (let i=3n; i<max; i++){
    const fs = factorialSum(i); 
    if (fs === i){
        console.log(i, fs);
        result += factorialSum(i);
    }

}

console.log(result);

function factorialSum(num){
    let sum = 0n;
    while (num > 0n){
        const x = num % 10n;
        sum += factorials[x];
        num = num / 10n;
    }

    return sum;
}
