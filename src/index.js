const mongoose = require('mongoose')
const fastify = require('fastify')({
  logger: true
})
const routes = require('./routes')
const swagger = require('./config/swagger')

fastify.register(require('fastify-swagger'), swagger.options)

mongoose.connect('mongodb://localhost/salondb')
  .then(() => console.log('MongoDB connectec...'))
  .catch(err => console.log(err))

routes.forEach((route, index) => {
  fastify.route(route)
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.swagger()
    fastify.log.info('server listening on ${fastify.server.address().port}')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
