/* jshint node: true */
"use strict";
const 	express 	= require('express'),
    	bodyParser 	= require('body-parser'),
    	morgan 		= require('morgan');

const frontpageRouter = require('./routes/frontPage.js');
const app = express();

app
	.use(morgan)
    .use(bodyParser)
    .use(frontpageRouter);

app.get('/', function(req, res) {
    // Root
});

app.listen(8080, console.log("Listening on 8080"));

