//1 boolean
const isLegalAge = true;

console.log(isLegalAge); // Atvaizduos kaip boolean
console.log(isLegalAge.toString()); // Atvaizduos kaip string


//1 Number

const milkPrice = 2.598;
console.log(Number(2.59).toString());
console.log(milkPrice.toFixed(2));

//1 kitas atsakymas
const milkPrice = 3.49; // Vėliau pakeisti kainą į 3

if (Number.isInteger(milkPrice)) {
  alert("Centų nereikia")
} else{
  alert("Centų prireiks...")
}


//1  kitas variantas
const milkPrice = 3.677; // Vėliau pakeisti kainą į 3

if (Number.isInteger(milkPrice)) {
  alert("Centų nereikia")
} else{
  alert("Centų prireiks...")
}

alert(milkPrice.toFixed(2))

//3

 
      document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();

        // Pasiimant input value, visada paduoda string. Nepamirštame konveruoti į skaičių su Number()
        const price = Number(document.getElementById("price").value);
        const quant = Number(document.getElementById("quant").value);

        const total = price * quant;

        const priceDisplay = document.createElement("h1");
        priceDisplay.textContent = total.toFixed(2);
        document.body.append(priceDisplay);
      });
   
//1  string

document.querySelector("placeholder-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const quant = Number(document.getElementById("quant").value);

    if (Number.isInteger(quant)) {
      const h1 = document.createElement("h1");
      h1.textContent = name.repeat(quant);
      document.body.append(h1);
    } else {
      alert("Number is not an integer");
    }
  });