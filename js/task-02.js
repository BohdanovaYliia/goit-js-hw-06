const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const makeIngredientsElements = ingredientsArray => {
  return ingredientsArray.map(ingredient => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = `${ingredient}`;
    ingredientsItem.classList.add('item');

    return ingredientsItem;
  });
};

const ingredientsElements = makeIngredientsElements(ingredients);
ingredientsList.append(...ingredientsElements);