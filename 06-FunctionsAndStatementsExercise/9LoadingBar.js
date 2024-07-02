function solve (number) {
let lodingBar = ['.','.','.','.','.','.','.','.','.','.',]

if(number === 100) {
    console.log(`${number}% Complete!`)
    console.log(`[%%%%%%%%%%]`)
    return
}

let n = Math.floor(number * 0.10)

for (let i = 0; i < n; i++) {
    lodingBar[i] = '%';
    
}

console.log(`${number}% [${lodingBar.join('')}]`);
console.log(`Still loading...`)
}

