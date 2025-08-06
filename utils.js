const _primes = [2,3];
const _isPrime = _primes.reduce((p,c) => { p[c] = true; return p;}, {});

function getPrimes(max){
    for(let i=_primes[_primes.length-1]+2;i<=max;i+=2){
        if (_isPrime[i] = !_primes.some(x => i % x === 0)) {
            _primes.push(i);
        }
    }
    return new Array(..._primes);
}

function isPrime(p){
    if (Object.hasOwn(_isPrime, p)){
        return _isPrime[p];
    }

    if (p < 2){
        return false;
    }

    getPrimes(p);

    return _isPrime[p];

}
module.exports = { getPrimes, isPrime };