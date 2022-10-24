


// MOVING THE PLAYER
function pickUpStuff() {
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    if (titleH1[0].innerHTML == "The local master's garden") {
        if (numberRow == 3 && numberColumn == 4 || numberRow == 4 && numberColumn == 4) {
            if (localStorage.getItem("sunFlower") == "true") {
                console.log("deja sunflower");
            }
            if (localStorage.getItem("sunFlower") == "false")
                bubble("i got a sunflower", "player");
            localStorage.setItem("sunFlower", "true");
            return;
        }
    }
}
function moveNorth() {
    pickUpStuff();
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    // FOR THE LITTLE SCENARIO OF THE ENTRANCE OF THE VILLAGE
    if (titleH1[0].innerHTML == "The entrance of the village") {
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
        else if (numberRow == 2) {
            toTheNorth();
        }
        else {
            player.style.gridRowStart = numberRow -= 1;
        }
    }
    // FOR THE The crossroad of the north SIGN
    if (titleH1[0].innerHTML == "The crossroad of the north") {
        if (numberRow == 6 && numberColumn == 3) {
            homeMadeAlert("Directions", 'North: Flaketown, and the "Dark Montains"<br><br>South: "Hometown" Village<br><br>East: The "Old Castle"<br><br>West: The local master');

        }
        else if (numberRow == 2) {
            toTheNorth();
        }
        else {
            player.style.gridRowStart = numberRow -= 1;
        }
    }
    // THE LOCAL MASTER GARDEN
    /*     if (titleH1[0].innerHTML == "The local master's garden") {
            if (numberRow == 3 && numberColumn == 4) {
                bubble("got it", "player");
                localStorage.setItem("sunFlower", "true");
            }
        } */
    // MASTER S HOUSE
    if (titleH1[0].innerHTML == "The local master's house") {
        if (numberRow == 4 && numberColumn == 4) {
            titleH1[0].innerHTML = `The local master`;
            player.style.gridRowStart = 10;
            whereAmI();
        }
        else {
            player.style.gridRowStart = numberRow -= 1;
        }
    }
    // FOR ALL THE PAGES
    else if (numberRow == 2) {
        toTheNorth();
    }
    else {
        player.style.gridRowStart = numberRow -= 1;
    }
}

function moveEast() {
    pickUpStuff();
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
    pickUpStuff();
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
    pickUpStuff();
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);

    if (numberColumn == 2) {
        toTheWest();
    }
    else {
        player.style.gridColumnStart = numberColumn -= 1;
    }
}

function setTimeOutMoves(direction) {
    setTimeout(direction, 1000);
}

