//Ответ на 1 практическое задание
function message() {
  console.log("Я учу JavaScript!");
}
console.log(message());

const showMessage = () => console.log("Я учу JavaScript!");
showMessage();

//Ответ на 2 практическое

//Первая версия
/* const imgGallery = document.getElementById("img");

const preShowFoto = () => {
  imgGallery.src = "assets/img/cat_ciam.jpg";
};

const nextShowFoto = () => {
  imgGallery.src = "assets/img/cat_somaly.jpg";
}; */

//Вторая версия
const switchFoto = (isNext) => {
  const imgGallery = document.getElementById("img");
  if (isNext) {
    imgGallery.src = "assets/img/cat_somaly.jpg";
  } else {
    imgGallery.src = "assets/img/cat_ciam.jpg";
  }
};

/* function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3)); */

/* function sum(a, b) {
  console.log(a + b);
}
sum(10, 2); */

/* function sum(a, b) {
  console.log(a + b);
}
let func = sum;
func(10, 3); */

/* const sum = (a, b) => a + b;
console.log(sum(1, 2)); */

/* function showX(x) {
  return x;
}
console.log(showX(28));

function sum(x, y = 0) {
  return x + y;
}
console.log(sum(5));

console.log(foo);

let foo = "Cat";

console.log(foo); */
