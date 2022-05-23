const card = document.createElement("div");
//text.style.color = "red";
card.style.background = "#f3f3f3";


document.body.style.background = "blue";
//main block

const main = document.createElement("main");
//main.textContent = "hello";
main.style.background = "yellow";
main.style.width = "70%";
main.style.margin = "10rem auto 0 auto";
main.style.padding = "1rem";
main.style.borderRadius = "0.5rem";
main.style.textAlign = "center";

document.body.append(main);

//img

const img= document.createElement("img");
img.src = "https://icon-library.com/images/771202_people_512x512.png";
img.style.width = "10rem";
img.style.height = "10rem";
img.style.objectFit = "cover";
img.style.borderRadius = "50%";
img.style.padding = "0.5rem";
img.style.border = "1px solid #eee";
img.style.marginTop = "-6.5rem"
main.append(img);

//text
const name = document.createElement("h1");
name.textContent = "Julija";
main.append(name);

//text
const email = document.createElement("h1");
email.textContent = "julija.gedgaudiene@gmail.com";
email.style.fontSize = "1.2rem";
email.style.color = "#888";

main.append(email);

//text
const city = document.createElement("h1");
city.textContent = "Vilnius";
city.style.fontSize = "1.2rem";
city.style.color = "#888";

main.append(city);