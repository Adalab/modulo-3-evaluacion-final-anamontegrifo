import CharacterCard from './CharacterCard';
import CharacterNotFound from './CharacterNotFound';
import '../styles/layout/CharacterList.scss';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
	const renderCharacters = () => {
		if (props.characters.length === 0) {
			return (
				<CharacterNotFound
					searchName={props.searchName}
					handleResetName={props.handleResetName}
				/>
			);
		} else {
			return props.characters.map((each) => {
				return (
					<li key={each.id} className="main__list--item">
						<CharacterCard each={each} />
					</li>
				);
			});
		}
	};

	return (
		<div className="main">
			<ul className="main__list">{renderCharacters()}</ul>
		</div>
	);
};

CharacterList.propTypes = {
	handleResetName: PropTypes.func.isRequired,
	characters: PropTypes.array.isRequired,
	searchName: PropTypes.string.isRequired,
};

export default CharacterList;
