

// creation buttons
function InvisibleButtons(id, onclick) {
    let buttonDirection = document.createElement("input");
    buttonDirection.setAttribute("type", "button");
    buttonDirection.setAttribute("id", id);
    buttonDirection.setAttribute("onclick", onclick);
    buttonDirection.setAttribute("class", "buttonDirection");
    container.append(buttonDirection);
}
function creerLesButtonsInvisible() {
    InvisibleButtons("topButton", "toTop()");
    InvisibleButtons("rightButton", "toRight()");
    InvisibleButtons("botButton", "toBot()");
    InvisibleButtons("leftButton", "toLeft()");
}

// function des buttons
function toTop() {
    moveUp("player", 1);
    verifierSiColisionAll();
}

function toRight() {
    moveRight("player", 1);
    verifierSiColisionAll();
}

function toBot() {
    moveDown("player", 1);
    // enemie moves
    if (document.title == 2) {
        moveLeft("velo1", 1);
    }
    if (document.title == 3) {
        moveUp("viking1", 1);
    }
    // move velo 2, haut + gauche quand player va vers le bas
    if (document.title == 4) {
        moveUp("velo2", 1);
        moveLeft("velo2", 1);
    }
    if (document.title == 5) {
        moveUp("foot1", 1);
        moveLeft("foot1", 1);
        moveUp("foot2", 1);
        moveRight("foot2", 1);
    }
    if (document.title == 6) {
        moveLeft("foot3", 1);
        moveRight("foot4", 1);
    }
    if(document.title == 7){
        moveLeft("foot3", 1);
        moveRight("foot4", 1);
        moveUp("foot5", 2)
    }
    if (document.title == 8){
        moveUp("foot1", 1);
        moveLeft("foot1", 1);
        moveUp("foot2", 1);
        moveRight("foot2", 1);
        moveLeft("foot3", 1);
        moveRight("foot4", 1);
    }
    if (document.title == 9){
        moveUp("foot1", 1);
        moveLeft("foot1", 1);
        moveUp("foot2", 1);
        moveRight("foot2", 1);
        moveLeft("foot3", 1);
        moveRight("foot4", 1);
        moveUp("foot5", 1);
    }
    if(document.title == 10){
        moveLeft("velo1", 1);
        moveLeft("velo2", 1);
        moveLeft("velo3", 1);
        moveUp("viking1", 1);
        moveUp("viking2", 1);
        moveUp("viking3", 1);
    }
    // ESSAI LEVEL 1 
    if (document.title == "First Level") {

    }
    verifierSiColisionAll();
}

function toLeft() {
    moveLeft("player", 1);
    verifierSiColisionAll();
}


