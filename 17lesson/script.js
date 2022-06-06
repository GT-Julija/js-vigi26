//sukurkite funkciją, kuri paims stringą ir grąžins jį be pirmosios raidės ir pakelta pirmąją
//t.y. "Petras" -> "Etras"

const removeFirst = (value) => {
    const withoutFirst = value.slice(1);
    return withoutFirst[0].toUpperCase() + withoutFirst.slice(1).toLowerCase();
    };
    
    const removed = removeFirst("GRIDAS");
    
    // Pasakykite skaičių kiek žmonių vardų prasideda “A” raide tarp šių duomenų (t.y. console'log skaičių).
    const startsA = (array) => array.filter((p) => p.first_name[0] === "A").length;
    // console.log(startsA(data));
    
    // 2. Pasakykite skaičių kiek žmonių varde turi raidę “K” tarp šių duomenų (t.y. console'log skaičių).
    const hasK = (array) => array.filter((p) => p.first_name.includes("K")).length;
    console.log(hasK(data));