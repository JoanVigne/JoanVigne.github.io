// a lot of stuff in dice.js
//
let mainChatContainer = document.createElement("div");
mainChatContainer.setAttribute("id", "mainChatContainer");
/* player */
let playerContainer = document.createElement("div");
playerContainer.setAttribute("id", "playerContainer");
let statPlayerContainer = document.createElement("div");
statPlayerContainer.setAttribute("id", "statPlayerContainer");
let actionContainer = document.createElement("div");
actionContainer.setAttribute("id", "actionContainer");
/* enemy */
let enemyContainer = document.createElement("div")
enemyContainer.setAttribute("id", "enemyContainer");
let statEnemyContainer = document.createElement("div")
statEnemyContainer.setAttribute("id", "statEnemyContainer");
let enemyChatContainer = document.createElement("div");
enemyChatContainer.setAttribute("id", "enemyChatContainer");

const fightContainers = [mainChatContainer, playerContainer, statPlayerContainer, actionContainer, enemyContainer, statEnemyContainer, enemyChatContainer];

function createTheFightContainers() {
    fightContainers.forEach(element => {
        container.append(element);
    });
}
function deletTheFightContainers() {
    fightContainers.forEach(element => {
        element.remove();
    });
}

function fightContainer(idOfTheEnemy) {
    enemyChatContainer.append(idOfTheEnemy.id, ":");
    directionDisappear();
    deletAllObstacle();
    deletAllPeople();
    createTheFightContainers();
    player.style.gridArea = 1;
    playerContainer.append(player);
    enemyContainer.append(idOfTheEnemy);
}
function youTouch(result, resultDammage) {
    let iAmHere = titleH1[0].innerHTML;
    switch (iAmHere) {
        case "The local master":
            enemyChatContainer.innerHTML = `<p>You success !</p>`;
            mainChatContainer.innerHTML = `<p>If it was a real fight, you would ve done:<br> ${resultDammage} dammages.<br>`
            buttons("ok", "ok", "Okay", "trainingVence2()", mainChatContainer)
            break;
        default:
            break;
    }
}
function youMiss(result) {

    let iAmHere = titleH1[0].innerHTML;
    switch (iAmHere) {
        case "The local master":
            enemyChatContainer.innerHTML = `<p> YOU FAILED NOOB</p> `;
            mainChatContainer.innerHTML = `<p> Try again...</p><br>`;
            buttons("ok", "ok", "Okay", "choseYourDice(2, 4, 6, 8)", mainChatContainer)
            break;
        default:
            break;
    }
}