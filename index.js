const bcolor = [
  "Green",
  "Blue",
  "AquaMarine",
  "Aqua",
  "Brown",
  "Coral",
  "DeepPink",
  "DarkGray"
];

const changecolorbtn = document.getElementById("change-color");
const main = document.getElementById("main");
let colorname = document.querySelector(".color-name");

changecolorbtn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = bcolor[randomNumber];
  changecolorbtn.style.backgroundColor = bcolor[randomNumber];
  colorname.textContent = bcolor[randomNumber];
  colorname.style.color = bcolor[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * bcolor.length);
}

/* Key concepts covered:
=> arrays
=> document.getElementById()
=> document.querySelector()
=> addEventListener()
=> document.body.style.backgroundColor
=> Math.floor()
=> Math.random()
=> array.length
*/
