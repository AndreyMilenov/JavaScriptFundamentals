function solve (input) {
let integers = input.slice(0);


for (let index = 0; index < integers.length; index++) {
     console.log(isPalindrom(integers[index]));    
}

function isPalindrom (number) {
    if (number.toString().length > 1 ) {
        let secondNumber = parseInt(number.toString().split('').reverse().join(''),10)
        return number === secondNumber;
    } 

    return false;
}

}

solve([123,323,421,121]);