// Globals are objects/functions/variables that are available throughout a Node.js application without importing them.
// __dirname → current directory path
// __filename → current file path
// require() → import modules (CommonJS)
// module → information/control over the current module
// process → information/control over the current Node.js process

const num1=10;
const num2=22;
function sum(){
    console.log(`Sum is:${num1+num2}`);
};
sum();
