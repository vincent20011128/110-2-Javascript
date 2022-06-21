import presentIngredient from './src/presentDrinks_xx.js';
import './src/searchForm_xx.js';

const URL = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

window.addEventListener('DOMContentLoaded', () => {
  presentIngredient(URL);
});
