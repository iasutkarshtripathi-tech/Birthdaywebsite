/* PERSONALIZE HERE. Use local paths such as "photos/us.jpg" and "audio/note.m4a".

   The arrays have no app-imposed item limit. Copy an entry to add another memory. */

const birthdaySettings = {

    recipientName: "Harshita",

    birthdayCode: "1610",

    intro: "To my best friend, my chosen sister, and one of my favourite people in every universe.",

    sectionTitles: {

        cake: "A cake with your name all over it",

        gift: "A little something, just for you",

        audio: "Little pieces of my voice",

        gallery: "OUR LITTLE TIME CAPSULE",

        map: "Our Little World of Memories",

        surprises: "A few more little surprises"

    },

    // Reorder these names to rearrange the sections; remove a name to hide that section.

    sectionOrder: ["audio", "gallery", "map", "quiz", "surprises"],

    letters: [

        "Thank you for being the kind of friend who turns ordinary days into stories I want to keep. I am so lucky life brought me my best friend and sister in one person. Happy birthday, my favourite human.",

        "You make every room softer, every laugh louder, and every hard day easier to get through. I hope this next trip around the sun gives you back even a little of the love you give everyone around you.",

        "No matter how far life takes us or how busy the days get, you will always have a home in me. I am endlessly proud of you, endlessly grateful for you, and always on your team."

    ],

    wishes: [

        "May this year bring you the kind of joy that sneaks up and stays.",

        "May every brave little dream of yours find its way home.",

        "May you always feel as loved as you make everyone else feel.",

        "May there be more belly laughs, soft mornings, and happy surprises.",

        "And one extra wish: may we keep making memories for years and years."

    ],

    // Fixed photographs and captions for the Time Capsule.

    photos: [

        { id: "time-capsule-1", title: "A Day Worth Keeping", src: "assets/Images/image 11.png", caption: "Definitely a day worth keeping, as it's the last image we took together and the image itself has a lot to say.", placeholder: "♡" },

        { id: "time-capsule-2", title: "Our Favorite Kind of Silly", src: "assets/Images/image 3.jpg", caption: "This picture looks great, like it shows how the perfect duo of Malkin and Naukar Brother & Sister looks. 😊😊😊", placeholder: "✿" },

        { id: "time-capsule-3", title: "A Little Piece of Home", src: "assets/Images/image 4.jpg", caption: "The perfect bond we had until it all went wrong.", placeholder: "✦" }

    ],
// Add voice note entries here, or use the Add voice note button after opening the gift.

    voiceNotes: [{ title: "A Voice from My Heart", src: "assets/Audio/voicenote.m4a", caption: "A little piece of my voice, just for you." }],

    // Map marker x/y positions are percentages. No online map service is used.

    memories: [

        { id: "retreat", name: "Retreat", x: 78, y: 27, photos: [
            { id: "retreat-photo-1", label: "Retreat photograph 1", src: "assets/Images/image 1.jpg", caption: "" },
            { id: "retreat-photo-2", label: "Retreat photograph 2", src: "assets/Images/image 5.jpg", caption: "" },
            { id: "retreat-photo-3", label: "Retreat photograph 3", src: "assets/Images/image 6.jpg", caption: "" },
            { id: "retreat-photo-4", label: "Retreat photograph 4", src: "assets/Images/image 11.png", caption: "" }
        ] },

        { id: "school", name: "School", x: 64, y: 61, photos: [
            { id: "school-photo-1", label: "School photograph 1", src: "assets/Images/image 2.jpg", caption: "" },
            { id: "school-photo-2", label: "School photograph 2", src: "assets/Images/image 8.jpg", caption: "" },
            { id: "school-photo-3", label: "School photograph 3", src: "assets/Images/image 9.jpg", caption: "" },
            { id: "school-photo-4", label: "School photograph 4", src: "assets/Images/image 12.png", caption: "" }
        ] },

        { id: "coaching", name: "Coaching", x: 23, y: 34, photos: [
            { id: "coaching-photo-1", label: "Coaching photograph 1", src: "assets/Images/image 3.jpg", caption: "" },
            { id: "coaching-photo-2", label: "Coaching photograph 2", src: "assets/Images/image 4.jpg", caption: "" },
            { id: "coaching-photo-3", label: "Coaching photograph 3", src: "assets/Images/image 7.jpg", caption: "" },
            { id: "coaching-photo-4", label: "Coaching photograph 4", src: "assets/Images/image 10.png", caption: "" }
        ] }
    ],

    // Reorder, remove, or copy these envelopes. Supported styles: envelope, balloon, star, timeline.

    surprises: [

        { type: "envelope", title: "Open when you need a hug", message: "Close your eyes for a second and imagine the biggest, warmest, most ridiculous hug. I am always right here for you." },

        { type: "balloon", title: "A wish for your next chapter", message: "Ek aur saal, ek nayi subah aapke naam ho,\nAapki zindagi ka har pal khushiyon ke naam ho.\nJis tarah aapne meri duniya mein apni jagah banayi,\nDua hai aapki duniya bhi har khoobsurati se saj jaaye. 🧿\n\nKabhi dost bankar meri muskurahat ki wajah bani,\nKabhi behen bankar meri fikr mein khadi rahi.\nKuch rishte naam se nahi, ehsaason se khaas hote hain,\nAur aap jaise log zindagi mein milkar bhi kahan aam hote hain. ❤️\n\nAapki hansi kabhi kisi gham ke aage na haare,\nAapke sapne har roz nayi udaan maarein.\nHar mod par aapko khushiyon ka saath mile,\nAur jo bhi chahein aap, woh aapke haathon mein aaye. ✨\n\nMeri dua hai, aapka aane wala har saal pichhle se haseen ho,\nAapke chehre ki muskaan hamesha yun hi rangeen ho.\nDuniya chahe aapko kisi bhi naam se pehchaane,\nMere liye aap hamesha meri dost bhi, meri behen bhi,\nAur un khaas logon mein rahengi\nJinhe paakar zindagi par yakeen aur gehra ho jaaye. 🎂💗" },

        { type: "star", title: "A tiny secret", message: "Here is your reminder: you make the people around you feel safe, seen, and loved. Never forget how special that is." },

        { type: "timeline", title: "Little things I will always remember", items: [{ date: "The beginning", title: "The first laugh", message: "The kind that made everything feel easy." }, { date: "All the days after", title: "A hundred small moments", message: "Every ordinary day we made ours." }, { date: "Always", title: "Still my person", message: "The only part I fear is knowing there will be no more memories ahead. If you don't want." }] }

    ]

};

const gate = document.querySelector("#gate");
const pandaScreen = document.querySelector("#panda-screen");
const pandaCharacter = document.querySelector("#panda-character");
const pandaYes = document.querySelector("#panda-yes");
const pandaNo = document.querySelector("#panda-no");
const balloonIntro = document.querySelector("#balloon-intro");
const balloonRow = document.querySelector(".balloon-row");
const balloonButtons = [...document.querySelectorAll("[data-balloon]")];
const balloonDialogActions = document.querySelector("#balloon-dialog-actions");
const balloonNextMessage = document.querySelector("#balloon-next-message");
const letterTitle = document.querySelector("#letter-title");
const letterLabel = document.querySelector(".letter-label");

const birthday = document.querySelector("#birthday");

const codeInput = document.querySelector("#code-entry");

const codeForm = document.querySelector("#code-form");

