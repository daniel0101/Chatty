const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);
const port = 8000;


app.get('/', function(req, res){
    return res.status(200).send({
        success: true
    });
})


server.listen(port,() => {
    console.log(`server running on port ${port}`);
})