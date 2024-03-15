# Find My Protest

Find my Protest is a platform which displays historical and future protest data, allowing users to find events in Berlin based on their search criteria. Additionally, the platform can predict the mood, opinions, and reactions of the public towards protests.

## Routing: Frontend and Backend

Frontend routes constitute public, user-accessible URLs visible on the front end. In contrast, backend routes are inaccessible directly to users; instead, they serve as endpoints for the frontend to utilize in making API calls.

### 1. Running the project:

Clone the project's repository to your local machine by typing the following command in your terminal:

```bash
# CLONE REPOSITORY
git clone https://github.com/TechLabs-Berlin/ws24-mass-protest-across-countries.git
```

### 2. Starting the React client:

Open the `./client/` folder, install dependencies and start the React app by typing the following commands in your terminal:

```bash
# OPEN CLIENT FOLDER
cd client

# INSTALL DEPENDENCIES
npm i

# START REACT CLIENT
npm start
```

### 3. Starting the Express server and connecting to MongoDB:

Open the `./server/` folder, install dependencies and start the Express server app with the following terminal commands:

```bash
# OPEN SERVER FOLDER
cd server

# INSTALL DEPENDENCIES
npm i

# LOAD DATA IN MongoDB
node dbs.js image.js

# START EXPRESS SERVER
nodemon index.js
# or
node index.js
```

### 4. Navigating the Web App:

The React client runs on port 3000 in your local browser. To access the landing page, type the following address in your browser:

- https://localhost:3000

As shown in `./client/src/App.js`, the URLs path that can be accessed are '/', '/test-api' and /protests.

### 5. Navigating the API server:

The Express server runs on local port 8000. To access the api langing page, type this address in your browser:

- https://localhost:8000

As indicated in `./server/index.js`, accessible paths are '/', '/api/test' and /api/protests.

After running `nodemon index.js` once, the Express api server will automatically restart whenever `Save` or `Enter` is typed.
