/* =========================================================
   LETTER 9
   STEP 9.1 — LITTLE THINGS HERO
========================================================= */


/* =========================================================
   DUST PARTICLES
========================================================= */

const l9DustContainer =
    document.getElementById(
        "l9Dust"
    );


const l9ReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (
    l9DustContainer &&
    !l9ReducedMotion
) {

    const l9DustFragment =
        document.createDocumentFragment();


    for (
        let i = 0;
        i < 34;
        i++
    ) {

        const dust =
            document.createElement(
                "span"
            );


        const left =
            Math.random() * 100;

        const top =
            Math.random() * 100;

        const duration =
            5 +
            Math.random() * 7;

        const opacity =
            .15 +
            Math.random() * .45;

        const xMovement =
            (
                Math.random() -
                .5
            ) * 45;


        dust.style.left =
            `${left}%`;

        dust.style.top =
            `${top}%`;


        dust.style.setProperty(
            "--dust-duration",
            `${duration}s`
        );


        dust.style.setProperty(
            "--dust-opacity",
            opacity
        );


        dust.style.setProperty(
            "--dust-x",
            `${xMovement}px`
        );


        dust.style.animationDelay =
            `${Math.random() * -8}s`;


        l9DustFragment.appendChild(
            dust
        );

    }


    l9DustContainer.appendChild(
        l9DustFragment
    );

}


/* =========================================================
   SUBTLE HERO PARALLAX
========================================================= */

const l9Hero =
    document.getElementById(
        "littleThingsHero"
    );


if (
    l9Hero &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches &&
    !l9ReducedMotion
) {

    const l9Glow =
        l9Hero.querySelector(
            ".l9-hero-glow"
        );


    const l9Light =
        l9Hero.querySelector(
            ".l9-hero-light"
        );


    const l9Hearts =
        l9Hero.querySelectorAll(
            ".l9-hearts span"
        );


    l9Hero.addEventListener(
        "mousemove",
        event => {

            const rect =
                l9Hero.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width -
                .5;


            const y =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height -
                .5;


            if (l9Glow) {

                l9Glow.style.marginLeft =
                    `${x * 12}px`;

                l9Glow.style.marginTop =
                    `${y * 8}px`;

            }


            if (l9Light) {

                l9Light.style.marginLeft =
                    `${x * -7}px`;

                l9Light.style.marginTop =
                    `${y * -5}px`;

            }


            l9Hearts.forEach(
                (heart, index) => {

                    const depth =
                        (
                            (index % 3) +
                            1
                        ) * 1.4;


                    heart.style.translate =
                        `${x * depth}px ${y * depth}px`;

                }
            );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   SCROLL TO CONTINUE
========================================================= */

const l9ScrollIndicator =
    document.querySelector(
        ".l9-scroll-indicator"
    );


if (l9ScrollIndicator) {

    l9ScrollIndicator.addEventListener(
        "click",
        () => {

            const nextSection =
                document.querySelector(
                    ".little-things-hero"
                );


            if (nextSection) {

                window.scrollTo({
                    top:
                        nextSection.offsetTop +
                        window.innerHeight * .72,

                    behavior:
                        "smooth"
                });

            }

        }
    );

}


/* =========================================================
   PAGE LOAD FADE
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "l9-loaded"
        );

    }
);


/* =========================================================
   SAFETY
========================================================= */

window.addEventListener(
    "pageshow",
    () => {

        const transition =
            document.getElementById(
                "pageTransition"
            );


        if (transition) {

            transition.classList.remove(
                "active"
            );

        }

    }
);

/* =========================================================
   LETTER 9
   STEP 9.2 — THE WAY YOU...
   INTERACTION
========================================================= */


/* =========================================================
   CARD SCROLL REVEAL
========================================================= */

const l9WayCards =
    document.querySelectorAll(
        ".l9-way-card"
    );


const l9WayBottom =
    document.querySelector(
        ".l9-way-bottom"
    );


const l9WayMotionReduced =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (
    !l9WayMotionReduced &&
    "IntersectionObserver" in window
) {

    const l9WayObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "l9-way-visible"
                            );

                            l9WayObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .16,
                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    l9WayCards.forEach(
        card => {

            l9WayObserver.observe(
                card
            );

        }
    );


    if (l9WayBottom) {

        l9WayObserver.observe(
            l9WayBottom
        );

    }

}
else {

    l9WayCards.forEach(
        card => {

            card.classList.add(
                "l9-way-visible"
            );

        }
    );


    if (l9WayBottom) {

        l9WayBottom.classList.add(
            "l9-way-visible"
        );

    }

}


/* =========================================================
   SUBTLE CARD TILT
========================================================= */

if (
    !l9WayMotionReduced &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    l9WayCards.forEach(
        card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) /
                        rect.width -
                        .5;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) /
                        rect.height -
                        .5;


                    card.style.transform =
                        `perspective(900px)
                         rotateX(${y * -2.5}deg)
                         rotateY(${x * 2.5}deg)
                         translateY(-8px)`;

                },
                {
                    passive: true
                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    if (
                        card.classList.contains(
                            "l9-way-visible"
                        )
                    ) {

                        card.style.transform =
                            "";

                    }

                }
            );


            card.addEventListener(
                "focus",
                () => {

                    card.classList.add(
                        "l9-way-focused"
                    );

                }
            );


            card.addEventListener(
                "blur",
                () => {

                    card.classList.remove(
                        "l9-way-focused"
                    );

                }
            );

        }
    );

}


