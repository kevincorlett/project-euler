let current = 1n, prev = 1n;
let i = 2;

while (current.toString(10).length < 1000){
    let next = current + prev;
    prev = current;
    current = next;

    i++;
}

console.log(i);