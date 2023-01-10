

/* ZOOM ON PIC + REMOVE ANIMATION BALLS */
let imgJoan = document.getElementById("photoJoan");
const containerBalls = document.getElementsByClassName("container")[0];
const sectionOne = document.getElementById("one");

imgJoan.addEventListener("click", () => {
    containerBalls.classList.add("displayNone");
    createNewPic();
});

function createNewPic() {
    let newImgJoan = document.createElement("img");
    newImgJoan.setAttribute("src", "img/PhotoJoanVigne.jpg");
    newImgJoan.setAttribute("id", "zoomedPhoto");
    newImgJoan.addEventListener("click", () => {
        let zoomedPhoto = document.getElementById("zoomedPhoto");
        zoomedPhoto.remove();
        containerBalls.classList.remove("displayNone");
    })
    sectionOne.append(newImgJoan);

}

/*  BACK TO THE TOP */


let buttonToTop = document.getElementsByClassName("buttonToTop")[0];
buttonToTop.addEventListener("click", smoothTop);

function smoothTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
