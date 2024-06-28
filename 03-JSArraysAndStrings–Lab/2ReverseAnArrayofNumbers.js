function solve (n,numbers) {
    let digit = [];  

    let string = '';

    for(let i = 0; i < n; i++) {
         digit.push(numbers[i]);
    }

    for(let i = digit.length-1; i >=0; i--) {
        string += digit[i] + ' ';
   }

    console.log(string)
}

solve(2, 66, 43, 75, 89, 47);