function solve (input) {


    let towns = {};
    let arr = [];


input.forEach(entrie => {
let town = entrie.split(' |')[0];
let latitud = parseFloat(entrie.split('|')[1]).toFixed(2);
let longitud = parseFloat(entrie.split('|')[2]).toFixed(2);

towns.town = town;
towns.latitude = latitud;
towns.longitude = longitud;

arr.push(towns);
towns = {};

});


arr.forEach(e => console.log(e))


}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    );