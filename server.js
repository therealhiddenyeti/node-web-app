'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/*', (req, res) => {
//  res.send('Hello World');
 res.statusCode = 200;
 res.setHeader("Content-Type", "text/html");    
 var path = req.url;
 switch(path){
 //switch (req.path) {
   case "/home":
     res.writeHead(200);
     res.end("This is Home page<p>");
     break;
   case "/about":
     res.writeHead(200);
     res.end("This is About page<p>");
     break;
   default:     
     res.writeHead(200);
     res.end("This is Default page.  Other pages are /home and /about and /yeti" + req.path);
     break;
 }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
