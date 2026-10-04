// Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser.
// console.log("Hello Node.js");


// const names = require('./3-names');
// require() is used to import a module into another file.
// console.log(names);
// console.log(names.madan);

// require('./1-intro.js');

// importing moduleExports obj 
const math = require('./moduleExports.js');
console.log(math.sum(3,4));
console.log(math.diff(3,4));
console.log(math.product(3,4));