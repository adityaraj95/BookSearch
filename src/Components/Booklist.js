import React from 'react';
import Bookcard from './Bookcard';

const Booklist = (props) => {
	return (
	<div className="list">
		{	
		
		
		props.books.slice(0,1).map((book,i) => { //Mapping the Data from JSON response to variables
			
			return <Bookcard
							
						key={i}
						title={book.volumeInfo.title}
						author={book.volumeInfo.authors}
						pages={book.volumeInfo.pageCount}
						readFlag={book.volumeInfo.checked}
						handleSubmit={props.handleSubmit}
					
					/>
			})
		}
	</div>
	)
}

export default Booklist;
