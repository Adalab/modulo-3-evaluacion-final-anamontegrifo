import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CrossButton = (props) => {
	return (
		<div className={props.className}>
			<Link to={props.link}>
				<i className="fas fa-times-circle detail__back--cross"></i>
			</Link>
		</div>
	);
};

CrossButton.defaultProps = {
	className: 'detail__back',
	link: '/characters',
};

CrossButton.propTypes = {
	className: PropTypes.string,
	link: PropTypes.string,
};
export default CrossButton;
