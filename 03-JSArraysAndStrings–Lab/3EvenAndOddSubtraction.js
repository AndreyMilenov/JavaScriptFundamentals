function solve (numbers) {

   

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numbers.length; i++) {

        
        
        if(numbers[i] % 2 != 0) {
             oddSum += Number(numbers[i]);
        } else {
            evenSum += Number(numbers[i]);
        }
        
    }

    console.log(evenSum - oddSum);

}

solve([3,5,7,9]);