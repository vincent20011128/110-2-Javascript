import getElement from "./getElement.js";

const displayAnimals = async (animals) => {
  console.log("animals", animals);
  const title = getElement(".title");
  const section = getElement(".section-center");

  const newAnimals = animals
    .map((animals) => {
      const { id: id, image_link: img, name: name } = animals;

      return `
      <a href="#">
      <article class="cocktail" data-id="${id}">
          <img src="${img}" alt="cocktail" />
          <h3>${name}</h3>
      </article>
    </a>
  `;
    })
    .join("");

  // console.log(newAnimals);

  title.textContent = "";
  section.innerHTML = newAnimals;

  // const Ingredients = Ingredient.ingredients[0];
  // console.log(Ingredient.ingredients[0]);

  // const { idIngredient: id, strDrink: name, strDrinkThumb: img } = Ingredient;

  // const newIngredient = `
  // <a href="#">
  //   <article class="cocktail" data-id="${id}">
  //       <img src="${img}" alt="cocktail" />
  //       <h3>${name}</h3>
  //   </article>
  // </a>
  // `;

  // Teacher
  // const Ingredients = Ingredient.drinks;

  // const newIngredient = Ingredients.map((Ingredient) => {
  //   const { idDrink: id, strDrink: name, strDrinkThumb: img } = Ingredient;
  //   return `
  //   <a href="#">
  //   <article class="cocktail" data-id="${id}">
  //       <img src="${img}" alt="cocktail" />
  //       <h3>${name}</h3>
  //   </article>
  // </a>
  //   `;
  // }).join('');

  // title.textContent = '';
  // section.innerHTML = newIngredient;
};

export default displayAnimals;
