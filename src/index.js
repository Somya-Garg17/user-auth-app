

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebaseConfig';


import "./index.css";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
