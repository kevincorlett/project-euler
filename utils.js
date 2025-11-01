const _primes = [2,3];
const _isPrime = [false,false,true,true];
const _primesB = [2n, 3n];
const _isPrimeB = new Map([
    [0n, false],
    [1n, false],
    [2n, true],
    [3n, true],
]);

/**
 * Generate all prime numbers up to and including `max`.
 * @param {number} max Upper bound for prime generation (inclusive)
 * @returns {number[]} All prime numbers up to `max`
 */
function getPrimes(max){
    for(let i=_primes[_primes.length-1]+2;i<=max;i+=2){
        _isPrime[i-1] = false; //even numbers > 2
        if (_isPrime[i] = !_primes.some(x => i % x === 0)) {
            _primes.push(i);
        }
    }
    return [..._primes];
}

/**
 * Determine whether a number is prime.
 * @param {number} p Candidate number
 * @returns {boolean} True when `p` is prime, otherwise false.
 */
function isPrime(p){
    if (_isPrime[p] !== undefined){
        return _isPrime[p];
    }

    getPrimes(p);

    return _isPrime[p] === true;
}

/**
 * Generate all prime numbers up to and including `max`.
 * @param {bigint} max Upper bound for prime generation (inclusive)
 * @returns {bigint[]} All prime numbers up to `max`
 */
function getPrimesB(max){
    for(let i=_primesB[_primesB.length-1]+2n; i<=max; i+=2n){
        _isPrimeB.set(i-1n, false); //even numbers > 2
        
        const isPrime = !_primesB.some(x => i % x === 0n);
        _isPrimeB.set(i, isPrime);
        if (isPrime) {
            _primesB.push(i);
        }
    }
    return [..._primesB];
}

/**
 * Determine whether a BigInt is prime, using cached BigInt primes.
 * @param {bigint} p Candidate BigInt
 * @returns {boolean} True when `p` is prime, otherwise false
 */
function isPrimeB(p){
    if (!_isPrimeB.has(p)){
        getPrimesB(p);
    }

    return !!_isPrimeB.get(p);
}

/**
 * Break a number down into its constituent digits.  e.g. getDigits(100) returns [0, 0, 1]
 * @param {Number} num 
 * @returns {Array[Number]} array of digits representing each digit in the number, in reverse order
 */
function getDigits(num){
    return getDigitsB(BigInt(num)).map(x => Number(x));
}

/**
 * Break a number down into its constituent digits.  e.g. getDigitsB(100n) returns [0n, 0n, 1n]
 * @param {BigInt} num 
 * @returns {Array[BigInt]} array of digits representing each digit in the number, in reverse order
 */
function getDigitsB(num){
    const result = [];
    while (num > 0n){
        result.push(num % 10n);
        num = num / 10n;
    }
    return result;
}

/**
 * Creates a number from an array of digits.  e.g. concatDigits([0, 0, 1]) returns 100
 * @param {Array[Number]} digits 
 * @returns {Number} Number created from the array of digits, reversed
 */
function concatDigits(digits){
    let result = 0;
    let mul = 1;
    for(d of digits){
        result += mul*d;
        mul*=10;
    }
    return result;
}

/**
 * Creates a number from an array of digits.  e.g. concatDigitsB([0n, 0n, 1n]) returns 100n
 * @param {Array[BigInt]} digits 
 * @returns {BigInt} Number created from the array of digits, reversed
 */
function concatDigitsB(digits){
    let result = 0n;
    let mul = 1n;
    for(d of digits){
        result += mul*d;
        mul*=10n;
    }
    return result;
}

module.exports = { getPrimes, isPrime, getPrimesB, isPrimeB, getDigits, getDigitsB, concatDigits, concatDigitsB };
