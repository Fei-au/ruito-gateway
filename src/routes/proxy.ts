import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import fp from 'fastify-plugin';
import httpProxy from '@fastify/http-proxy';

const HOST = process.env.API_HOST;
const PORT = process.env.API_PORT;

async function proxyRoutes(fastify: FastifyInstance) {
  fastify.register(httpProxy, {
    upstream: `https://${HOST}:${PORT}`,
    prefix: '/api', // only proxies requests that contains '/api'
    rewritePrefix: '/api', // removes '/api' from the URL before forwarding
    http2: false, // Set to true if your upstream supports HTTP/2
  });

  // Route 2: Proxy to Service B
  fastify.register(httpProxy, {
    upstream: `https://${HOST}:${PORT}`,
    prefix: '/service-b', // Proxy requests starting with /service-b
    rewritePrefix: '/service-b', // Remove prefix before forwarding
  });
}

export default fp(proxyRoutes);
