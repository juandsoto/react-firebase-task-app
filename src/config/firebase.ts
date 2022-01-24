import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDr7nBPDiLMEs1yuK5-Ox9uMe21iFiR070',
	authDomain: 'task-demo-a536e.firebaseapp.com',
	projectId: 'task-demo-a536e',
	storageBucket: 'task-demo-a536e.appspot.com',
	messagingSenderId: '391977293328',
	appId: '1:391977293328:web:b01a8ff520a2c5608c5c95',
	measurementId: 'G-7XMJPGZQTZ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };

export default db;
