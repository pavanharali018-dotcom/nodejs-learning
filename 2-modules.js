// Modules allow us to split our application into separate files and reuse code.
// Modules allow us to split code into different files and reuse it when needed.

//built in modules
//1.OS module
// The 'os' module provides information about the operating system and computer.
const OS = require('os');
console.log(OS.platform());
// os.platform() returns the operating system platform on which Node.js is running.
console.log(OS.homedir());
// os.homedir() returns the home directory of the current user.
console.log(OS.cpus());
// os.cpus() returns information about the CPU cores available on the system.
console.log(OS.totalmem());
console.log(OS.freemem());
// os.totalmem() returns the total amount of system memory in bytes.
// os.freemem() returns the amount of free system memory in bytes.

//2.Path module
// The 'path' module provides utilities for working with file and directory paths.
const path = require("path");
console.log(path.join("folder","subfolder","file.txt"));
// path.join() → joins different parts of a path into one proper path.
console.log(path.basename("folder/subfolder/file.txt"));
// path.basename() returns the last part of a path, usually the file name.
console.log(path.dirname("folder/subfolder/file.txt"));
// path.dirname() returns the directory part of a path.


//3.FS module
// The 'fs' module allows Node.js to work with files and directories on the computer.
const fs = require("fs");