const Filters = (props) => {
	return (
		<div>
			<form action="">
				<input
					type="text"
					name="name"
					value={props.searchName}
					onChange={props.handleSearch}
				/>
			</form>
		</div>
	);
};
export default Filters;
