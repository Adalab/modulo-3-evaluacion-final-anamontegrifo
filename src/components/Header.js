import Logo from '../images/purple.png';
import '../styles/layout/Header.scss';

const Header = () => {
	return (
		<div className="header">
			<p className="header__text">All about</p>
			<img className="header__logo" src={Logo} alt="character" />
			<p className="header__text">and friends</p>
		</div>
	);
};
export default Header;
