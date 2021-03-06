const main = document.querySelector('#main');
const addUserBtn = document.querySelector('#add-user');
const doubleBtn = document.querySelector('#double');
const showMillionairesBtn = document.querySelector('#show-millionaires');
const sortBtn = document.querySelector('#sortBtn');
const calculateBtn = document.querySelector('#calculateBtn');

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
  for(let i = 0; i < config.numRandom; i++){
    getRandomUser();
  }
}

getUsers();

// getRandomUser();
// getRandomUser();
// getRandomUser();

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

addUserBtn.addEventListener('click', getRandomfiveUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
