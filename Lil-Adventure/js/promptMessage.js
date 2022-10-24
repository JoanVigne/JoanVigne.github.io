/*
function promptMaison(message){
    player.remove();
    let box = document.createElement("div");
    box.setAttribute("id", "boxPrompt");
    box.innerHTML = `<h1>${message}</h1><h1>Entrez votre pseudo pour enregistrer votre score :</h1>`;
   
    let entry = document.createElement("input");
    entry.setAttribute("type", "text");
    entry.setAttribute("id", "entry");
    entry.setAttribute("placeholder", "ex: D4rKs4$$uke42 ..");
   
    let recordEntry = document.createElement("input");
    recordEntry.setAttribute("type", "button");
    recordEntry.setAttribute("value", "Enregistrer");
    recordEntry.setAttribute("id", "recordEntry");
    box.append(entry);
    box.append(recordEntry);
    container.append(box);

    recordEntry.addEventListener("click", recordEntryFunction)
    function recordEntryFunction(){
        if(entry.value != ""){
            recordInLocalStorage();
            console.log("pseudo present");
            console.log(entry.value);
            messageGameOver();
            box.remove();
            
            setTimeout(function () { menuPrincipal(); }, 1500);
        }
        else {
            console.log("aucun pseudo entré");
            box.innerHTML += `<br>Veuillez entrer un pseudo`;
        }
    }
}
*/