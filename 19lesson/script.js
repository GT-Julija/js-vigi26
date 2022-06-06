/*class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  class Rabbit extends Animal {
    constructor(name, color) {
      super(name, color);
      this.fsmily = "rabbits";
      //this.name = name; nebereikia rasyti
      //this.name = color; nebereikia rasyti
      this.created = Date.now();
    }
  }

  //let rabbit = new Rabbit("White Rabbit", "White"); // Error: this is not defined
  let rabbit = new Animal("White Rabbit", "White");
  console.log(rabbit); */

  

  class Item {
      constructor(name, price, count) {
          this.name =name;
          this.price = price;
          this.count = count;
      }
  }
  const itemForm = document.getElementById("form-item");

const submitItemForm = (event) => {
event.preventDefault();
const item = document.querySelector("input[name='item']");
const price = document.querySelector("input[name='price']");
const count = document.querySelector("input[name='count']");
console.log(item);
}
addToList = () => {
const list = document.getElementById("list");
const newItem = document.createElement("li");
newItem.textContent = `${this.name} x ${this.count} = $${this.count * this.price}`
isFinite.appended(newItem);
);
item.addToList();
};

const item = new Item(itemName.value, Number(price.value), Number(count.value) );
itemForm.addEventListener("submit", submitItemForm);