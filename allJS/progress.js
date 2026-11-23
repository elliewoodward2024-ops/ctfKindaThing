

const STORAGE_KEY = "foundFlags";

function getFoundFlags() {
    return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );
}

function saveFoundFlags(foundFlags) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(foundFlags)
    );

}

function completeFlag(flagID) {
    flagID = String(flagID);
    const foundFlags = getFoundFlags();
    if (!foundFlags.includes(flagID)) {
        foundFlags.push(flagID);
        saveFoundFlags(foundFlags);
    }

    updateProgress();
    updateHomeProgress();
    CryptUnlocker();
    WebUnlocker();
    StegoUnlocker();
}

function isFlagFound(flagID) {
    flagID = String(flagID);
    return getFoundFlags().includes(flagID);

}

function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    document.querySelectorAll("[data-challenge-id]").forEach(checkbox => {
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event("change", { bubbles: true }));
    });

    updateProgress();
    updateHomeProgress();
    CryptUnlocker();
    WebUnlocker();
    StegoUnlocker();

}

function updateProgress() {
    const foundFlags = getFoundFlags();

    document.querySelectorAll("[data-challenge-id]")

        .forEach(checkbox => {
            const category = checkbox.dataset.category;
            const id = checkbox.dataset.challengeId;
            const flagID = `${category}-${id}`
            checkbox.checked = foundFlags.includes(flagID);
        });
}

function updateHomeProgress() {
    const foundFlags = getFoundFlags();

    let webComp = 0;
    let cryptComp = 0;
    let stegoComp = 0;

    foundFlags.forEach(flagID => {
        if (flagID.startsWith("web_flag-")) {
            webComp++;
        }

        if (flagID.startsWith("crypt_flag-")) {
            cryptComp++;
        }

        if (flagID.startsWith("stego_flag-")) {
            stegoComp++;
        }
    });

    const webPer = (webComp / 7) * 100;
    const cryptPer = (cryptComp / 9) * 100;
    const stegoPer = (stegoComp / 6) * 100;


    const webBar = document.querySelector(".web-progress");
    if (webBar) {
        webBar.style.width = `${webPer}%`;
    }

    const cryptoBar = document.querySelector(".crypto-progress");
    if (cryptoBar) {
        cryptoBar.style.width = `${cryptPer}%`;
    }

    const stegoBar = document.querySelector(".stego-progress");
    if (stegoBar) {
        stegoBar.style.width = `${stegoPer}%`;
    }


    const webText = document.querySelector("#web-progress-text");

    if (webText) {
        webText.textContent = `${webComp} / 7`;
    }


    const cryptoText = document.querySelector("#crypto-progress-text");

    if (cryptoText) {
        cryptoText.textContent = `${cryptComp} / 9`;
    }



    const stegoText = document.querySelector("#stego-progress-text");

    if (stegoText) {
        stegoText.textContent = `${stegoComp} / 6`;
    }

}








document.addEventListener("DOMContentLoaded", () => {
    updateProgress();
    updateHomeProgress();
    CryptUnlocker();
    WebUnlocker();
    StegoUnlocker();

    const resetButton = document.querySelector("#reset-progress");

    if (resetButton) {
        resetButton.addEventListener("click", () => {
            if (confirm("Are you sure you want to reset all progress?")) {
                resetProgress();
            }

        });
    }
});


function CryptUnlocker() {
    const foundFlags = getFoundFlags();

    document.querySelectorAll("[unlock]").forEach(challenge => {
        const challengeNumber = Number(challenge.getAttribute("unlock"));

        if (challengeNumber == 1) {
            challenge.classList.add("unlocked");
            return;
        }

        const previousChal = `crypt_flag-${challengeNumber - 1}`;

        if (foundFlags.includes(previousChal)){
            challenge.classList.add("unlocked");
            return;
        } else {
            challenge.classList.remove("unlocked");
            return; 
        }

    });

}

function WebUnlocker() {
    const foundFlags = getFoundFlags();

    document.querySelectorAll("[unlocker]").forEach(challenge => {
        const challengeNumber = Number(challenge.getAttribute("unlocker"));

        if (challengeNumber == 1) {
            challenge.classList.add("unlocked");
            return;
        }

        const previousChal = `web_flag-${challengeNumber - 1}`;

        if (foundFlags.includes(previousChal)){
            challenge.classList.add("unlocked");
            return;
        } else {
            challenge.classList.remove("unlocked");
            return; 
        }

    });

}

function StegoUnlocker() {
    const foundFlags = getFoundFlags();

    document.querySelectorAll("[unlocked]").forEach(challenge => {
        const challengeNumber = Number(challenge.getAttribute("unlocked"));

        if (challengeNumber == 1) {
            challenge.classList.add("unlocked");
            return;
        }

        const previousChal = `stego_flag-${challengeNumber - 1}`;

        if (foundFlags.includes(previousChal)){
            challenge.classList.add("unlocked");
            return;
        } else {
            challenge.classList.remove("unlocked");
            return; 
        }

    });

}

