import { buildApp } from './services/server';
import dotenv from 'dotenv';
import path from 'path';

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';
dotenv.config({ path: path.resolve(path.dirname(__dirname), envFile) });

const start = async () => {
  const fastify = await buildApp();
  try {
    const host = process.env.HOST || '127.0.0.1';
    const port = parseInt(process.env.PORT || '3000');  
    await fastify.listen({ port, host });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

