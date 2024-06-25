function solve(digit) {
    
    let number = digit.toString();
    let flag = true;
    let sum = 0;

    for (let i = 0; i <= number.length - 1; i++) {

        sum += Number(number[i]);
    }
    let chek = Number(number[0]);
    for (let i = 1; i < number.length; i++) {
        if (chek != Number(number[i])) {
           flag = false;
           break;
        } 

    }
    console.log(flag);
    console.log(sum);
}
solve(2222222)
