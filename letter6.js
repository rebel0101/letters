/* =========================================================
   LETTER 6 — GRATITUDE
   CINEMATIC JAVASCRIPT
========================================================= */


/* =========================================================
   DOM
========================================================= */

const l6PageTransition =
    document.getElementById("pageTransition");

const l6NextBtn =
    document.getElementById("nextLetterBtn");

const l6PaperSound =
    document.getElementById("paperSound");

const l6ClickSound =
    document.getElementById("clickSound");

const l6TransitionSound =
    document.getElementById("transitionSound");

const l6Stars =
    document.getElementById("l6Stars");

const l6Petals =
    document.getElementById("l6Petals");

const l6Hearts =
    document.getElementById("floatingHearts");


let l6Leaving = false;


/* =========================================================
   SAFE SOUND PLAYER
========================================================= */

function playL6Sound(sound, volume = 1) {

    if (!sound) return;

    sound.pause();

    sound.currentTime = 0;

    sound.volume = volume;

    sound.play().catch(() => {});

}


/* =========================================================
   STARS
========================================================= */

function createL6Stars() {

    if (!l6Stars) return;

    const totalStars = 90;

    for (let i = 0; i < totalStars; i++) {

        const star =
            document.createElement("span");

        star.className =
            "l6-star";

        const size =
            1 + Math.random() * 2.5;

        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;

        star.style.setProperty(
            "--duration",
            `${2 + Math.random() * 4}s`
        );

        star.style.animationDelay =
            `${Math.random() * 4}s`;

        l6Stars.appendChild(star);

    }

}


createL6Stars();


/* =========================================================
   PETALS
========================================================= */

function createL6Petal() {

    if (!l6Petals) return;

    const petal =
        document.createElement("span");

    petal.className =
        "l6-petal";

    petal.innerHTML =
        ["🌸", "🌹", "🌷"][
            Math.floor(Math.random() * 3)
        ];

    petal.style.left =
        `${Math.random() * 100}%`;

    petal.style.fontSize =
        `${10 + Math.random() * 13}px`;

    petal.style.opacity =
        `${0.18 + Math.random() * 0.45}`;

    petal.style.setProperty(
        "--drift",
        `${-80 + Math.random() * 160}px`
    );

    petal.style.setProperty(
        "--duration",
        `${8 + Math.random() * 8}s`
    );

    l6Petals.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, 17000);

}


setInterval(
    createL6Petal,
    1200
);


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createL6Heart() {

    if (!l6Hearts) return;

    const heart =
        document.createElement("span");

    heart.className =
        "l6-heart";

    heart.innerHTML =
        "❤️";

    heart.style.left =
        `${Math.random() * 100}%`;

    heart.style.fontSize =
        `${10 + Math.random() * 15}px`;

    heart.style.opacity =
        `${0.12 + Math.random() * 0.35}`;

    heart.style.setProperty(
        "--drift",
        `${-80 + Math.random() * 160}px`
    );

    heart.style.setProperty(
        "--duration",
        `${9 + Math.random() * 7}s`
    );

    l6Hearts.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 17000);

}


setInterval(
    createL6Heart,
    2200
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const l6RevealElements =
    document.querySelectorAll(".reveal");


if (
    l6RevealElements.length &&
    "IntersectionObserver" in window
) {

    const l6Observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.16,
                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    l6RevealElements.forEach(
        element => {

            l6Observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   PAGE OPENING SOUND
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                playL6Sound(
                    l6PaperSound,
                    0.30
                );

            },
            450
        );

    }
);


/* =========================================================
   NEXT LETTER
========================================================= */

if (l6NextBtn) {

    l6NextBtn.addEventListener(
        "click",
        () => {

            if (l6Leaving) {
                return;
            }


            l6Leaving =
                true;


            l6NextBtn.disabled =
                true;


            /* -----------------------------
               CLICK SOUND
            ----------------------------- */

            playL6Sound(
                l6ClickSound,
                0.30
            );


            /* -----------------------------
               WHOOSH
            ----------------------------- */

            setTimeout(
                () => {

                    playL6Sound(
                        l6TransitionSound,
                        0.30
                    );

                },
                120
            );


            /* -----------------------------
               PAGE TRANSITION
            ----------------------------- */

            if (l6PageTransition) {

                l6PageTransition.classList.add(
                    "active"
                );

            }


            document.body.classList.add(
                "leaving"
            );


            /* -----------------------------
               NEXT PAGE
            ----------------------------- */

            setTimeout(
                () => {

                    window.location.href =
                        "letter7.html";

                },
                850
            );

        }
    );

}

/* =========================================================
   LETTER 6 — STEP 2
   CINEMATIC INTERACTION ENGINE
========================================================= */


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const l6Progress =
    document.createElement("div");

l6Progress.id =
    "l6ScrollProgress";

document.body.appendChild(
    l6Progress
);


function updateL6Progress() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if (documentHeight <= 0) {

        l6Progress.style.width =
            "0%";

        return;

    }


    const progress =
        (scrollTop / documentHeight) * 100;


    l6Progress.style.width =
        `${Math.min(progress, 100)}%`;

}


window.addEventListener(
    "scroll",
    updateL6Progress,
    { passive: true }
);


updateL6Progress();


/* =========================================================
   MOUSE AMBIENT LIGHT
========================================================= */

if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    let targetX = 50;
    let targetY = 50;

    let currentX = 50;
    let currentY = 50;


    window.addEventListener(
        "mousemove",
        (event) => {

            targetX =
                (event.clientX /
                    window.innerWidth) *
                100;

            targetY =
                (event.clientY /
                    window.innerHeight) *
                100;

        },
        { passive: true }
    );


    function animateAmbientLight() {

        currentX +=
            (targetX - currentX) * .035;

        currentY +=
            (targetY - currentY) * .035;


        document.documentElement.style
            .setProperty(
                "--mouse-x",
                `${currentX}%`
            );


        document.documentElement.style
            .setProperty(
                "--mouse-y",
                `${currentY}%`
            );


        requestAnimationFrame(
            animateAmbientLight
        );

    }


    animateAmbientLight();

}


/* =========================================================
   CARD SPOTLIGHT
========================================================= */

const l6Cards =
    document.querySelectorAll(
        ".gratitude-card"
    );


if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    l6Cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                card.style.setProperty(
                    "--card-x",
                    `${x}px`
                );


                card.style.setProperty(
                    "--card-y",
                    `${y}px`
                );


                const rotateX =
                    -(
                        (y / rect.height) -
                        .5
                    ) * 3;


                const rotateY =
                    (
                        (x / rect.width) -
                        .5
                    ) * 3;


                card.style.transform =
                    `
                    translateY(-8px)
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.015)
                    `;

            },
            { passive: true }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   HERO PARALLAX
========================================================= */

const l6Hero =
    document.querySelector(
        ".gratitude-hero"
    );


if (
    l6Hero &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    let heroTargetX = 0;
    let heroTargetY = 0;

    let heroX = 0;
    let heroY = 0;


    window.addEventListener(
        "mousemove",
        event => {

            heroTargetX =
                (
                    event.clientX /
                    window.innerWidth -
                    .5
                ) * 12;


            heroTargetY =
                (
                    event.clientY /
                    window.innerHeight -
                    .5
                ) * 8;

        },
        { passive: true }
    );


    function animateHeroParallax() {

        heroX +=
            (heroTargetX - heroX) * .035;

        heroY +=
            (heroTargetY - heroY) * .035;


        const symbol =
            l6Hero.querySelector(
                ".hero-symbol"
            );


        if (symbol) {

            symbol.style.transform =
                `
                translate3d(
                    ${heroX * .45}px,
                    ${heroY * .45}px,
                    0
                )
                `;

        }


        requestAnimationFrame(
            animateHeroParallax
        );

    }


    animateHeroParallax();

}


/* =========================================================
   FINAL BUTTON MAGNETIC EFFECT
========================================================= */

const l6Button =
    document.getElementById(
        "nextLetterBtn"
    );


if (
    l6Button &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    l6Button.addEventListener(
        "mousemove",
        event => {

            const rect =
                l6Button.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            const moveX =
                Math.max(
                    -8,
                    Math.min(8, x * .12)
                );


            const moveY =
                Math.max(
                    -6,
                    Math.min(6, y * .12)
                );


            l6Button.style.transform =
                `
                translate(
                    ${moveX}px,
                    ${moveY}px
                )
                scale(1.035)
                `;

        }
    );


    l6Button.addEventListener(
        "mouseleave",
        () => {

            l6Button.style.transform =
                "";

        }
    );

}


/* =========================================================
   PETAL DENSITY BOOST
========================================================= */

let l6PetalBurstTimer =
    null;


