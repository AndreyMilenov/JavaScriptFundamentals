function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[name=email]');
    const emailTableElement = document.querySelectorAll('table#customers tbody tr');
    const resultInputElement = document.getElementById('result');


  const trElement = Array
      .from(emailTableElement)
      .find(e => e.children[1].textContent.includes(inputEmailElement.value));

    if(trElement) {
        trElement.remove();

        resultInputElement.textContent = 'Deleted.'
    } else {
        resultInputElement.textContent = 'Not found.'
    }

    inputEmailElement.value = '';
}