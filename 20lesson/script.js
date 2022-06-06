/*const p1 = new Person("Petras", 16)
p1.compareAge() => "Petras is old enough to drink":

class Person {
    constructor(name, age) {

    }
}*/


/*1. 
class Cat {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
}


isFat() {
    if (this.weight >= 5) {
        return `${this.name} yra storas kačiukas`;
    } else {
       return `${this.name} yra plonas kačiukas`;
    }
}
}

const cat = new Cat("Kleopatras", 7);
console.log(cat.isFat());
*/
2. 
//pvz: fn[1, 5, "a", "g", "z", 6] => [1, 5, 6]
//arr.filter(x => isNaN(x))

const randomArray = [1, 5, "a", "g", "z", 6];

const removeNumbersFromArray = (array) => array.filter((x) => isNaN(x)); 
const removeLettersFromArray = (array) => array.filter((x) => !isNaN(x)); /// !isNan(x)); reiksme padaro priesinga

const removeNumbers = removeNumbersFromArray(randomArray);
const removeLetters = removeLettersArray(randomArray);

console.log(removeNumbers);
console.log(removeLetters);

// isNAN(1) => false
// isNAN(5) => false
// isNAN("a") => true

// ! apsuka reiksme
// !! grazina reiksme, bet ja padaro i boolean
// !true => false
// !false => true
// !!true => true
// !!false => false
// !!"rokas" => true
//!"rokas" => false
