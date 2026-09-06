(() => {

    "use strict";


    /* =====================================================
       LETTER XI — CINEMATIC REVEAL ENGINE
       ===================================================== */


    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /* =====================================================
       HERO
       ===================================================== */

    const hero =
        document.getElementById("letter11Hero");


    if (hero) {

        if (reducedMotion) {

            hero.classList.add(
                "l11-hero-visible"
            );

        } else {

            window.setTimeout(() => {

                hero.classList.add(
                    "l11-hero-visible"
                );

            }, 180);

        }

    }


    /* =====================================================
       SECTIONS
       ===================================================== */

    const sections = [

        {
            id: "letter11QuestionIntro",
            visible: "l11-question-visible"
        },

        {
            id: "proposalLetter",
            visible: "l11-paper-visible",
            extra: "l11-paper-content-visible"
        },

        {
            id: "letter11Promise",
            visible: "l11-promise-visible"
        },

        {
            id: "proposalMoment",
            visible: "l11-proposal-visible"
        },

        {
            id: "proposalClimax",
            visible: "l11-climax-visible"
        },

        
        {
            id: "continueToLetter12",
            visible: "l11-continue-visible"
        }

    ];


    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    if (reducedMotion) {

        sections.forEach((item) => {

            const section =
                document.getElementById(item.id);

            if (!section) return;


            section.classList.add(
                item.visible
            );


            if (item.extra) {

                window.setTimeout(() => {

                    section.classList.add(
                        item.extra
                    );

                }, 0);

            }

        });

    }


    /* =====================================================
       NORMAL INTERSECTION OBSERVER
       ===================================================== */

    else if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(

                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        const section =
                            entry.target;


                        const item =
                            sections.find(
                                (data) =>
                                    data.id ===
                                    section.id
                            );


                        if (!item) {
                            return;
                        }


                        /* Main reveal */

                        section.classList.add(
                            item.visible
                        );


                        /* Paper content stagger */

                        if (item.extra) {

                            window.setTimeout(() => {

                                section.classList.add(
                                    item.extra
                                );

                            }, 500);

                        }


                        /* Stop observing */

                        observerInstance.unobserve(
                            section
                        );

                    });

                },

                {
                    threshold: 0.14,

                    rootMargin:
                        "0px 0px -70px 0px"
                }

            );


        sections.forEach((item) => {

            const section =
                document.getElementById(item.id);


            if (section) {

                observer.observe(section);

            }

        });

    }


    /* =====================================================
       FALLBACK
       ===================================================== */

    else {

        sections.forEach((item) => {

            const section =
                document.getElementById(item.id);

            if (!section) return;


            section.classList.add(
                item.visible
            );


            if (item.extra) {

                section.classList.add(
                    item.extra
                );

            }

        });

    }

    /* =========================================================
   11.4 — PROPOSAL INTERACTION
   YES / RUNAWAY NO / CELEBRATION
   ========================================================= */

const yesButton =
    document.getElementById(
        "l11YesButton"
    );

const noButton =
    document.getElementById(
        "l11NoButton"
    );

const noHint =
    document.getElementById(
        "l11NoHint"
    );

const yesCelebration =
    document.getElementById(
        "l11YesCelebration"
    );

    const celebrationClose =
    document.getElementById(
        "l11CelebrationClose"
    );

const proposalClimax =
    document.getElementById(
        "proposalClimax"
    );

const whooshSound =
    document.getElementById(
        "whooshSound"
    );

    /* =========================================================
   NO BUTTON — SAFE RUNAWAY SYSTEM
   ========================================================= */

