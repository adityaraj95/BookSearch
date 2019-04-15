import React from 'react';


const Bookcard = (props) => {
	return (
	<div className="card-container">
		<div className="desc">
		
		<table className="result">
			<tr>
				<th>Title</th>
				<th>Author</th>
				<th>Number of pages</th>
			</tr>
			<tr>
				<td> {props.title} </td>
				<td> {props.author}</td>
				<td> {props.pages}</td>
			</tr>
		</table>
		</div>
	</div>
	)
}

export default Bookcard;
