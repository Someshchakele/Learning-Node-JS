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
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log('server has started...')
})