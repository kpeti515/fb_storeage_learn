import * as firebase from "firebase/app"
import 'firebase/analytics'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const supplierContactDb = firebase.firestore().collection('supplierContact')
export const pswDb = firebase.firestore().collection('psw')
export const projectDb = firebase.firestore().collection('projects')


export const storage = firebase.storage()
export const storageRef = firebase.storage().ref()
export const pswStore = firebase.storage().ref().child('psw')
