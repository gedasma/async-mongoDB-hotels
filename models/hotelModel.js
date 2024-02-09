const mongoose = require('mongoose')

const hotelShema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Hotel must have a name'],
        unique:true
    },
    address:{
        type:String,
        required:[true, 'Must have address']
    },
    ranking:{
        type:String,
        default:1.2
    },
    room_price:{
        type:Number,
        required:[true, 'A hotel must have a price']
    }
})

const Hotel = mongoose.model('Hotel', hotelShema)

module.exports = Hotel;