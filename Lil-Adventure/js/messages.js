
// Bubble
function bubble(id, message, bubCol, bubRow) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.innerHTML = message;
    let whoIsTalking = document.getElementById(id);
    let column = whoIsTalking.style.gridColumnStart;
    let numberColumn = Number(column);
    let row = whoIsTalking.style.gridRowStart;
    let numberRow = Number(row);
    bubble.style.gridColumnStart = numberColumn += bubCol;
    bubble.style.gridRowStart = numberRow += bubRow;

    container.append(bubble);
    setTimeout(function () { deletBubble(); }, 1000);
    function deletBubble() {
        let allTheBubble = document.getElementsByClassName("bubble");
        allTheBubble[0].parentNode.removeChild(bubble);
    }
}

// HOME MADE ALERT FOR SCENARIO MESSAGES
function homeMadeAlert(title, message) {
    let alertBox = document.createElement("div");
    alertBox.setAttribute("id", "alertBox");
    alertBox.innerHTML = `<h3>${title}</h3><br>
                                <p>${message}</p><br>
                                <input type="button" value="Okay" onclick="closeHomeMadeAlert()">`
    container.append(alertBox);
}
function closeHomeMadeAlert() {
    let alertBoxToClose = document.getElementById("alertBox");
    alertBoxToClose.remove();
}

// THE SCENARIO MESSAGES
function theVillageCenterMessage() {
    homeMadeAlert("Greatings people!", "We all noticed what happend around, burnt houses, and dead lands. I invite everyone who can to investigate about it. Be rewarded for any usefull informations ! ")
}
function theArmyRoadBlockMessage() {
    homeMadeAlert("Halt civilian !", "This way is closed, ordered by the General Edmund. Back off. <br>[A soldier push you]");

}



function homeMadePrompt(message, valueOfFirstButton, functionFirstButton, valueOfThePlaceHolder) {
    let promptBox = document.createElement("div");
    promptBox.setAttribute("id", "promptBox");
    promptBox.innerHTML = `${message}`;

    let entry = document.createElement("input")
    entry.setAttribute("type", "text");
    entry.setAttribute("id", "entry");
    entry.setAttribute("placeholder", valueOfThePlaceHolder);

    let firstButton = document.createElement("input");
    firstButton.setAttribute("type", "button");
    firstButton.setAttribute("value", valueOfFirstButton);
    firstButton.setAttribute("id", valueOfFirstButton);
    firstButton.addEventListener("click", functionFirstButton)
    let secondButton = document.createElement("input");
    secondButton.setAttribute("type", "button");
    secondButton.setAttribute("value", "Cancel");
    secondButton.setAttribute("id", "Cancel");
    secondButton.addEventListener("click", cancelFunction)

    promptBox.append(entry, firstButton, secondButton);
    container.append(promptBox);

    function cancelFunction() {
        promptBox.remove();
    }
}

function confirmMessage(message, valueOfFirstButton, functionFirstButton) {
    let promptBox = document.createElement("div");
    promptBox.setAttribute("id", "promptBox");
    promptBox.innerHTML = `<h4>${message}</h4>`;

    let firstButton = document.createElement("input");
    firstButton.setAttribute("type", "button");
    firstButton.setAttribute("value", valueOfFirstButton);
    firstButton.setAttribute("id", valueOfFirstButton);
    firstButton.addEventListener("click", functionFirstButton)
    let secondButton = document.createElement("input");
    secondButton.setAttribute("type", "button");
    secondButton.setAttribute("value", "Cancel");
    secondButton.setAttribute("id", "Cancel");
    secondButton.addEventListener("click", cancelFunction)

    promptBox.append(firstButton, secondButton);
    container.append(promptBox);

    function cancelFunction() {
        promptBox.remove();
    }
}
function promptBox(innerHtml) {
    let promptBox = document.createElement("div");
    promptBox.setAttribute("id", "promptBox");
    promptBox.innerHTML = innerHtml;

    container.append(promptBox);
}

function closePromtBox() {
    let promptBox = document.getElementById("promptBox");
    promptBox.remove();
}