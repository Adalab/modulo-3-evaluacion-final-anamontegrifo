import Logo from '../images/orange-logo.png';
import '../styles/layout/Header.scss';

const Header = () => {
	return (
		<div className="header">
			<img className="header__logo" src={Logo} alt="character" />
		</div>
	);
};
export default Header;
