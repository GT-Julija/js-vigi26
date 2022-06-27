/*console.log("Dom failas");

document.getElementById("id"); // vienaskaita grazina {}
document.getElementsByClassName("klase"); // daugiskaita grazina []
document.getElementsByName("name"); // daugiskaita grazina []
document.getElementsByTagName("div"); // daugiskaita grazina []

document.getElementById("pirmas"); // p
const items = document.getElementsByClassName("item"); // [p , p]
// items[0];
// items[items.length - 1];
document.getElementsByName("mano-input"); // []
document.getElementsByTagName("p");

document.querySelector("div"); // vienaskaita grazina pagal elementa {}
document.querySelector(".card"); // vienaskaita grazina pagal klase {}
document.querySelector("#price"); // vienaskaita grazina pagal id {}
document.querySelector(".card div"); // vienaskaita
const allParagraphs = document.querySelectorAll("p"); // daugiskaita []

const first = allParagraphs[0];
const last = allParagraphs[allParagraphs.length - 1];

first.style.background = "red";

const help = document.getElementById("help");

help.textContent = "Rokas yra geras zmogus";
help.style.background = "red";*/

const myName = document.querySelector("h2");
myName.textContent = "Julija";
myName.style.color = "yellow";
myName.style.textAligne = "center";

//arba
/*const myName = document.getElementById("h2");
myName.textContent = "Julija";
myName.style.color = "green";*/
const body = document.querySelector("body");

//document.body.style.backgroundColor = "#4267B2"

body.style.backgroundColor = "#4267B2";
body.style.textAligne = "center";

//document.getElementById("h2").style.textAlign = center;

const greetingEl = document.getElementById("greeting");
greetingEl.textContent = "Laba diena, geros dienos!";
greetingEl.style.textAlign = "center";

// greetingEl.style.display = "flex";
// greetingEl.style.justifyContent = "center";
// greetingEl.style.alignItems = "center";
// greetingEl.style.height = "80vh";

/*const div = document.createElement("div");
document.body.append(div); //isstumia i gala kaip vaikini elementa
//document.body.preppend(div);  //isstumia i prieki kaip vaikini elementa

const container = document.createElement("div");
const p = document.createElement("p");

container.append(p);

//document.querySelector("#id").append(container);*/

/*const blackCube = document.createElement("div");
blackCube.style.backgroundColor = "black";
blackCube.style.height = "100px";
blackCube.style.width = "100px";
document.body.append(blackCube);

const cardOne = document.createElement("div");
const cardTwo = document.createElement("div");
const cardThree = document.createElement("div");

cardOne.style.backgroundColor = "yellow";
cardOne.style.height = "50px";
cardOne.style.width = "50px";

cardTwo.style.backgroundColor = "green";
cardTwo.style.height = "100px";
cardTwo.style.width = "100px";

cardThree.style.backgroundColor = "red";
cardThree.style.height = "150px";
cardThree.style.width = "150px";

document.body.prepend(cardOne, cardTwo, cardThree);*/

/*const fruits = ["banana", "apple", "pear"];

const list = document.createElement("ul");

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  const listItem = document.createElement("li");
  listItem.textContent = fruit;
  list.append(listItem);
}

document.body.append(list);




const myButton = document.getElementById("my-button");

let count = 0;

myButton.addEventListener("click", (event) => {
count++;
const countEl = document.getElementById("count");
countEl.textContent = count;

console.log(`Button pressed: ${count} times`);
const resultEl = document.getElementById("result");

if (count === 5) {
resultEl.textContent = "You just hit button five times";
} else {
resultEl.textContent = "";
}
});

function handleClick(event) {
count++;
const countEl = document.getElementById("count");
countEl.textContent = count;

console.log(`Button pressed: ${count} times`);
const resultEl = document.getElementById("result");

if (count === 5) {
resultEl.textContent = "You just hit button five times";
} else {
resultEl.textContent = "";
}
}

myButton.addEventListener("click", handleClick);*/
//1

/*const showNameButton = document.querySelector("#show-name");

showNameButton.addEventListener("click", () => {
  const nameEl = document.querySelector("#name");
  nameEl.textContent = "Julija";
  nameEl.style.color = "red";
});*/

//2
/*const plusButton = document.getElementById("plus");

let number = 0;

plusButton.addEventListener("click", (event) => {
  number++;

  const numberEl = document.getElementById("number");

  numberEl.textContent = number;
});*/

//3

/*let number500Count = 0;

const plus500button = document.getElementById("plus500");
plus500button.addEventListener("click", () => {
number500Count += 500;
document.getElementById("result500-number").textContent = number500Count;
});

const minus500button = document.getElementById("minus500");
minus500button.addEventListener("click", () => {
number500Count -= 500;
document.getElementById("result500-number").textContent = number500Count;
});

const resetButton = document.getElementById("reset500");
resetButton.addEventListener("click", () => {
number500Count = 0;
document.getElementById("result500-number").textContent = number500Count;
});*/

//3 sy funkcija
/*const plus500button = document.getElementById("plus500");
plus500button.addEventListener("click", () => renderResultNumber("+"));

const minus500button = document.getElementById("minus500");
minus500button.addEventListener("click", () => renderResultNumber("-"));

const resetButton = document.getElementById("reset500");
resetButton.addEventListener("click", () => renderResultNumber());

function renderResultNumber(action) {
if (action === "+") {
number500Count += 500;
} else if (action === "-") {
number500Count -= 500;
} else {
number500Count = 0;
}
document.getElementById("result500-number").textContent = number500Count;
}*/

/*const registerForm = document.getElementById("register");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("input[name='username']");
  const email = document.querySelector("input[name='email']");
  const age = document.querySelector("input[name='age']");
  const password = document.querySelector("input[name='password']");

  const result = document.createElement("h2");
  result.textContent = `${username.value}, ${email.value}, ${age.value}, ${password.value}`;
  document.body.append(result);
});*/

//1 form

const registrationForm = document.getElementById("register-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("input[name='username']");
  const surname = document.querySelector("input[name='surname']");
  const age = document.querySelector("input[name='age']");

  const resultAge = document.createElement("h2");

  if (age.value < 18) {
    resultAge.textContent = `${username.value} ${surname.value} is child`;
  } else {
    resultAge.textContent = `${username.value} ${surname.value} is adult`;
  }

  document.body.append(resultAge);
});