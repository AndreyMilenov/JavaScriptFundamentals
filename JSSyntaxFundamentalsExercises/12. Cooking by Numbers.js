function solve(number, coman1,coman2,coman3,coman4,coman5) {
    let digit = number;
    let string = [];
    string.push(coman1);
    string.push(coman2);
    string.push(coman3);
    string.push(coman4);
    string.push(coman5);
    for (let i = 0; i <= string.length - 1; i++) {

        let action = string[i];

        switch (action) {
            case 'chop':
                digit = digit / 2;
                console.log(digit);
                break;
            case 'dice':
                digit = Math.sqrt(digit);
                console.log(digit);
                break;
            case 'spice':
                digit = digit + 1;
                console.log(digit);
                break;
            case 'bake':
                digit = digit * 3;
                console.log(digit);
                break;
            case 'fillet':
                digit = digit - digit * 0.20;
                console.log(digit);
                break;
        }
    }

}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')

