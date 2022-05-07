//1 dom

/*document.body.innerHTML = "<h1>Julija</h1>"

//next
onst name = 'John';
const h2 = document.createElement('h2');
h2.textContent = name;
document.body.append(h2);


//2 dom
const name= "Julija"
document.body.textContent = "Julija";*/
//next
/*document.getElementById("name").textContent = "Julija"*/

/*document.getElementById("name").innerHTML = "<span style='color:red'>Julija</span>";*/

//3 dom
/*document.getElementById("next").textContent = "Sūris"*/
//next
/*document.querySelector('li:last-child').textContent = 'Sūris';*/

/*document.getElementById("next").textContent = "Sūris"
document.getElementsByClassName("first")[0].textContent = "Jogurtas"*/

/*document.querySelector("p").textContent = "Hello";
document.querySelector("p:nth-child(2)").textContent = "Y";*/

//1 kompleksiniai dom

//document.querySelector('.bluetext > span').textContent = 'blue';
//next
//document.getElementsByClassName("bluetext").innerHTML = "This text will be in <span style='color:blue'>blue</span>";


//2 kompleksiniai dom

/*const firstListItem = document.querySelector('li:first-child');
const secondListItem = document.querySelector('li:nth-child(2)');

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;*/

const haHa = "Ha";
const repeat = 4;
     
function getLaugh(times) {
   let result = "";
   for (let i = 0; i < repeat; i++) {
   result += `${haHa}`;
} console.log(result);
 }