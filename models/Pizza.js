const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
  size: {
    type: String,
    default: 'Large'
  },
  toppings: [],

  pizzaName: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },

});


// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;


