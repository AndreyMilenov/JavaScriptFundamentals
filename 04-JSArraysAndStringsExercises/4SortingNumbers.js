function solve (unsorted) {

    let arr = [];

    while (unsorted.length >= 1 ) {

        if(unsorted.length == 1){
            arr.push(unsorted[0]);
            return arr;
        }

        arr.push(unsorted[unsorted.indexOf(small(unsorted))]);
        unsorted.splice(unsorted.indexOf(small(unsorted)),1)
        arr.push(unsorted[unsorted.indexOf(biggest(unsorted))]);
        unsorted.splice(unsorted.indexOf(biggest(unsorted)),1)
        

    }

    return arr;

    function biggest (arr) {

        let max = Number.MIN_VALUE;
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
           return max;
    }
        
    function small (arr) {
        
            let small = Number.MAX_VALUE;
            
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < small) {
                    small = arr[i];
                }
            }
               return small;
            
    }

}