/* =========================================================
   CARD CLICK / KEYBOARD MICRO INTERACTION
========================================================= */

l9WayCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                card.classList.remove(
                    "l9-way-heart-pop"
                );


                void card.offsetWidth;


                card.classList.add(
                    "l9-way-heart-pop"
                );

            }
        );


        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    card.click();

                }

            }
        );

    }
);


/* =========================================================
   CLEANUP HEART POP
========================================================= */

document.addEventListener(
    "animationend",
    event => {

        if (
            event.animationName ===
            "l9WayCardHeartPop"
        ) {

            event.target.classList.remove(
                "l9-way-heart-pop"
            );

        }

    }
);

/* =========================================================
   LETTER 9
   STEP 9.3 — LITTLE THINGS I NOTICE
   INTERACTION
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const l9NoticeCards =
    document.querySelectorAll(
        ".l9-notice-card"
    );


const l9NoticeClosing =
    document.querySelector(
        ".l9-notice-closing"
    );


const l9NoticeReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


/* =========================================================
   SCROLL REVEAL
========================================================= */

if (
    l9NoticeCards.length &&
    "IntersectionObserver" in window
) {

    const l9NoticeObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "l9-notice-visible"
                        );


                        l9NoticeObserver.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: .14,
                rootMargin:
                    "0px 0px -45px 0px"
            }
        );


    l9NoticeCards.forEach(
        card => {

            l9NoticeObserver.observe(
                card
            );

        }
    );


    if (l9NoticeClosing) {

        l9NoticeObserver.observe(
            l9NoticeClosing
        );

    }

}
else {

    l9NoticeCards.forEach(
        card => {

            card.classList.add(
                "l9-notice-visible"
            );

        }
    );


    if (l9NoticeClosing) {

        l9NoticeClosing.classList.add(
            "l9-notice-visible"
        );

    }

}


/* =========================================================
   SUBTLE 3D CARD MOVEMENT
========================================================= */

if (
    !l9NoticeReducedMotion &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    l9NoticeCards.forEach(
        card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) /
                        rect.width -
                        .5;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) /
                        rect.height -
                        .5;


                    card.style.transform =
                        `perspective(1000px)
                         rotateX(${y * -2}deg)
                         rotateY(${x * 2}deg)
                         translateY(-7px)`;

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


            card.addEventListener(
                "focus",
                () => {

                    card.classList.add(
                        "l9-notice-focused"
                    );

                }
            );


            card.addEventListener(
                "blur",
                () => {

                    card.classList.remove(
                        "l9-notice-focused"
                    );

                }
            );

        }
    );

}


/* =========================================================
   CARD MICRO INTERACTION
========================================================= */

l9NoticeCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                card.classList.remove(
                    "l9-notice-heart-pop"
                );


                void card.offsetWidth;


                card.classList.add(
                    "l9-notice-heart-pop"
                );

            }
        );


        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    card.click();

                }

            }
        );

    }
);


/* =========================================================
   HEART POP CLEANUP
========================================================= */

document.addEventListener(
    "animationend",
    event => {

        if (
            event.animationName ===
            "l9NoticeHeartPop"
        ) {

            event.target.classList.remove(
                "l9-notice-heart-pop"
            );

        }

    }
);

/* =========================================================
   LETTER 9
   STEP 9.4 — THE THINGS YOU DO WITHOUT KNOWING
   INTERACTION
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const l9UnknowingMoments =
    document.querySelectorAll(
        ".l9-unknowing-moment"
    );


const l9UnknowingFinal =
    document.querySelector(
        ".l9-unknowing-final"
    );


const l9UnknowingReduced =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


/* =========================================================
   SCROLL REVEAL
========================================================= */

if (
    l9UnknowingMoments.length &&
    "IntersectionObserver" in window
) {

    const l9UnknowingObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "l9-unknowing-visible"
                        );


                        l9UnknowingObserver.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold:
                    .15,

                rootMargin:
                    "0px 0px -45px 0px"
            }
        );


    l9UnknowingMoments.forEach(
        moment => {

            l9UnknowingObserver.observe(
                moment
            );

        }
    );


    if (l9UnknowingFinal) {

        l9UnknowingObserver.observe(
            l9UnknowingFinal
        );

    }

}
else {

    l9UnknowingMoments.forEach(
        moment => {

            moment.classList.add(
                "l9-unknowing-visible"
            );

        }
    );


    if (l9UnknowingFinal) {

        l9UnknowingFinal.classList.add(
            "l9-unknowing-visible"
        );

    }

}


/* =========================================================
   SUBTLE 3D MOVEMENT
========================================================= */

if (
    !l9UnknowingReduced &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    l9UnknowingMoments.forEach(
        moment => {

            moment.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        moment.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) /
                        rect.width -
                        .5;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) /
                        rect.height -
                        .5;


                    moment.style.transform =
                        `perspective(1100px)
                         rotateX(${y * -1.3}deg)
                         rotateY(${x * 1.3}deg)
                         translateX(5px)`;

                },
                {
                    passive: true
                }
            );


            moment.addEventListener(
                "mouseleave",
                () => {

                    moment.style.transform =
                        "";

                }
            );


            moment.addEventListener(
                "focus",
                () => {

                    moment.classList.add(
                        "l9-unknowing-focused"
                    );

                }
            );


            moment.addEventListener(
                "blur",
                () => {

                    moment.classList.remove(
                        "l9-unknowing-focused"
                    );

                }
            );

        }
    );

}


