const primes = [2,3];
function getPrimes(max){

    for(let i=primes[primes.length-1]+2;i<max;i+=2){
        if (!primes.some(x => i % x === 0)){
            primes.push(i);
        }
    }
    return new Array(...primes);
}

module.exports = { getPrimes };