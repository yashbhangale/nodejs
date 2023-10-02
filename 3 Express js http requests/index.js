import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hell  o World!");
    });


app.get("/about", (req, res) => {
    res.send("about page");
    });


app.get("/Contact me ", (req, res) => {
    res.send("Contact page");
    });
    

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


