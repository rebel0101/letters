/*=================================
      LETTER DATA SYSTEM
==================================*/

const page = location.pathname.toLowerCase();

const letterData = {

    1: {
        title: "Dear Gulabo ❤️",

        text: `My Dear Shalu ❤️,

Sometimes words are not enough to tell you how much you mean to me.

Every heartbeat of mine whispers your name.

Whenever I smile...
it's because of you.

Whenever I dream...
it's always you.

You are my peace,
my happiness,
my home.

I promise...

No matter what happens,
I'll always choose you.

Forever. ❤️`,

        shayari: `Roshani se teri waha chaand rutha baitha hai🌙

Maine tujhe manga jab bhi tut ta tara dekha hai💫

Tere jaisi Mehak yaha kisi fool me nhi 🥀

Yakeen kar mera maine har baag dekha hai 🏞️`,

        quote: `“Every love story is beautiful,
but ours will always be my favourite.”`,

        memoryTitle: "💖 Our First Memory",

        memoryDate: "19 October 2023",

        memoryText: `The day our journey started...
I never knew someone could become
my home, my peace and my forever.`
    },


    2: {
        title: "Falling In Love 🌹",

        text: `Every new day with you
feels like the first sunrise.

You are the calm
inside every storm.

Whenever life becomes difficult,
your smile reminds me
why I never want to give up.

I don't just love you...

I admire you.

I respect you.

And I thank destiny
every single day
for bringing you into my life. ❤️`,

        shayari: `Khuda ne jb tumhe banaya hoga 😍

Ek surur uske dil me aya hoga 💓

Socha hoga ky dunga thophe me use🤌
 
Tb jaake usne mujhe banaya hoga 😌🫠`,

        quote: `“I didn't plan to fall in love with you,
I just found myself falling deeper every day.”`,

        memoryTitle: "🌹 When I Fell For You",

        memoryDate: "❤️ The Moment I Realized",

        memoryText: `I don't remember the exact moment
when I fell in love with you.

Maybe it happened slowly...

In your smile,
in your words,
in the little things you did.

And one day I realized...

You weren't just someone I loved.

You had become my favourite part of life.`
    },


    3: {
        title: "Our Beautiful Memories 📸",

        text: `Some moments become memories.

And some memories become
the most beautiful parts of our lives.

Every moment with you
is something I want to keep forever.`,

        shayari: `Chaand tukra hai aapka 🌚

Log baste hai samundar se lekin ham aapke aankho me dubne ko tayaar hai 

Kisko dekhne ki chhat kre abb aapko dekh liya h ek baar
 
Aapki julfoo ki gehrai hai bahut or hamko pasand nhi ata kinara 

Log kehte hai chaand ka tukra ho aap 
                                Dhaat!
Ham kehte hai chaand tukra hai aapka ♥️✨`,

        quote: `“The best memories are the ones
we make together.”`,

        memoryTitle: "📸 A Memory To Keep",

        memoryDate: "🌸 One Beautiful Moment",

        memoryText: `One day we'll look back
at these little moments
and realize how beautiful
our journey really was.`
    }

};

const match = page.match(/letter(\d+)/);

const letterNumber = match
    ? Number(match[1])
    : 1;

const currentLetter =
    letterData[letterNumber] || letterData[1];

    const text = currentLetter.text;

const letter = document.getElementById("letterText");

const shayariText = document.getElementById("shayariText");

const nextBtn = document.getElementById("nextLetterBtn");

const paperSound = document.getElementById("paperSound");
const clickSound = document.getElementById("clickSound");

const quote = document.querySelector(".love-quote");

const memoryTitle =
    document.querySelector(".memory-title");

const memoryDate =
    document.querySelector(".memory-date");

const memoryText =
    document.querySelector(".memory-card p");

let currentIndex=0;

function typeWriter(){

    if(currentIndex < text.length){

        letter.textContent += text.charAt(currentIndex);

        currentIndex++;

        setTimeout(typeWriter,22);

    }

    else{

        nextBtn.classList.add("show");

        nextBtn.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });

    }

}


