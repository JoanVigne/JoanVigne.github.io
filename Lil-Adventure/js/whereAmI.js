// to put the good background, the decorations and obstacles


// appearing and disapearing arrow function
let notThisArrow = "none";
let north = `url("images/northArrow.png")`;
let east = `url("images/eastArrow.png")`;
let south = `url("images/southArrow.png")`;
let west = `url("images/westArrow.png")`;
function directionArrowsOnAndOff(north, east, south, west) {
    // can be "notThisArrow"
    northDirection.style.backgroundImage = north;
    eastDirection.style.backgroundImage = east;
    southDirection.style.backgroundImage = south;
    westDirection.style.backgroundImage = west;
}


function whereAmI() {
    let containerBGI = container.classList;
    playerStuff();
    xpAndLevelDisplay();
    let iAmHere = titleH1[0].innerHTML;
    // to delet the previous obstacles of the last visited map
    deletAllObstacle();
    deletAllPeople();
    // 
    switch (iAmHere) {
        // BEGGNING OF THE GAME { neighborhood }
        case "Home sweet home":
            player.style.gridColumn = 4;
            player.style.gridRow = 6;
            container.classList.replace(containerBGI, "homeSweetHome");
            obstacleCreation1("lightFromOutside", 4, 2);
            obstacleCreation1("tableMirror", 2, 4);
            obstacleCreation4("purpleBed", 4, 9);
            directionArrowsOnAndOff(north, notThisArrow, notThisArrow, notThisArrow);
            break;
        case "The Garden":
            container.classList.replace(containerBGI, "dryGround");
            obstacleCreation4("home", 3, 9);
            obstacleCreation1("pineTreeBlack", 5, 3);
            obstacleCreation1("leftTreeBlack", 2, 8);
            obstacleCreation4("bigTreeBlack", 5, 7);
            directionArrowsOnAndOff(north, east, south, west);
            break;
        case "The west Neighbor's":
            container.classList.replace(containerBGI, "dryGround");
            obstacleCreationSPAN("burningHouse", 2, 5, 2, 2);
            obstacleCreationSPAN("leftTreeBlack", 2, 2, 3, 3);
            bubble("player", "Oh damn !", 0, -1);
            directionArrowsOnAndOff(notThisArrow, east, notThisArrow, notThisArrow);
            break;
        case "The east Neighbor's":
            container.classList.replace(containerBGI, "dryGround");
            obstacleCreationSPAN("burningHouse", 4, 2, 3, 3);
            obstacleCreationSPAN("bigTreeBlack", 5, 8, 2, 2);
            bubble("player", "That's no good", 0, -1);
            directionArrowsOnAndOff(notThisArrow, notThisArrow, notThisArrow, west);
            break;
        case "The way to the village":
            container.classList.replace(containerBGI, "dryGround");
            obstacleCreation4("burningHouse", 5, 2);
            obstacleCreation4("burningHouse", 2, 8);
            obstacleCreation4("burningHouse", 5, 6);
            obstacleCreation4("pineTreeBlack", 2, 3);
            obstacleCreation1("leftTreeBlack", 3, 7);
            obstacleCreation1("bigTreeBlack", 6, 9);
            directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
            break;
        // THE VILLAGE
        case "The entrance of the village":
            container.classList.replace(containerBGI, "dryGround");
            obstacleCreation1("villageGate", 4, 4);
            obstacleCreation1("brickWall", 2, 2);
            obstacleCreation1("brickWall", 2, 3);
            obstacleCreation1("brickWall", 2, 4);
            obstacleCreation1("brickWall", 3, 4);
            obstacleCreation1("brickWall", 5, 4);
            obstacleCreation1("brickWall", 6, 4);
            obstacleCreation1("brickWall", 6, 3);
            obstacleCreation1("brickWall", 6, 2);
            creationOfPeople("basicGuard", 5, 5);
            creationOfPeople("basicGuard", 3, 5);
            break;
        case "The village south":
            container.classList.replace(containerBGI, "cityFloorHolly");
            obstacleCreationSPAN("cityRoad", 4, 2, 1, 9);
            obstacleCreationSPAN("cityRoad", 2, 4, 5, 1);
            obstacleCreation1("brickWall", 2, 10);
            obstacleCreation1("brickWall", 6, 10);
            obstacleCreation4("home", 2, 2);
            obstacleCreation4("home", 5, 2);
            directionArrowsOnAndOff(north, east, south, west);
            break;
        case "The village south-west":
            obstacleCreationSPAN("cityRoad", 5, 2, 1, 9);
            obstacleCreationSPAN("cityRoad", 5, 4, 2, 1);
            obstacleCreation4("home", 3, 2);
            obstacleCreationSPAN("home", 3, 4, 2, 3);
            obstacleCreationSPAN("home", 3, 7, 2, 3);
            obstacleCreationSPAN("brickWall", 3, 10, 2, 1);
            obstacleCreationSPAN("brickWall", 5, 10, 2, 1);
            obstacleCreationSPAN("brickWall", 2, 2, 1, 2);
            obstacleCreationSPAN("brickWall", 2, 4, 1, 2);
            obstacleCreationSPAN("brickWall", 2, 6, 1, 2);
            obstacleCreationSPAN("brickWall", 2, 8, 1, 3);
            // obstacleCreation1("brownWall", col, row, spanCol, spanRow);
            directionArrowsOnAndOff(north, east, notThisArrow, notThisArrow);
            break;
        case "The village west":
            obstacleCreationSPAN("cityRoad", 5, 5, 1, 6);
            obstacleCreationSPAN("cityRoad", 5, 5, 2, 1);
            obstacleCreation4("home", 3, 3);
            obstacleCreation4("home", 5, 3);
            obstacleCreationSPAN("brickWall", 3, 2, 2, 1);
            obstacleCreationSPAN("brickWall", 5, 2, 2, 1);
            obstacleCreationSPAN("brickWall", 2, 2, 1, 2);
            obstacleCreationSPAN("brickWall", 2, 4, 1, 2);
            obstacleCreationSPAN("brickWall", 2, 6, 1, 2);
            obstacleCreationSPAN("brickWall", 2, 8, 1, 3);
            directionArrowsOnAndOff(notThisArrow, east, south, notThisArrow);
            break;
        case "The village south-east":
            obstacleCreationSPAN("cityRoad", 2, 3, 1, 8);
            obstacleCreationSPAN("cityRoad", 3, 3, 2, 1);
            obstacleCreationSPAN("cityRoad", 4, 2, 1, 1);
            obstacleCreationSPAN("home", 3, 7, 3, 3);
            obstacleCreationSPAN("home", 3, 4, 3, 3);
            // obstacleCreation4("home", 3, 6);
            obstacleCreationSPAN("brickWall", 2, 10, 2, 1);
            obstacleCreationSPAN("brickWall", 4, 10, 2, 1);
            obstacleCreationSPAN("brickWall", 6, 2, 1, 2);
            obstacleCreationSPAN("brickWall", 6, 4, 1, 2);
            obstacleCreationSPAN("brickWall", 6, 6, 1, 2);
            obstacleCreationSPAN("brickWall", 6, 8, 1, 3);
            directionArrowsOnAndOff(north, notThisArrow, notThisArrow, west);
            break;
        case "The village east":
            obstacleCreationSPAN("cityRoad", 4, 9, 1, 2);
            obstacleCreationSPAN("cityRoad", 3, 9, 1, 1);
            obstacleCreationSPAN("cityRoad", 3, 3, 1, 7);
            obstacleCreationSPAN("cityRoad", 2, 6, 2, 1);
            obstacleCreationSPAN("home", 4, 3, 2, 2);
            obstacleCreationSPAN("home", 4, 5, 2, 2);
            obstacleCreationSPAN("home", 4, 7, 2, 2);
            obstacleCreationSPAN("brickWall", 2, 2, 2, 1);
            obstacleCreationSPAN("brickWall", 4, 2, 2, 1);
            obstacleCreationSPAN("brickWall", 6, 2, 1, 2);
            obstacleCreationSPAN("brickWall", 6, 4, 1, 2);
            obstacleCreationSPAN("brickWall", 6, 6, 1, 2);
            obstacleCreationSPAN("brickWall", 6, 8, 1, 3);
            directionArrowsOnAndOff(notThisArrow, notThisArrow, south, west);
            break;
        case "The village center":
            obstacleCreation1("brickWall", 2, 2);
            obstacleCreation1("brickWall", 6, 2);
            obstacleCreationSPAN("cityHall2", 3, 3, 3, 5);
            creationOfPeople("basicGuard", 3, 7);
            creationOfPeople("basicGuard", 5, 7);
            creationOfPeople("farmerMan", 3, 10);
            creationOfPeople("farmerWoman", 4, 10);
            creationOfPeople("farmerBoy", 5, 10);
            creationOfPeople("detective", 6, 10);
            creationOfPeople("goodMan", 6, 9);
            creationOfPeople("oldWoman", 6, 7);
            creationOfPeople("priest", 2, 7);
            creationOfPeople("girl", 2, 8);
            creationOfPeople("mayor", 4, 7);
            creationOfPeople("rogue", 3, 9);
            directionArrowsOnAndOff(north, east, south, west);
            theVillageCenterMessage();
            break;
        case "The village north":
            container.classList.replace(containerBGI, "cityFloorHolly");
            obstacleCreationSPAN("brickWall", 6, 2, 1, 2);
            obstacleCreationSPAN("brickWall", 6, 4, 1, 2);
            obstacleCreationSPAN("brickWall", 6, 6, 1, 2);
            obstacleCreationSPAN("brickWall", 6, 8, 1, 3);
            obstacleCreationSPAN("brickWall", 2, 2, 1, 2);
            obstacleCreationSPAN("brickWall", 2, 4, 1, 2);
            obstacleCreationSPAN("brickWall", 2, 6, 1, 2);
            obstacleCreationSPAN("brickWall", 2, 8, 1, 3);
            directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
            break;
        // END OF THE VILLAGE
        case "The north entrance of the village":
            container.classList.replace(containerBGI, "dryGround");
            obstacleCreation1("villageGate", 4, 8);
            obstacleCreation1("brickWall", 2, 10);
            obstacleCreation1("brickWall", 2, 9);
            obstacleCreation1("brickWall", 2, 8);
            obstacleCreation1("brickWall", 3, 8);
            obstacleCreation1("brickWall", 5, 8);
            obstacleCreation1("brickWall", 6, 8);
            obstacleCreation1("brickWall", 6, 9);
            obstacleCreation1("brickWall", 6, 10);
            creationOfPeople("basicGuard", 5, 7);
            bubble("basicGuard", "Good luck!", 0, -1);
            creationOfPeople("basicGuard", 3, 7);
            directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
            break;
        case "The way from the village":
            directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
            break;
        case "The crossroad of the north":
            container.classList.replace(containerBGI, "dryGround");
            directionArrowsOnAndOff(north, east, south, west);
            obstacleCreation1("dryGround", 4, 10);
            obstacleCreation1("dryGround", 4, 9);
            obstacleCreation1("dryGround", 4, 8);
            obstacleCreation1("dryGround", 4, 7);
            obstacleCreation1("dryGround", 4, 6);
            obstacleCreation1("dryGround", 4, 5);
            obstacleCreation1("dryGround", 4, 4);
            obstacleCreation1("dryGround", 4, 3);
            obstacleCreation1("dryGround", 4, 2);
            obstacleCreation1("dryGround", 2, 6);
            obstacleCreation1("dryGround", 3, 6);
            obstacleCreation1("dryGround", 5, 6);
            obstacleCreation1("dryGround", 6, 6);
            //
            obstacleCreation1("sign", 3, 5);
            obstacleCreationSPAN("burningHouse", 5, 4, 2, 2);
            break;
        // THE NORTH
        case "The north of the crossroad":
            container.classList.replace(containerBGI, "dryGround");
            directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
            obstacleCreation1("dryGround", 4, 10);
            obstacleCreation1("dryGround", 4, 9);
            obstacleCreation1("dryGround", 4, 8);
            obstacleCreation1("dryGround", 4, 7);
            obstacleCreation1("dryGround", 4, 6);
            obstacleCreation1("dryGround", 4, 5);
            obstacleCreation1("dryGround", 4, 4);
            obstacleCreation1("dryGround", 4, 3);
            obstacleCreation1("dryGround", 4, 2);
            //
            obstacleCreationSPAN("burningHouse", 2, 4, 2, 2);
            obstacleCreation4("pineTreeBlack", 5, 3);
            obstacleCreation1("leftTreeBlack", 3, 7);
            obstacleCreation1("bigTreeBlack", 6, 9);
            break;
        case "The army roadblock":
            directionArrowsOnAndOff(notThisArrow, notThisArrow, south, notThisArrow);
            creationOfPeople("basicGuard", 2, 2);
            creationOfPeople("basicGuard", 3, 2);
            creationOfPeople("basicGuard", 4, 2);
            creationOfPeople("basicGuard", 5, 2);
            creationOfPeople("basicGuard", 6, 2);
            bubble("basicGuard", "Back off", 1, 1);
            break;
        // THE WEST OF THE CROSSROAD
        case "The west of the crossroad":
            container.classList.replace(containerBGI, "dryGround");
            directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
            obstacleCreation4("pineTreeBlack", 5, 3);
            obstacleCreation4("palmTreeBlack", 3, 8);
            obstacleCreation4("palmTreeBlack", 5, 9);
            obstacleCreation1("lightFromOutside", 2, 4);
            obstacleCreation1("lightFromOutside", 2, 5);
            obstacleCreation1("lightFromOutside", 2, 6);
            obstacleCreation1("lightFromOutside", 2, 7);
            obstacleCreation1("lightFromOutside", 2, 8);
            obstacleCreation1("grassClose", 2, 2);
            obstacleCreation1("grassClose", 2, 3);
            obstacleCreation1("grassClose", 2, 9);
            obstacleCreation1("grassClose", 2, 10);
            break;
        case "The land of the local master":
            container.classList.replace(containerBGI, "grass");
            directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
            obstacleCreation4("palmTreeFresh", 2, 2);
            obstacleCreation4("palmTreeFresh", 2, 9);
            obstacleCreation4("palmTreeFresh", 5, 2);
            obstacleCreation4("palmTreeFresh", 5, 9);

            break;
        case "The local master's garden":
            directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
            obstacleCreation1("pinkFlowers", 2, 2);
            obstacleCreation1("pinkFlowers", 3, 2);
            obstacleCreation1("pinkFlowers", 4, 2);
            obstacleCreation1("pinkFlowers", 5, 2);
            obstacleCreation1("pinkFlowers", 6, 2);
            obstacleCreation1("pinkFlowers", 2, 10);
            obstacleCreation1("pinkFlowers", 3, 10);
            obstacleCreation1("pinkFlowers", 4, 10);
            obstacleCreation1("pinkFlowers", 5, 10);
            obstacleCreation1("pinkFlowers", 6, 10);

            obstacleCreation1("purpleFlowers", 2, 3);
            obstacleCreation1("purpleFlowers", 2, 4);
            obstacleCreation1("purpleFlowers", 3, 3);
            obstacleCreation1("purpleFlowers", 3, 4);

            obstacleCreation1("redFlowers", 2, 8);
            obstacleCreation1("redFlowers", 2, 9);
            obstacleCreation1("redFlowers", 3, 8);
            obstacleCreation1("redFlowers", 3, 9);

            obstacleCreation1("yellowFlowers", 4, 3);
            obstacleCreation1("yellowFlowers", 4, 4);

            obstacleCreation1("yellowFlowers", 4, 8);
            obstacleCreation1("yellowFlowers", 4, 9);

            obstacleCreation1("cityRoad", 2, 6);
            obstacleCreation1("cityRoad", 3, 6);
            obstacleCreation1("cityRoad", 4, 6);
            obstacleCreation1("cityRoad", 5, 6);
            obstacleCreation1("cityRoad", 6, 6);


            break;
        case "The local master's house":
            directionArrowsOnAndOff(notThisArrow, east, notThisArrow, notThisArrow);
            container.classList.replace(containerBGI, "grass");
            obstacleCreationSPAN("masterHouse", 3, 2, 3, 3);

            obstacleCreation1("purpleFlowers", 2, 2);
            obstacleCreation1("purpleFlowers", 2, 3);
            obstacleCreation1("purpleFlowers", 6, 2);
            obstacleCreation1("purpleFlowers", 6, 3);

            obstacleCreation1("cityRoad", 4, 5);
            obstacleCreation1("cityRoad", 4, 6);
            obstacleCreation1("cityRoad", 5, 6);
            obstacleCreation1("cityRoad", 6, 6);
            localMasterPlace()
            break;
        case "The local master":
            container.classList.replace(containerBGI, "homeSweetHome");
            obstacleCreationSPAN("purpleBed", 4, 5, 3, 3)
            creationOfPeople("smallVence", 5, 5);
            // scenarios.js
            let localMasterScenario = localStorage.getItem("localMaster");
            if (localMasterScenario == 4) {
                appearDirections()
                directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
            }
            else {
                localMasterPlace();
            }
            break;
        case "Tunnel entrance":
            container.classList.replace(containerBGI, "tunnelEntrance");
            directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
            obstacleCreation1("barrel", 3, 3);
            obstacleCreation1("barrel", 5, 7);
            obstacleCreation1("barrel", 5, 8);
            obstacleCreation1("barrel", 6, 7);
            obstacleCreation1("barrel", 2, 9);
            obstacleCreation1("barrel", 6, 8);
            break;
        case "Tunnel first":
            container.classList.replace(containerBGI, "tunnel");
            obstacleCreation1("stones", 6, 8);
            obstacleCreation1("stones", 6, 9);
            obstacleCreation1("stones", 3, 5);
            obstacleCreation1("stones", 4, 5);
            obstacleCreation1("stones", 3, 6);
            obstacleCreation1("stones", 4, 6);
            obstacleCreation1("stones", 5, 5);

            obstacleCreation1("spiderWeb", 2, 2);
            obstacleCreation1("spiderWeb", 6, 2);
            break;
        case "Tunnel second":
            container.classList.replace(containerBGI, "tunnel");
            obstacleCreation1("stones", 6, 10);
            obstacleCreation1("stones", 5, 10);
            obstacleCreation1("stones", 3, 10);

            obstacleCreation1("spiderWeb", 2, 2);
            obstacleCreation1("spiderWeb", 2, 3);
            obstacleCreation1("spiderWeb", 2, 4);
            obstacleCreation1("spiderWeb", 2, 5);
            obstacleCreation1("spiderWeb", 3, 4);
            obstacleCreation1("spiderWeb", 3, 5);
            obstacleCreation1("spiderWeb", 3, 6);
            obstacleCreation1("spiderWeb", 4, 4);
            obstacleCreation1("spiderWeb", 4, 5);
            obstacleCreation1("spiderWeb", 4, 6);
            obstacleCreation1("spiderWeb", 5, 5);
            obstacleCreation1("spiderWeb", 6, 5);
            obstacleCreation1("spiderWeb", 5, 6);
            obstacleCreation1("spiderWeb", 6, 5);
            break;
        case "Tunnel third":
            container.classList.replace(containerBGI, "tunnel");
            obstacleCreation1("spiderWeb", 2, 2);
            obstacleCreation1("spiderWeb", 2, 3);
            obstacleCreation1("spiderWeb", 2, 4);
            obstacleCreation1("spiderWeb", 2, 5);
            obstacleCreation1("spiderWeb", 3, 4);
            obstacleCreation1("spiderWeb", 3, 5);
            obstacleCreation1("spiderWeb", 3, 6);
            obstacleCreation1("spiderWeb", 4, 4);
            obstacleCreation1("spiderWeb", 4, 5);
            obstacleCreation1("spiderWeb", 4, 6);
            obstacleCreation1("spiderWeb", 5, 5);
            obstacleCreation1("spiderWeb", 6, 5);
            obstacleCreation1("spiderWeb", 5, 6);
            obstacleCreation1("spiderWeb", 6, 5);
            break;
        case "Tunnel fourth":
            container.classList.replace(containerBGI, "tunnel");
            break;
        case "Tunnel exit":
            container.classList.replace(containerBGI, "tunnelEntrance");
            directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
            break;
        case "Menu":

            break;
        case "Menu":

            break;
        case "Menu":

            break;
        default:
            break;
    }

}

