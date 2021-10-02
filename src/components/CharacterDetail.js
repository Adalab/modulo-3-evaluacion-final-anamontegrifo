const CharacterDetail = (props) => {
	return (
		<>
			<img className="" src={props.character.image} alt="profile" />
			<p>{props.character.name}</p>
			<p>{props.character.species}</p>
		</>
	);
};

export default CharacterDetail;
