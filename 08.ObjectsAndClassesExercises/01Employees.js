function solve (input) {
   let employee = {};

   for (const entrie of input) {
    let name = entrie;
    let pn = name.length
    employee[name] = pn;
   
    }

  for (const employe of Object.entries(employee)) {
    console.log(`Name: ${employe[0]} -- Personal Number: ${employe[1]} `)
  }

}

solve ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    ); 