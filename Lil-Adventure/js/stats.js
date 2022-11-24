// var

let enemyArray = [
    {
        name: "spider",
        hp: 3,
        armor: 0,
        force: 0,
        spe: "",
        xp: 2
    },
    {
        name: "queenSpider",
        hp: 8,
        armor: 1,
        force: 2,
        spe: "poison",
        xp: 8
    },
    {
        name: "vence",
        hp: "",
        armor: "",
        force: "",
        spe: "",
        xp: ""
    },
]

// xpConcideringLevel(xpRecieved) to give xp to player

function displayStatsPlayer(container) {
    let stuff = localStorage.getItem("gameStuff");
    actualStuff = JSON.parse(stuff);
    container.innerHTML = `<u>Stats:</u><br>
    <p><u>hp</u>: ${actualStuff.hp}<br>
    <u>armor</u>: ${actualStuff.armor} <br>
    <u>force</u>: ${actualStuff.force} <br>
    <u>spe</u>: ${actualStuff.spe} </p>
    `;
}

function profile() {
    let stuff = localStorage.getItem("gameStuff");
    actualStuff = JSON.parse(stuff);
    homeMadeAlert("Profile", `<p> <u>Level</u>:${actualStuff.level} <u>HP</u>:${actualStuff.hp} <u>force</u>:${actualStuff.force}   
    <p><u>spe</u>:${actualStuff.spe}</p>
    <h4>stuff</h4>
    <p><u>total armor</u>:${actualStuff.armor}</p>
    <p><u>hat</u>:${actualStuff.hat} <u>top</u>:${actualStuff.top} </p>
    <p><u>weapon</u>:${actualStuff.weapon} <u>shield</u>:${actualStuff.shield} </p>
 `);
}

function statUpgrade() {
    let stuff = localStorage.getItem("gameStuff");
    actualStats = JSON.parse(stuff);
    console.log(actualStats);

    homeMadeAlert(`<u>Level up !</u>`, `Chose a stat to upgrade :<br><br> <button onClick="modifyForce(1)">Force +1</button> <button onClick="modifyHP(2)">HP +2</button>`)
}

let xpContainer = document.getElementById("xpContainer");
xpContainer.addEventListener("click", profile);

function modifyHP(newHP) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
    stuff.hp = stuff.hp += newHP;
    localStorage.setItem("gameStuff", JSON.stringify(stuff))
    playerStuff();
    closeHomeMadeAlert()
}
function modifyForce(newForce) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
    stuff.force = stuff.force += newForce;
    localStorage.setItem("gameStuff", JSON.stringify(stuff));
    playerStuff();
    closeHomeMadeAlert()
}



function modifyArmor(newArmor) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
    /*     stuff.weapon = newWeapon;
        localStorage.setItem("gameStuff", JSON.stringify(stuff)); */
}

function modifySpe(newSpe) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
    /*     stuff.weapon = newWeapon;
        localStorage.setItem("gameStuff", JSON.stringify(stuff)); */
}
