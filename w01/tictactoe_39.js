
const resetBtn = document.querySelector('#reset'
);
// console.log('resetBtn', resetBrn);

const allLi = document.querySelectorAll('#board li');
console.log('board li', allLi);

const checkWin = (player) => {
    let p =[];
    allLi.forEach((li)=> {
      p.push(li.classList.contains(player))
    } );
    console.log('p',p);

    const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;

    if(
      (p1 && p2 && p3 ) ||
      (p4 && p5 && p6 ) ||
      (p7 && p8 && p9 )
    )
      return true;
    else
      return false;

}

console.log('checkWin(o)',checkWin('o'));
console.log('checkWin(x)',checkWin('x'));

const reset = () => {
    allLi.forEach((li) => {
        li.textContent = '+';
        li.classList = '';
    });
}




resetBtn.addEventListener('click',reset);