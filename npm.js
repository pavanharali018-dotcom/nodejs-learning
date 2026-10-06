//npm-node package manager
//  WHAT IS NPM?
//  Think of building a bike: instead of forging every part yourself,
//  you buy ready-made parts from a store.
//  npm = that store for JavaScript code (packages).

// KEY FILES (shopping analogy)
//    package.json       -> shopping LIST (what my project needs)
//    node_modules/      -> shopping BAG (the actual downloaded code)
//    package-lock.json  -> exact receipt (exact versions installed)

//  WHY is node_modules not pushed to GitHub?
//    It's huge and can be rebuilt anytime from package.json
//    by running `npm install`. So add it to .gitignore.

/*
 node_modules      -> downloaded code of the PACKAGES my project uses (not my own code)
 package.json      -> data about project: name, version, scripts, list of needed packages
 package-lock.json -> exact versions installed (including packages' own dependencies)
 npm install       -> rebuilds node_modules from package.json
 npm init          -> creates package.json for my project (-y = default answers)
 scripts      -> shortcut commands, run with `npm run <name>`
 Dependencies are external packages that your project needs to run.
*/