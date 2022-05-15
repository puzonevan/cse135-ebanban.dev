let MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost:27017';

// app.js file
var jsonServer = require('json-server');
const bodyParser= require('body-parser')


// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({ extended: true }))

// Add custom routes
server.get('/static', (req, res) => { 
    MongoClient.connect(url)
    .then(client => {
        const db = client.db('api');
        const static = db.collection('static');
        static.find().toArray()
        .then(results => res.json(results));
    });
});

server.post('/static', (req, res) => {
    
    MongoClient.connect(url)
    .then(client => {
        const db = client.db('api');
        const static = db.collection('static');
        static.insertOne(req.body);

        static.find().toArray()
        .then(results => res.json(results));
    });
});


// Returns an Express router
var router = jsonServer.router('db.json');

server.use(router);

server.listen(3000);