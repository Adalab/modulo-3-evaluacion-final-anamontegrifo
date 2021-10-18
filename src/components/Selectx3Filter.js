import PropTypes from 'prop-types';

const SelectFilter = (props) => {
	return (
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
		</select>
	);
};
SelectFilter.defaultProps = {
	name: 'name',
};
SelectFilter.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	searchSelect: PropTypes.string.isRequired,
	handleSearchSelect: PropTypes.func.isRequired,
	option1Value: PropTypes.string.isRequired,
	option1Text: PropTypes.string.isRequired,
	option2Value: PropTypes.string.isRequired,
	option2Text: PropTypes.string.isRequired,
	option3Value: PropTypes.string.isRequired,
	option3Text: PropTypes.string.isRequired,
};

export default SelectFilter;
