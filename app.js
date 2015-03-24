'use strict';

var express = require('express');

var app = express();
app.use(require('connect-livereload')());

app.use(express.static('./node_modules'));
app.use(express.static('./dist'));
app.use(express.static('./src'));

app.listen(3000, function () {
    console.log('Server started');
});
