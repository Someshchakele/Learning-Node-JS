
const app = require('./app')

console.log("env",process.env)
console.log(app.get('env'));
const port = 3000;
app.listen(port, ()=>{
    console.log('server has started...')
})