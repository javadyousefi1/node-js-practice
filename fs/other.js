const fs = require('fs');

fs.appendFile("writefile.txt", "\nappend method", "utf-8", (err) => console.log(err));

const checkExsit = fs.existsSync("file.text")

if (checkExsit) {
    fs.unlink("file.text", (err) => console.log(err));
} else {
    console.log("file not exists")
}


fs.mkdir("new-folder", { recursive: true }, (err) => console.log(err));
setTimeout(() => {
    fs.rmdir("new-folder", (err) => console.log(err))
}, 3000)