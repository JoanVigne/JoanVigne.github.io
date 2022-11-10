
function dammageOfWeapon() {
    let actualWeapon = localStorage.getItem("weapon");
    console.log(actualWeapon);
    switch (actualWeapon) {
        case "bambou":
            console.log("2, 4, 6, 8");
            break;
        case "rollingSpin":
            break;
        case "hammer":
            console.log("4, 6, 8, 10");
            break;
        default:
            break;
    }
}
