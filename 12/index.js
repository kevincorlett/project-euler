let triangle = 1;
let i=1;
let divisorCount = 0;

do {
    triangle += ++i;
    const limit = 1+Math.floor(triangle/2);

    divisorCount = 2;
    for (let divisor = 2; divisor < limit; divisor++){
        if (triangle % divisor === 0){
            divisorCount++;
        }
    }
    process.stdout.write(`\x0D${triangle} :: ${divisorCount}                      `)

} while (divisorCount < 501);

//brute force takes a few minutes
console.log(triangle);