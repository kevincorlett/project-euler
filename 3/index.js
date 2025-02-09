const target = 600851475143;

const primes = [2];

//find all prime numbers up to the square root (the largest factor of the target number)
const sqrt = Math.sqrt(target);
for(let i=3;i<sqrt;i+=2){
    if (!primes.some(x => i % x === 0)){
        primes.push(i);
    }
}

//work back through the primes to find the larges factor
let result = 0;
for (let i=primes.length-1; i> -1; i--){
    if (target % primes[i] === 0){
        result = primes[i];
        break;
    }
}
console.log(result);