import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import authenticationPlugin from '../plugins/authentication.js';
import proxyRoutes from '../routes/proxy.js';
import rateLimit from '@fastify/rate-limit';
import helmet from '@fastify/helmet';
import cors from '@fastify/cors';

async function buildApp(): Promise<FastifyInstance> {
  const fastify: FastifyInstance = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname'
        }
      },
      serializers: {
        req: (req: FastifyRequest) => ({
          method: req.method,
          url: req.url,
          headers: req.headers,
          remoteAddress: req.socket.remoteAddress,
          remotePort: req.socket.remotePort
        }),
        res: (res: any) => ({ // Using 'any' for now to resolve type incompatibility
          statusCode: res.statusCode
        })
      }
    }
  });

  // Register security headers
  fastify.register(helmet);

  // Register CORS
  fastify.register(cors, {
    origin: ['https://manage.ruitotrading.com', 'https://shop.ruitotrading.com'],
    credentials: true
  });

  // Register rate limiting
  fastify.register(rateLimit, {
    max: 3, // Max requests per window
    timeWindow: '10 seconds' // Time window for rate limiting
  });

  // Register authentication plugin
  fastify.register(authenticationPlugin);

  // Register proxy routes
  fastify.register(proxyRoutes);

  return fastify;
}

export { buildApp };
