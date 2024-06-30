function solve(text) {
    let arrStr = text.split(' ');

    let result = [];

    for (const word of arrStr) {

        if (word[0] === '#' && word.length > 1) {
            let nWord = '';
            for (let i = 1; i < word.length; i++) {

                let temp = word[i];
                if (isLether(temp)) {
                    nWord += temp;
                } else {
                    break;
                }


            }
            if(nWord.length > 0){
              result.push(nWord)
            }
        }
    }

    for (const w of result) {
        console.log(w)
    }

    function isLether(char) {
        return /^[A-Za-z]$/.test(char);
      }
   
}

solve('The symbol #123 is known #variously in #.;2 English-speaking #regions as the #number sign');