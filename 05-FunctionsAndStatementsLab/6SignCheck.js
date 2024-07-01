function solve (a, b, c){

    const number = multiply(a,multiply(b, c))
     
    if(number < 0){
        console.log(`Negative`);
    } else {
        console.log(`Positive`);
    }

    function multiply (a, b) {
       return a * b;
    }
}