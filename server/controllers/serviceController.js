const service = require("../models/service");
const user = require('../models/user')
const review = require('../models/review')
const rating = require('../models/rating')
const moment = require('moment')

const getServices = async (req, res) => {
  try {
    const { serviceType, sortByRate, location } = req.body;
    // console.log(req.body)
    if (serviceType=='all' && sortByRate=='none' && location=='All Categories') {
      const randomRecords = await service.aggregate([
        { $sample: { size: 20 } },
      ]);
      const recordsWithReviewCount = await Promise.all(
        randomRecords.map(async (record) => {
          return {...record, reviewCount: await review.countDocuments({ service: record._id })}
        })
      )


      return res.json(recordsWithReviewCount);
    } else {
      const serviceFilter = serviceType=='all' ? {} :  { type: serviceType}
      const sortType = sortByRate=='none' ? 0 : sortByRate === "hightolow" ? -1 : 1;
      const locationFilter = location=='All Categories' ? {} : {location};
      let records;
      if(!sortType){
        records = await service
        .find({ ...serviceFilter, ...locationFilter })
      }
      else{
        records = await service
        .find({ ...serviceFilter, ...locationFilter })
        .sort({ rating: sortType });
      }
      const recordsWithReviewCount = await Promise.all(
        records.map(async (record) => {
          return {...record._doc, reviewCount: await review.countDocuments({ service: record._id })}
        })
      )
      return res.json(recordsWithReviewCount);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server error" });
  }
};

const postReview = async (req,res,next) => {
    try{
        const {userId,comment,serviceId} = req.body;
        const User = await user.findById(userId)
        if(!User) return res.status(404).json({message:"User Not Found"})
        const Review = await review.create({user:userId, service:serviceId, comment,epoch:moment().unix()})
        const totalReviews = await review.countDocuments({service:serviceId})
        if(totalReviews>=3) await service.findByIdAndUpdate(serviceId,{verified:true})
        res.status(200).json({message:"Review Posted Successflly!"})

    } catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server error"})
    }
}

const getServiceDetails = async (req,res) => {
    try{
        const {serviceId} = req.params
        const serviceDetails = await service.findById(serviceId).lean();
        if(!serviceDetails) return res.status(404).json({message:"No Such Service Found"})
        const owner = await user.findById(serviceDetails.ownedBy);
        const reviews = await review.find({service: serviceId}).populate('user','fullName')
        // console.log({...serviceDetails, owner: owner.fullName, reviews})
        res.json({...serviceDetails, owner: owner.fullName, reviews})

    } catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server error"})
    }
}

const rateService = async (req,res) => {
  try{
    const {userId,serviceId,safetyRating,honestyRating,priceRating} = req.body;
    // console.log(req.body)
    const userRating = await rating.create({user:userId,service:serviceId,safetyRating,honestyRating,priceRating});
    const serviceDetails = await service.findById(serviceId).lean();
    const updateRating = await service.findByIdAndUpdate(serviceId,{
      safetyRating : ((safetyRating+serviceDetails.safetyRating)/2).toFixed(1),
      honestyRating : ((honestyRating+serviceDetails.honestyRating)/2).toFixed(1),
      priceRating : ((priceRating+serviceDetails.priceRating)/2).toFixed(1) })
    res.json({message:"Rating Completed"})

  } catch(err){
    console.log(err)
    res.status(500).json({message:"Internal Server Error"})
  }
}

module.exports = { getServices, postReview, getServiceDetails, rateService };
