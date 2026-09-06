/* =========================================================
   LETTER 8 — FUTURE TOGETHER
   STEP 8.1 — HERO ATMOSPHERE
========================================================= */


/* =========================================================
   FUTURE PARTICLES
========================================================= */

const futureParticles =
    document.getElementById("futureParticles");


function createFutureParticles() {

    if (!futureParticles) return;


    const particleCount =
        window.innerWidth <= 700 ? 18 : 32;


    const fragment =
        document.createDocumentFragment();


    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");


        particle.className =
            "future-particle";


        const left =
            Math.random() * 100;


        const bottom =
            Math.random() * 45;


        const duration =
            5 + Math.random() * 6;


        const delay =
            Math.random() * -8;


        const xMovement =
            (Math.random() - .5) * 90;


        const opacity =
            .25 + Math.random() * .55;


        particle.style.left =
            `${left}%`;


        particle.style.bottom =
            `${bottom}%`;


        particle.style.setProperty(
            "--particle-duration",
            `${duration}s`
        );


        particle.style.setProperty(
            "--particle-x",
            `${xMovement}px`
        );


        particle.style.setProperty(
            "--particle-opacity",
            opacity
        );


        particle.style.animationDelay =
            `${delay}s`;


        const size =
            1.5 + Math.random() * 2.5;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        fragment.appendChild(particle);
    }


    futureParticles.appendChild(fragment);
}


createFutureParticles();


/* =========================================================
   HERO MOUSE PARALLAX
========================================================= */

const futureHero =
    document.getElementById("futureHero");


if (
    futureHero &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

    const futureSky =
        document.querySelector(".future-sky");


    const futureSun =
        document.querySelector(".future-sun");


    const futureLight =
        document.querySelector(".future-light");


    futureHero.addEventListener(
        "mousemove",
        event => {

            const rect =
                futureHero.getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width - .5;


            const y =
                (event.clientY - rect.top) /
                rect.height - .5;


            if (futureSky) {

                futureSky.style.transform =
                    `translate(
                        ${x * -10}px,
                        ${y * -6}px
                    ) scale(1.035)`;
            }


            if (futureSun) {

                futureSun.style.marginLeft =
                    `${x * 18}px`;

                futureSun.style.marginTop =
                    `${y * 10}px`;
            }


            if (futureLight) {

                futureLight.style.transform =
                    `translate(
                        calc(-50% + ${x * 20}px),
                        calc(-50% + ${y * 12}px)
                    )`;
            }

        },
        { passive: true }
    );


    futureHero.addEventListener(
        "mouseleave",
        () => {

            if (futureSky) {

                futureSky.style.transform =
                    "";
            }


            if (futureSun) {

                futureSun.style.marginLeft =
                    "";

                futureSun.style.marginTop =
                    "";
            }


            if (futureLight) {

                futureLight.style.transform =
                    "";
            }

        }
    );
}


/* =========================================================
   SCROLL REVEAL PREPARATION
   8.2+ SECTIONS WILL USE THIS
========================================================= */

const futureRevealItems =
    document.querySelectorAll(".future-reveal");


if (futureRevealItems.length) {

    const futureRevealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;


                    entry.target.classList.add(
                        "is-visible"
                    );


                    futureRevealObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: .15
            }
        );


    futureRevealItems.forEach(item => {

        futureRevealObserver.observe(item);

    });
}


/* =========================================================
   PAGE VISIBILITY PERFORMANCE
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        document.body.classList.toggle(
            "future-page-hidden",
            document.hidden
        );

    }
);

/* =========================================================
   LETTER 8 — STEP 8.2
   FUTURE LETTER INTERACTION
========================================================= */


/* =========================================================
   FUTURE LETTER PAPER PARALLAX
========================================================= */

const futureLetterPaper =
    document.querySelector(".future-letter-paper");


if (
    futureLetterPaper &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

    futureLetterPaper.addEventListener(
        "mousemove",
        event => {

            const rect =
                futureLetterPaper.getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width - .5;


            const y =
                (event.clientY - rect.top) /
                rect.height - .5;


            const rotateX =
                y * -1.2;


            const rotateY =
                x * 1.2;


            futureLetterPaper.style.transform =
                `translateY(0)
                 perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        },
        { passive: true }
    );


    futureLetterPaper.addEventListener(
        "mouseleave",
        () => {

            futureLetterPaper.style.transform =
                "";

        }
    );

}


/* =========================================================
   FUTURE LETTER READING PROGRESS
========================================================= */

const futureLetterBody =
    document.querySelector(".future-letter-body");


if (futureLetterBody) {

    futureLetterBody
        .querySelectorAll("p")
        .forEach((paragraph, index) => {

            paragraph.style.setProperty(
                "--letter-index",
                index
            );

        });

}


/* =========================================================
   SOFT LETTER READING EFFECT
========================================================= */

if (
    futureLetterBody &&
    "IntersectionObserver" in window
) {

    const futureParagraphs =
        futureLetterBody.querySelectorAll("p");


    const futureParagraphObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;


                    entry.target.classList.add(
                        "letter-paragraph-visible"
                    );


                    futureParagraphObserver
                        .unobserve(entry.target);

                });

            },
            {
                threshold: .18
            }
        );


    futureParagraphs.forEach(
        paragraph => {

            futureParagraphObserver.observe(
                paragraph
            );

        }
    );

}

/* =========================================================
   LETTER 8 — STEP 8.3
   OUR FUTURE HOME INTERACTION
========================================================= */


/* =========================================================
   HOME DATA
========================================================= */

const futureHomeData = {

    morning: {

        label: "A MORNING I WANT WITH YOU",

        story:
            "I imagine waking up slowly, walking into a little kitchen, and finding you there before the world has properly started.",

        second:
            "Maybe I'll make the coffee. Maybe you'll complain that I made it too strong. We'll probably argue about something completely unnecessary.",

        emotional:
            "And somehow, that ordinary morning will feel like one of the most beautiful things in my life."
    },


    plants: {

        label: "THE LITTLE THINGS",

        story:
            "I can already imagine little plants sitting near the windows, growing slowly while our life grows around them.",

        second:
            "We'll forget to water them sometimes, remember at the last moment, and probably give every single one of them a ridiculous name.",

        emotional:
            "I want a home filled with small things that remind me that we are building a life together."
    },


    evening: {

        label: "THE DAYS I LOOK FORWARD TO",

        story:
            "Some evenings won't need plans at all. We'll come home tired, change into comfortable clothes, and simply sit beside each other.",

        second:
            "Maybe we'll talk about our day. Maybe we'll scroll through our phones. Maybe we'll just sit quietly without saying much.",

        emotional:
            "Because with the right person, even doing nothing can feel like everything."
    },


    movie: {

        label: "OUR LITTLE TRADITION",

        story:
            "There will probably be countless movie nights where we spend more time choosing what to watch than actually watching anything.",

        second:
            "One blanket. Something to eat. You stealing most of it. Me pretending to be annoyed. And both of us eventually falling asleep before the movie ends.",

        emotional:
            "Those are the moments I think I'll remember the most."
    }

};


/* =========================================================
   HOME CARDS
========================================================= */

const futureHomeCards =
    document.querySelectorAll(".future-home-card");

const futureHomeGrid =
    document.querySelector(".future-home-grid");


/* =========================================================
   CREATE STORY
========================================================= */

function createFutureHomeStory(card, data) {

    if (!card || !data)
        return null;


    let story =
        card.querySelector(".home-card-story");


    if (story)
        return story;


    story =
        document.createElement("div");


    story.className =
        "home-card-story";


    story.hidden = true;


    story.innerHTML = `

        <span class="home-story-label">
            ${data.label}
        </span>

        <p>
            ${data.story}
        </p>

        <p>
            ${data.second}
        </p>

        <p class="home-story-emotional">
            ${data.emotional}
        </p>

    `;


    card
        .querySelector(".home-card-content")
        ?.appendChild(story);


    return story;
}


/* =========================================================
   OPEN CARD
========================================================= */

function openFutureHomeCard(card) {

    if (!card)
        return;


    const currentOpen =
        document.querySelector(
            ".future-home-card.home-card-active"
        );


    if (
        currentOpen &&
        currentOpen !== card
    ) {

        closeFutureHomeCard(
            currentOpen
        );

    }


    const type =
        card.dataset.home;


    const data =
        futureHomeData[type];


    if (!data)
        return;


    const story =
        createFutureHomeStory(
            card,
            data
        );


    if (!story)
        return;


    card.classList.add(
        "home-card-active"
    );


    card.setAttribute(
        "aria-expanded",
        "true"
    );


    story.hidden = false;


    if (futureHomeGrid) {

        futureHomeGrid.classList.add(
            "has-active"
        );

    }


    requestAnimationFrame(() => {

        story.classList.add(
            "is-visible"
        );

    });


    /* Small click sound */

    const clickSound =
        document.getElementById(
            "clickSound"
        );


    if (clickSound) {

        try {

            clickSound.currentTime = 0;

            clickSound.volume =
                Math.min(
                    Number(
                        clickSound.dataset.defaultVolume
                    ) || .35,
                    .35
                );

            clickSound
                .play()
                .catch(() => {});

        }

        catch (error) {}

    }

}


/* =========================================================
   CLOSE CARD
========================================================= */

function closeFutureHomeCard(card) {

    if (!card)
        return;


    const story =
        card.querySelector(
            ".home-card-story"
        );


    card.classList.remove(
        "home-card-active"
    );


    card.setAttribute(
        "aria-expanded",
        "false"
    );


    if (story) {

        story.classList.remove(
            "is-visible"
        );


        setTimeout(() => {

            if (
                !card.classList.contains(
                    "home-card-active"
                )
            ) {

                story.hidden = true;

            }

        }, 650);

    }


    if (
        futureHomeGrid &&
        !futureHomeGrid.querySelector(
            ".home-card-active"
        )
    ) {

        futureHomeGrid.classList.remove(
            "has-active"
        );

    }

}


/* =========================================================
   CARD EVENTS
========================================================= */

futureHomeCards.forEach(card => {

    card.addEventListener(
        "click",
        event => {

            event.preventDefault();


            if (
                card.classList.contains(
                    "home-card-active"
                )
            ) {

                closeFutureHomeCard(
                    card
                );

            }

            else {

                openFutureHomeCard(
                    card
                );

            }

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


                if (
                    card.classList.contains(
                        "home-card-active"
                    )
                ) {

                    closeFutureHomeCard(
                        card
                    );

                }

                else {

                    openFutureHomeCard(
                        card
                    );

                }

            }


            if (
                event.key === "Escape"
            ) {

                closeFutureHomeCard(
                    card
                );

            }

        }
    );

});


/* =========================================================
   CLICK OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        const activeCard =
            document.querySelector(
                ".future-home-card.home-card-active"
            );


        if (!activeCard)
            return;


        if (
            !activeCard.contains(
                event.target
            )
        ) {

            closeFutureHomeCard(
                activeCard
            );

        }

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        )
            return;


        const activeCard =
            document.querySelector(
                ".future-home-card.home-card-active"
            );


        if (activeCard) {

            closeFutureHomeCard(
                activeCard
            );

        }

    }
);


/* =========================================================
   DESKTOP CARD PARALLAX
========================================================= */

if (
    futureHomeCards.length &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    futureHomeCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (
                    card.classList.contains(
                        "home-card-active"
                    )
                )
                    return;


                const rect =
                    card.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left) /
                    rect.width - .5;


                const y =
                    (event.clientY - rect.top) /
                    rect.height - .5;


                card.style.setProperty(
                    "--home-x",
                    `${50 + x * 12}%`
                );


                card.style.setProperty(
                    "--home-y",
                    `${50 + y * 12}%`
                );


                card.style.setProperty(
                    "--home-rx",
                    `${y * -3}deg`
                );


                card.style.setProperty(
                    "--home-ry",
                    `${x * 3}deg`
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
                    "--home-x",
                    "50%"
                );


                card.style.setProperty(
                    "--home-y",
                    "50%"
                );


                card.style.setProperty(
                    "--home-rx",
                    "0deg"
                );


                card.style.setProperty(
                    "--home-ry",
                    "0deg"
                );

            }
        );

    });

}

/* =========================================================
   LETTER 8 — STEP 8.4
   ORDINARY DAYS INTERACTION
========================================================= */


/* =========================================================
   ORDINARY DAYS DATA
========================================================= */

const ordinaryDaysData = {

    morning: {

        label: "A MORNING I WANT TO KEEP",

        first:
            "I want mornings where neither of us is in a hurry to leave.",

        second:
            "Maybe you'll steal the blanket. Maybe I'll complain. Maybe we'll both pretend we're still asleep just because getting up means leaving this little moment.",

        emotional:
            "I think I'd happily choose a thousand slow mornings with you."
    },


    food: {

        label: "OUR MOST IMPORTANT DECISION",

        first:
            "We'll probably spend far too much time deciding what we're going to eat.",

        second:
            "I'll suggest something. You'll reject it. You'll suggest something. I'll reject that. And somehow, after twenty minutes, we'll order the same thing we always do.",

        emotional:
            "It's such a small thing... but I can already imagine loving it."
    },


    nothing: {

        label: "NO PLANS REQUIRED",

        first:
            "There will be days when we don't go anywhere and don't do anything particularly interesting.",

        second:
            "You'll be beside me. I'll be beside you. Maybe one of us is reading, the other is scrolling, and neither of us feels the need to fill the silence.",

        emotional:
            "Because being comfortable in silence with you sounds like one of the most peaceful versions of love."
    },


    laugh: {

        label: "THE MOMENTS WE CAN'T EXPLAIN",

        first:
            "We'll probably laugh at things that nobody else would understand.",

        second:
            "One stupid look. One random sentence. One memory from years ago. Suddenly we're both laughing so hard that we can't even remember how it started.",

        emotional:
            "Those completely meaningless moments might become some of my most meaningful memories."
    }

};


/* =========================================================
   ELEMENTS
========================================================= */

const ordinaryDays =
    document.querySelectorAll(".ordinary-day");


const ordinaryDaysList =
    document.querySelector(".ordinary-days-list");


/* =========================================================
   CREATE STORY
========================================================= */

function createOrdinaryDayStory(card, data) {

    if (!card || !data)
        return null;


    const story =
        card.querySelector(
            ".ordinary-day-story"
        );


    if (!story)
        return null;


    if (story.dataset.created === "true")
        return story;


    story.innerHTML = `

        <span class="ordinary-story-label">
            ${data.label}
        </span>

        <p>
            ${data.first}
        </p>

        <p>
            ${data.second}
        </p>

        <p class="ordinary-story-emotional">
            ${data.emotional}
        </p>

    `;


    story.dataset.created = "true";


    return story;
}


/* =========================================================
   OPEN DAY
========================================================= */

function openOrdinaryDay(card) {

    if (!card)
        return;


    const currentOpen =
        document.querySelector(
            ".ordinary-day.ordinary-day-active"
        );


    if (
        currentOpen &&
        currentOpen !== card
    ) {

        closeOrdinaryDay(
            currentOpen
        );

    }


    const type =
        card.dataset.day;


    const data =
        ordinaryDaysData[type];


    if (!data)
        return;


    const story =
        createOrdinaryDayStory(
            card,
            data
        );


    if (!story)
        return;


    card.classList.add(
        "ordinary-day-active"
    );


    card.setAttribute(
        "aria-expanded",
        "true"
    );


    story.hidden = false;


    if (ordinaryDaysList) {

        ordinaryDaysList.classList.add(
            "has-active"
        );

    }


    requestAnimationFrame(() => {

        story.classList.add(
            "is-visible"
        );

    });


    /* Click sound */

    const clickSound =
        document.getElementById(
            "clickSound"
        );


    if (clickSound) {

        try {

            clickSound.currentTime = 0;

            clickSound.volume =
                Math.min(
                    Number(
                        clickSound.dataset.defaultVolume
                    ) || .35,
                    .35
                );

            clickSound
                .play()
                .catch(() => {});

        }

        catch (error) {}

    }

}


/* =========================================================
   CLOSE DAY
========================================================= */

function closeOrdinaryDay(card) {

    if (!card)
        return;


    const story =
        card.querySelector(
            ".ordinary-day-story"
        );


    card.classList.remove(
        "ordinary-day-active"
    );


    card.setAttribute(
        "aria-expanded",
        "false"
    );


    if (story) {

        story.classList.remove(
            "is-visible"
        );


        setTimeout(() => {

            if (
                !card.classList.contains(
                    "ordinary-day-active"
                )
            ) {

                story.hidden = true;

            }

        }, 700);

    }


    if (
        ordinaryDaysList &&
        !ordinaryDaysList.querySelector(
            ".ordinary-day-active"
        )
    ) {

        ordinaryDaysList.classList.remove(
            "has-active"
        );

    }

}


/* =========================================================
   EVENTS
========================================================= */

ordinaryDays.forEach(card => {

    card.addEventListener(
        "click",
        event => {

            event.preventDefault();


            if (
                card.classList.contains(
                    "ordinary-day-active"
                )
            ) {

                closeOrdinaryDay(
                    card
                );

            }

            else {

                openOrdinaryDay(
                    card
                );

            }

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


                if (
                    card.classList.contains(
                        "ordinary-day-active"
                    )
                ) {

                    closeOrdinaryDay(
                        card
                    );

                }

                else {

                    openOrdinaryDay(
                        card
                    );

                }

            }


            if (
                event.key === "Escape"
            ) {

                closeOrdinaryDay(
                    card
                );

            }

        }
    );

});


/* =========================================================
   CLICK OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        const activeDay =
            document.querySelector(
                ".ordinary-day.ordinary-day-active"
            );


        if (!activeDay)
            return;


        if (
            !activeDay.contains(
                event.target
            )
        ) {

            closeOrdinaryDay(
                activeDay
            );

        }

    }
);


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        )
            return;


        const activeDay =
            document.querySelector(
                ".ordinary-day.ordinary-day-active"
            );


        if (activeDay) {

            closeOrdinaryDay(
                activeDay
            );

        }

    }
);


/* =========================================================
   DESKTOP PARALLAX
========================================================= */

if (
    ordinaryDays.length &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    ordinaryDays.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (
                    card.classList.contains(
                        "ordinary-day-active"
                    )
                )
                    return;


                const rect =
                    card.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left) /
                    rect.width - .5;


                const y =
                    (event.clientY - rect.top) /
                    rect.height - .5;


                card.style.setProperty(
                    "--ordinary-x",
                    `${50 + x * 12}%`
                );


                card.style.setProperty(
                    "--ordinary-y",
                    `${50 + y * 12}%`
                );


                card.style.setProperty(
                    "--ordinary-rx",
                    `${y * -2.5}deg`
                );


                card.style.setProperty(
                    "--ordinary-ry",
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
                    "--ordinary-x",
                    "50%"
                );


                card.style.setProperty(
                    "--ordinary-y",
                    "50%"
                );


                card.style.setProperty(
                    "--ordinary-rx",
                    "0deg"
                );


                card.style.setProperty(
                    "--ordinary-ry",
                    "0deg"
                );

            }
        );

    });

}

/* =========================================================
   LETTER 8 — STEP 8.5
   FUTURE JOURNEYS INTERACTION
========================================================= */


/* =========================================================
   DESTINATION DATA
========================================================= */

const futureDestinationData = {

    sea: {

        label:
            "THE FIRST ESCAPE",

        first:
            "I want to stand beside you somewhere near the ocean, with the wind messing up our hair and absolutely nothing important waiting for us.",

        second:
            "We'll walk barefoot, take terrible photos, eat something near the beach, and probably stay until the sky changes colour.",

        emotional:
            "I think the sea will be beautiful... but seeing it with you will make it unforgettable."
    },


    mountains: {

        label:
            "THE QUIET ESCAPE",

        first:
            "Maybe one day we'll wake up somewhere in the mountains, where the mornings are cold and the world feels wonderfully quiet.",

        second:
            "Warm coffee in our hands. Clouds outside the window. You standing beside me while we decide whether we're brave enough to step into the cold.",

        emotional:
            "I don't need the perfect mountain. I just want you beside me when we look at the view."
    },


    unknown: {

        label:
            "THE UNKNOWN",

        first:
            "And maybe the place that means the most to us will be somewhere we haven't even heard of yet.",

        second:
            "A random city. A little road. A wrong turn that somehow becomes the best decision of the trip.",

        emotional:
            "Because the destination has never been the most important part. It's who I get to discover it with."
    }

};


/* =========================================================
   ELEMENTS
========================================================= */

const futureDestinations =
    document.querySelectorAll(
        ".future-destination"
    );


const futureJourneyMap =
    document.querySelector(
        ".future-journey-map"
    );


const journeyProgress =
    document.querySelector(
        ".journey-route-progress"
    );


/* =========================================================
   CREATE STORY
========================================================= */

function createDestinationStory(
    card,
    data
) {

    if (!card || !data)
        return null;


    const story =
        card.querySelector(
            ".destination-story"
        );


    if (!story)
        return null;


    if (
        story.dataset.created === "true"
    )
        return story;


    story.innerHTML = `

        <span class="destination-story-label">
            ${data.label}
        </span>

        <p>
            ${data.first}
        </p>

        <p>
            ${data.second}
        </p>

        <p class="destination-story-emotional">
            ${data.emotional}
        </p>

    `;


    story.dataset.created =
        "true";


    return story;
}


/* =========================================================
   UPDATE ROUTE
========================================================= */

function updateJourneyRoute() {

    if (
        !futureJourneyMap ||
        !journeyProgress
    )
        return;


    const activeIndex =
        Array.from(
            futureDestinations
        ).findIndex(
            card =>
                card.classList.contains(
                    "destination-active"
                )
        );


    if (activeIndex === -1) {

        journeyProgress.style.height =
            "0";

        return;
    }


    const total =
        futureDestinations.length - 1;


    const progress =
        total > 0
            ? (activeIndex / total) * 100
            : 0;


    journeyProgress.style.height =
        `${progress}%`;

}


/* =========================================================
   OPEN DESTINATION
========================================================= */

function openFutureDestination(
    card
) {

    if (!card)
        return;


    const currentOpen =
        document.querySelector(
            ".future-destination.destination-active"
        );


    if (
        currentOpen &&
        currentOpen !== card
    ) {

        closeFutureDestination(
            currentOpen
        );

    }


    const type =
        card.dataset.destination;


    const data =
        futureDestinationData[type];


    if (!data)
        return;


    const story =
        createDestinationStory(
            card,
            data
        );


    if (!story)
        return;


    card.classList.add(
        "destination-active"
    );


    card.setAttribute(
        "aria-expanded",
        "true"
    );


    story.hidden =
        false;


    if (futureJourneyMap) {

        futureJourneyMap.classList.add(
            "has-active"
        );

    }


    requestAnimationFrame(
        () => {

            story.classList.add(
                "is-visible"
            );

        }
    );


    updateJourneyRoute();


    /* Click sound */

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
                        clickSound.dataset.defaultVolume
                    ) || .35,
                    .35
                );

            clickSound
                .play()
                .catch(
                    () => {}
                );

        }

        catch (error) {}

    }

}


/* =========================================================
   CLOSE DESTINATION
========================================================= */

function closeFutureDestination(
    card
) {

    if (!card)
        return;


    const story =
        card.querySelector(
            ".destination-story"
        );


    card.classList.remove(
        "destination-active"
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
                        "destination-active"
                    )
                ) {

                    story.hidden =
                        true;

                }

            },
            700
        );

    }


    if (
        futureJourneyMap &&
        !futureJourneyMap.querySelector(
            ".destination-active"
        )
    ) {

        futureJourneyMap.classList.remove(
            "has-active"
        );

    }


    updateJourneyRoute();

}


/* =========================================================
   CARD EVENTS
========================================================= */

futureDestinations.forEach(
    card => {

        card.addEventListener(
            "click",
            event => {

                event.preventDefault();


                if (
                    card.classList.contains(
                        "destination-active"
                    )
                ) {

                    closeFutureDestination(
                        card
                    );

                }

                else {

                    openFutureDestination(
                        card
                    );

                }

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


                    if (
                        card.classList.contains(
                            "destination-active"
                        )
                    ) {

                        closeFutureDestination(
                            card
                        );

                    }

                    else {

                        openFutureDestination(
                            card
                        );

                    }

                }


                if (
                    event.key === "Escape"
                ) {

                    closeFutureDestination(
                        card
                    );

                }

            }
        );

    }
);


/* =========================================================
   CLICK OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        const activeDestination =
            document.querySelector(
                ".future-destination.destination-active"
            );


        if (
            !activeDestination
        )
            return;


        if (
            !activeDestination.contains(
                event.target
            )
        ) {

            closeFutureDestination(
                activeDestination
            );

        }

    }
);


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        )
            return;


        const activeDestination =
            document.querySelector(
                ".future-destination.destination-active"
            );


        if (
            activeDestination
        ) {

            closeFutureDestination(
                activeDestination
            );

        }

    }
);


/* =========================================================
   DESKTOP PARALLAX
========================================================= */

if (

    futureDestinations.length &&

    window.matchMedia(
        "(pointer: fine)"
    ).matches &&

    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches

) {

    futureDestinations.forEach(
        destination => {

            const card =
                destination.querySelector(
                    ".destination-card"
                );


            if (!card)
                return;


            card.addEventListener(
                "mousemove",
                event => {

                    if (
                        destination.classList.contains(
                            "destination-active"
                        )
                    )
                        return;


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        (event.clientX - rect.left) /
                        rect.width - .5;


                    const y =
                        (event.clientY - rect.top) /
                        rect.height - .5;


                    card.style.setProperty(
                        "--destination-x",
                        `${50 + x * 12}%`
                    );


                    card.style.setProperty(
                        "--destination-y",
                        `${50 + y * 12}%`
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

                }
            );

        }
    );

}


/* =========================================================
   SCROLL-BASED ROUTE REVEAL
========================================================= */

if (
    futureJourneyMap &&
    journeyProgress &&
    "IntersectionObserver" in window
) {

    const routeObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        )
                            return;


                        journeyProgress.style.height =
                            "100%";


                        setTimeout(
                            () => {

                                if (
                                    !futureJourneyMap.querySelector(
                                        ".destination-active"
                                    )
                                ) {

                                    journeyProgress.style.height =
                                        "0";

                                }

                            },
                            1500
                        );


                        routeObserver.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold:
                    .25
            }
        );


    routeObserver.observe(
        futureJourneyMap
    );

}

/* =========================================================
   LETTER 8 — STEP 8.6
   THE PERSON I WANT TO BECOME
   INTERACTION
========================================================= */


/* =========================================================
   DATA
========================================================= */

const becomingQualityData = {

    patient: {

        label:
            "WHEN THINGS GET HARD",

        first:
            "I want to learn to slow down when emotions get loud.",

        second:
            "To listen instead of immediately trying to defend myself. To understand that sometimes you don't need an answer from me — you just need me to stay, listen, and care.",

        emotional:
            "I want my patience to feel like a safe place for you."
    },


    understanding: {

        label:
            "TO KNOW YOUR HEART",

        first:
            "I want to understand the little things that make you who you are.",

        second:
            "The things you say. The things you don't say. The days when you're quiet. The moments when you need reassurance without having to ask for it.",

        emotional:
            "I want to keep learning your heart, even after I think I already know it."
    },


    present: {

        label:
            "IN THE MOMENT",

        first:
            "I don't want to be beside you while my mind is somewhere else.",

        second:
            "I want to put my phone away sometimes, look at you properly, listen to your stories, notice your smile, and actually be there for the little moments we're going to miss someday.",

        emotional:
            "Because your presence deserves my presence too."
    },


    trust: {

        label:
            "THE PROMISE I WANT TO KEEP",

        first:
            "I want my words to mean something because my actions keep proving them.",

        second:
            "I want you to know that when I say I'm here, I mean it. When I promise something, I try my best to keep it. And when life gets difficult, I don't disappear.",

        emotional:
            "I want to become someone you can trust with your heart."
    }

};


/* =========================================================
   ELEMENTS
========================================================= */

const becomingQualities =
    document.querySelectorAll(
        ".becoming-quality"
    );


const becomingQualitiesGrid =
    document.querySelector(
        ".becoming-qualities"
    );


/* =========================================================
   CREATE STORY
========================================================= */

function createBecomingStory(
    card,
    data
) {

    if (!card || !data)
        return null;


    const story =
        card.querySelector(
            ".quality-story"
        );


    if (!story)
        return null;


    if (
        story.dataset.created === "true"
    )
        return story;


    story.innerHTML = `

        <span class="quality-story-label">
            ${data.label}
        </span>

        <p>
            ${data.first}
        </p>

        <p>
            ${data.second}
        </p>

        <p class="quality-story-emotional">
            ${data.emotional}
        </p>

    `;


    story.dataset.created =
        "true";


    return story;
}


/* =========================================================
   OPEN
========================================================= */

function openBecomingQuality(
    card
) {

    if (!card)
        return;


    const currentOpen =
        document.querySelector(
            ".becoming-quality.quality-active"
        );


    if (
        currentOpen &&
        currentOpen !== card
    ) {

        closeBecomingQuality(
            currentOpen
        );

    }


    const type =
        card.dataset.quality;


    const data =
        becomingQualityData[type];


    if (!data)
        return;


    const story =
        createBecomingStory(
            card,
            data
        );


    if (!story)
        return;


    card.classList.add(
        "quality-active"
    );


    card.setAttribute(
        "aria-expanded",
        "true"
    );


    story.hidden =
        false;


    if (becomingQualitiesGrid) {

        becomingQualitiesGrid.classList.add(
            "has-active"
        );

    }


    requestAnimationFrame(
        () => {

            story.classList.add(
                "is-visible"
            );

        }
    );


    /* Click sound */

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
                        clickSound.dataset.defaultVolume
                    ) || .35,
                    .35
                );

            clickSound
                .play()
                .catch(
                    () => {}
                );

        }

        catch (error) {}

    }

}


/* =========================================================
   CLOSE
========================================================= */

function closeBecomingQuality(
    card
) {

    if (!card)
        return;


    const story =
        card.querySelector(
            ".quality-story"
        );


    card.classList.remove(
        "quality-active"
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
                        "quality-active"
                    )
                ) {

                    story.hidden =
                        true;

                }

            },
            700
        );

    }


    if (
        becomingQualitiesGrid &&
        !becomingQualitiesGrid.querySelector(
            ".quality-active"
        )
    ) {

        becomingQualitiesGrid.classList.remove(
            "has-active"
        );

    }

}


/* =========================================================
   EVENTS
========================================================= */

becomingQualities.forEach(
    card => {

        card.addEventListener(
            "click",
            event => {

                event.preventDefault();


                if (
                    card.classList.contains(
                        "quality-active"
                    )
                ) {

                    closeBecomingQuality(
                        card
                    );

                }

                else {

                    openBecomingQuality(
                        card
                    );

                }

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


                    if (
                        card.classList.contains(
                            "quality-active"
                        )
                    ) {

                        closeBecomingQuality(
                            card
                        );

                    }

                    else {

                        openBecomingQuality(
                            card
                        );

                    }

                }


                if (
                    event.key === "Escape"
                ) {

                    closeBecomingQuality(
                        card
                    );

                }

            }
        );

    }
);


/* =========================================================
   CLICK OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        const activeQuality =
            document.querySelector(
                ".becoming-quality.quality-active"
            );


        if (!activeQuality)
            return;


        if (
            !activeQuality.contains(
                event.target
            )
        ) {

            closeBecomingQuality(
                activeQuality
            );

        }

    }
);


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        )
            return;


        const activeQuality =
            document.querySelector(
                ".becoming-quality.quality-active"
            );


        if (activeQuality) {

            closeBecomingQuality(
                activeQuality
            );

        }

    }
);


/* =========================================================
   DESKTOP LIGHT PARALLAX
========================================================= */

if (

    becomingQualities.length &&

    window.matchMedia(
        "(pointer: fine)"
    ).matches &&

    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches

) {

    becomingQualities.forEach(
        card => {

            card.addEventListener(
                "mousemove",
                event => {

                    if (
                        card.classList.contains(
                            "quality-active"
                        )
                    )
                        return;


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        (event.clientX - rect.left) /
                        rect.width - .5;


                    const y =
                        (event.clientY - rect.top) /
                        rect.height - .5;


                    card.style.setProperty(
                        "--quality-x",
                        `${50 + x * 12}%`
                    );


                    card.style.setProperty(
                        "--quality-y",
                        `${50 + y * 12}%`
                    );


                    card.style.setProperty(
                        "--quality-rx",
                        `${y * -2.5}deg`
                    );


                    card.style.setProperty(
                        "--quality-ry",
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
                        "--quality-x",
                        "50%"
                    );


                    card.style.setProperty(
                        "--quality-y",
                        "50%"
                    );


                    card.style.setProperty(
                        "--quality-rx",
                        "0deg"
                    );


                    card.style.setProperty(
                        "--quality-ry",
                        "0deg"
                    );

                }
            );

        }
    );

}

/* =========================================================
   LETTER 8 — STEP 8.7
   WHEN LIFE GETS HARD
   INTERACTION
========================================================= */


/* =========================================================
   DATA
========================================================= */

const hardDaysData = {

    difficult: {

        label:
            "THE HEAVY DAYS",

        first:
            "There will be moments when one of us feels tired, frustrated, lost, or simply overwhelmed by everything happening around us.",

        second:
            "I won't expect you to always have the right words. And I won't expect myself to have all the answers either. Sometimes we'll just sit through the difficult moment together.",

        emotional:
            "You don't have to carry every heavy day alone."
    },


    stay: {

        label:
            "I'LL STAY",

        first:
            "If you ever have a day when you don't know what to do, I want you to know you can still look beside you and find me there.",

        second:
            "Maybe I won't be able to fix everything. Maybe all I can do is listen, hold your hand, make you something warm, or sit quietly beside you.",

        emotional:
            "But I will still be there."
    },


    choose: {

        label:
            "THE CHOICE I WANT TO KEEP MAKING",

        first:
            "Love isn't only about choosing someone when everything feels beautiful.",

        second:
            "It's also about remembering why they matter when life becomes complicated, when we're tired, when we're frustrated, and when things don't go according to plan.",

        emotional:
            "Even on the hard days, I want us to find our way back to each other."
    }

};


/* =========================================================
   ELEMENTS
========================================================= */

const hardDayCards =
    document.querySelectorAll(
        ".hard-day-card"
    );


const hardDaysCards =
    document.querySelector(
        ".hard-days-cards"
    );


const hardDaysSection =
    document.querySelector(
        ".hard-days-section"
    );


const hardDaysWarmLight =
    document.querySelector(
        ".hard-days-warm-light"
    );


/* =========================================================
   CREATE STORY
========================================================= */

function createHardDayStory(
    card,
    data
) {

    if (!card || !data)
        return null;


    const story =
        card.querySelector(
            ".hard-day-story"
        );


    if (!story)
        return null;


    if (
        story.dataset.created === "true"
    )
        return story;


    story.innerHTML = `

        <span class="hard-story-label">
            ${data.label}
        </span>

        <p>
            ${data.first}
        </p>

        <p>
            ${data.second}
        </p>

        <p class="hard-story-emotional">
            ${data.emotional}
        </p>

    `;


    story.dataset.created =
        "true";


    return story;
}


/* =========================================================
   OPEN
========================================================= */

function openHardDay(card) {

    if (!card)
        return;


    const currentOpen =
        document.querySelector(
            ".hard-day-card.hard-day-active"
        );


    if (
        currentOpen &&
        currentOpen !== card
    ) {

        closeHardDay(
            currentOpen
        );

    }


    const type =
        card.dataset.hardDay;


    const data =
        hardDaysData[type];


    if (!data)
        return;


    const story =
        createHardDayStory(
            card,
            data
        );


    if (!story)
        return;


    card.classList.add(
        "hard-day-active"
    );


    card.setAttribute(
        "aria-expanded",
        "true"
    );


    story.hidden =
        false;


    if (hardDaysCards) {

        hardDaysCards.classList.add(
            "has-active"
        );

    }


    requestAnimationFrame(
        () => {

            story.classList.add(
                "is-visible"
            );

        }
    );


    /* Bring a little warmth back */

    if (hardDaysWarmLight) {

        hardDaysWarmLight.style.opacity =
            ".72";

        hardDaysWarmLight.style.transform =
            "translateX(-50%) scale(1)";

    }


    /* Click sound */

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
                        clickSound.dataset.defaultVolume
                    ) || .35,
                    .35
                );

            clickSound
                .play()
                .catch(
                    () => {}
                );

        }

        catch (error) {}

    }

}


/* =========================================================
   CLOSE
========================================================= */

function closeHardDay(card) {

    if (!card)
        return;


    const story =
        card.querySelector(
            ".hard-day-story"
        );


    card.classList.remove(
        "hard-day-active"
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
                        "hard-day-active"
                    )
                ) {

                    story.hidden =
                        true;

                }

            },
            700
        );

    }


    if (
        hardDaysCards &&
        !hardDaysCards.querySelector(
            ".hard-day-active"
        )
    ) {

        hardDaysCards.classList.remove(
            "has-active"
        );

    }


    if (hardDaysWarmLight) {

        hardDaysWarmLight.style.opacity =
            ".3";

        hardDaysWarmLight.style.transform =
            "translateX(-50%) scale(.75)";

    }

}


/* =========================================================
   EVENTS
========================================================= */

hardDayCards.forEach(
    card => {

        card.addEventListener(
            "click",
            event => {

                event.preventDefault();


                if (
                    card.classList.contains(
                        "hard-day-active"
                    )
                ) {

                    closeHardDay(
                        card
                    );

                }

                else {

                    openHardDay(
                        card
                    );

                }

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


                    if (
                        card.classList.contains(
                            "hard-day-active"
                        )
                    ) {

                        closeHardDay(
                            card
                        );

                    }

                    else {

                        openHardDay(
                            card
                        );

                    }

                }


                if (
                    event.key === "Escape"
                ) {

                    closeHardDay(
                        card
                    );

                }

            }
        );

    }
);


/* =========================================================
   CLICK OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        const activeCard =
            document.querySelector(
                ".hard-day-card.hard-day-active"
            );


        if (!activeCard)
            return;


        if (
            !activeCard.contains(
                event.target
            )
        ) {

            closeHardDay(
                activeCard
            );

        }

    }
);


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        )
            return;


        const activeCard =
            document.querySelector(
                ".hard-day-card.hard-day-active"
            );


        if (activeCard) {

            closeHardDay(
                activeCard
            );

        }

    }
);


/* =========================================================
   DESKTOP ATMOSPHERIC PARALLAX
========================================================= */

if (

    hardDayCards.length &&

    window.matchMedia(
        "(pointer: fine)"
    ).matches &&

    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches

) {

    hardDayCards.forEach(
        card => {

            card.addEventListener(
                "mousemove",
                event => {

                    if (
                        card.classList.contains(
                            "hard-day-active"
                        )
                    )
                        return;


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        (event.clientX - rect.left) /
                        rect.width - .5;


                    const y =
                        (event.clientY - rect.top) /
                        rect.height - .5;


                    card.style.setProperty(
                        "--hard-x",
                        `${50 + x * 12}%`
                    );


                    card.style.setProperty(
                        "--hard-y",
                        `${50 + y * 12}%`
                    );


                    card.style.setProperty(
                        "--hard-rx",
                        `${y * -2.5}deg`
                    );


                    card.style.setProperty(
                        "--hard-ry",
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
                        "--hard-x",
                        "50%"
                    );


                    card.style.setProperty(
                        "--hard-y",
                        "50%"
                    );


                    card.style.setProperty(
                        "--hard-rx",
                        "0deg"
                    );


                    card.style.setProperty(
                        "--hard-ry",
                        "0deg"
                    );

                }
            );

        }
    );

}


/* =========================================================
   SECTION ENTER — BRING BACK WARMTH
========================================================= */

if (
    hardDaysSection &&
    hardDaysWarmLight &&
    "IntersectionObserver" in window
) {

    const hardDaysObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        )
                            return;


                        hardDaysWarmLight.style.opacity =
                            ".45";


                        hardDaysWarmLight.style.transform =
                            "translateX(-50%) scale(.9)";


                        hardDaysObserver.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold:
                    .25
            }
        );


    hardDaysObserver.observe(
        hardDaysSection
    );

}

/* =========================================================
   LETTER 8 — STEP 8.8
   MY FUTURE WITH YOU
   CINEMATIC LINE REVEAL
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const futureWithYouSection =
    document.querySelector(
        ".future-with-you-section"
    );


const futureLifeLines =
    document.querySelectorAll(
        ".future-life-line"
    );


/* =========================================================
   DESKTOP MOUSE ATMOSPHERE
========================================================= */

if (

    futureWithYouSection &&

    window.matchMedia(
        "(pointer: fine)"
    ).matches &&

    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches

) {

    futureWithYouSection.addEventListener(
        "mousemove",
        event => {

            const rect =
                futureWithYouSection
                    .getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width - .5;


            const y =
                (event.clientY - rect.top) /
                rect.height - .5;


            const moon =
                futureWithYouSection.querySelector(
                    ".future-moon-glow"
                );


            const horizon =
                futureWithYouSection.querySelector(
                    ".future-horizon-glow"
                );


            if (moon) {

                moon.style.marginLeft =
                    `${x * 18}px`;

                moon.style.marginTop =
                    `${y * 10}px`;

            }


            if (horizon) {

                horizon.style.transform =
                    `translateX(${x * 10}px)`;

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   LINE INTERACTION
========================================================= */

futureLifeLines.forEach(
    line => {

        line.addEventListener(
            "mouseenter",
            () => {

                line.classList.add(
                    "future-line-focused"
                );

            }
        );


        line.addEventListener(
            "mouseleave",
            () => {

                line.classList.remove(
                    "future-line-focused"
                );

            }
        );

    }
);


/* =========================================================
   SOFT CLICK SOUND
========================================================= */

futureLifeLines.forEach(
    line => {

        line.addEventListener(
            "click",
            () => {

                const clickSound =
                    document.getElementById(
                        "clickSound"
                    );


                if (!clickSound)
                    return;


                try {

                    clickSound.currentTime =
                        0;

                    clickSound.volume =
                        Math.min(
                            Number(
                                clickSound.dataset.defaultVolume
                            ) || .35,
                            .22
                        );

                    clickSound
                        .play()
                        .catch(
                            () => {}
                        );

                }

                catch (error) {}

            }
        );

    }
);


/* =========================================================
   GENTLE STAR PARALLAX
========================================================= */

const futureStars =
    document.querySelectorAll(
        ".future-stars span"
    );


if (

    futureStars.length &&

    window.matchMedia(
        "(pointer: fine)"
    ).matches &&

    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches

) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth - .5);


            const y =
                (event.clientY /
                    window.innerHeight - .5);


            futureStars.forEach(
                (star, index) => {

                    const depth =
                        ((index % 4) + 1) * .8;


                    star.style.transform =
                        `translate(${x * depth}px, ${y * depth}px)`;

                }
            );

        },
        {
            passive: true
        }
    );

}

/* =========================================================
   LETTER 8 — STEP 8.9
   FUTURE QUOTE
   ATMOSPHERIC INTERACTION
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const futureQuoteSection =
    document.querySelector(
        ".future-quote-section"
    );


const futureQuoteGlow =
    document.querySelector(
        ".future-quote-glow"
    );


const futureQuoteOrbit =
    document.querySelector(
        ".future-quote-orbit"
    );


/* =========================================================
   MOUSE ATMOSPHERE
========================================================= */

if (

    futureQuoteSection &&

    window.matchMedia(
        "(pointer: fine)"
    ).matches &&

    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches

) {

    futureQuoteSection.addEventListener(
        "mousemove",
        event => {

            const rect =
                futureQuoteSection
                    .getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width - .5;


            const y =
                (event.clientY - rect.top) /
                rect.height - .5;


            if (futureQuoteGlow) {

                futureQuoteGlow.style.marginLeft =
                    `${x * 18}px`;

                futureQuoteGlow.style.marginTop =
                    `${y * 12}px`;

            }


            if (futureQuoteOrbit) {

                futureQuoteOrbit.style.marginLeft =
                    `${x * 8}px`;

                futureQuoteOrbit.style.marginTop =
                    `${y * 5}px`;

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   QUOTE HOVER
========================================================= */

const futureQuoteHighlight =
    document.querySelector(
        ".future-quote-highlight"
    );


if (
    futureQuoteHighlight &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    futureQuoteHighlight.addEventListener(
        "mouseenter",
        () => {

            futureQuoteHighlight.style.textShadow =
                "0 0 45px rgba(224,169,153,.20)";

        }
    );


    futureQuoteHighlight.addEventListener(
        "mouseleave",
        () => {

            futureQuoteHighlight.style.textShadow =
                "";

        }
    );

}


/* =========================================================
   SOFT CLICK SOUND
========================================================= */

if (futureQuoteHighlight) {

    futureQuoteHighlight.addEventListener(
        "click",
        () => {

            const clickSound =
                document.getElementById(
                    "clickSound"
                );


            if (!clickSound)
                return;


            try {

                clickSound.currentTime =
                    0;

                clickSound.volume =
                    Math.min(
                        Number(
                            clickSound.dataset.defaultVolume
                        ) || .35,
                        .20
                    );

                clickSound
                    .play()
                    .catch(
                        () => {}
                    );

            }

            catch (error) {}

        }
    );

}

/* =========================================================
   LETTER 8 — STEP 8.10
   FINAL MESSAGE
   INTERACTION
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const futureFinalSection =
    document.querySelector(
        ".future-final-section"
    );


const letter8ContinueBtn =
    document.getElementById(
        "letter8ContinueBtn"
    );


/* =========================================================
   MOUSE ATMOSPHERE
========================================================= */

if (

    futureFinalSection &&

    window.matchMedia(
        "(pointer: fine)"
    ).matches &&

    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches

) {

    futureFinalSection.addEventListener(
        "mousemove",
        event => {

            const rect =
                futureFinalSection
                    .getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width - .5;


            const y =
                (event.clientY - rect.top) /
                rect.height - .5;


            const glow =
                futureFinalSection.querySelector(
                    ".final-message-glow"
                );


            const light =
                futureFinalSection.querySelector(
                    ".final-message-light"
                );


            if (glow) {

                glow.style.marginLeft =
                    `${x * 16}px`;

                glow.style.marginTop =
                    `${y * 10}px`;

            }


            if (light) {

                light.style.transform =
                    `translate(${x * 6}px, ${y * 4}px)`;

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   HEART PARTICLE PARALLAX
========================================================= */

const finalMessageHearts =
    document.querySelectorAll(
        ".final-message-hearts span"
    );


if (

    finalMessageHearts.length &&

    window.matchMedia(
        "(pointer: fine)"
    ).matches &&

    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches

) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                event.clientX /
                window.innerWidth - .5;


            const y =
                event.clientY /
                window.innerHeight - .5;


            finalMessageHearts.forEach(
                (heart, index) => {

                    const depth =
                        ((index % 3) + 1) * 1.2;


                    heart.style.marginLeft =
                        `${x * depth}px`;

                    heart.style.marginTop =
                        `${y * depth}px`;

                }
            );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   CONTINUE TO LETTER 9
========================================================= */

if (letter8ContinueBtn) {

    letter8ContinueBtn.addEventListener(
        "click",
        event => {

            event.preventDefault();


            /* Existing click sound */

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
                                clickSound.dataset.defaultVolume
                            ) || .35,
                            .35
                        );

                    clickSound
                        .play()
                        .catch(
                            () => {}
                        );

                }

                catch (error) {}

            }


            /* Existing transition */

            const pageTransition =
                document.getElementById(
                    "pageTransition"
                );


            if (pageTransition) {

                pageTransition.classList.add(
                    "active"
                );

            }


            /* Give transition time */

            setTimeout(
                () => {

                    window.location.href =
                        "letter9.html";

                },
                750
            );

        }
    );

}

/* =========================================================
   LETTER 8 — STEP 8.11
   CINEMATIC POLISH — SCROLL ENGINE
========================================================= */

(() => {

    const l8PolishSections =
        document.querySelectorAll(
            "main > section"
        );

    if (
        !l8PolishSections.length ||
        !("IntersectionObserver" in window)
    ) {
        return;
    }


    /* =====================================================
       SECTION OBSERVER
    ===================================================== */

    const l8PolishObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const section =
                        entry.target;


                    /*
                       Cinematic light sweep
                    */

                    section.classList.remove(
                        "l8-polish-active"
                    );

                    /*
                       Force animation restart
                    */

                    void section.offsetWidth;

                    section.classList.add(
                        "l8-polish-active"
                    );


                    /*
                       Gentle camera focus
                    */

                    section.classList.add(
                        "l8-camera-focus"
                    );


                    setTimeout(() => {

                        section.classList.remove(
                            "l8-camera-focus"
                        );

                    }, 1800);

                });

            },
            {
                threshold: 0.18
            }
        );


    l8PolishSections.forEach(
        section => {

            l8PolishObserver.observe(
                section
            );

        }
    );


    /* =====================================================
       SUBTLE MOUSE CAMERA
    ===================================================== */

    const l8FinePointer =
        window.matchMedia(
            "(pointer: fine)"
        );

    const l8ReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (
        !l8FinePointer.matches ||
        l8ReducedMotion.matches
    ) {
        return;
    }


    let l8MouseX = 0;
    let l8MouseY = 0;

    let l8CurrentX = 0;
    let l8CurrentY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            l8MouseX =
                (
                    event.clientX /
                    window.innerWidth
                ) - 0.5;

            l8MouseY =
                (
                    event.clientY /
                    window.innerHeight
                ) - 0.5;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       SMOOTH CAMERA LOOP
    ===================================================== */

    const l8CameraLoop = () => {

        l8CurrentX +=
            (
                l8MouseX -
                l8CurrentX
            ) * 0.035;

        l8CurrentY +=
            (
                l8MouseY -
                l8CurrentY
            ) * 0.035;


        const activeSection =
            Array.from(
                l8PolishSections
            ).find(
                section => {

                    const rect =
                        section.getBoundingClientRect();

                    return (
                        rect.top <
                        window.innerHeight * 0.55 &&
                        rect.bottom >
                        window.innerHeight * 0.45
                    );

                }
            );


        if (activeSection) {

            /*
               Extremely subtle movement.
               Keeps the page cinematic without
               feeling like a website effect.
            */

            const moveX =
                l8CurrentX * 3;

            const moveY =
                l8CurrentY * 2;


            activeSection.style.setProperty(
                "--l8-camera-x",
                `${moveX}px`
            );

            activeSection.style.setProperty(
                "--l8-camera-y",
                `${moveY}px`
            );

        }


        requestAnimationFrame(
            l8CameraLoop
        );

    };


    l8CameraLoop();


})();

/* =========================================================
   LETTER 8 — STEP 8.12
   PERFORMANCE GUARD
========================================================= */

(() => {

    const l8PerfReduced =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    const l8PerfTouch =
        window.matchMedia(
            "(hover: none) and (pointer: coarse)"
        );


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    if (l8PerfReduced.matches) {

        document.documentElement
            .classList.add(
                "l8-reduced-motion"
            );

    }


    /* =====================================================
       TOUCH DEVICE
    ===================================================== */

    if (l8PerfTouch.matches) {

        document.documentElement
            .classList.add(
                "l8-touch-device"
            );

    }


    /* =====================================================
       DEVICE PIXEL RATIO CAP
    ===================================================== */

    const l8PixelRatio =
        window.devicePixelRatio || 1;

    if (l8PixelRatio >= 3) {

        document.documentElement
            .classList.add(
                "l8-high-density"
            );

    }


    /* =====================================================
       PAGE VISIBILITY
       Pause unnecessary visual work when
       the tab is hidden.
    ===================================================== */

    let l8PageHidden =
        document.hidden;


    document.addEventListener(
        "visibilitychange",
        () => {

            l8PageHidden =
                document.hidden;

            document.documentElement
                .classList.toggle(
                    "l8-page-hidden",
                    l8PageHidden
                );

        }
    );


})();