const express = require ('express');
require('dotenv/config')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const cors = require ('cors')

const routes = require ('./routes')

const  app = express();

app.use(cors())
app.use(bodyParser.json())
app.use('/api', routes)

app.get('/', (req,res) => {
    res.send('Hey Code Queen');
});

// CONNECT TO DATABASE
mongoose.connect(process.env.MONGODB_LINK)
.then(()=>{console.log('Connected to the database')})
.catch(err =>{console.log('ERROR', err)})



app.listen(process.env.PORT, () =>{
    console.log('Connected to ports');
});