if (letter && nextBtn) {

    if (paperSound) {

    paperSound.load();

    playSound(paperSound,0.45);

}

currentIndex = 0;

letter.textContent = "";

if(shayariText){

    shayariText.textContent =
        currentLetter.shayari;

}

if(quote){

    quote.textContent =
        currentLetter.quote;

}

if(memoryTitle){

    memoryTitle.textContent =
        currentLetter.memoryTitle;

}

if(memoryDate){

    memoryDate.textContent =
        currentLetter.memoryDate;

}

if(memoryText){

    memoryText.textContent =
        currentLetter.memoryText;

}

typeWriter();

nextBtn.addEventListener("click",()=>{

    playSound(clickSound,0.25);

    const overlay = document.getElementById("pageTransition");

    const wrapper = document.querySelector(".letter-wrapper");

    overlay.classList.add("active");

    wrapper.classList.add("zoom-out");

    setTimeout(()=>{

    const match = page.match(/letter(\d+)/);

    if(match){

        const currentLetter = Number(match[1]);

        if(currentLetter < 12){

            window.location.href =
                `letter${currentLetter + 1}.html`;

        }
        else{

            window.location.href = "finale.html";

        }

    }

},800);

});

}

/* ===========================
   Floating Hearts
=========================== */

const heartContainer = document.getElementById("floatingHearts");

function createHeart(){

    if(!heartContainer) return;

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize =
        16 + Math.random()*18 + "px";

    heart.style.animationDuration =
        6 + Math.random()*5 + "s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,900);

/*==========================
      Rose Petals
==========================*/

const roseContainer = document.getElementById("roseContainer");

function createRose(){

    if(!roseContainer) return;

    const rose=document.createElement("span");

    rose.className="rose";

    rose.innerHTML="🌹";

    rose.style.left=Math.random()*100+"%";

    rose.style.fontSize=
    16+Math.random()*20+"px";

    rose.style.animationDuration=
    8+Math.random()*6+"s";

    rose.style.opacity=
    .4+Math.random()*.6;

    roseContainer.appendChild(rose);

    setTimeout(()=>{

        rose.remove();

    },15000);

}

setInterval(createRose,900);

/*==========================
   Scroll Reveal
==========================*/

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

reveals.forEach(item=>{

    observer.observe(item);

});

/*==========================
    Paper Tilt
==========================*/

const paper = document.querySelector(".letter-wrapper .paper");

if (paper) {

    paper.addEventListener("mousemove", (e) => {

        const rect = paper.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY =
            (x / rect.width - 0.5) * 4;

        const rotateX =
            -(y / rect.height - 0.5) * 4;

        paper.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-3px)`;

    });


    paper.addEventListener("mouseleave", () => {

        paper.style.transform = "";

    });

}

/*=================================
      MEMORY LIGHTBOX
=================================*/

const memoryLightbox =
    document.getElementById("memoryLightbox");

const closeMemory =
    document.getElementById("closeMemory");

const lightboxIcon =
    document.getElementById("lightboxIcon");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxDate =
    document.getElementById("lightboxDate");

const lightboxText =
    document.getElementById("lightboxText");

const memoryCards =
    document.querySelectorAll(".memory-photo-card");


memoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const image =
            card.querySelector(".memory-photo img");

        const title =
            card.querySelector(".photo-info h3");

        const date =
            card.querySelector(".photo-date");

        const text =
            card.querySelector(".photo-info p");


        if(lightboxIcon && image){

    lightboxIcon.innerHTML = `
        <img
            src="${image.src}"
            alt="${image.alt}"
        >
    `;

}

        if(lightboxTitle && title){

            lightboxTitle.textContent =
                title.textContent;

        }

        if(lightboxDate && date){

            lightboxDate.textContent =
                date.textContent;

        }

        if(lightboxText && text){

            lightboxText.textContent =
                text.textContent;

        }


        if(memoryLightbox){

            memoryLightbox.classList.add("active");

            document.body.style.overflow="hidden";

        }

    });

});


function closeMemoryLightbox(){

    if(memoryLightbox){

        memoryLightbox.classList.remove("active");

        document.body.style.overflow="";

    }

}


if(closeMemory){

    closeMemory.addEventListener(
        "click",
        closeMemoryLightbox
    );

}


if(memoryLightbox){

    memoryLightbox.addEventListener(
        "click",
        (e)=>{

            if(e.target === memoryLightbox){

                closeMemoryLightbox();

            }

        }
    );

}


document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        closeMemoryLightbox();

    }

});

function playSound(sound, volume = 1) {

    if (!sound) return;

    sound.pause();

    sound.currentTime = 0;

    sound.volume = volume;

    sound.play().catch(() => {});

}

