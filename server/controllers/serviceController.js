const service = require("../models/service");
const user = require('../models/user')
const review = require('../models/review')

const getServices = async (req, res) => {
  try {
    const { serviceType, sortByRate, location } = req.body;
    // console.log(req.body)
    if (serviceType=='all' && sortByRate=='none' && location=='none') {
      const randomRecords = await service.aggregate([
        { $sample: { size: 20 } },
      ]);


      return res.json(randomRecords);
    } else {
      const serviceFilter = serviceType=='all' ? {} :  { type: serviceType}
      const sortType = sortByRate=='none' ? 0 : sortByRate === "hightolow" ? -1 : 1;
      const locationFilter = location=='none' ? {} : {location};
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
