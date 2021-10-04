import '../styles/layout/NotFound.scss';
import { Link } from 'react-router-dom';
import RoundButton from './RoundButton';

const IdNotFound = () => {
	return (
		<div className="notFound">
			<h1>Try again, this character does not exist!</h1>
			<Link to="/characters">
				<RoundButton className="notFound__button" text="Back" />
			</Link>
		</div>
	);
};
export default IdNotFound;
