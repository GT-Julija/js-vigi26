/*const getProductInfo = (user) => {
  const userImg = user.image;
  const img = document.createElement("img");
  img.src = userImg;
  img.alt = "Prekė";

  const userTitle = user.title;
  const title = document.createElement("h3");
  title.textContent = userTitle;
  title.style.color = "grey";
  title.style.textAlign = "center";

  const userPrice = user.price;
  const price = document.createElement("h2");
  price.textContent = userPrice;
  price.style.color ="red";
  price.style.textAlign = "center";

  const button = document.createElement("button");
  button.textContent = "Ištrinti";
  button.style.background = "white";
   
  const userCard = document.createElement("div");
  userCard.append(img, title, price, button);
 
  return userCard;
};
const frame = (items) => {
  const container = document.createElement("div");
  const cardsCon = document.createElement("div");
  const card = document.createElement("div");
  container.className = "container ";
  cardsCon.className = "cards";
  card.className = "card";

  cardsCon.append(card);
  container.append(cardsCon);

  items.forEach((user) => cardsCon.append(getProductInfo(user)));

  document.body.append(container);
};

fetch("https://golden-whispering-show.glitch.me")
  .then((resp) => resp.json())
  .then((response) => {
    frame(response);
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
*/

const renderCard = (product) => {
  const { id, image, price, title } = product;

  const card = document.createElement("div");
  const imageEl = document.createElement("img");
  const titleEl = document.createElement("p");
  const priceEl = document.createElement("h5");

  const deleteButton = document.createElement("button");

  card.className = "card";
  priceEl.style.color = "red";

  imageEl.src = image; // <img src=(image)/>
  imageEl.alt = title;
  titleEl.textContaen = title;
  priceEl.textContent = price; //<h5>(price)</p>
  deleteButton.textContent = "ištrinti"; //<button>Ištrinti</button>

  deleteButton.addEventListener("click", () => {
    const params = { method: "DELETE" };
    fetch(`https://golden-whispering-show.glitch.me/${id}`, params)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
      });
  });

  card.append(imageEl, titleEl, priceEl, deleteButton); // <div class="card">
  document.body.append(card); // <img...?>
  //<p>(title)</p>
};
fetch("https://golden-whispering-show.glitch.me")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);

    response.forEach((product) => renderCard(product));
  })
  .catch((error) => {
    console.log(error);
  });
