let MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost:27017';

// app.js file
var jsonServer = require('json-server');
const bodyParser= require('body-parser')


// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }))

server.use('/static', (req, res, next) => {
    MongoClient.connect(url)
    .then(client => {
        const db = client.db('api');
        const static = db.collection('static');

        switch(req.method){
            case "GET": 
                static.find();
                break;
            case "POST": 
                static.insertOne(req.body);
                break;
        }

        next();
    });
});
server.use('/static/:id', (req, res, next) => {
    MongoClient.connect(url)
    .then(client => {
        const db = client.db('api');
        const static = db.collection('static');

        switch(req.method){
            case "PUT": 
                static.replaceOne({ "id": req.params.id }, req.body);
                break;
            case "DELETE": 
                static.deleteOne({ "id": req.params.id });
                break;
        }

        next();
    });
});

server.use('/performance', (req, res, next) => {
    MongoClient.connect(url)
    .then(client => {
        const db = client.db('api');
        const static = db.collection('performance');

        switch(req.method){
            case "GET": 
                static.find();
                break;
            case "POST": 
                static.insertOne(req.body);
                break;
        }

        next();
    });
});
server.use('/performance/:id', (req, res, next) => {
    MongoClient.connect(url)
    .then(client => {
        const db = client.db('api');
        const static = db.collection('performance');

        switch(req.method){
            case "PUT": 
                static.replaceOne({ "id": req.params.id }, req.body);
                break;
            case "DELETE": 
                static.deleteOne({ "id": req.params.id });
                break;
        }

        next();
    });
});

server.use('/activity', (req, res, next) => {
    MongoClient.connect(url)
    .then(client => {
        const db = client.db('api');
        const static = db.collection('activity');

        switch(req.method){
            case "GET": 
                static.find();
                break;
            case "POST": 
                static.insertOne(req.body);
                break;
        }

        next();
    });
});
server.use('/activity/:id', (req, res, next) => {
    MongoClient.connect(url)
    .then(client => {
        const db = client.db('api');
        const static = db.collection('activity');

        switch(req.method){
            case "PUT": 
                static.replaceOne({ "id": req.params.id }, req.body);
                break;
            case "DELETE": 
                static.deleteOne({ "id": req.params.id });
                break;
        }

        next();
    });
});

// Returns an Express router
var router = jsonServer.router('db.json');

server.use(router);


server.listen(3000);