


function trainingVence() {
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
    modifyWeapon("rollingPin")

    buttons("no", "no", "Wtf this in not a weapon !", "upgradeRollingPin()", mainChatContainer)

    buttons("ok", "ok", "Okay, i can fight with anything anyway", "trainingVence3()", mainChatContainer)
}
function upgradeRollingPin() {
    enemyChatContainer.innerHTML = `<p>OK yeah maybe i didn't search enought..</p>`;
    mainChatContainer.innerHTML = `<p>Vence found a little hammer !<br>
    You recieve a little hammer 
    </p>`
    modifyWeapon("hammerSmall")
    buttons("ok", "ok", "Okay", "trainingVence3()", mainChatContainer);
}

function trainingVence3() {
    console.log("trainingVence3");
    localStorage.setItem("localMaster", 4);
    deletTheFightContainers()
    localMasterPlace();
}