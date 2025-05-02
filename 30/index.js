let i = 10;
let result = 0;

while (true){
    const total = `${i}`.split('').map(x => parseInt(x)).map(x => x*x*x*x*x).reduce((n,x) => n + x);
    if (i === total){
        result += i;
        console.log(i, result);
    }
    i++;
}
