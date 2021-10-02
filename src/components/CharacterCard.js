import '../styles/layout/CharacterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
	return (
		<div className="card">
			<img className="card__image" src={props.each.image} alt="character" />
			<p>{props.each.name}</p>
			<p>{props.each.species}</p>
			<Link to={`/character-detail/${props.each.id}`}>
				<button>Ver detalle de producto</button>
			</Link>
		</div>
	);
};
export default CharacterCard;
