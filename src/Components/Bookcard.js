import React from 'react';


const Bookcard = (props) => {
	return (
	<div className="card-container">
		<div className="desc">
		
		<table className="result">
			<tbody>
			<tr>
				<th>Title</th>
				<th>Author</th>
				<th>Number of pages</th>
				<th> Have I read it ? </th>
				<th> Comments </th>
				<th> </th>
			</tr>
			<tr>
				<td> {props.title} </td>
				<td> {props.author}</td>
				<td> {props.pages}</td>
				<td> <input type="checkbox" /> </td>
				<td> <input type="textbox" /> </td>
				<td> </td>
			</tr>
			</tbody>
		</table>
		</div>
	</div>
	)
}

export default Bookcard;
