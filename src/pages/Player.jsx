import React, { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
function Player() {
 const navigate = useNavigate()
  const [apiData,setApiData]=useState({
    name:'',
    key:'',
    published_at: '',
    type:'',
  
  })
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTY2MzczYTk4YWVjNWNjNTVkNWRhYTJiYWU1MTU1ZSIsIm5iZiI6MTcyMDc5NDM2MC4yOTM5MjgsInN1YiI6IjY1YTBiMThkZDIwN2YzMDEyNWU3NDhkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x_0Yxz3GlXcbnJNecHQjnAfzfkWPTp96mlT4V696RME"
		}
	};
 
  const {id} =useParams()
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
			options
		)
			.then(response => response.json())
			.then(response => setApiData(response.results[0]))
			.catch(err => console.error(err));
	}, []);
	return (
		<div className="player h-screen flex flex-col justify-center items-center relative">
			<img
				src={back_arrow_icon}
				alt="back_arrow_icon"
				className=" absolute top-5 left-5 w-12 cursor-pointer"
onClick={()=>navigate('/')}
			/>
			<iframe
				src={`https://www.youtube.com/embed/${apiData.key}`}
				className=" w-[90%] h-[90%] m-auto rounded-s-xl object-cover object-center"
				title="trailer"
				frameBorder={0}
				allowFullScreen
			/>
			<div className="player-ifno flex items-center justify-between w-[90%]">
				<p>{apiData.published_at.slice(0,10)}</p>
				<p>{apiData.name}</p>
				<p>{apiData.type}</p>
			</div>
		</div>
	);
}

export default Player;
