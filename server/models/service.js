const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
    ownedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    type: {
        type: String,
        enum: ['restaurant', 'transportation', 'accommodation', 'attraction'],
        required: true,
      },
    name: {
      type: String,
      required: true,
    },
    description: String,
    location: {
      type: String,
      required: true,
    },
    image: {
        type: String,
        required: true,
      },
      rating:{
        type: String,
        required: true
      }
    
  });

  const Service = mongoose.model("service", servicesSchema);

module.exports = Service;