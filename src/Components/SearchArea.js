import React from 'react';

const SearchArea = (props) => {
	return (
	<div className="search-area">
		<br/>
		<form onSubmit={props.searchBook}action="">
				<input placeholder="Enter ISBN" title="Enter ISBN" onChange={props.handleSearch} type="text"/>
				<button type="submit"> Search </button>
		</form>
	</div>
	)
}

export default SearchArea;
