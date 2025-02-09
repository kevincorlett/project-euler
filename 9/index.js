function findTriplet(sum){
    const aLimit = Math.floor(sum/3);
    const bLimit = Math.floor(sum/2);
    for (let a=1; a<=aLimit; a++){
        for (let b=a+1; b<=bLimit; b++){
            const c = sum - a - b;

            if (((a*a) + (b*b)) === (c*c)){
                return a*b*c;
            }

        }
    }
    return 0;
}


console.log(findTriplet(1000));