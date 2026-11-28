
const MainOutput = document.getElementById("terminal-output");
const terminalContainer = document.getElementById("terminalContainer");
const prompt = "visitor@TheNetwork:~$";

import {getPath} from "../fileSystem/paths.js";
import { listDir, readFile, getThingInfo, createFile, createDir, DeleteFile, DeleteDir, CopyFile, MoveFile } from "../fileSystem/virtual.js";
import { RootDirectory } from "../fileSystem/directories.js";
import { makingMetadataCusWeCoolLikeThat } from "../fileSystem/metadata.js";

console.log(getThingInfo("/home/visitor/README.txt"));





import {
    addToHistory,
    getPreviousCommand, 
    getNextCommand
} from "../workingParts/history.js";

//const possibleCommands = ["ls", "cat", "cp", "file", "head"];

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
    terminalContainer.scrollTop = terminalContainer.scrollHeight;
    inputStuff.focus();


    inputStuff.addEventListener("keydown", function(event) {
        
        if (event.key === "Enter") {
                event.preventDefault();
                inputStuff.disabled = true;
                const givenCommand = inputStuff.value.trim();
                console.log(givenCommand);
                
                if (givenCommand != ""){
                addToHistory(givenCommand);
                }
                creatingInputLineThing();     
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();
            inputStuff.value = getPreviousCommand();

        }

        if (event.key === "ArrowDown") {
            event.preventDefault();
            inputStuff.value = getNextCommand();
        }

    });

    

}
creatingInputLineThing();
