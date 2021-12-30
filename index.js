import express from 'express';
import routes from './src/routes/crmRoutes';    
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

var app = express();
const PORT = 4000;
//mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {

useNewUrlParser: true,
useUnifiedTopology: true
});
//bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


routes(app);
app.get ('/', (req, res) => {
    res.send(`Hello World Server on ${PORT} `);
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});