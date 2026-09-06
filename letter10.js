/* =========================================================
   LETTER 10 — FOREVER YOURS
   COMPLETE CINEMATIC JS
========================================================= */

(() => {

    "use strict";


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const l10ReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;



    /* =====================================================
       HERO
    ===================================================== */

    const l10Hero =
        document.getElementById(
            "letter10Hero"
        );


    if (l10Hero) {

        requestAnimationFrame(() => {

            l10Hero.classList.add(
                "l10-hero-visible"
            );

        });

    }



    /* =====================================================
       SECTION REVEAL
    ===================================================== */

    const l10RevealSections = [

        document.getElementById(
            "foreverYoursLetter"
        ),

        document.getElementById(
            "letter10Pause"
        ),

        document.getElementById(
            "letter10Promise"
        ),

        document.getElementById(
            "letter10Final"
        ),

        document.getElementById(
            "continueToLetter11"
        )

    ].filter(Boolean);



    /* =====================================================
       FALLBACK / REDUCED MOTION
    ===================================================== */

    if (
        l10ReducedMotion ||
        !("IntersectionObserver" in window)
    ) {

        l10RevealSections.forEach(
            (section) => {

                section.classList.add(
                    "l10-visible"
                );

            }
        );

    }



    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    else {

        const l10Observer =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            const section =
                                entry.target;


                            section.classList.add(
                                "l10-visible"
                            );


                            observer.unobserve(
                                section
                            );

                        }
                    );

                },

                {
                    threshold: 0.14,

                    rootMargin:
                        "0px 0px -70px 0px"
                }

            );


        l10RevealSections.forEach(
            (section) => {

                l10Observer.observe(
                    section
                );

            }
        );

    }



    /* =====================================================
       LETTER PAPER REVEAL
    ===================================================== */

    const l10LetterPaper =
        document.getElementById(
            "letter10Paper"
        );


    if (l10LetterPaper) {

        if (
            l10ReducedMotion ||
            !("IntersectionObserver" in window)
        ) {

            l10LetterPaper.classList.add(
                "l10-paper-visible"
            );

        }

        else {

            const l10PaperObserver =
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
                                    "l10-paper-visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }
                        );

                    },

                    {
                        threshold: 0.20,

                        rootMargin:
                            "0px 0px -50px 0px"
                    }

                );


            l10PaperObserver.observe(
                l10LetterPaper
            );

        }

    }



    /* =====================================================
       LETTER 10 → LETTER 11
    ===================================================== */

    const l10ContinueBtn =
        document.getElementById(
            "letter10ContinueBtn"
        );


    const l10ContinueSection =
        document.getElementById(
            "continueToLetter11"
        );


    if (l10ContinueBtn) {

        let l10Leaving = false;


        l10ContinueBtn.addEventListener(
            "click",
            () => {

                if (l10Leaving) {

                    return;

                }


                l10Leaving = true;


                l10ContinueBtn.disabled =
                    true;


                l10ContinueBtn.setAttribute(
                    "aria-disabled",
                    "true"
                );


                /* -----------------------------------------
                   CLICK SOUND
                ----------------------------------------- */

                const l10ClickSound =
                    document.getElementById(
                        "clickSound"
                    );


                if (l10ClickSound) {

                    l10ClickSound.currentTime = 0;

                    l10ClickSound
                        .play()
                        .catch(() => {});

                }



                /* -----------------------------------------
                   WHOOSH
                ----------------------------------------- */

                const l10WhooshSound =
                    document.getElementById(
                        "whooshSound"
                    );


                if (l10WhooshSound) {

                    setTimeout(() => {

                        l10WhooshSound.currentTime = 0;

                        l10WhooshSound
                            .play()
                            .catch(() => {});

                    }, 220);

                }



                /* -----------------------------------------
                   LEAVING ANIMATION
                ----------------------------------------- */

                if (l10ContinueSection) {

                    l10ContinueSection.classList.add(
                        "l10-leaving"
                    );

                }



                /* -----------------------------------------
                   NEXT LETTER
                ----------------------------------------- */

                setTimeout(
                    () => {

                        window.location.href =
                            "letter11.html";

                    },

                    l10ReducedMotion
                        ? 0
                        : 900

                );

            }
        );

    }



})();