
const MainOutput = document.getElementById("terminal-output");
const ErrorOutput = document.getElementById("terminal-output-error");
const terminalContainer = document.getElementById("terminalContainer");
const prompt = "visitor@TheNetwork:~$";

console.log(terminalContainer);

function creatingInputLineThing() {

    const lineThing = document.createElement("div");
    lineThing.className = "terminal-input-line";

    const prompterLine = document.createElement("span");
    prompterLine.className = "terminal-prompt";
    prompterLine.textContent = prompt;

    const inputStuff = document.createElement("input");
    inputStuff.className = "terminal-input";
    inputStuff.type = "text";
    inputStuff.autocomplete = "off";
    inputStuff.spellcheck = false;

    lineThing.appendChild(prompterLine);
    lineThing.appendChild(inputStuff);

    terminalContainer.appendChild(lineThing);
    inputStuff.focus();


    inputStuff.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            inputStuff.disabled = true;
            const givenCommand = inputStuff.value.trim();
            console.log(givenCommand);
            creatingInputLineThing();
        }
    });

}

creatingInputLineThing();
