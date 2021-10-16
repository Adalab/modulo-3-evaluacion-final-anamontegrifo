import '../styles/layout/NotFound.scss';
import { Link } from 'react-router-dom';
import RoundButton from './RoundButton';

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
export default NotFound;
