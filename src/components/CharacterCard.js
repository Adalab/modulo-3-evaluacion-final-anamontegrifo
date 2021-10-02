import '../styles/layout/CharacterCard.scss';

const CharacterCard = (props) => {
	return (
		<div className="card">
			<img className="card__image" src={props.each.image} alt="character" />
			<p>{props.each.name}</p>
			<p>{props.each.species}</p>
		</div>
	);
};
export default CharacterCard;
