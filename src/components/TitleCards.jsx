import React, { useEffect, useRef, useState } from "react";
import cards_data from "../assets/cards/Cards_data";
import "./TitleCart.css";
import { Link } from "react-router-dom";
function TitleCards({ title, category }) {
	const cardsRef = useRef();
	const [apiData,setApiData] = useState([])


	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTY2MzczYTk4YWVjNWNjNTVkNWRhYTJiYWU1MTU1ZSIsIm5iZiI6MTcyMDc5NDM2MC4yOTM5MjgsInN1YiI6IjY1YTBiMThkZDIwN2YzMDEyNWU3NDhkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x_0Yxz3GlXcbnJNecHQjnAfzfkWPTp96mlT4V696RME"
		}
	};

	

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${category? category : 'now_playing'}?language=en-US&page=1`,
			options
		)
			.then(response => response.json())
			.then(response => setApiData(response.results))
			.catch(err => console.error(err));



		cardsRef.current.addEventListener("wheel", function(e) {
			e.preventDefault();
			cardsRef.current.scrollLeft += e.deltaY;
		});
	}, []);

	return (
		<div className="title-cards md:mt-12 ml-2 mt-5 md:mb-10 mb-0 ">
			<h1 className="mb-2 md:text-2xl">
				{title ? title : "Popular on Netflix"}
			</h1>
			<div className="card-list flex gap-10 overflow-x-auto" ref={cardsRef}>
				{apiData.map((card, index) => {
					return (
						<Link to={`/player/${card.id}`} key={index} className="card flex-shrink-0 relative">
							<img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" className="md:w-60 sm:w-52 w-44" />
							<p className="absolute bottom-3 right-3">
								{card.original_title}
							</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default TitleCards;
