// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAaY6hPGqhvY-UAf1N2ZrSFWQsLd_6wrvA',
	authDomain: 'users-crud-2024.firebaseapp.com',
	projectId: 'users-crud-2024',
	storageBucket: 'users-crud-2024.appspot.com',
	messagingSenderId: '100768241089',
	appId: '1:100768241089:web:9eb9418eab2914aad44b40'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
