function solve (input) {
const phoneRegister = {};

   input.forEach(element => {
    const [name, number] = element.split(' ');
    phoneRegister[name] = number;
   });

   for (const [name, number] of Object.entries(phoneRegister)) {
     console.log(`${name} -> ${number}`)
   }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   );