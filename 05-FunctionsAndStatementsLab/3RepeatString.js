function solve (str, reapetingCount) {

     console.log(repeatString(str, reapetingCount))

    function repeatString (str, reapetingCount) {
        return `${str.repeat(reapetingCount)}`
    }
}

solve (`abc`,3);