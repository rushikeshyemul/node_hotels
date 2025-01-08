let _ = require("lodash");
// LODASH IS A PACKAGE USED TO HELP MATH OPERATIONS
// _ is the convention for lodash

let arr = [1, 2, 1, 1, "Rushi", "Yemul", "John", 7, 23];

let unique = _.uniq(arr);
let Sort = _.sortBy(arr);

console.log(unique);
console.log(Sort);
