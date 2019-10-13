const mongoose = require('mongoose')
require('mongoose-currency').loadType(mongoose)

var Schema = mongoose.Schema;
var Currency = mongoose.Types.Currency;

const CustomerSchema = new Schema({
  cpf: Number,
  name: String,
  genre: String,
  cellphone: Number,
  email: String,
  zipcode: Number,
  address: String,
  neighborhood: String,
  city: String,
  state: String,
  services: [{
    name: String,
    price: { type: Currency },
    date: Date,
    employee: String
  }]
})

module.exports = mongoose.model('Customer', CustomerSchema)
