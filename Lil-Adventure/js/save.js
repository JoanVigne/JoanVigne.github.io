
/* body.append("save.pgn") */
let saveLogo = document.getElementById("save");
saveLogo.addEventListener("click", saveGamePrompt)


function saveGamePrompt() {
    homeMadePrompt("<p>Do you wanna save this game? It is gonna be saved in your browser.</p>", "SAVE", saveFunction, "Name of your save");
    let saves = localStorage.getItem("saves");
    if (saves == null) {
        let arrayOfSaves = [];
        localStorage.setItem("saves", JSON.stringify(arrayOfSaves));
    }

}
function saveFunction() {
    let saves = JSON.parse(localStorage.getItem("saves"));
    let location = titleH1[0].innerHTML;
    let stuff = localStorage.getItem("gameStuff");
    let theStuff = JSON.parse(stuff);
    let thePosition = player.style.gridArea;
    let nameOfTheSaved = document.getElementById("entry").value;
    let date = new Date();
    let dateOfSaving = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`


    thisSave = [nameOfTheSaved, location, theStuff, dateOfSaving, thePosition];

    saves.push(thisSave);
    localStorage.setItem("saves", JSON.stringify(saves));

    bubble("player", "game saved!", 0, -1);
    promptBox.remove();

}