/* =========================================================
   GLOBAL CINEMATIC MUSIC SYSTEM
   LETTER 1 → 2 → 3 → 4 → 5
   ========================================================= */


/* =========================================================
   CONFIG
   ========================================================= */

const MUSIC_CONFIG = {

    maxVolume: 0.45,

    fadeInDuration: 1200,

    fadeOutDuration: 700,

    storageTime: "romanticMusicTime",

    storageVolume: "romanticMusicVolume",

    storagePlaying: "romanticMusicPlaying"

};


/* =========================================================
   DOM
   ========================================================= */

const music =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");


if (!music) {

    console.warn(
        "Global Music: #bgMusic not found."
    );

}


/* =========================================================
   STATE
   ========================================================= */

let fadeTimer = null;

let isFading = false;


/* =========================================================
   GET SAVED VOLUME
   ========================================================= */

function getSavedVolume() {

    const saved =
        sessionStorage.getItem(
            MUSIC_CONFIG.storageVolume
        );

    if (saved === null) {

        return MUSIC_CONFIG.maxVolume;

    }


    const value =
        Number(saved);


    if (
        Number.isNaN(value) ||
        value < 0 ||
        value > 1
    ) {

        return MUSIC_CONFIG.maxVolume;

    }


    return value;

}


/* =========================================================
   SAVE MUSIC POSITION
   ========================================================= */

function saveMusicPosition() {

    if (!music) return;


    try {

        sessionStorage.setItem(
            MUSIC_CONFIG.storageTime,
            String(music.currentTime)
        );

        sessionStorage.setItem(
            MUSIC_CONFIG.storageVolume,
            String(music.volume)
        );

        sessionStorage.setItem(
            MUSIC_CONFIG.storagePlaying,
            String(!music.paused)
        );

    }
    catch (error) {

        console.warn(
            "Music state could not be saved.",
            error
        );

    }

}


/* =========================================================
   RESTORE MUSIC POSITION
   ========================================================= */

function restoreMusicPosition() {

    if (!music) return;


    const savedTime =
        sessionStorage.getItem(
            MUSIC_CONFIG.storageTime
        );


    if (savedTime !== null) {

        const time =
            Number(savedTime);


        if (
            Number.isFinite(time) &&
            time >= 0
        ) {

            try {

                music.currentTime =
                    time;

            }
            catch (error) {

                console.warn(
                    "Could not restore music position.",
                    error
                );

            }

        }

    }


    music.volume =
        getSavedVolume();

}


/* =========================================================
   UPDATE BUTTON
   ========================================================= */

function updateMusicButton() {

    if (!musicBtn || !music) return;


    if (music.paused) {

        musicBtn.classList.remove(
            "playing"
        );

    }
    else {

        musicBtn.classList.add(
            "playing"
        );

    }

}


/* =========================================================
   CLEAR FADE
   ========================================================= */

function clearMusicFade() {

    if (fadeTimer !== null) {

        clearInterval(
            fadeTimer
        );

        fadeTimer = null;

    }

}


/* =========================================================
   FADE IN
   ========================================================= */

function fadeInMusic() {

    if (!music) return;


    clearMusicFade();


    const targetVolume =
        getSavedVolume();


    music.volume = 0;


    const steps = 30;


    const interval =
        MUSIC_CONFIG.fadeInDuration /
        steps;


    let currentStep = 0;


    fadeTimer =
        setInterval(() => {

            currentStep++;


            const progress =
                currentStep / steps;


            music.volume =
                Math.min(
                    targetVolume,
                    targetVolume * progress
                );


            if (
                currentStep >= steps
            ) {

                clearMusicFade();

                music.volume =
                    targetVolume;

            }

        }, interval);

}


/* =========================================================
   FADE OUT
   ========================================================= */

