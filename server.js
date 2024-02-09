const app = require('./app')

const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

// console.log(DB)
mongoose.connect(DB)
.then(con=>{
    console.log(con.connections)
    console.log('Connected to DATABASE')
})

const port = process.env.PORT;
 
app.listen(port,()=>{
    console.log(`Server runing at port: ${port}`);
})
 
 