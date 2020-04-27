const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../config/keys").secret;
const User = require("../../models/User");

/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */
router.post('/register', (req, res) => {
    let { name, surname, email, password, confirm_password } = req.body;

    if (password !== confirm_password){
        return res.status(400).json({
           msg: "Password do not match."
        });
    }

    User.findOne({ email: email }).then(user => {
       if(user){
           return res.status(400).json({
               msg: "Email is already registered."
           })
       }
    });

    let newUser = new User({
        name,
        surname,
        email,
        password
    });

    bcrypt.genSalt(10, (err, salt) => {
       bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
             return res.status(201).json({
                success: true,
                 msg: "User is now registered."
             });
          });
       });
    });
});

/**
 * @route POST api/users/login
 * @desc Sign in the User
 * @access Public
 */
router.post('/login', (req, res) => {
   User.findOne({ email: req.body.email }).then(user => {
       if(!user){
           return res.status(404).json({
               msg: "Email is not found.",
               success: false
           });
       }

      bcrypt.compare(req.body.password, user.password).then(isMatch => {
         if(isMatch){
             const payload = {
                 _id: user.id,
                 name: user.name,
                 surname: user.surname,
                 email: user.email
             }
             jwt.sign(payload, key, {
                 expiresIn: 604800
             }, (err, token) => {
                res.status(200).json({
                    success: true,
                    user: user,
                    token: `Bearer ${token}`,
                    msg: "You are logged in."
                });
             });
         } else {
             return res.status(404).json({
                msg: "Incorrect password.",
                success: false
             });
         }
      });
   });
});

/**
 * @route GET api/users/profile
 * @desc Return the Users date
 * @access Public
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

router.get('/', (req, res) => {
    User.find({ admin: { $not: { $eq: true } } }) // cannot show admins if need to change please tell
        .then(users => {
            return res.json({
                users: users
            });
        });
});

router.delete('/:id', (req, res) => {
   User.deleteOne({_id: req.params.id})
       .then(user => {
          return res.json({
             user: user
          });
       });
});

module.exports = router;

/*
* {
	"name": "Jan",
	"surname": "Nowak",
	"email": "jan.n@email.com",
	"password": "123123123",
	"confirm_password": "123123123"
}
* */