function solve() {
  const numberInputElement = document.getElementById('input');
  const  menuToElement = document.getElementById('selectMenuTo');
  const  buttonElement = document.querySelector('button');
  const  resultElement = document.getElementById('result');


    const binaryOptionElement = menuToElement.querySelector('#selectMenuTo option');
  binaryOptionElement.value = 'binary';
  binaryOptionElement.textContent = 'Binary';

  const hexaDecimal = document.createElement('option');
  hexaDecimal.value = 'hexadecimal';
  hexaDecimal.textContent = 'Hexadecimal';
  menuToElement.appendChild(hexaDecimal);

    const convertor = {
        'binary': (number) => number.toString(2),
        'hexadecimal': (number) => number.toString(16).toUpperCase()
    };

    buttonElement.addEventListener('click', () => {

        const selectedOption = menuToElement.value;
        const result = convertor[selectedOption](Number(numberInputElement.value));
        resultElement.value = result;

    });

}