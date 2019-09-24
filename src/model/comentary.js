const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const ComentarySchema = Schema({
	users: {type: String},
	commentary: {type: String}
});

module.exports=mongoose.model('Comentary',ComentarySchema);
