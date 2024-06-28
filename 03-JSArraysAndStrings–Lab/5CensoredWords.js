function solve (text, word) {

    let censored = text.replace(word, '*'.repeat(word.length));


    while(censored.includes(word)){
        censored = censored.replace(word, '*'.repeat(word.length));
        censored.includes(word)
    }

    console.log(censored)
}

solve('A small sentence with some small small words', 'small')

