function solve(number) {

    if (number === sumOfDivaders(number)) {
         console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

    function sumOfDivaders(number) {
        let sum = 0;
        for (let i = 0; i < number; i++) {
            if (number % i === 0) {
                 sum+= i;
            }
            
        }
        return sum;
    }
}


solve(6);
solve(28);
solve(1236498);