const max = 4000000;
let result = 0, i = 1, j=2;

while (i < max){

    if ((i & 1) === 0){
        result += i;
    }

    const next = i + j;
    i = j;
    j = next;

}

console.log(result);