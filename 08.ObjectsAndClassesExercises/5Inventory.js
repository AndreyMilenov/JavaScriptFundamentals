function solve (input) {

    let heroArr = [];

    let hero = {};

    for (let i = 0; i < input.length; i++) {
        let line = input[i];

        let heroName = line.split(' / ')[0];
        let heroLevel = line.split(' / ')[1];
        let heroItems = (line.split(' / ')[2]).split(', ');

        hero.Hero = heroName;
        hero.level = heroLevel;
        if (heroItems.length >= 1) {
            hero.items = heroItems;
        }

        heroArr.push(hero);
        hero = {};
    }

    heroArr.sort((a, b) => a.level - b.level )
        .forEach(h => {
            console.log(`Hero: ${h.Hero}`)
            console.log(`level => ${h.level}`)
            console.log(`items => ${h.items.join(', ')}`)
        });


}

solve ([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);