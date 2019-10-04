const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = Schema ({
	users:{type: String},
	message:{type: String}
});

module.exports = mongoose.model('chats',chatSchema);
