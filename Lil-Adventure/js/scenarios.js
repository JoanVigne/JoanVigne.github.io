

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

