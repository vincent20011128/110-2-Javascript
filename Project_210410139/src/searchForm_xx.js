import get from "./getElement.js";
import presentAnimals from "./presentAnimals_xx.js";

const form = get(".search-form");
const input = get('[name="Ingredient"]');
// console.log(form, input);

const baseURL = "https://zoo-animal-api.herokuapp.com/animals/rand/";

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  console.log("input", input.value);
  const value = input.value;
  if (!value) return;
  presentAnimals(`${baseURL}${value}`);
});