function fadeOutMusic(
    callback
) {

    if (!music) {

        if (callback) callback();

        return;

    }


    clearMusicFade();


    const startVolume =
        music.volume;


    const steps = 25;


    const interval =
        MUSIC_CONFIG.fadeOutDuration /
        steps;


    let currentStep = 0;


    fadeTimer =
        setInterval(() => {

            currentStep++;


            const progress =
                currentStep / steps;


            music.volume =
                Math.max(
                    0,
                    startVolume *
                    (1 - progress)
                );


            if (
                currentStep >= steps
            ) {

                clearMusicFade();


                music.volume = 0;


                if (callback) {

                    callback();

                }

            }

        }, interval);

}


/* =========================================================
   PLAY MUSIC
   ========================================================= */

function playMusic() {

    if (!music) return;


    clearMusicFade();


    music.play()
        .then(() => {

            fadeInMusic();


            sessionStorage.setItem(
                MUSIC_CONFIG.storagePlaying,
                "true"
            );


            updateMusicButton();

        })
        .catch(() => {

            console.log(
                "Music waiting for user interaction."
            );


            updateMusicButton();

        });

}


/* =========================================================
   PAUSE MUSIC
   ========================================================= */

function pauseMusic() {

    if (!music) return;


    saveMusicPosition();


    fadeOutMusic(() => {

        music.pause();

        music.volume =
            getSavedVolume();


        sessionStorage.setItem(
            MUSIC_CONFIG.storagePlaying,
            "false"
        );


        updateMusicButton();

    });

}


/* =========================================================
   TOGGLE MUSIC
   ========================================================= */

function toggleMusic() {

    if (!music) return;


    if (music.paused) {

        playMusic();

    }
    else {

        pauseMusic();

    }

}


/* =========================================================
   MUSIC BUTTON
   ========================================================= */

if (musicBtn) {

    musicBtn.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            event.stopPropagation();

            toggleMusic();

        }
    );

}


/* =========================================================
   RESTORE STATE ON PAGE LOAD
   ========================================================= */

if (music) {

    music.volume =
        getSavedVolume();


    restoreMusicPosition();


    updateMusicButton();

}


/* =========================================================
   AUTO CONTINUE MUSIC
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        if (!music) return;


        const shouldPlay =
            sessionStorage.getItem(
                MUSIC_CONFIG.storagePlaying
            );


        /*
         * If music was already playing
         * on previous letter,
         * continue automatically.
         */

        if (shouldPlay === "true") {

            music.play()
                .then(() => {

                    fadeInMusic();

                    updateMusicButton();

                })
                .catch(() => {

                    /*
                     * Browser autoplay protection.
                     * User can press music button.
                     */

                    updateMusicButton();

                });

        }

    }
);


/* =========================================================
   USER INTERACTION FALLBACK
   ========================================================= */

document.addEventListener(
    "click",
    () => {

        if (!music) return;


        const shouldPlay =
            sessionStorage.getItem(
                MUSIC_CONFIG.storagePlaying
            );


        if (
            shouldPlay === "true" &&
            music.paused
        ) {

            playMusic();

        }

    },
    {
        once: true
    }
);


/* =========================================================
   SAVE POSITION CONTINUOUSLY
   ========================================================= */

setInterval(
    () => {

        if (
            music &&
            !music.paused
        ) {

            saveMusicPosition();

        }

    },
    1000
);


/* =========================================================
   SAVE BEFORE PAGE LEAVES
   ========================================================= */

window.addEventListener(
    "pagehide",
    () => {

        saveMusicPosition();

    }
);


window.addEventListener(
    "beforeunload",
    () => {

        saveMusicPosition();

    }
);


/* =========================================================
   SAVE WHEN TAB BECOMES HIDDEN
   ========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState ===
            "hidden"
        ) {

            saveMusicPosition();

        }

    }
);


/* =========================================================
   EXPOSE GLOBAL CONTROL
   ========================================================= */

window.RomanticMusic = {

    play: playMusic,

    pause: pauseMusic,

    toggle: toggleMusic,

    save: saveMusicPosition,

    fadeIn: fadeInMusic,

    fadeOut: fadeOutMusic

};