import Logo from '../images/red.png';
import '../styles/layout/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<img className="header__logo" src={Logo} alt="character" />
			</Link>
		</div>
	);
};
export default Header;
