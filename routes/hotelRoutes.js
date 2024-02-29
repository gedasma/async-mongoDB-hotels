const express = require('express')
const router = express.Router()
const hotelController = require('./../controllers/hotelController')
const authController = require('./../controllers/authController')

const reviewRouter = require('./../routes/reviewRoutes')

router
.route('/top-5-best')
.get(hotelController.aliasTopHotels, hotelController.getAllHotels) 
// router.param('id', hotelController.checkID)

router
.route('/')
.get(authController.protect, hotelController.getAllHotels)
.post(hotelController.checkBody, hotelController.createHotel)
router.route('/:id')
    .get(hotelController.getHotel)
    .patch(hotelController.updateHotel)
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        hotelController.deleteHotel)
router.use('/:hotelId/reviews', reviewRouter)
module.exports = router