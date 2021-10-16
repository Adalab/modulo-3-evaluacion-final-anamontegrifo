import InputFilter from './InputFilter';
import '../styles/layout/Filters.scss';
import Selectx3Filter from './Selectx3Filter';
import Selectx4Filter from './Selectx4Filter';

const Filters = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<section className="filter">
			<form className="filter__form" onSubmit={handleSubmit}>
				<InputFilter
					inputType="text"
					name="name"
					placeholder="Search here by name!"
					searchWord={props.searchName}
					handleSearchWord={props.handleSearchName}
					handleReset={props.handleResetName}
					icon="fas fa-times-circle filter__inputT--icon"
				/>
				<section className="filter__select">
					<Selectx3Filter
						name="species"
						id="species"
						searchSelect={props.searchSpecies}
						handleSearchSelect={props.handleSearchSpecies}
						option1Value="All"
						option1Text="Species"
						option2Value="Human"
						option2Text="Human"
						option3Value="Alien"
						option3Text="Alien"
					/>
					<Selectx4Filter
						name="gender"
						id="gender"
						searchSelect={props.searchGender}
						handleSearchSelect={props.handleSearchGender}
						option1Value="All"
						option1Text="Gender"
						option2Value="Male"
						option2Text="Male"
						option3Value="Female"
						option3Text="Female"
						option4Value="unknown"
						option4Text="Unknown"
					/>
					<Selectx4Filter
						name="status"
						id="status"
						searchSelect={props.searchStatus}
						handleSearchSelect={props.handleSearchStatus}
						option1Value="All"
						option1Text="Status"
						option2Value="Alive"
						option2Text="Alive"
						option3Value="Dead"
						option3Text="Dead"
						option4Value="unknown"
						option4Text="Unknown"
					/>
				</section>
			</form>
		</section>
	);
};
export default Filters;
