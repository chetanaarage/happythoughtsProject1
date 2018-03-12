const express=require('express');
var router=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
var async = require('async');
var crypto = require('crypto');
const config=require('../config/database');
const User=require('../models/user');
//const Address=require('../models/user');


router.post('/register',function(req,res,next){
	// var address=new Address ({
	// 		street:req.body.street,
	// 		landmark:req.body.landmark,
	// 		postalcode:req.body.postalcode,
	// 		city:req.body.city,
	// 		state:req.body.state
	// })
 	// var newUser=new User(req.body);
 	//console.log(newUser);
 	// var address={
		// 	street:req.body.street,
		// 	landmark:req.body.landmark,
		// 	postalcode:req.body.postalcode,
		// 	city:req.body.city,
		// 	state:req.body.state
		// }
	var newUser= new User({
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		//dob:req.body.dob,
		email:req.body.email,
		mobno:req.body.mobno,
		username:req.body.username,
		password:req.body.password
		//address:{street:"chetana"}
		// address:{
		// 	street:req.body.address.street,
		// 	landmark:req.body.address.landmark,
		// 	postalcode:req.body.address.postalcode,
		// 	city:req.body.address.city,
		// 	state:req.body.address.state
		// }
	});


	console.log("newUser",newUser)
	User.addUser(newUser,function(err,user){
		if(err){
			res.json({success:false,msg:'Registration failed'});
		}
		else
		{
			res.json({success:true,msg:'Registration done..!!'});
		}
	});
});


router.post('/authenticate',function(req,res,next){
	const username=req.body.username;
	const password=req.body.password;

	User.getUserByName(username,function(err,user){
		if(err) throw err;
		if(!user){return res.json({success:false,msg:'User not found'});}
		User.comparePassword(password,user.password,function(err,isMatch){
			if(err) throw err;
			if(isMatch){
				var token= jwt.sign(user,config.secret,{
				expiresIn:604800//1 week
			});
				res.json({
					success:true,
					token:'Bearer '+token ,
					user:{
						id:user._id,
						name:user.name,
						username:user.username,
						password:user.password
					}
				});
			}else{
				return res.json({success:false,msg:'Wrong password'});
			}
		});
	});
});


router.post('/forgottenPassword',function(req,res,next){
	async.waterfall([

	function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
      //console.log("token",token);
  },
  function(token, done) {
      const email=req.body.email;
	User.findOne({email:email},function(err,user){
		if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }
        user.resetPasswordToken=token;
        user.resetPasswordExpires=Date.now() +3600000;
        console.log('user',user);
        user.save(function(err) {
        	done(err,token,user);
        });
        //console.log('user');

	});
    },
    function(token,user,done){
    	//console.log("inside token,user,done ",token,user);
		var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: "yashradhika37@gmail.com",
          pass: "yash1234"
        }
      });
		//console.log("req.headers.host ",req.headers.host);
      var mailOptions = {
        to: user.email,
        from: 'yashradhika37@gmail.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'https://' + 'guarded-fjord-37074.herokuapp.com' + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
      	//console.log('An e-mail has been sent to ',mailOptions);
        //req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        //done(err, 'done');
        //res.sendStatus(200);
        return res.json({success:true,token:mailOptions.token,msg:'An e-mail has been sent to ' + user.email + ' with further instructions.'});
      });

	 }

	]);

});



router.get('/profile',passport.authenticate('jwt-bearer',{session: false}),function(req,res,next){
	console.log('in users profile route');
	res.json({user:req.user});
});


module.exports=router;
