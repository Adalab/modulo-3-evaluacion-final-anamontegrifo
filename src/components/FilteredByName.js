const FilteredByName = (props) => {
	return (
		<>
			<input
				className="filter__inputText"
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
