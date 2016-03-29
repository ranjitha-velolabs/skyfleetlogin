var express = require('express');
var router = express.Router();
var passport = require('passport');
var request = require('request');
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local' ).Strategy;
var accounts = require('../public/models/session.js');

// =========================================================================
// LOCAL SIGNUP ============================================================
// =========================================================================
// we are using named strategies since we have one for login and one for signup
// by default, if there was no name, it would just be called 'local'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("Auth Connected");
passport.serializeUser(function(user, done) {
    console.log("hellllllooo");
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    console.log("hellllllo");
    accounts.findById(id, function(err, user) {
        console.log("hellllllo");
        done(err, user);
    });
});
passport.use('register', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, username, password, done) {
        findOrCreateUser = function(){
            // find a user in Mongo with provided username
            accounts.findOne({'username':username},function(err, user) {
                // In case of any error return
                if (err){
                    console.log('Error in SignUp: '+err);
                    return done(err);
                }
                // already exists
                if (user) {
                    console.log('User already exists');
                    return done(null, false);
                } else {
                    // if there is no user with that email
                    // create the user
                    var newUser = new accounts();
                    // set the user's local credentials
                    newUser.username = username;
                    newUser.password = newUser.generateHash(password);
                    newUser.email = req.param('email');
                    newUser.firstname = req.param('firstname');
                    newUser.lastname = req.param('lastname');
                    newUser.regid = req.param('regid');
                    // save the user
                    newUser.save(function(err) {
                        if (err){
                            console.log('Error in Saving user: '+err);
                            throw err;
                        }
                        console.log('User Registration succesful');
                        return done(null, newUser);
                    });
                }
            });
        };

        // Delay the execution of findOrCreateUser and execute
        // the method in the next tick of the event loop
        process.nextTick(findOrCreateUser);
    })
);
/*router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));*/
/*router.post('/register',function(req, res,next) {

    request({
        url: 'https://skylock-beta.herokuapp.com/api/v1/users/', //URL to hit
        method: 'POST',
        //Lets post the following key/values as form
        json: {
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            user_id: req.body.username,
            password: req.body.password,
            fb_flag: "0",
            reg_id: req.body.regid,
            email: req.body.email
        }
    }, function (error, response, body) {
        //console.log("H");
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
            /!*passport.authenticate('local')(req, req.body.username,req.body.password,req.body.firstname,req.body.lastname,req.body.regid,
                req.body.email,function (err, user, info) {
                    return res.status(200).json({
                        status: 'Registration successful!'
                    });
                });*!/

        }
    })*/
    router.post('/register', function(req, res) {
        request({
            url: 'https://skylock-beta.herokuapp.com/api/v1/users/', //URL to hit
            method: 'POST',
            //Lets post the following key/values as form
            json: {
                first_name: req.body.firstname,
                last_name: req.body.lastname,
                user_id: req.body.username,
                password: req.body.password,
                fb_flag: "0",
                reg_id: req.body.regid,
                email: req.body.email
            }
        }, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                console.log(response.statusCode, body);
            }
        })
        passport.authenticate('register')(req, res, function () {
            return res.status(200).json({
                status: 'Registration successful!'
            });
        });
    });
passport.use('login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        // check in mongo if a user with username exists or not
        console.log(req.body);
        console.log(password);
        accounts.findOne({ 'email' :  email },
            function(err, user) {
                // In case of any error, return using the done method
                if (err)
                    return done(err);
                // Username does not exist, log the error and redirect back
                if (!user){
                    console.log('User Not Found with email '+email);
                    return done(null, false);
                }
                // User exists but wrong password, log the error
                if (!new accounts().validPassword(user, password)){
                    console.log('Invalid Password');
                    return done(null, false); // redirect back to login page
                }
                // User and password both match, return user from done method
                // which will be treated like success
                return done(null, user);
            }
        );

    })
);
/*var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        console.log("hello");
        return next();
    // if the user is not authenticated then redirect him to the login page
    console.log("helloak");
    res.redirect('/');
}*/
router.get('/home', function(req, res, next) {

        console.log("helllop");
    res.status(200).json({
        status: 'you need to login First!'
    });

});
router.post('/login', function(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }
            res.status(200).json({
                status: 'Login successful!',
                name: user.firstname
            });
    })(req, res, next);

});
router.get('/profile',function(req, res, next) {
    /*passport.authenticate('profile', function(req,res,next) {*/

        /*if (!res) {
            return res.status(401).json({
                status: 'Server Error!'
            });
        }*/

        res.status(200).json({
            status: 'Welcome!'
        });
    /*})(req, res, next);*/

});
router.get('/logout',function(req, res) {
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});

/*router.get('/logout', function(req, res) {
   if ( !req.isAuthenticated() ) {

        // you are not even logged in, wtf
        /!*!/!*res.redirect( '/' );

        return;*!/!*!/
console.log("helloak");
    }

    var sessionCookie = req.cookies['connect.sid'];

    if ( ! sessionCookie ) {

        // nothing to do here
       /!*!/!* res.redirect( '/' );*!/

        /!*return;*!/!*!/
        console.log("helloopak");
    }

    var sessionId = sessionCookie.split( '.' )[0].replace( 's:', '' );

    thinky.r.db( 'test' ).table( 'session' ).get( sessionId ).delete().run().then( function( result ) {

        if ( ! result.deleted ) {

            // we did not manage to find session for this user
            /!*!/!*res.redirect( '/' );

            return;*!/!*!/
            console.log("helloop");
        }

       /!* /!*req.logout();
        res.redirect( '/' );

        return;*!/!*!/

    });
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});*/

            /*router.post('/register',function(req, res) {


    request({
        url: 'https://skylock-beta.herokuapp.com/api/v1/users/', //URL to hit
        method: 'POST',
        //Lets post the following key/values as form
        json: {
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            user_id: req.body.username,
            password: req.body.password,
            fb_flag: "0",
            reg_id: req.body.regid,
            email: req.body.email
        }
    }, function (error, response, body) {
        //console.log("H");
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
            User.findOne({'username': req.body.username}, function (err, result) {
                if (result == null) {
                    var o = new User();
                    o.username = req.body.username;
                    o.password = o.generateHash(req.body.password);
                    o.firstname = req.body.firstname;
                    o.lastname = req.body.lastname;
                    o.regid = req.body.regid;
                    o.email = req.body.email;
                    o.save(function (err) {
                        if (err) {
                            throw err;
                        }
                        console.log("helllllij");

                    });
                    account.register(new account({ username: req.body.username }),
                        req.body.password, function(err, account) {
                            if (err) {
                                return res.status(500).json({
                                    err: err
                                });
                            }
                            passport.authenticate('local')(req, res, function () {
                                return res.status(200).json({
                                    status: 'Registration successful!'
                                });
                            });
                        })
                }
            })
        }
    });

});
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(500).json({
                    err: 'Could not log in user'
                });
            }
            res.status(200).json({
                status: 'Login successful!'
            });
        });
    })(req, res, next);
});

router.get('/logout', function(req, res) {
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});

router.get('/status', function(req, res) {
    if (!req.isAuthenticated()) {
        return res.status(200).json({
            status: false
        });
    }
    res.status(200).json({
        status: true
    });
});*/
});

module.exports = router;