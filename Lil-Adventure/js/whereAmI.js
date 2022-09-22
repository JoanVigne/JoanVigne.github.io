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

    let iAmHere = titleH1[0].innerHTML;
    // to delet the previous obstacles of the last visited map
    deletAllObstacle();
    deletAllPeople();
    switch (iAmHere) {
        case "Menu":
            container.classList.add("menuImg");
            break;

        // BEGGNING OF THE GAME { neighborhood }
        case "Home sweet home":
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
            bubble("Oh damn !", "player");
            directionArrowsOnAndOff(notThisArrow, east, notThisArrow, notThisArrow);
            break;
        case "The east Neighbor's":
            container.classList.replace(containerBGI, "dryGround");
            obstacleCreationSPAN("burningHouse", 4, 2, 3, 3);
            obstacleCreationSPAN("bigTreeBlack", 5, 8, 2, 2);
            bubble("That's no good", "player");
            directionArrowsOnAndOff(notThisArrow, notThisArrow, notThisArrow, west);
            break;
        case "The way to the village":
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
            bubble("Good luck!", "basicGuard");
            creationOfPeople("basicGuard", 3, 7);
            directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
            break;
        case "The way from the village":
            directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
            break;
        case "The crossroad of the north":
            directionArrowsOnAndOff(north, east, south, west);

            break;
        case "Menu":

            break;
        case "Menu":

            break;
        default:
            break;
    }

}

