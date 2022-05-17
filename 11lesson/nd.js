const car = {
    doors: 3,
    color: "red",
    brand: "VW",
};
/*console.log(car.doors);
console.log(car.color);
console.log(car.brand);*/


if(car.doors === 5) {
    alert(`${car.brand} turi penkias duris`);
}
else if(car.doors === 4) {
    alert(`${car.brand} turi keturias duris`);
}
else {alert(`${car.brand} turi neįprastą skaičių durų`);
}
