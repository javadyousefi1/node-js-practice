const fs = require('fs');


console.log("readfile start")
fs.readFile("./package.json", (err, data) => {
    if (err) return err
    console.log(data.toString());
})
console.log("readfile done")


console.log("readfile sync start")
const text = fs.readFileSync("./file.text", "utf-8")
console.log(text)
console.log("readfile sync done")