const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

//connect to my atlas db 
const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;
const db = process.env.MONGO_DB;
const port = process.env.PORT || 5000;

mongoose.connect(`mongodb+srv://${user}:${pass}@recipeapp.9fyfw.mongodb.net/${db}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true })

const app = express();
const usersRouter = require('./routes/users');

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send(`Homepage up and running...`);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})