/* =========================================================
   MICRO INTERACTION
========================================================= */

l9UnknowingMoments.forEach(
    moment => {

        moment.addEventListener(
            "click",
            () => {

                moment.classList.remove(
                    "l9-unknowing-heart-pop"
                );


                void moment.offsetWidth;


                moment.classList.add(
                    "l9-unknowing-heart-pop"
                );

            }
        );


        moment.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    moment.click();

                }

            }
        );

    }
);


/* =========================================================
   CLEANUP
========================================================= */

document.addEventListener(
    "animationend",
    event => {

        if (
            event.animationName ===
            "l9UnknowingHeartPop"
        ) {

            event.target.classList.remove(
                "l9-unknowing-heart-pop"
            );

        }

    }
);

/* =========================================================
   LETTER 9
   STEP 9.5 — THE WAY YOU MAKE ME FEEL
   INTERACTION
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const l9FeelingWords =
    document.querySelectorAll(
        ".l9-feeling-word"
    );


const l9FeelingDescription =
    document.getElementById(
        "feelingDescription"
    );


const l9FeelingCounter =
    document.getElementById(
        "feelingCounter"
    );


const l9FeelingPrev =
    document.getElementById(
        "feelingPrev"
    );


const l9FeelingNext =
    document.getElementById(
        "feelingNext"
    );


const l9FeelingStage =
    document.querySelector(
        ".l9-feeling-stage"
    );


const l9FeelingNote =
    document.querySelector(
        ".l9-feeling-note"
    );


/* =========================================================
   FEELING DATA
========================================================= */

const l9FeelingData = [

    {
        word:
            "safe",

        description:
            "With you, I don't always feel like I have to explain everything."
    },

    {
        word:
            "understood",

        description:
            "Sometimes you understand the things I don't even know how to say."
    },

    {
        word:
            "calm",

        description:
            "Even on noisy days, somehow your presence makes everything feel a little quieter."
    },

    {
        word:
            "happy",

        description:
            "You have this strange little way of making happiness find me when I'm not looking for it."
    },

    {
        word:
            "wanted",

        description:
            "Being cared for by you makes me feel like my presence actually matters."
    },

    {
        word:
            "home",

        description:
            "And maybe that's the simplest way I can explain it — somewhere along the way, you started feeling like home."
    }

];


let l9FeelingIndex =
    0;


/* =========================================================
   UPDATE FEELING
========================================================= */

function updateL9Feeling(
    index
) {

    if (
        !l9FeelingWords.length ||
        !l9FeelingDescription
    ) {
        return;
    }


    l9FeelingIndex =
        (
            index +
            l9FeelingData.length
        ) %
        l9FeelingData.length;


    const current =
        l9FeelingData[
            l9FeelingIndex
        ];


    l9FeelingWords.forEach(
        word => {

            word.classList.toggle(
                "active",
                word.dataset.feeling ===
                current.word
            );

        }
    );


    l9FeelingDescription.style.opacity =
        "0";


    l9FeelingDescription.style.transform =
        "translateY(6px)";


    setTimeout(
        () => {

            l9FeelingDescription.textContent =
                current.description;


            l9FeelingDescription.style.opacity =
                "1";


            l9FeelingDescription.style.transform =
                "translateY(0)";

        },
        180
    );


    if (l9FeelingCounter) {

        l9FeelingCounter.textContent =
            `${String(
                l9FeelingIndex + 1
            ).padStart(2, "0")} / 06`;

    }

}


/* =========================================================
   CONTROLS
========================================================= */

if (l9FeelingPrev) {

    l9FeelingPrev.addEventListener(
        "click",
        () => {

            updateL9Feeling(
                l9FeelingIndex - 1
            );

        }
    );

}


if (l9FeelingNext) {

    l9FeelingNext.addEventListener(
        "click",
        () => {

            updateL9Feeling(
                l9FeelingIndex + 1
            );

        }
    );

}


/* =========================================================
   CLICK WORDS
========================================================= */

l9FeelingWords.forEach(
    word => {

        word.addEventListener(
            "click",
            () => {

                const target =
                    l9FeelingData.findIndex(
                        item =>
                            item.word ===
                            word.dataset.feeling
                    );


                if (target !== -1) {

                    updateL9Feeling(
                        target
                    );

                }

            }
        );

    }
);


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

l9FeelingWords.forEach(
    word => {

        word.setAttribute(
            "tabindex",
            "0"
        );


        word.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    word.click();

                }

            }
        );

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

if (
    "IntersectionObserver" in window
) {

    const l9FeelingObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "l9-feeling-visible"
                        );


                        l9FeelingObserver.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold:
                    .16,

                rootMargin:
                    "0px 0px -45px 0px"
            }
        );


    if (l9FeelingStage) {

        l9FeelingObserver.observe(
            l9FeelingStage
        );

    }


    if (l9FeelingNote) {

        l9FeelingObserver.observe(
            l9FeelingNote
        );

    }

}
else {

    l9FeelingStage?.classList.add(
        "l9-feeling-visible"
    );

    l9FeelingNote?.classList.add(
        "l9-feeling-visible"
    );

}


/* =========================================================
   INITIAL STATE
========================================================= */

updateL9Feeling(
    0
);

/* =========================================================
   LETTER 9
   STEP 9.6 — OUR LITTLE LOVE LANGUAGE
   INTERACTION
========================================================= */

