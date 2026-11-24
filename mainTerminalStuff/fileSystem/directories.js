const RootDirectory = {
    name: "/",
    type:"directory",
    children:{}
};

RootDirectory.children["home"] = {
    name: "/home",
    type: "directory",
    children:{}
};

RootDirectory.children["home"].children["visitor"] = {
    name: "/home/visitor",
    type: "directory",
    children:{}
};

RootDirectory.children["home"].children["visitor"].children["Documents"] = {
    name: "/home/visitor/Documents",
    type: "directory",
    children:{}
};

RootDirectory.children["home"].children["visitor"].children["Downloads"] = {
    name: "/home/visitor/Downloads",
    type: "directory",
    children:{}
};

RootDirectory.children["home"].children["visitor"].children["README.txt"] = {
    name: "README.txt",
    type: "file",
    contents:"Welcome to the in built terminal. If you want to know the commands you have access to then type --help into the terminal."
};


RootDirectory.children["tmp"] = {
    name: "/tmp",
    type: "directory",
    children:{}
};

RootDirectory.children["usr"] = {
    name: "/usr",
    type: "directory",
    children:{}
};

RootDirectory.children["usr"].children["bin"] = {
    name: "/usr/bin",
    type: "directory",
    children:{}
};

RootDirectory.children["usr"].children["share"] = {
    name: "/usr/share",
    type: "directory",
    children:{}
};

RootDirectory.children["root"] = {
    name: "/root",
    type: "directory",
    children:{}
};

RootDirectory.children["var"] = {
    name: "/var",
    type: "directory",
    children:{}
};

RootDirectory.children["var"].children["log"] = {
    name: "/var/log",
    type: "directory",
    children:{}
};

RootDirectory.children["var"].children["log"].children["system_notes.txt"] = {
    name: "system_notes.txt",
    type: "file",
    contents: ""
};

