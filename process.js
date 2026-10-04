// ==================== PROCESS ====================

// `process` is a built-in global object in Node.js.
// It gives information about and controls the current Node.js process.

// 1. process.argv
// Gets command-line arguments.
// node app.js Pavan 19
// argv[2] = "Pavan"
// argv[3] = "19"
// Values are strings by default.

// 2. process.env
// Accesses environment variables.
// Example: process.env.PORT
// Used later for secrets, configuration, API keys, etc.

// 3. process.cwd()
// Returns the current working directory.

// 4. process.exit()
// Immediately stops the Node.js process.
// process.exit(0) → success
// process.exit(1) → error/failure

const name = process.argv[2];
const age = Number(process.argv[3]);

console.log(`My name is ${name}`);
console.log(`I am ${age} years old`);







