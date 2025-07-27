
const _isAbundant = {};
function isAbundant(n){
    if (Object.hasOwn(_isAbundant, `${n}`)){
        return _isAbundant[n];
    }

    const divSum = getDivisorSum(n);

    return _isAbundant[n] = divSum > n;
}

function getDivisorSum(n){
    const limit = n/2;
    let divSum = 0;
    for (i=1; i<=limit; i++){
        if (n % i === 0)
            divSum += i;
    }
    return divSum;
}

const max = 28123;
//1 cannot be written as the sum of 2 abundant anythings, so add 1 to the final result
let result = 1;
for (let i=2; i<max; i++){
    let left = 1, right=i-1;
    let bothAbundant = false;
    while (left <= right && !bothAbundant) {

        bothAbundant = isAbundant(left) && isAbundant(right);

        left++;
        right--;
    }

    if (!bothAbundant){
        result += i;
    }
}
console.log(result);