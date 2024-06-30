function solve (arr, step) {

    let result = [];

    for (let i = 0; i < arr.length; i+= step) {
        if (i > arr.length) {
            result.push (arr[arr.length - i]);
        } else {
            result.push(arr[i]);
        }
        
    }

    return(result);
}

solve(['1', 
    '2',
    '3', 
    '4', 
    '5'], 
    6
    );