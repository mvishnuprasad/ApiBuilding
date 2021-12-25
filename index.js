import express from 'express';
var app = express();
const PORT = 4000;
app.get ('/', (req, res) => {
    res.send(`Hello World Server on ${PORT} `);
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});