const codeMessage = document.querySelector("#code-message");

const cakeWrap = document.querySelector("#cake-wrap");

const cake = document.querySelector("#cake");

const wishMessage = document.querySelector("#wish-message");

const letterDialog = document.querySelector("#letter-dialog");
const birthdayLetterDialog = document.querySelector("#birthday-letter-dialog");
const birthdayLetterRevealButton = document.querySelector("#birthday-letter-reveal");
const birthdayLetterCloseButton = document.querySelector("#birthday-letter-close");
const birthdayEnvelope = document.querySelector("#birthday-envelope");

const letterBody = document.querySelector("#letter-body");
const chapterLetterActions = document.querySelector("#chapter-letter-actions");
const chapterLetterNext = document.querySelector("#chapter-letter-next");
const chapterPandas = document.querySelector("#chapter-pandas");
const cakeSection = document.querySelector(".cake-section");
const cakeScene = document.querySelector(".cake-scene");
const cutInstruction = document.querySelector("#cut-instruction");
const candleNote = document.querySelector(".candle-note");
const cutCakeButton = document.querySelector("#cut-cake-button");

const giftBoxGrid = document.querySelector("#gift-box-grid");
const giftStatus = document.querySelector("#gift-status");
const surpriseWorld = document.querySelector("#surprise-world");
const quizSection = document.querySelector("#quiz-section");
const quizGameIntro = document.querySelector("#quiz-game-intro");
const quizStartButton = document.querySelector("#quiz-start");
const quizQuestionPanel = document.querySelector("#quiz-question-panel");
const quizProgress = document.querySelector("#quiz-progress");
const quizQuestionHeading = document.querySelector("#quiz-question-heading");
const quizQuestionText = document.querySelector("#quiz-question-text");
const quizAnswerList = document.querySelector("#quiz-answer-list");
const quizCustomAnswerForm = document.querySelector("#quiz-custom-answer-form");
const quizCustomAnswerInput = document.querySelector("#quiz-custom-answer-input");
const quizCustomAnswerSubmit = document.querySelector("#quiz-custom-answer-submit");
const quizReplayVideo = document.querySelector("#quiz-replay-video");
const quizVideoPanel = document.querySelector("#quiz-video-panel");
const quizVideoProgress = document.querySelector("#quiz-video-progress");
const quizVideo = document.querySelector("#quiz-video");
const quizVideoMessage = document.querySelector("#quiz-video-message");
const quizVideoClose = document.querySelector("#quiz-video-close");
const quizVideoContinue = document.querySelector("#quiz-video-continue");
const quizCompletePanel = document.querySelector("#quiz-complete-panel");
const giftVideoDialog = document.querySelector("#gift-video-dialog");
const giftVideo = document.querySelector("#gift-video");
const giftVideoTitle = document.querySelector("#gift-video-title");
const giftVideoStatus = document.querySelector("#gift-video-status");
const giftVideoContinue = document.querySelector("#gift-video-continue");

const soundtrackDialog = document.querySelector("#soundtrack-dialog");

const storageNote = document.querySelector("#storage-note");

const lightboxDialog = document.querySelector("#lightbox-dialog");

const surpriseDialog = document.querySelector("#surprise-dialog");

const finalizeButton = document.querySelector(".finalize-button");
const finalAudioDialog = document.querySelector("#final-audio-dialog");
const finalAudio = document.querySelector("#final-audio");
const finalAudioToggle = document.querySelector("#final-audio-toggle");
const finalAudioProgress = document.querySelector("#final-audio-progress");
const finalAudioElapsed = document.querySelector("#final-audio-elapsed");
const finalAudioDuration = document.querySelector("#final-audio-duration");
const finalAudioStatus = document.querySelector("#final-audio-status");
const finalConfetti = document.querySelector("#final-confetti");
const finalBirthdayScreen = document.querySelector("#final-birthday-screen");
const finalBirthdayHeading = document.querySelector("#final-birthday-heading");
const mainContent = document.querySelector("main");
const skySpecks = document.querySelector(".sky-specks");
let finalCelebrationStarted = false;
let finalCelebrationTimer = null;

const imageObjectUrls = new Map();

const audioObjectUrls = new Map();

let candleCount = 0;

let cakePointerStart = null;
let cakeCutPending = false;
let cakeCutFinished = false;
let cakeCutFallbackTimer = null;
let chapterLetterSequenceActive = false;
let activeChapterLetterIndex = null;


let uploadedPhotos = [];

let uploadedVoices = [];

let galleryPreferences = loadGalleryPreferences();

let mediaDatabasePromise = openMediaDatabase();

function openMediaDatabase() {

    if (!("indexedDB" in window)) return Promise.resolve(null);

    return new Promise((resolve) => {

        try {

            const request = indexedDB.open("birthday-story-media", 1);

            request.onupgradeneeded = () => {

                const db = request.result;

                if (!db.objectStoreNames.contains("photos")) db.createObjectStore("photos", { keyPath: "id" });

                if (!db.objectStoreNames.contains("audio")) db.createObjectStore("audio", { keyPath: "id" });

            };

            request.onsuccess = () => resolve(request.result);

            request.onerror = () => resolve(null);

            request.onblocked = () => resolve(null);

        } catch {

            resolve(null);

        }

    });

}

async function readMedia(storeName) {

    const db = await mediaDatabasePromise;

    if (!db) return [];

    return new Promise((resolve) => {

        try {

            const request = db.transaction(storeName, "readonly").objectStore(storeName).getAll();

            request.onsuccess = () => resolve(request.result || []);

            request.onerror = () => resolve([]);

        } catch {

            resolve([]);

        }

    });

}

async function saveMedia(storeName, item) {

    const db = await mediaDatabasePromise;

    if (!db) return false;

    return new Promise((resolve) => {

        try {

            const request = db.transaction(storeName, "readwrite").objectStore(storeName).put(item);

            request.onsuccess = () => resolve(true);

            request.onerror = () => resolve(false);

        } catch {

            resolve(false);

        }

    });

}

async function deleteMedia(storeName, id) {

    const db = await mediaDatabasePromise;

    if (!db) return;

    try {

        db.transaction(storeName, "readwrite").objectStore(storeName).delete(id);

    } catch {

        storageNote.textContent = "This browser could not remove the saved file. You can still remove it from this page.";

    }

}

function loadGalleryPreferences() {

    try {

        return JSON.parse(localStorage.getItem("birthday-gallery-preferences")) || { order: [], removed: [], edits: {} };

    } catch {

        return { order: [], removed: [], edits: {} };

    }

}

function saveGalleryPreferences() {

    try {

        localStorage.setItem("birthday-gallery-preferences", JSON.stringify(galleryPreferences));

    } catch {

        storageNote.textContent = "The album is still working, but this browser could not save your photo order or captions.";

    }

}

