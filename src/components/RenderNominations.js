import React from 'react';
import NominationEntry from './NominationEntry';

function RenderNominations(props) {	
  return (
		<div>
			{props.nominations.map(movie => <NominationEntry key={(Math.random()*1000).toString()} movie={movie} remove={props.remove} />)}
		</div>
  );
}

export default RenderNominations;