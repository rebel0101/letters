/* =========================================================
   LETTER 5 — PROMISES
   STEP 3 — GOLDEN PARTICLES + FLOATING HEARTS
========================================================= */


/* =========================================================
   GOLDEN PARTICLES
========================================================= */

const goldenParticles =
    document.getElementById(
        "goldenParticles"
    );


function createGoldenParticle() {

    if (!goldenParticles) return;


    const particle =
        document.createElement("span");


    particle.className =
        "golden-particle";


    /* Random horizontal position */

    particle.style.left =
        Math.random() * 100 + "%";


    /* Start slightly below screen */

    particle.style.top =
        105 + Math.random() * 10 + "%";


    /* Random size */

    const size =
        2 + Math.random() * 4;


    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";


    /* Random animation speed */

    particle.style.animationDuration =
        7 + Math.random() * 8 + "s";


    /* Random delay */

    particle.style.animationDelay =
        Math.random() * 2 + "s";


    /* Random opacity */

    particle.style.opacity =
        0.25 + Math.random() * 0.7;


    /* Slight horizontal movement */

    particle.style.setProperty(
        "--drift",
        -50 + Math.random() * 100 + "px"
    );


    goldenParticles.appendChild(
        particle
    );


    /* Remove after animation */

    setTimeout(
        () => {

            particle.remove();

        },
        17000
    );

}


/* Create particles continuously */

setInterval(
    createGoldenParticle,
    450
);



/* =========================================================
   FLOATING HEARTS
========================================================= */

const floatingHearts =
    document.getElementById(
        "floatingHearts"
    );


function createFloatingHeart() {

    if (!floatingHearts) return;


    const heart =
        document.createElement("span");


    heart.className =
        "floating-heart";


    heart.innerHTML =
        "❤️";


    /* Random position */

    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.top =
        105 + Math.random() * 8 + "%";


    /* Random size */

    heart.style.fontSize =
        10 + Math.random() * 14 + "px";


    /* Random animation */

    heart.style.animationDuration =
        8 + Math.random() * 7 + "s";


    heart.style.animationDelay =
        Math.random() * 2 + "s";


    /* Random opacity */

    heart.style.opacity =
        0.15 + Math.random() * 0.45;


    /* Random sideways movement */

    heart.style.setProperty(
        "--heart-drift",
        -70 + Math.random() * 140 + "px"
    );


    floatingHearts.appendChild(
        heart
    );


    /* Remove after animation */

    setTimeout(
        () => {

            heart.remove();

        },
        17000
    );

}


/* Create hearts slowly */

setInterval(
    createFloatingHeart,
    2200
);

/* =========================================================
   LETTER 5 — STEP 4
   CINEMATIC PROMISE CARDS
========================================================= */


/* =========================================================
   PROMISE CARD REVEAL
========================================================= */

const promiseCards =
    document.querySelectorAll(
        ".promise-card"
    );


if (
    promiseCards.length &&
    "IntersectionObserver" in window
) {

    const promiseObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "promise-visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.18,

                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    promiseCards.forEach(
        (card) => {

            promiseObserver.observe(
                card
            );

        }
    );

}



/* =========================================================
   PROMISE CARD CLICK
========================================================= */

promiseCards.forEach(
    (card) => {

        card.addEventListener(
            "click",
            () => {

                /*
                 * Remove active state
                 * from other cards.
                 */

                promiseCards.forEach(
                    (otherCard) => {

                        if (
                            otherCard !== card
                        ) {

                            otherCard.classList.remove(
                                "promise-active"
                            );

                        }

                    }
                );


                /*
                 * Toggle selected card.
                 */

                card.classList.toggle(
                    "promise-active"
                );

            }
        );

    }
);

/* =========================================================
   LETTER 5 — STEP 5
   CINEMATIC GOLDEN PROMISE
========================================================= */


const goldenPromise =
    document.querySelector(
        ".golden-promise"
    );


