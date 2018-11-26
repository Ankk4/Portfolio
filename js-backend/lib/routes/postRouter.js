/* jshint node: true */
"use strict";
var express = require('express');
var postCtrl = require('../controllers/postCtrl');

var postRouter = function (Post) {	
	var router = express.router();
	postCtrl.setModel(Post); // Wtfg

	postCtrl.get(postCtrl.get);
	postCtrl.post(postCtrl.post);

	return router;
};

module.exports = {
  postRouter: postRouter
};

 
