const FilteredByName = (props) => {
	return (
		<>
			<input
				type="text"
				name="name"
				value={props.searchName}
				onChange={props.handleSearch}
			/>
		</>
	);
};
export default FilteredByName;
