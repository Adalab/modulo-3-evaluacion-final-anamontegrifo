import '../styles/layout/CharacterDetail.scss';
import { Link } from 'react-router-dom';
import Question from '../images/question.png';
import Joyful from '../images/joyful.png';
import Coffin from '../images/coffin.png';

const CharacterDetail = (props) => {
	let statusIcon = '';
	if (props.selectedCharacter.status === 'Dead') {
		statusIcon = Coffin;
	} else if (props.selectedCharacter.status === 'Alive') {
		statusIcon = Joyful;
	} else {
		statusIcon = Question;
	}

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
				<p>
					Hi, my name is <span>{props.selectedCharacter.name}</span>. I'm just
					an ordinary <span>{props.selectedCharacter.species}</span>. My origin
					is <span>{props.selectedCharacter.origin}</span>
				</p>

				<p>{`I am a celebrity because I act in ${props.selectedCharacter.episode.length} episodes of Rick & Morty.`}</p>
				<p>{props.selectedCharacter.status}</p>
				<img src={statusIcon} alt="status" />
			</div>
		</>
	);
};

export default CharacterDetail;
