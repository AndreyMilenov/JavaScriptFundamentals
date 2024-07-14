function search() {
   const inputElement = document.getElementById('searchText');
   const resultElements = document.querySelectorAll('li');
   const resultElement = document.getElementById("result");
   let matcher = 0;

   for (const element of resultElements) {
       if (element.textContent.includes(inputElement.value)) {
           element.style.fontWeight = 'bold';
           element.style.textDecoration = 'underline'
           matcher++;

       }
   }

   resultElement.textContent = `${matcher} matches found`



}
