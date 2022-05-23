// .splice padeda istrinti aba itepti masyvo elementa i pasirinkta vieta

/*const sentence =["I", "study", "JavaScript", "right", "now"];
const firstTwoElemnts = sentence.slicie(0, 2) ; //istrina pirmus du ir grazina
console.log(sentence);


const sentence =["I", "study", "JavaScript", "right", "now"];
sentence.slicie(2, 2) ; //nuo antros vietos istrina du
console.log(sentence);

sentence.splice(2, 1, "TypeScript");   //pakeicia masyvo elementa kitu nuo antros vietos 
console.log(sentence);

sentence.splice(1, 4, "studied", "TypeScript", "before"); //pakeicia masyvo elementus
console.log(sentence);*/

//.slice  neissaugo naujo masyvo ir jis buna paturbintas, nepakeis esamo masyvo reiksmes

const sliced = sentence.slice(0, 3)  //pirmus tris elementus
console.log(sliced);

const sliced = sentence.slice(-3)  //paskutinius tris
console.log(sliced);


//reduce pereina per kiekviena elementa, turi bendra reiksme

const numbers = [7,8, 1, 0.50, 8, 6, 10, 20, 30, 40];
const total = numbers.reduce((previuosValue, curentValue) => {
    console.log(previuosValue);
    return previuosValue + curentValue;
});

console.log("");
console.log(total);

const numbers = [7,8, 1, 0.50, 8, 6, 10, 20, 30, 40];
const total = numbers.reduce((total, number) => {
    console.log(total);
    return total + number;
}); 0; //initial value, po kablelio eina pradine reiksme

//7 + 8
// 15 + 1
// 16 + 0.5
// 16.5 + 8
// 24.5 + 6

console.log("");
console.log(total);


const total = numbers.reduce((total, number) => { total + number, 0);
    console.log("");
    console.log(total);


/*const sortedAscendingOrder = numbers.sort((a, b) => a - b);  //surikiuoja didejimo tvarka
const sortedDecendingOrder = numbers.sort((a, b) => b - a);  //surikiuoja mazejimo tvarka
console.log(sortedAscendingOrder);  //viena is ju reikia uzsikomentuoti, norint gauti atsakyma
console.log(sortedDecendingOrder); */


const styles = ["Jazz", "Blues"]; // 1
console.log(styles);
styles.push("Rock-n-Roll"); // 2 iterpti Rock-n-Roll
console.log(styles);
styles.splice(1, 1, "Classics"); // 3 perrrasyti 
console.log(styles);
const firstElement = styles.shift(); // 4
console.log(firstElement);
console.log(styles);
styles.unshift("Rap", "Reggae"); // 2
console.log(styles);

const arr = [11, -2, 34, 45];
function getMaxSubSum(array) {
    const sum = array.reduce((total, num) => (num > 0 ? total + num : total), 0);
    return sum
}

const sum = getMaxSubSum(arr);
console.log(sum);

//arba
function getMaxSubSum(array) {
    const sum = array.reduce((total, num) => {
    if (num > 0) {
    return total + num;
    } else {
    return total;
    }
    }, 0);
    return sum;
    }
    
    const sum = getMaxSubSum(arr);
    console.log(sum);
 