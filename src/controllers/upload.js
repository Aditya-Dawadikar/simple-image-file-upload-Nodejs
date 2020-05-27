const upload= require('../middleware/upload.js');

const uploadFile = async(req,res)=>{
	try{
		await upload(req,res);

		console.log(req.file);
		if(req.file==undefined){
			return res.send('you must select a file');
		}
		return res.send('file has been uploaded');
	}
	catch(err){
		console.log(error);
		return res.send('error while uploading image:${error}');
	}
};

module.exports={
	uploadFile:uploadFile
}