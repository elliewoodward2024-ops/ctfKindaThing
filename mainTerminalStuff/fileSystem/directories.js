import { makingMetadataCusWeCoolLikeThat } from "./metadata.js";
const NA = undefined;

export const RootDirectory = {
    name: "/",
    type:"directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
};

RootDirectory.children["home"] = {
    name: "home",
    type: "directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
};

RootDirectory.children["home"].children["visitor"] = {
    name: "visitor",
    type: "directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
};

RootDirectory.children["home"].children["visitor"].children["Documents"] = {
    name: "Documents",
    type: "directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
};

RootDirectory.children["home"].children["visitor"].children["Downloads"] = {
    name: "Downloads",
    type: "directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
};

const readme = "Welcome to the in built terminal. If you want to know the commands you have access to then type --help into the terminal.";
RootDirectory.children["home"].children["visitor"].children["README.txt"] = {
    name: "README.txt",
    type: "file",
    contents: readme, 
    metadata: makingMetadataCusWeCoolLikeThat(readme, "file")
};


RootDirectory.children["tmp"] = {
    name: "tmp",
    type: "directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
};

RootDirectory.children["usr"] = {
    name: "usr",
    type: "directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
};

RootDirectory.children["usr"].children["bin"] = {
    name: "bin",
    type: "directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
};

RootDirectory.children["usr"].children["share"] = {
    name: "share",
    type: "directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
};

RootDirectory.children["root"] = {
    name: "root",
    type: "directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
};

RootDirectory.children["var"] = {
    name: "var",
    type: "directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
};

RootDirectory.children["var"].children["log"] = {
    name: "log",
    type: "directory",
    children:{},
    metadata: makingMetadataCusWeCoolLikeThat(NA, "directory")
    
};

const system_notes = "";
RootDirectory.children["var"].children["log"].children["system_notes.txt"] = {
    name: "system_notes.txt",
    type: "file",
    contents: system_notes,

    metadata: makingMetadataCusWeCoolLikeThat(system_notes, "file")
};



