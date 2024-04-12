<p align="center">
    <img src="https://github.com/TechLabs-Berlin/ws24-mass-protest-across-countries/blob/a7c95d1e3fe282c3caeb075d799388e80e9adc1f/App/client/public/fmplogo.png" alt="Find My Protest Logo" width="400" height="400">
</p>

<h1 align="center">Find My Protest</h1>

<p align="center">
  <a href="#demo">Demo</a> •
  <a href="#setup">Setup</a> •
  <a href="#team">Team</a>
</p>

---

Find my Protest is a platform which displays historical and future protest data, allowing users to find events in Berlin based on their search criteria. Additionally, through predictive analytics the platform shows crowd predictions of future protests, empowering users to make informed decisions and actively participate in events aligned with their values.

## Demo

https://drive.google.com/drive/folders/19AauH9hKPJSslkwdzg606HcCzV1-06Jy

## Setup

### 1. Requirements:

- [React](https://react.dev)
- [Bootstrap](https://react-bootstrap.netlify.app/)
- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [Mongoose](https://mongoosejs.com)
- [MongoDB](https://www.mongodb.com)

### 2. Running the project:

Clone the project's repository to your local machine by writing the following command in your terminal:

```bash
# CLONE REPOSITORY
git clone https://github.com/TechLabs-Berlin/ws24-mass-protest-across-countries.git
```

Then access the application in the `./App/`folder :

```bash
# OPEN CLIENT FOLDER
cd App
```

### 3. Starting the React client:

Open the `./client/` folder, install dependencies and start the React app by writing the following commands in your terminal:

```bash
# OPEN CLIENT FOLDER
cd client
```

```bash
# INSTALL DEPENDENCIES
npm i
# and if needed:
npm i react
```

```bash
# START RUNNING APP
npm start
```

### 4. Starting the Express server and loading the app data on MongoDB:

In a new terminal window, open the `./server/` folder, install dependencies and start the Express server with the following terminal commands:

```bash
# OPEN SERVER FOLDER
cd server
```

```bash
# INSTALL DEPENDENCIES
npm i
# and if needed:
npm i express mongoose
```

```bash
# LOAD DATA IN MongoDB
node seed.js
```

```bash
# START EXPRESS SERVER
node index.js
```

You are sucessfully connected if you can see the following lines in you terminal:

```bash
Serving on port 8000
Database connected
Database connected
```

### 5. Navigating the Web App:

The React client runs on port 3000 in your local browser. To access the landing page, type the following address in your browser:

- https://localhost:3000

As shown in `./client/src/App.js`, the URLs path that can be accessed are `/`, `/contact`, `/about`, `/login` as well as `/test-api` to make sure the backend server is successfully connected.

### 6. Navigating the API server:

The Express server runs on local port 8000. To access the api langing page, type this address in your browser:

- https://localhost:8000

As indicated in `./server/routes/router.js`, accessible paths are `/`, `/api/test`, `/api/protests` and `/api/search`.

## Team

### Contributors:

- DL: Tuğba Eraslanoğlu
- DS: Paula Hierzi, Irem Bayram
- UX: Mana Nosrati, Weronika Ajimati
- WD: Lydie Kouang (FE & BE), Annika Reynders (FE)

### Mentors:

- UX: Tatiana Olar
- WD: Aljoscha Beiers
- DS/DL: Rafael Saraiva
