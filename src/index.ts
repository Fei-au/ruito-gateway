import { buildApp } from './services/server.js';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';

// Determine the current environment
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';

// dotenv.config({ path: path.resolve(__dirname, envFile) });

const start = async () => {
  const fastify = await buildApp();
  try {
    const host = process.env.HOST || '127.0.0.1';
    const port = parseInt(process.env.PORT || '3000', 10);

    await fastify.listen({ port, host });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
