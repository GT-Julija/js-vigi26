//1
function alertMyName(name) {
  alert(name);
}
alertMyName("Julija");
//2
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
console.log(random(1, 5));
//3
function getLenght(name, surname) {
  return name.length + surname.length;
}
console.log(getLenght("Julija", "Gedgaudiene"));
//4
function getLetterByIndex(index) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return alphabet[index];
}
getLetterByIndex(0);
//5
function calculate(n1, n2, operator) {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;
    case "div":
      return n1 / n2;
    case "multi":
      return n1 / n2;
  }
}
console.log(calculate(1, 2, "sum"));
//DOM

//1
/*document.body.innerHTML = "<h2>Julija</h2>"/*

  //kitas variantas
  /*const name = 'Julija';
const h2 = document.createElement('h2');
h2.textContent = name;
document.body.append(h2);*/

//2
/*const name= "Julija"
document.body.textContent = "Laba diena";*/
//3
document.getElementById("next").textContent = "Sūris";
