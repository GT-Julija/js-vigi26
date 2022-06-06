//Objektinis programavimas

// Susikurkite objektų konstruktorių naudojant new pavadinimu Book, kuris galės kurti objektus,
// kurie turės šias savybes (properties): name, author, year ir metodus (naudojant prototype),
// kurių vienas parašys pavadinimą ir autorių, o kitas parodys amžių (senumą). 

//Konstruktoriaus funkcija rašoma iš Didžiosios raidės

class Book(name, author, year) {
 this. name = name;
 this.authorName = author;
 this.year = year;
 this.getInfo = () => {
     return `${this.name} parašė ${this.authorName} knygą`;
 };
 this.getYears = () => {
     const today = new Date();
     return today.getFullYear() - this.year;
 };
}
const harryPotterBook = new Book("Harry Potter", "J.K.Rowling", 1997);
const randomBook = new Book("Random Writer", "Very random", 2022);
//console.log(harryPotterBook.authorName);
//console.log(harryPotterBook.getauthor);
//console.log(harryPotterBook.getInfo());
console.log(harryPotterBook.getYears());

const book = {
    name: "HP",
    authorName: "JK";
    year" 1997,
};



class Book {
    constructor (name, author, year) {
    this. name = name;
    this.authorName = author;
    this.year = year;
}
    getInfo = () => {
        return `${this.name} parašė ${this.authorName} knygą`;
    };
    getYears = () => {
        const today = new Date();
        return today.getFullYear() - this.year;
    };
  }



  //

  class Employee {
      constructor(position, wage, experience){
 this.position = position;
 this.wage = wage;
 this.experience = experience;
      }

      getBonus = () => {
          if (this.experience < 5) {
              return this.wage;
          } else if (this.experience < 10) {
          return this.wage * 2;
      } else {
          return this.wage * 3;
        }
      };
  }

  const softwareDeveloper = new Employee("Front-end engineer", 4000, 2);
  const salesManager = new Employee("Sales Manger", 6000, 7);
  console.log(softwareDeveloper.getBonus());
  console.log(salesManager.experience());