function solve (input) {

    let cats =[]

    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age
            
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    input.forEach(cat => {
        let catData = cat.split(' ');
        let name, age;
        [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name,age));
    });


    cats.forEach(cat => cat.meow())

}

solve(['Mellow 2', 'Tom 5']);