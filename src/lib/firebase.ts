import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAzK9PegDKaz3sLR90ex_zk3o5b14q1G7k',
	authDomain: 'chicken-nanny-393211.firebaseapp.com',
	projectId: 'chicken-nanny-393211',
	storageBucket: 'chicken-nanny-393211.appspot.com',
	messagingSenderId: '771034632875',
	appId: '1:771034632875:web:8eb9cc12e43ba3f6251dee'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
