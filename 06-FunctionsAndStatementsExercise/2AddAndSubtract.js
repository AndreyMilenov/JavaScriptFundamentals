function solve (a, b, c) {

    console.log(substract(sum(a,b), c))

    function sum (a, b) {
        return a+b;
    }

    function substract(a, b) {
        return a - b;
    }
}