const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const Food = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 30
  },
  carbohydrates: String, // Угливоды
  dryWeight: String, // Вес сухого продукта
  finishedProductWeight: String, // Вес готового продукта
})

module.exports = new mongoose.model('foods', Food)
