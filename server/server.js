var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var config = require('./config');
var tasks = require('./routes/tasks.js');

var port = process.env.PORT || config.serverport;

var options = {
  useMongoClient: true
}

mongoose.connect(config.database, options, function(err){
    if(err){
        console.log('Error connecting to database. Please check mongodb is running.');
    } else {
        console.log('Connected to database');
    }
});

var connection = mongoose.connection;

//mongoose.Promise = global.promise;

mongoose.connection.on('open', function(){
    console.log('We have connected to mongodb');
});

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('body-parser').json({ type : '*/*' }));

// use morgan to log requests to the console
app.use(morgan('dev'));

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// basic routes

app.get('/', function(req, res) {
	res.send('Todos API is running at http://localhost:' + port + '/api');
});

var apiRoutes = express.Router();

app.use('/api', apiRoutes);

apiRoutes.get('/', function(req, res){
    res.status(201).json({ message: 'Welcome to the api requests!' });
});

apiRoutes.get('/tasks', tasks.getTasks); // API returns all the tasks

apiRoutes.get('/tasks/:id', tasks.getTask); // API returns task details matching the given id

apiRoutes.delete('/tasks/:id', tasks.deleteTask); //API delete the task matching the given id 

apiRoutes.post('/tasks', tasks.createTask); //API to create a task

// kick off the server 
app.listen(port);
console.log('My Todos app is listening at http://localhost:' + port);