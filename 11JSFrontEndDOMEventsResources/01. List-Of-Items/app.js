function addItem() {
    const textInputElement = document.getElementById('newItemText');
    const listElement = document.getElementById('items');


    const newElement = document.createElement('li');
    newElement.textContent = textInputElement.value;
    listElement.appendChild(newElement);
    textInputElement.value = '';
}