var lodash = require('lodash');
var array = [1];
var other = lodash.concat(array, 2, [3], [[4]]);
console.log(other)