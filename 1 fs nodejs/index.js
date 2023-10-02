const fs = require("fs");

fs.writeFile("hellos.txt", "Hello World", (err) => {
    if (err) throw err;
    console.log("File created");
  });
fs.readFile("hello.txt", "utf8", (err,data) => {
    if (err) throw err;
    console.log(data);
  });






