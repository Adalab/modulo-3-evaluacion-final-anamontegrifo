import PropTypes from 'prop-types';

const InputFilter = (props) => {
	return (
		<div className="filter__inputT">
			<input
				className="filter__inputT--text"
				type={props.inputType}
				name={props.name}
				placeholder={props.placeholder}
				value={props.searchWord}
				onChange={props.handleSearchWord}
			/>
			<button className="filter__inputT--reset" onClick={props.handleReset}>
				<i className={props.icon}></i>
			</button>
		</div>
	);
};

InputFilter.defaultProps = {
	inputType: 'text',
	name: 'name',
};
InputFilter.propTypes = {
	inputType: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	searchWord: PropTypes.string.isRequired,
	handleSearchWord: PropTypes.func.isRequired,
	handleReset: PropTypes.func.isRequired,
};
export default InputFilter;
