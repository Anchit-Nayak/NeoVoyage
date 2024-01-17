const service = require("../models/service");
const user = require('../models/user')
const review = require('../models/review')

const getServices = async (req, res) => {
  try {
    const { serviceType, sortByRate, location, all } = req.body;
    if (all) {
      const randomRecords = await service.aggregate([
        { $sample: { size: 20 } },
      ]);


      return res.json(randomRecords);
    } else {
      const sortType = sortByRate === "hightolow" ? -1 : 1;
      const records = await service
        .find({ type: serviceType, location })
        .sort({ rating: sortType });
      return res.json(records);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server error" });
  }
};

const postReview = async (req,res,next) => {
    try{
        const {userId,comment,service} = req.body;
        const user = await user.findById(userId)
        if(!user) return res.status(404).json({message:"User Not Found"})
        const review = await review.create({user,userId, service, comment})
        res.status(200).json({message:"Review Posted Successflly!"})

    } catch(err){
        consolr.log(err)
        res.status(500).json({message:"Internal Server error"})
    }
}

const getServiceDetails = async (req,res) => {
    try{
        const {serviceId} = req.params
        const serviceDetails = await service.findById(serviceId).lean();
        if(!serviceDetails) return res.status(404).json({message:"No Such Service Found"})
        const owner = await user.findById(serviceDetails.ownedBy);
        const reviews = await review.find({service: serviceId})
        // console.log({...serviceDetails, owner: owner.fullName, reviews})
        res.json({...serviceDetails, owner: owner.fullName, reviews})

    } catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server error"})
    }
}

module.exports = { getServices, postReview, getServiceDetails };
