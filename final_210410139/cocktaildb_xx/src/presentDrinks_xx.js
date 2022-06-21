import displayIngredient from './displayIngredient_xx.js';
import fetchIngredient from './fetchIngredient_xx.js';
const presentIngredient = async (url) => {
  // fetch Ingredient
  const data = await fetchIngredient(url);
  // console.log('ingredient data', data);

  const section = await displayIngredient(data);
  // console.log(section);
};

export default presentIngredient;
