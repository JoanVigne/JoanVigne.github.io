
let XPDisplay = document.getElementById('xpDisplay');
let LevelDisplay = document.getElementById('LevelDisplay');
let xpFiller = document.getElementById('xpFiller');
function xpAndLevelDisplay() {
    let data = localStorage.getItem("gameStuff");
    let parseData = JSON.parse(data);
    let xp = parseData.xp;
    let level = parseData.level;
    XPDisplay.innerHTML = xp + "%";
    LevelDisplay.innerHTML = level;

    xpFiller.style.width = xp + '%';
}
function xpConcideringLevel(xpRecieved) {
    let data = localStorage.getItem("gameStuff");
    let parseData = JSON.parse(data);
    let lvl = parseData.level;
    switch (lvl) {
        case 1:
            moreXp(xpRecieved * 50);
            break;
        case 2:
            moreXp(xpRecieved * 40);
            break;
        case 3:
            moreXp(xpRecieved * 30);
            break;
        case 4:
            moreXp(xpRecieved * 25);
            break;
        case 5:
            moreXp(xpRecieved * 20);
            break;
        case 6:
            moreXp(xpRecieved * 15);
            break;
        case 7:
            moreXp(xpRecieved * 10);
            break;
        case 8:
            moreXp(xpRecieved * 9);
            break;
        case 9:
            moreXp(xpRecieved * 8);
            break;
        case 10:
            moreXp(xpRecieved * 7);
            break;
        case 6:
            moreXp(xpRecieved * 6);
            break;
        case 1:
            moreXp(xpRecieved * 5);
            break;
        case 12:
            moreXp(xpRecieved * 4);
            break;
        case 13:
            moreXp(xpRecieved * 3);
            break;
        case 14:
            moreXp(xpRecieved * 2);
            break;
        default:
            moreXp(xpRecieved);
            break;
    }
}

function moreXp(amountOfXp) {
    let data = localStorage.getItem("gameStuff");
    let parseData = JSON.parse(data);
    let newXp = parseData.xp += amountOfXp;

    if (newXp >= 100) {
        //  est supérieur à.
        parseData.xp = newXp -= 100;
        parseData.level = parseData.level += 1;
        localStorage.setItem("gameStuff", JSON.stringify(parseData));
        setTimeout(() => {
            statUpgrade();
        }, 600);

    }
    else {
        parseData.xp = newXp
        localStorage.setItem("gameStuff", JSON.stringify(parseData));
    }

    xpAndLevelDisplay();

}


