const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({    

    name: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    photo: String,
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select:false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function(val){
                return val == this.password;
            },
            message: 'Password & Confirm Password does not match!'
        }
    }
});

userSchema.pre('save' , async function(next){
if(!this.isModified('password')) return next();

this.password = await bcrypt.hash(this.password, 12);
this.passwordConfirm =  undefined;
next();
})

userSchema.methods.comparePasswordInDb = async function(pswd , pswDB){
    return await bcrypt.compare(pswd,pswDB)
}

const User = mongoose.model('User', userSchema);

module.exports = User;