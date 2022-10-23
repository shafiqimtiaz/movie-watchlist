import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
	const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
		useContext(GlobalContext);

	let storedMovie = watchlist.find((o) => o.imdbID === movie.imdbID);
	let storedMovieWatched = watched.find((o) => o.imdbID === movie.imdbID);

	const watchlistDisabled = storedMovie
		? true
		: storedMovieWatched
		? true
		: false;

	const watchedDisabled = storedMovieWatched ? true : false;
	return (
		<div className="result-card">
			<div className="poster-wrapper">
				{movie.Poster !== "N/A" ? (
					<img src={movie.Poster} alt="movie" />
				) : (
					<div className="filler-poster"></div>
				)}
			</div>

			<div className="info">
				<div className="header">
					<h3 className="title">{movie.Title}</h3>
					<h4 className="release-date">{movie.Year ? movie.Year : " - "}</h4>
				</div>
				<div className="controls">
					{/* Always pass a prop to the function */}
					<button
						className="btn"
						disabled={watchlistDisabled}
						onClick={() => addMovieToWatchlist(movie)}
					>
						+ Watchlist
					</button>
					<button
						className="btn"
						disabled={watchedDisabled}
						onClick={() => addMovieToWatched(movie)}
					>
						+ Watched
					</button>
				</div>
			</div>
		</div>
	);
};