if (
    goldenPromise &&
    "IntersectionObserver" in window
) {

    const goldenObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        goldenPromise.classList.add(
                            "promise-center-visible"
                        );


                        observer.unobserve(
                            goldenPromise
                        );

                    }
                );

            },
            {
                threshold: 0.25,

                rootMargin:
                    "0px 0px -80px 0px"
            }
        );


    goldenObserver.observe(
        goldenPromise
    );

}

/* =========================================================
   LETTER 5 — STEP 6
   PROMISE JOURNEY REVEAL
========================================================= */


const promiseJourney =
    document.querySelector(
        ".promise-journey"
    );


const promiseList =
    document.querySelector(
        ".promise-list"
    );


const promiseSteps =
    document.querySelectorAll(
        ".promise-step"
    );


if (
    promiseJourney &&
    "IntersectionObserver" in window
) {

    const journeyObserver =
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
                         * Reveal heading
                         */

                        promiseJourney.classList.add(
                            "journey-visible"
                        );


                        /*
                         * Start timeline line
                         */

                        if (promiseList) {

                            setTimeout(
                                () => {

                                    promiseList.classList.add(
                                        "journey-line-visible"
                                    );

                                },
                                250
                            );

                        }


                        /*
                         * Reveal promises
                         * one after another
                         */

                        promiseSteps.forEach(
                            (step, index) => {

                                setTimeout(
                                    () => {

                                        step.classList.add(
                                            "step-visible"
                                        );

                                    },
                                    450 +
                                    index * 180
                                );

                            }
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.18,

                rootMargin:
                    "0px 0px -70px 0px"
            }
        );


    journeyObserver.observe(
        promiseJourney
    );

}

/* =========================================================
   LETTER 5 — STEP 7
   FINAL PROMISE REVEAL
========================================================= */


const finalPromise =
    document.querySelector(
        ".final-promise"
    );


if (
    finalPromise &&
    "IntersectionObserver" in window
) {

    const finalObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        finalPromise.classList.add(
                            "final-visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.2,

                rootMargin:
                    "0px 0px -60px 0px"
            }
        );


    finalObserver.observe(
        finalPromise
    );

}

/* =========================================================
   LETTER 5 — STEP 8
   CINEMATIC MUSIC + SOUND + PAGE TRANSITION
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */
const l5PaperSound =
    document.getElementById("paperSound");

const l5ClickSound =
    document.getElementById("clickSound");

const l5TransitionSound =
    document.getElementById("transitionSound");

const l5PageTransition =
    document.getElementById("pageTransition");

const l5NextBtn =
    document.getElementById("nextLetterBtn");

let l5Leaving =
    false;


/* =========================================================
   SAFE SOUND PLAYER
========================================================= */

function playL5Sound(
    sound,
    volume = 1
) {

    if (!sound) return;

    try {

        sound.pause();

        sound.currentTime = 0;

        sound.volume = volume;

        const promise =
            sound.play();

        if (promise) {

            promise.catch(
                () => {}
            );

        }

    }

    catch (error) {

        /* Ignore browser sound errors */

    }

}

/* =========================================================
   PAGE OPENING SOUND
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                playL5Sound(
                    l5PaperSound,
                    0.30
                );

            },
            450
        );

    }
);


/* =========================================================
   NEXT LETTER TRANSITION
========================================================= */

if (l5NextBtn) {

    l5NextBtn.addEventListener(
        "click",
        () => {

            if (l5Leaving) {
                return;
            }


            l5Leaving =
                true;


            l5NextBtn.disabled =
                true;

            /* -----------------------------------------
               CLICK SOUND
            ----------------------------------------- */

            playL5Sound(
                l5ClickSound,
                0.30
            );


            /* -----------------------------------------
               WHOOSH
            ----------------------------------------- */

            setTimeout(
                () => {

                    playL5Sound(
                        l5TransitionSound,
                        0.30
                    );

                },
                120
            );

            /* -----------------------------------------
               PAGE TRANSITION
            ----------------------------------------- */

            if (l5PageTransition) {

                l5PageTransition.classList.add(
                    "active"
                );

            }


            document.body.classList.add(
                "leaving"
            );


            /* -----------------------------------------
               NEXT PAGE
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