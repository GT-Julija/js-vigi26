/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris atvaizduos TODOS korteles.
1. Išgaukite TODOS iš duoto ENDPOINT.
2. Sukurkite kiekvienam todo kortelę
3. Kortelėje atvaizduokite title ir due_on reikšmes (due_on panaudoti su Date object)
4. Kortelės spalva turi atitikti todo statusą. 
   Jeigu status = pending, kortelė orandžinė 
   Jeigu status = completed, kortelė žalia
5. Pastilizikuote kortelę
const ENDPOINT = "https://gorest.co.in/public/v2/todos";
-------------------------------------------------------------------------- */



const ENDPOINT = "https://gorest.co.in/public/v2/todos"; 

const renderCard = (todo) => {
const card = document.createElement("div");
const titleEl = document.createElement("h3");
const dueOnEl = document.createElement("span");

titleEl.texContent = todo.title;
//toLocaleString() arba toDatestring()
dueOnEl.textContent =  new Date(todo.due_on).toLocaleString();

card.className = "card";
card.style.backgroundColor = todo.status === "pending" ? "orange" : "green";
card.append(titleEl, dueOnEl);

document.getElementById("output").append(card);
};

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((todo) => renderCard (todo));
    })
     .catch((error) => {
    console.error(error);
  });






/*

const renderCard = (user) => {
  const { title, status, due_on } = user;
  const card = document.createElement("div");
  const output = document.getElementById("output");
  const titleEl = document.createElement("p");
  const dueonEl = document.createElement("p");
  const statusEl = document.createElement("h5");

  card.className = "card";

  titleEl.textContent = title;
  dueonEl.textContent = due_on;
  statusEl.textContent = status;

  card.append(titleEl, dueonEl, statusEl);

  output.append(card);
};

fetch("https://gorest.co.in/public/v2/todos")
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((user) => renderCard(user));
  })
  .catch((error) => {
    console.error(error, ": failed to load");
  });
*/