const nameButton = document.getElementById("name");
nameButton.addEventListener("click", clickButtonLister )

function clickButtonLister() {
    alert("Julija");
}


const exampleForm = document.getElementById("age-form");

exampleForm.addEventListener("submit", handleSubmitExampleForm);

function handleSubmitExampleForm(event) {
    event.preventDefault();
    console.log(document.querySelecto("input[name=myAge]").value;






const exampleForm = document.getElementById("driving-form");

exampleForm.addEventListener("submit", handleSubmitExampleForm);

function handleSubmitExampleForm(event) {
    event.preventDefault();

    const myName = document.querySelector("input[userName=userName]");
    const ageInput = document.querySelector("input[myAge=myAge]");
    const result = document.getElementById("driving-result");
    if (ageInput > 17) {
        result.textContent = `Vairuoti gali: ${userName}!`);
        else {
        result.textContent = `Dar mokytis vairuoti: ${userName} `);
}

