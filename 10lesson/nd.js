//1.1 variantas su h2
/*const nameInput = document.getElementById("name");

console.log(nameInput.textContent);

nameInput.addEventListener('click', handleClickOnName);
function handleClickOnName() {
    nameInput.style.color = "blue";
    nameInput.style.textAlign = "center";
    nameInput.style.fontSize = "72px";
}*/

//1.2 kitas variantas su h1

/*document.querySelector('h1').addEventListener('click', (event) => {
    event.target.style.textAlign = "center";
    event.target.style.fontSize = "4rem";
    event.target.style.color = "yellow";
  });*/

  //2.1 

  /*const jumpButton = document.getElementById("jump");

  jumpButton.addEventListener("click", handleJump);
  
  jumpButton.style.cssText = "position: absolute; top: 30px; left: 30px;";
    let inTop = true;
  
  function handleJump() {
  if (inTop) {
  
  jumpButton.style.cssText = "position: absolute; bottom: 30px; right: 30px;";
  jumpButton.textContent = "Jump to top";
  inTop = false;
  } else {
  
  jumpButton.style.cssText = "position: absolute; top: 30px; left: 30px;";
  jumpButton.textContent = "Jump to bottom";
  inTop = true;
  }
}
*/

//2.2 kitas variantas nesirenka ID 

/*const button = document.querySelector('button');
button.style.cssText = 'position:absolute; top:0; left:0;';

let isInOriginalPosition = true;
function changePosition() {
  event.target.style.cssText = isInOriginalPosition ? 'position:absolute; bottom:0; right:0;' : 'position:absolute; top:0; left:0;';
  isInOriginalPosition = !isInOriginalPosition;
}

button.addEventListener('click', changePosition); */

//3.1 

//4.1. 

//<button id="name">Jump</button>
document.getElementById('jump').addEventListener('input', event => {
  const name = event.target.value;
  document.body.style.backgroundColor = name.length < 3 ? 'red' : 'green';
});


//<input type="text" id="name">
document.getElementById('name').addEventListener('input', event => {
  const name = event.target.value;
  document.body.style.backgroundColor = name.length < 3 ? 'red' : 'green';
});

//<button>Push!</button>
const buttonColors = ["red", "green", "blue", "yellow"]
document.querySelector('button').addEventListener('click', event => {
  const randomIndex = Math.round(Math.random() * 4);
  event.target.style.backgroundColor = buttonColors[randomIndex];
});
