import Fastify from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import rateLimit from '@fastify/rate-limit';

async function buildApp() {
  const fastify = Fastify({
    logger: true
  });

  // Register rate limiting
  fastify.register(rateLimit, {
    max: 100, // Max requests per window
    timeWindow: '1 minute' // Time window for rate limiting
  });

  // Register authentication plugin (placeholder)
  fastify.register(fastifyPlugin(async (fastify, options) => {
    fastify.decorate('authenticate', async (request, reply) => {
      // Authentication logic will go here
      // For now, just a placeholder
      request.log.info('Authentication placeholder called');
    });
  }), { name: 'authentication-plugin' });

  // Proxy routes
  fastify.get('/api/*', async (request, reply) => {
    await fastify.authenticate(request, reply);
    // Forward request to api.ruitotrading.com
    reply.send(`Proxying to api.ruitotrading.com for ${request.url}`);
  });

  fastify.post('/api/*', async (request, reply) => {
    await fastify.authenticate(request, reply);
    // Forward request to api.ruitotrading.com
    reply.send(`Proxying to api.ruitotrading.com for ${request.url}`);
  });

  fastify.get('/log/*', async (request, reply) => {
    await fastify.authenticate(request, reply);
    // Forward request to log.ruitotrading.com
    reply.send(`Proxying to log.ruitotrading.com for ${request.url}`);
  });

  fastify.post('/log/*', async (request, reply) => {
    await fastify.authenticate(request, reply);
    // Forward request to log.ruitotrading.com
    reply.send(`Proxying to log.ruitotrading.com for ${request.url}`);
  });

  return fastify;
}

export { buildApp };
