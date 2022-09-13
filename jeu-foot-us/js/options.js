


// OPTIONS
function affichageOptions() {
    sortirMenu("Options");
    let affichage = document.createElement("div");
    affichage.innerHTML = `<h1>Options</h1>`
    buttons("button", "themeTerrain", "Type de terrain");
    let themeTerrain = document.getElementById("themeTerrain");
    themeTerrain.addEventListener("click", themeTerrainChoix);
    buttons("button", "themePerso", "Personnages");
    let themePerso = document.getElementById("themePerso");
    themePerso.addEventListener("click", themePersoChoix);
    // REtour menu principal
    buttons("button", "buttonBack", "Menu");
    let buttonBackToMenu = document.getElementById("buttonBack");
    buttonBackToMenu.addEventListener("click", menuPrincipal);
}
function themeTerrainChoix() {
    removeButton("themeTerrain");
    removeButton("themePerso");
    removeButton("buttonBack");


    buttons("button", "buttonBack", "Menu");
    let buttonBackToMenu = document.getElementById("buttonBack");
    buttonBackToMenu.addEventListener("click", menuPrincipal);
}



// LE CHOIX DES PERSOS
function themePersoChoix() {
    removeButton("themeTerrain");
    removeButton("themePerso");
    removeButton("buttonBack");
    creerLesChoix()
   
    buttons("button", "buttonBack", "Menu");
    let buttonBackToMenu = document.getElementById("buttonBack");
    buttonBackToMenu.addEventListener("click", menuPrincipal);

}
function creerLesChoix(){
    let containerDesPersos = document.createElement("div");
    containerDesPersos.setAttribute("class", "containerDesPersos");
    container.append(containerDesPersos);
    for (let choix = 0; choix < 7; choix++) {
        let choixDesPersos = document.createElement("div");
        choixDesPersos.setAttribute("class", "ChoixDesPersos");
        choixDesPersos.setAttribute("id", `choix`+choix);
        choixDesPersos.addEventListener("click", ajoutDuAddEvent);
        containerDesPersos.append(choixDesPersos);
        // container.append(choixDesPersos);
    }
}
function ajoutDuAddEvent(){
    console.log(this);
    localStorageDuPerso(this.id)
    // bulle 
    let bulle = document.createElement("p");
    bulle.classList.add("bulle");
    bulle.innerHTML = "selected";
    this.append(bulle);
    setTimeout(function () { effacerBulle(); }, 1100);
    function effacerBulle() {
        let toutesLesBulles = document.getElementsByClassName("bulle");
        toutesLesBulles[0].parentNode.removeChild(bulle);
    }
}
 function localStorageDuPerso(nom) {
     console.log("a stocker " + nom);
     localStorage.setItem("playerStyle", nom);
 }
