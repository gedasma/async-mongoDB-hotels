const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    review:{
        type:String,
        required: [true, 'Review must have a review message'],
    },
    rating:{
        type:Number,
        required:[true, 'Must have a rating'],
        min:[1,'Ranking must be above 1'],
        max:[5,'Ranking must be up to 5']
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false 
    },
    hotel:{
            type:mongoose.Schema.ObjectId,
            ref:'Hotel',
            required: [true, 'review must belong to a hotel']
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required: [true, 'review must belong to a user']
    }
})

reviewSchema.pre(/^find/, function(next){
    this.populate({
        path:'hotel',
        select:'name'
    }).populate({
        path:'user',
        select:'name'
    })

    next()
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;