const FilteredBySpecie = (props) => {
	return (
		<>
			<select
				className="filter__inputSelect"
				name="species"
				id="species"
				value={props.searchSpecies}
				onChange={props.handleSearchSpecies}
			>
				<option value="All">Selected by species</option>
				<option value="Human">Human</option>
				<option value="Alien">Alien</option>
			</select>
		</>
	);
};
export default FilteredBySpecie;
