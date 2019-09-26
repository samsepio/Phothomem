const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const ComentarySchema = Schema({
	users: {type: String},
	commentary: {type: String},
	image: {type: String},
	status:{
		type: Boolean,
		default: false
	}
});

module.exports=mongoose.model('Comentary',ComentarySchema);
