import FilteredByName from './FilteredByName';
import FilteredBySpecies from './FilteredBySpecies';
import '../styles/layout/Filters.scss';
import FilteredByGender from './FilteredByGender';

const Filters = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<section className="filter">
			<form className="filter__form" onSubmit={handleSubmit}>
				<FilteredByName
					inputType="text"
					name="name"
					searchName={props.searchName}
					handleSearchName={props.handleSearchName}
					handleResetName={props.handleResetName}
				/>
				<FilteredBySpecies
					name="species"
					searchSpecies={props.searchSpecies}
					handleSearchSpecies={props.handleSearchSpecies}
				/>
				<FilteredByGender
					name="gender"
					searchGender={props.searchGender}
					handleSearchGender={props.handleSearchGender}
				/>
			</form>
		</section>
	);
};
export default Filters;
