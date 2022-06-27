const fetchRandomUser = async () => {
    try {
    const response = await fetch('https://randomuser.me/api/');
    if (response.ok) {
    const data = await response.json();
    renderUserCard(data.results[0]);
    }
    } catch(error) {
    console.error(error);
    }
    };
    
    fetchRandomUser();
//a  async function random()  {}

    const getRandomUser = async () => {
        try {
          const resp = await fetch('https://randomuser.me/api/');
          const response = await resp.json();
          console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    getRandomUser();

const createUserRow = (users) => {
    const thId = document.createElement('th');
    const thCity = document.createElement('th');
    const thName = document.createElement('th');
    const thColor = document.createElement('th');

    thId.textContent = "id";
    thCity.textContent = 'city';
    thName.texContent = 'name';
    thColor.textContent = "fav_color";

    const thRow = document.createElement('tr');
    const thead = document.createElement('thead');
    const table = document.createElement('table');
    
    thRow.append(thId, thCity, thName, thColor);
    thead.append(thRow);
    table.append(thead);
    document.body.append(table);
};

   

   // document.body.append(table);



    fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(response => {
        renderTable();
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });