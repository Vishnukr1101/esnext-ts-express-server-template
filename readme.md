
---

# ESNext + TypeScript Express Server Template

This is a template for building a Node.js server using **ESNext** with **TypeScript** and **Express**. It provides an efficient and modern server-side solution, with Babel for transpiling ESNext features and TypeScript for static typing.

## Features

- **Node.js**: The server uses Node.js as the runtime environment.
- **Express**: For building APIs and handling HTTP requests.
- **TypeScript**: Adds static typing to ensure type safety and catch errors during development.
- **ESNext**: Supports the latest JavaScript features (ESNext) and modules (ES modules).
- **Babel**: Handles transpiling ESNext syntax into code compatible with older versions of Node.js.

## Prerequisites

Before running the project, make sure you have:

- Node.js (version 18 or later)
- Yarn or npm as the package manager

## Project Structure

The folder structure for this template is organized as follows:

```
.
├── dist/               # Transpiled JavaScript files (output of the build)
├── public/             # Static assets served by the server
├── server/             # Source code for the server
│   ├── bin/            # Entry point for the server (www.ts)
│   ├── routes/         # Express routes (index.ts, users.ts)
│   └── app.ts          # Main Express app setup
├── .gitignore          # Ignored files for version control
├── package.json        # Node.js dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── yarn.lock           # Yarn lockfile for dependencies
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Vishnukr1101/esnext-ts-express-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd esnext-ts-express-server
   ```

3. Install the dependencies:

   ```bash
   yarn
   ```

## Running the Server

The server has several useful scripts defined in the `package.json`. Below is a breakdown of each script and its usage:

### `yarn dev`

This script runs the server in development mode. It sets the environment to `development`, builds the TypeScript files, and runs the server with live-reload using `nodemon`.

```bash
yarn dev
```

- **Command**: `set NODE_ENV=development npm-run-all build server`
- **What it does**: 
  1. Builds the project.
  2. Runs the server with development settings and restarts on file changes.

### `yarn build`

This script compiles the TypeScript code (`server/` folder) into JavaScript and outputs it into the `dist/` folder using `tsc`.

```bash
yarn build
```

- **Command**: `tsc`
- **What it does**: 
  1. Cleans the `dist/` folder.
  2. Transpile TypeScript code to JavaScript.

### `yarn start`

This script starts the server using the compiled code in the `dist/` folder. It is generally used for running the server in production mode.

```bash
yarn start
```

- **Command**: `node dist/bin/www`
- **What it does**: 
  1. Runs the server from the `dist/` folder (production mode).

### `yarn server`

This script runs the server from the `server/` folder with ESNext and TypeScript support, without requiring a build step. This is achieved by using `ts-node` or directly interpreting the source files.

```bash
yarn server
```

- **Command**: `set DEBUG=es6-sample-server:* & node ./server/bin/www`
- **What it does**: 
  1. Starts the server directly from the TypeScript files in development mode with debugging.

### `yarn test`

This script runs the tests defined in the project using **Jest**. You can write unit tests for your routes and other modules in the server.

```bash
yarn test
```

- **Command**: `jest`
- **What it does**: 
  1. Runs all tests under the `__tests__` directory or any test files.

### `yarn watch:dev`

This script watches for file changes and automatically restarts the server using `nodemon` during development.

```bash
yarn watch:dev
```

- **Command**: `nodemon`
- **What it does**: 
  1. Restarts the server when it detects file changes.

### `yarn clean`

This script deletes the `dist/` folder before rebuilding the project. It's useful for ensuring a clean build.

```bash
yarn clean
```

- **Command**: `rimraf dist`
- **What it does**: 
  1. Deletes the `dist/` folder to ensure a fresh build.

### `yarn transpile`

This script transpile the TypeScript files from `server/` to the `dist/` folder using Babel.

```bash
yarn transpile
```

- **Command**: `babel ./server --out-dir dist`
- **What it does**: 
  1. Transpile TypeScript and ESNext code to JavaScript compatible with older Node.js versions.

### `yarn prod`

This script runs the server in production mode. It builds the project first and then runs the server using the production build.

```bash
yarn prod
```

- **Command**: `set NODE_ENV=production npm-run-all build server`
- **What it does**: 
  1. Builds the project.
  2. Runs the server in production mode.

## TypeScript Configuration

The project is configured with TypeScript using the `tsconfig.json` file. Here are some key settings:

- **target**: ES6 (ECMAScript 2015) or later.
- **module**: ESNext (ES Modules) for modern JavaScript syntax.
- **rootDir**: `server/` folder for source files.
- **outDir**: `dist/` folder for transpiled JavaScript files.
- **strict**: Enables strict type-checking options.

## License

This project is licensed under the MIT License.

---

This template provides a solid foundation for building modern, type-safe Node.js applications using Express, TypeScript, and ESNext features. Feel free to customize and extend this template as needed for your own project requirements.

Let me know if you need further clarifications!