function makeId(prefix) {

    return `${prefix}-${crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;

}

function setImageSource(image, source, fallback) {

    const placeholder = document.querySelector(fallback);

    if (!source) {

        image.hidden = true;

        placeholder.hidden = false;

        image.removeAttribute("src");

        return;

    }

    image.hidden = false;

    placeholder.hidden = true;

    image.onerror = () => {

        image.hidden = true;

        placeholder.hidden = false;

    };

    image.src = source;

}

function openPandaScreen() {
    gate.classList.add("is-hidden");
    gate.inert = true;
    pandaScreen.classList.remove("is-hidden");
    pandaScreen.inert = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
    pandaYes.focus();
}

let pandaNoClicked = false;
let pandaNavigationPending = false;
pandaNo.dataset.position = "0";

function movePandaNo() {
    const positions = [
        { left: "38%", top: "36%" },
        { left: "62%", top: "36%" },
        { left: "38%", top: "64%" },
        { left: "62%", top: "64%" }
    ];
    const current = Number(pandaNo.dataset.position || 0);
    const next = (current + 1 + Math.floor(Math.random() * (positions.length - 1))) % positions.length;
    pandaNo.dataset.position = String(next);
    pandaNo.style.left = positions[next].left;
    pandaNo.style.top = positions[next].top;
}

pandaNo.addEventListener("click", (event) => {
    if (pandaNoClicked) {
        event.preventDefault();
        movePandaNo();
        return;
    }
    pandaNoClicked = true;
    pandaCharacter.classList.add("is-crying");
    pandaCharacter.setAttribute("aria-label", "A sad, crying panda with visible tears");
});

pandaNo.addEventListener("pointerenter", () => {
    if (pandaNoClicked) movePandaNo();
});
pandaNo.addEventListener("pointerdown", (event) => {
    if (!pandaNoClicked) return;
    event.preventDefault();
    movePandaNo();
});
pandaNo.addEventListener("focus", () => {
    if (pandaNoClicked) movePandaNo();
});

function openBirthday() {
    if (pandaNavigationPending) return;
    pandaNavigationPending = true;
    pandaYes.disabled = true;
    pandaNo.disabled = true;
    pandaScreen.classList.add("is-hidden");
    pandaScreen.inert = true;
    birthday.classList.remove("is-hidden");
    birthday.inert = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

pandaYes.addEventListener("click", openBirthday);
function openLetter(index, isChapterSequence = false) {
    const letter = birthdaySettings.letters[index];
    if (letter === undefined) return;
    activeChapterLetterIndex = isChapterSequence ? index : null;
    chapterLetterSequenceActive = isChapterSequence;
    letterBody.textContent = letter;
    letterLabel.textContent = "a little letter for you";
    letterTitle.textContent = "Dear Harshita,";
    balloonDialogActions.hidden = true;
    chapterLetterActions.hidden = !isChapterSequence;
    chapterLetterNext.disabled = false;
    letterDialog.classList.remove("balloon-message-mode");
    letterDialog.classList.toggle("chapter-letter-sequence", isChapterSequence);
    letterDialog.showModal();
    if (isChapterSequence) chapterLetterNext.focus();
}

function finishCakeCut() {
    if (cakeCutFinished) return;
    cakeCutFinished = true;
    cakeCutPending = false;
    window.clearTimeout(cakeCutFallbackTimer);
    cakeScene.hidden = true;
    cutInstruction.hidden = true;
    cutCakeButton.hidden = true;
    candleNote.hidden = true;
    cakeSection.classList.add("is-finished");
    if (birthdaySettings.letters.length) openLetter(0, true);
}

function cutCake() {
    if (cakeWrap.classList.contains("is-cut") || cakeCutPending || cakeCutFinished) return;
    cakeCutPending = true;
    cakeWrap.querySelectorAll(".candle").forEach((candle) => { candle.disabled = true; });
    cutCakeButton.disabled = true;
    cakeWrap.addEventListener("animationend", function onCakeExit(event) {
        if (event.target !== cakeWrap || event.animationName !== "cake-disappear") return;
        cakeWrap.removeEventListener("animationend", onCakeExit);
        finishCakeCut();
    });
    cakeCutFallbackTimer = window.setTimeout(finishCakeCut, 1450);
    cakeWrap.classList.add("is-cut");
}

chapterLetterNext.addEventListener("click", () => {
    if (!chapterLetterSequenceActive || activeChapterLetterIndex === null || !letterDialog.open) return;
    const nextIndex = activeChapterLetterIndex + 1;
    chapterLetterNext.disabled = true;
    chapterLetterActions.hidden = true;
    letterDialog.classList.remove("chapter-letter-sequence");
    letterDialog.close();
    if (nextIndex < 3 && nextIndex < birthdaySettings.letters.length) {
        window.setTimeout(() => openLetter(nextIndex, true), 90);
        return;
    }
    chapterLetterSequenceActive = false;
    activeChapterLetterIndex = null;
    chapterPandas.classList.remove("is-hidden");
    chapterPandas.inert = false;
    window.setTimeout(() => chapterPandas.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
});
function renderPersonalDetails() {

    const codeHint = document.querySelector("#code-hint");

    codeHint.replaceChildren(...[...birthdaySettings.birthdayCode].map((digit) => {

        const span = document.createElement("span");

        span.textContent = digit;

        return span;

    }));

    codeHint.setAttribute("aria-label", `The code is ${[...birthdaySettings.birthdayCode].join(" ")}`);

    codeInput.maxLength = Math.max(1, birthdaySettings.birthdayCode.length);

    document.querySelector("#recipient-name").textContent = birthdaySettings.recipientName;

    document.querySelector("#footer-name").textContent = `for ${birthdaySettings.recipientName}`;

    document.querySelector(".envelope span").textContent = birthdaySettings.recipientName.charAt(0) || "♡";

    document.querySelector(".intro").textContent = birthdaySettings.intro;

    document.title = `A Birthday Story for ${birthdaySettings.recipientName}`;

    Object.entries(birthdaySettings.sectionTitles).forEach(([section, title]) => {

        const heading = document.querySelector(`#${section}-title`);

        if (heading) heading.textContent = title;

    });

    const moduleMap = { audio: "audio-section", gallery: "gallery-section", map: "map-section", quiz: "quiz-section", surprises: "surprises-section" };

    const sectionContainer = document.querySelector("#surprise-world");

    Object.entries(moduleMap).forEach(([key, id]) => {

        const section = document.getElementById(id);

        section.hidden = !birthdaySettings.sectionOrder.includes(key);

    });

    birthdaySettings.sectionOrder.forEach((key) => {

        const section = document.getElementById(moduleMap[key]);

        if (section) sectionContainer.append(section);

    });
const extraLetters = document.querySelector("#extra-letters");

    extraLetters.replaceChildren();

    birthdaySettings.letters.slice(3).forEach((letter, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "extra-letter-button";

        button.dataset.letter = String(index + 3);

        button.textContent = `Open letter ${index + 4}　✉`;

        extraLetters.append(button);

    });

    renderCandles();

}

function renderCandles() {

    const row = document.querySelector(".candle-row");

    row.replaceChildren();

    birthdaySettings.wishes.forEach((wish, index) => {

        const candle = document.createElement("button");

        candle.className = "candle";

        candle.type = "button";

        candle.dataset.candle = String(index);

        candle.setAttribute("aria-label", `Blow out candle ${index + 1}`);

        candle.innerHTML = '<span class="flame"></span><span class="wick"></span><span class="candle-stick"></span>';

        candle.addEventListener("click", () => {

            if (candle.classList.contains("is-out")) return;

            candle.classList.add("is-out");

            candle.setAttribute("aria-label", `Candle ${index + 1}, blown out`);

            wishMessage.textContent = wish;

            candleCount += 1;

        });

        row.append(candle);

    });

}

const balloonMessages = [
    "Welcome to the first website ever created by a Hindi student.",
    "If there is any mistake on the website, please do not contact the developer, as he is a Hindi student.",
    "i promise this will be worth it each and every second"
];
let currentBalloonIndex = 0;
let activeBalloonIndex = null;
let balloonAdvancePending = false;

