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
				<td> <input type="checkbox" checked={!!props.readFlag}/> </td>
				<td> <input type="textbox" /> </td>
				<td> </td>
			</tr>
			</tbody>
		</table>
		<button type="submit" onClick={props.handleSubmit}> Submit and Search Again </button> 
		</div>
	</div>
	)
}

export default Bookcard;
