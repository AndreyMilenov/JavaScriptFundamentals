function validate() {
    const inputEmailText = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+/;

    inputEmailText.addEventListener('change' , (event) => {

        if(!pattern.test(event.target.value)){

            event.target.classList.add('error')

        } else {

            event.target.classList.remove('error')

        }
    });
}