// in this document you can :
// - going from a map to an other
// 

let northDirection = document.createElement("div");
northDirection.setAttribute("id", "northDirection");
let eastDirection = document.createElement("div");
eastDirection.setAttribute("id", "eastDirection");
let southDirection = document.createElement("div");
southDirection.setAttribute("id", "southDirection");
let westDirection = document.createElement("div");
westDirection.setAttribute("id", "westDirection");

function appearDirections() {
    container.append(northDirection);
    northDirection.addEventListener("click", moveNorth);
    container.append(eastDirection);
    eastDirection.addEventListener("click", moveEast);
    container.append(southDirection);
    southDirection.addEventListener("click", moveSouth);
    container.append(westDirection);
    westDirection.addEventListener("click", moveWest);
}
function directionDisappear() {
    northDirection.remove();
    eastDirection.remove();
    southDirection.remove();
    westDirection.remove();
}

// CHANGE MAP

function toTheNorth() {
    let iAmHere = titleH1[0].innerHTML;
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    // if the charactere is on this this case of the grid and go up
    if (numberRow == 2) {
        switch (iAmHere) {
            // BEGGNING OF THE GAME { neighborhood }
            case "Home sweet home":
                {
                    if (numberColumn == 4) {
                        titleH1[0].innerHTML = `The Garden`;
                        player.style.gridRowStart = 9;
                        homeMadeAlert("What The Hell !!!",
                            "My garden was green and full of life, what happend ?? My trees are dead and my lands are as dry as bones");
                    }
                }
                break;
            case "The Garden":
                titleH1[0].innerHTML = `The way to the village`;
                player.style.gridRowStart = 10;
                bubble("Here too?!", "player");
                break;
            case "The way to the village":
                titleH1[0].innerHTML = `The entrance of the village`;
                player.style.gridRowStart = 10;
                break;
            // THE VILLAGE
            case "The entrance of the village":
                titleH1[0].innerHTML = `The village south`;
                player.style.gridRowStart = 10;
                break;
            case "The village south":
                titleH1[0].innerHTML = `The village center`;
                player.style.gridColumnStart = 4;
                player.style.gridRowStart = 9;
                break;
            case "The village center":
                titleH1[0].innerHTML = `The village north`;
                player.style.gridRowStart = 10;
                break;
            case "The village south-west":
                titleH1[0].innerHTML = `The village west`;
                player.style.gridRowStart = 10;
                break;
            case "The village south-east":
                titleH1[0].innerHTML = `The village east`;
                player.style.gridRowStart = 10;
                break;
            case "The village north":
                titleH1[0].innerHTML = `The north entrance of the village`;
                player.style.gridRowStart = 10;
                break;
            // END OF THE VILLAGE
            case "The north entrance of the village":
                titleH1[0].innerHTML = `The way from the village`;
                player.style.gridRowStart = 10;
                break;
            case "The way from the village":
                titleH1[0].innerHTML = `The crossroad of the north`;
                player.style.gridRowStart = 10;
                break;
            // THE CROSSROAD
            case "The crossroad of the north":
                titleH1[0].innerHTML = `The north of the crossroad`;
                player.style.gridRowStart = 10;
                break;
            case "The north of the crossroad":
                titleH1[0].innerHTML = `The army roadblock`;
                player.style.gridRowStart = 10;
                break;
            case "The army roadblock":
                theArmyRoadBlockMessage();
                player.style.gridRowStart = 4;
                break;
            case "The local master":
                titleH1[0].innerHTML = `Tunnel entrance`;
                player.style.gridRowStart = 10;
                bubble("It's so dark!", "player");
                break;
            case "Tunnel entrance":
                titleH1[0].innerHTML = `Tunnel first`;
                player.style.gridRowStart = 10;
                break;
            case "Tunnel first":
                titleH1[0].innerHTML = `Tunnel second`;
                player.style.gridRowStart = 10;
                break;
            case "Tunnel second":
                titleH1[0].innerHTML = `Tunnel third`;
                player.style.gridRowStart = 10;
                break;
            case "Tunnel third":
                titleH1[0].innerHTML = `Tunnel fourth`;
                player.style.gridRowStart = 10;
                break;
            case "Tunnel fourth":
                titleH1[0].innerHTML = `Tunnel exit`;
                player.style.gridRowStart = 10;
                break;
            default:
                break;
        }
        whereAmI();
    }
}
function toTheEast() {
    let iAmHere = titleH1[0].innerHTML;
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    if (numberColumn == 6) {
        switch (iAmHere) {
            // BEGGNING OF THE GAME { neighborhood }
            case "Home sweet home":
                bubble("I'll paint that", "player");
                break;
            case "The Garden":
                titleH1[0].innerHTML = `The east Neighbor's`;
                player.style.gridColumnStart = 2;
                break;
            case "The west Neighbor's":
                // GOING BACK FROM THE DEAD END
                titleH1[0].innerHTML = `The Garden`;
                player.style.gridColumnStart = 2;
                break;
            // VILLAGE
            case "The village south":
                titleH1[0].innerHTML = `The village south-east`;
                player.style.gridColumnStart = 2;
                break;
            case "The village center":
                titleH1[0].innerHTML = `The village east`;
                player.style.gridColumnStart = 2;
                break;
            case "The village south-west":
                titleH1[0].innerHTML = `The village south`;
                player.style.gridColumnStart = 2;
                break;
            case "The village west":
                titleH1[0].innerHTML = `The village center`;
                player.style.gridColumnStart = 4;
                player.style.gridRowStart = 9;
                break;
            case "The west of the crossroad":
                titleH1[0].innerHTML = `The crossroad of the north`;
                player.style.gridColumnStart = 2;
                break;
            case "The land of the local master":
                titleH1[0].innerHTML = `The west of the crossroad`;
                player.style.gridColumnStart = 2;
                break;
            case "The local master's garden":
                titleH1[0].innerHTML = `The land of the local master`;
                player.style.gridColumnStart = 2;
                break;
            case "The local master's house":
                titleH1[0].innerHTML = `The local master's garden`;
                player.style.gridColumnStart = 2;
                break;
            default:
                break;
        }
        whereAmI();
    }
}
function toTheSouth() {
    let iAmHere = titleH1[0].innerHTML;

    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    if (numberRow == 10) {
        switch (iAmHere) {
            // BEGGNING OF THE GAME { neighborhood }
            case "Home sweet home":
                bubble("It is a wall", "player");
                break;
            case "The Garden":
                if (numberColumn == 4) {
                    titleH1[0].innerHTML = `Home sweet home`;
                    player.style.gridRowStart = 2;
                    bubble("Nothing to do here...", "player")
                }
                break;
            case "The way to the village":
                titleH1[0].innerHTML = `The Garden`;
                player.style.gridRowStart = 2;
                break;
            case "The entrance of the village":
                titleH1[0].innerHTML = `The way to the village`;
                player.style.gridRowStart = 2;
                break;
            case "The village south":
                titleH1[0].innerHTML = `The entrance of the village`;
                player.style.gridRowStart = 2;
                break;
            case "The village center":
                titleH1[0].innerHTML = `The village south`;
                player.style.gridRowStart = 2;
                break;
            case "The village north":
                titleH1[0].innerHTML = `The village center`;
                player.style.gridRowStart = 2;
                break;
            case "The village west":
                titleH1[0].innerHTML = `The village south-west`;
                player.style.gridRowStart = 2;
                break;
            case "The village east":
                titleH1[0].innerHTML = `The village south-east`;
                player.style.gridRowStart = 2;
                break;

            case "The north entrance of the village":
                titleH1[0].innerHTML = `The village north`;
                player.style.gridRowStart = 2;
                break;
            case "The way from the village":
                titleH1[0].innerHTML = `The north entrance of the village`;
                player.style.gridRowStart = 2;
                break;
            // THE CROSSROAD
            case "The crossroad of the north":
                titleH1[0].innerHTML = `The way from the village`;
                player.style.gridRowStart = 2;
                break;
            case "The north of the crossroad":
                titleH1[0].innerHTML = `The crossroad of the north`;
                player.style.gridRowStart = 2;
                break;
            case "The army roadblock":
                titleH1[0].innerHTML = `The north of the crossroad`;
                player.style.gridRowStart = 2;
                break;
            // MASTER HOUSE
            case "The local master":
                titleH1[0].innerHTML = `The local master's house`;
                player.style.gridRowStart = 5;
                break;
            case "Tunnel entrance":
                titleH1[0].innerHTML = `The local master`;
                player.style.gridRowStart = 5;
                break;
            case "Tunnel first":
                titleH1[0].innerHTML = `Tunnel entrance`;
                player.style.gridRowStart = 5;
                break;
            case "Tunnel second":
                titleH1[0].innerHTML = `Tunnel first`;
                player.style.gridRowStart = 5;
                break;
            case "Tunnel third":
                titleH1[0].innerHTML = `Tunnel second`;
                player.style.gridRowStart = 5;
                break;
            case "Tunnel fourth":
                titleH1[0].innerHTML = `Tunnel third`;
                player.style.gridRowStart = 5;
                break;
            case "Tunnel exit":
                titleH1[0].innerHTML = `Tunnel fourth`;
                player.style.gridRowStart = 5;
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
        whereAmI();
    }
}

function toTheWest() {
    let iAmHere = titleH1[0].innerHTML;
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    if (numberColumn == 2) {
        switch (iAmHere) {
            // BEGGNING OF THE GAME { neighborhood }
            case "Home sweet home":
                bubble("It is a wall", "player");
                break;
            case "The Garden": // dead-end
                titleH1[0].innerHTML = `The west Neighbor's`;
                player.style.gridColumnStart = 6;
                break;
            case "The east Neighbor's": // from a dead-end
                titleH1[0].innerHTML = `The Garden`;
                player.style.gridColumnStart = 6;
                break;
            // THE VILLAGE 
            case "The village south":
                titleH1[0].innerHTML = `The village south-west`;
                player.style.gridColumnStart = 6;
                break;
            case "The village south-east":
                titleH1[0].innerHTML = `The village south`;
                player.style.gridColumnStart = 6;
                break;
            case "The village center":
                titleH1[0].innerHTML = `The village west`;
                player.style.gridColumnStart = 6;
                break;
            case "The village east":
                titleH1[0].innerHTML = `The village center`;
                player.style.gridColumnStart = 4;
                player.style.gridRowStart = 9;
                break;
            case "The crossroad of the north":
                titleH1[0].innerHTML = `The west of the crossroad`;
                player.style.gridColumnStart = 6;
                break;
            case "The west of the crossroad":
                titleH1[0].innerHTML = `The land of the local master`;
                player.style.gridColumnStart = 6;
                break;
            case "The land of the local master":
                titleH1[0].innerHTML = `The local master's garden`;
                player.style.gridColumnStart = 6;
                break;
            case "The local master's garden":
                titleH1[0].innerHTML = `The local master's house`;
                player.style.gridColumnStart = 6;
                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

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
        whereAmI();
    }
}