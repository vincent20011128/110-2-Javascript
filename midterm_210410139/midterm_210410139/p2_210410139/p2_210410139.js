const ShowDataset1Btn = document.querySelector('#show-dataset1');
const ShowDataset2Btn = document.querySelector('#show-dataset2');
const ShowDataset3Btn = document.querySelector('#show-dataset3');
const ALLBtn = document.querySelector('#all');
const RichestBtn = document.querySelector('#richest');
const PoorestBtn = document.querySelector('#poorest');
const CalculateBtn = document.querySelector('#calculate');

let data = [];
const getRandomUser = async () => {
  const res = await fetch('data.js');
  const data = await res.json();
  console.log('random user data', data);
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 10000000),
  };
  addData(newUser);
};


ShowDataset1Btn.addEventListener('click', show-dataset1);
ALLBtn.addEventListener('click', all);
RichestBtn.addEventListener('click', richest);
PoorestBtn.addEventListener('click', poorest);
CalculateBtn.addEventListener('click', calculate);
