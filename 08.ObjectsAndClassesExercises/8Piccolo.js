function solve (input) {
    let parkingLots = {};

    for (const row of input) {


       const [direction, carNumber] = row.split(', ');

       direction === 'IN'
       ? parkingLots[carNumber] = true
       : delete parkingLots[carNumber];

    }
    if (Object.values(parkingLots).length !== 0) {
        Object.keys(parkingLots)
            .sort((a, b) => a.localeCompare(b))
            .forEach(item => console.log(item));
    } else {

        console.log(`Parking Lot is Empty`)
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']





);