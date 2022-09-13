

// touches directionnelles
document.onkeydown = checkKey;
function checkKey(e) {
    // onkeydown
    e = e || window.event;
    if (e.keyCode == '38') {
        moveUp("player", 1);
    }
    else if (e.keyCode == '40') {
            // player move
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
            if (document.title == 7){
                moveLeft("foot3", 1);
                moveRight("foot4", 1);
                moveUp("foot5", 2);
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
                // ESSAIS
            }
    }
    else if (e.keyCode == '37') {
         // player move
        moveLeft("player", 1);
    }
    else if (e.keyCode == '39') {
         // player move
        moveRight("player", 1);
    }
    verifierSiColisionAll();
}
function verifierSiColisionAll(){
    verifierSiColision(2, "velo1");

    verifierSiColision(3, "viking1");

    verifierSiColision(4, "velo2");

    verifierSiColision(5, "foot1");
    verifierSiColision(5, "foot2");

    verifierSiColision(6, "foot3");
    verifierSiColision(6, "foot4");

    verifierSiColision(7, "foot3");
    verifierSiColision(7, "foot4");
    verifierSiColision(7, "foot5");

    verifierSiColision(8, "foot1");
    verifierSiColision(8, "foot2");
    verifierSiColision(8, "foot3");
    verifierSiColision(8, "foot4");

    verifierSiColision(9, "foot1");
    verifierSiColision(9, "foot2");
    verifierSiColision(9, "foot3");
    verifierSiColision(9, "foot4");
    verifierSiColision(9, "foot4");

    verifierSiColision(10, "velo1");
    verifierSiColision(10, "velo2");
    verifierSiColision(10, "viking1");
    verifierSiColision(10, "viking2");
    verifierSiColision(10, "viking3");
    
}


// HAUT DROITE BAS GAUCHE
function moveUp(name, up) {
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionRowEnemi = styleEnemi.getPropertyValue("grid-row-start");
    if (positionRowEnemi <= 1) {
        if (enemi.id == "player") {
            bulle("trop haut");
        }
        else {
            enemi.style.gridRowStart = 7;
        }
    }
    else {
        enemi.style.gridRowStart = Number(positionRowEnemi) - up;
    }
}
function moveRight(name, right) {
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionColumnEnemi = styleEnemi.getPropertyValue("grid-column-start");
    if (positionColumnEnemi == 4) {
        if (enemi.id == "player") {
            bulle("almost out");
        }
        else {
            enemi.style.gridColumnStart = 1;
        }

    }
    else {
        enemi.style.gridColumnStart = Number(positionColumnEnemi) + right;
    }
}
function moveDown(name, down) {
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionRowEnemi = styleEnemi.getPropertyValue("grid-row-start");
    if (positionRowEnemi == 6 && enemi.id == "player") {
        // player move
        enemi.style.gridRowStart = down;
        bulle("TOUCH DOWN");
        setTimeout(function () { touchDowm(); }, 1100);;
    }
    if (positionRowEnemi == 7) {
        enemi.style.gridRowStart = 1;
    }
    else {
        enemi.style.gridRowStart = Number(positionRowEnemi) + down;
    }

}
function moveLeft(name, left) {
    let enemi = document.getElementById(name);
    const styleEnemi = window.getComputedStyle(enemi, null);
    let positionColumnEnemi = styleEnemi.getPropertyValue("grid-column-start");
    if (positionColumnEnemi == 1) {
        if(enemi.id == "player"){
            bulle("almost out");
        }
        else {
            enemi.style.gridColumnStart = 4;
        }
    }
    else {
        enemi.style.gridColumnStart = Number(positionColumnEnemi) - left;
    }
}