import { initializeApp } from "firebase/app";
import {initializeAuth, browserLocalPersistence } from "firebase/auth";
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: 'AIzaSyAzguS8LaJtqxF3oL5S_RWPxmwXvv9hBYM',
    databaseURL: 'https://trainingdiary-becca-default-rtdb.firebaseio.com/',
    storageBucket: 'gs://trainingdiary-becca.appspot.com'
}

export const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {persistence: browserLocalPersistence})
export const storage = getStorage(app)