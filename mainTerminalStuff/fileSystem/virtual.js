import { RootDirectory } from "./directories.js";
import { getPath } from "./paths.js";
import { makingMetadataCusWeCoolLikeThat } from "./metadata.js";

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

export function createFile(path, content){

    const pathParts = path.split("/");
    const fileName = pathParts.pop();
    const parentPath = pathParts.join("/") || "/";

    const newFile = {
        name: fileName,
        type: "file",
        contents: content,
        metadata: makingMetadataCusWeCoolLikeThat(content)
    };

    if (parentPath === null){
        return null;
    };

    const parentDirectory = getPath(parentPath);
    parentDirectory.children[fileName] = newFile;
    return newFile;
    
}

export function createDir(path){

    const pathParts = path.split("/");
    const DirName = pathParts.pop();
    const parentPath = pathParts.join("/") || "/";

    const newDir = {
        name: DirName,
        type: "directory",
        children: {}
    };

    const parentDirectory = getPath(parentPath);

    if (parentDirectory === null){
        return null;
    }

    if (parentDirectory.type !== "directory") {
    return null;
    }

    if (parentDirectory.children[DirName] === undefined){
        parentDirectory.children[DirName] = newDir;
        return newDir;
    } else {
        return null
    }
    
}

export function DeleteFile(path){

    const pathParts = path.split("/");
    const fileName = pathParts.pop();
    const parentPath = pathParts.join("/") || "/";

    
    const parentDirectory = getPath(parentPath);

    if (parentDirectory.type !== "directory") {
        return null;
    }

    if (parentPath === null){
        return null;
    }

    if (!parentDirectory.children[fileName]) {
        return null;
    }
    if (parentDirectory.children[fileName].type !== "file") {
        return null;
    }

    delete parentDirectory.children[fileName];
    return true;
    
}

export function DeleteDir(path) {

    const pathParts = path.split("/");
    const DirName = pathParts.pop();
    const parentPath = pathParts.join("/") || "/";
    const parentDirectory = getPath(parentPath);

    if (parentPath === null){
        return null;
    }

    if (parentDirectory.type !== "directory") {
        return null;
    }

    if (!parentDirectory.children[DirName]) {
        return null;
    }
    if (parentDirectory.children[DirName].type !== "directory") {
        return null;
    }

    if (Object.keys(parentDirectory.children[DirName].children).length === 0){

        delete parentDirectory.children[DirName]; 
        return true;

    } else {
        return false;
    }

    
}

export function CopyFile(sourcePath, destinationPath){

    const pathParts = destinationPath.split("/");
    const fileName = pathParts.pop();
    const parentPath = pathParts.join("/") || "/";
    const sourceFileStuff = getPath(sourcePath);

    const parentDirectory = getPath(parentPath);

    if (sourceFileStuff === null){
        return null;
    }

    if (sourceFileStuff.type !== "file") {
        return null;
    }

    if (parentDirectory === null){
        return null;
    }

    if (parentDirectory.type !== "directory") {
        return null;
    }


    const content = sourceFileStuff.contents;

    const FileCopy = {
        name: fileName,
        type: "file",
        contents: content,
        metadata: makingMetadataCusWeCoolLikeThat(content)
    };

    if (parentDirectory.children[fileName] === "") {
        return null
    } else if (parentDirectory.children[fileName] === undefined){
        parentDirectory.children[fileName] = FileCopy;
        return FileCopy;
    } else {
        return null
    }
    

}