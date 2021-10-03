import RoundButton from './RoundButton';
import { Link } from 'react-router-dom';
import '../styles/layout/Back.scss';

const Back = () => {
	return (
		<div className="back">
			<Link to="/characters">
				<RoundButton className="back__button" text="Back" />
			</Link>
		</div>
	);
};
export default Back;
