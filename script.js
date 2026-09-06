/*======================================================
        LETTERS TO MY GULABO
        VERSION 3.0
======================================================*/

/*======================================================
DOM
======================================================*/

const loader = document.getElementById("loader");

const lockScreen = document.getElementById("lockScreen");

const intro = document.getElementById("intro");

const password = document.getElementById("password");

const unlockBtn = document.getElementById("unlockBtn");

const wrongPassword = document.getElementById("wrongPassword");


/*======================================================
PASSWORD
======================================================*/

const REAL_PASSWORD = "1904";


/*======================================================
LOADER
======================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("fade-out");

    }, 1800);

});


/*======================================================
ENTER KEY
======================================================*/

password.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        unlockWebsite();

    }

});


unlockBtn.addEventListener("click", unlockWebsite);


/*======================================================
UNLOCK FUNCTION
======================================================*/

function unlockWebsite() {

    if (password.value === REAL_PASSWORD) {

        wrongPassword.style.display = "none";

        startMovie();

    }

    else {

        wrongPassword.style.display = "block";

        password.value = "";

        password.focus();

        document.querySelector(".glass-box").classList.add("shake");

        setTimeout(() => {

            document.querySelector(".glass-box")
            .classList.remove("shake");

        }, 500);

    }

}


/*======================================================
START MOVIE
======================================================*/

function startMovie() {

    lockScreen.classList.add("fade-out");

    setTimeout(() => {

        intro.classList.add("show");

    }, 1200);

}

/*======================================================
INTRO END
======================================================*/

const moonWorld = document.getElementById("moonWorld");

intro.addEventListener("animationend", () => {

    intro.style.display = "none";

    moonWorld.style.display = "flex";

    console.log("Moon World Loaded 🌙");

});


/*======================================================
COMING SOON
======================================================*/

// Moon World

// Envelope

// Letter

// Shayari

// Gallery

// Timeline

// Reasons

// Forgive

// Credits
/*======================================================
SHOOTING STARS
======================================================*/

const shootingContainer =
document.getElementById("shootingStars");

function createStar(){

    const star =
    document.createElement("div");

    star.className =
    "shooting-star";

    star.style.top =
    Math.random()*40 + "%";

    star.style.left =
    Math.random()*100 + "%";

    star.style.animation =
    `shootingStar ${
        2+Math.random()*2
    }s linear forwards`;

    shootingContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },4000);

}

setInterval(createStar,3500);

/*======================================================
            FIREFLIES ENGINE
======================================================*/

const fireflyContainer =
document.getElementById("fireflies");

function createFirefly(){

    const firefly =
    document.createElement("div");

    firefly.className =
    "firefly";

    firefly.style.left =
    Math.random()*100 + "%";

    firefly.style.top =
    Math.random()*100 + "%";

    firefly.style.animation =
    `
    fireflyBlink ${2+Math.random()*3}s infinite,
    ${
        ["fireflyFloat1","fireflyFloat2","fireflyFloat3"]
        [Math.floor(Math.random()*3)]
    }
    ${8+Math.random()*8}s linear infinite
    `;

    fireflyContainer.appendChild(firefly);

}

function initFireflies(){

    for(let i=0;i<40;i++){

        createFirefly();

    }

}

initFireflies();

/*======================================================
TOUCH MOON
======================================================*/

const touchMoon =
document.getElementById("touchMoon");

const realMoon =
document.querySelector(".realMoon");

touchMoon.addEventListener("click", () => {

    /* Button Hide */

    touchMoon.style.opacity = "0";

    touchMoon.style.pointerEvents = "none";

    /* Moon Zoom */

    realMoon.style.transition =
    "2s ease";

    realMoon.style.transform =
    "scale(1.35)";

    realMoon.style.boxShadow =
    `
    0 0 100px white,
    0 0 200px rgba(255,255,255,.7),
    0 0 350px rgba(255,255,255,.35)
    `;

    /* Fade */

    setTimeout(()=>{

        moonWorld.classList.add("fade-out");

    },1800);

    /* Next Scene */

    setTimeout(()=>{

        moonWorld.style.display="none";

        console.log("Open Envelope Scene 💌");

        /*======================================================
OPEN ENVELOPE SCENE
======================================================*/

const envelopeScene =
document.getElementById("envelopeScene");

setTimeout(()=>{

    envelopeScene.style.display="flex";

    const envelope =
    document.querySelector(".envelope");

    gsap.fromTo(

        envelope,

        {

            scale:.3,

            opacity:0,

            rotateY:180

        },

        {

            duration:1.4,

            scale:1,

            opacity:1,

            rotateY:0,

            ease:"back.out(1.7)",

            onComplete:()=>{

                setTimeout(()=>{

                   envelope.classList.add("open");

setTimeout(() => {

    envelope.classList.add("focus");

},1200);

startTypewriter();

console.log("Envelope Opened 💌");

                },800);

            }

        }

    );

},200);

        // Next Phase:
        // Envelope

    },3000);

});

/*======================================================
PHASE 3D.2
TYPEWRITER ENGINE
======================================================*/

const letterMessage = `
I know...

Sometimes words are not enough...

But today...

I just want you to know that every heartbeat of mine still whispers your name.

This little world is only for you. ❤️`;

const typeLetter =
document.getElementById("typeLetter");

const continueBtn =
document.getElementById("continueBtn");

const envelope =
document.querySelector(".envelope");

const letterPaper =
document.querySelector(".letter-paper");

let transitionRunning = false;

let letterIndex = 0;

function startTypewriter(){

    typeLetter.innerHTML="";

    letterIndex=0;

    typeWriter();

}

function typeWriter(){

    if(letterIndex < letterMessage.length){

        typeLetter.innerHTML +=
        letterMessage.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeWriter,25);

    }

    else{

         console.log("TYPEWRITER FINISHED");

         typeLetter.classList.add("finished");

    continueBtn.classList.add("show");

    }

}

/*======================================================
CONTINUE CLICK
======================================================*/

continueBtn.addEventListener("click", () => {

    if (transitionRunning) return;

    transitionRunning = true;

    continueBtn.disabled = true;

    continueBtn.style.pointerEvents = "none";

    continueBtn.classList.add("clicked");

    envelope.classList.add("transition");

    letterPaper.classList.add("glow");

    const envelopeScene =
document.getElementById("envelopeScene");

setTimeout(() => {

    envelopeScene.classList.add("zooming");

    envelope.classList.add("zoom");

    letterPaper.classList.add("zoom");

},250);

const pageFade = document.getElementById("pageFade");

setTimeout(() => {

    pageFade.classList.add("show");

},1200);

setTimeout(() => {

    window.location.href = "letter1.html";

},2300);

});
