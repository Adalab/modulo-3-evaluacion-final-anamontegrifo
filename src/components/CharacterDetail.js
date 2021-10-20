import PropTypes from 'prop-types';
import '../styles/layout/CharacterDetail.scss';
import NotFound from './NotFound';
import CrossButton from './CrossButton';
import Human from '../images/human-mind.png';
import Alien from '../images/ufo.png';
import Female from '../images/female.png';
import Male from '../images/male.png';
import Unknown from '../images/unknown.png';
import Alive from '../images/alive.png';
import Dead from '../images/dead.png';

const CharacterDetail = (props) => {
	if (props.selectedCharacter === undefined) {
		return (
			<NotFound
				btnText="Back"
				titleText="Try again, this character does not exist!"
				link="/characters"
			/>
		);
	} else {
		let episodes =
			props.selectedCharacter.episode.length === 1 ? 'episode' : 'episodes';

		let speciesIcon =
			props.selectedCharacter.species === 'Alien' ? Alien : Human;

		let genderIcon;
		if (props.selectedCharacter.gender === 'Female') {
			genderIcon = Female;
		} else if (props.selectedCharacter.gender === 'Male') {
			genderIcon = Male;
		} else {
			genderIcon = Unknown;
		}

		let statusIcon;
		if (props.selectedCharacter.status === 'Alive') {
			statusIcon = Alive;
		} else if (props.selectedCharacter.status === 'Dead') {
			statusIcon = Dead;
		} else {
			statusIcon = Unknown;
		}

		return (
			<section className="detail">
				<div className="detail__card">
					<CrossButton className="detail__back" link="/characters" />
					<img
						className="detail__image"
						src={props.selectedCharacter.image}
						alt="profile"
					/>
					<p className="detail__text">
						Hi, my name is <span>{props.selectedCharacter.name}</span>. I'm just
						an ordinary <span>{props.selectedCharacter.species}</span>. My
						origin is <span>{props.selectedCharacter.origin}</span>. I am a
						celebrity because I appeared in
						<span>{` ${props.selectedCharacter.episode.length} ${episodes}`}</span>{' '}
						of Rick & Morty.
					</p>

					<section className="detail__circles">
						<div className="detail__select">
							<img
								className="detail__select--icon"
								src={speciesIcon}
								alt="species"
							/>
						</div>
						<div className="detail__select">
							<img
								className="detail__select--icon"
								src={genderIcon}
								alt="gender"
							/>
						</div>
						<div className="detail__select">
							<img
								className="detail__select--icon"
								src={statusIcon}
								alt="gender"
							/>
						</div>
					</section>
				</div>
			</section>
		);
	}
};

CharacterDetail.propTypes = {
	selectedCharacter: PropTypes.object,
};

export default CharacterDetail;
