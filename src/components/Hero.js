import Logo from '../images/red.png';
import '../styles/layout/Hero.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<div className="hero">
			<div>
				<p className="hero__text">All about</p>
				<img className="hero__logo" src={Logo} alt="character" />
				<p className="hero__text">and friends</p>
			</div>
			<Link to="/characters">
				<button className="hero__button">Start!</button>
			</Link>
		</div>
	);
};
export default Hero;
