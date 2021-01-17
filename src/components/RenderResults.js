import React from 'react';
import ResultEntry from './ResultEntry';

function RenderResults(props) {	
  return (
		<div className='resultsContainer'>
			{props.searchResult.map(movie => <ResultEntry key={(Math.random()*1000).toString()} movie={movie} nominate={props.nominate}/>)}
		</div>
  );
}

export default RenderResults;