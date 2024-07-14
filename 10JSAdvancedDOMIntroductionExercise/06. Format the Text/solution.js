function solve() {
    const inputText = document.getElementById('input').value;
    const outputElement = document.getElementById('output');

    const textArr = inputText.split('.');

    const result = [];
    let tempArr = [];
    for (let i = 0; i < textArr.length; i++) {

        if (tempArr.length < 3) {
            tempArr.push(textArr[i].trim())
        }
        if (tempArr.length === 3) {
            result.push(tempArr.join(''));
            tempArr = [];
        }
        if (i === textArr.length - 1 && tempArr.length > 0) {
            result.push(tempArr.join(''));
            tempArr = [];
        }

    }

    const arr = result
        .filter(item => item.length > 0)
        .map(e => `<p>${e}.</p>`)

    outputElement.innerHTML = arr.join('').trim();

}