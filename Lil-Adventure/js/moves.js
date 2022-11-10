
// events on moves
function eventOnMoves() {
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    switch (titleH1[0].innerHTML) {
        case "The local master's garden":
            if (numberRow == 3 && numberColumn == 4 || numberRow == 4 && numberColumn == 4) {
                if (localStorage.getItem("sunFlower") == "true") {
                    bubble("i got a sunflower", "player");

                }
                if (localStorage.getItem("sunFlower") == "false")
                    bubble("i got a sunflower", "player");
                localStorage.setItem("sunFlower", "true");
            }
            break;
        case "The local master's house":
            if (numberRow == 4 && numberColumn == 4) {
                titleH1[0].innerHTML = `The local master`;
                player.style.gridRowStart = 10;
                whereAmI();
            }
            break;
        case "Tunnel second":
            if (numberRow == 6) {
                homeMadeAlert("Ksskskskss", "wtf this spider is huge !");
                console.log("fight");
            }
            break;
        case "Tunnel second":
            if (numberRow == 6) {
                homeMadeAlert("Ksskskskss", "wtf this spider is huge !");
                console.log("fight");
            }
            break;
        case "Tunnel second":
            if (numberRow == 6) {
                homeMadeAlert("Ksskskskss", "wtf this spider is huge !");
                console.log("fight");
            }
            break;
        case "Tunnel second":
            if (numberRow == 6) {
                homeMadeAlert("Ksskskskss", "wtf this spider is huge !");
                console.log("fight");
            }
            break;
        default:
            break;
    }
}

// MOVING THE PLAYER
function moveNorth() {
    eventOnMoves();
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    if (numberRow == 2) {
        toTheNorth();
    }
    switch (titleH1[0].innerHTML) {
        // FOR THE GUARDS BLOCKING THE ENTRANCE OF THE VILLAGE
        case "The entrance of the village":
            if (numberRow == 6) {
                if (numberColumn == 2 || numberColumn == 6) {
                    homeMadeAlert("Hey OH !", "Come here");
                    player.style.gridRowStart = numberRow += 1;
                }
                else if (numberColumn == 4) {
                    homeMadeAlert("Hey you! stop !", " Who are you ?? <br>.... Oh hey bro, you can pass of course, we don't know what happend but everything is dry around..");
                    player.style.gridRowStart = numberRow -= 2;
                    row = 3;
                }
            }
            break;
        case "The crossroad of the north":
            if (numberRow == 6 && numberColumn == 3) {
                homeMadeAlert("Directions", 'North: Flaketown, and the "Dark Montains"<br><br>South: "Hometown" Village<br><br>East: The "Old Castle"<br><br>West: The local master');
            }
            else {
                break;
            }

        default:
            defaultMove()
            break;
    }

    function defaultMove() {
        console.log("defaultMove");
        player.style.gridRowStart = numberRow -= 1;
    }

    // FOR THE The crossroad of the north SIGN
    /* if (titleH1[0].innerHTML == "The crossroad of the north") {
        if (numberRow == 6 && numberColumn == 3) {
            homeMadeAlert("Directions", 'North: Flaketown, and the "Dark Montains"<br><br>South: "Hometown" Village<br><br>East: The "Old Castle"<br><br>West: The local master');

        }
        else if (numberRow == 2) {
            toTheNorth();
        }
        else {
            player.style.gridRowStart = numberRow -= 1;
        }
    } */
    // FOR ALL THE PAGES


}

function moveEast() {
    eventOnMoves();
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    if (numberColumn == 6) {
        toTheEast();
    }
    else {
        player.style.gridColumnStart = numberColumn += 1;
    }
}
function moveSouth() {
    eventOnMoves();
    let row = player.style.gridRowStart;
    let numberRow = Number(row);

    if (numberRow == 10) {
        toTheSouth();
    }
    else {
        player.style.gridRowStart = numberRow += 1;
    }
}
function moveWest() {
    eventOnMoves();
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);

    if (numberColumn == 2) {
        toTheWest();
    }
    else {
        player.style.gridColumnStart = numberColumn -= 1;
    }
}

/* function setTimeOutMoves(direction) {
    setTimeout(direction, 1000);
} */

