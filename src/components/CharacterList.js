import CharacterCard from './CharacterCard';
import CharacterNotFound from './CharacterNotFound';
import '../styles/layout/CharacterList.scss';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
	const renderCharacters = () => {
		if (props.characters.length === 0) {
			return <CharacterNotFound />;
		} else {
			return props.characters.map((each) => {
				return (
					<li key={each.id} className="list">
						<Link to={`/characters/${each.id}`}>
							<CharacterCard each={each} />
						</Link>
					</li>
				);
			});
		}
	};

	return (
		<div>
			<ul className="list">{renderCharacters()}</ul>
		</div>
	);
};
export default CharacterList;