(() => {

    const l9LanguageCards =
        document.querySelectorAll(".l9-language-card");

    const l9LanguageRevealPanel =
        document.getElementById("languageRevealPanel");

    const l9LanguageRevealLabel =
        document.getElementById("languageRevealLabel");

    const l9LanguageRevealText =
        document.getElementById("languageRevealText");

    const l9LanguageRevealEnding =
        document.getElementById("languageRevealEnding");

    const l9LanguageRevealElements =
        document.querySelectorAll(".l9-language-reveal");


    /* =====================================================
       LOVE LANGUAGE DATA
    ===================================================== */

    const l9LanguageData = {

        looks: {
            label: "OUR LITTLE LOOKS",

            text:
                "Sometimes you look at me for just a second, " +
                "and somehow that one little look says more " +
                "than a whole conversation ever could.",

            ending:
                "I think that's one of my favorite languages."
        },

        teasing: {
            label: "THE WAY WE TEASE",

            text:
                "The little jokes, the playful arguments, " +
                "the unnecessary teasing... somehow even " +
                "annoying you has become one of my favorite things.",

            ending:
                "Because even our chaos feels like us."
        },

        silence: {
            label: "OUR COMFORTABLE SILENCE",

            text:
                "There are moments when neither of us needs " +
                "to say anything. We can simply exist beside " +
                "each other, and somehow the silence feels warm.",

            ending:
                "With you, silence never feels empty."
        },

        care: {
            label: "THE LITTLE ACTS OF CARE",

            text:
                "The tiny questions. The little reminders. " +
                "The way you notice when something feels wrong " +
                "even before I say anything.",

            ending:
                "You make being cared for feel effortless."
        },

        insidejokes: {
            label: "OUR INSIDE JOKES",

            text:
                "Things that would make absolutely no sense " +
                "to anyone else somehow become the funniest " +
                "things in the world when it's just us.",

            ending:
                "Some memories are funny simply because they're ours."
        },

        presence: {
            label: "JUST BEING THERE",

            text:
                "Sometimes you don't need to fix anything. " +
                "You don't need the perfect words. Just knowing " +
                "you're there somehow makes everything feel lighter.",

            ending:
                "Maybe your presence is my favorite kind of comfort."
        }

    };


    /* =====================================================
       UPDATE REVEAL
    ===================================================== */

    function updateL9Language(key) {

        const l9LanguageItem =
            l9LanguageData[key];

        if (!l9LanguageItem) return;


        /* Exit animation */

        l9LanguageRevealPanel.classList.add(
            "l9-language-changing"
        );


        setTimeout(() => {

            l9LanguageRevealLabel.textContent =
                l9LanguageItem.label;

            l9LanguageRevealText.textContent =
                l9LanguageItem.text;

            l9LanguageRevealEnding.textContent =
                l9LanguageItem.ending;


            l9LanguageRevealPanel.classList.remove(
                "l9-language-changing"
            );

        }, 140);

    }


    /* =====================================================
       CARD INTERACTION
    ===================================================== */

    l9LanguageCards.forEach((l9LanguageCard) => {

        l9LanguageCard.addEventListener(
            "click",
            () => {

                l9LanguageCards.forEach((card) => {
                    card.classList.remove("active");
                });

                l9LanguageCard.classList.add("active");


                const l9LanguageKey =
                    l9LanguageCard.dataset.language;

                updateL9Language(
                    l9LanguageKey
                );

            }
        );


        /* Keyboard support */

        l9LanguageCard.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    l9LanguageCard.click();
                }

            }
        );

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    if (
        "IntersectionObserver" in window
    ) {

        const l9LanguageObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "l9-language-visible"
                            );

                            l9LanguageObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.14
                }
            );


        l9LanguageRevealElements.forEach(
            (element) => {

                l9LanguageObserver.observe(
                    element
                );

            }
        );

    } else {

        l9LanguageRevealElements.forEach(
            (element) => {

                element.classList.add(
                    "l9-language-visible"
                );

            }
        );

    }


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    const l9LanguageFirstCard =
        document.querySelector(
            '.l9-language-card[data-language="looks"]'
        );

    if (l9LanguageFirstCard) {

        l9LanguageFirstCard.classList.add(
            "active"
        );

    }

})();

/* =========================================================
   LETTER 9
   STEP 9.7 — THE LITTLE THINGS I NOTICE
   INTERACTION
========================================================= */

