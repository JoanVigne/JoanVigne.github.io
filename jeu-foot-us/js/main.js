
// LE CONTAINER DU JEU
let container = document.getElementById("container");

// PAGES 
window.onload = buttonsMenu(), setLocalStorage();

// LES FUNCTIONS CREATION SUPPRESSION GENERAL
// LA FUNCTION POUR CREER DES BUTTONS
function buttons(type, id, value) {
    let button = document.createElement("input");
    button.setAttribute("type", type);
    button.setAttribute("id", id);
    button.setAttribute("value", value);
    button.setAttribute("class", "inputMenu");
    container.append(button);
}
function sortirMenu(vers) {
    removeButton("start");
    removeButton("options");
    removeButton("personalRecord");
    document.title = vers;
}
function removeButton(id){
    let thisButton = document.getElementById(id);
    thisButton.remove();
}
function menuPrincipal() {
    location.reload();
}
// LE MAIN MENU
function buttonsMenu() {
    buttons("button", "start", "Start");
    buttons("button", "options", "Options");
    buttons("button", "personalRecord", "Personal Records");
    container.classList.add("menu");
    let buttonStart = document.getElementById("start");
    let buttonOptions = document.getElementById("options");
    let buttonPersonalRecord = document.getElementById("personalRecord");
    buttonStart.addEventListener("click", startGame);
    buttonOptions.addEventListener("click", affichageOptions);
    buttonPersonalRecord.addEventListener("click", affichageRecords);
}
// START GAME

function startGame() {
    sortirMenu("First Level");
    container.classList.replace("menu", "grid");
    playerCreation();
    creerLesButtonsInvisible();
}


// PERSONAL RECORD
// POUR METTRE LE TABLEAU DANS LE LOCAL STORAGE
function setLocalStorage() {
    let stored = localStorage.getItem("record");
    if (stored == null) {
        let record = [];
        let newbe = {
            "nom": "Newbe",
            "level": "5"
        }
        record.push(newbe);
        localStorage.setItem("record", JSON.stringify(record));
    }
}
function affichageRecords() {
    sortirMenu("Personal Records")
    // affichage des records
    let retrievedObject = localStorage.getItem("record");
    let recordPerso = JSON.parse(retrievedObject);
    let affichage = document.createElement("div");

    recordPerso.sort(function (a, b) { return a.level - b.level });
    recordPerso.reverse();
    // prendre que les premiers meilleurs scores
    const n = 7;
    const les5premiers = recordPerso.slice(0, n);

    affichage.innerHTML = `<h1>Personal records</h1>`;
    if (recordPerso != null) {
        les5premiers.forEach(element => {
            affichage.innerHTML += `<h2> ${element["nom"]} =>
                                    ${element["level"]}</h2>`
        });
    }

    affichage.classList.add("personalRecord");
    container.append(affichage);
    // REtour menu principal
    buttons("button", "buttonBack", "Menu");
    let buttonBackToMenu = document.getElementById("buttonBack");
    buttonBackToMenu.addEventListener("click", menuPrincipal);
}



// GAME OVER
function recordInLocalStorage() {
        var retrievedObject = localStorage.getItem("record");
        var stored = JSON.parse(retrievedObject);
        let name = entry.value; // ici
        let niveau = document.title;
        let newEntry = {
            "nom": name,
            "level": niveau
        };
        stored.push(newEntry);
        localStorage.setItem("record", JSON.stringify(stored)); 
}

function messageGameOver() {
    let containerPopup = document.createElement("div");
    containerPopup.setAttribute("id", "containerPopup")
    containerPopup.innerHTML = `<h1> GAME OVER </h1>`;
    container.append(containerPopup);
}
function promptMaison(message){
    player.remove();
    let box = document.createElement("div");
    box.setAttribute("id", "boxPrompt");
    box.innerHTML = `<h1>${message}</h1><h1>Entrez votre pseudo pour enregistrer votre score :</h1>`;
   
    let entry = document.createElement("input");
    entry.setAttribute("type", "text");
    entry.setAttribute("id", "entry");
    entry.setAttribute("placeholder", "ex: D4rKs4$$uke42 ..");
   
    let recordEntry = document.createElement("input");
    recordEntry.setAttribute("type", "button");
    recordEntry.setAttribute("value", "Enregistrer");
    recordEntry.setAttribute("id", "recordEntry");
    box.append(entry);
    box.append(recordEntry);
    container.append(box);

    recordEntry.addEventListener("click", recordEntryFunction)
    function recordEntryFunction(){
        if(entry.value != ""){
            recordInLocalStorage();
            console.log("pseudo present");
            console.log(entry.value);
            messageGameOver();
            box.remove();
            
            setTimeout(function () { menuPrincipal(); }, 1500);
        }
        else {
            console.log("aucun pseudo entré");
            box.innerHTML += `<br>Veuillez entrer un pseudo`;
        }
    }
}
// creation du player  dans  ======> player.js
// FAIRE BOUGER LE PLAYER dans  ===> move.js
// FAIRE BOUGER LES ENEMIES DANS ==> enemies.js

// pour ajouter un enemi, il faut : 
// - le créer dans level.js et supprimer les anciens
// - definir dans enemies.css la position de depart sur le grid
// - choisir ses mouvements dans move.js ET DANS MOVEclick.js
// - DANS MOVE.JS, verifiersicolision