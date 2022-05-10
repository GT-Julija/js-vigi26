// console.log("6 paskaita. Masyvai, funkcijos ir eventai");

/*const myName = "Julija";
console.log(myName.lenght);  nebutina eilute, tai propertis
console.log(myName[0];
*/

/*const myName = "Julija";
const nameLenght = myName.length;
const firtsChar = myName[0];
const lastChar = myName[myName.lenght - 1]; parodys paskutine raide, bet reikia - 1 nes skaiciuojama nuo 0
const middleChar = myName[Math.floor(myName.lenght / 2)];  floor uzapvalina po vardo raidziu dalybos 

console.log(firtsChar);
console.log(lastChar);
console.log(middleChar);
*/

//isprintinti kiekviena vardo raide

/*const myName = "Julija";
  for (let i = 0; i < myName.lenght; i++) {
   const char = myName[i];
  // conosle.log(char);  arba zemiau esantis
    console.log(`${i + 1}.${char}`);
}*/

// be lauztiniu skliaustu

/*const myName = "Julija";
const firtsChar = myName.chartAt(0);
console.log(firtsChar);
//  kitas  
const lastsChar = myName.chartAt(myName.length - 1);
console.log(firtsChar);
*/

//MASYVAs
//raidziu listas
// const chars = ["J","u","l", "i", "j", "a"];


// const fruits = ["apple", "banana", "pear"];
// console.log(fruits.length);
// console.log(fruits[1]);

/*for (let i = 0; i < fruits.length; i++){
    const fruits = fruits[i];
    console.log(fruits);
}
*/

/*const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];
//vardai stringai
for (let i = 0; i < students.length; i++) {
const student = students[i];
if (student.length > 5) {
console.log(`Vardas ${student} turi daugiau nei 5 raides`);
} else if (student.length < 5) {
console.log(`Vardas ${student} turi mažiau nei 5 raides`);
} else {
console.log(`Vardas ${student} turi lygiai 5 raides`);
}
} */

/*const basket = [7, 10, 0.5, 23, 41];
let total = 0;

for (let i = 0; i < basket.length; i++) {
    const number = basket[i];
    //console.log (number);
    total += number;
}
// 0 = 0+7;
// 7 = 7+10;
//kol gausis total visus sudes

console.log(basket);
*/

//1. void funkcija, neturi return funkcijos, tik isprintina, tik iskviecia ir ngerazina jokios reiksmes
//2. return funkcija, grazina reiksme


//square - kelimas kvadratu
/*return number * number;
}

const squaredNumber =  square(10);
/*function squared(number)
  //console.log(squaredNumber);

 const squaredNumber = square(5);
    console.log(squaredNumber);

    function logger(value){
        console.log(value);
}*/

 /*const loggedValue = logger ("testing...");
 console.log(loggedValue);
   
 logger(10);*/
    
    
    //vel void funkcija
function printAllArrayItems(array){
    for(let i = 0; i < array.length; i++){
const item = array[i];
const squaredItem = square(item);
    console.log(Item);
 }
 }
    
const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];
printAllArrayItems(students);

//count - kiek noresiu
function repeatString(string, count) {
    let finalString = "";
    for(let i = 0; i < count; i++){
    finalString += string;
}
return finalString;
}
const repeatedString = repeatString("Rokas",5);
console.log(repeatedString);
function addittion(a,b)


//argumentai per kableli ("Rokas", 5)

//reapeat yra funkcija (veiksmazodis) , o reapyted constanta (PAKARTOTAS VEIKSMAZODIS, T.Y DAIKTAVARDIS)
//input - Rokas, 3=5 
//outpout return reiksme