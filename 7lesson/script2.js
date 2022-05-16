const nameButton = document.getElementById("name");
nameButton.addEventListener("click", clickButtonLister )

function clickButtonLister() {
    alert("Julija");
}


const exampleForm = document.getElementById("age-form");

exampleForm.addEventListener("submit", handleSubmitExampleForm);

function handleSubmitExampleForm(event) {
event.preventDefault();
const ageInput = document.querySelector("Input[age]");
const result = document.getElementById("age-result");
result.textContent = `Jūsų amžius: ${ageInput}!`;
console.log(ageInput);





const exampleForm = document.getElementById("driving-form");

exampleForm.addEventListener("submit", handleSubmitExampleForm);

function handleSubmitExampleForm(event) {
    event.preventDefault();

    const myName = document.querySelector("input[userName=userName]");
    const ageInput = document.querySelector("input[myAge=myAge]");
    const result = document.getElementById("driving-result");
    if (ageInput.value > 17) {
        result.textContent = `Vairuoti gali: ${userName}!`);
        else {
        result.textContent = `Dar mokytis vairuoti: ${userName} `);
}
}
