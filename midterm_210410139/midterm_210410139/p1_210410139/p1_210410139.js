const hv;
const wt;
const heavy = document.getElementById('#heavy');
const weight = document.getElementById('#weight');
const BMI0 = document.getElementById('#BMI0');
const BMI1 = document.getElementById('#BMI1');

heavy.onchange = function() {
    hv = this.value;
}

weight.onchange = function() {
    wt = this.value;
}

function onBMI() {
    const bmi = wt / ((hv / 100) ** 2 );
    if(hv > 0 && wt > 0){ 
        BMI0.innerHTML ="BMI值為:"+bmi;
        if(bmi < 18.5) {
            BMI1.innerHTML = "過輕";
        }
        else if (bmi >= 18.5 && bmi <= 24) {
            BMI1.innerHTML = "正常";
        }
        else if (bmi >= 24 && bmi <= 27){
            BMI1.innerHTML = "過重";
        }
    }
}
        
    
