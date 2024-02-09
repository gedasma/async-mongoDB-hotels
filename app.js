const express = require('express');
const app = express();
app.use(express.json())
const hotelsRoutes = require('./routes/hotelRoutes')
const morgan = require('morgan')


app.use(morgan('dev'))
 
 
//Mounting router
app.use('/api/v1/hotels',hotelsRoutes);

 
 


module.exports = app