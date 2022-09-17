import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseContext.Provider value={{ firebase }}>
    <App />
  </FirebaseContext.Provider>
);
