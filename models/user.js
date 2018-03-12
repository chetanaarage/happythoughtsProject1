const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');

// var addressSchema=mongoose.Schema({
// 	address:{
// 		street:{type:String,required:true},
// 		landmark:{type:String,required:true},
// 		postalcode:{type:Number,required:true},
// 		city:{type:String,required:true},
// 		state:{type:String,required:true}
// 	}
// });

var UserSchema=mongoose.Schema({
	firstname:{type:String,required:true},
	lastname:{type:String,required:true},
	//dob:{type:Date,required:true},
	//address:[addressSchema],
	// address:{
	// 	street:String,
	// 	landmark:String,
	// 	postalcode:Number,
	// 	city:String,
	// 	state:String,
	// 	},
	//address:[addressSchema],
	mobno:{type:Number,required:true},
	email: {type:String,required:true},
	username:{type:String,required:true},
	password:{type:String,required:true},
	resetPasswordToken:String,
	resetPasswordExpires:Number
})


const User=module.exports=mongoose.model('users',UserSchema);
//module.exports=mongoose.model('Address',addressSchema);

module.exports.getuserById=function(id,callback){
	User.findById(id,callback);
}

module.exports.getUserByName=function(username,callback){
	const query={username:username};
	User.findOne(query,callback);
}

module.exports.addUser=function(newUser,callback){
	bcrypt.genSalt(10,function(err,salt){
		bcrypt.hash(newUser.password,salt,function(err,hash){
			if(err) throw err;
			newUser.password=hash;
			newUser.save(callback);
		});
	});
}

module.exports.comparePassword=function(userPassword,hash,callback){
	bcrypt.compare(userPassword,hash,function(err,isMatch){
		if(err) throw err;
		callback(null,isMatch);
	})
}
