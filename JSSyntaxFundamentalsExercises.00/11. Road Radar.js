function solve (kmh,region) {
 
    let areaLimit = 0;
    let staus = '';

    if (region == 'residential') {
        areaLimit = 20;
        if (kmh > 20) {
           if(kmh > 20 && kmh <= 40) {
                staus = 'speeding'
            } else if (kmh > 40 && kmh <= 60) {
                staus = 'excessive speeding';
            } else {
                staus = 'reckless driving';
            }
            console.log(`The speed is ${Math.abs(areaLimit - kmh)} km/h faster than the allowed speed of ${areaLimit} - ${staus}`);
        } else {
            console.log(`Driving ${kmh} km/h in a ${areaLimit} zone`);
        }
    } else if (region == 'city') {
        areaLimit = 50;
        if (kmh > 50) {
           if(kmh > 50 && kmh <=70) {
                staus = 'speeding'
            } else if (kmh > 70 && kmh <= 90) {
                staus = 'excessive speeding';
            } else {
                staus = 'reckless driving';
            }
            console.log(`The speed is ${Math.abs(areaLimit - kmh)} km/h faster than the allowed speed of ${areaLimit} - ${staus}`);
        } else {
            console.log(`Driving ${kmh} km/h in a ${areaLimit} zone`);
        }
    } else if (region == 'interstate') {
        areaLimit = 90;
        if (kmh > 90) {
           if(kmh > 90 && kmh <=110) {
                staus = 'speeding'
            } else if (kmh > 110 && kmh <= 130) {
                staus = 'excessive speeding';
            } else {
                staus = 'reckless driving';
            }
            console.log(`The speed is ${Math.abs(areaLimit - kmh)} km/h faster than the allowed speed of ${areaLimit} - ${staus}`);
        } else {
            console.log(`Driving ${kmh} km/h in a ${areaLimit} zone`);
        }
    } else if(region == 'motorway'){
        areaLimit = 130;
        if (kmh > 130) {
           if(kmh > 130 && kmh <=150) {
                staus = 'speeding'
            } else if (kmh > 150 && kmh <= 170) {
                staus = 'excessive speeding';
            } else {
                staus = 'reckless driving';
            }
            console.log(`The speed is ${Math.abs(areaLimit - kmh)} km/h faster than the allowed speed of ${areaLimit} - ${staus}`);
        } else {
            console.log(`Driving ${kmh} km/h in a ${areaLimit} zone`);
        }
    }
}