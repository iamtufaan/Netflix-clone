import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
	apiKey: "AIzaSyB7YNh_IFu45iIBpTouMmHMiAIZCfC_Ujo",
	authDomain: "netflix-clone-f4ef8.firebaseapp.com",
	projectId: "netflix-clone-f4ef8",
	storageBucket: "netflix-clone-f4ef8.appspot.com",
	messagingSenderId: "124586179183",
	appId: "1:124586179183:web:3626406e4832abe2d9eb9a",
	measurementId: "G-K9XB4B3S3S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dataBase = getFirestore(app);

const singup = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(dataBase, "user"), {
			uid: user.uid,
			name,
			authProvider: "local",
			email
		});
	} catch (error) {
		console.log(error);
		toast.error(error.code.split("/")[1].split("-").join(" "));
	}
};

const login = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.log(error);
		toast.error(error.code.split("/")[1].split("-").join(" "));
	}
};

const logout = () => {
	signOut(auth);
};

export { auth, dataBase, logout, login, singup };
