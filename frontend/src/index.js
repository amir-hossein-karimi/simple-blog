import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDL2s3Fj-n5d4XNTbwi8NXJWkDF373Fras",
  authDomain: "simple-blog-28360.firebaseapp.com",
  projectId: "simple-blog-28360",
  storageBucket: "simple-blog-28360.appspot.com",
  messagingSenderId: "608099153113",
  appId: "1:608099153113:web:fca1e20d0f328d8f83fac8",
};

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
