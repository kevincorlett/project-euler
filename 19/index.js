const start = new Date(1900, 0, 1), end = new Date(2001,0,1);
let result = 0;
for (let date = start; date < end; date.setDate(date.getDate() + 1)){
    if (date.getFullYear() > 1900 && date.getDay() === 0 && date.getDate() === 1){
        result++;
    }
}
console.log(result);

