let values = [];
for (let i=999; i>99; i--){
    for (let j=999; j>=i; j--){
        values.push(j*i);
    }
}

let result = 
    values
        .sort((a,b) => b-a)
        .find(x => isPalindrome(`${x}`));

function isPalindrome(str){
    let isPalindrome = true;
    for (k = 0; isPalindrome && k < str.length; k++){
        isPalindrome = str[k] === str[str.length-k-1];
    }
    return isPalindrome;
}

console.log(result);