const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

try{
    await client.connect();
}
catch (e){
    console.error(e);
}
finally{
    client.close();
}

// app.js file
var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })


// Returns an Express router
var router = jsonServer.router('db.json');

server.use(router);

server.listen(3000, 'ebanban.dev');