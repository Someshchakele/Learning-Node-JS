const express = require('express');
const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const CustomError =  require('./../Utils/customErrors')

const signToken =  id =>{
  return jwt.sign({id}, process.env.SECRET_STR,{expiresIn :process.env.LOGIN_EXPIRES})
}

exports.signup = async (req, res, next) => {  
  const newUser = await User.create(req.body);

  const token = signToken(newUser._id)
    res.status(201).json({  
        status: 'success',
        token,
        data: {
            user: newUser
        }
        });
       
    };

    exports.login = async (req,res,next)=>{
      const email = req.body.email;
      const password = req.body.password;

      if(!email || !password){
        const error = new CustomError('Please provide Email Id and Password', 400);
        return next(error)
      }

      const user =  await User.findOne({email:email}).select('+password');

      const isMatch = await user.comparePasswordInDb(password , user.password);

      if(!user || !isMatch){
        const error = new CustomError('Incorrect email or password', 400);
        return next(error);
      }

      const token = signToken(user._id)
      
      res.status(200).json({  
        status: 'success',
        token,
       
        });

    }

    exports.protect = async(req,res,next)=>{
      const testToken = req.headers.authorization;
      let token;
      if(testToken && testToken.startsWith('bearer')){
        token = testToken.split(' ')[1];
      }
      console.log(token)
      if(!token){
        next(new CustomError('You are noy logged in'))
      }
      next()
    }