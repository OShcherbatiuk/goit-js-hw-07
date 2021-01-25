const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('#ingredients')

const createIngredientsList = (ingredient => {
    const listRef = document.createElement('li');
    listRef.textContent = ingredient;
    return listRef;
})

const ingredientsListItem = ingredients.map(createIngredientsList);

ulRef.append(...ingredientsListItem)
