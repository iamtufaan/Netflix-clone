import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Player from "./pages/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
	const navigate = useNavigate()
	useEffect(()=>{
		onAuthStateChanged(auth,async (user)=>{
			if(user){
				console.log('Logged In');
				navigate('/')
			}else{
				console.log('Logged Out');
				navigate('/login')
			}
		})
	},[])
	return (
		<div className=" bg-black text-white w-full min-h-screen">
			<ToastContainer theme="dark"/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login/>} />
				<Route path="/player/:id" element={<Player/>} />
			</Routes>
		</div>
	);
}

export default App;
