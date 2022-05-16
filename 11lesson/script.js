console.log("Objektai");

//Tuscias objketas
const emtyObject {};

const = {
    name:"julija83", 
    password: "julijajulija123",
    mail: "julija@gmail.com",
    age: 39, 
    gender: "female",
};

//console.log(user.name);
//console.log(user["name"]);

function getItem(key) {
    //user ["gender"]
    return user[key];
}
//console.log(getItem("gender"));

const candle ={
    color = "green";
    taste = "apple";
    height: 8; 
    radius: 8;
    turnLight: () => {
        console.log(`${candle.color} candle spreading tasteful ${candle.taste} smell`
        );
    },
    calculateLightTime: () => {
        const metric = candle.height * cande.radius;
        if(metric > 60 {
            return 180
        } else if (metric > 30) {
            return 90
        } else {
            return 45;
        } 
    }.
    };

//const minutes + log candle.calculatedLightTime();
//console.log(minutes);

const cat = {
    name: "Kleopatras";
    age: 15,
    color: "black";
    weight: 7,
    eat: () => {
        console.log(`${cat.name} is eating ${food}...`)},
        sleep; () => console.log("Cat is sleeping...");
},
description: () => {
    console.log(cat.name);
},
};


//console.log(`${cat.name} is a ${cat.color} cat and ${cat.age}`);
//cat.desctiption();
//cat.eat("fish");

const codeClass = {
    type: "remote",
    subject: "Front-end + Node.js";
    lecturer: {
        name:"Rokas",
        surname: "Anderikenas",
        age: 23,
        experience: 3,
},
students: ["Edvinas", "Liudmila", "Rima", "Karolis"],
};
console.log(codeClass.lecturer.name);
const lectureFullName = `${code.Class.lecturer.name} ${codeClass.lecturer.surname}`;

//console
const studentCount = codeClass.students.length;
//console.log(studentCount);

//console.log(codeClass.type);

codeClass.type = "onsite";

const student = {};

student.name = "Rokas";
student.surname = "Andreikenas";

//console.log(student);

const name = ["Edvinas", "Liudmila", "Rima", "Karolis"];

names[0] ="Rokas";

//console.log(names);



treeForm.addEventListener("submit", handleSubmitTreeForm);

function handleSubmitTreeForm(event) {
event.preventDefault();

const treeName = document.querySelector("input[name='tree-name']");
const treeAge = document.querySelector("input[name='tree-age']");

/*console.log(treeName.value);
console.log(treeAge.value);*/

const name = treeName.value;
const age = Number(treeAge.value)

const tree = {
    name: treeName.value,
    age: Number(treeAge.value),
    isOld: age> 100 ? true : false,
    //isOld: age> 100, 
};
console.log(tree);
}

console.log(tree);