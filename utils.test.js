const utils = require('./utils');

describe('utils.js exports', () => {
    test('getPrimes returns primes up to the supplied maximum', () => {
        expect(utils.getPrimes(10)).toEqual([2, 3, 5, 7]);
    });

    test('isPrime detects prime and composite numbers', () => {
        expect(utils.isPrime(29)).toBe(true);
        expect(utils.isPrime(30)).toBe(false);
    });

    test('getPrimesB returns primes up to the supplied maximum as BigInt', () => {
        expect(utils.getPrimesB(13n)).toEqual([2n, 3n, 5n, 7n, 11n, 13n]);
    });

    test('isPrimeB detects prime and composite BigInt values', () => {
        expect(utils.isPrimeB(29n)).toBe(true);
        expect(utils.isPrimeB(30n)).toBe(false);
    });

    test('getDigits returns digits in reverse order', () => {
        expect(utils.getDigits(907)).toEqual([7, 0, 9]);
    });

    test('getDigitsB returns digits in reverse order for BigInt', () => {
        expect(utils.getDigitsB(907n)).toEqual([7n, 0n, 9n]);
    });

    test('concatDigits rebuilds a number from reverse digits', () => {
        expect(utils.concatDigits([7, 0, 9])).toBe(907);
    });

    test('concatDigitsB rebuilds a BigInt from reverse digits', () => {
        expect(utils.concatDigitsB([7n, 0n, 9n])).toBe(907n);
    });
});
