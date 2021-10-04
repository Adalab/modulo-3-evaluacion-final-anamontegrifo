import '../styles/layout/CharacterDetail.scss';
import CharacterNotFound from './CharacterNotFound';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
	console.log(props.selectedCharacter);
	if (props.selectedCharacter === undefined) {
		return <CharacterNotFound />;
	} else {
		let episodes =
			props.selectedCharacter.episode.length === 1 ? 'episode' : 'episodes';
		let statusIcon = '';
		if (props.selectedCharacter.status === 'Dead') {
			statusIcon = 'fas fa-cross detail__icon';
		} else if (props.selectedCharacter.status === 'Alive') {
			statusIcon = 'fas fa-heart detail__icon';
		} else {
			statusIcon = 'fas fa-question-circle detail__icon';
		}

		return (
			<section className="detail">
				<div className="detail__card">
					<div className="detail__back">
						<Link to="/characters">
							<i className="fas fa-times-circle detail__back--cross"></i>
						</Link>
					</div>

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

					<div className="detail__icon--container">
						<p>
							<i className={statusIcon}></i>
						</p>
						<p className="detail__text">{`Status: ${props.selectedCharacter.status}`}</p>
					</div>
				</div>
			</section>
		);
	}
};

export default CharacterDetail;
