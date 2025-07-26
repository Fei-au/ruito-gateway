# ruito-gateway
Gateway for fastapi server, build on Fastify

## Project Setup and Running

To set up and run this Fastify gateway project, follow these steps:

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Project in Development Mode (with Hot Updating)

```bash
npm run dev
```

### 3. Run the Project in Production Mode

To start the Fastify server in a production-like environment (after building), use the `start` script defined in `package.json`. This will first compile the TypeScript code and then run the compiled JavaScript:

```bash
npm start
```

### 4. Build the Project (Optional)

If you only want to compile the TypeScript code to JavaScript without starting the server, you can use the `build` script:

```bash
npm run build
```

This will output the compiled JavaScript files to the `dist/` directory.

### 5. Project Structure

The project is organized into the following directories:
- `config/`: For configuration files (e.g., environment variables, application settings).
- `plugins/`: For Fastify plugins (e.g., authentication, custom decorators).
- `routes/`: For defining API routes and their handlers.
- `services/`: For core application logic and server setup.
- `types/`: For custom TypeScript declaration files.

