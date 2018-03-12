const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var session=require('express-session');
const cors=require('cors');
const mongoose=require('mongoose');
const passport=require('passport');
const nodemailer=require('nodemailer');
const config=require('./config/database');
const MongoStore=require('connect-mongo')(session);
const flash=require('express-flash');
var async = require('async');
var crypto = require('crypto');
const bcrypt=require('bcryptjs');
//var helmet = require('helmet');
//require('./routes/paypal');

var app=express();
var port=process.env.PORT || 3000;

const users=require('./routes/users');
const User=require('./models/user');
const paypal=require('./routes/paypal');

//connect to DB
mongoose.connect(config.database);

//
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error...'));
db.once('open',function callback(){
	console.log("Connected to DB...");

});
//cors middleware
app.use(cors());
app.use(flash());

// app.use(function(req, res, next) {
//      res.setHeader("Content-Security-Policy", "script-src  'self' 'unsafe-inline' 'unsafe-eval' https://*.paypalobjects.com https://*.paypal.com");
    
//     return next();
// });
// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//passport middleware
app.use(cookieParser());
app.use(session({
	secret:'login page',
	resave:false,
	saveUnintialized:false,
	store:new MongoStore({mongooseConnection:db}),
	cookie:{maxAge:180*60*1000}
}));
app.use(passport.initialize());
app.use(passport.session());
//set static folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'images')));


require('./config/passport')(passport);

app.use(function(req,res,next){
	res.locals.login=req.loggedIn;
	res.locals.session=req.session;
	next();
});

app.use('/users',users);
app.use('/paypal',paypal);

app.get('/',function(req,res){
	res.send('hello world..!!!');
});


app.get('*',function(req,res){
	res.sendFile(path.join(__dirname,'public/index.html'));
})

app.listen(port,function(req,res){
	console.log('Server listening on port..'+port);
});

app.get('/reset/:token', function(req, res) {
	//console.log("req.params.token",req.params.token)
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {

      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.json({success:false});
    }
     console.log("user in reset:token",user);
    // return res.json({success:true,user});
    //res.send("reset");
    // res.render('reset/${user.resetPasswordToken}', {
    //   user: req.user
    // });

  });
});

app.post('/reset/:token',function(req,res,next){

	console.log("req.params.token",req.params.token);
	async.waterfall([

	function(done) {
      
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          return res.json({success:false,msg:'User not found'});
        }

        bcrypt.genSalt(10,function(err,salt){
		bcrypt.hash(req.body.password,salt,function(err,hash){
			if(err) throw err;
			user.password=hash;
			user.save(function(err){
        if (err) throw err;
      });

			});
		});

        //user.password = User.addUser(req.body.password);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        

        user.save(function(err) {
          //req.logIn(user, function(err) {
          	console.log("user in post resetPasswordToken",user);
            done(err, user);
          //});
        });
        //console.log("user",user);
      });
  },
  function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: "yashradhika37@gmail.com",
          pass: "yash1234"
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'yashradhika37@gmail.com',
        subject: 'Your Password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        return res.json({success:true,msg:'Success! Your password has been changed.'});
      });

    }

	]);

});


