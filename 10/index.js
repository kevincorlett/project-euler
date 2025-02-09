const max = 2000000;
const primes = [2];

for(let i=3;i<max;i+=2){
    if (!primes.some(x => i % x === 0)){
        primes.push(i);
    }
}

const result = primes.reduce((a,b) => a+b);

console.log(result);