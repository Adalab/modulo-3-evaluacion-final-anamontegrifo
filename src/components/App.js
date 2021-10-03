import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import callToApi from '../services/api';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

function App() {
	const [characters, setCharacters] = useState([]);
	const [searchName, setSearchName] = useState('');

	useEffect(() => {
		callToApi().then((response) => {
			setCharacters(response);
		});
	}, []);

	const handleSearch = (event) => {
		setSearchName(event.currentTarget.value);
	};
	const filteredCharacters = characters
		.sort(function (a, b) {
			if (a.name > b.name) {
				return 1;
			}
			if (a.name < b.name) {
				return -1;
			}
			return 0;
		})

		.filter((each) =>
			each.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
		);

	const routeData = useRouteMatch('/characters/:id');
	console.log(routeData);
	const characterId = routeData !== null ? parseInt(routeData.params.id) : '';

	const selectedCharacter = characters.find((item) => item.id === characterId);
	console.log(selectedCharacter);

	return (
		<>
			<main className="main">
				<Switch>
					<Route path="/characters/:id">
						<Header />
						<CharacterDetail selectedCharacter={selectedCharacter} />
						<Footer />
					</Route>
					<Route exact path="/characters">
						<Header />
						<Filters searchName={searchName} handleSearch={handleSearch} />
						<CharacterList characters={filteredCharacters} />
						<Footer />
					</Route>
					<Route exact path="/">
						<Hero />
					</Route>
				</Switch>
			</main>
		</>
	);
}

export default App;
