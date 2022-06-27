fetch("https://olive-bead-glazer.glitch.me")
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);

    })
    .catch((error) => {
        console.error(error);
    });  
    const renderCar = (user) => {
        const brand = user.brand;
        const model = user.model;
        const tdBrand = document.createElement('td');
        const tdModel = document.createElement('td');
        
        
        
        tdBrand.textContent = brand;
        tdModel.textContent = model;
        
        const trUser = document.createElement('tr');
       trUser.append(tdBrand, tdModel);
        return trUser;
        
        };
        
        
        
        const renderTable = (users) => {
        const thBrand = document.createElement('th');
        
        const thModel = document.createElement('th');
        thBrand.textContent ='BRAND';

thModel.textContent ='MODEL';

const thRow = document.createElement('tr');
const thead = document.createElement('thead');
const table = document.createElement('table');

thRow.append(thBrand, thModel);
thead.append(thRow);
table.append(thead);

const tableBody = document.createElement('tbody');

users.forEach(user => tableBody.append(renderCar(user)));
table.append(tableBody);


document.body.append(table);
}

fetch("https://olive-bead-glazer.glitch.me")

.then((resp) => resp.json())
.then(response => {
renderTable(response);
})

.catch((error) => {
console.error(error, ': failed to load');

});

const handleAddTodo = () => {
const todoText = document.querySelector('input[name="todo-text"]');
const newTodo = { title: todoText, completed: false };
const params = {

  method: "POST",
  body: JSON.stringify(newTodo),
  headers: {
  "Content-type": "application/json; charset=UTF-8",
    },
    };

   fetch("https://olive-bead-glazer.glitch.me", params)
      .then((resp) => resp.json())
      .then((response) => {
        renderTodo(response);
        todoText.value = "";
      })

      .catch((error) => {
        console.error(error);
      });

  };

  const addButton = document.querySelector(".add-button");

  addButton.addEventListener("click", handleAddTodo);