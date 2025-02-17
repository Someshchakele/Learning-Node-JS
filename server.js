const mongoose = require('mongoose')
const dotenv = require('dotenv');
const app = require('./app')

dotenv.config({path:'./config.env'});

console.log("env",process.env)
console.log(app.get('env'));

mongoose.connect(process.env.CONN_STR,{
    useNewUrlParser: true
}).then((conn)=>{
    console.log("DB Connection Successful")
}).catch((error)=>{
    console.log("Some error occured")
})

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
})

const Movie = mongoose.model('Movie', movieSchema)

const testMovie =  new Movie({
    name:"hard",
    description:"sfdgdfhsdfhsdf",
    duration:112,
    ratings:3.0
})
testMovie.save().then((doc)=>{console.log(doc)}).catch(err=>console.log("error occured"))
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log('server has started...')
})