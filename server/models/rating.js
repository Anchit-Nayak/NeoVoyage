const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    safetyRating: {
        type: Number,
        required: true,
      },
      priceRating: {
        type: Number,
        required: true,
      },
      honestyRating:{
        type: Number,
        required: true,
      },
    comment: {
        type: String,
        required: true
    },
  });

  const Review = mongoose.model("review", reviewSchema);

module.exports = Review;