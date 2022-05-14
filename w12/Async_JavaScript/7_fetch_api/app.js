const url = 'api/peoplee.json';

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
