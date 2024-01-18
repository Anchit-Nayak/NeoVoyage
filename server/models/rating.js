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
      service:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service',  
      }
  });

  const Rating = mongoose.model("rating", reviewSchema);

module.exports = Rating;