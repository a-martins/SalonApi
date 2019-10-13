exports.addCustomerSchema = {
  description: 'Create a new customer',
  tags: ['customer'],
  summary: 'Creates new customer with given values',
  body: {
    type: 'object',
    properties: {
      cpf: { type: 'number' },
      name: { type: 'string' },
      genre: { type: 'string' },
      cellphone: { type: 'number' },
      email: { type: 'string' },
      zipcode: { type: 'number' },
      address: { type: 'string' },
      neighborhood: { type: 'string' },
      city: { type: 'string' },
      state: { type: 'string' },
      service: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          price: { type: 'string' },
          date: { type: 'string' },
          employee: { type: 'string' }
        }
      }
    }
  },
  response: {
    200: {
      description: 'Successfull response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        cpf: { type: 'number' },
        name: { type: 'string' },
        genre: { type: 'string' },
        cellphone: { type: 'number' },
        email: { type: 'string' },
        zipcode: { type: 'number' },
        address: { type: 'string' },
        neighborhood: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' },
        service: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            price: { type: 'number' },
            date: { type: 'string' },
            employee: { type: 'string' }
          }
        },
        __v: { type: 'number' }
      }
    }
  }
}
