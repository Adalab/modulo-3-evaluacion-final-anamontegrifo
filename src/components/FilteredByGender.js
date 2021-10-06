const FilteredByGender = (props) => {
	return (
		<div>
			<label htmlFor="All">
				<input
					type="radio"
					name={props.name}
					value="All"
					id="All"
					onChange={props.handleSearchGender}
				/>
				All genders
			</label>

			<label htmlFor="Male">
				<input
					type="radio"
					name={props.name}
					value="Male"
					id="Male"
					onChange={props.handleSearchGender}
				/>
				Male
			</label>
			<label htmlFor="Female">
				<input
					type="radio"
					name={props.name}
					value="Female"
					id="Female"
					onChange={props.handleSearchGender}
				/>
				Female
			</label>
			<label htmlFor="unknown">
				<input
					type="radio"
					name={props.name}
					value="unknown"
					id="unknown"
					onChange={props.handleSearchGender}
				/>
				Unknown
			</label>
		</div>
	);
};
export default FilteredByGender;
