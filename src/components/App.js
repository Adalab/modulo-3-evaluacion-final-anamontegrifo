import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import callToApi from '../services/api';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Header from './Header';

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

	const routeData = useRouteMatch('/character/:id');
	console.log(routeData);
	const characterId = routeData !== null ? parseInt(routeData.params.id) : '';

	const selectedCharacter = characters.find((item) => item.id === characterId);
	console.log(selectedCharacter);

	return (
		<>
			<Header />

			<main className="main">
				<Switch>
					<Route path="/character/:id">
						<CharacterDetail selectedCharacter={selectedCharacter} />
					</Route>
					<Route exact path="/">
						<Filters searchName={searchName} handleSearch={handleSearch} />
						<CharacterList characters={filteredCharacters} />
					</Route>
				</Switch>
			</main>
			<footer />
		</>
	);
}

export default App;
