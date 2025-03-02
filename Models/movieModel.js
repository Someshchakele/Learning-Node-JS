const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path');
const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true , 'Name is required '],
        unique: true,
        maxlength:[100 , "Movie length is greater than 100 character"],
        minlength:[4 , "Movie length should be greater than 4 character"],


    },
    description: String,
    duration: {
        type: Number,
        required:[true , 'Duration is required ']
    },
    ratings:{type: Number , default:1.0}
},
{
    toJSON:{virtuals:true},
    toObject:{virtuals:true},
})

movieSchema.virtual('durationHours').get(function(){
    return this.duration / 60;
})

movieSchema.pre('save', function(next){
   this.createdBy = 'MANOJJHA';
   next();
})

movieSchema.post('save',function(doc,next){
    const content = `A new movie ${doc.name}\n`
    const filePath = path.join(__dirname, '/../Log/log.txt');
   fs.appendFileSync(filePath, content, {flag:'a'} ,(err)=>{
    console.log(err.message);
   })
   next();
 })

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;