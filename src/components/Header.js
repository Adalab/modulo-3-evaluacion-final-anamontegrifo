import Logo from '../images/red.png';
import Arrow from '../images/ico-scroll-down.svg';
import '../styles/layout/Header.scss';

const Header = () => {
	return (
		<div className="header">
			<div>
				<p className="header__text">All about</p>
				<img className="header__logo" src={Logo} alt="character" />
				<p className="header__text">and friends</p>
			</div>
			<div header__link>
				<a href="#list">
					<img src={Arrow} alt="arrow" />
				</a>
			</div>
		</div>
	);
};
export default Header;
