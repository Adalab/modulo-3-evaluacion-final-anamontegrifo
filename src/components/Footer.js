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
				href="https://github.com/Adalab/modulo-3-evaluacion-final-anamontegrifo"
			>
				Repo en Github <i className="fab fa-github-alt"></i>
			</a>
		</div>
	);
};
export default Footer;
