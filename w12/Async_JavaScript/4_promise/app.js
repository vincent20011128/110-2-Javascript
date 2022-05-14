const changeColor = function (attribute, color, time) {
  return new Promise(function (resolve, reject) {
    if (attribute) {
      setTimeout(() => {
        const helloworldBtn = attribute;
        helloworldBtn.style.colr = `${color}`;

        resolve(helloworldBtn);
      }, time * 1000);
    } else {
      reject(new Error(`There is no such attirbut ${attribute}`));
    }
  });
};

btn.addEventListener('click', function () {
  changeColor(helloworldRed, 'red', 1)
    .then(() => {
      changeColor(helloworldGreen, 'green', 2);
    })
    .then(() => {
      changeColor(helloworldBlue, 'blue', 1);
    })
    .catch((err) => console.error(err));
});
