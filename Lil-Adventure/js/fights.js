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

function detailEnemy(arrayEnemyIndex, sentence) {
    fightContainer();
    // the array
    let thisEnemey = arrayEnemyIndex;
    // img
    let imgEnemy = document.createElement("div");
    imgEnemy.setAttribute("class", "opponent");
    imgEnemy.setAttribute("id", thisEnemey.name);
    enemyContainer.append(imgEnemy);
    // stats
    statEnemyContainer.innerHTML = `
    <p> max hp:<span id="hpMax">${thisEnemey.hp}</span>
    armor:<span id="armor">${thisEnemey.armor}</span>
    force:<span id="force">${thisEnemey.force}</span>
    spe:<span id="spe">${thisEnemey.spe}</span> 
    xp:<span id="xp">${thisEnemey.xp}</span> </p>
    HP:<span id="hpFight">${thisEnemey.hp}</span>
    `;
    // sentence of the enemy
    enemyChatContainer.innerHTML += `<h4>${thisEnemey.name}:</h4><p> ${sentence}</p>`;
}

function endOfFight() {
    enemyChatContainer.innerHTML = "";
    deletTheFightContainers();
    let positionBeforefight = localStorage.getItem("positionBeforefight");
    container.append(player);
    player.style.gridArea = positionBeforefight;
    whereAmI();
    appearDirections();

}
function fightContainer() {
    let positionBeforefight = player.style.gridArea;
    localStorage.setItem("positionBeforefight", positionBeforefight);
    directionDisappear();
    deletAllObstacle();
    deletAllPeople();
    createTheFightContainers();
    player.style.gridArea = 1;
    playerContainer.append(player);
    displayStatsPlayer(statPlayerContainer);
    weaponChoseDices();

}
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



function youTouch(resultDammage) {
    let iAmHere = titleH1[0].innerHTML;

    // var enemy : 
    const hpx = document.getElementById("hpFight");
    let hp = parseInt(hpx.innerHTML, 10);
    const armorx = document.getElementById("armor");
    let armor = parseInt(armorx.innerHTML, 10);
    const xpx = document.getElementById("xp");
    const xp = parseInt(xpx.innerHTML, 10);
    // var player : 
    let data = localStorage.getItem("gameStuff");
    let parseData = JSON.parse(data);
    let hpPlayer = parseData.hp;
    let armorPlayer = parseData.armor;
    let forcePlayer = parseData.force;
    let spePlayer = parseData.spe;

    switch (iAmHere) {
        case "The local master":
            enemyChatContainer.innerHTML = `<p>You success !</p>`;
            mainChatContainer.innerHTML = `<p>If it was a real fight, you would ve done <br><bold> ${resultDammage} dammages <bold>.<br>`
            buttons("ok", "ok", "Okay", "trainingVence2()", mainChatContainer)
            break;
        default:
            let dammAndForce = resultDammage += forcePlayer;
            //  armor ?
            if (dammAndForce >= armor) {
                let newHP = hp -= dammAndForce -= armor;
                console.log("hp:", hp, "newHP", newHP, "dammage et armor", resultDammage, armor);
                // dead ?
                if (newHP <= 0) {

                    let enemyImgToDelet = document.getElementsByClassName("opponent");
                    enemyImgToDelet[0].remove();
                    hpx.innerHTML = newHP;
                    xpConcideringLevel(xp);
                    mainChatContainer.innerHTML = `you win!`

                    buttons("finishFight", "", "Going back to the map", "endOfFight()", mainChatContainer);
                }
                else {
                    hpx.innerHTML = newHP;
                    mainChatContainer.innerHTML = `<p>You hit your opponent, and deal :<br><bold>${resultDammage}</boldt> dammage</p> `
                    buttons("attackAgain", "", "Attack again", 'weaponChoseDices(); removeThis()', mainChatContainer);
                    // Function enemyAttack
                }
            }
            // armor too high?
            else {
                mainChatContainer.innerHTML = `<h4>His armor is too strong for such a weak hit !</h4>`
                buttons("attackAgain", "", "Try again", 'weaponChoseDices(); removeThis()', mainChatContainer);
            }


            break;
    }
}
function youMiss(result) {
    let iAmHere = titleH1[0].innerHTML;
    console.log("you miss", result);
    switch (iAmHere) {
        case "The local master":
            enemyChatContainer.innerHTML = `<p> YOU FAILED NOOB</p> `;
            mainChatContainer.innerHTML = `<p> Try again...</p><br>`;
            buttons("ok", "ok", "Okay", "choseYourDice(2, 4, 6, 8)", mainChatContainer)
            break;
        default:
            mainChatContainer.innerHTML = `<h4>You missed the target ! </h4>`
            buttons("attackAgain", "", "Try again", 'weaponChoseDices(); removeThis()', mainChatContainer);
            // Function enemyAttack
            break;
    }
}

function removeThis() {
    document.getElementById("attackAgain").remove();
}

function enemyAttack() {

}