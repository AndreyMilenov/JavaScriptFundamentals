function solve (arr1, arr2) {

    let store = {};

    for (let i = 0; i < arr1.length; i+=2) {
        let name = arr1[i];
        let count = arr1[i+1]
        store[name] = count;
    }

    for (let i = 0; i < arr2.length; i+=2) {
        let name = arr2[i];
        let count = arr2[i+1]

        if(name in store) {
            store[name] = parseInt(count) + parseInt(store[name]) ;
        } else {
            store[name] = count;
        }
        
    }

    for (const element of Object.entries(store)) {
        console.log(`${element[0]} -> ${element[1]}`)
    }



}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );