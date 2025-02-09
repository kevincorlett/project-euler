var x = 1n;

for (let i=0;i<1000;i++){
    x *= 2n;
}
console.log(`${x}`.split('').map(x => parseInt(x)).reduce((a,b) => a+b));