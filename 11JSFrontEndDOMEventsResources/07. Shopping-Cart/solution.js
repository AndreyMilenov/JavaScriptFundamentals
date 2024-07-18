function solve() {
   const addButtonElement = document.querySelectorAll('button.add-product');
   const textAreaElement = document.querySelector('textarea');
   const checkoutButtonElement = document.querySelector('.checkout');

   const uniqueProduct = {};
   let sum = 0;

   for (const buttonElement of addButtonElement) {

      buttonElement.addEventListener('click', (event) => {
         const title = event.target.parentElement.previousElementSibling.children[0];
         const price = Number(event.target.parentElement.nextElementSibling.textContent);
         uniqueProduct[title.textContent] = price;
         sum += price;

         textAreaElement.textContent += `Added ${title.textContent} for ${price.toFixed(2)} to the cart.\n`;

      });
   }

   checkoutButtonElement.addEventListener('click', (event) => {
      Array
          .from (addButtonElement)
          .forEach(element => {
             element.setAttribute('disabled', 'disabled');})
      event.target.setAttribute('disabled', 'disabled');
      const finalText = Object.keys(uniqueProduct).join(', ')
      textAreaElement.textContent += `You bought ${finalText} for ${sum.toFixed(2)}.`;
   })






}