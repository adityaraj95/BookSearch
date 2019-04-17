import React,  { Component } from 'react';
import SearchArea from './SearchArea'
import request from 'superagent';
import Booklist from './Booklist';


class Books extends Component {
	

	constructor(props){ 		//Constructor
		super(props);
		this.state= {
				books: [],
				localbooks: [],
				searchField:'' ,
				localFound: false,
		}
	}
	
	searchBook = (e) =>{
		e.preventDefault();
		var isbnValue = e.target[0].value;
		fetch('http://localhost:8080/rest/books/all')
			.then(res => res.json())
			.then(json=>{
				var filteredJson = json.filter(book => book.isbn == isbnValue);		// getting Data from Local DB using ISBN
				if(filteredJson.length > 0) {
					var bookObj = {};					//Matching with the structure of Google API response
					bookObj.volumeInfo = {};
					bookObj.volumeInfo.title = filteredJson[0].title;
					bookObj.volumeInfo.authors = filteredJson[0].author;
					bookObj.volumeInfo.pageCount = filteredJson[0].pages;
					bookObj.volumeInfo.checked = true;		//Indicate that the user has read the bold
					this.setState({	books: [bookObj] });
				} else {			// Call Google API if book not found in LocalDB
					request
					   .get("https://www.googleapis.com/books/v1/volumes")
					   .query({ "q": this.state.searchField})		//ISBN Query to search
					   .then((data) => {
						   console.log(data)
						   this.setState({ books: [...data.body.items]})
					});
				}
			});
	}
	
	
	handleSearch =(e)=>{		//Defining Validation
		
		e.preventDefault();
		var isValidISBN = e.target.value.match(/[9]+[0-9]{12}/g);
		if(isValidISBN && e.target.value.length === 13) {
			e.target.classList.remove("error");
			e.target.nextElementSibling.nextElementSibling.classList.add("hide");
			this.setState({ searchField: e.target.value });
		} else {
			e.target.classList.add("error");
			e.target.nextElementSibling.nextElementSibling.classList.remove("hide");
		}
		
	}
	handleSubmit =(e)=>{		//Define what to do on submit
			e.preventDefault();
			window.location.reload();
		}
    render() {			//Render the Page
		return (
		<div>
			<SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
			<Booklist books={this.state.books} handleSubmit={this.handleSubmit}/> 
			<br/>				
		</div>
    );
  }
}

export default Books;
