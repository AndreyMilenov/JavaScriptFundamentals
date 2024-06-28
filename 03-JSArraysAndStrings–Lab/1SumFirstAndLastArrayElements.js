function solve (numbers) {
let digits = numbers;
 let first = digits.shift();
 let second = digits.pop();

 console.log(first + second);

}

solve(11,
    58,
    69);