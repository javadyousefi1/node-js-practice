const fs = require('fs');

const data = "hi i am wrote by js\n"
fs.writeFile("writefile.txt", data, { flag: "a" }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("ok")
    }
})


fs.writeFileSync("writeSync.txt", data + "sync\n", { flag: "a" })