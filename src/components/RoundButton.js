import PropTypes from 'prop-types';

const RoundButton = (props) => {
	return (
		<button onClick={props.handleResetName} className={props.className}>
			{props.text}
		</button>
	);
};

RoundButton.defaultProps = {
	className: 'notFound__button',
	text: 'Back',
};

RoundButton.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
	handleResetName: PropTypes.func,
};
export default RoundButton;
