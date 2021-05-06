
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ulRef = document.querySelector('ul')
 
  const creatIngredients = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  return element;
  });

  ulRef.append(...creatIngredients);

 