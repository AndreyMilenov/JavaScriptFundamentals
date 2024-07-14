function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const inputElement = document.getElementById('searchField');
      const nameElement = document.querySelectorAll('table.container tbody tr');


      for (const name of nameElement) {
         const tdElement = name.querySelectorAll('td');
         let isSelected = false;

         name.classList.remove('select')
         for (const td of tdElement) {
            if (td.textContent.includes(inputElement.value)) {
               isSelected = true;
               break;
            }


         }
         if (isSelected) {
            name.className = 'select'
         }



      }


   }
}