function solve() {
   
  const textInputElement = document.getElementById('text').value;
  const namingConventionElement = document.getElementById('naming-convention');

 const namingConvection = namingConventionElement.value;


  const resultElement = document.getElementById('result')

  let result;

  if (namingConvection === 'Pascal Case') {
     result = pascalConverter(textInputElement)


  } else if (namingConvection === 'Camel Case') {
    result = textInputElement.charAt(0).toLowerCase() + pascalConverter(textInputElement).slice(1);
  } else {
    result = 'Error!'
  }

  function pascalConverter(text) {
     const textArr = text.split(' ');

     return textArr
     .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
     .join('');
     
      
  }

  resultElement.textContent = result;
}