//const { default: mongoose } = require('mongoose');

//var express = require('express'),
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://userid:userid@fwgweb2.f19x6.mongodb.net/?retryWrites=true&w=majority&appName=FWGWeb2')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);