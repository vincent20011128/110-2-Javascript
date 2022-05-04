function bmi(height,weight) {
    let bmiValue = (weight / (height * height)).toFixed(2);
    console.log(`For (h/w) = (${height}/${weight}),the BMI = ${bmiValue}`);
}

bmi(1.75,55);
bmi(1.75,70);
bmi(1.75,85);



function bmiCalc(height, weight) {
    return (weight / (height * height)).toFixed(2);
}

function bmi_normal_low(height) {
    return (18.5 * height * height).toFixed(2);
}

function bmi_normal_high(height) {
    return (24 * height * height).toFixed(2);
}


function bmiSuggest(height, weight) {
    let bmi = bmiCalc(height, weight);
    if(bmi < 18.5) {
        let normal_low = bmi_normal_low(height);
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is ${(normal_low - weight).toFixed(2)} kg lower than normal`);
    }
    else if(bmi <=24) {
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is normal `);
    }else {
        let normal_high = bmi_normal_high(height);
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi} which is ${(weight - normal_high).toFixed(2)} kg higher than normal`);
    }
}



bmiSuggest(1.75,55);
bmiSuggest(1.75,70);
bmiSuggest(1.75,85);