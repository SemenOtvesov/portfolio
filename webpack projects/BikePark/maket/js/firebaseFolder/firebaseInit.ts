import { initializeApp } from "firebase/app";
import {initializeAuth, browserLocalPersistence } from "firebase/auth";
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: 'AIzaSyD7IO7b1GBjM7BdqyVjPhOyA4A-l-i5e_0',
    databaseURL: 'https://bikepark-7ad7e-default-rtdb.firebaseio.com/',
    storageBucket: 'gs://bikepark-7ad7e.appspot.com/'
}

export const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {persistence: browserLocalPersistence})
export const storage = getStorage(app)