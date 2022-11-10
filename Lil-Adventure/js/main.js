

// onload on page menu.js


// GENERAL VAR
let container = document.getElementById("container");
// TITLE
let titleH1 = document.getElementsByTagName("h1");
function TP(where) {
    titleH1[0].innerHTML = where;
    whereAmI();
}

function start() {
    quitMenu();
    appearDirections();
    titleH1[0].innerHTML = `Home sweet home`;
    localStorage.setItem("hat", "startHat");
    localStorage.setItem("top", "startShirt");
    localStorage.setItem("weapon", "bambou");
    localStorage.setItem("shield", "");
    let face = localStorage.getItem("face");
    if (face === null) {
        localStorage.setItem("face", "savana");
    }
    container.append(player);
    playerStuff();
    whereAmI();
    homeMadeAlert("Good morning sunshine", "Welcome home, you wake up as usual in your little house");
}




// GENERAL FUNCTIONS
function buttons(idOfThisButton, classOfThisButton, valueOfThisButton, theEvent, whereDoItAppend) {
    let aButton = document.createElement("input");
    aButton.setAttribute("type", "button");
    aButton.setAttribute("id", idOfThisButton);
    aButton.setAttribute("class", classOfThisButton);
    aButton.setAttribute("value", valueOfThisButton);
    aButton.setAttribute("onclick", theEvent);
    whereDoItAppend.append(aButton);
    // exemple : 
    //  buttons("start", "menuButton", "Start the adventure", "aFunction()", menuButtonContainer);
}

function removeThisClass(thisOne) {
    let thisClass = document.querySelectorAll(`.${thisOne}`);
    Array.from(thisClass);
    thisClass.forEach(Class => {
        Class.remove();
    });
}