(() => {

    const l9NoticeCards =
        document.querySelectorAll(".l9-notice-card");

    const l9NoticeMessage =
        document.getElementById("noticeMessage");

    const l9NoticeMessageLabel =
        document.getElementById("noticeMessageLabel");

    const l9NoticeMessageText =
        document.getElementById("noticeMessageText");

    const l9NoticeMessageEnding =
        document.getElementById("noticeMessageEnding");

    const l9NoticeRevealElements =
        document.querySelectorAll(".l9-notice-reveal");


    /* =====================================================
       NOTICE DATA
    ===================================================== */

    const l9NoticeData = {

        smile: {
            label: "THE SMILE YOU DON'T REALIZE I NOTICE",

            text:
                "I notice the little smile that appears " +
                "when you're genuinely happy. " +
                "Especially the one you try to hide.",

            ending:
                "I could probably recognize that smile anywhere."
        },

        voice: {
            label: "THE SOUND OF YOUR VOICE",

            text:
                "There is something about hearing your voice " +
                "that can make an ordinary moment feel a little " +
                "warmer, softer, and somehow more familiar.",

            ending:
                "Your voice has become one of my favorite sounds."
        },

        eyes: {
            label: "THE THINGS YOUR EYES SAY",

            text:
                "Sometimes your eyes say something before your " +
                "words do. A tiny expression, a quick glance, " +
                "a moment that lasts only a second.",

            ending:
                "And somehow, I always want to remember it."
        },

        habits: {
            label: "THE LITTLE HABITS",

            text:
                "There are tiny things you do without thinking. " +
                "Little habits you probably don't even realize " +
                "I've started memorizing.",

            ending:
                "Funny how the smallest details become the easiest to love."
        },

        laugh: {
            label: "THE LAUGH I LOVE",

            text:
                "Your real laugh. The completely unfiltered one. " +
                "The kind that makes you forget everything else " +
                "for a moment.",

            ending:
                "Sometimes your happiness becomes mine that easily."
        },

        presence: {
            label: "JUST YOUR PRESENCE",

            text:
                "You don't always have to say something. " +
                "Sometimes simply knowing you're there changes " +
                "the entire feeling of a moment.",

            ending:
                "You make ordinary moments feel a little more special."
        }

    };


    /* =====================================================
       UPDATE MESSAGE
    ===================================================== */

    function updateL9Notice(key) {

        const l9NoticeItem =
            l9NoticeData[key];

        if (!l9NoticeItem) return;


        l9NoticeMessage.classList.add(
            "l9-notice-changing"
        );


        setTimeout(() => {

            l9NoticeMessageLabel.textContent =
                l9NoticeItem.label;

            l9NoticeMessageText.textContent =
                l9NoticeItem.text;

            l9NoticeMessageEnding.textContent =
                l9NoticeItem.ending;


            l9NoticeMessage.classList.remove(
                "l9-notice-changing"
            );

        }, 150);

    }


    /* =====================================================
       CARD CLICK
    ===================================================== */

    l9NoticeCards.forEach(
        (l9NoticeCard) => {

            l9NoticeCard.addEventListener(
                "click",
                () => {

                    l9NoticeCards.forEach(
                        (card) => {
                            card.classList.remove(
                                "active"
                            );
                        }
                    );


                    l9NoticeCard.classList.add(
                        "active"
                    );


                    const l9NoticeKey =
                        l9NoticeCard.dataset.notice;


                    updateL9Notice(
                        l9NoticeKey
                    );

                }
            );


            /* Keyboard support */

            l9NoticeCard.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        l9NoticeCard.click();

                    }

                }
            );

        }
    );


    /* =====================================================
       FIRST CARD
===================================================== */

    const l9NoticeFirstCard =
        document.querySelector(
            '.l9-notice-card[data-notice="smile"]'
        );

    if (l9NoticeFirstCard) {

        l9NoticeFirstCard.classList.add(
            "active"
        );

    }


    /* =====================================================
       SCROLL REVEAL
===================================================== */

    if (
        "IntersectionObserver" in window
    ) {

        const l9NoticeObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "l9-notice-visible"
                                );

                                l9NoticeObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.14
                }
            );


        l9NoticeRevealElements.forEach(
            (element) => {

                l9NoticeObserver.observe(
                    element
                );

            }
        );

    } else {

        l9NoticeRevealElements.forEach(
            (element) => {

                element.classList.add(
                    "l9-notice-visible"
                );

            }
        );

    }

})();

/* =========================================================
   LETTER 9
   STEP 9.8 — IF I COULD KEEP ONE MOMENT
   INTERACTION
========================================================= */

