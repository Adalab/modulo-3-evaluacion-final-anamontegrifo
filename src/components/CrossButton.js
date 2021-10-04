import { Link } from 'react-router-dom';

const CrossButton = (props) => {
	return (
		<div className={props.className}>
			<Link to={props.link}>
				<i className="fas fa-times-circle detail__back--cross"></i>
			</Link>
		</div>
	);
};
export default CrossButton;
