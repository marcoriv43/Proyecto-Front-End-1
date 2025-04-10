import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAD7AKJkMJjknrbiYEBMM4XFNHWregayis",
    authDomain: "verdeaprende-9ddb2.firebaseapp.com",
    projectId: "verdeaprende-9ddb2",
    storageBucket: "verdeaprende-9ddb2.firebasestorage.app",
    messagingSenderId: "870878642128",
    appId: "1:870878642128:web:457ffc65f36c7f8ae483d5",
    measurementId: "G-4BF5VMHBJF"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)