

let player = document.createElement("div");
player.setAttribute("id", "player");


let vence = document.createElement("div");
vence.setAttribute("id", "vence");



function characterDetails(who, hat, face, body, tool) {
    // prendre le localStorage plus tard
    let theHat = document.createElement("div");
    theHat.setAttribute("id", hat);
    who.append(theHat);
    let theFace = document.createElement("div");
    theFace.setAttribute("id", face);
    who.append(theFace);
    let theBody = document.createElement("div");
    theBody.setAttribute("id", body);
    who.append(theBody);
    let theTool = document.createElement("div");
    theTool.setAttribute("id", tool);
    who.append(theTool);
}



function creationOfPeople(id, col, row) {
    let thisID = document.createElement("div");
    thisID.setAttribute("id", id);
    thisID.setAttribute("class", "people");
    thisID.style.gridColumnStart = col;
    thisID.style.gridRowStart = row;
    container.append(thisID);
}


function deletAllPeople() {
    let people = document.querySelectorAll(".people");
    Array.from(people);
    people.forEach(person => {
        person.remove();
    });
}



