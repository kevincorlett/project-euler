let result = 0;
for (let i=3; i<1000;i+=3){
    result+=i;
}
for (let i=5;i<1000;i+=5){
    if (i % 3 !== 0){
        result +=i;
    }
}

console.log(result);