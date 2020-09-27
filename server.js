/********************************************************************************* * WEB322 – Assignment 1 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. * No part of this assignment has been copied manually or electronically from any other source * (including web sites) or distributed to other students. * * Name: Seyed Mohammad Ali Lohmousavi____ Student ID: 159309186____ Date: 9/27/2020__ * * Online (Heroku) URL: _______________________________________________________ * ********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require('express');
var app = express();

// setup a 'route' to listen on the default url path
app.get('/', (req, res) => {
	res.send('Seyed Mohammad Ali Lohmousavi - 159309186');
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, () => {
	console.log('app is running');
});
