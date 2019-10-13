const customerController = require('../controllers/CustomerController')
const documentation = require('../documentations')

const routes = [
  {
    method: 'GET',
    url: '/api/customers',
    handler: customerController.getCustomers
  },
  {
    method: 'GET',
    url: '/api/customers/:id',
    handler: customerController.getSingleCustomer
  },
  {
    method: 'POST',
    url: '/api/customers',
    handler: customerController.addCustomer,
    schema: documentation.addCustomerSchema
  },
  {
    method: 'PUT',
    url: '/api/customers/:id',
    handler: customerController.updateCustomer
  },
  {
    method: 'DELETE',
    url: '/api/customers/:id',
    handler: customerController.deleteCustomer
  }
]

module.exports = routes
