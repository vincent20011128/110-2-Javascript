const main = document.querySelector('#main');
const addUserBtn = document.querySelector('#add-user');
const doubleBtn = document.querySelector('#double');
const showMillionairesBtn = document.querySelector('#show-millionaires');
const sortBtn = document.querySelector('#sort');
const calculateBtn = document.querySelector('#calculate');

let data = [];

const config = {
  numRandom: 5,
  ratio: 2,
  showCondition: 30000000,
};

const updateDOM = (providedData = data) => {
  let tempData = providedData.map((item) => {
    return `<div class="person"><strong>${item.name}</strong> ${formatMoney(
      item.money
    )}</div>`;
  });
  tempData = tempData.join('');
  console.log('tempData', tempData);
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>${tempData}`;
};

const addData = (obj) => {
  data.push(obj);
  console.log('data', data);
  updateDOM();
};

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

const getRandomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  console.log('random user data', data);
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 10000000),
  };
  addData(newUser);
};

const getUsers = () => {
  for (let i = 0; i < config.numRandom; i++) {
    getRandomUser();
  }
};

getUsers();

// getRandomUser();
// getRandomUser();
// getRandomUser();

const changeBtnText = () => {
  addUserBtn.textContent = `Add Users (${config.numRandom})👱‍♂️`;
  doubleBtn.textContent = `Raise Money * ${config.ratio}💰`;
  showMillionairesBtn.textContent = `show > ${config.showCondition} 💵`;
};

changeBtnText();

const getRandomfiveUser = async () => {
  for (let i = 0; i < config.numRandom; i++) {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    console.log('random user data', data);
    const user = data.results[0];
    const newUser = {
      name: `${user.name.first} ${user.name.last}`,
      money: Math.floor(Math.random() * config.showCondition),
    };
    addData(newUser);
  }
};

const doubleMoney = () => {
  data = data.map((user) => {
    return {
      name: user.name,
      money: user.money * 1.5,
    };
  });
  updateDOM();
};

const showMillionaires = () => {
  const filteredData = data.filter((user) => {
    return user.money > 2000000;
  });
  console.log('filteredData', filteredData);
  updateDOM(filteredData);
};

const sortByRichest = () => {
  data.sort((a, b) => {
    return b.money - a.money;
  });

  updateDOM();
};

const calculatewealth = () => {
  const wealth = data.reduce(function (total, number) {
    return total + number.money;
  }, 0);
  main.innerHTML += `<h3> Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
};

// const calculateWealth = () => {
//   const wealth = data.reduce();
//   main.innerHTML = main.innerHTML +
// }

addUserBtn.addEventListener('click', getRandomfiveUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
sortBtn.addEventListener('click', sortByRichest);
calculateBtn.addEventListener('click', calculatewealth);
