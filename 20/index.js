let factorial = 1n;

for (let i = 100n; i>0n; i--){
    factorial *= i;
}
const result = `${factorial}`.split('').map(x => parseInt(x)).reduce((a,b) => a + b);

console.log(result);