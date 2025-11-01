const results = new Map();

for (let a=1; a<1000;a++){
    for (let b=1; b<1000; b++){
        c = Math.sqrt((a*a) + (b*b));
        if (!Number.isInteger(c)){
            continue;
        }
        const p = a + b + c;
        if (p <= 1000){
            if (!results.has(p)){
                results.set(p, [ [a,b,c] ]);
            } else {
                results.get(p).push([a,b,c]);
            }
        }
    }
}

let most = 0, pResult = 0;
results.forEach((v, k) => {
    if (v.length > most){
        most = v.length;
        pResult = k;
    }
});

console.log(pResult);