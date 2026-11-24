import { RootDirectory } from "./directories.js";
import { getPath } from "./paths.js";

export const fileSystem = RootDirectory;


export function readFile(path) {

    const pathToFile = getPath(path);

    if (pathToFile === null){
        return null;
    };

    if (pathToFile.type === "directory"){
        return null;
    };

    if (pathToFile.type === "file"){
        return pathToFile.contents;
    } else {
        return null;
    }
}

export function listDir(path){

    const pathToFile = getPath(path);

    if (pathToFile === null){
        return null;
    };

    if (pathToFile.children === "null"){
        return null;
    } else {
        return pathToFile.children;
    }

}

export function getThingInfo(path){

    const pathToFile = getPath(path);

    if (pathToFile === null){
        return null;
    };

    if (pathToFile.type === "file"){
        return pathToFile.metadata;

    } else if (pathToFile.type === "directory") {
        return pathToFile.name;
    
    } else {
        return null;
        
    } 
}

export function createFile(){

}