import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyARmJ5xg0Zu0EF18hinE4hX7Mv5sCL2WPk",
    authDomain: "blog-react-c3322.firebaseapp.com",
    projectId: "blog-react-c3322",
    storageBucket: "blog-react-c3322.appspot.com",
    messagingSenderId: "18813363319",
    appId: "1:18813363319:web:eb0f4881522537c903d272"
  };
  

  const app = initializeApp(firebaseConfig)

  export const storage = getStorage(app)
  export const db = getFirestore(app)
  export const auth =getAuth(app);
  