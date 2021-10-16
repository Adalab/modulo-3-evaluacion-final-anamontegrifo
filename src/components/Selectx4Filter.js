const SelectFilter = (props) => {
	return (
		<>
			<select
				className="filter__inputSelect"
				name={props.name}
				id={props.id}
				value={props.searchSelect}
				onChange={props.handleSearchSelect}
			>
				<option value={props.option1Value}>{props.option1Text}</option>
				<option value={props.option2Value}>{props.option2Text}</option>
				<option value={props.option3Value}>{props.option3Text}</option>
				<option value={props.option4Value}>{props.option4Text}</option>
			</select>
		</>
	);
};

export default SelectFilter;
