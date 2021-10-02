import '../styles/layout/CharacterDetail.scss';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
	console.log(props.selectedCharacter);
	return (
		<>
			<div>
				<img className="" src={props.selectedCharacter.image} alt="profile" />
				<p>{props.selectedCharacter.name}</p>
				<p>{props.selectedCharacter.species}</p>
			</div>

			<Link to="/">
				<button>Volver</button>
			</Link>
		</>
	);
};

export default CharacterDetail;
