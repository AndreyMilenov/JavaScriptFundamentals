function generateReport() {
  const checkElement = document.querySelectorAll('thead th');
  const textElements = document.querySelectorAll('tbody tr');
  const outputElement = document.getElementById('output');

  let indexElement = 0
  const result = [];

    for (let el of checkElement) {
        let data = {};
        const thElement = el.querySelector('input[type="checkbox"]');
        const thName = thElement.name;

        if (thElement.checked) {
            data = {
                name: thName,
                index: indexElement,
            }
            result.push(data);
            data = {};

        }
        indexElement++

    }

    let lastObj = {};
    let objArr = [];


    for (const trElement of textElements) {


        const tdElements = trElement.querySelectorAll('td');

        for (let i = 0; i < result.length; i++) {
            lastObj[result[i].name] = tdElements[result[i].index].textContent

        }

        objArr.push(lastObj);
        lastObj = {};

    }

    outputElement.textContent = JSON.stringify(objArr)

}