import presentAnimals from "./src/presentAnimals_xx.js";
import "./src/searchForm_xx.js";

const URL = "https://zoo-animal-api.herokuapp.com/animals/rand/10";

window.addEventListener("DOMContentLoaded", () => {
  presentAnimals(URL);
});
