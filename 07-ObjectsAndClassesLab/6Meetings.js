function solve(input) {
    const meatings = {};

    input.forEach(m => {
        const [weekDay, name] = m.split(' ');

        if (weekDay in meatings) {
            console.log(`Conflict on ${weekDay}!`);
        } else {
            meatings[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`)
        }


    });


    for (const [weekDay, name] of Object.entries(meatings)) {
           console.log(`${weekDay} -> ${name}`)
    };

}


solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);