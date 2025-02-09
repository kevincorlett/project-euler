const limit = 1000000

let longestChain = 0;
let longestChainStart = 0;
for (let i=1; i<limit; i++){
    let val = i, chain = 0;
    do {
        if (val & 1 === 1){
            //odd
            val = 1 + 3*val;
        } else {
            //even
            val /= 2;
        }
        chain++;
    } while (val !== 1);
    if (chain > longestChain){
        longestChain = chain;
        longestChainStart = i;
    }

}
console.log(longestChainStart);