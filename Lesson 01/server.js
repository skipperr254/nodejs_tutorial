const os = require("os");
const path = require("path");
const math = require("./math"); // OR
const { add, subtract, multiply, divide } = require("./math");

console.log(math.add(2, 4));
console.log(add(2, 4));

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(os.hostname());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

// console.log(global);