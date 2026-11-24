const commandHistory = [];
let historyPosition = 0;

export function addToHistory(command) {
    commandHistory.push(command);
    historyPosition = commandHistory.length;
    
}

export function getPreviousCommand() {
    if (historyPosition > 0) {
        historyPosition--;
    } 
    return commandHistory[historyPosition] ?? "";
}

export function getNextCommand() {
    if (historyPosition < commandHistory.length) {
        historyPosition++;
    } 
    return commandHistory[historyPosition] ?? "";
}