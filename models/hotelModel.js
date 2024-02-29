const mongoose = require('mongoose')
const User = require('./../models/userModel')

const hotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Hotel must have a name'],
        unique:true
    },
    address:{
        type:String,
        required:[true, 'Must have address']
    },
    rankingAverage:{
        type:Number,
        default:4.5,
        min:[1,'Ranking must be above 1'],
        max:[5,'Ranking must be up to 5']
    },
    room_price:{
        type:Number,
        required:[true, 'A hotel must have a price']
    },
    price_discount:{
        type:Number
    },
    comfort:{
        type:String,
        required:[true,'A hotel must jave a stars level'],
        enum:{
            values: ['1', '2', '3', '4', '5', '6', '7']
        }
    },
    summary:{
        type:String,
        trim:true,
        required:[true, 'A hontel must have a summary']
    },
    description:{
        type:String,
        trim:true
    },
    image_cover:{
        type:String,
        required:[true, 'A hotel must have an image cover']
    },
    //child ref
    managers:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'User'
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false 
    }
},
{
    toJSON: {virtuals:true},
    toObject: {virtuals: true}
}
)

// hotelSchema.pre('save', async function(){
//     const managersPromises = this.managers.map(async id => User.findById(id))
//     this.managers = await Promise.all(managersPromises)
// })

hotelSchema.virtual('reviews', {
    ref:'Review',
    foreignField:'hotel',
    localField:'_id'
})


const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel;