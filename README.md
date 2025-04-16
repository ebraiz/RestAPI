# REST API Project

## Description
This project is a REST API built using Node.js and Express. It connects to a MongoDB database using Mongoose and provides endpoints for managing products.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd restapi
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
- To start the server in production mode:
  ```bash
  npm start
  ```
- To start the server in development mode with nodemon:
  ```bash
  npm run dev
  ```

## Dependencies
- dotenv: ^16.5.0
- env: ^0.0.2
- express: ^5.1.0
- mongoose: ^8.13.2
- nodemon (dev dependency): ^3.1.9

## Project Structure
- `app.js`: The main entry point of the application.
- `models/`: Contains the Mongoose models.
- `routes/`: Contains the route definitions.
- `controllers/`: Contains the logic for handling requests.
- `db/`: Contains the database connection logic.

## Environment Variables
Create a `.env` file in the root directory and add your MongoDB connection string and other environment variables as needed. 