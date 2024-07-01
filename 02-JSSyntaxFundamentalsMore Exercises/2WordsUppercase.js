function solve(text) {

    let regex = /[\b\w+\b]+/g;

    let matches = text.matchAll(regex);

    let strArr = [];

    for (const match of matches) {

        strArr.push(match[0].toUpperCase())
    }

    console.log(strArr.join(', '))

}

solve('Hi, how are you?');