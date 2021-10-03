import '../styles/layout/NotFound.scss';
import { Link } from 'react-router-dom';
import RoundButton from './RoundButton';

const PageNotFound = () => {
	return (
		<div className="notFound">
			<h1>This page does not exist!</h1>
			<Link to="/">
				<RoundButton className="notFound__button" text="Home" />
			</Link>
		</div>
	);
};
export default PageNotFound;
