import Logo from '../images/purple.png';
import '../styles/layout/Header.scss';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header">
			<div>
				<p className="header__text">All about</p>
				<img className="header__logo" src={Logo} alt="character" />
				<p className="header__text">and friends</p>

				<Link to="/">Ir al inicio</Link>
			</div>
		</div>
	);
};
export default Header;
