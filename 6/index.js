let squares = 0, sum = 0;

for (let i=1;i<101;i++){

    squares += i*i;
    sum += i;

}

console.log((sum*sum) - squares);