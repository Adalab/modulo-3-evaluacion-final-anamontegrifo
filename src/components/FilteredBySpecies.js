const FilteredBySpecie = (props) => {
	return (
		<>
			<label htmlFor="species">select by species</label>
			<select
				className="species"
				name="species"
				id="species"
				value={props.searchSpecies}
				onChange={props.handleSearchSpecies}
			>
				<option value="All">All</option>
				<option value="Human">Human</option>
				<option value="Alien">Alien</option>
			</select>
		</>
	);
};
export default FilteredBySpecie;
