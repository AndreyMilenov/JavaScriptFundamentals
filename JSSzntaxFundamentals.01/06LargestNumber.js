function solve(first, second, third){
    if (first > second) {
        console.log('The largest number is ' + (first > third ? first : third)+'.');
    } else {
        console.log( 'The largest number is ' + (second > third? second : third)+'.');
    }


}

