


// MENU CONTINUE
function continueGame() {
    let saves = localStorage.getItem("saves");
    if (saves === null) {
        homeMadeAlert("No game saved yet", "press Start New Game to play");
    }
    else {
        quitMenu();
        let gameSaved = JSON.parse(saves);
        gameSaved.reverse();
        let continueMenu = document.createElement("div");
        continueMenu.setAttribute("id", "continueMenu");
        let theGameSaved = document.createElement("div");
        theGameSaved.setAttribute("id", "theGameSaved");

        continueMenu.innerHTML = `<div id="continueTitleAndBack"><img src="images/westArrow.png" alt="back" onClick="backFunction()"><h5>Which save do you want to use?</h5></div>
            <br>  `;

        gameSaved.forEach(element => {
            let oneElement = document.createElement("p");

            let title = element[0];
            let location = element[1];
            let stuff = element[2];
            let timeOfSaving = element[3]; // no need in load()
            let position = element[4];
            let space = " ";
            oneElement.addEventListener("click", () => load(title, location, stuff, position));


            oneElement.append(title, space, timeOfSaving);
            theGameSaved.append(oneElement);
        });
        continueMenu.append(theGameSaved);
        container.append(continueMenu);

    }
}
// LOAD AND START PLAYING
function load(title, location, stuff, position) {
    let continueMenu = document.getElementById("continueMenu");
    continueMenu.remove();

    appearDirections();
    titleH1[0].innerHTML = location;
    localStorage.setItem("gameStuff", JSON.stringify(stuff));

    container.append(player);
    player.style.gridArea = position;
    playerStuff();
    whereAmI();
    homeMadeAlert("Game Loaded.", `The save you loaded is named "${title}".<br>You were here : <br> ${location}. <br> Good luck Have fun`);
}

function backFunction() {
    let continueMenu = document.getElementById("continueMenu");
    continueMenu.remove();
    menu();
}
