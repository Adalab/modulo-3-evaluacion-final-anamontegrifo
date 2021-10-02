import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
	const renderCharacters = () => {
		return props.characters.map((each) => {
			return (
				<li key={each.id} className="">
					<CharacterCard each={each} />
				</li>
			);
		});
	};

	return (
		<div>
			<h1>Listado de personajes</h1>
			<ul className="list">{renderCharacters()}</ul>
		</div>
	);
};
export default CharacterList;
