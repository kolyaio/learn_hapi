'use strict' 

const Hapi = require('hapi')

const server = Hapi.server({
    host: 'localhost',
    port: 3000
})

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello, World'
    }
})

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    }
})

const init = async  () => {
    await server.register(require('inert'))

    server.route({
        method: 'GET', 
        path: '/hello',
        handler: (request, h) => {
            return h.file('./public/hello.html');
        }
    })

    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1)
})

init();