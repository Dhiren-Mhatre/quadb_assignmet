# Cryptocurrency Data Aggregator API

This project is a Node.js-based application that fetches cryptocurrency data from WazirX API and stores it in a PostgreSQL database. The application allows you to retrieve random cryptocurrency data or specific cryptocurrency information via API endpoints.

## Features

- Fetches real-time cryptocurrency data from the [WazirX API](https://api.wazirx.com/api/v2/tickers).
- Stores cryptocurrency data in PostgreSQL.
- Provides API endpoints to retrieve random cryptocurrency data or specific cryptocurrency details.
- Automatically updates the database with new cryptocurrency information at regular intervals.
  
## Technologies Used

- **Node.js**: Backend server and API logic.
- **Express**: Web framework for building RESTful APIs.
- **Axios**: For making HTTP requests to the WazirX API.
- **PostgreSQL**: Relational database to store cryptocurrency data.
- **pg**: PostgreSQL client for Node.js.
- **dotenv**: For managing environment variables.
- **Nodemon**: For automatically restarting the server during development.
- **Morgan**: Logging middleware for HTTP requests.

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL database setup and running.
- An API client like Postman (optional, for testing the API endpoints).

### Clone the Repository
git clone https://github.com/yourusername/cryptocurrency-data-aggregator.git
cd cryptocurrency-data-aggregator
# Install Dependencies
- npm install
### Environment Variables
Create a .env file in the root directory and configure your PostgreSQL database credentials:
# .env file

DB_USER=postgres
DB_HOST=localhost
DB_NAME=quadb
DB_PASSWORD=your_password
DB_PORT=5432

### Running the Application
- To start the server, run:
- npm start
