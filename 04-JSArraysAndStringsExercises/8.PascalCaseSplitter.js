function solve (text) {
    let result = [];
    let word = '';
    for (let i = 0; i < text.length; i++) {
        let temp = text[i];
        

        if(isUpperCase(temp)) {
            if(word != ''){
                result.push(word)
            }
         word = '';
          word += temp;
        } else {
            word += temp;
        }
        
    }
    result.push(word)
    console.log(result.join(', '));


    function isUpperCase (temp) {
        return temp === temp.toUpperCase()
    }
}

solve ('SplitMeIfYouCanHaHaYouCantOrYouCan');