(() => {

    const l9KeepMemories =
        document.querySelectorAll(".l9-keep-memory");

    const l9KeepFrame =
        document.getElementById("keepMemoryFrame");

    const l9KeepMemoryNumber =
        document.getElementById("keepMemoryNumber");

    const l9KeepMemoryKicker =
        document.getElementById("keepMemoryKicker");

    const l9KeepMemoryTitle =
        document.getElementById("keepMemoryTitle");

    const l9KeepMemoryText =
        document.getElementById("keepMemoryText");

    const l9KeepMemoryEnding =
        document.getElementById("keepMemoryEnding");

    const l9KeepMemoryDate =
        document.getElementById("keepMemoryDate");

    const l9KeepRevealElements =
        document.querySelectorAll(".l9-keep-reveal");


    /* =====================================================
       MEMORY DATA
    ===================================================== */

    const l9KeepData = {

        first: {
            number: "01",

            kicker:
                "THAT FIRST LITTLE MOMENT",

            title:
                "When everything <em>felt new.</em>",

            text:
                "I didn't know then how important " +
                "that moment would become. " +
                "I only knew that something about you felt different.",

            ending:
                "If I could keep one beginning, I'd keep this one.",

            date:
                "THE MOMENT EVERYTHING STARTED"
        },


        laugh: {
            number: "02",

            kicker:
                "THE MOMENT WE COULDN'T STOP LAUGHING",

            title:
                "That laugh <em>we shared.</em>",

            text:
                "Nothing extraordinary was happening. " +
                "We were simply being ourselves, laughing " +
                "at something that probably wouldn't make sense to anyone else.",

            ending:
                "I'd keep the kind of happiness that feels completely effortless.",

            date:
                "A MEMORY THAT STILL MAKES ME SMILE"
        },


        quiet: {
            number: "03",

            kicker:
                "ONE OF THOSE QUIET MOMENTS",

            title:
                "When silence <em>felt enough.</em>",

            text:
                "No big conversation. No perfect words. " +
                "Just being there together and feeling completely comfortable.",

            ending:
                "I'd keep the silence that never felt empty.",

            date:
                "WHEN NOTHING NEEDED TO BE SAID"
        },


        hug: {
            number: "04",

            kicker:
                "THAT ONE WARM HUG",

            title:
                "The moment I <em>felt home.</em>",

            text:
                "There are hugs you remember for a few seconds, " +
                "and then there are hugs that somehow stay with you much longer.",

            ending:
                "I'd keep the feeling of being exactly where I belonged.",

            date:
                "A LITTLE MOMENT THAT FELT LIKE HOME"
        },


        ordinary: {
            number: "05",

            kicker:
                "JUST AN ORDINARY DAY",

            title:
                "Nothing special. <em>Except you.</em>",

            text:
                "Maybe that's what I love most. " +
                "Some of my favorite moments weren't planned at all. " +
                "They were simply ordinary days made beautiful by you.",

            ending:
                "I'd keep an ordinary day if it meant keeping you in it.",

            date:
                "THE ORDINARY MOMENTS I NEVER WANT TO FORGET"
        }

    };


    /* =====================================================
       UPDATE MEMORY
    ===================================================== */

    function updateL9KeepMemory(key) {

        const l9KeepItem =
            l9KeepData[key];

        if (!l9KeepItem) return;


        l9KeepFrame.classList.add(
            "l9-keep-changing"
        );


        setTimeout(() => {

            l9KeepMemoryNumber.textContent =
                l9KeepItem.number;

            l9KeepMemoryKicker.textContent =
                l9KeepItem.kicker;

            l9KeepMemoryTitle.innerHTML =
                l9KeepItem.title;

            l9KeepMemoryText.textContent =
                l9KeepItem.text;

            l9KeepMemoryEnding.textContent =
                l9KeepItem.ending;

            l9KeepMemoryDate.textContent =
                l9KeepItem.date;


            l9KeepFrame.classList.remove(
                "l9-keep-changing"
            );

        }, 170);

    }


    /* =====================================================
       MEMORY BUTTONS
    ===================================================== */

    l9KeepMemories.forEach(
        (l9KeepMemory) => {

            l9KeepMemory.addEventListener(
                "click",
                () => {

                    l9KeepMemories.forEach(
                        (memory) => {

                            memory.classList.remove(
                                "active"
                            );

                        }
                    );


                    l9KeepMemory.classList.add(
                        "active"
                    );


                    const l9KeepKey =
                        l9KeepMemory.dataset.memory;


                    updateL9KeepMemory(
                        l9KeepKey
                    );

                }
            );


            /* Keyboard support */

            l9KeepMemory.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        l9KeepMemory.click();

                    }

                }
            );

        }
    );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    const l9KeepFirstMemory =
        document.querySelector(
            '.l9-keep-memory[data-memory="first"]'
        );

    if (l9KeepFirstMemory) {

        l9KeepFirstMemory.classList.add(
            "active"
        );

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    if (
        "IntersectionObserver" in window
    ) {

        const l9KeepObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "l9-keep-visible"
                                );

                                l9KeepObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.14
                }
            );


        l9KeepRevealElements.forEach(
            (element) => {

                l9KeepObserver.observe(
                    element
                );

            }
        );

    } else {

        l9KeepRevealElements.forEach(
            (element) => {

                element.classList.add(
                    "l9-keep-visible"
                );

            }
        );

    }

})();

/* =========================================================
   LETTER 9
   STEP 9.9 — THE REASONS I CHOOSE YOU
   INTERACTION
========================================================= */