function showBalloonMessage(index) {
    if (index !== currentBalloonIndex || balloonAdvancePending || activeBalloonIndex !== null) return;
    activeBalloonIndex = index;
    balloonButtons[index].remove();
    letterLabel.textContent = "a little message for you";
    letterTitle.textContent = "A LITTLE MESSAGE FOR YOU";
    letterBody.textContent = balloonMessages[index];
    balloonDialogActions.hidden = false;
    letterDialog.classList.add("balloon-message-mode");
    balloonNextMessage.disabled = false;
    letterDialog.showModal();
    balloonNextMessage.focus();
}

balloonButtons.forEach((button, index) => {
    button.addEventListener("click", () => showBalloonMessage(index));
});

balloonNextMessage.addEventListener("click", () => {
    if (activeBalloonIndex !== currentBalloonIndex || balloonAdvancePending) return;
    balloonAdvancePending = true;
    activeBalloonIndex = null;
    balloonNextMessage.disabled = true;
    balloonDialogActions.hidden = true;
    letterDialog.classList.remove("balloon-message-mode");
    letterDialog.close();
    currentBalloonIndex += 1;
    balloonAdvancePending = false;

    if (currentBalloonIndex < balloonButtons.length) {
        balloonButtons[currentBalloonIndex].disabled = false;
        balloonButtons[currentBalloonIndex].focus();
        return;
    }

    balloonIntro.classList.add("is-hidden");
    gate.classList.remove("is-hidden");
    gate.inert = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
    codeInput.focus();
});

function moveEvasiveCancel(button) {
    const positions = ["0px", "calc(50% - 56px)", "calc(100% - 112px)"];
    const current = Number(button.dataset.position ?? 1);
    const next = (current + 1 + Math.floor(Math.random() * (positions.length - 1))) % positions.length;
    button.dataset.position = String(next);
    button.style.left = positions[next];
}

balloonDialogActions.querySelectorAll(".balloon-evasive-cancel").forEach((button) => {
    button.dataset.position = "1";
    button.addEventListener("pointerenter", () => moveEvasiveCancel(button));
    button.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        moveEvasiveCancel(button);
    });
    button.addEventListener("focus", () => moveEvasiveCancel(button));
    button.addEventListener("click", (event) => {
        event.preventDefault();
        moveEvasiveCancel(button);
    });
});
codeForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (codeInput.value === birthdaySettings.birthdayCode) {

        openPandaScreen();

        return;

    }

    codeMessage.textContent = "Almost, birthday star. Try the little code above!";

    codeMessage.classList.add("error");

    codeInput.value = "";

    codeInput.focus();

    window.setTimeout(() => codeMessage.classList.remove("error"), 450);

});

document.querySelector(".keypad").addEventListener("click", (event) => {

    const button = event.target.closest("button");

    if (!button) return;

    if (button.dataset.digit !== undefined && codeInput.value.length < birthdaySettings.birthdayCode.length) codeInput.value += button.dataset.digit;

    else if (button.dataset.action === "clear") codeInput.value = "";

    else if (button.dataset.action === "back") codeInput.value = codeInput.value.slice(0, -1);

    codeInput.focus();

    if (codeInput.value.length === birthdaySettings.birthdayCode.length) codeForm.requestSubmit();

});

cakeWrap.addEventListener("pointerdown", (event) => {

    if (cakeWrap.classList.contains("is-cut")) return;

    cakePointerStart = { x: event.clientX, y: event.clientY };

});

cakeWrap.addEventListener("pointerup", (event) => {

    if (!cakePointerStart || cakeWrap.classList.contains("is-cut")) return;

    const distance = Math.hypot(event.clientX - cakePointerStart.x, event.clientY - cakePointerStart.y);

    const bounds = cake.getBoundingClientRect();

    const startedOnCake = cakePointerStart.x >= bounds.left && cakePointerStart.x <= bounds.right && cakePointerStart.y >= bounds.top && cakePointerStart.y <= bounds.bottom;

    if (startedOnCake && distance > 60) cutCake();

    cakePointerStart = null;

});

document.querySelector("#cut-cake-button").addEventListener("click", cutCake);

document.querySelector("#extra-letters").addEventListener("click", (event) => {

    const button = event.target.closest("[data-letter]");

    if (button) openLetter(Number(button.dataset.letter));

});

// Keep quiz snap assignments separate from the gift-box video configuration.
const quizQuestions = [
    {
        title: "The Little Things You Notice",
        text: "Which little thing about me do you think I would never realise you noticed?",
        videoSrc: "assets/snaps/Snapchat-1410278464.mp4",
        answers: [
            { label: "The little changes in your mood" },
            { label: "The way I talk, laugh, or react" },
            { label: "The little things I do for you" },
            { label: "Something else you noticed…", custom: true }
        ]
    },
    {
        title: "If We Had One More Hour",
        text: "If we suddenly got one extra hour together, how would you want to spend it?",
        videoSrc: "assets/snaps/Snapchat-855713334.mp4",
        answers: [
            { label: "Talking about absolutely everything" },
            { label: "Laughing over our random nonsense" },
            { label: "Just spending time together" },
            { label: "Tell me how you'd spend it…", custom: true }
        ]
    },
    {
        title: "A Moment Frozen in Time",
        text: "If you could relive one little moment from our time together, which moment would you choose?",
        videoSrc: "assets/snaps/Snapchat-2132184662.mp4",
        answers: [
            { label: "Our first meeting" },
            { label: "A conversation you wanted to continue, but couldn't" },
            { label: "Our farewell party" },
            { label: "A moment on your mind…", custom: true }
        ]
    },
    {
        title: "A Small Thing Worth Keeping",
        text: "Which little thing from our time together would you want to keep forever?",
        videoSrc: "assets/snaps/Snapchat-1014850806.mp4",
        answers: [
            { label: "A memory that still makes me smile" },
            { label: "A conversation I never wanted to end" },
            { label: "A small everyday moment that meant a lot" },
            { label: "Something else I want to keep…", custom: true }
        ]
    },
    {
        title: "Your Melodious Side",
        text: "Which song do you think you can sing in the most melodious way?",
        videoSrc: "assets/snaps/Snapchat-1374240318.mp4",
        answers: [
            { label: "Hua Hai Aaj Pehli Baar" },
            { label: "Chale Aana" },
            { label: "Duniya" },
            { label: "Sab Jag Soye" }
        ]
    }
];

const giftVideoAssignments = [
    { id: "gift-1", title: "Gift Box 1", src: "assets/snaps/Snapchat-501255910.mp4" },
    { id: "gift-2", title: "Gift Box 2", src: "assets/snaps/Snapchat-1791247067.mp4" },
    { id: "gift-3", title: "Gift Box 3", src: "assets/snaps/Snapchat-1577845772.mp4" }
];
const completedGifts = new Set();
let activeGift = null;
let lastOpenedGiftButton = null;
let giftScrollPosition = 0;

function reportGiftVideoError() {
    if (!activeGift) return;
    giftVideoContinue.disabled = true;
    giftVideoStatus.textContent = "The video could not start. Please use Play to try again.";
    giftVideoStatus.hidden = false;
}

