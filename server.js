const express = require ('express');
require('dotenv/config')


const  app = express();


app.get('/', (req,res) => {
    res.send('Hey Code Queen');
});

app.listen(process.env.PORT, () =>{
    console.log('Connected to ports');
});