(() => {

    const l9ChooseNavs =
        document.querySelectorAll(".l9-choose-nav");

    const l9ChooseCard =
        document.getElementById("chooseReasonCard");

    const l9ChooseNumber =
        document.getElementById("chooseReasonNumber");

    const l9ChooseIcon =
        document.getElementById("chooseReasonIcon");

    const l9ChooseLabel =
        document.getElementById("chooseReasonLabel");

    const l9ChooseTitle =
        document.getElementById("chooseReasonTitle");

    const l9ChooseText =
        document.getElementById("chooseReasonText");

    const l9ChooseEnding =
        document.getElementById("chooseReasonEnding");

    const l9ChooseProgress =
        document.getElementById("chooseReasonProgress");

    const l9ChooseProgressText =
        document.getElementById("chooseReasonProgressText");

    const l9ChooseRevealElements =
        document.querySelectorAll(".l9-choose-reveal");


    /* =====================================================
       REASON DATA
    ===================================================== */

    const l9ChooseData = {

        heart: {
            number: "01",
            icon: "♥",

            label:
                "BECAUSE YOU HAVE MY HEART",

            title:
                "You make love <em>feel safe.</em>",

            text:
                "With you, love doesn't feel like something " +
                "I have to prove or protect every second. " +
                "It simply feels real.",

            ending:
                "And that's something I never want to take for granted."
        },


        comfort: {
            number: "02",
            icon: "☾",

            label:
                "BECAUSE YOU FEEL LIKE HOME",

            title:
                "You bring me <em>peace.</em>",

            text:
                "There is a kind of comfort in being around you " +
                "that I can't quite explain. Even difficult days " +
                "feel a little lighter when you're close.",

            ending:
                "Some people feel familiar. You feel like home."
        },


        understanding: {
            number: "03",
            icon: "♡",

            label:
                "BECAUSE YOU UNDERSTAND ME",

            title:
                "You see the parts <em>others miss.</em>",

            text:
                "You somehow notice the things I don't always say. " +
                "You understand the quiet moments, the moods, " +
                "and the little things behind my words.",

            ending:
                "Being understood by you feels like being truly seen."
        },


        growth: {
            number: "04",
            icon: "✦",

            label:
                "BECAUSE YOU MAKE ME WANT TO GROW",

            title:
                "You make me want to become <em>better.</em>",

            text:
                "Loving you makes me want to become someone " +
                "you can always be proud of. Not because I have to, " +
                "but because you make growth feel worth it.",

            ending:
                "You don't change who I am. You inspire who I can become."
        },


        happiness: {
            number: "05",
            icon: "☼",

            label:
                "BECAUSE YOU MAKE ORDINARY DAYS BETTER",

            title:
                "You make happiness feel <em>simple.</em>",

            text:
                "Sometimes it's just a conversation, a silly joke, " +
                "a smile, or a completely ordinary moment. " +
                "With you, little things become enough.",

            ending:
                "You have a way of making normal days feel special."
        },


        trust: {
            number: "06",
            icon: "∞",

            label:
                "BECAUSE I TRUST YOU",

            title:
                "I can be <em>completely myself.</em>",

            text:
                "I don't have to pretend to have everything figured out. " +
                "I can be honest, imperfect, quiet, silly, and real.",

            ending:
                "And knowing I can be myself with you means everything."
        },


        you: {
            number: "07",
            icon: "♥",

            label:
                "AND THEN THERE'S JUST YOU",

            title:
                "Because you're <em>you.</em>",

            text:
                "After all the reasons, all the memories, " +
                "all the little things... maybe the simplest answer " +
                "is still the truest one.",

            ending:
                "I choose you because my heart simply knows."
        }

    };


    /* =====================================================
       UPDATE REASON
    ===================================================== */

    function updateL9ChooseReason(key) {

        const l9ChooseItem =
            l9ChooseData[key];

        if (!l9ChooseItem) return;


        l9ChooseCard.classList.add(
            "l9-choose-changing"
        );


        setTimeout(() => {

            l9ChooseNumber.textContent =
                l9ChooseItem.number;

            l9ChooseIcon.textContent =
                l9ChooseItem.icon;

            l9ChooseLabel.textContent =
                l9ChooseItem.label;

            l9ChooseTitle.innerHTML =
                l9ChooseItem.title;

            l9ChooseText.textContent =
                l9ChooseItem.text;

            l9ChooseEnding.textContent =
                l9ChooseItem.ending;


            const l9ChoosePosition =
                Number(l9ChooseItem.number);


            const l9ChoosePercentage =
                (l9ChoosePosition / 7) * 100;


            l9ChooseProgress.style.width =
                `${l9ChoosePercentage}%`;

            l9ChooseProgressText.textContent =
                `${l9ChooseItem.number} / 07`;


            l9ChooseCard.classList.remove(
                "l9-choose-changing"
            );

        }, 170);

    }


    /* =====================================================
       NAVIGATION
    ===================================================== */

    l9ChooseNavs.forEach(
        (l9ChooseNav) => {

            l9ChooseNav.addEventListener(
                "click",
                () => {

                    l9ChooseNavs.forEach(
                        (nav) => {

                            nav.classList.remove(
                                "active"
                            );

                        }
                    );


                    l9ChooseNav.classList.add(
                        "active"
                    );


                    const l9ChooseKey =
                        l9ChooseNav.dataset.reason;


                    updateL9ChooseReason(
                        l9ChooseKey
                    );

                }
            );


            /* Keyboard support */

            l9ChooseNav.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        l9ChooseNav.click();

                    }

                }
            );

        }
    );


    /* =====================================================
       INITIAL PROGRESS
    ===================================================== */

    if (l9ChooseProgress) {

        l9ChooseProgress.style.width =
            "14.285%";

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    if (
        "IntersectionObserver" in window
    ) {

        const l9ChooseObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "l9-choose-visible"
                                );

                                l9ChooseObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.14
                }
            );


        l9ChooseRevealElements.forEach(
            (element) => {

                l9ChooseObserver.observe(
                    element
                );

            }
        );

    } else {

        l9ChooseRevealElements.forEach(
            (element) => {

                element.classList.add(
                    "l9-choose-visible"
                );

            }
        );

    }

})();

/* =========================================================
   LETTER 9
   STEP 9.10 — A LETTER WITH NO REASON
   INTERACTION
========================================================= */

