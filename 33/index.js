const curious = [];


for (let aNum=11; aNum < 100; aNum++){
    for (let aDenom=aNum+1; aDenom < 100; aDenom++){
        for (let bNum = 1; bNum < 10; bNum++){
            for (let bDenom = bNum+1; bDenom<10; bDenom++){

                if (
                    !(aNum % 10 === 0 && aDenom % 10 === 0) &&
                    !(aNum % 11 === 0 && aDenom % 11 === 0) &&
                    aDenom * bNum === aNum * bDenom
                ){
                    const  aNumStr = `${aNum}`, aDenomStr = `${aDenom}`, bNumStr = `${bNum}`, bDenomStr = `${bDenom}`;
                    if (
                        aNumStr.indexOf(bNumStr) > -1 &&               //if both contain their counterpart
                        aDenomStr.indexOf(bDenomStr) > -1 &&           //if both contain their counterpart
                        aNumStr[(aNumStr.indexOf(bNumStr)+1)%2] == aDenomStr[(aDenomStr.indexOf(bDenomStr)+1)%2] //if the non-counterpart digit in both is the same
                    ){
                        curious.push( { num: aNum, denom: aDenom } );
                    }
                }
            }
        }
    }
}

const product = curious.reduce((a,b) => {
    const x = { num: a.num*b.num, denom: a.denom*b.denom };
    return x;
}, { num: 1, denom: 1});

console.log(product); //easy to see the lowest common denominator, no need to calculate