function openGiftVideo(button) {
    if (giftVideoDialog.open) return;
    const gift = giftVideoAssignments.find((item) => item.id === button.dataset.giftId);
    if (!gift) return;

    activeGift = gift;
    lastOpenedGiftButton = button;
    giftScrollPosition = window.scrollY;
    giftVideoTitle.textContent = gift.title;
    giftVideoContinue.disabled = true;
    giftVideoStatus.textContent = "";
    giftVideoStatus.hidden = true;
    giftVideo.src = gift.src;
    giftVideoDialog.showModal();
    document.body.classList.add("gift-video-open");

    giftVideo.load();
    const playAttempt = giftVideo.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(reportGiftVideoError);
    }
    giftVideoDialog.querySelector(".dialog-close").focus();
}

giftBoxGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gift-id]");
    if (button && giftBoxGrid.contains(button)) openGiftVideo(button);
});

giftVideo.addEventListener("play", () => {
    if (activeGift && !giftVideo.ended) giftVideoContinue.disabled = true;
});
giftVideo.addEventListener("error", reportGiftVideoError);
giftVideo.addEventListener("ended", () => {
    if (!activeGift || !giftVideo.ended || giftVideo.error) return;
    giftVideoContinue.disabled = false;
    giftVideoStatus.textContent = "You can continue whenever you are ready.";
    giftVideoStatus.hidden = false;
});

giftVideoContinue.addEventListener("click", () => {
    if (!activeGift || giftVideoContinue.disabled || !giftVideo.ended || giftVideo.error) return;
    completedGifts.add(activeGift.id);
    const allGiftsCompleted = giftVideoAssignments.every((gift) => completedGifts.has(gift.id));
    giftVideoDialog.close();

    if (allGiftsCompleted) {
        giftStatus.textContent = "All of this is just for you.";
        surpriseWorld.hidden = false;
        window.setTimeout(() => {
            document.querySelector("#audio-section").scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250);
    }
});

giftVideoDialog.addEventListener("click", (event) => {
    if (event.target === giftVideoDialog) giftVideoDialog.close();
});
giftVideoDialog.addEventListener("close", () => {
    giftVideo.pause();
    giftVideo.removeAttribute("src");
    giftVideo.load();
    giftVideoContinue.disabled = true;
    giftVideoStatus.textContent = "";
    giftVideoStatus.hidden = true;
    activeGift = null;
    document.body.classList.remove("gift-video-open");
    window.scrollTo(0, giftScrollPosition);
    if (lastOpenedGiftButton && lastOpenedGiftButton.isConnected) {
        lastOpenedGiftButton.focus({ preventScroll: true });
    }
    lastOpenedGiftButton = null;
});

let quizQuestionIndex = 0;
let quizSelectedAnswerIndex = null;
const quizCustomAnswers = Array(quizQuestions.length).fill("");
const viewedQuizQuestions = new Set();

function renderQuizQuestion() {
    const question = quizQuestions[quizQuestionIndex];
    quizSelectedAnswerIndex = null;
    quizProgress.textContent = `Question ${quizQuestionIndex + 1} of ${quizQuestions.length}`;
    quizQuestionHeading.textContent = question.title;
    quizQuestionText.textContent = question.text;
    quizCustomAnswerForm.hidden = true;
    quizCustomAnswerInput.value = quizCustomAnswers[quizQuestionIndex];
    quizCustomAnswerSubmit.disabled = !quizCustomAnswerInput.value.trim();
    quizReplayVideo.hidden = !viewedQuizQuestions.has(quizQuestionIndex);
    quizAnswerList.replaceChildren();

    question.answers.forEach((answer, answerIndex) => {
        const label = document.createElement("label");
        label.className = "quiz-answer-option";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "birthday-quiz-answer";
        input.value = String(answerIndex);
        input.dataset.answerIndex = String(answerIndex);
        if (answer.custom) input.dataset.custom = "true";

        const answerText = document.createElement("span");
        answerText.textContent = answer.label;

        label.append(input, answerText);
        quizAnswerList.append(label);
    });
}

function clearQuizVideo() {
    quizVideo.pause();
    if (Number.isFinite(quizVideo.duration)) quizVideo.currentTime = 0;
    quizVideo.removeAttribute("src");
    quizVideo.load();
    quizVideo.hidden = true;
    quizVideoMessage.hidden = true;
    quizVideoMessage.textContent = "";
}

function openQuizAnswerVideo() {
    const answer = quizQuestions[quizQuestionIndex].answers[quizSelectedAnswerIndex];
    if (!answer) return;

    quizQuestionPanel.hidden = true;
    quizVideoPanel.hidden = false;
    quizVideoProgress.textContent = `Question ${quizQuestionIndex + 1} of ${quizQuestions.length} · answer video`;
    viewedQuizQuestions.add(quizQuestionIndex);
    quizVideoMessage.hidden = true;
    quizVideoMessage.textContent = "";
    clearQuizVideo();

    quizVideo.hidden = false;
    quizVideo.src = quizQuestions[quizQuestionIndex].videoSrc;
    quizVideo.load();
    const playAttempt = quizVideo.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => {
            if (!quizVideoPanel.hidden && quizVideo.getAttribute("src") === quizQuestions[quizQuestionIndex].videoSrc) {
                quizVideoMessage.textContent = "The video could not start. Use the player controls to try again.";
                quizVideoMessage.hidden = false;
            }
        });
    }
}

quizStartButton.addEventListener("click", () => {
    quizQuestionIndex = 0;
    quizGameIntro.hidden = true;
    quizVideoPanel.hidden = true;
    quizCompletePanel.hidden = true;
    quizQuestionPanel.hidden = false;
    renderQuizQuestion();
    quizAnswerList.querySelector("input[type='radio']")?.focus({ preventScroll: true });
});

quizAnswerList.addEventListener("change", (event) => {
    const input = event.target.closest("input[type='radio'][data-answer-index]");
    if (!input || !quizAnswerList.contains(input)) return;

    quizSelectedAnswerIndex = Number(input.dataset.answerIndex);
    quizAnswerList.querySelectorAll(".quiz-answer-option").forEach((option) => {
        option.classList.toggle("is-selected", option.contains(input));
    });
    const answer = quizQuestions[quizQuestionIndex].answers[quizSelectedAnswerIndex];
    quizCustomAnswerForm.hidden = !answer.custom;
    quizReplayVideo.hidden = true;
    if (answer.custom) {
        quizCustomAnswerInput.value = quizCustomAnswers[quizQuestionIndex];
        quizCustomAnswerSubmit.disabled = !quizCustomAnswerInput.value.trim();
        quizCustomAnswerInput.focus();
    } else {
        openQuizAnswerVideo();
    }
});

quizCustomAnswerInput.addEventListener("input", () => {
    quizCustomAnswerSubmit.disabled = !quizCustomAnswerInput.value.trim();
});

quizCustomAnswerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (quizSelectedAnswerIndex === null || !quizQuestions[quizQuestionIndex].answers[quizSelectedAnswerIndex].custom) return;
    if (!quizCustomAnswerInput.value.trim()) return;

    quizCustomAnswers[quizQuestionIndex] = quizCustomAnswerInput.value;
    openQuizAnswerVideo();
});

quizReplayVideo.addEventListener("click", () => {
    if (quizSelectedAnswerIndex === null) return;
    const answer = quizQuestions[quizQuestionIndex].answers[quizSelectedAnswerIndex];
    if (answer.custom && !quizCustomAnswers[quizQuestionIndex].trim()) {
        quizCustomAnswerForm.hidden = false;
        quizCustomAnswerInput.focus();
        return;
    }
    openQuizAnswerVideo();
});

