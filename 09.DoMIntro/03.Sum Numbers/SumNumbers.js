function calc() {
    const firstElement = document.getElementById('num1');
    const secondElement = document.getElementById('num2');

    const sumElement = document.querySelector('#sum');

    const firstNumber = Number(firstElement.value);
    const secondNumber = Number(secondElement.value);

    sumElement.value = firstNumber + secondNumber;
}