if (noButton) {

    let noAttempts = 0;

    const noMessages = [
        "Are you sure? 👀",
        "Nice try. 😌",
        "Nope, not happening. 😂",
        "You know the answer. ❤️"
    ];

    const moveNoButton = () => {

        noAttempts++;

        /*
         * Keep the button inside the proposal climax.
         * Never allow it to leave the visible area.
         */

        const section =
            document.getElementById(
                "proposalClimax"
            );

        if (!section) {
            return;
        }


        /* ---------------------------------------------
           BUTTON DIMENSIONS
        --------------------------------------------- */

        const buttonWidth =
            noButton.offsetWidth;

        const buttonHeight =
            noButton.offsetHeight;


        /* ---------------------------------------------
           PROPOSAL BLOCK BOUNDS
        --------------------------------------------- */

        const sectionRect =
            section.getBoundingClientRect();

        const safePadding = 28;


        /*
         * Convert proposal section into viewport-safe
         * coordinates.
         */

        const minX =
            Math.max(
                safePadding,
                sectionRect.left + safePadding
            );

        const maxX =
            Math.min(
                window.innerWidth -
                    buttonWidth -
                    safePadding,
                sectionRect.right -
                    buttonWidth -
                    safePadding
            );

        const minY =
            Math.max(
                safePadding,
                sectionRect.top + safePadding
            );

        const maxY =
            Math.min(
                window.innerHeight -
                    buttonHeight -
                    safePadding,
                sectionRect.bottom -
                    buttonHeight -
                    safePadding
            );


        /* ---------------------------------------------
           GUARANTEED VISIBLE RANDOM POSITION
        --------------------------------------------- */

        const xRange =
            Math.max(
                0,
                maxX - minX
            );

        const yRange =
            Math.max(
                0,
                maxY - minY
            );


        const x =
            minX +
            Math.random() * xRange;

        const y =
            minY +
            Math.random() * yRange;


        /* ---------------------------------------------
           FORCE VISIBILITY
        --------------------------------------------- */

        noButton.style.left =
            `${x}px`;

        noButton.style.top =
            `${y}px`;

        noButton.style.opacity =
            "1";

        noButton.style.visibility =
            "visible";

        noButton.style.pointerEvents =
            "auto";


        /* ---------------------------------------------
           RUNAWAY STATE
        --------------------------------------------- */

        noButton.classList.add(
            "l11-no-running"
        );


        /* ---------------------------------------------
           PLAYFUL MESSAGE
        --------------------------------------------- */

        if (noHint) {

            const messageIndex =
                Math.min(
                    noAttempts - 1,
                    noMessages.length - 1
                );

            noHint.textContent =
                noMessages[messageIndex];

            noHint.classList.add(
                "l11-no-hint-visible"
            );

        }


        /* ---------------------------------------------
           PLAYFUL ROTATION
        --------------------------------------------- */

        const rotation =
            Math.random() * 8 - 4;

        noButton.style.transform =
            `rotate(${rotation}deg)`;

    };


    /* ---------------------------------------------
       DESKTOP
    --------------------------------------------- */

    noButton.addEventListener(
        "mouseenter",
        moveNoButton
    );


    /* ---------------------------------------------
       MOBILE / TOUCH
    --------------------------------------------- */

    noButton.addEventListener(
        "touchstart",
        (event) => {

            event.preventDefault();

            moveNoButton();

        },
        {
            passive: false
        }
    );


    /* ---------------------------------------------
       EXTRA PROTECTION
    --------------------------------------------- */

    noButton.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            moveNoButton();

        }
    );

}


/* =========================================================
   YES BUTTON — FOREVER
   ========================================================= */

if (yesButton) {

    let accepted = false;


    yesButton.addEventListener(
        "click",
        () => {

            if (accepted) {
                return;
            }


            accepted = true;


            /* ---------------------------------------------
               CLICK SOUND
               Uses existing clickSound declaration
            --------------------------------------------- */

            if (clickSound) {

                clickSound.currentTime = 0;

                clickSound.play().catch(() => {
                    /* Ignore playback errors */
                });

            }


            /* ---------------------------------------------
               WHOOSH SOUND
            --------------------------------------------- */

            if (whooshSound) {

                window.setTimeout(() => {

                    whooshSound.currentTime = 0;

                    whooshSound.play().catch(() => {
                        /* Ignore playback errors */
                    });

                }, 250);

            }


            /* ---------------------------------------------
               DISABLE BUTTONS
            --------------------------------------------- */

            yesButton.disabled = true;

            yesButton.setAttribute(
                "aria-disabled",
                "true"
            );


            if (noButton) {

                noButton.disabled = true;

                noButton.style.pointerEvents =
                    "none";

                noButton.style.opacity =
                    "0";

            }


            /* ---------------------------------------------
               ACCEPTED STATE
            --------------------------------------------- */

            if (proposalClimax) {

                proposalClimax.classList.add(
                    "l11-proposal-accepted"
                );

            }


            /* ---------------------------------------------
               CELEBRATION
            --------------------------------------------- */

            if (yesCelebration) {

                yesCelebration.setAttribute(
                    "aria-hidden",
                    "false"
                );


                yesCelebration.classList.add(
                    "l11-celebration-visible"
                );

            }

                       /* ---------------------------------------------
               CLOSE CELEBRATION
            --------------------------------------------- */

            if (celebrationClose) {

                celebrationClose.addEventListener(
                    "click",
                    () => {

                        if (yesCelebration) {

                            yesCelebration.classList.remove(
                                "l11-celebration-visible"
                            );

                            yesCelebration.setAttribute(
                                "aria-hidden",
                                "true"
                            );

                        }


                    }
                );

            }

        }
    );

}

   /* =====================================================
   LETTER XII TRANSITION
===================================================== */

const continueButton =
    document.getElementById(
        "letter11ContinueBtn"
    );

const clickSound =
    document.getElementById(
        "clickSound"
    );


if (continueButton) {

    let leaving = false;


    continueButton.addEventListener(
        "click",
        () => {

            if (leaving) {
                return;
            }


            leaving = true;


            /* =========================================
               BUTTON CLICK SOUND
            ========================================= */

            if (clickSound) {

                clickSound.currentTime = 0;

                clickSound.play().catch(() => {
                    /* Ignore playback errors */
                });

            }


            /* =========================================
               DISABLE BUTTON
            ========================================= */

            continueButton.disabled = true;

            continueButton.setAttribute(
                "aria-disabled",
                "true"
            );


            /* =========================================
               PAGE LEAVING ANIMATION
            ========================================= */

            const main =
                document.getElementById(
                    "letter11Main"
                );


            if (main) {

                main.classList.add(
                    "l11-page-leaving"
                );

            }


            /* =========================================
               LETTER XII NAVIGATION
            ========================================= */

            const delay =
                reducedMotion
                    ? 0
                    : 900;


            window.setTimeout(() => {

                window.location.href =
                    "letter12.html";

            }, delay);

        }
    );

}


})();