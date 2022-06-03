const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database.js');
const routes = require('./routes/task.routes.js');
const path = require('path');


// Settings
app.set('port', process.env.PORT || 2112);

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', routes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => 
{
    console.log(`server start in PORT ${app.get('port')}`);
});