quizVideo.addEventListener("error", () => {
    if (quizVideoPanel.hidden || !quizVideo.getAttribute("src")) return;
    quizVideoMessage.textContent = "This video could not be loaded. You can still continue.";
    quizVideoMessage.hidden = false;
});

quizVideoClose.addEventListener("click", () => {
    if (quizVideoPanel.hidden) return;
    quizVideo.pause();
    if (Number.isFinite(quizVideo.duration)) quizVideo.currentTime = 0;
    quizVideoPanel.hidden = true;
    quizVideo.hidden = true;
    quizVideoMessage.hidden = true;
    quizQuestionPanel.hidden = false;
    quizReplayVideo.hidden = false;
    quizReplayVideo.focus({ preventScroll: true });
});

quizVideoContinue.addEventListener("click", () => {
    if (quizVideoPanel.hidden) return;
    quizVideoPanel.hidden = true;
    clearQuizVideo();

    if (quizQuestionIndex === quizQuestions.length - 1) {
        quizQuestionPanel.hidden = true;
        quizCompletePanel.hidden = false;
        quizCompletePanel.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }

    quizQuestionIndex += 1;
    quizQuestionPanel.hidden = false;
    renderQuizQuestion();
    quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
    quizAnswerList.querySelector("input[type='radio']")?.focus({ preventScroll: true });
});

document.querySelectorAll(".dialog-close").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));

let birthdayLetterOpeningTimer = null;
let birthdayLetterScrollPosition = 0;

birthdayLetterRevealButton.addEventListener("click", () => {
    if (birthdayLetterDialog.open || birthdayLetterOpeningTimer !== null) return;

    birthdayLetterRevealButton.disabled = true;
    birthdayLetterScrollPosition = window.scrollY;
    birthdayEnvelope.classList.remove("is-opening");
    void birthdayEnvelope.offsetWidth;
    birthdayEnvelope.classList.add("is-opening");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    birthdayLetterOpeningTimer = window.setTimeout(() => {
        birthdayLetterOpeningTimer = null;
        birthdayLetterDialog.showModal();
        birthdayLetterCloseButton.focus();
    }, reduceMotion ? 0 : 480);
});

birthdayLetterCloseButton.addEventListener("click", () => birthdayLetterDialog.close());
birthdayLetterDialog.addEventListener("cancel", (event) => event.preventDefault());
birthdayLetterDialog.addEventListener("close", () => {
    birthdayEnvelope.classList.remove("is-opening");
    birthdayLetterRevealButton.disabled = false;
    window.scrollTo(0, birthdayLetterScrollPosition);
    birthdayLetterRevealButton.focus({ preventScroll: true });
});

letterDialog.addEventListener("cancel", (event) => {
    if (letterDialog.classList.contains("balloon-message-mode") || letterDialog.classList.contains("chapter-letter-sequence")) event.preventDefault();
});
[letterDialog, lightboxDialog, surpriseDialog, soundtrackDialog, finalAudioDialog].forEach((dialog) => dialog.addEventListener("click", (event) => {

    if (dialog === letterDialog && (dialog.classList.contains("balloon-message-mode") || dialog.classList.contains("chapter-letter-sequence"))) return;
    if (event.target === dialog) dialog.close();

}));

function getPhotoItems() {

    return birthdaySettings.photos.map((photo) => ({ ...photo }));

}

const revealedPhotoIds = new Set();

function openLightbox(photo) {

    const source = photo.objectUrl || photo.src;

    document.querySelector("#lightbox-title").textContent = photo.title || photo.caption || "A little memory";

    document.querySelector("#lightbox-caption").textContent = "";

    document.querySelector("#lightbox-meta").textContent = "";

    document.querySelector("#lightbox-description").textContent = photo.caption || photo.description || "";

    const image = document.querySelector("#lightbox-image");

    const placeholder = document.querySelector("#lightbox-placeholder");

    setImageSource(image, source, "#lightbox-placeholder");

    placeholder.textContent = photo.placeholder || "♡";

    lightboxDialog.showModal();

}

function renderGallery() {

    const gallery = document.querySelector("#gallery-grid");

    gallery.replaceChildren();

    getPhotoItems().forEach((photo) => {

        const card = document.createElement("article");

        card.className = "gallery-card";

        card.dataset.photoId = photo.id;

        if (revealedPhotoIds.has(photo.id)) card.classList.add("is-revealed");

        const photoButton = document.createElement("button");

        photoButton.className = "photo-open";

        photoButton.type = "button";

        photoButton.setAttribute("aria-label", `${revealedPhotoIds.has(photo.id) ? "Open" : "Reveal"} photograph: ${photo.title}`);

        photoButton.setAttribute("aria-pressed", String(revealedPhotoIds.has(photo.id)));

        const placeholder = document.createElement("span");

        placeholder.className = "photo-placeholder";

        placeholder.textContent = photo.placeholder || "♡";

        placeholder.setAttribute("aria-hidden", "true");

        const image = document.createElement("img");

        image.className = "gallery-image";

        image.alt = photo.title;

        image.src = photo.src;

        image.onerror = () => {

            image.classList.add("image-unavailable");

            card.classList.remove("is-revealed");

            revealedPhotoIds.delete(photo.id);

            photoButton.setAttribute("aria-pressed", "false");

            photoButton.setAttribute("aria-label", `Reveal photograph: ${photo.title}`);

        };

        photoButton.append(placeholder, image);

        const title = document.createElement("p");

        title.className = "photo-title";

        title.textContent = photo.title;

        const caption = document.createElement("p");

        caption.className = "photo-caption";

        caption.textContent = photo.caption;

        caption.setAttribute("aria-hidden", String(!revealedPhotoIds.has(photo.id)));

        photoButton.addEventListener("click", () => {

            if (!revealedPhotoIds.has(photo.id)) {

                revealedPhotoIds.add(photo.id);

                card.classList.add("is-revealed");

                photoButton.setAttribute("aria-pressed", "true");

                photoButton.setAttribute("aria-label", `Open photograph: ${photo.title}`);

                caption.setAttribute("aria-hidden", "false");

                return;

            }

            openLightbox(photo);

        });

        card.append(photoButton, title, caption);

        gallery.append(card);

    });

}
const revealedMapPhotoIds = new Set();

function renderMap() {

    const layer = document.querySelector("#map-marker-layer");

    const photoGrid = document.querySelector("#map-photo-grid");

    layer.replaceChildren();

    photoGrid.replaceChildren();

    photoGrid.hidden = true;

    birthdaySettings.memories.forEach((place) => {

        const marker = document.createElement("button");

        marker.type = "button";

        marker.className = "map-marker";

        marker.style.left = `${Math.max(5, Math.min(95, Number(place.x) || 50))}%`;

        marker.style.top = `${Math.max(8, Math.min(90, Number(place.y) || 50))}%`;

        marker.textContent = "✦";

        marker.dataset.place = place.name;

        marker.setAttribute("aria-label", `Show ${place.name} photographs`);

        marker.setAttribute("aria-pressed", "false");

        marker.addEventListener("click", () => {

            if (marker.classList.contains("is-selected")) return;

            layer.querySelectorAll(".map-marker").forEach((item) => {

                item.classList.remove("is-selected");

                item.setAttribute("aria-pressed", "false");

            });

            marker.classList.add("is-selected");

            marker.setAttribute("aria-pressed", "true");

            showMapMemory(place);

        });

        layer.append(marker);

    });

}

