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

function createTheFightContainers() {
    container.append(mainChatContainer, playerContainer, statPlayerContainer, actionContainer, enemyContainer, statEnemyContainer, enemyChatContainer);
}
// usefull functions ===>
// appearDirections(); directionDisappear(); deletAllObstacle(); deletAllPeople();

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
function youTouch(result) {
    console.log("you touch :", result);
}
function youMiss(result) {
    console.log("you miss:", result);
}