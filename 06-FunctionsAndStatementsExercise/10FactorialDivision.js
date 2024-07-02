function solve (a, b) {

    let divider = factorial(a);
    let seconDivider = factorial(b);

    console.log((factorial(a) / factorial(b)).toFixed(2))
    
    function factorial (number) {
       let result = number;

       for (let i = number; i > 1 ; i--) {
           result = result * (i - 1)
        
       }
       
      return result;
    }
}

