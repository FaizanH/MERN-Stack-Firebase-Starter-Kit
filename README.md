# MERN-Stack-Firebase-Starter-Kit

<<<<<<< HEAD
A template I've put together to help get up and running with MERN stack on Google Firebase. <sub>^</sub> React.JS runs on Firebase Hosting while the server-side Node.JS, Express.JS, MongoDB run in Firebase Functions.
=======
A template I've put together to help get up and running with MERN stack on Google Firebase <sup>1</sup>. React.JS runs on Firebase Hosting while the server-side Node.JS, Express.JS, MongoDB run in Firebase Functions.
>>>>>>> 14ae219750e9b4d404470bc00aac9b83a5664d7b

## Getting Started

Start Localhost React App in ./
```
> npm start
```
Start Localhost emulators in ./functions
```
> firebase emulators:start --only functions
```
`Make sure to install dependencies before running commands using npm install`

## Walkthrough
### Creating React App

```
> npm i --save create-react-app
> sudo create-react-app <app-name>
```

### Initialising Firebase

```
> firebase init
```
`Note: Make sure you select Firebase Hosting and Functions.`

For testing, disable ESLint and SPA (Single Page Application)

### Creating Node Server

Add to index.js in /functions
``` javascript
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ATLAS_URI = "";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// Add Routes here
/*
const exampleRouter = require("./routes/example");
app.use("/example", exampleRouter);
*/

exports.app = functions.https.onRequest(app);
```
`Note: Add routes and models as required`

### Adding components to React App
With React now running, we can start building our frontend

Create basic component in /src/components
```javascript
import React, { Component } from "react";

export default class Example extends Component {
    
    render() {
        return (
            <div>This is an example Component</div>
        );
    }
}
```

Import libraries and add basic Router to App.js
```javascript
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";

import Example from "./components/example.component";

function App() {
  return (
    <Router>
      {/* Display Example Component */}
      <div className="container-fluid">
        <Example />
      </div>
    </Router>
  );
}

export default App;
```

### Endpoint URL

    (Local)
    http://localhost:5001/<project-name>/<region>/<function-name>
    
    (Staging)
    https://<project-name>.firebaseapp.com

------------
<sub>^</sub> Google Firebase Documentation: https://firebase.google.com/docs?hl=en
