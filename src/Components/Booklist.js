import React from 'react';
import Bookcard from './Bookcard';

const Booklist = (props) => {
	return (
	<div className="list">
		{	
			
			props.books.map((book,i) => {
					return <Bookcard
						key={i}	
						image={book.volumeInfo.imageLinks.thumbnail}
						pages={book.volumeInfo.pageCount}
						author={book.volumeInfo.authors}
						title={book.volumeInfo.title}
					/>
			})
		}
	</div>
	)
}

export default Booklist;
