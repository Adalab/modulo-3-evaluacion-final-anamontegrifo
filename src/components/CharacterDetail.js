import '../styles/layout/CharacterDetail.scss';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
	console.log(props.selectedCharacter);
	return (
		<>
			<Link to="/characters">
				<button>Volver</button>
			</Link>
			<div className="detail">
				<img
					className="detail__image"
					src={props.selectedCharacter.image}
					alt="profile"
				/>
				<p>{props.selectedCharacter.name}</p>
				<p>{props.selectedCharacter.species}</p>
				<p>{props.selectedCharacter.origin}</p>
				<p>{props.selectedCharacter.episode.length}</p>
				<p>{props.selectedCharacter.status}</p>
			</div>
		</>
	);
};

export default CharacterDetail;
