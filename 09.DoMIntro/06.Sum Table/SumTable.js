function sumTable() {

    const elementsToSum = document.querySelectorAll('tr td:last-of-type:not(#sum)');
    const elementSum = document.getElementById('sum');

    let sum = 0;

    for(const element of elementsToSum) {
       sum += parseFloat(element.innerText);
    }

    elementSum.textContent = Number(sum.toFixed(2));
}