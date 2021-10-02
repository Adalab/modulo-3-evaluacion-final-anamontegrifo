import Logo from '../images/purple.png';
import '../styles/layout/Header.scss';

const Header = () => {
	return (
		<div className="header">
			<div>
				<p className="header__text">All about</p>
				<img className="header__logo" src={Logo} alt="character" />
				<p className="header__text">and friends</p>
			</div>
			<div className="header__link">
				<a href="#list">
					<i class="header__arrow fas fa-angle-down"></i>
				</a>
			</div>
		</div>
	);
};
export default Header;
