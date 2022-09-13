

function enemiesCreation(x) {
    let enemie = document.createElement("div");
    enemie.setAttribute("id", x);
    enemie.setAttribute("class", "enemies");
    container.append(enemie);
}
// pour cacher les enemies des niveaux precedents
function none(y) {
    let element = document.getElementById(y);
    // element.style.display = "none";
    element.remove();
}

// verifier les colisions
function verifierSiColision(level, nom) {
    let player = document.getElementById("player");
    const playerStyle = window.getComputedStyle(player, null);
    let positionColumn = playerStyle.getPropertyValue("grid-column-start");
    let positionRow = playerStyle.getPropertyValue("grid-row-start");
    if (document.title == level) {
        let x = document.getElementById(nom);
        const xStyle = window.getComputedStyle(x, null);
        let positionColumnX = xStyle.getPropertyValue("grid-column-start");
        let positionRowX = xStyle.getPropertyValue("grid-row-start");
        if (positionColumn == positionColumnX && positionRow == positionRowX) {
            playerDestruction();
        }
    }
}