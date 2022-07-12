/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti temperatūra celsijum ir
pamatyti jo pateikto temperatūros kovertavimą į:
1. Farenheitus (°F) | Formulė: °F = °C * 1.8 + 32;
2. Kalvinus (K) | Formulė: K = °C + 273.15;

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const converterForm = document.querySelector("form");

converterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const celsius = document.getElementById("search");
  const farenheits = celsiuToFarenheits(celsius.value);
  const kalvins = celsiusToKalvins(celsius.value);

  const output = document.getElementById("output");
  output.textContent = `Farenheits: ${farenheits}, Kalvins ${kalvins}`;

  console.log("submitting");
  console.log("Farenheits");
});

function celsiuToFarenheits(celsius) {
  return celsius * 1.8 + 32;
}

functio celsiusToKalvins(celsius) {
    return Number(celsius) + 273.15;
}





/*
document.getElementById("convert").onclick = tempConvert;
document.getElementById("clear").onclick = clearForm;

function tempConvert() {
  var fahrenheit = document.getElementById("fahrenheit").value;
  var celsius = document.getElementById("celsius").value;

  if (fahrenheit != "") {
    celsius = (parseFloat(fahrenheit) - 32) / 1.8;
  } else {
    fahrenheit = parseFloat(celsius) * 1.8 + 32;
  }

  document.getElementById("fahrenheit").value =
    parseFloat(fahrenheit).toFixed(1);
  document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
}

function clearForm() {
  document.getElementById("fahrenheit").value = "";
  document.getElementById("celsius").value = "";
}
