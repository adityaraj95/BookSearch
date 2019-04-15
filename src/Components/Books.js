import React,  { Component } from 'react';
import SearchArea from './SearchArea'
import request from 'superagent';
import Booklist from './Booklist';


class Books extends Component {
	constructor(props){
		super(props);
		this.state= {
				books: [],
				searchField:'' ,
				searchFieldError: '',
		}
	}
	
	searchBook = (e) =>{
		e.preventDefault();
		
		request
			   .get("https://www.googleapis.com/books/v1/volumes")
			   .query({ q: this.state.searchField})
			   .then((data) => {
				   console.log(data)
				   this.setState({ books: [...data.body.items]})
			   })
	}	
	
	handleSearch =(e)=>{
		
		
		this.setState({ searchField: e.target.value })
		
	}
    render() {
		return (
		<div>
		<SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} 
		/>
			<Booklist books={this.state.books}/> 
		</div>
    );
  }
}

export default Books;
