import React, {useState} from 'react';

function Search(props) {
	const [searchQuery, setSearchQuery] = useState('');
	const [popupClass, setPopup] = useState('popup');
	const [loadingClass, setLoading] = useState('loading')
	
	const handleChange = (e) => {
		setSearchQuery(e.target.value)
	}
	
	
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		fetch(`https://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`)
		.then(res => res.json())
		.then(async (res) => {
			if (res.Response==='True') {
				await setLoading('loading show');
				setTimeout( async () => {
					await setLoading('loading');
					props.setResults(res.Search.map( movie => ({...movie, nominated: false}) ));
					props.setQueryDisplay(searchQuery);
				}, 2000);
			}
			else {
				setTimeout( () => {setPopup('popup')}, 4500);
				setPopup('popup show');
			}
		})
	}
	
	
  return (
    <div>
			<form onSubmit={handleSearchSubmit}>
				<h2>Movie Title</h2>
				<input
					placeholder='Search for a movie...'
					value={searchQuery}
					onChange={handleChange}
				/>
				<button disabled={props.searchDisabled} className='submit' type='submit'>Search</button>
			</form>
			
			<div className={loadingClass}></div>
			<div className={popupClass}><p>Movie title not found or search input was too common, please be more specific.</p></div>
    </div>
  );
}

export default Search;