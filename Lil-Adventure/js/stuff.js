
let theHat = document.createElement("div");
let theFace = document.createElement("div");
let theBody = document.createElement("div");
let theWeapon = document.createElement("div");
let theShield = document.createElement("div");
theHat.setAttribute("id", "hat");
theFace.setAttribute("id", "face");
theBody.setAttribute("id", "top");
theWeapon.setAttribute("id", "weapon");
theShield.setAttribute("id", "shield");

function playerStuff() {

    var gameStuff = JSON.parse(localStorage.getItem("gameStuff"));
    let hat = gameStuff.hat;
    let face = gameStuff.face;
    let top = gameStuff.top;
    let weapon = gameStuff.weapon;
    let shield = gameStuff.shield;


    theHat.setAttribute("class", hat);
    player.append(theHat);

    theFace.setAttribute("class", face);
    player.append(theFace);

    theBody.setAttribute("class", top);
    player.append(theBody);

    theWeapon.setAttribute("class", weapon);
    player.append(theWeapon);

    theShield.setAttribute("class", shield);
    player.append(theShield);
}