function solve (jsonObject) {

    const obj = JSON.parse(jsonObject);

    Object.keys(obj).forEach(key => {
        console.log(`${key}: ${obj[key]}`)
    });

}


solve('{"name": "George", "age": 40, "town": "Sofia"}');