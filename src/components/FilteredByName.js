import PropTypes from 'prop-types';

const FilteredByName = (props) => {
	return (
		<div className="filter__inputT">
			<input
				className="filter__inputT--text"
				type={props.inputType}
				name={props.name}
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

FilteredByName.defaultProps = {
	inputType: 'text',
	name: 'name',
};
FilteredByName.propTypes = {
	inputType: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	searchName: PropTypes.string.isRequired,
	handleSearchName: PropTypes.func.isRequired,
	handleResetName: PropTypes.func.isRequired,
};
export default FilteredByName;
