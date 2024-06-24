// Declare variables
let a = 10;
let b = 20;
let d = "Andrey";
let e = 3.14;
console.log(a+b);
// before ES2015 - not recommended to us.
var c = 30;
console.log(c+b);
// Constant variable.
const pi = 3.14;
//Conditional Statements.
if (a <= 10) {
    console.log('a is lower or equal than 10');
} else if (a < 20) {
    console.log( 'a is lower than 20');
} else {
    console.log('a is higher or equal to 20');
}

// Function declaration
function solve(a, b){
    console.log(a + b);
}
// Function invocation
solve(1,pi)

// Console print whit string concatenation.
console.log('The number pi is ' + pi +'!');

// String interpolation / template literal.
console.log(`The number pi is: ${pi}!!`)

// Fix the number output.
console.log(pi.toFixed(2))

// Round vs toFixed
console.log(pi.toFixed(2));
console.log(Math.round(pi));

// Switch statement
const name ='pesho'
switch (name) {
    case 'pesho':
        console.log('Maraba pesho')
        break;                                                                  
    default:
        console.log('Maraba gosho')    
}

// Truthy and Falsy values

if (name) {
    console.log('There is Pesho');
} else {
    console.log('There is no Psho')
}

// For loop
for(let i = 0; i< 10; i++){
   // console.log(i);
}

// While loop 
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}