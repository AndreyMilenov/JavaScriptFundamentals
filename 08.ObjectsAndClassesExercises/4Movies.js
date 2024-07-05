function solve (input) {

    let movies = [];

    let movie = {}

    for (let i = 0; i < input.length; i++) {

        let element = input[i];
        let add = 'addMovie';
        

        if (element.includes(add)){
          let movieName = element.substring(9);
          movie.name = movieName;
          movies.push(movie);
          movie = {};
        } else if (element.includes('directedBy')){

            let firstIndex = element.indexOf('directedBy');

            let director = element.substring(firstIndex+11,input[i].length);
            let movieName = element.substring(0,firstIndex-1);

            const movie = movies.find(movie => movie.name === movieName);

            if(movie) {
            movie.director = director;
            }

        } else if (input[i].includes('onDate')){
            let firstIndex = element.indexOf('onDate');

            let date = element.substring(firstIndex+7,input[i].length);
            let movieName = element.substring(0,firstIndex-1);

            const movie = movies.find(movie => movie.name === movieName);

            if(movie) {
                movie.date = date;
            }
        }
        
    }

    movies.forEach(e => {
    if (e.hasOwnProperty('director') && e.hasOwnProperty('date')) {
       let jsonObj = JSON.stringify(e);
       console.log(jsonObj);
    }

    });

}


