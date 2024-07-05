function solve(input) {
    let words = [];

    let word = {}


    let keyWord = input[0].split(' ');
    for (let i = 0; i < keyWord.length; i++) {

        word.name = keyWord[i];
        word.count = 0;

        words.push(word);
        word = {};
    }

    for (let i = 1; i < input.length; i++) {
      let current = input[i];
      const obj = words.find(obj => obj.name === current);
      if(obj) {
          obj.count++;
      }

    }

    words.sort((a, b) => b.count - a.count);

    words.forEach(w => console.log(`${w.name} - ${w.count}`));


}

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']

);