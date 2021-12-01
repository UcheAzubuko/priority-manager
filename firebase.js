import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAlu2uxQPmqB2KJPbX42xqmZhQB6cHw_1U',
  authDomain: 'todo-app-e195a.firebaseapp.com',
  projectId: 'todo-app-e195a',
  storageBucket: 'todo-app-e195a.appspot.com',
  messagingSenderId: '1075464742482',
  appId: '1:1075464742482:web:ffb34b1f9e9b8e21d7618b',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
