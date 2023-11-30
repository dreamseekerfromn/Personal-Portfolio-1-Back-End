# SY's Web Socket Involving Chat App (backend)

SY's Web Socket Involving Chat App is a web application implementing web socket to communicate backend continuously, sending and receiving messages with other users in real time. 

[Frontend URL](meek-lolly-48851f.netlify.app) 
[Frontend Github](https://github.com/dreamseekerfromn/Personal-Portfolio-1-Front-End)
[Backend URL](https://personal-portfolio-1-back-end.onrender.com)
[Backend Github](https://github.com/dreamseekerfromn/Personal-Portfolio-1-Back-End)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)

## Getting Started

This backend application is written in regular node.js implementing socket.io and express.
Basic queries are written in PostgreSQL.

To run this backend server, simply type npm run start.
To initialize database, simply type npm run dbinit.

You might need following environmental variables to run this application.

PORT
PORT2
PG_DATABASE
DATABASE_URL
PG_HOST
PG_DATABASE
PGUSER
PG_PASSWORD

For schema.sql, u might need following sql command in the first line.
```
DROP DATABASE IF EXISTS chat_db_dev;
CREATE DATABASE chat_db_dev;

\c chat_db_dev;
```

### Prerequisites

Simply run following command to install all required dependencies.
```
    npm i
```

Following dependencies required to run this application.
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "nodemon": "^3.0.1",
    "pg-promise": "^11.5.4",
    "socket.io": "^4.7.2"

### Installation

Run following command to install all the dependencies that are required.
```
   npm i
```

## Usage

Run following command will run the backend server.
```
    npm run start
```

## Acknowledgments

This application is still developing, so check later for more update.