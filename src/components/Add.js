import React, { useState } from "react";

export const Add = () => {
	const [query, setQuery] = useState("");

	const onChange = (e) => {
		e.preventDefault();
		setQuery(e.target.value);

		const apiKey = process.env.REACT_APP_API_KEY;

		fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${e.target.value}`)
			.then((res) => res.json())
			.then((data) => console.log(data));
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
				</div>
			</div>
		</div>
	);
};
