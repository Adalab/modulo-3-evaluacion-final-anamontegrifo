import FilteredByName from './FilteredByName';
import FilteredBySpecies from './FilteredBySpecies';
import '../styles/layout/Filters.scss';

const Filters = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<section className="filter">
			<form className="filter__form" onSubmit={handleSubmit}>
				<FilteredByName
					searchName={props.searchName}
					handleSearchName={props.handleSearchName}
					handleResetName={props.handleResetName}
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
