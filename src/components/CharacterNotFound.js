import '../styles/layout/NotFound.scss';
import RoundButton from './RoundButton';
import PropTypes from 'prop-types';

const CharacterNotFound = (props) => {
	return (
		<div className="notFound">
			<h1>Try again, the character named {props.searchName} does not exist!</h1>

			<RoundButton
				className="notFound__button"
				text="Back"
				handleResetName={props.handleResetName}
			/>
		</div>
	);
};

CharacterNotFound.propTypes = {
	searchName: PropTypes.string.isRequired,
	handleResetName: PropTypes.func,
};
export default CharacterNotFound;
