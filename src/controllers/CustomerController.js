const boom = require('boom')
const Customer = require('../models/Customer')

exports.getCustomers = async (req, reply) => {
  try {
    const customer = await Customer.find()
    return customer
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getSingleCustomer = async (req, reply) => {
  try {
    const id = req.params.id
    const customer = await Customer.findById(id)
    return customer
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.addCustomer = async (req, reply) => {
  try {
    const customer = new Customer(req.body)
    return customer.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.updateCustomer = async (req, reply) => {
  try {
    const id = req.params.id
    const customer = req.body
    const { ...updateData } = customer
    const update = await Customer.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.deleteCustomer = async (req, reply) => {
  try {
    const id = req.params.id
    const customer = await Customer.findByIdAndRemove(id)
    return customer
  } catch (err) {
    throw boom.boomify(err)
  }
}
