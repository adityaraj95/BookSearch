import React from 'react';

const SearchArea = (props) => {
	return (
	<div className="search-area">
		<br/>
		<form onSubmit={props.searchBook}action="">
				<input className="searchbox" name="isbnValue" placeholder="Enter ISBN" title="Enter ISBN" onChange={props.handleSearch}/>
				<button type="submit"> Search </button>
				<div className="errormessage hide">Enter valid ISBN</div>
		</form>
	</div>
	)
}

export default SearchArea;
