function addItem() {
    const textInputElement = document.getElementById('newItemText');
    const listElement = document.getElementById('items');

    const liElement = document.createElement('li');
    liElement.textContent = textInputElement.value;

    const aLink = document.createElement("a");
    aLink.href = '#'
    aLink.addEventListener('click', function (event){
        liElement.remove()
    })
    aLink.textContent = '[Delete]'

    liElement.appendChild(aLink)

    listElement.appendChild(liElement)

    textInputElement.value = '';
}