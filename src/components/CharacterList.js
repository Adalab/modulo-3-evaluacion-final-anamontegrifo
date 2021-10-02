import CharacterCard from './CharacterCard';
import CharacterNotFound from './CharacterNotFound';
import '../styles/layout/CharacterList.scss';

const CharacterList = (props) => {
	const renderCharacters = () => {
		if (props.characters.length === 0) {
			return <CharacterNotFound />;
		} else {
			return props.characters.map((each) => {
				return (
					<li key={each.id} className="list">
						<CharacterCard each={each} />
					</li>
				);
			});
		}
	};

	return (
		<div>
			<h1>Listado de personajes</h1>
			<ul className="list">{renderCharacters()}</ul>
		</div>
	);
};
export default CharacterList;
