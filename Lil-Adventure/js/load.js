


// MENU CONTINUE
function continueGame() {
    let saves = localStorage.getItem("saves");
    if (saves === null) {
        homeMadeAlert("No game saved yet", "press Start New Game to play");
    }
    else {
        let menuButtonContainer = document.getElementsByTagName("fieldset");
        if (menuButtonContainer.length < 2) {
            quitMenu();
        }

        let gameSaved = JSON.parse(saves);
        /*         gameSaved.reverse(); */
        let continueMenu = document.createElement("div");
        continueMenu.setAttribute("id", "continueMenu");
        let theGameSaved = document.createElement("div");
        theGameSaved.setAttribute("id", "theGameSaved");

        continueMenu.innerHTML = `<div id="continueTitleAndBack"><img src="images/westArrow.png" alt="back" onClick="backFunction()"><h5>Which save do you want to use?</h5></div>
            <br>  `;

        gameSaved.forEach(element => {
            let oneElement = document.createElement("div");
            let title = element[0];
            let location = element[1];
            let stuff = element[2];
            let timeOfSaving = element[3];
            let position = element[4];
            let space = " ";
            let elementContent = document.createElement("p");
            elementContent.addEventListener("click", () => load(title, location, JSON.parse(stuff), position));

            let buttonDelet = document.createElement("button");
            buttonDelet.innerHTML = 'x';
            buttonDelet.setAttribute("class", "buttonDelet");
            buttonDelet.addEventListener("click", () => { deletASaving(element) });

            elementContent.append(title, space, timeOfSaving);
            oneElement.append(elementContent, buttonDelet);
            theGameSaved.append(oneElement);
        });

        continueMenu.append(theGameSaved);
        container.append(continueMenu);

        function deletASaving(element) {
            confirmMessage("Do you really want to delet this save?", "yes, delet it", () => {
                let index = gameSaved.indexOf(element);
                console.log("index de chaque element", gameSaved.indexOf(element));
                gameSaved.splice(index, 1);
                console.log(gameSaved);
                closePromptBox();
                console.log(element);
                console.log(gameSaved);
                localStorage.setItem("saves", JSON.stringify(gameSaved));
            });

        }
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

