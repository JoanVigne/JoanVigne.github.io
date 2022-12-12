

function playerDeath() {
    homeMadeAlert("You're dead...", "I hope you saved before !");
    setTimeout(() => {
        location.reload();
    }, 5000);
}

function importantEnemyDeath(where) {

    switch (where) {
        case "Tunnel fourth":
            localStorage.setItem("spiderQueen", "dead");
            break;
        case "The north of the graveyard":
            localStorage.setItem("skeleton", "dead");
            homeMadeAlert("On the floor", "You can see the sword of the skeleton, you grab it and feel strange in your body... stronger...");
            modifyWeapon("dark-small-sword");
            addingForce(2);
            break;
        case "The northen crossroad":
            console.log("against leather");
            localStorage.setItem("leatherGuard", 'dead');
            break;
        case "The north of the orc camp":
            localStorage.setItem("northCampOrc", 'dead');
            break;
        case "The fight arena":
            let whosTurn = localStorage.getItem("whosTurn");
            let thisTurn = parseInt(whosTurn);
            localStorage.setItem("whosTurn", thisTurn += 1);

            setTimeout(() => {
                orderFightOrcs();
            }, 1500);
            break;
        default:
            break;
    }
};