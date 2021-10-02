const CharacterCard = (props) => {
	return (
		<div>
			<img className="" src={props.each.image} alt="character" />
			<p>{props.each.name}</p>
			<p>{props.each.species}</p>
		</div>
	);
};
export default CharacterCard;
