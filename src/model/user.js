const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const bcrypt=require('bcrypt-nodejs');

const userSchema = Schema({
	email:{type: String},
	password:{type: String}
});

userSchema.methods.encryptPassword = (password) => {
	bcrypt.hashSync(password,bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (passwrod) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users',userSchema);
