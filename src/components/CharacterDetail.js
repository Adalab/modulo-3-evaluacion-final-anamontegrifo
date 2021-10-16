import '../styles/layout/CharacterDetail.scss';
import NotFound from './NotFound';
import CrossButton from './CrossButton';

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