(() => {

    const l9NoReasonRevealElements =
        document.querySelectorAll(
            ".l9-noreason-reveal"
        );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    if (
        "IntersectionObserver" in window
    ) {

        const l9NoReasonObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "l9-noreason-visible"
                                );

                                l9NoReasonObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.14
                }
            );


        l9NoReasonRevealElements.forEach(
            (element) => {

                l9NoReasonObserver.observe(
                    element
                );

            }
        );

    } else {

        l9NoReasonRevealElements.forEach(
            (element) => {

                element.classList.add(
                    "l9-noreason-visible"
                );

            }
        );

    }


    /* =====================================================
       SUBTLE PAPER TILT
    ===================================================== */

    const l9NoReasonPaper =
        document.querySelector(
            ".l9-noreason-paper"
        );

    const l9NoReasonReduced =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        l9NoReasonPaper &&
        !l9NoReasonReduced &&
        window.innerWidth > 850
    ) {

        l9NoReasonPaper.addEventListener(
            "mousemove",
            (event) => {

                const l9NoReasonRect =
                    l9NoReasonPaper.getBoundingClientRect();

                const l9NoReasonX =
                    event.clientX -
                    l9NoReasonRect.left;

                const l9NoReasonY =
                    event.clientY -
                    l9NoReasonRect.top;

                const l9NoReasonRotateY =
                    ((l9NoReasonX /
                        l9NoReasonRect.width) - 0.5) * 2.2;

                const l9NoReasonRotateX =
                    ((l9NoReasonY /
                        l9NoReasonRect.height) - 0.5) * -1.6;


                l9NoReasonPaper.style.transform =
                    `perspective(900px)
                     rotateX(${l9NoReasonRotateX}deg)
                     rotateY(${l9NoReasonRotateY}deg)
                     translateY(-3px)`;

            }
        );


        l9NoReasonPaper.addEventListener(
            "mouseleave",
            () => {

                l9NoReasonPaper.style.transform =
                    "rotate(-0.35deg)";

            }
        );

    }

})();

 /* =========================================================
    LETTER 9
    STEP 9.12 — UNTIL THE NEXT LETTER
    REVEAL + LETTER 10 TRANSITION
 ========================================================= */


(() => {

    /* =====================================================
       DOM ELEMENTS
    ===================================================== */

    const l9UntilNextSection =
        document.getElementById(
            "untilTheNextLetter"
        );

    const l9UntilNextContent =
        l9UntilNextSection
            ? l9UntilNextSection.querySelector(
                ".l9-until-next-content"
            )
            : null;

    const l9UntilNextIdentity =
        l9UntilNextSection
            ? l9UntilNextSection.querySelector(
                ".l9-until-next-identity"
            )
            : null;

    const l9UntilNextMessage =
        l9UntilNextSection
            ? l9UntilNextSection.querySelector(
                ".l9-until-next-message"
            )
            : null;

    const l9UntilNextComplete =
        l9UntilNextSection
            ? l9UntilNextSection.querySelector(
                ".l9-until-next-complete"
            )
            : null;

    const l9OpenLetter10Btn =
        document.getElementById(
            "openLetter10Btn"
        );

        const l9ClickSound =
    document.getElementById("clickSound");


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const l9UntilNextReduced =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    if (
        l9UntilNextSection &&
        "IntersectionObserver" in window
    ) {

        const l9UntilNextObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            l9UntilNextSection.classList.add(
                                "l9-until-next-visible"
                            );


                            if (
                                l9UntilNextIdentity
                            ) {
                                l9UntilNextIdentity.classList.add(
                                    "l9-until-next-identity-visible"
                                );
                            }


                            setTimeout(
                                () => {

                                    if (
                                        l9UntilNextMessage
                                    ) {
                                        l9UntilNextMessage.classList.add(
                                            "l9-until-next-message-visible"
                                        );
                                    }

                                },
                                l9UntilNextReduced
                                    ? 0
                                    : 350
                            );


                            setTimeout(
                                () => {

                                    if (
                                        l9UntilNextComplete
                                    ) {
                                        l9UntilNextComplete.classList.add(
                                            "l9-until-next-complete-visible"
                                        );
                                    }

                                },
                                l9UntilNextReduced
                                    ? 0
                                    : 900
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.16,
                    rootMargin:
                        "0px 0px -70px 0px"
                }
            );


        l9UntilNextObserver.observe(
            l9UntilNextSection
        );

    } else {

        if (l9UntilNextSection) {
            l9UntilNextSection.classList.add(
                "l9-until-next-visible"
            );
        }

        if (l9UntilNextIdentity) {
            l9UntilNextIdentity.classList.add(
                "l9-until-next-identity-visible"
            );
        }

        if (l9UntilNextMessage) {
            l9UntilNextMessage.classList.add(
                "l9-until-next-message-visible"
            );
        }

        if (l9UntilNextComplete) {
            l9UntilNextComplete.classList.add(
                "l9-until-next-complete-visible"
            );
        }

    }


    /* =====================================================
       LETTER 10 TRANSITION
    ===================================================== */

    if (
        l9OpenLetter10Btn
    ) {

        let l9LeavingLetter9 =
            false;


        l9OpenLetter10Btn.addEventListener(
            "click",
            () => {

                if (
                    l9LeavingLetter9
                ) {
                    return;
                }


                l9LeavingLetter9 =
                    true;

                    if (l9ClickSound) {
    l9ClickSound.currentTime = 0;
    l9ClickSound.play().catch(() => {});
}


                l9OpenLetter10Btn.disabled =
                    true;

                l9OpenLetter10Btn.setAttribute(
                    "aria-disabled",
                    "true"
                );


                /*
                 * Start cinematic exit
                 */

                if (
                    l9UntilNextSection
                ) {
                    l9UntilNextSection.classList.add(
                        "l9-until-next-leaving"
                    );
                }


                /*
                 * Navigate after fade
                 */

                setTimeout(
                    () => {

                        window.location.href =
                            "letter10.html";

                    },
                    l9UntilNextReduced
                        ? 0
                        : 900
                );

            }
        );

    }

})();