const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ImageSchema = Schema({
	title: {type: String},
	users: {type: String},
	image: {type: String},
	commentary: {type: String},
	description: {type: String},
	filename: {type: String},
    	path: {type: String},
    	originalname: {type: String},
    	mimetype: {type: String},
    	size: { type: Number},
	created_at: {type: Date, default: Date.now}
});

module.exports=mongoose.model('Image',ImageSchema);

