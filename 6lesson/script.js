// console.log("6 paskaita. Masyvai, funkcijos ir eventai");

/*const myName = "Julija";
const nameLenght = myName.length;
const firtsChar = myName[0];
const lastChar = myName[myName.lenght - 1];
const middleChar = myName[Math.floor(myName.lenght / 2)];*/

//for (let i = 0; i < myName.lenght; i++) {
/*    const char = myName[i];
    console.log(`${i + i}.${char}`);
}
const firtsChar = myName.chartAt(0)
const lastChar = myNam,e.charAt(myName.length - 1);
*/

// const chars = ["J","u", "l", "i", "j", "a"];
// const fruits = ["apple", "banana", "pear"];
// console.log(fruits.length);
// console.log(fruits[1]);

// for (let i=0; i < fruits.length; i++)[
//     consr ruit = fruits[i];
//     console.log(fruit);
// }

/*const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];

for (let i = 0; i < students.length; i++) {
const student = students[i];
if (student.length > 5) {
console.log(`Vardas ${student} turi daugiau nei 5 raides`);
} else if (student.length < 5) {
console.log(`Vardas ${student} turi mažiau nei 5 raides`);
} else {
console.log(`Vardas ${student} turi lygiai 5 raides`);
}
}

const basket = [7, 10, 0.5, 23, 41];
let total = 0;

for (let i = 0; i < basket.length; i++) {
    const number = basket[i];
    total += number;
}
// 0 = 0+7;
// 7 = 7+

console.log(basket);
*/
//1. void rūšis funkcija
//2. return rūšis funkcija
function square(number){
    return number * number;
    //console.log(number);
    }
    const squaredNumber = square(5);
    console.log(squaredNumber)
    
    
    function logger(value){
        console.log(value);
    }
    logger(10);
    
    
    
    function printAllArrayItems(array){
    for(let i = 0; i < array.length; i++){
    const item = array[i];
    console.log(squaredItem);
    }
    }
    




const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];
printAllArrayItems(students)
function repeatString(string, count) {
    let finalString ="";
    for(let i =0; i < count; i++){
    finalString +=string;
}
return finalString;
}
const repeatedString = repeatedString("Rokas",2);
console.log(repeatedString);
function addittion(a,b)
