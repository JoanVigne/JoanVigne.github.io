

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
            appearTheDice(2, 80);
            break;
        case 4:
            appearTheDice(4, 65);
            break;
        case 6:
            appearTheDice(6, 55);
            break;
        case 8:
            appearTheDice(8, 45);
            break;
        default:
            break;
    }
}
function appearTheDice(dammageValue, oddValue) {
    console.log("dans appearTheDice, les deux values:", dammageValue, oddValue);
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
    /* RESULTS */
    console.log("dans roll:", "oddChose:", oddValue, "resultOdd:", resultOdd, "dammageValue:", dammageValue, "resultDammage:", resultDammage);
    if (resultOdd < oddValue) {
        setTimeout(() => {
            youTouch(resultOdd);
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



