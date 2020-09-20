const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri,{useCreateIndex: true});

// const connection = mongoose.connection;

// connection.once('open',()=>{
//    console.log('Mongo database connection established');
// });


mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
.then(() => console.log('connecting to database successful'))
.catch(err => console.error('could not connect to mongo DB', err))

const usersRouter = require('./routes/user');
app.use('/users',usersRouter);


app.listen(port,()=>{
   console.log(`Server is runninhg on: ${port}`);
})

