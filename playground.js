const fs = require("fs");
const chalk = require('chalk');

fs.writeFileSync('test.txt','Learn MySQL');

console.log(chalk.blue('Hello world!'));
console.log(chalk.bgYellow('ahuhu'));