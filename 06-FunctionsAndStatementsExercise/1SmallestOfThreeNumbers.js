function solve (a, b, c) {

    console.log(minNum(a, minNum(b, c)))

    function minNum(a, b){

        if (a < b){
            return a;
        } else {
            return b;
        }
    }
}