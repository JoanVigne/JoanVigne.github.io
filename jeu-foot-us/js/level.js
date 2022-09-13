function touchDowm() {
    // playerLevelUp();
    player.style.gridRowStart = 1;
    player.style.gridColumnStart = 1;
    let level = document.title;
    switch (level) {
        case "index": console.log("Menu principal");
            break;
        case "First Level":
            document.title = 2;
            enemiesCreation("velo1");
            break;
        case "2":
            document.title = 3;
            playerLevelUp();
            none("velo1");
            enemiesCreation("viking1");
            break;
        case "3":
            document.title = 4;
            none("viking1");
            enemiesCreation("velo2");
            break;
        case "4":
            document.title = 5;
            none("velo2");
            enemiesCreation("foot1");
            enemiesCreation("foot2");
            break;
        case "5":
            document.title = 6;
            none("foot1");
            none("foot2");
            enemiesCreation("foot3");
            enemiesCreation("foot4");
            break;
        case "6":
            document.title = 7;
            none("foot3");
            none("foot4");
            enemiesCreation("foot3");
            enemiesCreation("foot4");
            enemiesCreation("foot5");
            break;
        case "7":
            playerLevelUp();
            document.title = "8";
            none("foot3");
            none("foot4");
            none("foot5");
            enemiesCreation("foot1");
            enemiesCreation("foot2");
            enemiesCreation("foot3");
            enemiesCreation("foot4");
            break;
        case "8":
            document.title = "9";
            none("foot1");
            none("foot2");
            none("foot3");
            none("foot4");
            enemiesCreation("foot1");
            enemiesCreation("foot2");
            enemiesCreation("foot3");
            enemiesCreation("foot4");
            enemiesCreation("foot5");
            break;
        case "9":
            document.title = "10";
            none("foot1");
            none("foot2");
            none("foot3");
            none("foot4");
            none("foot5");
            enemiesCreation("velo1");
            enemiesCreation("velo2");
            enemiesCreation("velo3");
            enemiesCreation("viking1");
            enemiesCreation("viking2");
            enemiesCreation("viking3");
            break;
        case "10":
            document.title = "11";
            none("velo1");
            none("velo2");
            none("velo3");
            none("viking1");
            none("viking2");
            none("viking3");
            // fin de game
            bulle("ouch");
            promptMaison("vOUS AVEZ GAGNÉ");
            break;
        case "11":
            break;
        case "12":
            break;
        case "13":
            break;
    }
}

