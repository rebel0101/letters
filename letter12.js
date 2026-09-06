/* =========================================================
   LETTER XII — FOREVER TOGETHER
   12.4 — CINEMATIC OPENING REVEAL
   ========================================================= */

(() => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const hero =
        document.getElementById(
            "letter12Hero"
        );

    const heroContent =
        hero
            ? hero.querySelector(
                ".l12-hero-content"
            )
            : null;

    const heroIdentity =
        hero
            ? hero.querySelector(
                ".l12-hero-identity"
            )
            : null;

    const heroTitle =
        hero
            ? hero.querySelector(
                "h1"
            )
            : null;

    const heroOpening =
        hero
            ? hero.querySelector(
                ".l12-hero-opening"
            )
            : null;

    const heroScroll =
        hero
            ? hero.querySelector(
                ".l12-hero-scroll"
            )
            : null;


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    if (hero) {

        hero.classList.add(
            "l12-hero-ready"
        );

    }


    /* =====================================================
       CINEMATIC REVEAL
    ===================================================== */

    const revealHero = () => {

        if (!hero) {
            return;
        }


        /* ---------------------------------------------
           HERO CONTENT
        --------------------------------------------- */

        if (heroContent) {

            heroContent.classList.add(
                "l12-hero-content-visible"
            );

        }


        /* ---------------------------------------------
           IDENTITY
        --------------------------------------------- */

        if (heroIdentity) {

            window.setTimeout(() => {

                heroIdentity.classList.add(
                    "l12-hero-identity-visible"
                );

            }, reducedMotion ? 0 : 250);

        }


        /* ---------------------------------------------
           TITLE
        --------------------------------------------- */

        if (heroTitle) {

            window.setTimeout(() => {

                heroTitle.classList.add(
                    "l12-hero-title-visible"
                );

            }, reducedMotion ? 0 : 750);

        }


        /* ---------------------------------------------
           OPENING TEXT
        --------------------------------------------- */

        if (heroOpening) {

            window.setTimeout(() => {

                heroOpening.classList.add(
                    "l12-hero-opening-visible"
                );

            }, reducedMotion ? 0 : 1400);

        }


        /* ---------------------------------------------
           KEEP READING
        --------------------------------------------- */

        if (heroScroll) {

            window.setTimeout(() => {

                heroScroll.classList.add(
                    "l12-hero-scroll-visible"
                );

            }, reducedMotion ? 0 : 3000);

        }

    };


    /* =====================================================
       START REVEAL
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            revealHero,
            {
                once: true
            }
        );

    } else {

        revealHero();

    }


    /* =====================================================
       HERO SCROLL ASSIST
    ===================================================== */

    if (heroScroll) {

        heroScroll.addEventListener(
            "click",
            () => {

                const letterSection =
                    document.getElementById(
                        "foreverTogetherLetter"
                    );

                if (!letterSection) {
                    return;
                }


                letterSection.scrollIntoView({
                    behavior:
                        reducedMotion
                            ? "auto"
                            : "smooth",

                    block: "start"
                });

            }
        );

    }


})();

/* =========================================================
   12.5 — GRAND FINALE REVEAL
   ========================================================= */

const finaleSection =
    document.getElementById("letter12Finale");

const finaleReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (finaleSection) {

    /* =========================================
       REDUCED MOTION
       ========================================= */

    if (finaleReducedMotion) {

        finaleSection.classList.add(
            "l12-finale-visible"
        );

    }


    /* =========================================
       NORMAL CINEMATIC REVEAL
       ========================================= */

    else if (
        "IntersectionObserver" in window
    ) {

        const finaleObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        finaleSection.classList.add(
                            "l12-finale-visible"
                        );

                        observer.unobserve(
                            finaleSection
                        );

                    });

                },
                {
                    threshold: 0.25
                }
            );


        finaleObserver.observe(
            finaleSection
        );

    }


    /* =========================================
       FALLBACK
       ========================================= */

    else {

        finaleSection.classList.add(
            "l12-finale-visible"
        );

    }

}

/* =========================================================
   12.6 — FINAL LETTER SCROLL REVEAL
   ========================================================= */

const letterSection =
    document.getElementById(
        "foreverTogetherLetter"
    );

const letterReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (letterSection) {

    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    if (letterReducedMotion) {

        letterSection.classList.add(
            "l12-letter-visible"
        );

    }


    /* =====================================================
       NORMAL CINEMATIC REVEAL
       ===================================================== */

    else if (
        "IntersectionObserver" in window
    ) {

        const letterObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        letterSection.classList.add(
                            "l12-letter-visible"
                        );

                        observer.unobserve(
                            letterSection
                        );

                    });

                },
                {
                    threshold: 0.15
                }
            );


        letterObserver.observe(
            letterSection
        );

    }


    /* =====================================================
       FALLBACK
       ===================================================== */

    else {

        letterSection.classList.add(
            "l12-letter-visible"
        );

    }

}

/* =========================================================
   12.7 — URDU ROMANTIC LINES REVEAL
   ========================================================= */

const urduSection =
    document.querySelector(".l12-urdu");

const urduReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (urduSection) {

    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    if (urduReducedMotion) {

        urduSection.classList.add(
            "l12-urdu-visible"
        );

    }


    /* =====================================================
       NORMAL CINEMATIC REVEAL
       ===================================================== */

    else if (
        "IntersectionObserver" in window
    ) {

        const urduObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        urduSection.classList.add(
                            "l12-urdu-visible"
                        );

                        observer.unobserve(
                            urduSection
                        );

                    });

                },
                {
                    threshold: 0.3
                }
            );


        urduObserver.observe(
            urduSection
        );

    }


    /* =====================================================
       FALLBACK
       ===================================================== */

    else {

        urduSection.classList.add(
            "l12-urdu-visible"
        );

    }

}

/* =========================================================
   12.8 — JOURNEY MEMORY CARD REVEAL
   ========================================================= */

const journeyCard =
    document.querySelector(
        ".l12-journey-card"
    );

const journeyReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (journeyCard) {

    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    if (journeyReducedMotion) {

        journeyCard.classList.add(
            "l12-journey-visible"
        );

    }


    /* =====================================================
       NORMAL CINEMATIC REVEAL
       ===================================================== */

    else if (
        "IntersectionObserver" in window
    ) {

        const journeyObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        journeyCard.classList.add(
                            "l12-journey-visible"
                        );

                        observer.unobserve(
                            journeyCard
                        );

                    });

                },
                {
                    threshold: 0.3
                }
            );


        journeyObserver.observe(
            journeyCard
        );

    }


    /* =====================================================
       FALLBACK
       ===================================================== */

    else {

        journeyCard.classList.add(
            "l12-journey-visible"
        );

    }

}

/* =========================================================
   12.9 — FOREVER PROMISE REVEAL
   ========================================================= */

const foreverPromise =
    document.querySelector(
        ".l12-forever-promise"
    );

const promiseReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

if (foreverPromise) {

    if (promiseReducedMotion) {

        foreverPromise.classList.add(
            "l12-promise-visible"
        );

    } else if (
        "IntersectionObserver" in window
    ) {

        const promiseObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        foreverPromise.classList.add(
                            "l12-promise-visible"
                        );

                        observer.unobserve(
                            foreverPromise
                        );

                    });

                },
                {
                    threshold: 0.3
                }
            );

        promiseObserver.observe(
            foreverPromise
        );

    } else {

        foreverPromise.classList.add(
            "l12-promise-visible"
        );

    }
}

/* =========================================================
   12.10 — FINAL LOVE QUOTE REVEAL
   ========================================================= */

const finalLoveQuote =
    document.querySelector(
        ".l12-love-quote"
    );

const quoteReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

if (finalLoveQuote) {

    if (quoteReducedMotion) {

        finalLoveQuote.classList.add(
            "l12-quote-visible"
        );

    } else if (
        "IntersectionObserver" in window
    ) {

        const quoteObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        finalLoveQuote.classList.add(
                            "l12-quote-visible"
                        );

                        observer.unobserve(
                            finalLoveQuote
                        );

                    });

                },
                {
                    threshold: 0.35
                }
            );

        quoteObserver.observe(
            finalLoveQuote
        );

    } else {

        finalLoveQuote.classList.add(
            "l12-quote-visible"
        );

    }
}

/* =========================================================
   12.11 — SIGNATURE REVEAL
   ========================================================= */

const letterClosing =
    document.querySelector(
        ".l12-letter-closing"
    );

const signatureReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

if (letterClosing) {

    if (signatureReducedMotion) {

        letterClosing.classList.add(
            "l12-signature-visible"
        );

    } else if (
        "IntersectionObserver" in window
    ) {

        const signatureObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        letterClosing.classList.add(
                            "l12-signature-visible"
                        );

                        observer.unobserve(
                            letterClosing
                        );

                    });

                },
                {
                    threshold: 0.35
                }
            );

        signatureObserver.observe(
            letterClosing
        );

    } else {

        letterClosing.classList.add(
            "l12-signature-visible"
        );

    }
}

/* =========================================================
   12.12 — GRAND FINALE CINEMATIC REVEAL
   ========================================================= */

const grandFinale =
    document.getElementById(
        "letter12Finale"
    );

const finaleMotionReduced =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

if (grandFinale) {

    if (finaleMotionReduced) {

        grandFinale.classList.add(
            "l12-grand-finale-visible"
        );

    } else if (
        "IntersectionObserver" in window
    ) {

        const grandFinaleObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        grandFinale.classList.add(
                            "l12-grand-finale-visible"
                        );

                        observer.unobserve(
                            grandFinale
                        );

                    });

                },
                {
                    threshold: 0.25
                }
            );

        grandFinaleObserver.observe(
            grandFinale
        );

    } else {

        grandFinale.classList.add(
            "l12-grand-finale-visible"
        );

    }
}

/* =========================================================
   12.13 — FINAL CLOSING SCREEN REVEAL
   ========================================================= */

const finalEnding =
    document.getElementById(
        "letter12Ending"
    );

const endingReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

if (finalEnding) {

    if (endingReducedMotion) {

        finalEnding.classList.add(
            "l12-ending-visible"
        );

    } else if (
        "IntersectionObserver" in window
    ) {

        const endingObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        finalEnding.classList.add(
                            "l12-ending-visible"
                        );

                        observer.unobserve(
                            finalEnding
                        );

                    });

                },
                {
                    threshold: 0.3
                }
            );

        endingObserver.observe(
            finalEnding
        );

    } else {

        finalEnding.classList.add(
            "l12-ending-visible"
        );

    }
}