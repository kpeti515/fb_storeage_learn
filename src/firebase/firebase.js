import * as firebase from "firebase/app"
require('dotenv').config()

console.log(process.env.API_KEY);
var firebaseConfig = {
  apiKey: JSON.stringify(process.env.API_KEY),
  authDomain: JSON.stringify(process.env.AUTH_DOMAIN),
  databaseURL: JSON.stringify(process.env.DATABASE_URL),
  projectId: JSON.stringify(process.env.PROJECT_ID),
  storageBucket: JSON.stringify(process.env.STORAGE_BUCKET),
  messagingSenderId: JSON.stringify(process.env.MESSAGING_ID),
  appId: JSON.stringify(process.env.APP_ID),
  measurementId: JSON.stringify(process.env.MEASUREMENT_ID)
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();
const storageRef = storage.ref();
export const pswRef = storageRef.child('psw')
