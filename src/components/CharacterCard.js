import '../styles/layout/CharacterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
	return (
		<div className="card">
			<img className="card__image" src={props.each.image} alt="character" />
			<p>{`Name: ${props.each.name}`}</p>
			<p>{`Species: ${props.each.species}`}</p>
			<Link to={`/characters/${props.each.id}`}>
				<button>See more here!</button>
			</Link>
		</div>
	);
};
export default CharacterCard;
