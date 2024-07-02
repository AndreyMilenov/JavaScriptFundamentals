function solve (number) {

   for (let index = 0; index < number; index++) {
     console.log(printer(number))
    
   }

    function printer (number) {
        let numberLine = [];

        for (let index = 0; index < number; index++) {
            numberLine.push(number);
        }

        return numberLine.join(' ');
    }
}

