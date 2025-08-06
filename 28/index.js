const size = 1001n;

let increment = 2n;

let x = 1n;

let result = x;
while (increment < size){

    result += (x*4n) + (increment*10n);

    x = x + (increment * 4n);
    increment += 2n;

}

console.log(result);