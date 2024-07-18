function focused() {
    const divElements = document.querySelectorAll('input[type=text]');

    Array
    .from(divElements).forEach(element => element.addEventListener('focus' ,  (event) => {
    event.target.parentElement.classList.add('focused');
    }));

    Array
    .from(divElements).forEach(element => element.addEventListener('blur' ,  (event) => {
    event.target.parentElement.classList.remove('focused');
    }));
}