import React from 'react';

function ResultEntry(props) {
	const handleClick = () => {
		props.nominate(props.movie);
	}
	
	return (
		<div>
			<ul>
				<li>
					<p>{props.movie.Title + ' (' + props.movie.Year + ')'}</p> 
					<button disabled={props.movie.nominated} onClick={handleClick}>Nominate</button>
				</li>
			</ul>
		</div>
	)
}

export default ResultEntry;