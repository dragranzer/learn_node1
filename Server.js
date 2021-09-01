let http = require('http');
let fs = require('fs');
let express = require('express');
let app = express();

const PORT=8080; 
app.use('/img', express.static('img')); 
app.use(express.static('public'));  
// app.listen(PORT, () => {
//     console.log(`Running server on PORT ${PORT}...`); 
// })
fs.readFile('public/home.html', function (err, html) {

    if (err) throw err;
    
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
// fs.readFile('./home.html', function (err, html) {

//     if (err) throw err;
    
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });
