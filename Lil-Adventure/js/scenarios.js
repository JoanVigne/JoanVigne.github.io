
// VANGUARD START
function vanguardScenario() {
    choice('They surround you. <br> One of the orcs: <br>"Drop weapon pity human, or die.',
        "I obey", obey, "I refuse", fightOrcs);
};
function obey() {
    closePromptBox();
    choice('They disarmed you violently. [-1 HP]',
        "Keep obeying", toTheLeader, "I tell them to relax", refuse);
    modifyWeapon("");
    addingHp(-1);

}
function refuse() {
    closePromptBox();
    choice("They all stare at you. One of them gives you an axe, that look better than your weapon, and they are preparing to fight you.. ",
        "Let's destroy them", fightOrcs, "Refuse to fight and give the weapon back", toTheLeader);
}
function toTheLeader() {
    modifyWeapon("");
    closePromptBox();
    noFightLeader();
}

function fightOrcs() {
    modifyWeapon("small-Axe");
    closePromptBox();
    promptBox(`<h3>yEAAAAHhaA!!!! </h3>
    <br><p> They all are so happy to bring you to their Arena, and they are <bold>ALL</bold> warming up</p><br>
    <input type="button" onclick="toTheArena()" value="Ohoh...">`)
}

function toTheArena() {
    closePromptBox();
    TP("The fight arena");
    directionDisappear();
    localStorage.setItem("whosTurn", 1);
    setTimeout(() => {
        orderFightOrcs();
    }, 1500);
}
function orderFightOrcs() {
    let whosTurn = localStorage.getItem("whosTurn");

    switch (whosTurn) {
        case '1':
            homeMadeAlert("ME FIRST !!", "One of them come forward and get his weapon. He is ready to fight");
            detailEnemy(enemyArray[6], "ME FIRST");
            break;
        case '2':
            homeMadeAlert("ME ME ME !!", "The moment the first orc body touch the floor, an other take a step forward");
            detailEnemy(enemyArray[7], "ME BETTER");
            break;
        case '3':
            homeMadeAlert("NEXT", "It feels like it will never end...");
            detailEnemy(enemyArray[5], "WTF you good");
            break;
        case '4':

            detailEnemy(enemyArray[8], "I'm last one...");
            break;
        case '5':
            homeMadeAlert("NEXT", "They are all silent... An other one comes in front of you. He is bigger than the others... ");
            detailEnemy(enemyArray[9], "You killed enought. now you die.");
            break;
        case '6':
            afterFightOrcsLeader();
            break;
        default:
            break;
    }
}
function afterFightOrcsLeader() {
    promptBox(`The rest of the orcs left are not moving anymore... They are impressed by you !<br>
    One of them come closer to you, and say:<br>
    "You proved your honor and force. You are worthy to meet our leader. Folow me.<br>
    <input type="button" onclick='TP("The orc leader")' value="Follow him">`);

}
function noFightLeader() {
    TP("The orc leader");
}
// VANGUARD END

//LEADER START

function leaderOrcScenario() {
    choice('"Human. Knee before me.',
        '"I dont take order from any orcs"', dontKnee,
        '"Okay.."[kneeling]', kneeling);
}
function dontKnee() {
    closePromptBox();
    promptBox(`<p><h4>"Imbecile" <br></h4>
                He makes a sign with his enormous hand<br>[you hear a fast whistle behind you]<br><br>
                You feel a pain in your right leg, you take a look and realise 
                    that you have a spear through your thigh..<br>[-2hp] </p>
                <input type="button" onclick="kneeling()" value="Ouch">`);
    addingHp(-2);
}
function kneeling() {
    closePromptBox();
    choice(`<p>Good, kneeling was the only option.<br> 
    I wonder how a ridiculous human like you could intrude so far on our lands.<br>
    </p>`,
        '"By chance!"', respectLeader,
        '"Orcs are easy to fool.."', disrespectLeader);
}

function respectLeader() {
    closePromptBox();
    choice(`"By chance i see. And why taking this risk to be here? Talk or die.`,
        '"I investigate about south burning"', investigate,
        '[no answer]', fightLeaderOrc);
}
function disrespectLeader() {
    closePromptBox();
    choice(`"AHAHAHAHAHA, YOU are a funny boy, do you think you can fool me?"`,
        '"You? no.."', respectLeader,
        `"Aren't you as stupid as the others?"`, fightLeaderOrc);
}

function investigate() {
    closePromptBox();
    choice(`"Drying your lands and burning your trees? We wish we did, but it was not us!<br>
    your retarded leaders started attacks during the night because they blame us?"`,
        '"I guess they did... unfair!"', agreeWithLeaderOrc,
        '"You deserve to be eradicated anyway"', fightLeaderOrc);
}

function fightLeaderOrc() {
    closePromptBox();
    modifyWeapon("small-Axe");
    homeMadeAlert("Really? AHAHAHA", "An other orc give you a small axe, smile at you, and run away. The leader comes to you.")
    detailEnemy(enemyArray[12], "Idiot.");
}

function agreeWithLeaderOrc() {
    closePromptBox();
    promptBox(`"You dont seem so retarded for a human, maybe i can let you investigate further.<br>
    For what we know, the problem comes from the east. <br>
    I am gonna give you a better weapon than your shit you had before, and teleport you far from here.
    <br>
    [new weapon! +3force]<br>
    
    
    <input type="button" onclick='closePromptBox(), TP("After the river")' value="Let's go! Thank chef!">`)
    modifyWeapon("white-sword");
    addingForce(3);
    localStorage.setItem("theLostLandScenario", 1);
}

function setLostLandScenario(whatNumber) {
    localStorage.setItem("theLostLandScenario", whatNumber)
}