

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
    }
    if (localMasterScenario == 1 && actualPosition == "The local master's house") {
        homeMadeAlert("hey Wait", "You seem harmless, and i need help, bring me some sunflowers from my garden. Hurry up");
        localStorage.setItem("localMaster", 2);

    }
    if (localMasterScenario == 2 && actualPosition == "The local master") {
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
        homeMadeAlert("So...", `Come here. <br>You're here for what is happening in the region...<br>
                                I'm the master of weapon and secret arts<br>
                                I'm gonna teach you the ways and guide you through this quest`);
        characterDetails(vence, null, "venceFace", "bodyPlayer", null);
        fightContainer(vence);
        trainingVence(); /* IN THE FIGHTSCENARIOS.JS */
    }
}


/* directionDisappear(); */
