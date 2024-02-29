const express = require('express')
const router = express.Router({mergeParams:true})
const authController = require('./../controllers/authController')
const reviewController = require('./../controllers/reviewController')

router.route('/').post(
    authController.protect,
    reviewController.createReview)

router.route('/').get(
    authController.protect,
    authController.restrictTo('admin'),
    reviewController.getReviews)

module.exports = router