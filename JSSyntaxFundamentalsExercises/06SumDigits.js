function solve (digit) {

    let number = digit.toString();

    let sum = 0;

    for (let i = 0; i <= number.length-1 ; i++) {
        sum+= Number(number[i]);
    }

}

    console.log(sum);