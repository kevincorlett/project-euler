const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const lines = input.split('\n').map(x => x.split(' ').map(x => parseInt(x)));

const rootNode = { level: 0, index: 0, value: lines[0][0] };
const nodes = [[rootNode]];

//build a tree
for (let i = 1; i< lines.length; i++){
    nodes.push([]);

    for (let j=0; j<lines[i].length;j++){
        let node = { value: lines[i][j], leftChild: null, rightChild: null};
        nodes[i].push(node);
        if (j > 0){
            nodes[i-1][j-1].rightChild = node;
        }
        if (j < lines[i].length-1){
            nodes[i-1][j].leftChild = node;
        }
    }
}

let maxTotal = 0;
findMaxTotal(rootNode, 0);
console.log(`findMaxTotal=${maxTotal}`);

function findMaxTotal(node, sum){

    sum += node.value;

    if (node.leftChild === null && node.rightChild === null && sum > maxTotal){
        maxTotal = sum;
        return;
    }

    if (node.leftChild !== null){
        findMaxTotal(node.leftChild, sum);
    }
    if (node.rightChild !== null){
        findMaxTotal(node.rightChild, sum);
    }
}


let result = getMaxValue(rootNode);
console.log(`getMaxValue=${result}`);

function getMaxValue(node){
    let leftVal = 0, rightVal = 0;
    if (node.leftChild !== null){
        leftVal = getMaxValue(node.leftChild);
    }
    if (node.rightChild !== null){
        rightVal = getMaxValue(node.rightChild);
    }

    if (leftVal > rightVal){
        return node.value + leftVal;
    }
    return node.value + rightVal;
}
