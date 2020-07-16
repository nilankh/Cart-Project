import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import  'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDsnE9EfuEh0EXx41oLNSaP5GlXaKRLdTg",
  authDomain: "cart-dfd85.firebaseapp.com",
  databaseURL: "https://cart-dfd85.firebaseio.com",
  projectId: "cart-dfd85",
  storageBucket: "cart-dfd85.appspot.com",
  messagingSenderId: "729753412110",
  appId: "1:729753412110:web:e7cbed445e9293afd7d25f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

