import '../styles/layout/Footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<p className="footer__name">Ana Montegrifo</p>
			<p className="footer__text">Evaluación final React - Adalab</p>
			<a
				className="footer__link"
				target="_blank"
				rel="noreferrer"
				href="anamontegrifo.github.io/buscador-rick-morty/"
			>
				Repo en Github <i className="fab fa-github-alt"></i>
			</a>
		</div>
	);
};
export default Footer;
