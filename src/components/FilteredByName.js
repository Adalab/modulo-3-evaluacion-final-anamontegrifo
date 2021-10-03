const FilteredByName = (props) => {
	return (
		<>
			<input
				type="text"
				name="name"
				placeholder="Search here by name!"
				value={props.searchName}
				onChange={props.handleSearchName}
			/>
		</>
	);
};
export default FilteredByName;
