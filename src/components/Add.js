import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	const onChange = (e) => {
		e.preventDefault();
		setQuery(e.target.value);

		const apiKey = process.env.REACT_APP_API_KEY;

		fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${e.target.value}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.Search) {
					setResults(data.Search);
				} else {
					setResults([]);
				}
			});
	};

	return (
		<div className="add-page">
			<div className="container">
				<div className="add-content">
					<div className="input-wrapper">
						<input
							type="text"
							placeholder="Search for a movie"
							value={query}
							onChange={onChange}
						/>
					</div>
					{results.length > 0 && (
						<ul className="results">
							{results.map((movie) => (
								<li key={movie.imdbID}>
									<ResultCard movie={movie}></ResultCard>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};
