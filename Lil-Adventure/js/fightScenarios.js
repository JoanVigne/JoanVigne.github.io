/* const mainChatContainer = document.createElement("div");
mainChatContainer.setAttribute("id", "mainChatContainer");
/* player 
const playerContainer = document.createElement("div");
playerContainer.setAttribute("id", "playerContainer");
const statPlayerContainer = document.createElement("div");
statPlayerContainer.setAttribute("id", "statPlayerContainer");
const actionContainer = document.createElement("div");
actionContainer.setAttribute("id", "actionContainer");
/* enemy 
const enemyContainer = document.createElement("div")
enemyContainer.setAttribute("id", "enemyContainer");
const statEnemyContainer = document.createElement("div")
statEnemyContainer.setAttribute("id", "statEnemyContainer");
const enemyChatContainer = document.createElement("div");
enemyChatContainer.setAttribute("id", "enemyChatContainer"); */


function trainingVence() {
    enemyChatContainer.innerHTML += `<p>Here we go. <br> This is how to fight:</p>`;
    mainChatContainer.innerHTML += `<p>
     On the bottom right, you choose the dice of the next action.
     the bigger is the number, the more dammage you can inflict...
     but the bigger are the chances to fail...
     then you roll the dice you chose</p>`;
    choseYourDice(2, 4, 6, 8);
}
