import '../styles/layout/CharacterCard.scss';
import { Link } from 'react-router-dom';
import RoundButton from './RoundButton';
import Human from '../images/human-mind.png';
import Alien from '../images/ufo.png';

const CharacterCard = (props) => {
	let speciesIcon = props.each.species === 'Alien' ? Alien : Human;
	return (
		<div className="card">
			<img className="card__image" src={props.each.image} alt="character" />
			<div className="card__paragraphs">
				<p className="card__text">{`Name: ${props.each.name}`}</p>
				<p className="card__text">{`Species: ${props.each.species}`}</p>
			</div>

			<section className="card__circles">
				<div className="card__species">
					<img
						className="card__species--icon"
						src={speciesIcon}
						alt="species"
					/>
				</div>
				<Link to={`/characters/${props.each.id}`}>
					<RoundButton className="card__button" text="See more here!" />
				</Link>
			</section>
		</div>
	);
};
export default CharacterCard;
