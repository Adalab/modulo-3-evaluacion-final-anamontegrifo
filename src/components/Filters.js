import FilteredByName from './FilteredByName';

const Filters = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<FilteredByName
					searchName={props.searchName}
					handleSearch={props.handleSearch}
				/>
			</form>
		</>
	);
};
export default Filters;
