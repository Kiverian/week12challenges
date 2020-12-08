// var greeting = 'HELLO WORLD';

// console.log(greeting);

// var total = 0;
// for (i = 2; i < process.argv.length; i++)
// total = total + parseInt(process.argv[i]);
// console.log(total);

// var fs = require('fs');
// var readMe = fs.readFileSync(process.argv[2], "utf8")
// ;const readMeArray = readMe.split("\n");
// console.log(readMeArray.length - 1);

// var fs = require('fs');
// var readMe = fs.readFile(process.argv[2], (err, data) => {
//     if(err) throw err;
//     const file = data.toString();
//     console.log(file.split('\n').length - 1)
// })

const fs = require('fs');
const path = require('path')
fs.readdir(process.argv[2], (err, data) => {
    if (err) throw err;
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (path.extname(element) === ".md" || "") {
            console.log(element)
        }
    }
})