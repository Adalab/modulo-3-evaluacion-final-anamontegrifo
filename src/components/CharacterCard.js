import '../styles/layout/CharacterCard.scss';
import { Link } from 'react-router-dom';
import RoundButton from './RoundButton';

const CharacterCard = (props) => {
	return (
		<div className="card">
			<img className="card__image" src={props.each.image} alt="character" />
			<p className="card__text">{`Name: ${props.each.name}`}</p>
			<p className="card__text">{`Species: ${props.each.species}`}</p>
			<Link to={`/characters/${props.each.id}`}>
				<RoundButton className="card__button" text="See more here!" />
			</Link>
		</div>
	);
};
export default CharacterCard;
