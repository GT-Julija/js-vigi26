// Parašykite JS kodą, kuris nuspaudus mygtuką "Plus one" pridės vieną prie counter skaičiaus
// nuspaudus "Minus one" atims vieną nuo counter skaičiaus



const plusButton = document.getElementById("btn__element_plus");
const minusButton = document.getElementById("btn__element_minus");
let counter = 0;

plusButton.addEventListener("click", () => {
    counter++;
    document.getElementById("btn__state").textContent = counter;
});

minusButton.addEventListener("click", () => {
    counter--;
    document.getElementById("btn__state").textContent = counter;
});