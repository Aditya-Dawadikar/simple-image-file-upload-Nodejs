const path= require('path');
const home=(req,res)=>{
	return res.sendFile(path.resolve('src/views/index.html'));
};

module.exports = {
	getHome:home
};