function showMapMemory(place) {

    const photoGrid = document.querySelector("#map-photo-grid");

    photoGrid.replaceChildren();

    photoGrid.hidden = false;

    place.photos.forEach((photo, index) => {

        const slot = document.createElement("article");

        slot.className = "map-photo-slot";

        slot.style.setProperty("--slot-index", index);

        slot.dataset.photoId = photo.id;

        if (revealedMapPhotoIds.has(photo.id)) slot.classList.add("is-revealed");

        const button = document.createElement("button");

        button.type = "button";

        button.className = "map-photo-open";

        button.setAttribute("aria-label", `${revealedMapPhotoIds.has(photo.id) ? "Open" : "Reveal"} ${photo.label}`);

        button.setAttribute("aria-pressed", String(revealedMapPhotoIds.has(photo.id)));

        const image = document.createElement("img");

        image.className = "map-place-image";

        image.alt = photo.alt || photo.label;

        if (photo.src) image.src = photo.src;

        image.addEventListener("error", () => {

            slot.classList.remove("is-revealed");

            revealedMapPhotoIds.delete(photo.id);

            button.setAttribute("aria-pressed", "false");

            button.setAttribute("aria-label", `Reveal ${photo.label}`);

        });

        const cover = document.createElement("span");

        cover.className = "photo-placeholder map-photo-cover";

        cover.textContent = ["♡", "✿", "✦", "❀"][index];

        cover.setAttribute("aria-hidden", "true");

        button.append(image, cover);

        const caption = document.createElement("p");

        caption.className = "map-photo-caption";

        caption.textContent = photo.caption || "";

        caption.hidden = !photo.caption;

        button.addEventListener("click", () => {

            if (!revealedMapPhotoIds.has(photo.id)) {

                revealedMapPhotoIds.add(photo.id);

                slot.classList.add("is-revealed");

                button.setAttribute("aria-pressed", "true");

                button.setAttribute("aria-label", `Open ${photo.label}`);

                return;

            }

            if (photo.src) openLightbox({ title: photo.label, src: photo.src, caption: photo.caption || "" });

        });

        slot.append(button, caption);

        photoGrid.append(slot);

    });

}
function renderSurprises() {

    const grid = document.querySelector("#surprise-grid");

    grid.replaceChildren();

    const icons = { envelope: "✉", balloon: "♡", star: "✦", timeline: "⌛" };

    birthdaySettings.surprises.forEach((surprise) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = `surprise-card surprise-${surprise.type || "envelope"}`;

        const icon = document.createElement("span");

        icon.className = "surprise-icon";

        icon.setAttribute("aria-hidden", "true");

        icon.textContent = icons[surprise.type] || icons.envelope;

        const title = document.createElement("strong");

        title.textContent = surprise.title || "A little surprise";

        const action = document.createElement("span");

        action.className = "surprise-action";

        action.textContent = "Open your note ↗";

        button.append(icon, title, action);

        button.addEventListener("click", () => openSurprise(surprise));

        grid.append(button);

    });

}

function openSurprise(surprise) {

    const title = document.querySelector("#surprise-dialog-title");

    const body = document.querySelector("#surprise-dialog-body");

    title.textContent = surprise.title || "A little surprise";

    body.replaceChildren();

    if (surprise.type === "timeline" && Array.isArray(surprise.items)) {

        const timeline = document.createElement("ol");

        timeline.className = "surprise-timeline";

        surprise.items.forEach((item) => {

            const entry = document.createElement("li");

            const date = document.createElement("span");

            date.textContent = item.date || "";

            const heading = document.createElement("strong");

            heading.textContent = item.title || "";

            const message = document.createElement("p");

            message.textContent = item.message || "";

            entry.append(date, heading, message);

            timeline.append(entry);

        });

        body.append(timeline);

    } else {

        const message = document.createElement("p");

        message.className = "surprise-message";

        message.textContent = surprise.message || "";

        body.append(message);

    }

    surpriseDialog.showModal();

}

const soundtrackPlayers = [...document.querySelectorAll(".soundtrack-player")];

function formatSoundtrackTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "--:--";
    const wholeSeconds = Math.floor(seconds);
    const minutes = Math.floor(wholeSeconds / 60);
    const remainder = String(wholeSeconds % 60).padStart(2, "0");
    if (minutes >= 60) {
        return Math.floor(minutes / 60) + ":" + String(minutes % 60).padStart(2, "0") + ":" + remainder;
    }
    return minutes + ":" + remainder;
}

soundtrackPlayers.forEach((audio) => {
    const card = audio.closest(".soundtrack-card");
    const status = card.querySelector(".soundtrack-status");
    const elapsed = card.querySelector("[data-elapsed]");
    const duration = card.querySelector("[data-duration]");
    const updateTimes = () => {
        elapsed.textContent = formatSoundtrackTime(audio.currentTime);
        duration.textContent = formatSoundtrackTime(audio.duration);
    };

    audio.addEventListener("play", () => {
        soundtrackPlayers.forEach((otherAudio) => {
            if (otherAudio !== audio) otherAudio.pause();
        });
        status.textContent = "Now playing.";
        if (audio.dataset.popup === "message" && !soundtrackDialog.open) {
            soundtrackDialog.showModal();
        }
    });
    audio.addEventListener("pause", () => {
        if (audio.error) return;
        status.textContent = audio.ended ? "Playback finished." : "Paused.";
    });
    audio.addEventListener("ended", () => {
        status.textContent = "Playback finished.";
        updateTimes();
    });
    audio.addEventListener("error", () => {
        status.textContent = "This track could not be played. Please check the audio file.";
    });
    audio.addEventListener("loadedmetadata", updateTimes);
    audio.addEventListener("durationchange", updateTimes);
    audio.addEventListener("timeupdate", updateTimes);
});

soundtrackDialog.addEventListener("click", (event) => {
    if (event.target === soundtrackDialog) soundtrackDialog.close();
});
function updateFinalAudioDisplay() {
    finalAudioElapsed.textContent = formatSoundtrackTime(finalAudio.currentTime);
    finalAudioDuration.textContent = formatSoundtrackTime(finalAudio.duration);
    const duration = finalAudio.duration;
    if (Number.isFinite(duration) && duration > 0) {
        finalAudioProgress.max = String(duration);
        finalAudioProgress.value = String(Math.min(finalAudio.currentTime, duration));
        finalAudioProgress.disabled = false;
    } else {
        finalAudioProgress.max = "0";
        finalAudioProgress.value = "0";
        finalAudioProgress.disabled = true;
    }
}

function showFinalAudioError() {
    finalAudioToggle.textContent = "Play";
    finalAudioStatus.textContent = "The recording could not be played. Press Play to try again.";
}

function playFinalAudio() {
    if (finalCelebrationStarted) return;
    finalAudioStatus.textContent = "Trying to play your message…";
    const playRequest = finalAudio.play();
    if (playRequest && typeof playRequest.catch === "function") playRequest.catch(showFinalAudioError);
}

finalizeButton.addEventListener("click", () => {
    if (finalCelebrationStarted || finalAudioDialog.open) return;
    try { finalAudio.currentTime = 0; } catch { /* The media will start at zero once it loads. */ }
    finalAudioStatus.textContent = "Loading your message…";
    finalAudioDialog.showModal();
    playFinalAudio();
});

