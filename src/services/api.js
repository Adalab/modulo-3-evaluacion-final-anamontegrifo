//https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json

const callToApi = () => {
	return fetch('https://rickandmortyapi.com/api/character')
		.then((response) => response.json())
		.then((response) => {
			return response.results
				.sort(function (a, b) {
					if (a.name > b.name) {
						return 1;
					}
					if (a.name < b.name) {
						return -1;
					}
					return 0;
				})
				.map((character) => {
					return {
						image: character.image,
						name: character.name,
						species: character.species,
						origin: character.origin.name,
						episode: character.episode,
						status: character.status,
						id: character.id.toString(),
						gender: character.gender,
					};
				});
		});
};

export default callToApi;
