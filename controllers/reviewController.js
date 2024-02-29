const Review = require('./../models/reviewModel')

exports.getReviews = async (req,res)=>{
    try{
        let filter = {}
        if(req.params.hotelId) filter = {hotel: req.params.hotelId}
        const reviews = await Review.find(filter)
        res
        .status(200)
        .json({
            status:'success',
            results:reviews.length,
            data:{
                reviews
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
    
};

exports.createReview = async (req, res)=>{
    console.log(req.params)
    try{
        if(!req.body.hotel) req.body.hotel = req.params.hotelId
        if(!req.body.user) req.body.user = req.user.id
        const newReview = await Review.create(req.body)
        res
        .status(201)
        .json({
            status:'success',
            message: "New review created",
            data: newReview
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
};
 