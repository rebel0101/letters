/* =========================================================
   LETTER 7 — DREAMS TOGETHER
   STEP 1 JAVASCRIPT
========================================================= */


/* =========================================================
   DOM
========================================================= */

const gardenParticles =
    document.getElementById(
        "gardenParticles"
    );

const dreamFireflies =
    document.getElementById(
        "dreamFireflies"
    );

const floatingHearts =
    document.getElementById(
        "floatingHearts"
    );

const pageTransition =
    document.getElementById(
        "pageTransition"
    );

const nextLetterBtn =
    document.getElementById(
        "nextLetterBtn"
    );

const paperSound =
    document.getElementById(
        "paperSound"
    );

const clickSound =
    document.getElementById(
        "clickSound"
    );

const transitionSound =
    document.getElementById(
        "transitionSound"
    );


let leaving =
    false;


/* =========================================================
   SAFE SOUND
========================================================= */

function playLetter7Sound(
    sound,
    volume = 1
) {

    if (!sound) return;

    sound.pause();

    sound.currentTime = 0;

    sound.volume =
        volume;

    sound.play().catch(
        () => {}
    );

}


/* =========================================================
   FALLING GARDEN PETALS
========================================================= */

function createGardenPetal() {

    if (!gardenParticles) {
        return;
    }


    const petal =
        document.createElement(
            "span"
        );


    petal.className =
        "garden-particle";


    const flowers = [
        "🌸",
        "🌷",
        "🌺",
        "🍃"
    ];


    petal.textContent =
        flowers[
            Math.floor(
                Math.random() *
                flowers.length
            )
        ];


    petal.style.left =
        `${Math.random() * 100}%`;


    petal.style.fontSize =
        `${10 + Math.random() * 13}px`;


    petal.style.setProperty(
        "--opacity",
        `${.15 + Math.random() * .35}`
    );


    petal.style.setProperty(
        "--drift",
        `${-90 + Math.random() * 180}px`
    );


    petal.style.setProperty(
        "--duration",
        `${8 + Math.random() * 8}s`
    );


    gardenParticles.appendChild(
        petal
    );


    setTimeout(
        () => {

            petal.remove();

        },
        17000
    );

}


setInterval(
    createGardenPetal,
    1100
);


/* =========================================================
   FIREFLIES
========================================================= */

function createFirefly() {

    if (!dreamFireflies) {
        return;
    }


    const firefly =
        document.createElement(
            "span"
        );


    firefly.className =
        "firefly";


    firefly.style.left =
        `${Math.random() * 100}%`;


    firefly.style.top =
        `${20 + Math.random() * 70}%`;


    firefly.style.setProperty(
        "--x",
        `${-50 + Math.random() * 100}px`
    );


    firefly.style.setProperty(
        "--y",
        `${-50 + Math.random() * 100}px`
    );


    firefly.style.setProperty(
        "--duration",
        `${3 + Math.random() * 4}s`
    );


    firefly.style.animationDelay =
        `${Math.random() * 3}s`;


    dreamFireflies.appendChild(
        firefly
    );


    setTimeout(
        () => {

            firefly.remove();

        },
        9000
    );

}


for (
    let i = 0;
    i < 10;
    i++
) {

    createFirefly();

}


setInterval(
    createFirefly,
    1800
);


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createGardenHeart() {

    if (!floatingHearts) {
        return;
    }


    const heart =
        document.createElement(
            "span"
        );


    heart.className =
        "garden-heart";


    heart.textContent =
        "❤️";


    heart.style.left =
        `${Math.random() * 100}%`;


    heart.style.fontSize =
        `${9 + Math.random() * 14}px`;


    heart.style.setProperty(
        "--drift",
        `${-80 + Math.random() * 160}px`
    );


    heart.style.setProperty(
        "--duration",
        `${9 + Math.random() * 7}s`
    );


    floatingHearts.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },
        17000
    );

}


setInterval(
    createGardenHeart,
    2400
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (
    revealElements.length &&
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (
                entries,
                observer
            ) => {

                entries.forEach(
                    entry => {

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

                    }
                );

            },
            {
                threshold:
                    .15,

                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

}


/* =========================================================
   PAPER OPENING SOUND
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                playLetter7Sound(
                    paperSound,
                    .28
                );

            },
            450
        );

    }
);


/* =========================================================
   NEXT LETTER
========================================================= */

if (nextLetterBtn) {

    nextLetterBtn.addEventListener(
        "click",
        () => {

            if (leaving) {
                return;
            }


            leaving =
                true;


            nextLetterBtn.disabled =
                true;


            /* CLICK */

            playLetter7Sound(
                clickSound,
                .30
            );


            /* WHOOSH */

            setTimeout(
                () => {

                    playLetter7Sound(
                        transitionSound,
                        .30
                    );

                },
                120
            );


            /* TRANSITION */

            if (pageTransition) {

                pageTransition.classList.add(
                    "active"
                );

            }


            document.body.classList.add(
                "leaving"
            );


            /* LETTER 8 */

            setTimeout(
                () => {

                    window.location.href =
                        "letter8.html";

                },
                850
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

        /* Nothing to persist here.
           Central music.js handles music state. */

    }
);

/* =========================================================
   LETTER 7 — STEP 2
   CINEMATIC GARDEN INTERACTION
========================================================= */


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const l7Progress =
    document.createElement("div");

l7Progress.id =
    "l7ScrollProgress";

document.body.appendChild(
    l7Progress
);


function updateL7Progress() {

    const scrollTop =
        window.scrollY;

    const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;


    if (maxScroll <= 0) {

        l7Progress.style.width =
            "0%";

        return;

    }


    const progress =
        (scrollTop / maxScroll) * 100;


    l7Progress.style.width =
        `${Math.min(progress, 100)}%`;

}


window.addEventListener(
    "scroll",
    updateL7Progress,
    {
        passive: true
    }
);


updateL7Progress();


/* =========================================================
   DREAM CARD SPOTLIGHT + 3D
========================================================= */

const l7DreamCards =
    document.querySelectorAll(
        ".dream-card"
    );


if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    l7DreamCards.forEach(
        card => {

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
                        perspective(900px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        scale(1.015)
                        `;

                },
                {
                    passive: true
                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );

}


/* =========================================================
   PLACE CARD SOFT PARALLAX
========================================================= */

const l7Places =
    document.querySelectorAll(
        ".place-card"
    );


if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    l7Places.forEach(
        place => {

            place.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        place.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left -
                            rect.width / 2
                        ) * .035;


                    const y =
                        (
                            event.clientY -
                            rect.top -
                            rect.height / 2
                        ) * .035;


                    place.style.transform =
                        `
                        translate(
                            ${x}px,
                            ${y}px
                        )
                        scale(1.015)
                        `;

                },
                {
                    passive: true
                }
            );


            place.addEventListener(
                "mouseleave",
                () => {

                    place.style.transform =
                        "";

                }
            );

        }
    );

}


/* =========================================================
   HERO MOUSE PARALLAX
========================================================= */

const l7Hero =
    document.querySelector(
        ".dream-hero"
    );


if (
    l7Hero &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;


    window.addEventListener(
        "mousemove",
        event => {

            targetX =
                (
                    event.clientX /
                    window.innerWidth -
                    .5
                ) * 10;


            targetY =
                (
                    event.clientY /
                    window.innerHeight -
                    .5
                ) * 7;

        },
        {
            passive: true
        }
    );


    function animateHeroParallax() {

        currentX +=
            (targetX - currentX) *
            .035;


        currentY +=
            (targetY - currentY) *
            .035;


        const flower =
            l7Hero.querySelector(
                ".hero-flower"
            );


        if (flower) {

            flower.style.transform =
    `translate(${currentX * .35}px, ${currentY * .35}px)`;

        }


        requestAnimationFrame(
            animateHeroParallax
        );

    }


    animateHeroParallax();

}


/* =========================================================
   FINAL DREAM BUTTON MAGNETIC EFFECT
========================================================= */

const l7NextButton =
    document.getElementById(
        "nextLetterBtn"
    );


if (
    l7NextButton &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    l7NextButton.addEventListener(
        "mousemove",
        event => {

            const rect =
                l7NextButton.getBoundingClientRect();


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
                    -7,
                    Math.min(
                        7,
                        x * .10
                    )
                );


            const moveY =
                Math.max(
                    -5,
                    Math.min(
                        5,
                        y * .10
                    )
                );


            l7NextButton.style.transform =
                `
                translate(
                    ${moveX}px,
                    ${moveY}px
                )
                scale(1.035)
                `;

        }
    );


    l7NextButton.addEventListener(
        "mouseleave",
        () => {

            l7NextButton.style.transform =
                "";

        }
    );

}


/* =========================================================
   GARDEN LIGHT PULSE
========================================================= */

const l7GardenBackground =
    document.querySelector(
        ".garden-background"
    );


if (l7GardenBackground) {

    let lightDirection = 0;


    function gardenLightMovement() {

        lightDirection +=
            .00045;


        const x =
            50 +
            Math.sin(lightDirection) *
            3;


        l7GardenBackground.style.backgroundPosition =
            `${x}% 0%`;


        requestAnimationFrame(
            gardenLightMovement
        );

    }


    gardenLightMovement();

}


/* =========================================================
   CLEANUP
========================================================= */

window.addEventListener(
    "pagehide",
    () => {

        /* Central music.js remains untouched. */

    }
);

/* =========================================================
   LETTER 7 — STEP 3.3
   INTERACTIVE DREAM STORY ENGINE
========================================================= */


/* =========================================================
   DREAM STORY ELEMENTS
========================================================= */

const l7StoryCards =
    document.querySelectorAll(
        ".dream-card"
    );

const l7DreamGrid =
    document.querySelector(
        ".dream-grid"
    );


/* =========================================================
   STORY SOUND
========================================================= */

function playDreamClickSound() {

    if (!clickSound) return;

    clickSound.pause();

    clickSound.currentTime = 0;

    clickSound.volume = .22;

    clickSound.play().catch(
        () => {}
    );

}


/* =========================================================
   EMOTIONAL PARTICLE BURST
========================================================= */

function createDreamBurst(card) {

    if (!card) return;


    const rect =
        card.getBoundingClientRect();


    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧",
        "🌸"
    ];


    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "dream-burst";


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            `${rect.left + rect.width / 2}px`;


        particle.style.top =
            `${rect.top + 70}px`;


        particle.style.setProperty(
            "--burst-x",
            `${-70 + Math.random() * 140}px`
        );


        particle.style.setProperty(
            "--burst-y",
            `${-80 + Math.random() * 100}px`
        );


        particle.style.setProperty(
            "--burst-delay",
            `${Math.random() * .15}s`
        );


        document.body.appendChild(
            particle
        );


        setTimeout(
            () => {

                particle.remove();

            },
            1200
        );

    }

}


/* =========================================================
   OPEN DREAM
========================================================= */

function openDreamCard(card) {

    if (!card) return;


    const story =
        card.querySelector(
            ".dream-story"
        );


    if (!story) return;


    /* Already open */

    if (
        card.classList.contains(
            "is-open"
        )
    ) {

        closeDreamCard(card);

        return;

    }


    /* Close another card first */

    l7StoryCards.forEach(
        otherCard => {

            if (
                otherCard !== card &&
                otherCard.classList.contains(
                    "is-open"
                )
            ) {

                closeDreamCard(
                    otherCard,
                    false
                );

            }

        }
    );


    /* Reveal story */

    story.hidden = false;


    /* Force browser to register hidden removal */

    requestAnimationFrame(
        () => {

            card.classList.add(
                "is-open"
            );

            card.setAttribute(
                "aria-expanded",
                "true"
            );


            if (l7DreamGrid) {

                l7DreamGrid.classList.add(
                    "has-active"
                );

            }

        }
    );


    /* Sound */

    playDreamClickSound();


    /* Emotional burst */

    createDreamBurst(
        card
    );


    /* Small cinematic scroll */

    setTimeout(
        () => {

            const cardRect =
                card.getBoundingClientRect();


            if (
                cardRect.top <
                90 ||
                cardRect.bottom >
                window.innerHeight - 40
            ) {

                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        },
        120
    );

}


/* =========================================================
   CLOSE DREAM
========================================================= */

function closeDreamCard(
    card,
    updateGrid = true
) {

    if (!card) return;


    const story =
        card.querySelector(
            ".dream-story"
        );


    card.classList.remove(
        "is-open"
    );


    card.setAttribute(
        "aria-expanded",
        "false"
    );


    if (story) {

        /*
           Wait for the cinematic
           collapse before hiding it.
        */

        setTimeout(
            () => {

                if (
                    !card.classList.contains(
                        "is-open"
                    )
                ) {

                    story.hidden = true;

                }

            },
            550
        );

    }


    if (
        updateGrid &&
        l7DreamGrid
    ) {

        const anotherOpen =
            l7DreamGrid.querySelector(
                ".dream-card.is-open"
            );


        if (!anotherOpen) {

            l7DreamGrid.classList.remove(
                "has-active"
            );

        }

    }

}


/* =========================================================
   CLICK INTERACTION
========================================================= */

l7StoryCards.forEach(
    card => {

        card.addEventListener(
            "click",
            event => {

                /*
                   Prevent accidental
                   interaction with future
                   interactive elements.
                */

                if (
                    event.target.closest(
                        "button, a"
                    )
                ) {

                    return;

                }


                openDreamCard(
                    card
                );

            }
        );


        /* =================================================
           KEYBOARD ACCESSIBILITY
        ================================================= */

        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openDreamCard(
                        card
                    );

                }


                if (
                    event.key === "Escape" &&
                    card.classList.contains(
                        "is-open"
                    )
                ) {

                    closeDreamCard(
                        card
                    );

                }

            }
        );

    }
);


/* =========================================================
   CLICK OUTSIDE — CLOSE ACTIVE CARD
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !l7DreamGrid ||
            !l7DreamGrid.classList.contains(
                "has-active"
            )
        ) {

            return;

        }


        const clickedCard =
            event.target.closest(
                ".dream-card"
            );


        if (!clickedCard) {

            l7StoryCards.forEach(
                card => {

                    if (
                        card.classList.contains(
                            "is-open"
                        )
                    ) {

                        closeDreamCard(
                            card
                        );

                    }

                }
            );

        }

    }
);


/* =========================================================
   ESCAPE — CLOSE ALL
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        l7StoryCards.forEach(
            card => {

                if (
                    card.classList.contains(
                        "is-open"
                    )
                ) {

                    closeDreamCard(
                        card
                    );

                }

            }
        );

    }
);


/* =========================================================
   DREAM CARD INITIAL STATE
========================================================= */

l7StoryCards.forEach(
    card => {

        const story =
            card.querySelector(
                ".dream-story"
            );


        if (story) {

            story.hidden = true;

        }


        card.classList.remove(
            "is-open"
        );


        card.setAttribute(
            "aria-expanded",
            "false"
        );

    }
);

/* =========================================================
   LETTER 7 — STEP 3.4 PART 3
   DYNAMIC MEMORY CONTENT ENGINE
========================================================= */

const l7MemoryData = {

    morning: {
        label:
            "A MORNING I WANT TO REMEMBER",

        image:
            "images/memories/dream-morning.jpg",

        alt:
            "A beautiful morning memory of us",

        caption:
            "One day, these little moments will become our favorite memories."
    },

    adventure: {
        label:
            "AN ADVENTURE I WANT TO REMEMBER",

        image:
            "images/memories/dream-adventure.jpg",

        alt:
            "A beautiful adventure memory of us",

        caption:
            "Wherever the road takes us, I just want you beside me."
    },

    home: {
        label:
            "A HOME I WANT TO REMEMBER",

        image:
            "images/memories/dream-home.jpg",

        alt:
            "A beautiful memory of our little home",

        caption:
            "Maybe home was never a place. Maybe it was always you."
    },

    evening: {
        label:
            "AN EVENING I WANT TO REMEMBER",

        image:
            "images/memories/dream-evening.jpg",

        alt:
            "A peaceful evening memory of us",

        caption:
            "In the quietest moments, I think I would still choose you."
    }

};


function setupDreamMemory(card) {

    if (!card) return;

    const dreamType =
        card.dataset.dream;

    const memory =
        l7MemoryData[dreamType];

    if (!memory) return;


    const memoryReveal =
        card.querySelector(
            ".dream-memory-reveal"
        );

    if (!memoryReveal) return;


    const memoryLabel =
        memoryReveal.querySelector(
            ".dream-memory-label"
        );

    const memoryImage =
        memoryReveal.querySelector(
            ".dream-memory-frame img"
        );

    const memoryCaption =
        memoryReveal.querySelector(
            ".dream-memory-caption"
        );


    if (memoryLabel) {
        memoryLabel.textContent =
            memory.label;
    }


    if (memoryImage) {

        memoryImage.src =
            memory.image;

        memoryImage.alt =
            memory.alt;
    }


    if (memoryCaption) {
        memoryCaption.textContent =
            memory.caption;
    }

}


/* ---------------------------------------------------------
   INITIALIZE ALL DREAM MEMORIES
--------------------------------------------------------- */

l7StoryCards.forEach(
    card => {
        setupDreamMemory(card);
    }
);

/* =========================================================
   LETTER 7 — STEP 4.2
   CINEMATIC MEMORY PARALLAX
========================================================= */

const l7MemoryFrames =
    document.querySelectorAll(
        ".dream-memory-frame"
    );

if (
    l7MemoryFrames.length &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    l7MemoryFrames.forEach(
        frame => {

            const image =
                frame.querySelector("img");

            if (!image) return;


            frame.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        frame.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) / rect.width - .5;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) / rect.height - .5;


                    const moveX =
                        x * 10;

                    const moveY =
                        y * 7;


                    image.style.transform =
                        `
                        scale(1.035)
                        translate(
                            ${moveX}px,
                            ${moveY}px
                        )
                        `;


                    frame.style.setProperty(
                        "--memory-x",
                        `${50 + x * 8}%`
                    );

                    frame.style.setProperty(
                        "--memory-y",
                        `${50 + y * 8}%`
                    );

                },
                {
                    passive: true
                }
            );


            frame.addEventListener(
                "mouseleave",
                () => {

                    image.style.transform =
                        "";

                    frame.style.setProperty(
                        "--memory-x",
                        "50%"
                    );

                    frame.style.setProperty(
                        "--memory-y",
                        "50%"
                    );

                }
            );

        }
    );

}

/* =========================================================
   LETTER 7 — STEP 4.3
   CINEMATIC MEMORY SPOTLIGHT
========================================================= */


/* ---------------------------------------------------------
   CREATE SPOTLIGHT
--------------------------------------------------------- */

const l7MemorySpotlight =
    document.createElement("div");


l7MemorySpotlight.className =
    "memory-spotlight";


l7MemorySpotlight.setAttribute(
    "role",
    "dialog"
);


l7MemorySpotlight.setAttribute(
    "aria-modal",
    "true"
);


l7MemorySpotlight.setAttribute(
    "aria-hidden",
    "true"
);


l7MemorySpotlight.innerHTML = `
    <div class="memory-spotlight-backdrop"></div>

    <div class="memory-spotlight-content">

        <button
            class="memory-spotlight-close"
            type="button"
            aria-label="Close memory"
        >
            ×
        </button>

        <span
            class="memory-spotlight-label"
        ></span>

        <div class="memory-spotlight-image-wrap">

            <img
                class="memory-spotlight-image"
                src=""
                alt=""
            >

        </div>

        <p
            class="memory-spotlight-caption"
        ></p>

    </div>
`;


document.body.appendChild(
    l7MemorySpotlight
);


/* ---------------------------------------------------------
   SPOTLIGHT ELEMENTS
--------------------------------------------------------- */

const l7SpotlightImage =
    l7MemorySpotlight.querySelector(
        ".memory-spotlight-image"
    );


const l7SpotlightLabel =
    l7MemorySpotlight.querySelector(
        ".memory-spotlight-label"
    );


const l7SpotlightCaption =
    l7MemorySpotlight.querySelector(
        ".memory-spotlight-caption"
    );


const l7SpotlightClose =
    l7MemorySpotlight.querySelector(
        ".memory-spotlight-close"
    );


const l7SpotlightBackdrop =
    l7MemorySpotlight.querySelector(
        ".memory-spotlight-backdrop"
    );


let l7PreviousOverflow = "";


/* ---------------------------------------------------------
   OPEN SPOTLIGHT
--------------------------------------------------------- */

function openMemorySpotlight(frame) {

    if (!frame) return;


    const card =
        frame.closest(".dream-card");


    const dreamType =
        card?.dataset.dream;


    const memory =
        dreamType
            ? l7MemoryData[dreamType]
            : null;


    const image =
        frame.querySelector("img");


    const caption =
        frame.querySelector(
            ".dream-memory-caption"
        );


    const label =
        card?.querySelector(
            ".dream-memory-label"
        );


    if (!image) return;


    /* -----------------------------------------------------
       LOAD IMAGE
    ----------------------------------------------------- */

    l7SpotlightImage.src =
        memory?.image ||
        image.currentSrc ||
        image.src;


    l7SpotlightImage.alt =
        memory?.alt ||
        image.alt ||
        "A beautiful memory of us";


    /* -----------------------------------------------------
       LOAD LABEL
    ----------------------------------------------------- */

    l7SpotlightLabel.textContent =
        memory?.label ||
        label?.textContent ||
        "A MEMORY I WANT TO KEEP";


    /* -----------------------------------------------------
       LOAD CAPTION
    ----------------------------------------------------- */

    l7SpotlightCaption.textContent =
        memory?.caption ||
        caption?.textContent ||
        "";


    /* -----------------------------------------------------
       LOCK PAGE SCROLL
    ----------------------------------------------------- */

    l7PreviousOverflow =
        document.body.style.overflow;


    document.body.style.overflow =
        "hidden";


    /* -----------------------------------------------------
       SHOW SPOTLIGHT
    ----------------------------------------------------- */

    l7MemorySpotlight.classList.add(
        "is-visible"
    );


    l7MemorySpotlight.setAttribute(
        "aria-hidden",
        "false"
    );


    /* -----------------------------------------------------
       TRIGGER CINEMATIC ANIMATION
    ----------------------------------------------------- */

    requestAnimationFrame(() => {

        l7MemorySpotlight.classList.add(
            "is-active"
        );

    });


    /* -----------------------------------------------------
       FOCUS CLOSE BUTTON
    ----------------------------------------------------- */

    setTimeout(() => {

        l7SpotlightClose.focus();

    }, 350);

}


/* ---------------------------------------------------------
   CLOSE SPOTLIGHT
--------------------------------------------------------- */

function closeMemorySpotlight() {

    if (
        !l7MemorySpotlight.classList.contains(
            "is-visible"
        )
    ) {
        return;
    }


    l7MemorySpotlight.classList.remove(
        "is-active"
    );


    l7MemorySpotlight.setAttribute(
        "aria-hidden",
        "true"
    );


    setTimeout(() => {

        l7MemorySpotlight.classList.remove(
            "is-visible"
        );


        document.body.style.overflow =
            l7PreviousOverflow;

    }, 550);

}


/* ---------------------------------------------------------
   MEMORY IMAGE CLICK
--------------------------------------------------------- */

/*
 * l7MemoryFrames is already declared
 * in STEP 4.2.
 */

l7MemoryFrames.forEach(
    frame => {

        frame.addEventListener(
            "click",
            event => {

                event.preventDefault();


                /*
                 * Prevent click from reaching
                 * the parent dream-card.
                 */

                event.stopPropagation();


                openMemorySpotlight(
                    frame
                );

            }
        );

    }
);


/* ---------------------------------------------------------
   CLOSE BUTTON
--------------------------------------------------------- */

l7SpotlightClose.addEventListener(
    "click",
    event => {

        event.preventDefault();

        event.stopPropagation();

        closeMemorySpotlight();

    }
);


/* ---------------------------------------------------------
   BACKDROP CLICK
--------------------------------------------------------- */

l7SpotlightBackdrop.addEventListener(
    "click",
    event => {

        event.preventDefault();

        closeMemorySpotlight();

    }
);


/* ---------------------------------------------------------
   ESCAPE KEY
--------------------------------------------------------- */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        if (
            !l7MemorySpotlight.classList.contains(
                "is-visible"
            )
        ) {
            return;
        }


        closeMemorySpotlight();

    }
);

/* =========================================================
   LETTER 7 — STEP 4.4
   MEMORY FOCUS TRANSITION
========================================================= */


/* ---------------------------------------------------------
   ACTIVE MEMORY FRAME
--------------------------------------------------------- */

let l7ActiveMemoryFrame = null;


/* ---------------------------------------------------------
   FOCUS MEMORY
--------------------------------------------------------- */

function focusMemoryFrame(frame) {

    if (!frame) return;


    l7ActiveMemoryFrame =
        frame;


    /* -----------------------------------------------------
       ADD FOCUS STATE
    ----------------------------------------------------- */

    frame.classList.add(
        "memory-focus-active"
    );


    const card =
        frame.closest(".dream-card");


    if (card) {

        card.classList.add(
            "memory-focus-card"
        );

    }

}


/* ---------------------------------------------------------
   RESET MEMORY FOCUS
--------------------------------------------------------- */

function resetMemoryFocus() {

    if (!l7ActiveMemoryFrame) {
        return;
    }


    l7ActiveMemoryFrame.classList.remove(
        "memory-focus-active"
    );


    const card =
        l7ActiveMemoryFrame.closest(
            ".dream-card"
        );


    if (card) {

        card.classList.remove(
            "memory-focus-card"
        );

    }


    l7ActiveMemoryFrame =
        null;

}


/* ---------------------------------------------------------
   CONNECT FOCUS WITH SPOTLIGHT
--------------------------------------------------------- */

const l7OriginalOpenMemorySpotlight =
    openMemorySpotlight;


openMemorySpotlight =
    function(frame) {

        focusMemoryFrame(
            frame
        );


        l7OriginalOpenMemorySpotlight(
            frame
        );

    };


/* ---------------------------------------------------------
   CONNECT RESET WITH CLOSE
--------------------------------------------------------- */

const l7OriginalCloseMemorySpotlight =
    closeMemorySpotlight;


closeMemorySpotlight =
    function() {

        l7OriginalCloseMemorySpotlight();


        setTimeout(() => {

            resetMemoryFocus();

        }, 560);

    };

    /* =========================================================
   LETTER 7 — STEP 4.6
   PERFORMANCE OPTIMIZATION
========================================================= */


/* ---------------------------------------------------------
   ASYNC IMAGE DECODING
--------------------------------------------------------- */

const l7AllMemoryImages =
    document.querySelectorAll(
        ".dream-memory-frame img"
    );


l7AllMemoryImages.forEach(
    image => {

        image.decoding =
            "async";

        image.loading =
            "lazy";

    }
);


/* ---------------------------------------------------------
   SPOTLIGHT IMAGE OPTIMIZATION
--------------------------------------------------------- */

if (
    typeof l7SpotlightImage !==
    "undefined" &&
    l7SpotlightImage
) {

    l7SpotlightImage.decoding =
        "async";

}


/* ---------------------------------------------------------
   PAUSE MEMORY EFFECTS WHEN PAGE
   IS NOT VISIBLE
--------------------------------------------------------- */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            document.body.classList.add(
                "page-not-visible"
            );

        } else {

            document.body.classList.remove(
                "page-not-visible"
            );

        }

    }
);

/* =========================================================
   LETTER 7 — STEP 4.6
   DREAM DESTINATIONS INTERACTIVE SYSTEM
========================================================= */


/* ---------------------------------------------------------
   DESTINATION DATA
--------------------------------------------------------- */

const l7DestinationData = {

    sea: {

        label:
            "🌊 A PLACE I WANT TO SEE WITH YOU",

        title:
            "Somewhere by the sea",

        story:
            "I imagine a quiet morning somewhere near the ocean.",

        second:
            "No rush. No plans. Just you beside me, the sound of waves, and a day that belongs only to us.",

        emotional:
            "Maybe the real destination will be the moment we look at each other and realise we finally made it here together."

    },


    mountains: {

        label:
            "🏔️ A VIEW I WANT TO WAKE UP TO",

        title:
            "Somewhere in the mountains",

        story:
            "Maybe one day we'll wake up surrounded by mountains, clouds and cold morning air.",

        second:
            "We'll step outside with warm cups in our hands, complain about the cold, laugh about nothing, and somehow not want the morning to end.",

        emotional:
            "I don't need the perfect view. I just want you standing beside me when I see it for the first time."

    },


    unknown: {

        label:
            "🌆 SOMEWHERE WE'VE NEVER BEEN",

        title:
            "Somewhere we've never been",

        story:
            "And maybe the most beautiful place will be somewhere neither of us has imagined yet.",

        second:
            "A random city. A little road. A place we find by accident. Somewhere completely new, where we get to create the first memory together.",

        emotional:
            "Because sometimes the best part of a journey isn't knowing where we're going — it's knowing who is coming with us."

    }

};


/* ---------------------------------------------------------
   DESTINATION CARDS
--------------------------------------------------------- */

const l7DestinationCards =
    document.querySelectorAll(
        ".place-card"
    );


/* ---------------------------------------------------------
   GET DESTINATION TYPE
--------------------------------------------------------- */

function getDestinationType(
    card,
    index
) {

    const existingType =
        card.dataset.destination;


    if (existingType) {
        return existingType;
    }


    const types = [
        "sea",
        "mountains",
        "unknown"
    ];


    return types[index] ||
        "unknown";

}


/* ---------------------------------------------------------
   CREATE DESTINATION STORY
--------------------------------------------------------- */

function createDestinationStory(
    card,
    data
) {

    if (!card || !data) {
        return null;
    }


    let story =
        card.querySelector(
            ".destination-story"
        );


    if (story) {
        return story;
    }


    story =
        document.createElement(
            "div"
        );


    story.className =
        "destination-story";


    story.hidden =
        true;


    story.innerHTML = `

        <span
            class="destination-story-label"
        >
            ${data.label}
        </span>


        <p
            class="destination-story-main"
        >
            ${data.story}
        </p>


        <p
            class="destination-story-second"
        >
            ${data.second}
        </p>


        <p
            class="destination-story-emotional"
        >
            ${data.emotional}
        </p>

    `;


    card.appendChild(
        story
    );


    return story;

}


/* ---------------------------------------------------------
   OPEN DESTINATION
--------------------------------------------------------- */

function openDestination(
    card
) {

    if (!card) return;


    const currentOpen =
        document.querySelector(
            ".place-card.destination-open"
        );


    /* -----------------------------------------------------
       CLOSE PREVIOUS
    ----------------------------------------------------- */

    if (
        currentOpen &&
        currentOpen !== card
    ) {

        closeDestination(
            currentOpen
        );

    }


    const index =
        Array.from(
            l7DestinationCards
        ).indexOf(card);


    const type =
        getDestinationType(
            card,
            index
        );


    const data =
        l7DestinationData[type];


    if (!data) return;


    const story =
        createDestinationStory(
            card,
            data
        );


    if (!story) return;


    /* -----------------------------------------------------
       CARD STATE
    ----------------------------------------------------- */

    card.classList.add(
        "destination-open"
    );


    card.setAttribute(
        "aria-expanded",
        "true"
    );


    card.dataset.destination =
        type;


    /* -----------------------------------------------------
       REVEAL STORY
    ----------------------------------------------------- */

    story.hidden =
        false;


    requestAnimationFrame(
        () => {

            story.classList.add(
                "is-visible"
            );

        }
    );


    /* -----------------------------------------------------
       GRID ACTIVE STATE
    ----------------------------------------------------- */

    const row =
        card.closest(
            ".places-row"
        );


    if (row) {

        row.classList.add(
            "has-destination-active"
        );

    }


    /* -----------------------------------------------------
       CLICK SOUND
    ----------------------------------------------------- */

    const clickSound =
        document.getElementById(
            "clickSound"
        );


    if (clickSound) {

        try {

            clickSound.currentTime =
                0;

            clickSound.volume =
                Math.min(
                    Number(
                        clickSound.dataset
                            .defaultVolume ||
                        .35
                    ),
                    .35
                );

            clickSound.play()
                .catch(
                    () => {}
                );

        } catch (error) {}

    }

}


/* ---------------------------------------------------------
   CLOSE DESTINATION
--------------------------------------------------------- */

function closeDestination(
    card
) {

    if (!card) return;


    const story =
        card.querySelector(
            ".destination-story"
        );


    card.classList.remove(
        "destination-open"
    );


    card.setAttribute(
        "aria-expanded",
        "false"
    );


    if (story) {

        story.classList.remove(
            "is-visible"
        );


        setTimeout(
            () => {

                if (
                    !card.classList.contains(
                        "destination-open"
                    )
                ) {

                    story.hidden =
                        true;

                }

            },
            450
        );

    }


    const row =
        card.closest(
            ".places-row"
        );


    if (
        row &&
        !row.querySelector(
            ".place-card.destination-open"
        )
    ) {

        row.classList.remove(
            "has-destination-active"
        );

    }

}


/* ---------------------------------------------------------
   INITIALIZE DESTINATIONS
--------------------------------------------------------- */

l7DestinationCards.forEach(
    (
        card,
        index
    ) => {

        const type =
            getDestinationType(
                card,
                index
            );


        card.dataset.destination =
            type;


        card.setAttribute(
            "tabindex",
            "0"
        );


        card.setAttribute(
            "role",
            "button"
        );


        card.setAttribute(
            "aria-expanded",
            "false"
        );


        const data =
            l7DestinationData[type];


        if (data) {

            card.setAttribute(
                "aria-label",
                `Open ${data.title} dream`
            );

        }


        /* -------------------------------------------------
           CLICK
        ------------------------------------------------- */

        card.addEventListener(
            "click",
            event => {

                /*
                 * Existing parallax remains untouched.
                 */

                event.preventDefault();


                if (
                    card.classList.contains(
                        "destination-open"
                    )
                ) {

                    closeDestination(
                        card
                    );

                } else {

                    openDestination(
                        card
                    );

                }

            }
        );


        /* -------------------------------------------------
           KEYBOARD
        ------------------------------------------------- */

        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter" ||
                    event.key ===
                    " "
                ) {

                    event.preventDefault();


                    if (
                        card.classList.contains(
                            "destination-open"
                        )
                    ) {

                        closeDestination(
                            card
                        );

                    } else {

                        openDestination(
                            card
                        );

                    }

                }


                if (
                    event.key ===
                    "Escape"
                ) {

                    closeDestination(
                        card
                    );

                }

            }
        );

    }
);


/* ---------------------------------------------------------
   CLICK OUTSIDE DESTINATION
--------------------------------------------------------- */

document.addEventListener(
    "click",
    event => {

        const openCard =
            document.querySelector(
                ".place-card.destination-open"
            );


        if (!openCard) {
            return;
        }


        if (
            !openCard.contains(
                event.target
            )
        ) {

            closeDestination(
                openCard
            );

        }

    }
);


/* ---------------------------------------------------------
   ESCAPE — GLOBAL
--------------------------------------------------------- */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }


        const openCard =
            document.querySelector(
                ".place-card.destination-open"
            );


        if (openCard) {

            closeDestination(
                openCard
            );

        }

    }
);

/* =========================================================
   LETTER 7 — STEP 4.6 PART 2
   DREAM DESTINATION CINEMATIC ATMOSPHERE
========================================================= */


/* ---------------------------------------------------------
   DESTINATION ATMOSPHERE
--------------------------------------------------------- */

const l7DestinationAtmosphere =
    document.querySelectorAll(
        ".place-card"
    );


/* ---------------------------------------------------------
   MOUSE DEPTH
--------------------------------------------------------- */

if (
    l7DestinationAtmosphere.length &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    l7DestinationAtmosphere.forEach(
        card => {

            card.addEventListener(
                "mousemove",
                event => {

                    if (
                        card.classList.contains(
                            "destination-open"
                        )
                    ) {
                        return;
                    }


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) / rect.width - .5;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) / rect.height - .5;


                    card.style.setProperty(
                        "--destination-x",
                        `${50 + x * 10}%`
                    );


                    card.style.setProperty(
                        "--destination-y",
                        `${50 + y * 10}%`
                    );


                    card.style.setProperty(
                        "--destination-rotate-x",
                        `${y * -2.5}deg`
                    );


                    card.style.setProperty(
                        "--destination-rotate-y",
                        `${x * 2.5}deg`
                    );

                },
                {
                    passive: true
                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.setProperty(
                        "--destination-x",
                        "50%"
                    );


                    card.style.setProperty(
                        "--destination-y",
                        "50%"
                    );


                    card.style.setProperty(
                        "--destination-rotate-x",
                        "0deg"
                    );


                    card.style.setProperty(
                        "--destination-rotate-y",
                        "0deg"
                    );

                }
            );

        }
    );

}


/* ---------------------------------------------------------
   RESET DEPTH WHEN OPENING
--------------------------------------------------------- */

l7DestinationCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                card.style.setProperty(
                    "--destination-rotate-x",
                    "0deg"
                );


                card.style.setProperty(
                    "--destination-rotate-y",
                    "0deg"
                );

            }
        );

    }
);

/* =========================================================
   LETTER 7 — STEP 4.7
   FINAL PERFORMANCE AUDIT
========================================================= */


/* ---------------------------------------------------------
   IMAGE DECODING
--------------------------------------------------------- */

document
    .querySelectorAll(
        ".dream-memory-frame img"
    )
    .forEach(
        image => {

            image.decoding =
                "async";

            image.loading =
                "lazy";

        }
    );


/* ---------------------------------------------------------
   PAGE VISIBILITY
--------------------------------------------------------- */

document.addEventListener(
    "visibilitychange",
    () => {

        document.body.classList.toggle(
            "l7-page-hidden",
            document.hidden
        );

    }
);