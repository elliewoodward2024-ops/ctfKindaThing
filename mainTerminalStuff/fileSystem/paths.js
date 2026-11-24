import { RootDirectory } from "./directories.js";


export function getPath(path){
    const pathParts = path.split("/").filter(Boolean);

    let currentPath = RootDirectory;

    for (const part of pathParts) {
        if (currentPath.type != "directory"){
            return null;
        }

        if (!currentPath.children[part]){
            return null;
        }

        currentPath = currentPath.children[part];
        
    }
    return currentPath;
}