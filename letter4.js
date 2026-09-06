/* =========================================================
   LETTER 4 — LONG DISTANCE / WAITING
   CLEAN CINEMATIC JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. DOM ELEMENTS
   ========================================================= */

const page =
    document.body;

const starsContainer =
    document.getElementById("stars");

const moon =
    document.querySelector(".moon");

const paperSound =
    document.getElementById("paperSound");

const clickSound =
    document.getElementById("clickSound");

const transitionSound =
    document.getElementById("transitionSound");

const pageTransition =
    document.getElementById("pageTransition");

const nextBtn =
    document.getElementById("nextLetterBtn");

    let isLeavingPage = false;

/* =========================================================
   2. RANDOM STARS
   ========================================================= */

function createStars() {

    if (!starsContainer) return;


    const totalStars = 90;


    for (
        let i = 0;
        i < totalStars;
        i++
    ) {

        const star =
            document.createElement("span");


        star.className =
            "star";


        /* Random position */

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;


        /* Random size */

        const size =
            1.5 + Math.random() * 3;

        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;


        /* Random animation */

        star.style.animationDuration =
            `${2 + Math.random() * 4}s`;

        star.style.animationDelay =
            `${Math.random() * 4}s`;


        /* Random opacity */

        star.style.opacity =
            0.2 + Math.random() * 0.8;


        starsContainer.appendChild(
            star
        );

    }

}


createStars();



/* =========================================================
   3. MOON PARALLAX + MOUSE MOVEMENT
   ========================================================= */

let scrollY =
    window.scrollY || 0;

let mouseX = 0;

let mouseY = 0;

let currentX = 0;

let currentY = 0;


/* -----------------------------------------
   Scroll
----------------------------------------- */

function handleMoonScroll() {

    scrollY =
        window.scrollY || 0;

}


window.addEventListener(
    "scroll",
    handleMoonScroll,
    { passive: true }
);


/* -----------------------------------------
   Mouse
----------------------------------------- */

if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        (event) => {

            mouseX =
                event.clientX /
                window.innerWidth -
                0.5;

            mouseY =
                event.clientY /
                window.innerHeight -
                0.5;

        }
    );

}


/* -----------------------------------------
   Moon animation
----------------------------------------- */

function animateMoon() {

    if (moon) {

        currentX +=
            (mouseX - currentX) * 0.025;

        currentY +=
            (mouseY - currentY) * 0.025;


        const x =
            currentX * 8;

        const y =
            scrollY * 0.08;


        moon.style.transform =
            `translate3d(${x}px, ${y}px, 0)`;

    }


    requestAnimationFrame(
        animateMoon
    );

}


animateMoon();



/* =========================================================
   4. SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        `
        .waiting-hero,
        .distance-letter,
        .waiting-section,
        .same-moon-section,
        .night-thought,
        .waiting-ending,
        .l4-scroll-reveal,
        .l4-heading-reveal,
        .l4-quote-reveal
        `
    );


if (
    revealElements.length &&
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        /*
                         * Support both
                         * existing reveal systems.
                         */

                        entry.target.classList.add(
                            "visible"
                        );

                        entry.target.classList.add(
                            "l4-visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.15,

                rootMargin:
                    "0px 0px -60px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

}



/* =========================================================
   5. PAGE LOAD
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        page.classList.add(
            "page-loaded"
        );

    }
);



/* =========================================================
   6. SAFE SOUND PLAYER
   ========================================================= */

function playSound(
    sound,
    volume = 1
) {

    if (!sound) return;


    try {

        sound.pause();

        sound.currentTime = 0;

        sound.volume = volume;


        const playPromise =
            sound.play();


        if (
            playPromise &&
            typeof playPromise.catch ===
            "function"
        ) {

            playPromise.catch(
                () => {}
            );

        }

    }

    catch (error) {

        /* Ignore sound errors */

    }

}






/* =========================================================
   15. LETTER OPENING SOUND
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                playSound(
                    paperSound,
                    0.35
                );

            },
            450
        );

    }
);



/* =========================================================
   16. NEXT LETTER
   ========================================================= */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        () => {

            /*
             * Prevent double click
             */

            if (
                isLeavingPage
            ) {

                return;

            }


            isLeavingPage =
                true;


            nextBtn.disabled =
                true;

            /* -----------------------------------------
               CLICK SOUND
            ----------------------------------------- */

            playSound(
                clickSound,
                0.30
            );


            /* -----------------------------------------
               WHOOSH SOUND
            ----------------------------------------- */

            setTimeout(
                () => {

                    playSound(
                        transitionSound,
                        0.30
                    );

                },
                120
            );

            /* -----------------------------------------
               PAGE TRANSITION
            ----------------------------------------- */

            if (pageTransition) {

                pageTransition.classList.add(
                    "active"
                );

            }


            /* -----------------------------------------
               PAGE ZOOM / FADE
            ----------------------------------------- */

            page.classList.add(
                "leaving"
            );


            /* -----------------------------------------
               NEXT LETTER
            ----------------------------------------- */

            setTimeout(
                () => {

                    const match =
                        window.location.pathname
                        .match(
                            /letter(\d+)/i
                        );


                    if (!match) {

                        return;

                    }


                    const currentLetter =
                        Number(
                            match[1]
                        );


                    if (
                        currentLetter < 12
                    ) {

                        window.location.href =
                            `letter${
                                currentLetter + 1
                            }.html`;

                    }

                    else {

                        window.location.href =
                            "finale.html";

                    }

                },
                1100
            );

        }
    );

}







