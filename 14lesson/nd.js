//toUpperCase

/*function alertName(text) {
    alert(text)
  }
  
  function consoleName(text) {
    console.log(text)
  }
  
  function coreFunction(name, callback) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    callback(capitalizedName)
  }
  
  coreFunction("juLija", consoleName);*/

  // 1. forEach
  /*const cars = ["BMW", "VW", "Audi"]
  cars.forEach(showNames);
  function showName(name) {
    console.log(name);
}*/
//kitas variantas

/*const cars = ["BMW", "VW", "Audi"];
cars.forEach((v) => console.log(v));*/


//2. 

/*const cars = ["BMW", "VW", "Audi"];
cars.forEach((v, i) => console.log(i + ": " + v));*/

//3. 
const names =["jOnas", "aNtanas", "kAzys"];
const modifiedName = name.map( (name) => {
    return name.chrAt(0).toUpperCase() + name.slice(1).toLowerCase();
});

console.log( modifiedName);


4.

const ages = [1, 20, 5, 10, 22, 50, 40, 39];
console.log(ages.filter((x) => x >= 18));



5.

const cities = ["Vilnius", "Kaunas", "Klaipeda"];
console.log(cities.find(v => v.charAt(0) === "K"));
6.

const cities = ["Vilnius", "Kaunas", "klaipeda"];
console.log(cities.some(v => v.charAt(0) === v.charAt(0).toLowerCase()));
7.

const cities = ["Vilnius", "Kaunas", "klaipeda"];
console.log(cities.every(v => v.charAt(0) === v.charAt(0).toUpperCase()));


