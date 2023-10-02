import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => { // port
    console.log(`Server listening on port ${port}.`); //callback
    }
);