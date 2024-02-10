import { initializeApp } from 'firebase/app';
import { initializeAuth, browserLocalPersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: 'AIzaSyAyXa5nikHLSV-FY1z2w_aIFffOs2tzfDE',
    databaseURL: 'https://intravision-6a35c-default-rtdb.firebaseio.com/',
    storageBucket: 'gs://intravision-6a35c.appspot.com',
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, { persistence: browserLocalPersistence });
export const storage = getStorage(app);
