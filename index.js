const express = require('express'); 
const serverPort = 8000; 
const app =  express (); 
const data = require('./data.js');
const cors = require('cors');

app.use(cors());

// define the index route

app.get('/', (req, res) => {
    console.log(data); 
    console.log('A new request just hit the API!')
    res.send(data)
});

//...define the API routes here ...

app.listen(serverPort, () => console.log(data));
 