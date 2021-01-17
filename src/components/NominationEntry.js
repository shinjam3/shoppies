import React from 'react';

function ResultEntry(props) {
	const handleClick = () => {
		props.remove(props.movie.imdbID)
	}
	
	return (
		<div>
			<ul>
				<li>
					<p>{props.movie.Title + ' (' + props.movie.Year + ')'}</p>
					<button disabled={props.movie.disabled} onClick={handleClick}>Remove</button>
				</li>
			</ul>
		</div>
	)
}

export default ResultEntry;