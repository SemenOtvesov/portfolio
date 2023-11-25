import { initializeApp } from 'firebase/app';
import { initializeAuth, browserLocalPersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: 'AIzaSyD12fHPnzq_Dr9x3fAZoPwND0zjY_eAugo',
    databaseURL: 'https://finman-ac01e-default-rtdb.firebaseio.com/',
    storageBucket: 'gs://finman-ac01e.appspot.com',
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: browserLocalPersistence,
});
export const storage = getStorage(app);
