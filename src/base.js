import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmRsXCdNX0J8y_lTfObDurhVOpq8_KRTA",
  authDomain: "catch-of-the-day-nico-martinez.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-nico-martinez.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
