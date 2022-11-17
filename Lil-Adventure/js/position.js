function playerPositionEvent() {
    let position = player.style.gridArea;
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    console.log(position);
    switch (titleH1[0].innerHTML) {
        case "The entrance of the village":
            console.log("in moveNOrth, case The entrance of the village");
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
                console.log("grandma");
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
                homeMadeAlert("Directions", 'North: Flaketown, and the "Dark Montains"<br><br>South: "Hometown" Village<br><br>East: The "Old Castle"<br><br>West: The local master');
            }
            break;
        case "The army roadblock":
            if (row == 2) {
                theArmyRoadBlockMessage();
                player.style.gridRowStart = 5;
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
            if (numberRow == 6) {
                homeMadeAlert("Ksskskskss", "wtf this spider is huge !");
                console.log("fight");
            }
            break;
        case "Tunnel third":
            if (numberRow == 6) {
                homeMadeAlert("Ksskskskss", "wtf this spider is huge !");
                console.log("fight");
            }
            break;
        case "Tunnel fourth":
            if (numberRow == 6) {
                homeMadeAlert("Ksskskskss", "wtf this spider is huge !");
                console.log("fight");
            }
            break;
        case "Tunnel exit":
            if (numberRow == 6) {
                homeMadeAlert("Ksskskskss", "wtf this spider is huge !");
                console.log("fight");
            }
            break;
        default:
            break;
    }
}