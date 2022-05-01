/* 1 .Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu skaičiumi. Pasirašyk if-else, 
kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.*/

/*const legalAge = 20;
const clientAge = 18;
  if (legalAge <= clientAge){
  alert("lygu")
 }else if (legalAge >= clientAge){
  alert("nelygu")
}*/

/*const clientAge = 16;
const legalAge = 20;
if (clientAge >= legalAge) {
  console.log(`Pasiekęs ${legalAge}`);
} else {
  console.log(`Nepasiekęs ${legalAge}`);
}*/


 /*2. Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas", jei tavo vardas ilgesnis nei 6 raidės. Kitu 
atveju, nieko neišmes. String ilgį gali susižinoti prirašant 'length' property (pvz.: "Petras".length arba su kintamu: name.length).*/ 

/*const name = "Julija";
if (name.length >= 6) {
  alert("Ilgas vardas");
}/*

/*3.Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta 
"Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult".*/

/*onst age = 39;
if (age > 100 || age < 0) {
  alert('Invalid age');
} else if (age < 18) {
  alert('Child');
} else {
  alert('Adult')
}
}*/

/*Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
BMW group priklauso: BMW, Mini, Rolls-Royce.*/

/*const car = "VW";
if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
  console.log('VW Group');
} else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
  console.log('BMW Group');
} else {
  console.log('Nei vienam');
}*/


let poeple = 3
let poepleGroup = "Ne groupe";

if (poeple <= 0) {
  poepleGroup = "Ne grupė";
} else if (poeple === 1 ) {
  poepleGroup = "Solo";
} else if (poeple === 2 ) {
  poepleGroup = "Duetas";
} else if (poeple === 3 )  {
  poepleGroup = "Trio";
} else if (poeple === 4 ) {
  poepleGroup = "Kvartetas";
} 
console.log (poepleGroup)

