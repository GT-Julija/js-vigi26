//const fruits = ["Apple", "Orange", "Pear"];

// .pop() - pasalina paskutini masyvo elementa ir ji grazina

//const lastElement =fruits.pop();
// fruits.pop() veiki taip pat

//console.log(lastElement);
//console.log(fruits);

// .shift() - pasalina pirmaji masyvo elemnta ir ji grazina

/*const firstElement = fruits.schit();
console.log(firstElement);

fruits.shift();
console.log(fruits);*/

// .push()  - prideda nauja elementa i masyvo gala

//fruits.push("banana");
//console.log(fruits);

// .unshift() - prideda nauja elementa i masyvo pradzia
//fruits.unshift("Pineapple", "Carrot");


/*for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[fruit];
    
}
console.log(fruits);*/


///arba dar toks variantas
/*for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[fruit];
    console.log(`${i}.${fruit}`);
    console.log(fruit);
}

console.log(fruits);*/


/*const upperCaseedFruits = []


for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    const upperCased= fruit.toUpperCase();
    upperCaseedFruits.push(upperCased);    
}

//["APPLE"]
//["APPLE", "ORANGE"]
//["APPLE", "ORANGE", "PEAR"]

console.log(fruits);
console.log(upperCaseedFruits);*/


// callback funkcija paduoda i funcija

function hello(name) {
    console.log(name)
}
function showAlert(callback) {
    //alert("Julija");
    callback("Julija");
}

//log("Julija");

showAlert(log)
// document.addEventListener("click", log)


const names =["Bob", "Hellen", "Jack"];
//ciklas kuris  praeina per visus masyvo elementus
//.forEach() masyvo elementam
names.forEach(showNames);

function showName(name) {
    console.log(name);
}
//arba
names.forEach((name) => {
    console.log(name);
});

///
names.forEach((name, index) => {
    console.log(index + name);
});

// .map()  ciklas kuris praeina per visus masyvo elementus ir grazina nauja masyva

/*const modifiedNames = names.map( (name) => {
    return name.chrAt(0).toUpperCase() + name.slice(1).toLowerCase();
});


console.log(names);
console.log( modifiedNames);*/

const ages = [12, 15, 23, 27, 25, 30, 35, 38];


//.filter - ciklas, kuris praeina per visus masyvo elementus ir grazina nauja masyva jeigu reiksme yra true(positive)

const moreThanTwenty = ages.filter(age => {
    return age > 20;
});

//console.log(moreThanTwenty);

const lessThanTwenty = ages.filter((age) => age <20);
//console.log(lessThanTwenty);

const cars = ["Bmw","Lamborghini", "Audi", "Lada", "Mercedes", "VW"];
//suranda pirma elementa, kuris atitinka kriteriju (true)
const foundCar = cars.find((car) => car.charArt(0) === "L");
console.log(foundCar);

// .some()  patikrina ar bent vienas elementas atitinka kriteriju ir grazina true arba false

const hasShortName = cars.some(car => car.lenght < 3);
//bmw lenght false
//vw lenght true

console.log(hasShortName);

//.every() patikrina ar kiekvienas elementas atitinka kriteriju ir grazina true arba false

const isEveryUpperCased = cars.every(
    (car) => car.charAt(0) === car.charAt(0).toUpperCase()
    );