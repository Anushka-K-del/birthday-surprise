/* ============================================================
   MOM'S BIRTHDAY SURPRISE
============================================================ */


/* ============================================================
   BASIC ELEMENTS
============================================================ */

const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const memories = document.getElementById("memories");
const decoration = document.getElementById("decoration");
const cakeScene = document.getElementById("cakeScene");
const candleScene = document.getElementById("candleScene");
const finalScene = document.getElementById("finalScene");

const birthdayMusic = document.getElementById("birthdayMusic");


/* ============================================================
   SCENE SWITCHER
============================================================ */

function showScene(scene) {

    document.querySelectorAll(".scene").forEach((item) => {

        item.classList.remove("active");

    });

    scene.classList.add("active");
}


/* ============================================================
   PARTICLES
============================================================ */

const particlesContainer =
    document.getElementById("particles");

function createParticles() {

    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            8 + Math.random() * 12 + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particle.style.opacity =
            0.2 + Math.random() * 0.7;

        particle.style.transform =
            `scale(${0.5 + Math.random()})`;

        particlesContainer.appendChild(particle);
    }
}

createParticles();


/* ============================================================
   MUSIC
============================================================ */

function startMusic() {

    birthdayMusic.volume = 0.35;

    birthdayMusic.play().catch(() => {

        console.log(
            "Music will start after another interaction."
        );

    });
}


/* ============================================================
   OPEN SURPRISE
============================================================ */

const openBtn =
    document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    startMusic();

    showScene(birthday);

});


/* ============================================================
   MEMORIES
============================================================ */

const memoriesBtn =
    document.getElementById("memoriesBtn");

memoriesBtn.addEventListener("click", () => {

    showScene(memories);

});


/* ============================================================
   LET'S CELEBRATE
============================================================ */

const celebrateBtn =
    document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click", () => {

    showScene(decoration);

});


/* ============================================================
   DECORATION
============================================================ */

const decorateBtn =
    document.getElementById("decorateBtn");

const decorateText =
    document.getElementById("decorateText");

const cakeBtn =
    document.getElementById("cakeBtn");


decorateBtn.addEventListener("click", () => {

    decoration.classList.add("decorated");

    decorateBtn.style.opacity = "0";

    decorateBtn.style.pointerEvents = "none";

    decorateText.textContent =
        "Okay... now it feels like a birthday ♡";

    setTimeout(() => {

        decoration.classList.add("ready");

    }, 1800);

});


/* ============================================================
   BRING CAKE
============================================================ */

cakeBtn.addEventListener("click", () => {

    showScene(cakeScene);

});


/* ============================================================
   CAKE APPEARANCE
============================================================ */

const bringCakeBtn =
    document.getElementById("bringCakeBtn");

bringCakeBtn.addEventListener("click", () => {

    cakeScene.classList.add("cake-visible");

});


/* ============================================================
   MAKE A WISH
============================================================ */

const wishBtn =
    document.getElementById("wishBtn");

wishBtn.addEventListener("click", () => {

    showScene(candleScene);

});


/* ============================================================
   CANDLE BLOW
============================================================ */

const blowBtn =
    document.getElementById("blowBtn");

blowBtn.addEventListener("click", () => {

    candleScene.classList.add("blown");

    blowBtn.textContent =
        "Wish made ♡";

    blowBtn.disabled = true;

    setTimeout(() => {

        showScene(finalScene);

        createConfetti();

        startMusic();

    }, 1800);

});


/* ============================================================
   CONFETTI
============================================================ */

function createConfetti() {

    const container =
        document.getElementById("confetti");

    const symbols = [
        "✦",
        "✧",
        "♡",
        "✿",
        "•",
        "✦"
    ];

    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.fontSize =
            8 + Math.random() * 15 + "px";

        piece.style.animationDuration =
            3 + Math.random() * 4 + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.color =
            [
                "#d9b278",
                "#d7a5a7",
                "#eee0c8",
                "#a995bd",
                "#f5eee4"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];

        container.appendChild(piece);

    }
}


/* ============================================================
   MUSIC BUTTON
============================================================ */

const musicBtn =
    document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (birthdayMusic.paused) {

        birthdayMusic.play();

        birthdayMusic.volume = 0.4;

        musicBtn.textContent =
            "♫ Our song is playing";

    } else {

        birthdayMusic.pause();

        musicBtn.textContent =
            "♫ Play our song";

    }

});


/* ============================================================
   SMALL CANDLE SHAKE ON MOUSE MOVE
============================================================ */

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);

    document.documentElement.style.setProperty(
        "--mouse-x",
        x
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        y
    );

});


/* ============================================================
   PREVENT ACCIDENTAL SCROLLING
============================================================ */

document.addEventListener(
    "wheel",
    function (event) {

        if (
            document.querySelector(
                ".scene.active"
            ) === finalScene
        ) {
            return;
        }

        event.preventDefault();

    },
    { passive: false }
);


/* ============================================================
   TOUCH SUPPORT
============================================================ */

let touchStartY = 0;

document.addEventListener("touchstart", (event) => {

    touchStartY =
        event.touches[0].clientY;

});

document.addEventListener("touchmove", (event) => {

    const currentY =
        event.touches[0].clientY;

    const difference =
        currentY - touchStartY;

    if (
        document.querySelector(
            ".scene.active"
        ) !== finalScene
    ) {

        event.preventDefault();

    }

}, { passive: false });


/* ============================================================
   CONSOLE MESSAGE
============================================================ */

console.log(
    "%c♡ Made with love for Maa ♡",
    "font-size:18px;color:#d9b278;"
);