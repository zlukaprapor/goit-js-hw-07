
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ulRef = document.querySelector('ul')
 
  ingredients.forEach((el)=> {
 
  const creatIngredients = document.createElement ('li')
  creatIngredients.textContent = el
  ulRef.appendChild(creatIngredients)

  });

 