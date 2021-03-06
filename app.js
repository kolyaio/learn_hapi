'use strict' 

const Hapi = require('hapi')

const server = Hapi.server({
    host: 'localhost',
    port: 8080
})

server.route({
    method: 'GET', 
    path: '/hello',
    handler: function(request, h) {
        return 'Hello World'
    }
})

async function start() {
    try {
        await server.start()
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
    console.log('Server runnig at: ', server.info.uri)
}

start()