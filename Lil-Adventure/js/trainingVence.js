// the local master
// appearDirections(); directionDisappear();
function localMasterPlace() {
    let localMasterScenario = localStorage.getItem("localMaster");
    let sunFlower = localStorage.getItem("sunFlower");
    let actualPosition = titleH1[0].innerHTML;

    if (localMasterScenario == null && actualPosition == "The local master's house") {
        localStorage.setItem("localMaster", 0);
        localStorage.setItem("sunFlower", false);
    }
    if (localMasterScenario == 0 && actualPosition == "The local master") {
        homeMadeAlert("Omg", "Who are you? this is my place, get out of here !");
        localStorage.setItem("localMaster", 1);
        directionArrowsOnAndOff(notThisArrow, notThisArrow, south, notThisArrow);
    }
    if (localMasterScenario == 1 && actualPosition == "The local master's house") {
        homeMadeAlert("hey Wait", "You seem harmless, and i need help, bring me some sunflowers from my garden. Hurry up");
        localStorage.setItem("localMaster", 2);

    }
    if (localMasterScenario == 2 && actualPosition == "The local master") {
        directionArrowsOnAndOff(notThisArrow, notThisArrow, south, notThisArrow);
        if (sunFlower == "true") {
            homeMadeAlert("Yeh", "Thank you very much!");
            localStorage.setItem("localMaster", 3);

        }
        else if (sunFlower == "false") {
            homeMadeAlert("??", "Where are my sunflowers that i asked ?");
        }
    }
    if (localMasterScenario == 3 && actualPosition == "The local master's house") {
        titleH1[0].innerHTML = `The local master`;
        whereAmI();
    }
    if (localMasterScenario == 3 && actualPosition == "The local master") {
        homeMadeAlert("op op op, So !", `Come. <br>You're here for what is happening in the region...<br>
                                I'm the master of weapons and secret arts<br>
                                I'm gonna teach you how to fight and guide you through this quest`);

        detailEnemy(enemyArray[2], "")
        venceTraining()
        trainingVence(); /* IN THE FIGHTSCENARIOS.JS */
    }
    if (localMasterScenario == 4 && actualPosition == "The local master") {
        homeMadeAlert("My secret tunnel", `I heard that the army was blocking the way to go north... But i have an underpass to go there ! It's here on the northen wall`);
        obstacleCreationSPAN("purpleBed", 4, 5, 3, 3)
        creationOfPeople("smallVence", 5, 5);
        container.append(player);
        player.style.gridColumn = 4;
        player.style.gridRow = 8;
        whereAmI();
    }

}

function trainingVence() {
    venceInFight();
    enemyChatContainer.innerHTML += `<p>Here we go. <br> This is how to fight:</p>`;
    mainChatContainer.innerHTML += `<p>
     On the bottom right, you choose the dice of the next action.
     the bigger is the number, the more dammage you can inflict...
     but the bigger are the chances to fail...
     then you roll the dice you chose</p>`;
    choseYourDice(2, 4, 6, 8);
}
function trainingVence2() {
    console.log("trainingVence2");
    enemyChatContainer.innerHTML = `<p>I can see that you don't have any weapons. I only have this for you</p>`;
    mainChatContainer.innerHTML = `<p>You recieve a rolling pin ... 
     </p>`;
    modifyWeapon("rolling-pin")

    buttons("no", "no", "Wtf this is not a weapon !", "upgradeRollingPin()", mainChatContainer)

    buttons("ok", "ok", "Okay, i can fight with anything anyway", "trainingVence3()", mainChatContainer)
}
function upgradeRollingPin() {
    enemyChatContainer.innerHTML = `<p>OK yeah maybe i didn't search enought..</p>`;
    mainChatContainer.innerHTML = `<p>Vence found a little hammer !<br>
    You recieve a little hammer 
    </p>`
    modifyWeapon("hammer-small")
    buttons("ok", "ok", "Okay", "trainingVence3()", mainChatContainer);
}

function trainingVence3() {
    console.log("trainingVence3");
    localStorage.setItem("localMaster", 4);
    deletTheFightContainers()
    localMasterPlace();
}