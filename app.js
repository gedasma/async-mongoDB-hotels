const express = require('express');
const app = express();
app.use(express.json())
const hotelsRoutes = require('./routes/hotelRoutes')
const userRoutes = require('./routes/userRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const morgan = require('morgan')


app.use(morgan('dev'))
 
 
//Mounting router
app.use('/api/v1/hotels',hotelsRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/reviews',reviewRoutes);

module.exports = app