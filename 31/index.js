const coins = [1,2,5,10,20,50,100,200];
const indexMap = new Map(coins.map((n, i) => [n, i]));

const cache = {};
const combos = getCombos(200);

console.log(combos.length);

function getCombos(total){
    if (Object.hasOwn(cache, total)) {
        return cache[total];
    }

    const result = [];
    for (let c of coins){
        if (total === 0 || c > total){
            break;
        }

        if (c === total){
            result.push([c]);
            break;
        }

        const subCombos = getCombos(total-c);

        result.push(...subCombos.map(x => [c, ...x]));
    }

    return cache[total] = dedupe(result);
}


function dedupe(combos) {

    const seen = new Map();
  
    for (const combo of combos) {
      const counts = new Array(coins.length).fill(0);
      for (const coin of combo) {
        const idx = indexMap.get(coin);
        counts[idx]++;
      }
  
      const key = counts.join(",");
      seen.set(key, combo);
    }
  
    return [...seen.values()];
  }