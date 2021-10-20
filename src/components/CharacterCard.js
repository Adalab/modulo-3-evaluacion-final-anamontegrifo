import '../styles/layout/CharacterCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RoundButton from './RoundButton';

const CharacterCard = (props) => {
	return (
		<div className="card">
			<img className="card__image" src={props.each.image} alt="character" />

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
