//1.uzduotis (switch)

/*const car = Mini;
switch (car) {
case "VW":
case "Audi":
case "Bentley":
case "Buggati":
case "Lamborghini":
case "Porsche":
console.log("VW group");
break;
case "BMW":
case "Mini":
case "Rolls-Royce":
console.log("BMW group");
break;
default:
console.log("Nepriklauso grupei")
}*/

//2.uzduotis (switch)

/*const userlnput = "obuolys";
switch (userlnput) {
case "braske":
case "aviete":
case "silauoge":
case "serbentai":
case "obuolys":
console.log("vaisiai");
break;
case "cukinija":
case "moliugas":
case "agurotis":
case "baklazanas":
case "morka":
console.log("darzove");
break;
default: console.log("Nei vaisius, neidarzove")
}*/


//3.uzduotis (switch)

/*const weekDay = "3";
switch (weekDay) {
case "0":
console.log("pirmadienis");
break;
case "1":
console.log("antradienis");
break;
case "2":
console.log("treciadienis");
break;
case "3":
console.log("ketvirtadienis");
break;
case "4":
console.log("penkatdienis");
break;
case "5":
console.log("sestadienis");
break;
case "6":
console.log("sekmadienis");
break;
}*/

//3.uzduotis, kitas variantas (switch)


/*let weekDay = new Date().getDay();
switch (weekDay) {
  case 0:
    weekDay = 'Sekmadienis';
    break;
  case 1:
    weekDay = 'Pirmadienis';
    break;
  case 2:
    weekDay = 'Antradienis';
    break;
  case 3:
    weekDay = 'Trečiadienis';
    break;
  case 4:
    weekDay = 'Ketvirtadienis';
    break;
  case 5:
    weekDay = 'Penktadienis';
    break;
  case 6:
    weekDay = 'Šeštadienis';
    break;
}
console.log(weekDay);*/

//1.(arba 4)uzduotis (Ternary)

/*const title = "Julija";
const titleLenght = title <= 5 ? "Short Name" : "Long Name";

console.log(titleLenght);*/

//1.(arba 4) uzduotis kitas variantas (Ternary)

/*const vardas = 'Julija';
console.log(vardas.length < 5 ? "Short Name" : "Long Name")*/

//2 (arba 5).uzduotis (Ternary)

/*const clientAge = 20;
const legalAge = 18;
const drivingLicense = clientAge >= legalAge ? "Can Dive" : "Can't drive";
console.log(drivingLicense);*/

//2 (arba 5) .uzduotis kitas variantas (Ternary)

/*const clientAge = 16;
const legalAge = 18;
clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");*/

//3 (arba 6).uzduotis (Ternary)

/*const clientAge = 20;
const legalAge = 18;
const drivingLicense = (clientAge >= legalAge) - 1 ? "Can Dive" : "Can't drive";
console.log(drivingLicense);

clientAge < 0 || clientAge > 120 ? console.log("Invalid age") : clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");*/


//4 (arba 7).uzduotis (Ternary)

/*const phone = 'iPhone';
const islphoneUser = phone === 'iPhone';*/

//1 (arba 8).uzduotis (Loop)

/*for(let i = 0; i <10; i++) {
  console.log("Julija")
} */

//2 (arba 9).uzduotis (Loop)

/*for(let i = 0; i <10; i++) {
  console.log("Julija" + " " + i)
} */



/*for(let i = 0; i < 10; i++) {
  console.log(`${i + 1}.Julija`);
} */



/*const vardas = "Julija";
const count = 10; 

for(let i = 0; i < count; i++) {
  console.log(`${i + 1}.${vardas}`);
} */


/*let i = 10;
while (i > 0) {
  console.log(i);
  i--
}*/

/*for (let i = 10; i > 0; i--) {
console.log (i);
}*/

//  i=10, 10 > 0; 10
//  i=9, 9 > 0; 9
//  ...
//  i=0, 0> 0; 0

/*for (let i = 0; i < 10; i += 2){
  console.log (i);
}*/


// i= 0; 0 , 10; 0 = 0 + 2
// i= 2, 2 < 10; 2= 2 + 2 
// i = 4; 4< 10; 6 = 4 + 2


/*for (let i = 0; i < 10; i += 3){
  console.log (i);
} */


/*const dogName = "Rikis";
const repeat = 5;
let result = "";

for (let i = 0; i < repeat; i++) {
  result += dogName;
}
console.log(result);

i = 0; 1 < 5; 0 = 0 + 1  */

/*"" = "" + "Rikis"
"Rikis" = "Rikis" + "Rikis"
"RikisRikis" = "RikisRikis" + "Rikis"
"RikisRikisRikis" = "RikisRikisRikis" + "Rikis"
"RikisRikisRikisRikis" = "RikisRikisRikisRikis" + "Rikis"*/

/*const dogName = "Rikis";
const repeat = 5;
let result = "";

for (let i = 0; i < repeat; i++) {
  result += `${dogName},`;
}
console.log(result); */


/*const dogName = "Rikis";
const repeat = 5;
let result = "";

for (let i = 0; i < repeat; i++) {
  if (i === repeat - 1){
    // paskutinis ciklas ir pades taska
  result += `${dogName}.`;
} else {
  result += `${dogName},`;
}
}
console.log(result); */

/*const start = 1;
const count = 9;
let result = 0;

for (let i = start; i < count + 1; i++) {
  console.log (i); 
  result  += i; 
}
console.log (result); */

/*let i = ;

while ( i < 3) {
  // shows 0, then 1, then 2
  console.log(i);
  i ++;
}*/

/*//inicializavimas
let i = ;
//sąlyga
while ( i < 3) {
  // shows 0, then 2, then 4,  6, 8
  console.log(i);
  //išraiška
  i += 2;
}*/

//do ..while ciklas pirmiausia įvykdys kuna, tada patikrins israiska i rkol, tai tiesa, vel ir vel ja vykdys

/*let i = 0;
do {
  console.log( i);
  i++;
} while (i < 3);*/


const number = 2;

if (number % 2 == 0) {
// even - lyginis
console.log(number + " skaicius yra lyginis");
} else {
// odd - nelyginis
console.log(number + " skaicius yra nelyginis");