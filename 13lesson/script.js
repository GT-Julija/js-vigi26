//Zinoti primityvius duomenu tipus  ir ju apibrezima
//Boollean object
//Number object
//String object


/*
Primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
*/

const name = "Julija";
const age = 10;
const isHot = true;
const notFound = underfined;
const noValue = null;

const IsHotString = Boollean(isHot).toString();

/*console.log(isHot + isHot);
console.log(isHotString + isHotString);*/

const count = "15";


const countNumber = Number(count);


/*console.log(count + count);
console.log(countNumber + countNumber);*/


//integer - sveikasis skaicius
//console.log(Number.isInteger(5.5));


//paverciam i string 
const myNumber = 5.752;
//console.log(Number(5.752).toString());
//arba
console.log((5.752).toString());
//uzapvalina po kablelio
console.log(myNumber.toFixed(1));


//3.75 + 2.40 + 3.32 *0.17
const salary= 10.741666666;
console.log(salary.toFixed(2));

const sentence = "My name is Julija and I am very happy";

//includes ar turi savyje
//suranda stringe kito stringo dali. Case-sensitive (didziosios, mazosios raides)
//console.log(sentence.includes("happy"));

//slice nukerpa nuo nulintos iki 8 vietos
console.log(sentence.slice(0,8));

//slice iskerpa varda, priskaiciuoti ir tarpus, nurodome prdazia ir gala
console.log(sentence.slice(11,17));

//galima pateikti ir viena skaiciu nuo 21 iki galo
console.log(sentence.slice(21));

//minusine reiksme  nuo pradzios iki nukirpo galo 
console.log(sentence.slice(0,-2));

//minusine reiksme tik paskutines 2 raides
console.log(sentence.slice(-2));


//nuima nereikalingus priekyje padetus tarpus
console.log(sentence.trim());

//const badText = "  Help  "
//console.log.(badTex.trim());

const upperCased = sentence.toUpperCase(); // visas araides padaro didziasias
console.log(upperCased);

const lowerCased = sentence.toLowerCase(); //visas raides padaro mazasias
console.log(lowerCase);

functio areSametring(firstString, secondString) {
    return firstString === secondString;
}
console.log(areSameStrings("Rokas", "rokas"));
//false


//patikrina ar stringai yra vienodi(not case-sensitive)
functio areSametring(firstString, secondString) {
    return firstString.toUpperCase() === secondString.toUpperCase();
}
//true


//pakartoja stringa tiek kiek paduodama i argumenta (repeat)
const resultCount = 5;
const dog = "Rikis";

const result = dog.repeat(resultCount);
console.log(result);

//padalina teksta (pavyzdziuoje sukarpe zodzius)

const splitted = sentence.split(" ");
console.log(splitted);

//`Prekyba`, `Marketingas`....
const tagInput = "Prekyba Marketingas Programavimas Vadyba";
const tags = tagInput.split(" ");
console.log(tags);

const countryInput = "Anglija, Sveicarija, Amerika, Latvija, Gruzija";
const countries = countryInput.split(", ");
console.log(countries);