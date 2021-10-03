//https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json

//https://rickandmortyapi.com/api/character

const callToApi = () => {
	return fetch('https://rickandmortyapi.com/api/character')
		.then((response) => response.json())
		.then((response) => {
			return response.results.map((character) => {
				return {
					image: character.image,
					name: character.name,
					species: character.species,
					origin: character.origin.name,
					episode: character.episode,
					status: character.status,
					id: character.id,
				};
			});
		});
};

export default callToApi;
