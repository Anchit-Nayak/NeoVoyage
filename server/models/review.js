const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service',
        required: true,
      },
    comment: {
        type: String,
        required: true
    },
    epoch: {
      type: Number,
      required: true
    }
  });

  const Review = mongoose.model("review", reviewSchema);

module.exports = Review;