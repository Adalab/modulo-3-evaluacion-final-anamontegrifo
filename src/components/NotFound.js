import '../styles/layout/NotFound.scss';
import { Link } from 'react-router-dom';
import RoundButton from './RoundButton';
import PropTypes from 'prop-types';
import SelectFilter from './Selectx3Filter';

const NotFound = (props) => {
	return (
		<div className="notFound">
			<h1>{props.titleText}</h1>
			<Link to={props.link}>
				<RoundButton className="notFound__button" text={props.btnText} />
			</Link>
		</div>
	);
};

NotFound.defaultProps = {
	titleText: 'This page does not exist',
	link: '/',
	btnText: 'Home',
};

SelectFilter.propTypes = {
	titleText: PropTypes.string,
	link: PropTypes.string,
	btntext: PropTypes.string,
};

export default NotFound;
