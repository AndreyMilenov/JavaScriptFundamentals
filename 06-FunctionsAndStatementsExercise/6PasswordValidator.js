function solve (password) {


if (!length(password)) {
    console.log("Password must be between 6 and 10 characters")
}

if(!lettersAndDigits(password)) {
    console.log("Password must consist only of letters and digits")
}

if(!atLeastTwoDigits(password)){
    console.log("Password must have at least 2 digits")
}

if(length(password)&&lettersAndDigits(password)&&atLeastTwoDigits(password)) {
    console.log('Password is valid')
}



function length (password) {
    return password.length > 5 && password.length < 11
}
function lettersAndDigits (password) {
    for (let i = 0; i < password.length; i++) {
        let simbol = password[i];

        if(simbol.charCodeAt(0)>= 65 &&simbol.charCodeAt(0)<= 90 || simbol.charCodeAt(0)>= 97 &&simbol.charCodeAt(0)<= 121 || simbol.charCodeAt(0)>= 48 &&simbol.charCodeAt(0)<= 57) {

        } else {
            return false
        }
      
    }
    return true;
}

function atLeastTwoDigits (password) {
    let count = 0
    for (let i = 0; i < password.length; i++) {
        const simbol = password[i];
        
        if (simbol.charCodeAt(0)>= 48 &&simbol.charCodeAt(0)<= 57) {
           count++;
        }
    }

    return count >= 2;
}

}