function createCinematicPetalBurst() {

    const container =
        document.getElementById(
            "l6Petals"
        );


    if (!container) return;


    for (
        let i = 0;
        i < 3;
        i++
    ) {

        const petal =
            document.createElement(
                "span"
            );


        petal.className =
            "l6-petal";


        petal.innerHTML =
            Math.random() > .5
                ? "🌸"
                : "🌹";


        petal.style.left =
            `${Math.random() * 100}%`;


        petal.style.fontSize =
            `${10 + Math.random() * 12}px`;


        petal.style.opacity =
            `${.15 + Math.random() * .35}`;


        petal.style.setProperty(
            "--drift",
            `${-100 + Math.random() * 200}px`
        );


        petal.style.setProperty(
            "--duration",
            `${9 + Math.random() * 7}s`
        );


        container.appendChild(
            petal
        );


        setTimeout(
            () => petal.remove(),
            17000
        );

    }

}


l6PetalBurstTimer =
    setInterval(
        createCinematicPetalBurst,
        2600
    );


/* =========================================================
   SECTION FOCUS
========================================================= */

const l6Sections =
    document.querySelectorAll(
        ".gratitude-letter, " +
        ".grateful-things, " +
        ".gratitude-reflection, " +
        ".final-gratitude"
    );


if (
    "IntersectionObserver" in window
) {

    const focusObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "cinematic-focus"
                                );

                        }
                        else {

                            entry.target
                                .classList
                                .remove(
                                    "cinematic-focus"
                                );

                        }

                    }
                );

            },
            {
                threshold: .35
            }
        );


    l6Sections.forEach(
        section => {

            focusObserver.observe(
                section
            );

        }
    );

}


/* =========================================================
   CLEANUP
========================================================= */

window.addEventListener(
    "pagehide",
    () => {

        if (l6PetalBurstTimer) {

            clearInterval(
                l6PetalBurstTimer
            );

        }

    }
);

/* =========================================================
   LETTER 6 — STEP 4
   EMOTIONAL MICRO-INTERACTIONS
========================================================= */


/* =========================================================
   FINAL HEART INTERACTION
========================================================= */

const l6FinalHeart =
    document.querySelector(
        ".final-heart"
    );


const l6FinalOrbit =
    document.querySelector(
        ".final-orbit"
    );


if (l6FinalHeart) {

    l6FinalHeart.addEventListener(
        "click",
        () => {

            l6FinalHeart.classList.remove(
                "heart-touched"
            );


            /* Force animation restart */

            void l6FinalHeart.offsetWidth;


            l6FinalHeart.classList.add(
                "heart-touched"
            );


            createL6HeartParticles();

        }
    );

}


/* =========================================================
   HEART PARTICLES
========================================================= */

function createL6HeartParticles() {

    if (!l6FinalOrbit) {
        return;
    }


    const symbols = [
        "♥",
        "✦",
        "♡",
        "♥",
        "✧"
    ];


    for (
        let i = 0;
        i < 7;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "heart-particle";


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        const angle =
            (
                Math.PI * 2 / 7
            ) * i +
            Math.random() * .4;


        const distance =
            55 +
            Math.random() * 45;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        particle.style.setProperty(
            "--particle-x",
            `${x}px`
        );


        particle.style.setProperty(
            "--particle-y",
            `${y}px`
        );


        particle.style.color =
            Math.random() > .5
                ? "#d96b8a"
                : "#a996d8";


        l6FinalOrbit.appendChild(
            particle
        );


        setTimeout(
            () => {

                particle.remove();

            },
            1500
        );

    }

}


/* =========================================================
   SIGNATURE FOCUS
========================================================= */

const l6Signature =
    document.querySelector(
        ".signature"
    );


if (
    l6Signature &&
    "IntersectionObserver" in window
) {

    const signatureObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            l6Signature.classList.add(
                                "signature-seen"
                            );

                            signatureObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold:
                    .6
            }
        );


    signatureObserver.observe(
        l6Signature
    );

}


/* =========================================================
   FINAL HEART KEYBOARD ACCESS
========================================================= */

if (l6FinalHeart) {

    l6FinalHeart.setAttribute(
        "tabindex",
        "0"
    );


    l6FinalHeart.setAttribute(
        "role",
        "button"
    );


    l6FinalHeart.setAttribute(
        "aria-label",
        "Send a little love"
    );


    l6FinalHeart.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                l6FinalHeart.click();

            }

        }
    );

}