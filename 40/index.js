/*

etc

start position of digit D = sum(n=0->len(D)-1){ (n+1)*10^n } + D - 10^(len(D)-1)

or

block size of chars of length n = 9*10^(n-1)

*/
// break the number sequence down into blocks of numbers of length n
// e.g. 1st 9 chars are single-digit 1-9
// next 180 chars are double-digit 10-99
// next 2700 chars are triple-digit 100-999
let cache = { startIndex: 1, size: 0};
const blocks = Array(10).fill(0).map((n,i, a) => (cache = { 
    size: (i)*9*Math.pow(10,i-1),
    startIndex: cache.startIndex + cache.size,
    numLength: i,
    startNum: Math.pow(10,i-1)
}));


let result = 1;
//iterate through each value of n to find d(n) and incorporate it into the result
for (let n=1; n<=1000000; n *= 10){
    //find block with highest startIndex that is < i
    let block;
    for (let j=blocks.length-1; j>-1;j--){
        if (blocks[j].startIndex <= n){
            block = blocks[j];
            break;
        }
    }

    //Find the number that exists at position n
    const number = block.startNum + Math.floor((n - block.startIndex)/block.numLength);

    //Find the index of the digit at position n
    const digitPos = (n - block.startIndex) % block.numLength;

    //read the digit at that position
    const digit = parseInt(number.toString()[digitPos]);

    //the result is all these digits multiplied together
    result *= digit;
}

console.log(result);
