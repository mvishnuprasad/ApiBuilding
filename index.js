import express from 'express';
import routes from './src/routes/crmRoutes';    

var app = express();
const PORT = 4000;
routes(app);
app.get ('/', (req, res) => {
    res.send(`Hello World Server on ${PORT} `);
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});