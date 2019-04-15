import React from 'react';


const Bookcard = (props) => {
	return (
	<div className="card-container">
		<img src={props.image} alt=""/>
		
		<div className="desc">
			<h2>Title: {props.title}</h2>
			<h2>Author: {props.author}</h2>
			<p>Number Of Pages: {props.pages}</p>
		</div>
	</div>
	)
}

export default Bookcard;
