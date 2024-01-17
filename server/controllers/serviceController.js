const service = require("../models/service");

const getServices = async (req, res) => {
  try {
    const { serviceType, sortByRate, location, all } = req.body;
    if (all) {
      const randomRecords = await service.aggregate([
        { $sample: { size: 20 } },
      ]);

    //   console.log(randomRecords);
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

module.exports = { getServices, postReview };
