function solve (numbers, rotation) {

    let digit = numbers.slice(0);

    for(let i = 0; i < rotation;i++) {
        let temp = digit.shift();

        digit.push(temp);
    }

    console.log(digit.join(' '))
}

solve([2, 4, 15, 31], 5)