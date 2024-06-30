function solve (word, text) {
    let check = word;
    let arr = text.split(' ');
    for (const sigle of arr) {
        if(check.toLowerCase() == sigle.toLowerCase()){
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`)
}

solve('JavascRipt',
'JavaScript is the best programming language'


);