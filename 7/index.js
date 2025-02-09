const max = 10001;
const primes = [2];

for(let i=3; primes.length<max; i++){
    if (!primes.some(x => i % x === 0)){
        primes.push(i);
    }
}

console.log(primes[max-1]);