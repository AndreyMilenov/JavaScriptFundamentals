function solve (sentance,pt){

    let stringArr = sentance.split(' ');
    let counter = 0;

    for (let word of stringArr) {
       if(word === pt){
        counter++;
       }
    }

 console.log(counter)

}

solve('This is a word and it also is a sentence',
'is'
)