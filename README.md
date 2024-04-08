# Find My Protest

Find my Protest is a platform which displays historical and future protest data, allowing users to find events in Berlin based on their search criteria. Additionally, the platform shows crowd predictions of future protests as well as the mood, opinions, and reactions of the public towards protests.

## Routing: Frontend and Backend

Frontend routes constitute public, user-accessible URLs visible on the front end. In contrast, backend routes are inaccessible directly to users; instead, they serve as endpoints for the frontend to utilize in making API calls.

### 1. Running the project:

Clone the project's repository to your local machine by typing the following command in your terminal:

```bash
# CLONE REPOSITORY
git clone https://github.com/TechLabs-Berlin/ws24-mass-protest-across-countries.git
```

Then access the application in the folder `./App/`.

```bash
# OPEN CLIENT FOLDER
cd App
```

### 2. Starting the React client:

In a new terminal window, open the `./client/` folder, install dependencies and start the React app by typing the following commands:

```bash
# OPEN CLIENT FOLDER
cd client

# INSTALL DEPENDENCIES
npm i

# START REACT CLIENT
npm start
```

### 3. Starting the Express server and loading the app data on MongoDB:

Open the `./server/` folder, install dependencies and start the Express server app with the following terminal commands:

```bash
# OPEN SERVER FOLDER
cd server

# INSTALL DEPENDENCIES
npm i

# LOAD DATA IN MongoDB
node seed.js

# START EXPRESS SERVER
node index.js
```

You are sucessfully connected if can see the following lines in you terminal:

```bash
Serving on port 8000
Database connected
Database connected
```

### 4. Navigating the Web App:

The React client runs on port 3000 in your local browser. To access the landing page, type the following address in your browser:

- https://localhost:3000

As shown in `./client/src/App.js`, the URLs path that can be accessed are `/`, `/protests-analytics` and `/test-api` making sure the backend server is successfully connected.

### 5. Navigating the API server:

The Express server runs on local port 8000. To access the api langing page, type this address in your browser:

- https://localhost:8000

As indicated in `./server/index.js`, accessible paths are `/`, `/api/test`, `/api/protests` and `/api/protests/search`.
