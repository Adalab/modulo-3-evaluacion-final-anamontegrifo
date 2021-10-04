const FilteredByName = (props) => {
	return (
		<div className="filter__inputT">
			<input
				className="filter__inputT--text"
				type="text"
				name="name"
				placeholder="Search here by name!"
				value={props.searchName}
				onChange={props.handleSearchName}
			/>
			<button className="filter__inputT--reset" onClick={props.handleResetName}>
				<i className="fas fa-times-circle filter__inputT--icon"></i>
			</button>
		</div>
	);
};
export default FilteredByName;
