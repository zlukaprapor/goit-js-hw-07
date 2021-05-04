
const category = document.querySelectorAll('.item');
console.log(`В списке ${category.length} категории`);

category.forEach((el)=>
console.log(`- Категория: ${el.firstElementChild.textContent}
- Количество элементов: ${el.lastElementChild.children.length}`)
);