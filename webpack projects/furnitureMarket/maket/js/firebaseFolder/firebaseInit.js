import { initializeApp } from "firebase/app";
import {initializeAuth, browserLocalPersistence } from "firebase/auth";
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: 'AIzaSyAd2KLELB_VR0Joszy8wx20KHR6Y7sKyYg',
    databaseURL: 'https://furnituremarket-c1fdb-default-rtdb.firebaseio.com/',
    storageBucket: 'gs://furnituremarket-c1fdb.appspot.com'
}

export const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {persistence: browserLocalPersistence})
export const storage = getStorage(app)