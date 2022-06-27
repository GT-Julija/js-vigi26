//1
const myName = "Julija";
const goodbye = `Viso gero ${userName}, lauksime sugrįžtant`;

//2

const salary = 20;
///console.log('$' + salary);   senas variantas

console.log(`$${salary}`);

//3

const price = 10;

if (price > 10) {
  console.log("Perku");
} else {
  console.log("Neperku");
}

//4
const hours = 5;
const result = "";

if (hours >= 0 && hours < 6) {
  result = "Naktis";
}
if (hours >= 6 && hours < 12) {
  result = "rytas";
}
if (hours >= 12 && hours < 18) {
  result = "diena";
}
if (hours >= 18 && hours <= 24) {
  result = "vakaras";
} else {
  console.log("blogas laikas");
}

//5
const price = 10;
const result = price > 10 ? "Perku" : "Neperku";
console.log(result);

const hours = 5;
const message =
  hours >= 0 && hours < 6
    ? "Naktis"
    : hours >= 6 && hours < 12
    ? "Rytas"
    : hours >= 12 && hours < 18
    ? "Diena"
    : hours >= 18 && hours <= 24
    ? "Vakaras"
    : "blogas laikas";
console.log(message);

//6
const myName = "Julija";
const nameLength = myName.length;
const firstChar = myName[0]; // charAt(0)
const lastChar = myName[myName.length - 1]; // myName.charAt(nameLenght - 1)

console.log(firstChar);
console.log(lastChar);
console.log(myName.length);

for (let i = 0; i < nameLength; i++) {
  const char = myName[i];
  // char = myName.charAt(i)

  console.log(char);
}

for (let i = 0; i < myName.length; i++) {
  const char = myName[i];
  console.log(`${i + 1} raidė yra ${char}`);
}

/*const abc = 1;

    function showTime() {
        const def = 2;
        console.log(abc);
    }
console.log(def);
showTime();*/

// Turi return

function square(number) {
  return number * number;
}
const squared = square(5);

//console.log(squared);
console.log(square(5));

//1
function cube(number) {
  return number * number * number;
}
console.log(cube(2, 2));

//2
function multiplied(numb1, numb2) {
  return numb1 * numb2;
}
console.log(multiplied(2, 2));

//3
function sum(numb1, numb2) {
  return numb1 + numb2;
}
console.log(sum(5, 5));

//4
function substraction(numb1, numb2) {
  return numb1 - numb2;
}
console.log(substraction(10, 8));
//5
function divide(numb1, numb2) {
  return numb1 / numb2;
}
console.log(divide(20, 2));



//Antra dalis
//6
function getStringLength(string) {
  return string.length;
}

console.log(getStringLength("JavaScript labai sunku"));

//7

function compare(num1, num2) {
    return num1 > 2;  // pirmas variantas
    return num1 > num2 ? true : false;  // antras variantas
  if(num1> num2) {
      return true;
  } else {
return false;
  }
  

console.log(compare(45, 34));
//8

function firstAndLastChar(string) {
    // charAt
    // slice(-1)
    return string[0] + string[string.length - 1];
    }
    
    console.log(firstAndLastChar("Julija"));


    

//5 paskaita funkcion 
//4 dom manipuliavimas


// Neturi return
