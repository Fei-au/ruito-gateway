# ruito-gateway
Gateway for fastapi server, build on Fastify

## Project Setup and Running

To set up and run this Fastify gateway project, follow these steps:

### 1. Clone the Repository

If you haven't already, clone the repository to your local machine:

```bash
git clone https://github.com/Fei-au/ruito-gateway.git
cd ruito-gateway
```

### 2. Install Dependencies

Navigate to the project directory and install the required Node.js packages:

```bash
npm install
```

### 3. Run the Project in Development Mode (with Hot Updating)

For development, you can run the server with hot updating. This will automatically restart the server when you make changes to your TypeScript files.

```bash
npm run dev
```

### 4. Run the Project in Production Mode

To start the Fastify server in a production-like environment (after building), use the `start` script defined in `package.json`. This will first compile the TypeScript code and then run the compiled JavaScript:

```bash
npm start
```

The server will typically run on `http://localhost:3000`. You will see log messages in your terminal indicating that the server has started.

### 5. Build the Project (Optional)

If you only want to compile the TypeScript code to JavaScript without starting the server, you can use the `build` script:

```bash
npm run build
```

This will output the compiled JavaScript files to the `dist/` directory.

### 6. Project Structure

The project is organized into the following directories:
- `config/`: For configuration files (e.g., environment variables, application settings).
- `plugins/`: For Fastify plugins (e.g., authentication, custom decorators).
- `routes/`: For defining API routes and their handlers.
- `services/`: For core application logic and server setup.
- `types/`: For custom TypeScript declaration files.
