function playerPositionEvent() {
    let position = player.style.gridArea;
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    switch (titleH1[0].innerHTML) {
        case "The entrance of the village":
            if (position == "5 / 2 / auto / auto" || position == "5 / 6 / auto / auto" || position == "5 / 3 / auto / auto" || position == "5 / 5 / auto / auto") {
                bubble("basicGuard", "Back off", -1, 0);
                player.style.gridRowStart = numberRow += 1;
            }
            if (position == "6 / 3 / auto / auto" || position == "6 / 5 / auto / auto") {
                bubble("basicGuard", "?", -1, 0);
            }
            if (position == "5 / 4 / auto / auto") {
                homeMadeAlert("Hey you! stop !", " Who are you ?? <br>.... Oh hey bro, you can pass of course, we don't know what happend but everything is dry around..");
                player.style.gridRowStart = numberRow -= 1;
            }
            break;
        case "The village center":
            if (position == "8 / 6 / auto / auto") {
                confirmMessage("Gran-ma: Dear Lord, your t-shirt is dirty, i can't let you wear this", "Accepting new T-shirt", () => { modifyTop('black-T-shirt'); promptBox.remove(); })
            }
            if (position == "8 / 4 / auto / auto") {
                bubble("mayor", "Good luck son!", 0, -1);
            }
            break;
        case "The local master's garden":
            if (position == "3 / 4 / auto / auto" || position == "4 / 4 / auto / auto" || position == "8 / 4 / auto / auto" || position == "9 / 4 / auto / auto") {
                bubble("player", "i got a sunflower", 0, -1);
                localStorage.setItem("sunFlower", "true");
            }
            break;
        case "The crossroad of the north":
            if (position == "6 / 3 / auto / auto") {
                setTimeout(() => {
                    homeMadeAlert("Directions", 'North: Flaketown, and the "Dark Montains"<br><br>South: "Hometown" Village<br><br>East: The "Old Castle"<br><br>West: The local master');
                }, 300);
            }
            break;
        case "The army roadblock":
            if (row == 2) {
                theArmyRoadBlockMessage();
                player.style.gridRowStart = 5;
                setTimeout(() => {
                    bubble("player", "omg!", 0, -1);

                }, 1000);

            }
            break;
        case "The local master's house":
            if (position == "4 / 4 / auto / auto") {
                titleH1[0].innerHTML = `The local master`;
                player.style.gridRowStart = 10;
                whereAmI();
            }
            break;
        case "Tunnel second":
            if (numberRow == 5) {
                homeMadeAlert("Ksskskskss", "wtf this spider is huge !");
                setTimeout(() => {
                    detailEnemy(enemyArray[0], "ksksksks");

                }, 500);
            }
            break;
        case "Tunnel third":
            if (position == "4 / 4 / auto / auto" || position == "6 / 5 / auto / auto" || position == "2 / 4 / auto / auto") {
                detailEnemy(enemyArray[0], "ksksksks");
            }
            break;
        case "Tunnel fourth":
            if (numberRow == 6) {
                let spiderQueenAlive = localStorage.getItem("spiderQueen");
                if (spiderQueenAlive == 'dead') {
                    homeMadeAlert("yerk", "The giant body of the spider is smelling strong now")
                }
                else {
                    detailEnemy(enemyArray[1], "KSKSKSS MY BABIES ARE DEAD");
                }
            }
            break;
        case "The Graveyard entrance":
            if (numberColumn == 5) {
                if (numberRow == 5 || numberRow == 6 || numberRow == 7) {
                    confirmMessage("This is the graveyard of the northen, do you want to enter?", "let's go!", enterGraveYard);
                    function enterGraveYard() {
                        TP("The west of the graveyard");
                        closePromtBox();
                        player.style.gridColumnStart = 2;
                    }
                }
                else {
                    player.style.gridColumnStart = 4;
                    bubble("player", "Big slippery wall!", -1, -1);
                }
            }
            break;
        case "The north of the graveyard":
            if (position == "5 / 4 / auto / auto") {
                let skeletonAlive = localStorage.getItem("skeleton");
                if (skeletonAlive == 'dead') {
                    bubble("player", "Just bones", 1, 1);
                }
                else {
                    confirmMessage("You hear a sound inside this shiny tomb, do you want to open it?", "I'm curious...", () => detailEnemy(enemyArray[3], "My tomb, your death.."));
                }
            }
            break;
        case "The exit of the graveyard":
            if (numberColumn == 4) {
                bubble("player", "gate destroyed?", -1, -1);
            }
            break;
        case "The northen crossroad":
            if (position == "6 / 3 / auto / auto") {
                setTimeout(() => {
                    homeMadeAlert("Directions", 'North: Flaketown, and the "Dark Montains"<br><br>South: "Hometown" Village<br><br>West: The cemetery');
                }, 300);
            }
            let leatherGuardAlive = localStorage.getItem("leatherGuard");
            if (leatherGuardAlive !== 'dead') {
                // orc 
                obstacleCreation1("orc-Leather", 6, 10);
                bubble("orc-Leather", "zZzzz", 0, -1)
                if (numberRow == 8) {
                    bubble("orc-Leather", "???", 0, -1);
                }
                if (numberRow == 9) {
                    bubble("orc-Leather", "human???", 0, -1);
                    setTimeout(() => {
                        detailEnemy(enemyArray[4], "Me smash human");
                    }, 500);
                }
            }
            break;
        case "The front":
            if (numberRow == 4) {
                homeMadeAlert("woaw", "You re cocky... They all jump on you and cut your head off...");
                setTimeout(() => {
                    playerDeath();
                }, 3000);
            }
            break;
        case "The orc camp":
            if (position == "9 / 2 / auto / auto" || position == "8 / 5 / auto / auto") {
                bubble("player", "fire burn.. [-1 hp]", 0, 1);
                addingHp(-1);

            }
            break;
        default:
            break;
    }
}