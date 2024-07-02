function solve (a, b) {

function min(a, b){
    if (a.charCodeAt(0) < b.charCodeAt(0)){
        return a;
    } else {
        return b;
    }
}

function max (a, b) {
    if (a.charCodeAt(0) > b.charCodeAt(0)){
        return a;
    } else {
        return b;
    }
}

let firstSimbol = min(a,b).charCodeAt(0);
let secondSimbol = max(a,b).charCodeAt(0);

let charArr = [];

for (let i = firstSimbol+1; i < secondSimbol; i++) {
    
    charArr.push(String.fromCharCode(i))
}

console.log(charArr.join(' '))
}

solve('C','#')