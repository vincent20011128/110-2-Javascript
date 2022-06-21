import displayAnimals from "./displayAnimals_xx.js";
import fetchAnimals from "./fetchAnimals_xx.js";
const presentAnimals = async (url) => {
  // fetch Ingredient
  const data = await fetchAnimals(url);
  // console.log('ingredient data', data);

  const section = await displayAnimals(data);
  // console.log(section);
};

export default presentAnimals;
