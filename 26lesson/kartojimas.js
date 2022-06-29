/*const name = ["Rokas", "Tomas", "Giedrius", "Martyna"];
function addNewStudent(studentName) {
    names.push(studentName);
    }

    function removeStudent(studentName) {
        names.pop();
    }


    console.log(names);
    addNewStudent("Antanas");
    console.log(names);*/

//array.push() - įstumia į galą
//array.pop() - išmeta iš galo
//array.unshift() - įstumia į priekį
//array.shift() - išmeta iš priekio

//1

/*const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

    function removeColors(colorArray) {
    colorArray.pop(); // red blue green white black yellow
    colorArray.shift(); // blue green white black yellow
    colorArray.shift(); // green white black yellow
    colorArray.shift(); // white black yellow
    colorArray.shift(); // black yellow
    colorArray.shift(); // yellow
    colorArray.unshift("green"); // green yellow
    }
    
    removeColors(colors);
    
    console.log(colors);*/

//   2

/*function backToStartingArray() {
    colors.push("purple"); // green yellow purple
    colors.shift(); // yellow purple
    colors.unshift("red", "blue", "green", "white", "black"); // red blue green white yellow purple
    }
    
    backToStartingArray();
    
    console.log(colors);
    
    function reverseArray(array) {
    array.reverse();
    }
    
    reverseArray(colors);
    
    console.log(colors);
    
    colors.forEach((color) => {
    console.log(color);
    });
    
    // colors.forEach(showColor);
    
    // function showColor(color) {
    // console.log(color);
    // }
    
    function doubleArrayItem(array) {
    return array.map((item) => item + item);
    }
    
    const doubledItems = doubleArrayItem(colors);
    console.log(doubledItems);  */

//3

const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];
const removedColors = colors.splice(3, 4);
return colors;
console.log(colors);

//4

const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];
function removedSomeColors(array) {
  return array.splice(4, 1, "orange");
}
removeSomeColor(colors);
console.log(colors);

//5

let sciCourses = ["red", "blue", "green", "white", "black", "yellow", "purple"];
function checkCourses(courseArray, searchText) {
  return courseArray.filter(function (item) {
    return item.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
  });
}
console.log(checkCourses(sciCourses, "e"));

//arba
const hasEachar = modifiedColors.filter(color => color.includes("e"))
console.log(hasEchar)
//red.includes("e") => true
//blue.includes("e") => true


//6
const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];
const result = colors.filter((colors) => colors.length < 4);

console.log(result);

//arba
const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];
console.log(colors.reduce((a, v) => (v.length === 4 ? a + 1 : a), 0));

//7
const hasZChar = modifiedColorssome((color) => color.includes("z"))'
console.log("haz Z char", hasZChar);

//8

const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];
const index = colors.findIndex((colors) => colors === "brouwn");

console.log(colors[index]);

//9
const hasALetterCount = modifiedColors.filter((color)) => color.includes("a");
const hasALetter = modifiedColors.filter((color)) => color.includes("a").lenght;

/*
const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

function removeGreenAndWhite(colorArray) {
const sliced = colorArray.slice(0, 2);
const sliced2 = colorArray.slice(-3);
const combine = sliced.concat(sliced2);
return combine;
}

const modifiedColors = removeGreenAndWhite(colors);

function addOrange(colorArray) {
colorArray.splice(2, 1, "orange");
}

addOrange(modifiedColors);
const hasEchar = modifiedColors.filter((color) => color.includes("e"));
// "red".includes("e") => true
// "blue".includes("e") => true
console.log("hasEchar", hasEchar);

const shorterThan4Chars = modifiedColors.filter((color) => color.length < 4);
// "red".length < 4 => 3 < 4 => true
// "blue".length < 4 => 4 < 4 => false
// "orange".length < 4 => 6 < 4 => false
console.log("shorter than 4 chars", shorterThan4Chars);

const hasZChar = modifiedColors.some((color) => color.includes("z"));
console.log("has Z char", hasZChar);
// "red".includes("z") => false
// "blue".includes("z") => false

const hasBrownValue = modifiedColors.some((color) => color === "brown");
console.log("has brown", hasBrownValue);

const hasALetter = modifiedColors.filter((color) => color.includes("a"));
const aLetterCount = hasALetter.length;

console.log("has A letter", aLetterCount);*/