finalAudioToggle.addEventListener("click", () => {
    if (finalCelebrationStarted) return;
    if (finalAudio.paused) playFinalAudio();
    else finalAudio.pause();
});

finalAudioProgress.addEventListener("input", () => {
    if (Number.isFinite(finalAudio.duration) && finalAudio.duration > 0) {
        finalAudio.currentTime = Number(finalAudioProgress.value);
        updateFinalAudioDisplay();
    }
});

finalAudio.addEventListener("play", () => {
    finalAudioToggle.textContent = "Pause";
    finalAudioStatus.textContent = "Playing your message.";
});
finalAudio.addEventListener("pause", () => {
    if (!finalAudio.ended && !finalCelebrationStarted) {
        finalAudioToggle.textContent = "Play";
        finalAudioStatus.textContent = "Paused. Press Play to continue.";
    }
});
finalAudio.addEventListener("loadedmetadata", () => {
    updateFinalAudioDisplay();
    if (finalAudio.paused && !finalCelebrationStarted) finalAudioStatus.textContent = "Ready when you are.";
});
finalAudio.addEventListener("durationchange", updateFinalAudioDisplay);
finalAudio.addEventListener("timeupdate", updateFinalAudioDisplay);
finalAudio.addEventListener("waiting", () => { finalAudioStatus.textContent = "Loading your message…"; });
finalAudio.addEventListener("error", showFinalAudioError);
finalAudio.addEventListener("ended", startFinalCelebration);

finalAudioDialog.addEventListener("close", () => {
    if (finalCelebrationStarted) return;
    finalAudio.pause();
    try { finalAudio.currentTime = 0; } catch { /* Ignore reset errors while media is unavailable. */ }
    finalAudioToggle.textContent = "Play";
    finalAudioStatus.textContent = "Ready when you are.";
    updateFinalAudioDisplay();
});

function startFinalCelebration() {
    if (finalCelebrationStarted || !finalAudio.ended) return;
    finalCelebrationStarted = true;
    mainContent.inert = true;
    document.body.classList.add("final-celebration-active");
    finalConfetti.replaceChildren();
    finalConfetti.hidden = false;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const colors = ["#ef8fae", "#bea4df", "#78bfd3", "#f4c56d", "#f29b73", "#8fc79f", "#fff3d4"];
    const random = (min, max) => Math.random() * (max - min) + min;
    const count = reducedMotion ? 36 : 112;
    for (let index = 0; index < count; index += 1) {
        const side = index % 2 === 0 ? "left" : "right";
        const piece = document.createElement("span");
        const kind = index % 13 === 0 ? "spark" : index % 3 === 0 ? "ribbon" : "paper";
        piece.className = "final-confetti-piece final-confetti-" + kind;
        if (kind === "spark") piece.textContent = "✦";
        piece.style.setProperty("--piece-color", colors[index % colors.length]);
        piece.style.setProperty("--start-x", side === "left" ? String(random(0, 5)) + "vw" : String(random(95, 100)) + "vw");
        piece.style.setProperty("--start-y", String(random(30, 72)) + "vh");
        piece.style.setProperty("--burst-x", (side === "left" ? random(18, 72) : -random(18, 72)) + "vw");
        piece.style.setProperty("--burst-y", String(random(-30, 24)) + "vh");
        piece.style.setProperty("--drift-x", String(random(-18, 18)) + "vw");
        const spin = random(-620, 620);
        piece.style.setProperty("--spin", String(spin) + "deg");
        piece.style.setProperty("--spin-mid", String(spin * 1.35) + "deg");
        piece.style.setProperty("--spin-end", String(spin * 1.8) + "deg");
        piece.style.setProperty("--flight-duration", reducedMotion ? ".45s" : String(random(3.45, 4.15)) + "s");
        piece.style.setProperty("--flight-delay", reducedMotion ? "0s" : String(random(0, .32)) + "s");
        finalConfetti.append(piece);
    }

    window.requestAnimationFrame(() => {
        finalConfetti.classList.add("is-active");
        // Let the celebration start before dismissing the audio dialog.
        if (finalAudioDialog.open) finalAudioDialog.close();
    });

    const celebrationDuration = reducedMotion ? 900 : 4900;
    finalCelebrationTimer = window.setTimeout(() => {
        finalConfetti.classList.remove("is-active");
        finalConfetti.replaceChildren();
        finalConfetti.hidden = true;
        if (finalAudioDialog.open) finalAudioDialog.close();
        mainContent.hidden = true;
        skySpecks.hidden = true;
        finalBirthdayScreen.hidden = false;
        document.body.classList.remove("final-celebration-active");
        document.body.classList.add("final-page-active");
        finalBirthdayHeading.focus({ preventScroll: true });
        finalCelebrationTimer = null;
    }, celebrationDuration);
}

function renderVoiceNotes() {

    const list = document.querySelector("#voice-list");

    list.replaceChildren();

    [...birthdaySettings.voiceNotes, ...uploadedVoices].forEach((note, index) => {

        const card = document.createElement("article");

        card.className = "voice-card";
        if (note.src === "assets/Audio/voicenote.m4a") card.classList.add("personal-voice-card");

        const title = document.createElement("h4");

        title.textContent = note.title || note.name || `Voice note ${index + 1}`;

        card.append(title);

        if (note.caption) {

            const caption = document.createElement("p");

            caption.textContent = note.caption;

            card.append(caption);

        }

        const source = note.objectUrl || note.src;

        if (source) {

            const audio = document.createElement("audio");

            audio.controls = true;

            audio.preload = "none";

            audio.src = source;

            audio.addEventListener("error", () => { card.querySelector(".voice-error").hidden = false; });

            const error = document.createElement("p");

            error.className = "voice-error";

            error.hidden = true;

            error.textContent = "This audio format could not be played in this browser.";

            const replay = document.createElement("button");

            replay.type = "button";

            replay.className = "replay-button";

            replay.textContent = "↺ Replay from start";

            replay.addEventListener("click", () => { audio.currentTime = 0; audio.play().catch(() => { error.hidden = false; }); });

            card.append(audio, error, replay);

        } else {

            const placeholder = document.createElement("p");

            placeholder.className = "voice-placeholder";

            placeholder.textContent = "Sample placeholder: add a voice recording with the button above.";

            card.append(placeholder);

        }

        list.append(card);

    });

}

async function initializeSurprises() {

    const storedPhotos = await readMedia("photos");

    uploadedPhotos = storedPhotos.map((photo) => {

        const objectUrl = URL.createObjectURL(photo.blob);

        imageObjectUrls.set(photo.id, objectUrl);

        return { ...photo, objectUrl };

    });

    const storedAudio = await readMedia("audio");

    uploadedVoices = storedAudio.filter((item) => item.kind === "voice").map((note) => {

        const objectUrl = URL.createObjectURL(note.blob);

        audioObjectUrls.set(note.id, objectUrl);

        return { ...note, objectUrl };

    });

    if (!await mediaDatabasePromise) storageNote.textContent = "Browser storage is unavailable here. Added files will work until you close this page.";

    renderGallery();

    renderVoiceNotes();

}

function initialize() {

    renderPersonalDetails();

    renderGallery();

    renderMap();

    renderSurprises();

    renderVoiceNotes();

    initializeSurprises();

}

initialize();
