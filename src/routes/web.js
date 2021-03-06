const express= require("express");
const router = express.Router();
const homeController = require("../controllers/home.js");
const uploadController = require('../controllers/upload.js');

let routes = app=>{
	router.get('/',homeController.getHome);

	router.post('/upload',uploadController.uploadFile);

	return app.use("/",router);	
};

module.exports = routes;