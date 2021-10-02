import FilteredByName from './FilteredByName';

const Filters = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<FilteredByName
					searchName={props.searchName}
					handleSearch={props.handleSearch}
				/>
			</form>
		</div>
	);
};
export default Filters;
