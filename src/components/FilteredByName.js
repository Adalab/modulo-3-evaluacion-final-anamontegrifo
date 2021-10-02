const FilteredByName = (props) => {
	return (
		<div>
			<input
				type="text"
				name="name"
				value={props.searchName}
				onChange={props.handleSearch}
			/>
		</div>
	);
};
export default FilteredByName;
