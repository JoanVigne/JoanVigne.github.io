

function choseYourDice(first, second, third, fourth) {
    removeThisClass("choseYourDice");
    removeThisClass("diceContainers");
    buttons(`diceOf${first}`, "choseYourDice", first, `theChosenDice(${first})`, actionContainer);
    buttons(`diceOf${second}`, "choseYourDice", second, `theChosenDice(${second})`, actionContainer);
    buttons(`diceOf${third}`, "choseYourDice", third, `theChosenDice(${third})`, actionContainer);
    buttons(`diceOf${fourth}`, "choseYourDice", fourth, `theChosenDice(${fourth})`, actionContainer);
}
function theChosenDice(valueOfTheDice) {
    switch (valueOfTheDice) {
        case 2:
            appearTheDice(2, 90);
            break;
        case 3:
            appearTheDice(4, 85);
            break;
        case 4:
            appearTheDice(4, 80);
            break;
        case 5:
            appearTheDice(4, 75);
            break;
        case 6:
            appearTheDice(6, 70);
            break;
        case 7:
            appearTheDice(4, 65);
            break;
        case 8:
            appearTheDice(8, 60);
            break;
        case 9:
            appearTheDice(4, 55);
            break;
        case 10:
            appearTheDice(2, 50);
            break;
        case 11:
            appearTheDice(4, 45);
            break;
        case 12:
            appearTheDice(6, 40);
            break;
        case 13:
            appearTheDice(8, 35);
            break;
        default:
            break;
    }
}
function appearTheDice(dammageValue, oddValue) {
    removeThisClass("choseYourDice");
    buttons("changeDice", "choseYourDice", `change dice`, "choseYourDice(2, 4, 6, 8)", actionContainer);
    //dice
    let dice = document.createElement("div");
    dice.setAttribute("class", "dice");
    dice.addEventListener("click", function () { roll(dammageValue, oddValue); });
    // dammage
    let dammageDiceContainer = document.createElement("div");
    dammageDiceContainer.setAttribute("class", "diceContainers");
    dammageDiceContainer.setAttribute("id", "dammageContainer")
    let dammageNumberContainer = document.createElement("div");
    dammageNumberContainer.setAttribute("id", "dammageNumberContainer");
    dammageNumberContainer.setAttribute("class", "numberContainer");

    dammageDiceContainer.append(`dammage from 1 to ${dammageValue}`, dammageNumberContainer);
    dammageDiceContainer.append(dice);
    actionContainer.append(dammageDiceContainer);
    // odds
    let oddDiceContainer = document.createElement("div");
    oddDiceContainer.setAttribute("class", "diceContainers");
    oddDiceContainer.setAttribute("id", "oddContainer")
    let oddNumberContainer = document.createElement("div");
    oddNumberContainer.setAttribute("id", "oddNumberContainer");
    oddNumberContainer.setAttribute("class", "numberContainer");

    oddDiceContainer.append(`Between 1 to ${oddValue} to success`, oddNumberContainer);
    actionContainer.append(oddDiceContainer);
}
function roll(dammageValue, oddValue) {
    removeThisClass("choseYourDice");
    removeThisClass("dice");
    /* DAMMAGE */
    let dammageNumberContainer = document.getElementById("dammageNumberContainer");
    const resultDammage = Math.floor(Math.random() * (dammageValue - 1)) + 1;
    animateValue(resultDammage, dammageNumberContainer);
    /* ODDS */
    let oddNumberContainer = document.getElementById("oddNumberContainer");
    const resultOdd = Math.floor(Math.random() * (100 - 1)) + 1;
    animateValue(resultOdd, oddNumberContainer);
    /* RESULTS functions IN FIGHT.JS*/
    if (resultOdd < oddValue) {
        setTimeout(() => {
            youTouch(resultOdd, resultDammage);
        }, 800)

    }
    else {
        setTimeout(() => {
            youMiss(resultOdd)
        }, 800)

    }
    function animateValue(result, resultContainer) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / 500, 1);
            resultContainer.innerHTML = Math.floor(progress * (result - 0) + 0);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
}



