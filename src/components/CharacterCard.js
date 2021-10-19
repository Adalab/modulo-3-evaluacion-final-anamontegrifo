import '../styles/layout/CharacterCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RoundButton from './RoundButton';
import Human from '../images/human-mind.png';
import Alien from '../images/ufo.png';
import Female from '../images/female.png';
import Male from '../images/male.png';
import Unknown from '../images/unknown.png';
import Alive from '../images/alive.png';
import Dead from '../images/dead.png';

const CharacterCard = (props) => {
	let speciesIcon = props.each.species === 'Alien' ? Alien : Human;

	let genderIcon;
	if (props.each.gender === 'Female') {
		genderIcon = Female;
	} else if (props.each.gender === 'Male') {
		genderIcon = Male;
	} else {
		genderIcon = Unknown;
	}

	let statusIcon;
	if (props.each.status === 'Alive') {
		statusIcon = Alive;
	} else if (props.each.status === 'Dead') {
		statusIcon = Dead;
	} else {
		statusIcon = Unknown;
	}

	return (
		<div className="card">
			<img className="card__image" src={props.each.image} alt="character" />
			<section className="card__circles">
				<div className="card__species">
					<img
						className="card__species--icon"
						src={speciesIcon}
						alt="species"
					/>
				</div>
				<div className="card__species">
					<img className="card__species--icon" src={genderIcon} alt="gender" />
				</div>
				<div className="card__species">
					<img className="card__species--icon" src={statusIcon} alt="gender" />
				</div>
			</section>
			<div className="card__paragraphs">
				<p className="card__text">{`Name: ${props.each.name}`}</p>
				<p className="card__text">{`Species: ${props.each.species}`}</p>
			</div>

			<Link to={`/characters/${props.each.id}`}>
				<RoundButton className="card__button" text="See more here!" />
			</Link>
		</div>
	);
};

CharacterCard.propTypes = {
	each: PropTypes.object.isRequired,
};

export default CharacterCard;
