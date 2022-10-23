import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
	const {
		removeMovieFromWatchlist,
		addMovieToWatched,
		moveToWatchlist,
		removeFromWatched,
	} = useContext(GlobalContext);

	return (
		<div className="inner-card-controls">
			{type === "watchlist" && (
				<React.Fragment>
					<button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
						<i className="fa-solid fa-eye"></i>
					</button>
					<button
						className="ctrl-btn"
						onClick={() => removeMovieFromWatchlist(movie.imdbID)}
					>
						<i className="fa-solid fa-xmark"></i>
					</button>
				</React.Fragment>
			)}

			{type === "watched" && (
				<React.Fragment>
					<button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
						<i className="fa-solid fa-eye-slash"></i>
					</button>
					<button
						className="ctrl-btn"
						onClick={() => removeFromWatched(movie.imdbID)}
					>
						<i className="fa-solid fa-xmark"></i>
					</button>
				</React.Fragment>
			)}
		</div>
	);
};
