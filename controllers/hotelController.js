const fs = require('fs')
const Hotel = require('./../models/hotelModel')

//Hotels data
 
const hotels = JSON.parse(fs.readFileSync(`${__dirname}/../data/hotels.json`));

//Callbacks

exports.getAllHotels = async (req,res)=>{
    try{
        const hotels = await Hotel.find()
        res
        .status(200)
        .json({
            status:'success',
            results:hotels.length,
            data:{
              hotels
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
    
};
 
exports.createHotel = async (req, res)=>{
    try{
        const newHotel = await Hotel.create(req.body)
        res
        .status(201)
        .json({
            status:'success',
            message: "New hotel created",
            data: newHotel
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
};
 
exports.getHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res
    .status(200)
    .json({
        status:'success',
        data:{
            hotel
        }
    })
    }
    catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
 
};
 
exports.updateHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators: true
        })
        res
        .status(200)
        .json({
            status:'success',
            message: "Hotel Updated",
            data: {
                hotel
            }
    })
    }
    catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
    
};
 
exports.deleteHotel = (req,res)=>{
    res
    .status(200)
    .json({
        status:'success',
        message: "Hotel deleted",
        data: null
    })
};

exports.checkID = (req, res, next) => {
    const hotel = hotels.find((hotel) => hotel.id == req.params.id);
    if (req.params.id > hotels.length)
    {
        res.status(404).json({
            status: 'failure',
            message: 'invalid ID',
        })
 
        return
    }
 
    req.hotel = hotel
    next()
}