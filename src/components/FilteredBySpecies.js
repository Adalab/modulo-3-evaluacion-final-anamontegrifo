import PropTypes from 'prop-types';

const FilteredBySpecies = (props) => {
	return (
		<>
			<select
				className="filter__inputSelect"
				name={props.species}
				id="species"
				value={props.searchSpecies}
				onChange={props.handleSearchSpecies}
			>
				<option value="All">Choose a species</option>
				<option value="Human">Human</option>
				<option value="Alien">Alien</option>
			</select>
		</>
	);
};
FilteredBySpecies.defaultProps = {
	name: 'species',
};
FilteredBySpecies.propTypes = {
	name: PropTypes.string.isRequired,
	searchSpecies: PropTypes.string.isRequired,
	handleSearchSpecies: PropTypes.func.isRequired,
};
export default FilteredBySpecies;
