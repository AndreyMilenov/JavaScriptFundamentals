function solve(input) {

    let words = [];

    let  word = {};

    let sentence = input.split(' ');

    for (let i = 0; i < sentence.length; i++) {

        let current = sentence[i];
        let count = 1;
        const obj = words.find(x => x.name === current.toLowerCase());


        if (obj) {
            obj.count++;
        } else {
            word.name = current.toLowerCase();
            word.count = count;
            words.push(word);
            word = {};
        }
    }

   let result = [];

    words.forEach(e => {
        if (e.count % 2 !== 0) {
            result.push(e.name);
        }
    })

    console.log(result.join(' '));

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');