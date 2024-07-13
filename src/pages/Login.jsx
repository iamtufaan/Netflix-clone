import React, { useState } from "react";
import logo from "../assets/logo.png";
import { login, singup } from "../firebase"; 
import netflix_spinner from '../assets/netflix_spinner.gif'
function Login() {
	const [signIn, setSignIn] = useState('Sign In');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading,setLoading] =useState(false)

	const user_auth = async (e) => {
		setLoading(true)
		e.preventDefault();
		if (signIn === 'Sign In') {
			await login(email, password);
		} else {
			await singup(name, email, password);
		}
		setLoading(false)
	};

	return (
		<>{
			loading ? <div className=" w-full h-screen flex items-center justify-center">
				<img src={netflix_spinner} alt="netflix_spinner" className=" w-96 h-96 " />
			</div>
			:
		
			<div className="login bg-[url(./background_banner.jpg)] w-full h-screen md:px-[8%] py-5">
				<img src={logo} alt="logo" className="w-40" />
				<div className="login-form max-w-[450px] w-full bg-[rgba(0,0,0,.75)] rounded-s md:p-16 p-8 mt-10 m-auto">
					<h1 className="text-2xl mb-7 font-semibold">{signIn}</h1>
					<form>
						{signIn === 'Sign Up' && (
							<input
								type="text"
								value={name}
								placeholder="Your name"
								className="px-5 py-4 rounded-sm font-semibold text-lg bg-[#333] w-full h-12 my-3 mx-0 text-white outline-none border-none"
								required
								onChange={(e) => setName(e.target.value)}
							/>
						)}
						<input
							type="email"
							value={email}
							placeholder="Email"
							className="px-5 py-4 rounded-sm font-semibold text-lg bg-[#333] w-full h-12 my-3 mx-0 text-white outline-none border-none"
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							value={password}
							placeholder="Password"
							className="px-5 py-4 rounded-sm font-semibold text-lg bg-[#333] w-full h-12 my-3 mx-0 text-white outline-none border-none"
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							onClick={user_auth}
							type="submit"
							className="w-full border-0 outline-0 p-3 bg-[#e50914] text-white rounded-s text-lg font-semibold mt-5 cursor-pointer"
						>
							{signIn}
						</button>
						<div className="form-help flex mt-3 items-center justify-between text-[#b3b3b3] text-xs">
							<div className="remember flex gap-1 items-center cursor-pointer">
								<input type="checkbox" id="check" />
								<label htmlFor="check">Remember Me</label>
							</div>
							<p>Need Help?</p>
						</div>
					</form>
					<div className="form-switch mt-10 text-[#737373]">
						{signIn === 'Sign In' ? (
							<p>
								New to Netflix?{" "}
								<span
									className="ml-2 text-white font-semibold cursor-pointer"
									onClick={() => setSignIn('Sign Up')}
								>
									Sign Up Now
								</span>
							</p>
						) : (
							<p>
								Already have an account?{" "}
								<span
									className="ml-2 text-white font-semibold cursor-pointer"
									onClick={() => setSignIn('Sign In')}
								>
									Sign In Now
								</span>
							</p>
						)}
					</div>
				</div>
			</div>
}
		</>
	);
}

export default Login;
