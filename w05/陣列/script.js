let random = Math.floor(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = random;
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // 答對

  if (guess === random) {
    document.querySelector('.message').textContent = '答對了!';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = random;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '15rem';

    // 創新點

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // 猜大，次數還剩多少?
  else if (guess > random) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 太高啦!!衝上雲端了';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // 用完
    else {
      document.querySelector('.message').textContent = '你輸了...';
      document.querySelector('.score').textContent = 0;
    }
  }

  // 猜小，次數還剩多少?
  else if (guess < random) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 太低啦!!掉到地獄了';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // 用完
    else {
      document.querySelector('.message').textContent = ' 你輸了...';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = ' brown';
    }
  }
});

// 再次按鈕

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  random = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = '請開始作答';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
