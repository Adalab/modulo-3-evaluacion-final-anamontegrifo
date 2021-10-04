import '../styles/layout/NotFound.scss';
import RoundButton from './RoundButton';

const CharacterNotFound = (props) => {
	return (
		<div className="notFound">
			<h1>Try again, this character does not exist!</h1>

			<RoundButton
				className="notFound__button"
				text="Back"
				handleResetName={props.handleResetName}
			/>
		</div>
	);
};
export default CharacterNotFound;
