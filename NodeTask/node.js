const express = require('express');
const route = require('./route')

const app = express();

app.listen(3000, function(){
    console.log('Server started on port 3000...'); 
}); 
