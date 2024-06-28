function solve(count, type, day) {
    let total;

    if (type == 'Students') {

        if (day == 'Friday') {
            total = count * 8.45;
            if (count >= 30) {
                total = total - total * 0.15;
            }
        } else if (day == 'Saturday') {
            total = count * 9.80;
            if (count >= 30) {
                total -= total * 0.15;
            }
        } else {
            total = count * 10.46;
            if (count >= 30) {
                total -= total * 0.15;
            }
        }

    } else if (type == 'Business') {

        if (day == 'Friday') {
            
            if (count >= 100) {
             count-=10;
            }
            total = count * 10.90;
        } else if (day == 'Saturday') {
            if (count >= 100) {
                count-=10;
               }
               total = count * 15.60;
        } else {
            if (count >= 100) {
                count-=10;
               }
               total = count * 16.00;
        }

    } else {
        if (day == 'Friday') {
          total = count * 15;
          if(count >= 10 &&  count <= 20) {
            total = total - total * 0.05;
          }
        } else if (day == 'Saturday') {
            total = count * 20;
            if(count >= 10 &&  count <= 20) {
              total = total - total * 0.05;
            }
        } else {
            total = count * 22.50;
            if(count >= 10 && count <= 20) {
              total = total - total * 0.05;
            }
        }
    }
   
    console.log(`Total price: ${total.toFixed(2)}`)
}

solve(30, 'Students', 'Sunday');