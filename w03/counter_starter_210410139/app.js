let count = 0;

const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

console.log('value',value.textContent);
console.log('btns',btns);

btns.forEach( (btn) => {
btn.addEventListener('click', (e) => {
//    console.log(e.currentTarget);
const Styles = e.currentTarget.classList;
if(Styles.contains('decrease')){
count--;
}
if(Styles.contains('increase')){
    count++;
}
if(Styles.contains('reset')){
    count =0;
}

if(count < 0) {
    value.style.color = 'red'
}
else if(count > 0) {
    value.style.color = 'green'
}
else if (count === 0) {
    value.style.color = '#222'
}

value.textContent = count;
console.log('value',value.textContent,value.style.color);
   });
})

