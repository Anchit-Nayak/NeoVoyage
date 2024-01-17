const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  type: {
    type: String,
    enum: ['restaurant', 'transportation', 'accommodation', 'attraction'],
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: String,
});

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  location: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  ratings: Number,
  
});

const transportationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  location: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  ratings: Number,
  
});

const accommodationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  location: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  ratings: Number,
  
});

const attractionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  location: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  ratings: Number,

});

const servicesSchema = new mongoose.Schema({
  restaurants: [restaurantSchema],
  transportation: [transportationSchema],
  accommodations: [accommodationSchema],
  attractions: [attractionSchema],

});

const Services = mongoose.model('Services', servicesSchema);

module.exports = Services;
