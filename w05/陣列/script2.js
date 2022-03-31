'use script'

let bills = [125,100,250,555,44,350];

let tips = [];
let total = [];

bills.forEach((item,index) => {
    item >=50&&item<=300?tips.push(item *0.15): tips.push(item* 0.25);
    total.push(item+tips[index]);
});

console.log('bills:',bills);
console.log('tips:',tips);
console.log('total:',total);