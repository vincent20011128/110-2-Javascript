import presentDrinks from './src/presentDrinks_xx.js';

import './src/searchForm_xx.js';

import {
  LOCAL_URL,
  hasNetwork,
  searchItesm,
} from './api/search/config_210410139.js';

console.log('config_210410139.js', { LOCAL_URL, hasNetwork, searchItesm });

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=h';

window.addEventListener('DOMContentLoaded', () => {
  if (hasNetwork) {
    presentDrinks(URL);
  } else {
    presentDrinks(LOCAL_URL + 'h.json');
  }
});
