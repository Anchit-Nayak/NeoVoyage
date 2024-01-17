const service = require("../models/service");

const getServices = async (req, res) => {
  try {
    const { serviceType, sortByRate, location, all } = req.body;
    if (all) {
      const randomRecords = await service.aggregate([
        { $sample: { size: 20 } },
      ]);

      console.log(randomRecords);
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

module.exports = { getServices };
