

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
        case "The northen crossroad":
            console.log("against leather");
            break;
        default:
            break;
    }
};