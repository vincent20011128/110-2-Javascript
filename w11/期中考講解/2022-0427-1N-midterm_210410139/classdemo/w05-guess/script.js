let secretNumber = Math.floor(Math.random()*20)+1;
console.log('secretNumber', secretNumber);

let score = 20;
let highScore = 0;

const checkBtn = document.querySelector('.check');


const displayMessage = (message) => {
   document.querySelector('.message').textContent = message;
}

checkBtn.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    // console.log('guess', guess);

    if(!guess){
      displayMessage('No number!'); 
    } 
    else if(guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== secretNumber) {
      if(score > 1 ) {
          displayMessage( guess > secretNumber ? 'Guess too high' : 'Guess too low');
          score--;
          document.querySelector('.score').textContent = score;
      }   
      else {
          displayMessage('You lost the game!');
          document.querySelector('.score').textContent = 0;
      }
    }
} );


document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log('secretNumber', secretNumber);
    
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});