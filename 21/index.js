

const max = 10000;
let result = 0;

for (let i=1;i<max;i++){

    const divSum1 = getDivisorSum(i);
    const divSum2 = getDivisorSum(divSum1);

    if (divSum1 !== divSum2 && divSum2 === i){
        result += i;
    }

}

console.log(result);


function getDivisorSum(x){
    const result = [];
    for (let i=1;i<=x/2;i++){
        if (x % i === 0){
            result.push(i);
        }
    }
    return result.reduce((x,y) => x + y, 0);
}