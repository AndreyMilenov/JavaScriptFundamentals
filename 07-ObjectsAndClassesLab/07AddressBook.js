function solve (input) {

    const adressBook = {};

    input.forEach(a => {
       const [name, adress] = a.split(':');
       adressBook[name] = adress
    });


    const entries = Object.entries(adressBook);

    entries.sort((a, b) => {
       return a[0].localeCompare(b[0])
    });

    entries.forEach(entry =>{
        console.log(`${entry[0]} -> ${entry[1]}`);

        
    });

}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   );
