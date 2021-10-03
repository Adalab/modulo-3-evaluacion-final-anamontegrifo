import Logo from '../images/red.png';
import '../styles/layout/Header.scss';

const Header = () => {
	return (
		<div className="header">
			<img className="header__logo" src={Logo} alt="character" />
		</div>
	);
};
export default Header;
