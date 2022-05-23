//sort
//1
const names = ['Julija', 'Kostas', 'Augustė', 'Gabija', 'Simas', 'Birutė'];
console.log(names.sort(function (a, b) {
  return a.localeCompare(b);
}));

//kitas variantas
const names = ['Julija', 'Kostas', 'Augustė', 'Gabija', 'Simas', 'Birutė'];
names.sort();
console.log(names);


//2 

const names = ['Julija', 'Kostas', 'Augustė', 'Gabija', 'Simas', 'Birutė'];
console.log(names.sort(function (b, a) {
  return a.localeCompare(b);
}));

//kitas variantas
names.sort((a, b) => b > a ? 1 : -1);
console.log(names);

//3.
const number = [5, 10, 20, 11, 12, 1, 0, 14, 25];
const sortedDecendingOrder = number.sort((a, b) => b - a);
console.log(sortedDecendingOrder);

//kitas variantas
const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
numbers.sort((a, b) => b - a);
console.log(numbers);

//4.

const numbers = [10, 5, 20, 4];
numbers.sort((a, b) => b - a);
console.log(numbers[0]);

//reduce

//1. 
const favNumbs = [28, 5, 7, 2, 10];
console.log(favNumbs.reduce((a,v) => a+v));

//2.

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
console.log(cars.reduce((a,v) => v.length === 3 ? a + 1: a, 0));

//3.
const cars = [5, 10, 20, 4, 11, 13];
console.log(cars.reduce((a,v) => a > v ? a : v));



const people = [
    {
      name: "Petras",
      age: "18"
    },
    {
      name: "Jonas",
      age: 15
    },
    {
      name: "Antanas",
      age: 20
    },
    {
      name: "Urtė",
      age: 10
    },
    {
      name: "Diana",
      age: 25
    },
    {
      name: "Ieva",
      age: 16
    }
  ];