function solve (x1,y1,x2,y2) {

    let first = Math.abs(Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2)));
    let second = Math.abs(Math.sqrt(Math.pow(x2,2)+Math.pow(y2,2)));
    let third = Math.abs(Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y1-y2,2)));
    
    if (Number.isInteger(first)) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }

    if (Number.isInteger(second)) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }

    if (Number.isInteger(third)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }


}  
solve(3, 0, 0, 4)  