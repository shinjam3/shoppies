import React, { useState, useEffect } from 'react';

import Search from './components/Search';
import RenderResults from './components/RenderResults';
import RenderNominations from './components/RenderNominations';

import './App.css';

function App() {
	const [searchResult, setSearchResult] = useState([]);
	const [searchQueryDisplay, setDisplay] = useState('');
	const [nominations, setNominations] = useState([]);
	const [nominationCount, setCount] = useState(5);
	const [confirmClass, setConfirmClass] = useState('confirm');
	const [submitDisabled, setDisabled] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [popupClass, setPopup] = useState('popup');
	
	
	useEffect(() => {
		if (localStorage.getItem('Nominations') !== null) {
			setNominations(JSON.parse(localStorage.getItem('Nominations')));
			setCount(5 - JSON.parse(localStorage.getItem('Nominations')).length);
		}
	}, [])
	
	
	useEffect(() => {
		if (nominationCount<5) {
			localStorage.setItem('Nominations', JSON.stringify(nominations));
		}
		else if (nominationCount===5 && localStorage.getItem('Nominations') !== null) {
			localStorage.setItem('Nominations', JSON.stringify(nominations));
		}
	}, [nominationCount, nominations])
	
	
	useEffect(() => {		
		if (nominations.length===5) {
			setConfirmClass('confirm show');
		}
		else {
			setConfirmClass('confirm');
		}
		
	}, [nominations]);
	
	
	useEffect(() => {
		if (submitted) localStorage.removeItem('Nominations');
	}, [submitted])
	
	
	const setResults = (results) => {
		setSearchResult(results)
	}
	
	const setQueryDisplay = (query) => {
		setDisplay(query)
	}
	
	
	const handleNominate = (movie) => {
		if (nominations.length===5) return;
		
		if (!nominations.some(item => item.imdbID === movie.imdbID)) {
			setNominations([...nominations, {...movie, disabled: false}]);
			setCount(nominationCount-1);
		}
		
		setSearchResult(
			searchResult.map(item => 
				item.imdbID === movie.imdbID
				? {...item, nominated: true}
				: item
			)
		)
	}
	
	
	const handleRemove = (id) => {
		setNominations(nominations.filter(movie => movie.imdbID !== id));
		setCount(nominationCount+1);
		
		setSearchResult(
			searchResult.map(item => 
				item.imdbID === id
				? {...item, nominated: false}
				: item
			)
		)
	}
	
	
	const handleSubmit = () => {
		setSearchResult( searchResult.map(movie => ({...movie, nominated: true})) );
		setNominations( nominations.map(movie => ({...movie, disabled: true})) );
		setPopup('popup showFinish');
		setSubmitted(true);
		setDisabled(true);
	}
	
	
  return (
    <div className="App">
			<h1>The Shoppies</h1>
			<Search setResults={setResults} setQueryDisplay={setQueryDisplay} searchDisabled={submitDisabled} />
						
			<div className='shoppiesContainer'>
				<h2>Nominations</h2>
				<RenderNominations nominations={nominations} remove={handleRemove} />
				<div className={confirmClass}>
					<h3>Are you satisfied with your nominations?</h3>
					<button disabled={submitDisabled} className='submit' onClick={handleSubmit}>Yes, submit!</button>
				</div>
				{
					function() {
						if (nominationCount>1) return (
							<p>{nominationCount} Nominations Remaining</p>
						)
						if (nominationCount===1) return (
							<p>1 Nomination Remaining</p>
						)
					}()
				}
			</div>
			
			{
				function() {
					if (searchResult.length) return (
						<div className='shoppiesContainer'>
							<h2>Results for "{searchQueryDisplay}"</h2>
							<RenderResults searchResult={searchResult} nominate={handleNominate} />
						</div>
					)
				}()
			}
			
			<div className={popupClass}>
				<p>Thank you for your nominations. Every vote counts!</p>
				<button className='popupClose' onClick={() => setPopup('popup')}>&times;</button>
			</div>
    </div>
  );
}

export default App;
