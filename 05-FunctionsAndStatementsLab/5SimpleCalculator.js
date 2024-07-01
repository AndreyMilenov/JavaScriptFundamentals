function solve (a, b, operator) {
  
  const calcolator = returnOperator(operator)

   console.log(calcolator(a, b, operator))

    function returnOperator (operator) {

        switch(operator) {
            case'multiply':
            return (a, b) => a * b;
            case'divide':
            return (a, b) => a / b;
            case'add':
            return (a, b) => a + b;
            case'subtract':
            return (a, b) => a - b;
        }

    }
}

solve(40,
    8,
    'divide'
    )