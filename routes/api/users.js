const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

// User Model

const User = require('../../models/User')

// @route POST api/users
// @route Registier new user
// @access Public

router.post('/',(req,res) =>{
 const {name,email,password} = req.body

 // Simple validation
 if(!name || !email || !password){
     return res.status(400).json({msg: 'Please enter all fields'})
 }

 // check for exiting user
 User.findOne({ email })
 .then(user => {
     if(user) return res.status(400).json({msg: 'User already exists'})

     const NewUser = new User({
         name,
         email,
         password
     });

     // Create salt & hash
     bcrypt.genSalt(10,(err,salt)=>{
         bcrypt.hash(NewUser.password, salt, (err,hash)=>{
          if(err) throw err;
          NewUser.password = hash
          NewUser.save()
          .then(user => {

            jwt.sign(
                {id : user.id},
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token)=>{
                    if(err) throw err;
                    res.json({
                        token,
                        user:{
                            id: user.id,
                            name:user.name,
                            email: user.email
                        }
                    });
                }
            )
              
          })    
         })
     })
 })
})





module.exports =  router