const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true , 'Name is required '],
        unique: true

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

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;