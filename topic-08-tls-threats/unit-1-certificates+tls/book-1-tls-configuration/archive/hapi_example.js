'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
  port: 3000
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return 'Hello, world!';
    }
});

async function init() {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
