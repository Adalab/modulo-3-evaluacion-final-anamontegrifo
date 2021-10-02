import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import Footer from './Footer';

function App() {
	const [characters, setCharacters] = useState([]);
	const [searchName, setSearchName] = useState('');

	characters.sort(function (a, b) {
		if (a.name > b.name) {
			return 1;
		}
		if (a.name < b.name) {
			return -1;
		}
		return 0;
	});

	useEffect(() => {
		callToApi().then((response) => {
			setCharacters(response);
		});
	}, []);

	const handleSearch = (event) => {
		setSearchName(event.currentTarget.value);
	};
	const filteredCharacters = characters.filter((each) =>
		each.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
	);

	return (
		<div className="body">
			<Header />

			<section id="list" className="main">
				<Filters searchName={searchName} handleSearch={handleSearch} />
				<CharacterList characters={filteredCharacters} />
				<Footer />
			</section>
		</div>
	);
}

export default App;
