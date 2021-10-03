import FilteredByName from './FilteredByName';
import FilteredBySpecies from './FilteredBySpecies';

import '../styles/layout/Filters.scss';

const Filters = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<section className="filter">
			<form onSubmit={handleSubmit}>
				<FilteredByName
					searchName={props.searchName}
					handleSearchName={props.handleSearchName}
				/>
				<FilteredBySpecies
					searchSpecies={props.searchSpecies}
					handleSearchSpecies={props.handleSearchSpecies}
				/>
			</form>
		</section>
	);
};
export default Filters;
