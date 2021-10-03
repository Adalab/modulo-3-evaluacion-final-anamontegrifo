import '../styles/layout/CharacterDetail.scss';
import { Link } from 'react-router-dom';
import Question from '../images/question.png';
import Joyful from '../images/joyful.png';
import Coffin from '../images/coffin.png';
import RoundButton from './RoundButton';

const CharacterDetail = (props) => {
	let statusIcon = '';
	if (props.selectedCharacter.status === 'Dead') {
		statusIcon = Coffin;
	} else if (props.selectedCharacter.status === 'Alive') {
		statusIcon = Joyful;
	} else {
		statusIcon = Question;
	}

	let episodes =
		props.selectedCharacter.episode.length === 1 ? 'episode' : 'episodes';

	return (
		<section className="detail">
			<div className="detail__card">
				<img
					className="detail__image"
					src={props.selectedCharacter.image}
					alt="profile"
				/>
				<p className="detail__text">
					Hi, my name is <span>{props.selectedCharacter.name}</span>. I'm just
					an ordinary <span>{props.selectedCharacter.species}</span>. My origin
					is <span>{props.selectedCharacter.origin}</span>.
				</p>

				<p className="detail__text">
					I am a celebrity because I appeared in
					<span>{` ${props.selectedCharacter.episode.length} ${episodes}`}</span>{' '}
					of Rick & Morty.
				</p>

				<div className="detail__icon--container">
					<img className="detail__icon" src={statusIcon} alt="status" />
					<figcaption>{`Status: ${props.selectedCharacter.status}`}</figcaption>
				</div>
			</div>
			<Link to="/characters">
				<RoundButton className="detail__button" text="Back" />
			</Link>
		</section>
	);
};

export default CharacterDetail;
