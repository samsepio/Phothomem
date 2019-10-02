const mongoose=require('mongoose');
const Schema = mongoos.Schema;
const bcrypt=require('bcrypt-nodejs');

const userSchema = Schema({
	email:{type: String},
	password:{type: String}
});

userSchema.methods.encryptPassword = (password) => {
	bcrypt.hashSync(password,bcrypt.gentSaltSync(10));
};

userSchema.methods.comparePassword = function (passwrod) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users',userSchema);
