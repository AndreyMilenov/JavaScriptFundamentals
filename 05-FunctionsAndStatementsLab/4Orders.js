function solve (product, count) {

    console.log(`${(priceExtractor(product)*count).toFixed(2)}`)


    function priceExtractor(product) {

        switch(product) {
            case `coffee` :
            return 1.50;
            case `water`:
            return 1;
            case `coke`:
            return 1.40;
            case `snacks`:
            return 2;
        }

    }
}

solve(`coffee`, 2);