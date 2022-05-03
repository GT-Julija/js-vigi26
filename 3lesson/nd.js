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

for(let i = 0; i <10; i++) {
  console.log("Julija" + " " + i)
} 

//3 (arba 10). uzduotis 