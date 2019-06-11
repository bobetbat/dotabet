const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser')



const app = express();

//Body Parser
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db, {useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

//API Route
app.use('/challenges', require('./routes/api/challenges'))
app.use('/matched', require('./routes/api/matched'))



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));