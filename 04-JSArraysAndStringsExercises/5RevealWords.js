function solve(words, text) {

    let template = text.split(' ');
    let ps = words.split(', ');

    let psIndex = 0;
    while (template.join(' ').includes('*')) {

        for (let i = 0; i < template.length; i++) {


            for (let k = 0; k < ps.length; k++) {
                if (template[i].length == ps[k].length && template[i].includes('*')) {

                    template[i] = ps[k];


                }

            }


        }
    }
    console.log(template.join(' '))



}

solve('pesho, stamatko, goshho',
    'jdsakl as ***** dsajkk ****** hdsj ********'

);