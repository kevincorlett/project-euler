const words = { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen', '20': 'twenty', '30': 'thirty', '40': 'forty', '50': 'fifty', '60': 'sixty', '70': 'seventy', '80': 'eighty', '90': 'ninety', '1000': 'onethousand'};

let result = 0;
for (let i=1n;i<1001n; i++){
    const phrase = makeNumberPhrase(i);
    // console.log(i, phrase.join(' '));
    result += phrase.reduce((a,b) => a + b.length, 0);

}

function makeNumberPhrase(number){
    if (number > 1000n || number < 1n){
        throw new Error(`Invalid number ${number}.  Must be between 1 and 1000`);
    }

    if (number === 1000n){
        return ['one','thousand'];
    }

    if (words.hasOwnProperty(number)){
        return [words[number]];
    }

    const phrase = [];
    const hundreds = number / 100n;
    
    if (hundreds > 0n){
        phrase.push(words[hundreds], 'hundred');
    }

    const remainder = number % 100n;
    if (remainder === 0n){
        return phrase;
    }

    if (hundreds > 0n){
        phrase.push('and');
    }

    if (words.hasOwnProperty(remainder)){
        phrase.push(words[remainder]);
        return phrase;
    }

    const tens = remainder / 10n;
    const units = remainder % 10n;

    if (tens > 0n){
        phrase.push(words[tens*10n]);
    }
    if (units > 0n){
        phrase.push(words[units]);
    }

    return phrase;
}
console.log(result);