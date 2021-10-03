import Logo from '../images/red.png';
import RoundButton from './RoundButton';
import '../styles/layout/Hero.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<div className="hero">
			<div>
				<p className="hero__text">All about</p>
				<img className="hero__logo" src={Logo} alt="character" />
			</div>
			<Link to="/characters">
				<RoundButton className="hero__button" text="Start!" />
			</Link>
		</div>
	);
};
export default Hero;
