import presentIngredient from './src/presentDrinks_xx.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=v';

window.addEventListener('DOMContentLoaded', () => {
  presentIngredient(URL);
});
