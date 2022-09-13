

// LE PLAYER
function playerCreation() {
    let player = document.createElement("div");
    player.setAttribute("id", "player");
    let playerStyle = localStorage.getItem("playerStyle");
    if(playerStyle !== null) {
        player.setAttribute("class", playerStyle);
    }
    else {
        player.setAttribute("class", "choix0");
    }
    container.append(player);
}

function playerLevelUp() {
    const playerStyle = window.getComputedStyle(player, null);
    let playerSize = playerStyle.getPropertyValue("background-size");
    if (playerSize == "auto") {
        player.style.backgroundSize = "contain";
        bulle("+1 vie")
    }
    else if (playerSize == "contain") {
        player.classList.add("borderLife");
        bulle("+1 vie")
    }
    else {
        bulle("tro costo la");
    }
}
function playerDestruction() {
    const playerStyle = window.getComputedStyle(player, null);
    let playerSize = playerStyle.getPropertyValue("background-size");
    if (player.classList == "borderLife") {
        player.style.backgroundSize = "contain";
        player.classList.remove("borderLife");
        bulle("Meh");
        
    }
    else if (playerSize == "contain") {
        player.style.backgroundSize = "auto";
        player.classList.remove("borderLife");
        bulle("last chance");
    }
    else {
        bulle("ouch");
        promptMaison("PERDU");
    }
}

// BULLES MESSAGES
function bulle(message) {
    let bulle = document.createElement("p");
    bulle.classList.add("bulle");
    bulle.innerHTML = message;
    player.append(bulle);
    setTimeout(function () { effacerBulle(); }, 1100);
    function effacerBulle() {
        let toutesLesBulles = document.getElementsByClassName("bulle");
        toutesLesBulles[0].parentNode.removeChild(bulle);
    }
}