const amax=100n, bmax=100n;


const results = {}


for (let a = 2n; a <= amax; a++){

    let x = a;
    for (let b = 2n; b <= bmax; b++){
        x *= a;
        results[x] = true;
    }

}

console.log(Object.keys(results).length);